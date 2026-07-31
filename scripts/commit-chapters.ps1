# Sequential Chinese commits for Wantang chapters
param([switch]$Push)

$ErrorActionPreference = "Stop"
$titles = Get-Content "$PSScriptRoot/chapter-titles.json" -Raw | ConvertFrom-Json
Set-Location "$PSScriptRoot/.."

$backup = Join-Path $env:TEMP "wantang-chapters-backup"
New-Item -ItemType Directory -Force -Path $backup | Out-Null

2..50 | ForEach-Object {
  $id = '{0:D2}' -f $_
  $src = "src/data/story/wantang/ch$id.ts"
  if (Test-Path $src) {
    Copy-Item $src (Join-Path $backup "ch$id.ts") -Force
    Remove-Item $src -Force
  }
}

node scripts/build-wantang-index.mjs 1 | Out-Null

git add -A
# Ensure removed chapters are not required
git add src/data/story/wantang/ch01.ts src/data/story/wantang/index.ts

$t1 = $titles.1
git commit -m "feat(wantang): 完成第1章《$t1》并搭建五十章框架" -m "- 小说级第1章手写模块`n- 引擎章节 HUD / 好感 CG / 中文提交 skill`n- 透明立绘与潮声场景资源"
if ($LASTEXITCODE -ne 0) { throw "commit ch1 failed" }
if ($Push) { git push -u origin HEAD }

2..50 | ForEach-Object {
  $i = $_
  $id = '{0:D2}' -f $i
  $title = $titles.$i
  Copy-Item (Join-Path $backup "ch$id.ts") "src/data/story/wantang/ch$id.ts" -Force
  node scripts/build-wantang-index.mjs $i | Out-Null
  git add "src/data/story/wantang/ch$id.ts" src/data/story/wantang/index.ts
  if ($i -eq 50) {
    git add src/data/story/wantang/endings.ts src/data/story/wantang/CHAPTERS.md
  }
  git commit -m "feat(wantang): 完成第${i}章《${title}》" -m "- 小说级对话与场景描写`n- 出口衔接到下一章"
  if ($LASTEXITCODE -ne 0) { throw "commit ch$i failed" }
  if ($Push) { git push }
  Write-Host "OK chapter $i $title"
}

Write-Host "DONE all chapters"
