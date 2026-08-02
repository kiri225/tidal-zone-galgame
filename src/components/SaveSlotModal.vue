<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAuthStore } from '../stores/authStore'
import { useGameStore } from '../engine/gameStore'
import {
  formatSaveTime,
  routeLabel,
  type SlotSummary,
} from '../engine/saveTypes'
import { listSlots, removeSlot } from '../engine/saveService'

const props = defineProps<{
  mode: 'load' | 'save' | 'new'
}>()

const emit = defineEmits<{
  close: []
  done: []
}>()

const auth = useAuthStore()
const game = useGameStore()
const slots = ref<SlotSummary[]>([])
const busy = ref(false)
const message = ref<string | null>(null)

async function refresh() {
  busy.value = true
  message.value = null
  try {
    slots.value = await listSlots(auth.isLoggedIn ? auth.token : null)
  } catch {
    message.value = '读取存档失败'
  } finally {
    busy.value = false
  }
}

onMounted(refresh)

async function onSlot(slot: number) {
  if (busy.value) return
  busy.value = true
  message.value = null
  try {
    if (props.mode === 'load') {
      const ok = await game.loadFromSlot(slot)
      if (!ok) {
        message.value = '该槽位为空'
        return
      }
      emit('done')
      return
    }
    if (props.mode === 'new') {
      game.startGame(slot)
      await game.saveToSlot(slot)
      emit('done')
      return
    }
    // save
    await game.saveToSlot(slot)
    message.value = `已保存到槽位 ${slot + 1}`
    await refresh()
  } catch {
    message.value = '操作失败'
  } finally {
    busy.value = false
  }
}

async function onDelete(slot: number, e: Event) {
  e.stopPropagation()
  if (!confirm(`删除存档槽 ${slot + 1}？`)) return
  busy.value = true
  try {
    await removeSlot(auth.isLoggedIn ? auth.token : null, slot)
    await refresh()
  } finally {
    busy.value = false
  }
}

function titleText() {
  if (props.mode === 'load') return '读取存档'
  if (props.mode === 'new') return '选择存档槽'
  return '保存进度'
}
</script>

<template>
  <div class="backdrop" @click.self="emit('close')">
    <div class="panel" role="dialog" aria-modal="true">
      <h2>{{ titleText() }}</h2>
      <p class="desc">
        {{
          auth.isLoggedIn
            ? `已登录：${auth.username} · 云端同步`
            : '游客模式 · 仅保存在本机'
        }}
      </p>

      <ul class="slots">
        <li
          v-for="s in slots"
          :key="s.slot"
          class="slot"
          :class="{ empty: s.empty }"
          @click="onSlot(s.slot)"
        >
          <div class="slot-head">
            <span class="idx">槽位 {{ s.slot + 1 }}</span>
            <button
              v-if="!s.empty && mode !== 'new'"
              class="del"
              type="button"
              @click="onDelete(s.slot, $event)"
            >
              删除
            </button>
          </div>
          <template v-if="s.empty">
            <p class="empty-lab">空</p>
          </template>
          <template v-else>
            <p class="sum">{{ s.summary || routeLabel(s.routeId) }}</p>
            <p class="meta">
              {{ routeLabel(s.routeId) }}
              <span v-if="s.chapter"> · 第 {{ s.chapter }} 章</span>
            </p>
            <p class="time">{{ formatSaveTime(s.updatedAt) }}</p>
          </template>
        </li>
      </ul>

      <p v-if="message" class="msg">{{ message }}</p>
      <p v-if="busy" class="msg">处理中…</p>
      <button class="close" @click="emit('close')">关闭</button>
    </div>
  </div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  z-index: 80;
  background: rgba(5, 10, 16, 0.72);
  display: grid;
  place-items: center;
  padding: 1.5rem;
}

.panel {
  width: min(520px, 100%);
  padding: 1.75rem 1.5rem 1.25rem;
  background: linear-gradient(180deg, rgba(19, 37, 54, 0.96), rgba(11, 22, 34, 0.98));
  border: 1px solid rgba(196, 164, 132, 0.35);
}

h2 {
  font-family: var(--font-display);
  font-weight: 400;
  letter-spacing: 0.28em;
  text-indent: 0.28em;
  color: var(--amber-bright);
  font-size: 1.35rem;
}

.desc {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: rgba(232, 221, 208, 0.5);
  letter-spacing: 0.06em;
}

.slots {
  list-style: none;
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.slot {
  padding: 0.85rem 1rem;
  border: 1px solid rgba(196, 164, 132, 0.25);
  cursor: pointer;
  transition: background 0.25s, border-color 0.25s;
}

.slot:hover {
  background: rgba(196, 164, 132, 0.08);
  border-color: rgba(196, 164, 132, 0.5);
}

.slot-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.idx {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: rgba(196, 164, 132, 0.85);
}

.del {
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: rgba(232, 160, 160, 0.7);
}

.del:hover {
  color: #e8a0a0;
}

.empty-lab {
  margin-top: 0.35rem;
  color: rgba(232, 221, 208, 0.35);
  letter-spacing: 0.3em;
}

.sum {
  margin-top: 0.35rem;
  color: var(--foam);
  letter-spacing: 0.08em;
}

.meta,
.time {
  margin-top: 0.2rem;
  font-size: 0.75rem;
  color: rgba(232, 221, 208, 0.45);
}

.msg {
  margin-top: 0.85rem;
  font-size: 0.8rem;
  color: var(--amber);
}

.close {
  display: block;
  margin: 1rem auto 0;
  padding: 0.4rem 1rem;
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  color: rgba(232, 221, 208, 0.5);
}

.close:hover {
  color: var(--amber-bright);
}
</style>
