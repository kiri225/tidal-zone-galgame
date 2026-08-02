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
  /* 居中；下半身伸进对话框后方，上半身卡在对话框上沿（panel z=10） */
  left: 50%;
  bottom: clamp(-12vh, -6vh, -2vh);
  transform: translateX(-50%);
  z-index: 2;
  /* 以对话框顶为锚：立绘高度盖住「面板上方 + 面板厚度」 */
  width: clamp(400px, 78vh, 960px);
  height: min(118vh, 1320px);
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
  /* 略放大裁掉脚底留白，让胸腰卡在对话框上沿 */
  transform: scale(1.12);
  transform-origin: bottom center;
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
    width: clamp(340px, 72vh, 720px);
    height: min(112vh, 1100px);
    bottom: -8vh;
  }
  .sprite {
    transform: scale(1.1);
  }
}

@media (max-width: 640px) {
  .sprite-wrap {
    width: clamp(280px, 78vw, 480px);
    height: min(105vh, 920px);
    bottom: -4vh;
  }
}

/* 超宽屏：更大立绘，腰线对准对话框顶 */
@media (min-aspect-ratio: 16/9) {
  .sprite-wrap {
    width: clamp(460px, 82vh, 1040px);
    height: min(122vh, 1400px);
    bottom: -14vh;
  }
  .sprite {
    transform: scale(1.16);
  }
}
</style>
