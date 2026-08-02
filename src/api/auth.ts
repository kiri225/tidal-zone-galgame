import { apiFetch } from './client'

export interface AuthResponse {
  token: string
  username: string
  userId: number
}

export interface MeResponse {
  userId: number
  username: string
}

export function register(username: string, password: string) {
  return apiFetch<AuthResponse>('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  })
}

export function login(username: string, password: string) {
  return apiFetch<AuthResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  })
}

export function fetchMe(token: string) {
  return apiFetch<MeResponse>('/auth/me', { token })
}
