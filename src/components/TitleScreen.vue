<script setup lang="ts">
import { useGameStore } from '../engine/gameStore'

const game = useGameStore()
</script>

<template>
  <section class="title">
    <img class="tide-img" src="/images/bg/bg-port-night.png" alt="" draggable="false" />
    <div class="tide-dim" aria-hidden="true" />
    <div class="veil" />

    <header class="brand">
      <h1>潮间带</h1>
      <p class="sub">Intertidal Zone</p>
      <p class="tagline">涨潮时相爱，退潮时也不走开</p>
    </header>

    <nav class="actions">
      <button class="primary" @click="game.startGame()">开始游戏</button>
      <button class="ghost" @click="game.openGallery()">
        CG 鉴赏
        <span class="count">{{ game.unlockedCgList.length }}/4</span>
      </button>
      <p class="hint">首发角色：林晚棠 · 亲密度达标解锁 CG</p>
    </nav>

    <footer class="foot">潮屿镇 · 七月</footer>
  </section>
</template>

<style scoped>
.title {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  overflow: hidden;
}

.tide-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: breathe 10s ease-in-out infinite;
}

.tide-dim {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(8, 14, 22, 0.55) 0%, rgba(8, 14, 22, 0.35) 40%, rgba(8, 14, 22, 0.72) 100%);
}

.veil {
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.03) 2px,
      rgba(0, 0, 0, 0.03) 4px
    );
}

@keyframes breathe {
  0%,
  100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.08);
  }
}

.brand {
  position: relative;
  z-index: 1;
  animation: rise 1.2s ease-out;
}

h1 {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 12vw, 6.5rem);
  font-weight: 400;
  letter-spacing: 0.35em;
  text-indent: 0.35em;
  color: var(--foam);
  line-height: 1.1;
  text-shadow: 0 0 60px rgba(196, 164, 132, 0.25);
}

.sub {
  margin-top: 0.75rem;
  font-size: 0.95rem;
  letter-spacing: 0.45em;
  text-indent: 0.45em;
  color: var(--amber);
  opacity: 0.85;
}

.tagline {
  margin-top: 2rem;
  font-size: 1rem;
  color: rgba(232, 221, 208, 0.65);
  letter-spacing: 0.12em;
}

.actions {
  position: relative;
  z-index: 1;
  margin-top: 3.5rem;
  animation: rise 1.2s ease-out 0.2s both;
}

.primary {
  display: inline-block;
  padding: 0.9rem 3.2rem;
  border: 1px solid rgba(196, 164, 132, 0.55);
  color: var(--amber-bright);
  letter-spacing: 0.4em;
  text-indent: 0.4em;
  font-size: 0.95rem;
  transition: background 0.35s, box-shadow 0.35s, color 0.35s;
}

.primary:hover {
  background: rgba(196, 164, 132, 0.12);
  box-shadow: 0 0 40px rgba(196, 164, 132, 0.15);
  color: var(--foam);
}

.ghost {
  display: block;
  margin: 1rem auto 0;
  padding: 0.55rem 1.5rem;
  letter-spacing: 0.28em;
  text-indent: 0.28em;
  font-size: 0.85rem;
  color: rgba(232, 221, 208, 0.55);
  border-bottom: 1px solid transparent;
  transition: color 0.3s, border-color 0.3s;
}

.ghost:hover {
  color: var(--amber-bright);
  border-bottom-color: rgba(196, 164, 132, 0.4);
}

.count {
  margin-left: 0.5rem;
  letter-spacing: 0.05em;
  text-indent: 0;
  color: rgba(196, 164, 132, 0.7);
  font-size: 0.75rem;
}

.hint {
  margin-top: 1rem;
  font-size: 0.8rem;
  color: rgba(232, 221, 208, 0.4);
  letter-spacing: 0.15em;
}

.foot {
  position: absolute;
  bottom: 2rem;
  z-index: 1;
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  color: rgba(232, 221, 208, 0.3);
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
