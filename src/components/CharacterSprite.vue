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
  left: 50%;
  bottom: 14%;
  transform: translateX(-50%);
  z-index: 2;
  width: min(420px, 55vw);
  height: min(72vh, 640px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  pointer-events: none;
  filter: drop-shadow(0 24px 48px rgba(0, 0, 0, 0.55));
  animation: enter 0.75s ease-out;
}

.sprite {
  max-width: 100%;
  max-height: 100%;
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

@media (max-width: 640px) {
  .sprite-wrap {
    bottom: 26%;
    width: min(280px, 70vw);
    height: 55vh;
  }
}
</style>
