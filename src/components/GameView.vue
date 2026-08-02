<script setup lang="ts">
import { computed, watch, ref, onMounted, onUnmounted } from 'vue'
import { useGameStore } from '../engine/gameStore'
import { bgLabels, speakerColors } from '../data/characters'
import { formatAffection } from '../data/affection'
import { cgCatalog } from '../data/cg'
import { useDeviceProfile } from '../composables/useDeviceProfile'
import BackgroundLayer from './BackgroundLayer.vue'
import CharacterSprite from './CharacterSprite.vue'
import TypewriterText from './TypewriterText.vue'
import CgOverlay from './CgOverlay.vue'
import SaveSlotModal from './SaveSlotModal.vue'

const game = useGameStore()
const { profile, cssVars } = useDeviceProfile()
const showUI = ref(true)
const showMenu = ref(false)
const slotMode = ref<'save' | 'load' | null>(null)

const hasChoices = computed(() => !!game.currentNode?.choices?.length)
const place = computed(() => bgLabels[game.bg] ?? '')
const nameColor = computed(() => speakerColors[game.speaker] ?? '#e8ddd0')
const affLabel = computed(() => formatAffection(game.affection))
/** affection 已是 0–100，进度条宽度直接等于点数 */
const affFill = computed(() =>
  Math.min(100, Math.max(0, Math.round(game.affection))),
)
const nextCgHint = computed(() => {
  const route = game.routeId
  const forRoute = (c: (typeof cgCatalog)[number]) => !c.route || c.route === route
  // 按「尚未达到的好感门槛」提示，不看图鉴是否已静默写入
  const next = cgCatalog.find(
    (c) => forRoute(c) && !c.storyUnlock && game.affection < c.affectionRequired,
  )
  if (!next) return '好感 CG 门槛已满'
  const need = next.affectionRequired - game.affection
  return `下一 CG · ${formatAffection(next.affectionRequired)}（还差 ${need}%）`
})
const affTitle = computed(() =>
  game.routeId === 'qinglan'
    ? '晴岚好感'
    : game.routeId === 'qinghe'
      ? '清禾好感'
      : game.routeId === 'wantang'
        ? '晚棠好感'
        : '亲密度',
)
/** 章节号已在右上角 HUD，正文里去掉【第N章】标题行 */
const dialogueText = computed(() =>
  (game.text ?? '').replace(/^【第\d+章】[^\n]*\n?/, ''),
)

/** 解锁提示 / 全屏预览优先消费点击，避免一碰就跳过 CG */
function consumeCgGate(): boolean {
  if (game.pendingCgUnlock) {
    game.dismissCgUnlock()
    return true
  }
  return false
}

