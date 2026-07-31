<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '../engine/gameStore'
import { getCgById, cgImages } from '../data/cg'

const game = useGameStore()

const unlockDef = computed(() =>
  game.pendingCgUnlock ? getCgById(game.pendingCgUnlock) : null,
)

const sceneSrc = computed(() =>
  game.cg ? (cgImages[game.cg] ?? '') : '',
)
</script>

<template>
  <!-- 剧情内全屏 CG -->
  <div v-if="game.cg && sceneSrc" class="cg-scene">
    <img :src="sceneSrc" alt="" class="cg-img" draggable="false" />
    <div class="cg-wash" />
  </div>

  <!-- 新解锁提示 -->
  <Transition name="toast">
    <div v-if="unlockDef" class="cg-toast" @click.stop="game.dismissCgUnlock()">
      <p class="label">CG 解锁</p>
      <p class="title">{{ unlockDef.title }}</p>
      <p class="sub">{{ unlockDef.subtitle }} · 亲密度 {{ unlockDef.affectionRequired }}</p>
      <p class="hint">点击关闭 · 可在标题页「CG 鉴赏」查看</p>
    </div>
  </Transition>
</template>

<style scoped>
.cg-scene {
  position: absolute;
  inset: 0;
  z-index: 3;
  overflow: hidden;
  animation: cg-in 0.9s ease-out;
}

.cg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
}

.cg-wash {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, transparent 45%, rgba(8, 14, 22, 0.55) 100%),
    radial-gradient(ellipse at 50% 40%, transparent 40%, rgba(8, 14, 22, 0.25) 100%);
  pointer-events: none;
}

@keyframes cg-in {
  from {
    opacity: 0;
    transform: scale(1.04);
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
</style>
