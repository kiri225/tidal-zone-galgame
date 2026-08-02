<script setup lang="ts">
import type { Expression } from '../engine/types'
import { computed } from 'vue'
import { getCharSprite } from '../data/assets'

const props = defineProps<{
  character: string
  expression: Expression
}>()

const src = computed(() => getCharSprite(props.character, props.expression))
</script>

<template>
  <div class="sprite-wrap" :class="expression">
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
  position: absolute;
  /* 居中贴底，叠在对话框后面（panel z=10）；高度跟视口走，避免宽屏景大人小 */
  left: 50%;
  bottom: -2vh;
  transform: translateX(-50%);
  z-index: 2;
  width: clamp(340px, 62vh, 820px);
  height: min(108vh, 1200px);
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
  /* 要求角色素材为透明底 PNG（RGBA），直接叠在背景上 */
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
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
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
    width: clamp(300px, 58vh, 640px);
    height: min(102vh, 980px);
    bottom: -1vh;
  }
}

@media (max-width: 640px) {
  .sprite-wrap {
    width: clamp(260px, 72vw, 420px);
    height: min(96vh, 860px);
    bottom: 0;
  }
}

/* 超宽屏再放大一档，压住景大人小 */
@media (min-aspect-ratio: 16/9) {
  .sprite-wrap {
    width: clamp(380px, 68vh, 900px);
    height: min(112vh, 1280px);
  }
}
</style>
