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
  /* 居中贴底：头须留在画面内，下半身伸进对话框后方 */
  left: 50%;
  bottom: -2vh;
  transform: translateX(-50%);
  z-index: 2;
  width: clamp(340px, 56vh, 640px);
  /* 高度严格 < 视口，避免头顶被裁 */
  height: min(86vh, 900px);
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
    width: clamp(300px, 54vh, 560px);
    height: min(84vh, 820px);
    bottom: -1vh;
  }
}

@media (max-width: 640px) {
  .sprite-wrap {
    width: clamp(260px, 70vw, 420px);
    height: min(80vh, 720px);
    bottom: 0;
  }
}

/* 宽屏略放大，仍保证头顶留白 */
@media (min-aspect-ratio: 16/9) {
  .sprite-wrap {
    width: clamp(380px, 58vh, 700px);
    height: min(88vh, 960px);
    bottom: -3vh;
  }
}
</style>