function onGameClick() {
  if (consumeCgGate()) return
  if (!hasChoices.value) game.advance()
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
    e.preventDefault()
    if (consumeCgGate()) return
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
  <section
    class="game"
    :class="[
      `mood-${game.mood}`,
      `device-${profile.kind}`,
      `orient-${profile.orientation}`,
      {
        'has-cg': !!game.cg,
        'cg-gated': !!game.pendingCgUnlock && !game.cg,
        'short-land': profile.shortLandscape,
        'compact-hud': profile.compactHud,
      },
    ]"
    :style="cssVars"
    @click="onGameClick"
  >
    <BackgroundLayer v-show="!game.cg" :bg="game.bg" :mood="game.mood" />
    <CharacterSprite
      v-if="game.sprite && !game.cg"
      :character="game.sprite"
      :expression="game.expression"
      :bg="game.bg"
    />
    <CgOverlay />

    <div class="hud">
      <div class="hud-left">
        <span class="place">{{ place }}</span>
        <button class="menu-btn" type="button" @click.stop="showMenu = !showMenu">菜单</button>
      </div>
      <div class="hud-right">
        <span v-if="game.chapter" class="chapter">第 {{ game.chapter }} 章 · {{ game.chapterTitle }}</span>
        <span class="aff" :title="affTitle">亲密度 {{ affLabel }}</span>
        <div class="aff-bar" aria-hidden="true">
          <div class="aff-fill" :style="{ width: affFill + '%' }" />
        </div>
        <span v-if="game.affectionDelta" class="aff-delta" :class="{ down: game.affectionDelta < 0 }">
          {{ game.affectionDelta > 0 ? '+' : '' }}{{ game.affectionDelta }}%
        </span>
        <span v-if="!profile.compactHud" class="aff-hint">{{ nextCgHint }}</span>
      </div>
    </div>

    <div v-if="showMenu" class="menu" @click.stop>
      <button type="button" @click="slotMode = 'save'; showMenu = false">保存</button>
      <button type="button" @click="slotMode = 'load'; showMenu = false">读档</button>
      <button type="button" @click="game.backToTitle(); showMenu = false">返回标题</button>
      <button type="button" class="dim" @click="showMenu = false">关闭</button>
    </div>

    <SaveSlotModal
      v-if="slotMode"
      :mode="slotMode"
      @close="slotMode = null"
      @done="slotMode = null"
    />

    <div v-show="!(game.pendingCgUnlock && !game.cg)" class="panel" @click.stop>
      <div v-if="game.speaker" class="name" :style="{ color: nameColor }">
        {{ game.speaker }}
      </div>
      <TypewriterText :text="dialogueText" class="body" />

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
        <span class="tip">{{ game.cg ? '欣赏 CG · 点击 / 空格 继续' : '点击 / 空格 继续' }}</span>
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
  /* 由 useDeviceProfile 自动写入；此处仅兜底 */
  --dialogue-reserve: 10.5rem;
  --panel-max-height: min(38vh, 280px);
  --panel-pad: 1rem 1.35rem;
  --body-max-height: 9.5em;
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
  max-width: 40%;
  pointer-events: auto;
}

.menu-btn {
  align-self: flex-start;
  margin-top: 0.35rem;
  padding: 0.25rem 0.55rem;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: rgba(224, 196, 160, 0.75);
  border: 1px solid rgba(196, 164, 132, 0.28);
}

.menu-btn:hover {
  background: rgba(196, 164, 132, 0.1);
}

.menu {
  position: absolute;
  top: 4rem;
  left: 1.5rem;
  z-index: 20;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-width: 9rem;
  padding: 0.75rem;
  background: rgba(11, 22, 34, 0.92);
  border: 1px solid rgba(196, 164, 132, 0.35);
}

.menu button {
  padding: 0.55rem 0.75rem;
  text-align: left;
  letter-spacing: 0.2em;
  font-size: 0.8rem;
  color: rgba(232, 221, 208, 0.8);
}

.menu button:hover {
  color: var(--amber-bright);
  background: rgba(196, 164, 132, 0.08);
}

.menu .dim {
  color: rgba(232, 221, 208, 0.4);
}

.hud-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;
  max-width: 55%;
  text-align: right;
}

.chapter {
  color: rgba(196, 164, 132, 0.85);
  letter-spacing: 0.12em;
  font-size: 0.78rem;
}

.place {
  color: rgba(232, 221, 208, 0.4);
}

.aff {
  color: rgba(196, 164, 132, 0.85);
  font-variant-numeric: tabular-nums;
}

.aff-bar {
  width: 7.5rem;
  height: 3px;
  margin-top: 0.15rem;
  border-radius: 2px;
  background: rgba(232, 221, 208, 0.12);
  overflow: hidden;
}

.aff-fill {
  height: 100%;
  border-radius: 2px;
  background: linear-gradient(90deg, rgba(196, 164, 132, 0.55), rgba(224, 196, 160, 0.95));
  transition: width 0.45s ease;
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
  border-color: rgba(196, 164, 132, 0.45);
  padding-right: 1.75rem;
  background:
    linear-gradient(180deg, rgba(10, 16, 24, 0.88), rgba(6, 12, 20, 0.96));
}

