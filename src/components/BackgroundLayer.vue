<script setup lang="ts">
import { computed } from 'vue'
import { bgImages } from '../data/assets'

const props = defineProps<{
  bg: string
  mood?: string
}>()

const src = computed(() => bgImages[props.bg] ?? bgImages['port-night'])
const isBlack = computed(() => props.bg === 'black' || !src.value)
</script>

<template>
  <div class="bg" :class="[mood, { solid: isBlack }]">
    <Transition name="bg-fade" mode="out-in">
      <img
        v-if="!isBlack"
        :key="src"
        class="bg-img"
        :src="src"
        alt=""
        draggable="false"
      />
      <div v-else :key="'black'" class="bg-black" />
    </Transition>
    <div v-if="mood === 'rain'" class="rain" aria-hidden="true" />
    <div class="vignette" />
  </div>
</template>

<style scoped>
.bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background: #0a1018;
  transition: filter 0.6s ease;
}

.bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* 略放大裁切，减少超宽屏「整间店铺开」的空旷感 */
  object-position: center 42%;
  transform: scale(1.06);
  transform-origin: center center;
}

@media (min-aspect-ratio: 16/9) {
  .bg-img {
    transform: scale(1.12);
  }
}

.bg-black {
  position: absolute;
  inset: 0;
  background: #050608;
}

.vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 35%, rgba(0, 0, 0, 0.5) 100%);
  pointer-events: none;
}

.rain {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    95deg,
    transparent,
    transparent 3px,
    rgba(180, 210, 230, 0.05) 3px,
    rgba(180, 210, 230, 0.05) 4px
  );
  animation: rain-move 0.6s linear infinite;
  opacity: 0.65;
  pointer-events: none;
  z-index: 1;
}

@keyframes rain-move {
  from {
    transform: translateY(-8px);
  }
  to {
    transform: translateY(8px);
  }
}

.intimate {
  filter: saturate(1.12) brightness(0.9);
}
.dark {
  filter: brightness(0.5);
}
.cold {
  filter: saturate(0.88) hue-rotate(6deg);
}
.warm {
  filter: saturate(1.06) brightness(1.04);
}

.bg-fade-enter-active,
.bg-fade-leave-active {
  transition: opacity 0.55s ease;
}
.bg-fade-enter-from,
.bg-fade-leave-to {
  opacity: 0;
}
</style>
