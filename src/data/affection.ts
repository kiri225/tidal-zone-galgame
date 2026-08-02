/** 晚棠线亲密度：0–100% 设计 */

export const AFFECTION_MAX = 100
export const AFFECTION_MIN = 0

/** 旧 0–20 标尺 ×5 → 百分制 */
export const AFFECTION_SCALE = 5

/** CG / 剧情分支门槛（百分制） */
export const AffThreshold = {
  reunion: 15, // 原 3
  poem: 20, // 原 4
  umbrella: 25, // 原 5
  nighttalk: 30, // 原 6
  market: 35, // 原 7
  almostkiss: 40, // 原 8
  reconcile: 45, // 原 9
  rainnight: 50, // 原 10
  trueGate: 60, // 原 12 · True / 联名分支
  intertidal: 70, // 原 14
  goodEnd: 35, // 原 7
  trueEnd: 60, // 原 12
} as const

export function clampAffection(value: number): number {
  return Math.min(AFFECTION_MAX, Math.max(AFFECTION_MIN, value))
}

export function affectionPercent(value: number): number {
  return Math.round((clampAffection(value) / AFFECTION_MAX) * 100)
}

export function formatAffection(value: number): string {
  return `${affectionPercent(value)}%`
}
