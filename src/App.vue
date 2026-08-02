<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useGameStore } from './engine/gameStore'
import { useDeviceProfileRoot } from './composables/useDeviceProfile'
import TitleScreen from './components/TitleScreen.vue'
import StorySelect from './components/StorySelect.vue'
import GameView from './components/GameView.vue'
import EndingScreen from './components/EndingScreen.vue'
import GalleryScreen from './components/GalleryScreen.vue'

const game = useGameStore()
const { profile, cssVars } = useDeviceProfileRoot()

function flushSave() {
  void game.persistActiveSlot()
}

function onVisibility() {
  if (document.visibilityState === 'hidden') flushSave()
}

onMounted(() => {
  window.addEventListener('pagehide', flushSave)
  document.addEventListener('visibilitychange', onVisibility)
})

onUnmounted(() => {
  window.removeEventListener('pagehide', flushSave)
  document.removeEventListener('visibilitychange', onVisibility)
})
</script>

<template>
  <div
    class="app-shell"
    :class="[`device-${profile.kind}`, `orient-${profile.orientation}`, { 'short-land': profile.shortLandscape }]"
    :style="cssVars"
    :data-device="profile.kind"
  >
    <div class="grain" aria-hidden="true" />
    <TitleScreen v-if="game.screen === 'title'" />
    <StorySelect v-else-if="game.screen === 'story-select'" />
    <GameView v-else-if="game.screen === 'game'" />
    <EndingScreen v-else-if="game.screen === 'ending'" />
    <GalleryScreen v-else-if="game.screen === 'gallery'" />
  </div>
</template>

<style>
:root {
  --sea-deep: #0b1622;
  --sea-mid: #132536;
  --sea-fog: #1c3348;
  --amber: #c4a484;
  --amber-bright: #e0c4a0;
  --foam: #e8ddd0;
  --mist: rgba(232, 221, 208, 0.12);
  --ink: #0a1018;
  --rain: rgba(140, 180, 210, 0.15);
  --font-display: 'ZCOOL XiaoWei', 'Noto Serif SC', serif;
  --font-body: 'Noto Serif SC', 'Songti SC', serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--sea-deep);
  color: var(--foam);
  font-family: var(--font-body);
}

.app-shell {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.grain {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 50;
  opacity: 0.07;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
  color: inherit;
}
</style>
