<script setup lang="ts">
import { characters } from '../data/characters'
import { bgImages, wantangSprites } from '../data/assets'
import { useGameStore } from '../engine/gameStore'

const game = useGameStore()

const portraits: Record<string, string> = {
  wantang: wantangSprites.default,
}

function pick(id: string, unlocked: boolean) {
  if (!unlocked) return
  game.enterRoute(id)
}
</script>

<template>
  <section class="select">
    <img class="bg-img" :src="bgImages.bookstore" alt="" draggable="false" />
    <div class="bg-dim" />
    <header>
      <p class="label">选择故事线</p>
      <h2>潮屿的人们</h2>
    </header>

    <ul class="grid">
      <li
        v-for="c in characters"
        :key="c.id"
        :class="{ locked: !c.unlocked }"
        :style="{ '--accent': c.color }"
        @click="pick(c.id, c.unlocked)"
      >
        <div class="portrait">
          <img v-if="portraits[c.id]" :src="portraits[c.id]" :alt="c.name" />
          <span v-else class="initial">{{ c.name.slice(0, 1) }}</span>
        </div>
        <div class="meta">
          <h3>{{ c.name }}</h3>
          <p>{{ c.unlocked ? c.title : '尚未开放' }}</p>
        </div>
        <span v-if="c.unlocked" class="go">进入 →</span>
      </li>
    </ul>

    <button class="back" @click="game.backToTitle()">返回标题</button>
  </section>
</template>

<style scoped>
.select {
  position: relative;
  width: 100%;
  height: 100%;
  padding: clamp(1.5rem, 4vw, 3rem);
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.bg-dim {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(160deg, rgba(11, 22, 34, 0.82), rgba(21, 42, 58, 0.88));
}

header,
.grid,
.back {
  position: relative;
  z-index: 1;
}

.label {
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  color: rgba(232, 221, 208, 0.45);
}

h2 {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 5vw, 2.6rem);
  font-weight: 400;
  margin-top: 0.4rem;
  letter-spacing: 0.2em;
}

.grid {
  list-style: none;
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.25rem;
  max-width: 960px;
}

li {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.25rem;
  border: 1px solid rgba(232, 221, 208, 0.12);
  background: rgba(10, 16, 24, 0.45);
  backdrop-filter: blur(8px);
  cursor: pointer;
  transition: border-color 0.3s, transform 0.3s, background 0.3s;
}

li:not(.locked):hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  background: rgba(10, 16, 24, 0.7);
}

li.locked {
  opacity: 0.4;
  cursor: not-allowed;
}

.portrait {
  width: 64px;
  height: 80px;
  border: 1px solid color-mix(in srgb, var(--accent) 50%, transparent);
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent);
  overflow: hidden;
  flex-shrink: 0;
}

.portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.initial {
  font-family: var(--font-display);
  font-size: 1.6rem;
  color: var(--accent);
}

h3 {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.15em;
}

.meta p {
  margin-top: 0.25rem;
  font-size: 0.8rem;
  color: rgba(232, 221, 208, 0.5);
}

.go {
  margin-left: auto;
  font-size: 0.8rem;
  color: var(--accent);
  letter-spacing: 0.1em;
}

.back {
  margin-top: auto;
  padding-top: 2rem;
  align-self: flex-start;
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  color: rgba(232, 221, 208, 0.45);
}

.back:hover {
  color: var(--foam);
}
</style>
