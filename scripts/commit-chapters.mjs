/**
 * Sequential Chinese commits for wantang chapters 1..50
 * Usage: node scripts/commit-chapters.mjs [--push]
 */
import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const push = process.argv.includes('--push')
const titles = JSON.parse(fs.readFileSync(path.join(__dirname, 'chapter-titles.json'), 'utf8'))
const backup = path.join(process.env.TEMP || '/tmp', 'wantang-chapters-backup')
fs.mkdirSync(backup, { recursive: true })

function sh(cmd) {
  console.log('>', cmd)
  execSync(cmd, { cwd: root, stdio: 'inherit', shell: true })
}

function commit(subject, body) {
  const msg = body ? `${subject}\n\n${body}` : subject
  const tmp = path.join(backup, 'COMMIT_MSG.txt')
  fs.writeFileSync(tmp, msg, 'utf8')
  sh(`git commit -F "${tmp}"`)
}

// stash ch02-50 aside
for (let i = 2; i <= 50; i++) {
  const id = String(i).padStart(2, '0')
  const src = path.join(root, `src/data/story/wantang/ch${id}.ts`)
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(backup, `ch${id}.ts`))
    fs.unlinkSync(src)
  }
}

sh('node scripts/build-wantang-index.mjs 1')
sh('git add -A')
commit(
  `feat(wantang): 完成第1章《${titles['1']}》并搭建五十章框架`,
  '- 小说级第1章手写模块\n- 引擎章节 HUD / 好感 CG / 中文提交 skill\n- 透明立绘与潮声场景资源',
)
if (push) sh('git push -u origin HEAD')

for (let i = 2; i <= 50; i++) {
  const id = String(i).padStart(2, '0')
  fs.copyFileSync(path.join(backup, `ch${id}.ts`), path.join(root, `src/data/story/wantang/ch${id}.ts`))
  sh(`node scripts/build-wantang-index.mjs ${i}`)
  sh(`git add src/data/story/wantang/ch${id}.ts src/data/story/wantang/index.ts`)
  if (i === 50) {
    sh('git add src/data/story/wantang/endings.ts src/data/story/wantang/CHAPTERS.md')
  }
  commit(
    `feat(wantang): 完成第${i}章《${titles[String(i)]}》`,
    '- 小说级对话与场景描写\n- 出口衔接到下一章',
  )
  if (push) sh('git push')
  console.log('OK', i, titles[String(i)])
}

console.log('DONE')
