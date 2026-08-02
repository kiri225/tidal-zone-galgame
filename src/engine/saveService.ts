import * as saveApi from '../api/saves'
import type { SaveData, SlotSummary } from './saveTypes'
import { routeLabel, SAVE_STORAGE_KEY, SLOT_COUNT } from './saveTypes'

interface LocalBundle {
  slots: (SaveData | null)[]
  /** 上次读写的槽，用于自动存 */
  lastSlot: number | null
}

function emptyBundle(): LocalBundle {
  return { slots: [null, null, null], lastSlot: null }
}

function readBundle(): LocalBundle {
  try {
    const raw = localStorage.getItem(SAVE_STORAGE_KEY)
    if (!raw) return emptyBundle()
    const parsed = JSON.parse(raw) as Partial<LocalBundle>
    const slots = Array.from({ length: SLOT_COUNT }, (_, i) => parsed.slots?.[i] ?? null)
    return { slots, lastSlot: parsed.lastSlot ?? null }
  } catch {
    return emptyBundle()
  }
}

function writeBundle(bundle: LocalBundle) {
  localStorage.setItem(SAVE_STORAGE_KEY, JSON.stringify(bundle))
}

export function listLocalSlots(): SlotSummary[] {
  const bundle = readBundle()
  return bundle.slots.map((s, slot) => {
    if (!s) {
      return { slot, empty: true, routeId: null, chapter: null, summary: null, updatedAt: null }
    }
    return {
      slot,
      empty: false,
      routeId: s.routeId,
      chapter: s.chapter,
      summary: summarize(s),
      updatedAt: s.updatedAt,
    }
  })
}

function summarize(s: SaveData): string {
  const route = routeLabel(s.routeId)
  if (s.screen === 'ending') {
    const end =
      s.endingId === 'true' ? 'True' : s.endingId === 'good' ? 'Good' : 'Bittersweet'
    return `${route} · 结局 ${end}`
  }
  if (s.screen === 'story-select') return `${route} · 选线`
  if (s.routeId === 'common') return s.chapter > 0 ? `序章 · 第${s.chapter}章` : '序章'
  if (s.chapter > 0) return `${route} · 第${s.chapter}章`
  return route
}

export function loadLocalSlot(slot: number): SaveData | null {
  if (slot < 0 || slot >= SLOT_COUNT) return null
  return readBundle().slots[slot]
}

export function saveLocalSlot(slot: number, data: SaveData): void {
  if (slot < 0 || slot >= SLOT_COUNT) return
  const bundle = readBundle()
  bundle.slots[slot] = data
  bundle.lastSlot = slot
  writeBundle(bundle)
}

export function deleteLocalSlot(slot: number): void {
  if (slot < 0 || slot >= SLOT_COUNT) return
  const bundle = readBundle()
  bundle.slots[slot] = null
  if (bundle.lastSlot === slot) bundle.lastSlot = null
  writeBundle(bundle)
}

export function getLastSlot(): number | null {
  return readBundle().lastSlot
}

export function findNewestLocal(): { slot: number; data: SaveData } | null {
  const bundle = readBundle()
  let best: { slot: number; data: SaveData } | null = null
  bundle.slots.forEach((data, slot) => {
    if (!data) return
    if (!best || data.updatedAt > best.data.updatedAt) best = { slot, data }
  })
  return best
}

/** 登录后：本地与云端按 updatedAt 取较新 */
export async function mergeCloudSlots(token: string): Promise<SlotSummary[]> {
  const cloud = await saveApi.listSaves(token)
  const local = listLocalSlots()
  const merged: SlotSummary[] = []

  for (let slot = 0; slot < SLOT_COUNT; slot++) {
    const c = cloud.find((x) => x.slot === slot) ?? {
      slot,
      empty: true,
      routeId: null,
      chapter: null,
      summary: null,
      updatedAt: null,
    }
    const l = local[slot]

    if (c.empty && l.empty) {
      merged.push(c)
      continue
    }
    if (c.empty && !l.empty) {
      const data = loadLocalSlot(slot)!
      await saveApi.putSave(token, slot, data)
      merged.push({
        slot,
        empty: false,
        routeId: data.routeId,
        chapter: data.chapter,
        summary: summarize(data),
        updatedAt: data.updatedAt,
      })
      continue
    }
    if (!c.empty && l.empty) {
      const detail = await saveApi.getSave(token, slot)
      saveLocalSlot(slot, detail.payload)
      merged.push(c)
      continue
    }
    // 两边都有：较新胜出
    const localTs = l.updatedAt ?? 0
    const cloudTs = c.updatedAt ?? 0
    if (localTs > cloudTs) {
      const data = loadLocalSlot(slot)!
      await saveApi.putSave(token, slot, data)
      merged.push({
        slot,
        empty: false,
        routeId: data.routeId,
        chapter: data.chapter,
        summary: summarize(data),
        updatedAt: data.updatedAt,
      })
    } else {
      const detail = await saveApi.getSave(token, slot)
      saveLocalSlot(slot, detail.payload)
      merged.push(c)
    }
  }
  return merged
}

export async function listSlots(token: string | null): Promise<SlotSummary[]> {
  if (!token) return listLocalSlots()
  try {
    return await mergeCloudSlots(token)
  } catch {
    return listLocalSlots()
  }
}

export async function writeSlot(
  token: string | null,
  slot: number,
  data: SaveData,
): Promise<void> {
  saveLocalSlot(slot, data)
  if (token) {
    try {
      await saveApi.putSave(token, slot, data)
    } catch {
      /* 离线时仍保留本地 */
    }
  }
}

export async function readSlot(
  token: string | null,
  slot: number,
): Promise<SaveData | null> {
  const local = loadLocalSlot(slot)
  if (!token) return local

  try {
    const detail = await saveApi.getSave(token, slot)
    const cloud = detail.payload
    const localTs = local?.updatedAt ?? 0
    const cloudTs = cloud.updatedAt ?? detail.updatedAt ?? 0
    // 同槽取较新的一份，避免云端旧档覆盖本机刚存的路线进度
    if (local && localTs > cloudTs) {
      try {
        await saveApi.putSave(token, slot, local)
      } catch {
        /* keep local */
      }
      return local
    }
    saveLocalSlot(slot, cloud)
    return cloud
  } catch {
    return local
  }
}

export async function removeSlot(token: string | null, slot: number): Promise<void> {
  deleteLocalSlot(slot)
  if (token) {
    try {
      await saveApi.deleteSave(token, slot)
    } catch {
      /* ignore */
    }
  }
}
