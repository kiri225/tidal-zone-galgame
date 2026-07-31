// Build index.ts that includes chapters 1..N (handwritten) and falls back to generated script for the rest.
// Usage: node scripts/build-wantang-index.mjs 15

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '../src/data/story/wantang')
const n = Math.max(1, Math.min(50, Number(process.argv[2] || 50)))

const titles = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'chapter-titles.json'), 'utf8'),
)

let imports = `import type { DialogueNode } from '../../../engine/types'\n`
imports += `import { wantangScript as generated } from './script'\n`
for (let i = 1; i <= n; i++) {
  const id = String(i).padStart(2, '0')
  imports += `import { chapter${id} } from './ch${id}'\n`
}
if (n === 50) imports += `import { endingNodes } from './endings'\n`

let body = `\nconst routeStart = generated.find((n) => n.id === 'route-start')\nif (!routeStart) throw new Error('missing route-start')\n\n`
body += `export const wantangScript: DialogueNode[] = [\n`
body += `  {\n    ...routeStart,\n    text: '【林晚棠线】五十章。亲密度影响 CG、雨夜与结局。\\n从第1章起，对话与场景将按小说密度展开。',\n  },\n`

for (let i = 1; i <= n; i++) {
  body += `  ...chapter${String(i).padStart(2, '0')},\n`
}

if (n < 50) {
  const next = `ch${String(n + 1).padStart(2, '0')}`
  body += `  // 未替换章节暂用生成稿\n`
  body += `  ...generated.slice(generated.findIndex((x) => x.id === '${next}')),\n`
} else {
  body += `  ...endingNodes,\n`
}

body += `]\n\nexport const WANTANG_CHAPTER_COUNT = 50\n`

fs.writeFileSync(path.join(root, 'index.ts'), imports + body)
console.log('index through chapter', n, titles[String(n)] || '')
