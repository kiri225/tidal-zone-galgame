<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useGameStore } from '../engine/gameStore'
import { getCgById, cgImages } from '../data/cg'

const game = useGameStore()

/** 视频加载失败时回落到静图运镜 */
const videoFailed = ref<Set<string>>(new Set())

const unlockDef = computed(() =>
  game.pendingCgUnlock ? getCgById(game.pendingCgUnlock) : null,
)

const sceneDef = computed(() => (game.cg ? getCgById(game.cg) : null))

const sceneSrc = computed(() =>
  game.cg ? (cgImages[game.cg] ?? '') : '',
)

const sceneVideo = computed(() => {
  if (!game.cg || !sceneDef.value?.video) return ''
  if (videoFailed.value.has(game.cg)) return ''
  return sceneDef.value.video
})

/** 好感解锁但当前节点未挂 cg 时，用全屏预览展示图 */
const unlockPreviewSrc = computed(() => {
  if (!game.pendingCgUnlock || game.cg) return ''
  return cgImages[game.pendingCgUnlock] ?? ''
})

const unlockPreviewVideo = computed(() => {
  if (!unlockDef.value?.video || !game.pendingCgUnlock || game.cg) return ''
  if (videoFailed.value.has(game.pendingCgUnlock)) return ''
  return unlockDef.value.video
})

watch(
  () => game.cg,
  () => {
    /* 切换 CG 时不清 failed 缓存，避免反复 404 */
  },
)

function onVideoError(id: string | null | undefined) {
  if (!id) return
  videoFailed.value = new Set([...videoFailed.value, id])
}

function dismissUnlock() {
  game.dismissCgUnlock()
}
</script>

<template>
  <!-- 剧情内全屏 CG -->
  <div v-if="game.cg && sceneSrc" class="cg-scene" aria-live="polite">
    <video
      v-if="sceneVideo"
      :key="'v-' + game.cg"
      class="cg-media"
      :src="sceneVideo"
      autoplay
      loop
      muted
      playsinline
      @error="onVideoError(game.cg)"
    />
    <img
      v-else
      :key="'i-' + game.cg"
      :src="sceneSrc"
      alt=""
      class="cg-media kenburns"
      draggable="false"
    />
    <div class="cg-wash" />
    <div v-if="sceneDef" class="cg-caption">
      <span class="cg-label">CG</span>
      <span class="cg-title">{{ sceneDef.title }}</span>
      <span class="cg-sub">{{ sceneDef.subtitle }}</span>
    </div>
  </div>

  <!-- 仅解锁、无剧情 cg 字段时：全屏预览 -->
  <div
    v-else-if="unlockDef && unlockPreviewSrc"
    class="cg-preview"
    @click.stop="dismissUnlock"
  >
    <video
      v-if="unlockPreviewVideo"
      :key="'uv-' + unlockDef.id"
      class="cg-media"
      :src="unlockPreviewVideo"
      autoplay
      loop
      muted
      playsinline
      @error="onVideoError(unlockDef.id)"
    />
    <img
      v-else
      :src="unlockPreviewSrc"
      alt=""
      class="cg-media kenburns"
      draggable="false"
    />
    <div class="cg-wash" />
    <div class="cg-caption">
      <span class="cg-label">CG 解锁</span>
      <span class="cg-title">{{ unlockDef.title }}</span>
      <span class="cg-sub">
        {{ unlockDef.subtitle }}
        <template v-if="!unlockDef.storyUnlock">
          · 亲密度 {{ unlockDef.affectionRequired }}%
        </template>
      </span>
      <span class="cg-hint">点击继续</span>
    </div>
  </div>

  <!-- 剧情已在播 CG 时：轻量解锁条 -->
  <Transition name="toast">
    <div
      v-if="unlockDef && game.cg"
      class="cg-toast"
      @click.stop="dismissUnlock"
    >
      <p class="label">CG 解锁</p>
      <p class="title">{{ unlockDef.title }}</p>
      <p class="sub">
        {{ unlockDef.subtitle }}
        <template v-if="!unlockDef.storyUnlock">
          · 亲密度 {{ unlockDef.affectionRequired }}%
        </template>
      </p>
      <p class="hint">点击关闭提示 · 可在「CG 鉴赏」回顾</p>
    </div>
  </Transition>
</template>

<style scoped>
.cg-scene,
.cg-preview {
  position: absolute;
  inset: 0;
  z-index: 8;
  overflow: hidden;
  animation: cg-in 0.85s ease-out;
}

.cg-preview {
  z-index: 25;
  cursor: pointer;
}

.cg-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* landscape CGs: keep true center; 28% top-bias was cutting lower body */
  object-position: center center;
}

.cg-media.kenburns {
  animation: kenburns 14s ease-in-out infinite alternate;
  transform-origin: center center;
}

.cg-wash {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(8, 14, 22, 0.15) 0%, transparent 35%, rgba(8, 14, 22, 0.5) 100%),
    radial-gradient(ellipse at 50% 35%, transparent 42%, rgba(8, 14, 22, 0.28) 100%);
  pointer-events: none;
}

.cg-caption {
  position: absolute;
  left: 1.5rem;
  bottom: 9.5rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  max-width: min(420px, 70vw);
  pointer-events: none;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.75);
}

.cg-preview .cg-caption {
  left: 50%;
  bottom: 12%;
  transform: translateX(-50%);
  align-items: center;
  text-align: center;
  max-width: min(520px, 88vw);
}

.cg-label {
  font-size: 0.68rem;
  letter-spacing: 0.4em;
  color: var(--amber);
}

.cg-title {
  font-family: var(--font-display);
  font-size: clamp(1.35rem, 3vw, 1.85rem);
  letter-spacing: 0.22em;
  color: var(--foam);
}

.cg-sub {
  font-size: 0.82rem;
  color: rgba(232, 221, 208, 0.7);
  letter-spacing: 0.06em;
}

.cg-hint {
  margin-top: 0.85rem;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  color: rgba(232, 221, 208, 0.45);
  animation: hint-pulse 1.6s ease-in-out infinite;
}

@keyframes hint-pulse {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.95;
  }
}

@keyframes kenburns {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.08);
  }
}

@keyframes cg-in {
  from {
    opacity: 0;
    transform: scale(1.035);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.cg-toast {
  position: absolute;
  top: 4.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 30;
  min-width: min(320px, 86vw);
  padding: 1rem 1.4rem 1.1rem;
  text-align: center;
  background: rgba(10, 16, 24, 0.88);
  border: 1px solid rgba(196, 164, 132, 0.45);
  backdrop-filter: blur(12px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.45);
  cursor: pointer;
}

.label {
  font-size: 0.7rem;
  letter-spacing: 0.35em;
  color: var(--amber);
}

.title {
  margin-top: 0.45rem;
  font-family: var(--font-display);
  font-size: 1.25rem;
  letter-spacing: 0.2em;
}

.sub {
  margin-top: 0.35rem;
  font-size: 0.8rem;
  color: rgba(232, 221, 208, 0.55);
}

.hint {
  margin-top: 0.7rem;
  font-size: 0.7rem;
  color: rgba(232, 221, 208, 0.35);
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-10px);
}

@media (max-width: 640px) {
  .cg-caption {
    left: 1rem;
    bottom: 11rem;
  }
}
</style>
