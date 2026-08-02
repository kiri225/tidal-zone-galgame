<script setup lang="ts">
import { ref, computed } from 'vue'
import { useGameStore } from '../engine/gameStore'
import { cgCatalog } from '../data/cg'

const game = useGameStore()
const viewing = ref<string | null>(null)

const viewDef = computed(() =>
  viewing.value ? cgCatalog.find((c) => c.id === viewing.value) : null,
)

function open(id: string, unlocked: boolean) {
  if (!unlocked) return
  viewing.value = id
}
</script>

<template>
  <section class="gallery">
    <div class="veil" />
    <header class="head">
      <button class="back" @click="game.backToTitle()">← 返回</button>
      <div>
        <h1>CG 鉴赏</h1>
        <p class="meta">
          已解锁 {{ game.unlockedCgList.length }} / {{ cgCatalog.length }}
        </p>
      </div>
    </header>

    <ul class="grid">
      <li
        v-for="cg in cgCatalog"
        :key="cg.id"
        class="card"
        :class="{ locked: !game.unlockedCgs.has(cg.id) }"
        @click="open(cg.id, game.unlockedCgs.has(cg.id))"
      >
        <div class="thumb">
          <img
            v-if="game.unlockedCgs.has(cg.id)"
            :src="cg.image"
            :alt="cg.title"
            draggable="false"
          />
          <span v-else class="lock">？</span>
        </div>
        <div class="info">
          <p class="title">
            {{ game.unlockedCgs.has(cg.id) ? cg.title : '尚未解锁' }}
          </p>
          <p class="req">亲密度 ≥ {{ cg.affectionRequired }}%</p>
        </div>
      </li>
    </ul>

    <Teleport to="body">
      <div v-if="viewDef" class="lightbox" @click="viewing = null">
        <img :src="viewDef.image" :alt="viewDef.title" draggable="false" />
        <div class="cap">
          <p class="t">{{ viewDef.title }}</p>
          <p class="s">{{ viewDef.subtitle }}</p>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.gallery {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1.5rem clamp(1rem, 4vw, 2.5rem) 2rem;
  overflow: auto;
  background:
    radial-gradient(ellipse at 20% 0%, rgba(196, 164, 132, 0.12), transparent 50%),
    linear-gradient(180deg, #0a121c, #152030);
}

.veil {
  pointer-events: none;
  position: fixed;
  inset: 0;
  background:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.025) 2px,
      rgba(0, 0, 0, 0.025) 4px
    );
}

.head {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.back {
  margin-top: 0.35rem;
  letter-spacing: 0.12em;
  color: rgba(232, 221, 208, 0.45);
  font-size: 0.85rem;
}
.back:hover {
  color: var(--foam);
}

h1 {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  font-weight: 400;
  letter-spacing: 0.3em;
  text-indent: 0.3em;
}

.meta {
  margin-top: 0.4rem;
  font-size: 0.8rem;
  color: rgba(196, 164, 132, 0.7);
  letter-spacing: 0.15em;
}

.grid {
  position: relative;
  z-index: 1;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
}

.card {
  cursor: pointer;
  border: 1px solid rgba(232, 221, 208, 0.12);
  background: rgba(8, 14, 22, 0.45);
  transition: border-color 0.3s, transform 0.3s;
}
.card:not(.locked):hover {
  border-color: rgba(196, 164, 132, 0.5);
  transform: translateY(-3px);
}
.card.locked {
  cursor: default;
  opacity: 0.55;
}

.thumb {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #0a1018;
  display: grid;
  place-items: center;
}
.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.lock {
  font-family: var(--font-display);
  font-size: 2rem;
  color: rgba(232, 221, 208, 0.25);
}

.info {
  padding: 0.85rem 1rem 1rem;
}
.title {
  font-size: 0.95rem;
  letter-spacing: 0.12em;
}
.req {
  margin-top: 0.35rem;
  font-size: 0.72rem;
  color: rgba(196, 164, 132, 0.55);
  letter-spacing: 0.08em;
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(4, 8, 14, 0.92);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  cursor: pointer;
}
.lightbox img {
  max-width: min(1100px, 96vw);
  max-height: 78vh;
  object-fit: contain;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.6);
}
.cap {
  margin-top: 1.25rem;
  text-align: center;
}
.cap .t {
  font-family: var(--font-display);
  letter-spacing: 0.25em;
  font-size: 1.2rem;
}
.cap .s {
  margin-top: 0.4rem;
  color: rgba(232, 221, 208, 0.5);
  font-size: 0.85rem;
}
</style>
