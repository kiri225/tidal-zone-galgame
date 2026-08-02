<script setup lang="ts">
import { useGameStore } from '../engine/gameStore'
import { formatAffection } from '../data/affection'

const game = useGameStore()
</script>

<template>
  <section v-if="game.endingData" class="ending">
    <div class="wash" />
    <div class="card">
      <p class="label">结局</p>
      <h1 :style="{ color: game.endingData.color }">{{ game.endingData.title }}</h1>
      <p class="sub">{{ game.endingData.subtitle }}</p>
      <p class="aff">本周目亲密度：{{ formatAffection(game.affection) }}</p>
      <div class="btns">
        <button class="primary" @click="game.startGame()">再玩一次</button>
        <button class="ghost" @click="game.backToTitle()">返回标题</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ending {
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  padding: 2rem;
}

.wash {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 50% 40%, rgba(196, 164, 132, 0.15), transparent 60%),
    linear-gradient(180deg, #0a121c, #152030);
}

.card {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 520px;
  animation: rise 1s ease-out;
}

.label {
  font-size: 0.75rem;
  letter-spacing: 0.4em;
  color: rgba(232, 221, 208, 0.4);
}

h1 {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 5vw, 2.2rem);
  font-weight: 400;
  margin-top: 1rem;
  letter-spacing: 0.12em;
  line-height: 1.4;
}

.sub {
  margin-top: 1rem;
  color: rgba(232, 221, 208, 0.6);
  letter-spacing: 0.1em;
}

.aff {
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: rgba(196, 164, 132, 0.7);
}

.btns {
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
}

.primary {
  padding: 0.8rem 2.5rem;
  border: 1px solid rgba(196, 164, 132, 0.5);
  letter-spacing: 0.3em;
  text-indent: 0.3em;
  color: var(--amber-bright);
}

.primary:hover {
  background: rgba(196, 164, 132, 0.1);
}

.ghost {
  letter-spacing: 0.2em;
  color: rgba(232, 221, 208, 0.4);
  font-size: 0.85rem;
}

.ghost:hover {
  color: var(--foam);
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
