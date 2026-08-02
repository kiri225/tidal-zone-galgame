<script setup lang="ts">
import type { Expression } from '../engine/types'
import { computed } from 'vue'
import { getCharSprite } from '../data/assets'
import { resolveSpriteLayout } from '../data/spriteLayout'
import { useDeviceProfile } from '../composables/useDeviceProfile'

const props = defineProps<{
  character: string
  expression: Expression
  bg?: string
}>()

const { profile } = useDeviceProfile()
const src = computed(() => getCharSprite(props.character, props.expression))
const layout = computed(() =>
  resolveSpriteLayout(props.bg ?? '', props.expression, {
    kind: profile.value.kind,
    shortLandscape: profile.value.shortLandscape,
    spriteScaleMul: profile.value.spriteScaleMul,
  }),
)

const wrapStyle = computed(() => ({
  '--sprite-scale': String(layout.value.scale),
  '--sprite-x': `${layout.value.xPercent}%`,
  '--sprite-bottom': `${layout.value.bottomVh}vh`,
  width: profile.value.spriteWidth,
  height: profile.value.spriteHeight,
}))
</script>

<template>
  <div class="sprite-wrap" :class="[expression, `dev-${profile.kind}`]" :style="wrapStyle">
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
  bottom: calc(var(--sprite-bottom) + var(--dialogue-reserve, 0px) * 0.12);
  transform: translateX(-50%) scale(var(--sprite-scale));
  transform-origin: bottom center;
  z-index: 2;
  width: var(--sprite-base-width, clamp(300px, 48vh, 560px));
  height: var(--sprite-base-height, min(78vh, 820px));
  max-height: calc(100% - var(--dialogue-reserve, 7.5rem) - 2rem);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  pointer-events: none;
  filter: drop-shadow(0 24px 48px rgba(0, 0, 0, 0.55));
  animation: enter 0.75s ease-out;
  transition:
    left 0.35s ease,
    bottom 0.35s ease,
    width 0.35s ease,
    height 0.35s ease,
    transform 0.35s ease;
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
</style>
