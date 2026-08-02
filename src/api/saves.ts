import { apiFetch } from './client'
import type { SaveData, SlotSummary } from '../engine/saveTypes'

export interface SaveDetail {
  slot: number
  payload: SaveData
  updatedAt: number
}

export function listSaves(token: string) {
  return apiFetch<SlotSummary[]>('/saves', { token })
}

export function getSave(token: string, slot: number) {
  return apiFetch<SaveDetail>(`/saves/${slot}`, { token })
}

export function putSave(token: string, slot: number, payload: SaveData) {
  return apiFetch<SaveDetail>(`/saves/${slot}`, {
    method: 'PUT',
    token,
    body: JSON.stringify({ payload }),
  })
}

export function deleteSave(token: string, slot: number) {
  return apiFetch<void>(`/saves/${slot}`, {
    method: 'DELETE',
    token,
  })
}
