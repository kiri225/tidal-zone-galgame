<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { bgImages, wantangSprites } from '../data/assets'
import { useGameStore } from '../engine/gameStore'
import { useAuthStore } from '../stores/authStore'
import { mergeCloudSlots } from '../engine/saveService'
import { preloadImages } from '../engine/preload'
import AuthModal from './AuthModal.vue'
import SaveSlotModal from './SaveSlotModal.vue'

const game = useGameStore()
const auth = useAuthStore()

const showAuth = ref(false)
/** 登录成功 / 游客进入后要打开的存档面板 */
const pendingSlot = ref<'load' | 'new' | null>(null)
const slotMode = ref<'load' | 'save' | 'new' | null>(null)
const syncing = ref(false)

const canContinue = computed(() => game.hasAnySave())

onMounted(async () => {
  preloadImages([
    bgImages['port-night'],
    bgImages['shop-interior'],
    bgImages['street-rain'],
    wantangSprites.default,
    wantangSprites.soft,
    wantangSprites.tense,
  ])
  if (auth.token) {
    const ok = await auth.refreshMe()
    if (ok) {
      syncing.value = true
      try {
        await mergeCloudSlots(auth.token!)
      } catch {
        /* 离线忽略 */
      } finally {
        syncing.value = false
      }
    }
  }
})

async function onContinue() {
  const ok = await game.continueGame()
  if (!ok) openSlots('load')
}

/** 未登录时先弹出登录框；已登录直接进存档槽 */
function openSlots(mode: 'load' | 'new') {
  if (!auth.isLoggedIn) {
    pendingSlot.value = mode
    showAuth.value = true
    return
  }
  slotMode.value = mode
}

async function syncCloud() {
  if (!auth.token) return
  syncing.value = true
  try {
    await mergeCloudSlots(auth.token)
  } finally {
    syncing.value = false
  }
}

async function onLoggedIn() {
  showAuth.value = false
  await syncCloud()
  if (pendingSlot.value) {
    slotMode.value = pendingSlot.value
    pendingSlot.value = null
  }
}

function onGuest() {
  showAuth.value = false
  if (pendingSlot.value) {
    slotMode.value = pendingSlot.value
    pendingSlot.value = null
  }
}

function onAuthClose() {
  showAuth.value = false
  pendingSlot.value = null
}

function accountLabel() {
  if (auth.isLoggedIn) return auth.username
  return '未登录'
}
</script>

<template>
  <section class="title">
    <img class="tide-img" :src="bgImages['port-night']" alt="" draggable="false" />
    <div class="tide-dim" aria-hidden="true" />
    <div class="veil" />

    <header class="brand">
      <h1>潮间带</h1>
      <p class="sub">Intertidal Zone</p>
      <p class="tagline">涨潮时相爱，退潮时也不走开</p>
    </header>

    <nav class="actions">
      <button class="primary" @click="openSlots('new')">开始游戏</button>
      <button class="ghost" :disabled="!canContinue" @click="onContinue">继续游戏</button>
      <button class="ghost" @click="openSlots('load')">读取存档</button>
      <button class="ghost" @click="game.openGallery()">
        CG 鉴赏
        <span class="count">{{ game.unlockedCgList.length }}</span>
      </button>
      <p class="hint">登录后云同步存档 · 也可游客本机游玩</p>
    </nav>

    <div class="account" :class="{ logged: auth.isLoggedIn }">
      <span class="who">{{ syncing ? '同步中…' : accountLabel() }}</span>
      <button v-if="auth.isLoggedIn" class="acc-btn" @click="auth.logout()">退出</button>
      <button v-else class="acc-btn primary-acc" @click="showAuth = true">登录 / 注册</button>
    </div>

    <footer class="foot">潮屿镇 · 七月</footer>

    <AuthModal
      v-if="showAuth"
      @close="onAuthClose"
      @logged-in="onLoggedIn"
      @guest="onGuest"
    />
    <SaveSlotModal
      v-if="slotMode"
      :mode="slotMode"
      @close="slotMode = null"
      @done="slotMode = null"
    />
  </section>
