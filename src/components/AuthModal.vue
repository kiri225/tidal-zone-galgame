<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../stores/authStore'

const emit = defineEmits<{
  close: []
  loggedIn: []
  guest: []
}>()

const auth = useAuthStore()
const mode = ref<'login' | 'register'>('login')
const username = ref('')
const password = ref('')

async function submit() {
  const ok =
    mode.value === 'login'
      ? await auth.login(username.value.trim(), password.value)
      : await auth.register(username.value.trim(), password.value)
  if (ok) emit('loggedIn')
}

function guest() {
  auth.continueAsGuest()
  emit('guest')
}
</script>

<template>
  <div class="backdrop" @click.self="emit('close')">
    <div class="panel" role="dialog" aria-modal="true">
      <h2>{{ mode === 'login' ? '账号登录' : '注册账号' }}</h2>
      <p class="desc">登录后进度同步到云端；也可游客游玩（仅本机存档）</p>

      <label>
        用户名
        <input
          v-model="username"
          autocomplete="username"
          maxlength="24"
          placeholder="3–24 字，中英文/数字"
        />
      </label>
      <label>
        密码
        <input
          v-model="password"
          type="password"
          :autocomplete="mode === 'login' ? 'current-password' : 'new-password'"
          maxlength="64"
          placeholder="至少 6 位"
          @keyup.enter="submit"
        />
      </label>

      <p v-if="auth.error" class="err">{{ auth.error }}</p>

      <button
        class="primary"
        :disabled="auth.busy || username.trim().length < 3 || password.length < 6"
        @click="submit"
      >
        {{ auth.busy ? '请稍候…' : mode === 'login' ? '登录' : '注册并登录' }}
      </button>

      <button class="link" @click="mode = mode === 'login' ? 'register' : 'login'">
        {{ mode === 'login' ? '没有账号？去注册' : '已有账号？去登录' }}
      </button>
      <button class="ghost" @click="guest">游客进入</button>
      <button class="close" @click="emit('close')">关闭</button>
    </div>
  </div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  z-index: 80;
  background: rgba(5, 10, 16, 0.72);
  display: grid;
  place-items: center;
  padding: 1.5rem;
}

.panel {
  width: min(420px, 100%);
  padding: 1.75rem 1.5rem 1.25rem;
  background: linear-gradient(180deg, rgba(19, 37, 54, 0.96), rgba(11, 22, 34, 0.98));
  border: 1px solid rgba(196, 164, 132, 0.35);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

h2 {
  font-family: var(--font-display);
  font-weight: 400;
  letter-spacing: 0.28em;
  text-indent: 0.28em;
  color: var(--amber-bright);
  font-size: 1.35rem;
}

.desc {
  font-size: 0.8rem;
  color: rgba(232, 221, 208, 0.5);
  letter-spacing: 0.06em;
  line-height: 1.5;
  margin-bottom: 0.35rem;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: rgba(232, 221, 208, 0.55);
}

input {
  font: inherit;
  padding: 0.65rem 0.75rem;
  background: rgba(0, 0, 0, 0.28);
  border: 1px solid rgba(196, 164, 132, 0.28);
  color: var(--foam);
  letter-spacing: 0.04em;
}

input:focus {
  outline: none;
  border-color: rgba(196, 164, 132, 0.65);
}

.err {
  color: #e8a0a0;
  font-size: 0.8rem;
}

.primary {
  margin-top: 0.35rem;
  padding: 0.75rem;
  border: 1px solid rgba(196, 164, 132, 0.55);
  color: var(--amber-bright);
  letter-spacing: 0.28em;
  text-indent: 0.28em;
}

.primary:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.primary:not(:disabled):hover {
  background: rgba(196, 164, 132, 0.12);
}

.link,
.ghost,
.close {
  padding: 0.4rem;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  color: rgba(232, 221, 208, 0.5);
}

.link:hover,
.ghost:hover,
.close:hover {
  color: var(--amber-bright);
}
</style>
