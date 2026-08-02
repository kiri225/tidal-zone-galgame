<script setup lang="ts">
import type { Expression } from '../engine/types'
import { computed } from 'vue'
import { getCharSprite } from '../data/assets'
import { resolveSpriteLayout } from '../data/spriteLayout'

const props = defineProps<{
  character: string
  expression: Expression
  bg?: string
}>()

const src = computed(() => getCharSprite(props.character, props.expression))
const layout = computed(() => resolveSpriteLayout(props.bg ?? '', props.expression))

const wrapStyle = computed(() => ({
  '--sprite-scale': String(layout.value.scale),
  '--sprite-x': `${layout.value.xPercent}%`,
  '--sprite-bottom': `${layout.value.bottomVh}vh`,
}))
</script>

<template>
  <div class="sprite-wrap" :class="expression" :style="wrapStyle">
    <Transition name="sprite-fade" mode="out-in">
      <img
        :key="src"
        class="sprite"
        :src="src"
        :alt="character"
        draggable="false"
      />
    </Transition>
  </div>
</template>

<style scoped>
.sprite-wrap {
  --sprite-scale: 0.74;
  --sprite-x: 50%;
  --sprite-bottom: -7vh;
  position: absolute;
  left: var(--sprite-x);
  bottom: calc(var(--sprite-bottom) + var(--dialogue-reserve, 0px) * 0.15);
  transform: translateX(-50%) scale(var(--sprite-scale));
  transform-origin: bottom center;
  z-index: 2;
  /* 基准尺寸：再由 --sprite-scale 按场景透视缩放 */
  width: clamp(300px, 48vh, 560px);
  height: min(78vh, 820px);
  max-height: calc(100% - var(--dialogue-reserve, 7.5rem) - 2.5rem);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  pointer-events: none;
  filter: drop-shadow(0 24px 48px rgba(0, 0, 0, 0.55));
  animation: enter 0.75s ease-out;
}

.sprite {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: bottom center;
  user-select: none;
  background: transparent;
}

.hurt,
.teary {
  filter: drop-shadow(0 24px 48px rgba(0, 0, 0, 0.55)) brightness(0.92) saturate(0.9);
}

.blush {
  filter: drop-shadow(0 24px 48px rgba(80, 30, 20, 0.35)) saturate(1.08);
}

.cold,
.crossed {
  filter: drop-shadow(0 24px 48px rgba(0, 0, 0, 0.55)) brightness(0.94) saturate(0.85);
}

.tired {
  filter: drop-shadow(0 24px 48px rgba(0, 0, 0, 0.55)) brightness(0.96) saturate(0.92);
}

.laugh {
  filter: drop-shadow(0 24px 48px rgba(60, 40, 20, 0.4)) saturate(1.06);
}

@keyframes enter {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(var(--sprite-scale)) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(var(--sprite-scale)) translateY(0);
  }
}

.sprite-fade-enter-active,
.sprite-fade-leave-active {
  transition: opacity 0.35s ease;
}
.sprite-fade-enter-from,
.sprite-fade-leave-to {
  opacity: 0;
}

@media (max-width: 900px) {
  .sprite-wrap {
    width: clamp(260px, 44vh, 480px);
    height: min(72vh, 700px);
  }
}

@media (max-width: 640px) {
  .sprite-wrap {
    width: clamp(220px, 58vw, 360px);
    height: min(62vh, 560px);
  }
}

/* 横屏手机：可视高度极短，进一步缩小立绘，保证脸在对话框上方 */
@media (max-height: 500px), (orientation: landscape) and (max-height: 560px) {
  .sprite-wrap {
    width: clamp(180px, 38vh, 360px);
    height: min(58vh, 420px);
    max-height: calc(100% - var(--dialogue-reserve, 5.5rem) - 1.25rem);
  }
}

@media (min-aspect-ratio: 16/9) and (min-height: 700px) {
  .sprite-wrap {
    width: clamp(320px, 46vh, 580px);
    height: min(76vh, 860px);
  }
}
</style>
