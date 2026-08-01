import fs from 'fs'
import path from 'path'

const dir = path.resolve('src/data/story/wantang')
const files = fs
  .readdirSync(dir)
  .filter((f) => /^ch\d+\.ts$/.test(f) || f === 'endings.ts')
  .sort()

const stats = {
  smile2laugh: 0,
  hurt2teary: 0,
  soft2tired: 0,
  soft2surprised: 0,
  default2book: 0,
  tense2crossed: 0,
  tense2cold: 0,
}

let smileI = 0
let hurtI = 0
let softI = 0
let defaultI = 0
let tenseI = 0

for (const file of files) {
  let s = fs.readFileSync(path.join(dir, file), 'utf8')

  // smile leftovers → laugh every other
  s = s.replace(/expression: 'smile'/g, () => {
    smileI++
    if (smileI % 2 === 1) {
      stats.smile2laugh++
      return "expression: 'laugh'"
    }
    return "expression: 'smile'"
  })

  s = s.replace(/expression: 'hurt'/g, () => {
    hurtI++
    if (hurtI % 2 === 1) {
      stats.hurt2teary++
      return "expression: 'teary'"
    }
    return "expression: 'hurt'"
  })

  s = s.replace(/expression: 'soft'/g, () => {
    softI++
    if (softI % 4 === 0) {
      stats.soft2tired++
      return "expression: 'tired'"
    }
    if (softI % 4 === 2) {
      stats.soft2surprised++
      return "expression: 'surprised'"
    }
    return "expression: 'soft'"
  })

  s = s.replace(/expression: 'default'/g, () => {
    defaultI++
    if (defaultI % 5 === 0) {
      stats.default2book++
      return "expression: 'book'"
    }
    return "expression: 'default'"
  })

  // remaining tense (not yet crossed/cold) → more pose variety
  s = s.replace(/expression: 'tense'/g, () => {
    tenseI++
    if (tenseI % 2 === 0) {
      stats.tense2crossed++
      return "expression: 'crossed'"
    }
    stats.tense2cold++
    return "expression: 'cold'"
  })

  fs.writeFileSync(path.join(dir, file), s)
}

console.log(stats)