</template>

<style scoped>
.title {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  overflow: hidden;
}

.tide-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: breathe 10s ease-in-out infinite;
}

.tide-dim {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(8, 14, 22, 0.55) 0%, rgba(8, 14, 22, 0.35) 40%, rgba(8, 14, 22, 0.72) 100%);
}

.veil {
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.03) 2px,
      rgba(0, 0, 0, 0.03) 4px
    );
}

@keyframes breathe {
  0%,
  100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.08);
  }
}

.brand {
  position: relative;
  z-index: 1;
  animation: rise 1.2s ease-out;
}

h1 {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 12vw, 6.5rem);
  font-weight: 400;
  letter-spacing: 0.35em;
  text-indent: 0.35em;
  color: var(--foam);
  line-height: 1.1;
  text-shadow: 0 0 60px rgba(196, 164, 132, 0.25);
}

.sub {
  margin-top: 0.75rem;
  font-size: 0.95rem;
  letter-spacing: 0.45em;
  text-indent: 0.45em;
  color: var(--amber);
  opacity: 0.85;
}

.tagline {
  margin-top: 2rem;
  font-size: 1rem;
  color: rgba(232, 221, 208, 0.65);
  letter-spacing: 0.12em;
}

.actions {
  position: relative;
  z-index: 1;
  margin-top: 3rem;
  animation: rise 1.2s ease-out 0.2s both;
}

.primary {
  display: inline-block;
  padding: 0.9rem 3.2rem;
  border: 1px solid rgba(196, 164, 132, 0.55);
  color: var(--amber-bright);
  letter-spacing: 0.4em;
  text-indent: 0.4em;
  font-size: 0.95rem;
  transition: background 0.35s, box-shadow 0.35s, color 0.35s;
}

.primary:hover {
  background: rgba(196, 164, 132, 0.12);
  box-shadow: 0 0 40px rgba(196, 164, 132, 0.15);
  color: var(--foam);
}

.ghost {
  display: block;
  margin: 0.75rem auto 0;
  padding: 0.55rem 1.5rem;
  letter-spacing: 0.28em;
  text-indent: 0.28em;
  font-size: 0.85rem;
  color: rgba(232, 221, 208, 0.55);
  border-bottom: 1px solid transparent;
  transition: color 0.3s, border-color 0.3s;
}

.ghost:disabled {
  opacity: 0.28;
  cursor: not-allowed;
}

.ghost:not(:disabled):hover {
  color: var(--amber-bright);
  border-bottom-color: rgba(196, 164, 132, 0.4);
}

.count {
  margin-left: 0.5rem;
  letter-spacing: 0.05em;
  text-indent: 0;
  color: rgba(196, 164, 132, 0.7);
  font-size: 0.75rem;
}

.hint {
  margin-top: 1rem;
  font-size: 0.8rem;
  color: rgba(232, 221, 208, 0.4);
  letter-spacing: 0.15em;
}

.account {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.45rem 0.55rem 0.45rem 0.9rem;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  color: rgba(232, 221, 208, 0.55);
  background: rgba(8, 16, 26, 0.55);
  border: 1px solid rgba(196, 164, 132, 0.28);
  backdrop-filter: blur(8px);
}

.account.logged {
  color: rgba(224, 196, 160, 0.9);
  border-color: rgba(196, 164, 132, 0.45);
}

.who {
  max-width: 9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.acc-btn {
  padding: 0.4rem 0.85rem;
  border: 1px solid rgba(196, 164, 132, 0.35);
  color: rgba(224, 196, 160, 0.9);
  letter-spacing: 0.15em;
  background: transparent;
}

.acc-btn.primary-acc {
  border-color: rgba(196, 164, 132, 0.65);
  color: var(--amber-bright);
}

.acc-btn:hover {
  background: rgba(196, 164, 132, 0.12);
}

.foot {
  position: absolute;
  bottom: 2rem;
  z-index: 1;
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  color: rgba(232, 221, 208, 0.3);
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
