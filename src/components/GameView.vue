<script setup lang="ts">
import { computed, watch, ref, onMounted, onUnmounted } from 'vue'
import { useGameStore } from '../engine/gameStore'
import { bgLabels, speakerColors } from '../data/characters'
import { cgCatalog } from '../data/cg'
import BackgroundLayer from './BackgroundLayer.vue'
import CharacterSprite from './CharacterSprite.vue'
import TypewriterText from './TypewriterText.vue'
import CgOverlay from './CgOverlay.vue'

const game = useGameStore()
const showUI = ref(true)

const hasChoices = computed(() => !!game.currentNode?.choices?.length)
const place = computed(() => bgLabels[game.bg] ?? '')
const nameColor = computed(() => speakerColors[game.speaker] ?? '#e8ddd0')
const nextCgHint = computed(() => {
  const next = cgCatalog.find((c) => !game.unlockedCgs.has(c.id))
  return next ? `下一 CG · 亲密度 ${next.affectionRequired}` : 'CG 已全部解锁'
})

function onKey(e: KeyboardEvent) {
  if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
    e.preventDefault()
    if (game.pendingCgUnlock) {
      game.dismissCgUnlock()
      return
    }
    if (!hasChoices.value) game.advance()
  }
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))

watch(
  () => game.nodeId,
  () => {
    showUI.value = true
  },
)
</script>

<template>
  <section class="game" :class="[`mood-${game.mood}`, { 'has-cg': !!game.cg }]" @click="!hasChoices && game.advance()">
    <BackgroundLayer v-show="!game.cg" :bg="game.bg" :mood="game.mood" />
    <CharacterSprite
      v-if="game.sprite && !game.cg"
      :character="game.sprite"
      :expression="game.expression"
    />
    <CgOverlay />

    <div class="hud">
      <div class="hud-left">
        <span v-if="game.chapter" class="chapter">第 {{ game.chapter }} 章 · {{ game.chapterTitle }}</span>
        <span class="place">{{ place }}</span>
      </div>
      <div class="aff-wrap">
        <span class="aff" title="晚棠好感">亲密度 {{ game.affection }}</span>
        <span v-if="game.affectionDelta" class="aff-delta" :class="{ down: game.affectionDelta < 0 }">
          {{ game.affectionDelta > 0 ? '+' : '' }}{{ game.affectionDelta }}
        </span>
        <span class="aff-hint">{{ nextCgHint }}</span>
      </div>
    </div>

    <div class="panel" @click.stop>
      <div v-if="game.speaker" class="name" :style="{ color: nameColor }">
        {{ game.speaker }}
      </div>
      <TypewriterText :text="game.text" class="body" />

      <ul v-if="hasChoices" class="choices">
        <li
          v-for="(c, i) in game.currentNode!.choices"
          :key="i"
          @click="game.choose(i)"
        >
          {{ c.text }}
        </li>
      </ul>

      <div v-else class="continue">
        <span class="tri">▼</span>
        <span class="tip">点击 / 空格 继续</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.game {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  user-select: none;
}

.hud {
  position: absolute;
  top: 1.25rem;
  left: 1.5rem;
  right: 1.5rem;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  color: rgba(232, 221, 208, 0.45);
  pointer-events: none;
}

.hud-left {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  max-width: 60%;
}

.chapter {
  color: rgba(196, 164, 132, 0.85);
  letter-spacing: 0.12em;
  font-size: 0.78rem;
}

.place {
  color: rgba(232, 221, 208, 0.4);
}

.aff-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;
}

.aff {
  color: rgba(196, 164, 132, 0.85);
  font-variant-numeric: tabular-nums;
}

.aff-delta {
  color: #e0c4a0;
  font-size: 0.85rem;
  animation: float-delta 1.5s ease-out forwards;
}

.aff-delta.down {
  color: #9ab0c0;
}

.aff-hint {
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  color: rgba(232, 221, 208, 0.28);
}

@keyframes float-delta {
  0% {
    opacity: 0;
    transform: translateY(6px);
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
}

.has-cg .panel {
  border-color: rgba(196, 164, 132, 0.4);
}

.panel {
  position: absolute;
  left: 50%;
  bottom: 1.5rem;
  transform: translateX(-50%);
  width: min(920px, calc(100% - 2rem));
  /* 低于立绘(12)：人物叠在对话框前；正文靠左可读 */
  z-index: 10;
  padding: 1.4rem 1.75rem 1.2rem;
  padding-right: clamp(1.75rem, 28vw, 12rem);
  background:
    linear-gradient(180deg, rgba(12, 20, 30, 0.72), rgba(8, 14, 22, 0.94));
  border: 1px solid rgba(232, 221, 208, 0.14);
  backdrop-filter: blur(14px);
  box-shadow: 0 -20px 60px rgba(0, 0, 0, 0.35);
  cursor: default;
}

@media (max-width: 640px) {
  .panel {
    padding-right: 1.75rem;
  }
}

.name {
  font-family: var(--font-display);
  font-size: 1.05rem;
  letter-spacing: 0.2em;
  margin-bottom: 0.65rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid rgba(232, 221, 208, 0.1);
}

.body {
  min-height: 4.2em;
  line-height: 1.85;
  font-size: clamp(0.95rem, 2.2vw, 1.08rem);
  white-space: pre-wrap;
  color: rgba(232, 221, 208, 0.92);
}

.choices {
  list-style: none;
  margin-top: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.choices li {
  padding: 0.75rem 1rem;
  border: 1px solid rgba(196, 164, 132, 0.28);
  background: rgba(196, 164, 132, 0.06);
  font-size: 0.92rem;
  line-height: 1.5;
  letter-spacing: 0.04em;
  transition: background 0.25s, border-color 0.25s, transform 0.25s;
  cursor: pointer;
}

.choices li:hover {
  background: rgba(196, 164, 132, 0.14);
  border-color: rgba(196, 164, 132, 0.55);
  transform: translateX(4px);
}

.continue {
  margin-top: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-end;
  color: rgba(232, 221, 208, 0.35);
  font-size: 0.75rem;
}

.tri {
  animation: blink 1.2s ease-in-out infinite;
  color: var(--amber);
  font-size: 0.65rem;
}

@keyframes blink {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

.mood-rain .panel {
  border-color: rgba(140, 180, 210, 0.2);
}
.mood-intimate .panel {
  border-color: rgba(196, 164, 132, 0.35);
  box-shadow: 0 -20px 80px rgba(80, 40, 30, 0.25);
}
.mood-dark .panel {
  background: rgba(5, 8, 12, 0.9);
}
</style>
