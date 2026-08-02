import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import * as authApi from '../api/auth'
import { ApiError } from '../api/client'
import { AUTH_STORAGE_KEY, AUTH_USER_KEY } from '../engine/saveTypes'

export type PlayMode = 'guest' | 'account'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem(AUTH_STORAGE_KEY))
  const username = ref<string | null>(localStorage.getItem(AUTH_USER_KEY))
  const playMode = ref<PlayMode>(token.value ? 'account' : 'guest')
  const busy = ref(false)
  const error = ref<string | null>(null)

  const isLoggedIn = computed(() => !!token.value && playMode.value === 'account')

  function persist() {
    if (token.value) localStorage.setItem(AUTH_STORAGE_KEY, token.value)
    else localStorage.removeItem(AUTH_STORAGE_KEY)
    if (username.value) localStorage.setItem(AUTH_USER_KEY, username.value)
    else localStorage.removeItem(AUTH_USER_KEY)
  }

  function applyAuth(res: authApi.AuthResponse) {
    token.value = res.token
    username.value = res.username
    playMode.value = 'account'
    error.value = null
    persist()
  }

  async function register(name: string, password: string) {
    busy.value = true
    error.value = null
    try {
      const res = await authApi.register(name, password)
      applyAuth(res)
      return true
    } catch (e) {
      error.value = e instanceof ApiError ? e.message : '注册失败'
      return false
    } finally {
      busy.value = false
    }
  }

  async function login(name: string, password: string) {
    busy.value = true
    error.value = null
    try {
      const res = await authApi.login(name, password)
      applyAuth(res)
      return true
    } catch (e) {
      error.value = e instanceof ApiError ? e.message : '登录失败'
      return false
    } finally {
      busy.value = false
    }
  }

  function continueAsGuest() {
    playMode.value = 'guest'
    error.value = null
  }

  function logout() {
    token.value = null
    username.value = null
    playMode.value = 'guest'
    persist()
  }

  async function refreshMe() {
    if (!token.value) return false
    try {
      const me = await authApi.fetchMe(token.value)
      username.value = me.username
      playMode.value = 'account'
      persist()
      return true
    } catch {
      logout()
      return false
    }
  }

  return {
    token,
    username,
    playMode,
    busy,
    error,
    isLoggedIn,
    register,
    login,
    continueAsGuest,
    logout,
    refreshMe,
  }
})
