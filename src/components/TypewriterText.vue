<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'
import { useGameStore } from '../engine/gameStore'

const props = defineProps<{ text: string }>()
const game = useGameStore()
const displayed = ref('')
let timer: ReturnType<typeof setInterval> | null = null

function clear() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

function finish() {
  clear()
  displayed.value = props.text
  game.setTyping(false)
}

function start() {
  clear()
  displayed.value = ''
  game.setTyping(true)
  let i = 0
  timer = setInterval(() => {
    if (game.skipTyping) {
      finish()
      return
    }
    i++
    displayed.value = props.text.slice(0, i)
    if (i >= props.text.length) finish()
  }, 28)
}

watch(
  () => props.text,
  () => start(),
  { immediate: true },
)

onUnmounted(clear)
</script>

<template>
  <p>{{ displayed }}<span v-if="game.isTyping" class="caret">▍</span></p>
</template>

<style scoped>
.caret {
  animation: blink 0.7s step-end infinite;
  color: var(--amber);
  margin-left: 1px;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
