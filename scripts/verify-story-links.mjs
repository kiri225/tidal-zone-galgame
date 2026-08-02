import fs from 'fs'
import path from 'path'

function checkDir(label, dir) {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.ts'))
  const all = files.map((f) => fs.readFileSync(path.join(dir, f), 'utf8')).join('\n')
  const ids = new Set()
  for (const m of all.matchAll(/id:\s*'([^']+)'/g)) ids.add(m[1])
  const targets = new Set()
  for (const m of all.matchAll(/next:\s*'([^']+)'/g)) targets.add(m[1])
  for (const m of all.matchAll(/whenMet:\s*'([^']+)'/g)) targets.add(m[1])
  for (const m of all.matchAll(/whenNot:\s*'([^']+)'/g)) targets.add(m[1])
  for (const m of all.matchAll(/whenTrue:\s*'([^']+)'/g)) targets.add(m[1])
  for (const m of all.matchAll(/whenFalse:\s*'([^']+)'/g)) targets.add(m[1])
  const special = new Set(['story-select', '__ending__'])
  const missing = [...targets].filter((t) => !special.has(t) && !ids.has(t))
  console.log(label, 'ids', ids.size, 'missing', missing)
}

checkDir('qinglan', 'src/data/story/qinglan')
checkDir('wantang', 'src/data/story/wantang')
checkDir('qinghe', 'src/data/story/qinghe')

const common = fs.readFileSync('src/data/story/common.ts', 'utf8')
console.log('common has 林晚棠 speaker', /speaker:\s*'林晚棠'/.test(common))
console.log('common has wantang sprite', /sprite:\s*'wantang'/.test(common))

for (const n of [1, 2, 8, 12, 15, 20, 35, 44]) {
  const pad = String(n).padStart(2, '0')
  const lines = fs.readFileSync(`src/data/story/qinglan/ch${pad}.ts`, 'utf8').split(/\n/).length
  console.log(`ch${pad} lines`, lines)
}
