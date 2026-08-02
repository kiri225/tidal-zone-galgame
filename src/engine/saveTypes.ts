/** 可序列化的游戏进度（云端 / 本地共用） */
export interface SaveData {
  version: 1
  routeId: string
  nodeId: string
  affection: number
  flags: string[]
  history: string[]
  endingId: 'true' | 'good' | 'bittersweet' | null
  unlockedCgs: string[]
  screen: 'title' | 'story-select' | 'game' | 'ending' | 'gallery'
  chapter: number
  chapterTitle: string
  updatedAt: number
}

export interface SlotSummary {
  slot: number
  empty: boolean
  routeId: string | null
  chapter: number | null
  summary: string | null
  updatedAt: number | null
}

export const SLOT_COUNT = 3
export const SAVE_STORAGE_KEY = 'tidal-game-saves'
export const AUTH_STORAGE_KEY = 'tidal-auth-token'
export const AUTH_USER_KEY = 'tidal-auth-user'

export function routeLabel(routeId: string | null | undefined): string {
  switch (routeId) {
    case 'common':
      return '序章'
    case 'wantang':
      return '林晚棠线'
    case 'qinglan':
      return '苏晴岚线'
    case 'qinghe':
      return '顾清禾线'
    default:
      return routeId ? String(routeId) : '未知'
  }
}

export function formatSaveTime(ts: number | null | undefined): string {
  if (!ts) return ''
  const d = new Date(ts)
  const p = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`
}