.cg-gated .hud {
  opacity: 0.35;
}

.panel {
  position: absolute;
  left: 50%;
  bottom: max(0.5rem, env(safe-area-inset-bottom, 0px));
  transform: translateX(-50%);
  width: min(920px, calc(100% - 1.25rem));
  max-height: var(--panel-max-height);
  /* 高于立绘(2)：不透明盖住下半身，上半身露在对话框上沿 */
  z-index: 10;
  padding: var(--panel-pad);
  padding-bottom: calc(0.75rem + env(safe-area-inset-bottom, 0px));
  background:
    linear-gradient(180deg, rgba(10, 16, 24, 0.96), rgba(6, 12, 20, 0.99));
  border: 1px solid rgba(232, 221, 208, 0.14);
  backdrop-filter: blur(16px);
  box-shadow: 0 -20px 60px rgba(0, 0, 0, 0.45);
  cursor: default;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 顶沿加一层实遮，避免腿从半透明透出来 */
.panel::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 1.75rem;
  background: linear-gradient(
    180deg,
    rgba(8, 14, 22, 0.98),
    rgba(8, 14, 22, 0.55) 70%,
    transparent
  );
  pointer-events: none;
  border-radius: inherit;
  z-index: 1;
}

.name {
  font-family: var(--font-display);
  font-size: 0.98rem;
  letter-spacing: 0.2em;
  margin-bottom: 0.45rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid rgba(232, 221, 208, 0.1);
  flex-shrink: 0;
  position: relative;
  z-index: 2;
}

.body {
  min-height: 2.2em;
  max-height: var(--body-max-height);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  line-height: 1.7;
  font-size: clamp(0.9rem, 2.1vw, 1.05rem);
  white-space: pre-wrap;
  color: rgba(232, 221, 208, 0.92);
  position: relative;
  z-index: 2;
  overscroll-behavior: contain;
}

.choices {
  list-style: none;
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  overflow-y: auto;
  max-height: min(28vh, 180px);
  flex-shrink: 1;
  position: relative;
  z-index: 2;
}

.choices li {
  padding: 0.65rem 0.9rem;
  border: 1px solid rgba(196, 164, 132, 0.28);
  background: rgba(196, 164, 132, 0.06);
  font-size: 0.88rem;
  line-height: 1.45;
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
  margin-top: 0.45rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-end;
  color: rgba(232, 221, 208, 0.35);
  font-size: 0.72rem;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
}

/* 由 useDeviceProfile 自动识别 device-* / short-land / compact-hud */
.device-phone .hud,
.device-tablet.short-land .hud,
.compact-hud .hud {
  top: max(0.5rem, env(safe-area-inset-top, 0px));
  left: 0.75rem;
  right: 0.75rem;
  font-size: 0.65rem;
}

.device-phone .panel,
.short-land .panel {
  width: calc(100% - 0.75rem);
}

.device-phone .name {
  font-size: 0.88rem;
  margin-bottom: 0.3rem;
}

.device-phone .body {
  font-size: 0.9rem;
  line-height: 1.55;
}

.short-land .hud {
  top: 0.3rem;
  font-size: 0.6rem;
}

.short-land .aff-bar {
  display: none;
}

.short-land .name {
  font-size: 0.78rem;
  margin-bottom: 0.15rem;
  padding-bottom: 0.1rem;
}

.short-land .body {
  min-height: 1.4em;
  font-size: 0.8rem;
  line-height: 1.4;
}

.short-land .choices {
  max-height: 26vh;
  margin-top: 0.3rem;
  gap: 0.28rem;
}

.short-land .choices li {
  padding: 0.35rem 0.6rem;
  font-size: 0.76rem;
}

.short-land .continue {
  margin-top: 0.15rem;
  font-size: 0.62rem;
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
