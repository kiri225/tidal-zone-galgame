import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { DialogueNode, Expression, Screen } from './types'
import { commonScript } from '../data/story/common'
import { wantangScript } from '../data/story/wantang'
import { endings } from '../data/story/endings'
import { AffThreshold, clampAffection } from '../data/affection'
import { cgCatalog } from '../data/cg'

const ALL_SCRIPTS: Record<string, DialogueNode[]> = {
  common: commonScript,
  wantang: wantangScript,
}

const CG_STORAGE_KEY = 'tidal-unlocked-cgs'

function loadUnlockedCgs(): Set<string> {
  try {
    const raw = localStorage.getItem(CG_STORAGE_KEY)
    if (!raw) return new Set()
    return new Set(JSON.parse(raw) as string[])
  } catch {
    return new Set()
  }
}

function saveUnlockedCgs(set: Set<string>) {
  localStorage.setItem(CG_STORAGE_KEY, JSON.stringify([...set]))
}

export const useGameStore = defineStore('game', () => {
  const screen = ref<Screen>('title')
  const routeId = ref('common')
  const nodeId = ref('start')
  const affection = ref(0)
  const flags = ref<Set<string>>(new Set())
  const history = ref<string[]>([])
  const isTyping = ref(false)
  const skipTyping = ref(false)
  const endingId = ref<'true' | 'good' | 'bittersweet' | null>(null)
  const unlockedCgs = ref<Set<string>>(loadUnlockedCgs())
  /** 刚解锁的 CG，用于弹层提示 */
  const pendingCgUnlock = ref<string | null>(null)
  /** 本周目刚涨的好感，供 HUD 飘字 */
  const affectionDelta = ref(0)

  const bg = ref('port-night')
  const sprite = ref<string | null>(null)
  const expression = ref<Expression>('default')
  const mood = ref<DialogueNode['mood']>('normal')
  const cg = ref<string | null>(null)
  const speaker = ref('')
  const text = ref('')
  const chapter = ref(0)
  const chapterTitle = ref('')

  const scriptMap = computed(() => {
    const list = ALL_SCRIPTS[routeId.value] ?? []
    return Object.fromEntries(list.map((n) => [n.id, n]))
  })

  const currentNode = computed(() => scriptMap.value[nodeId.value])

  const endingData = computed(() => {
    if (!endingId.value) return null
    return endings[endingId.value]
  })

  const unlockedCgList = computed(() =>
    cgCatalog.filter((c) => unlockedCgs.value.has(c.id)),
  )

  function hasFlag(f: string) {
    return flags.value.has(f)
  }

  function unlockCg(id: string) {
    if (unlockedCgs.value.has(id)) return false
    unlockedCgs.value = new Set([...unlockedCgs.value, id])
    saveUnlockedCgs(unlockedCgs.value)
    pendingCgUnlock.value = id
    return true
  }

  /** 按好感阈值自动解锁图鉴 */
  function checkAffectionCgs() {
    for (const def of cgCatalog) {
      if (affection.value >= def.affectionRequired) {
        unlockCg(def.id)
      }
    }
  }

  function dismissCgUnlock() {
    pendingCgUnlock.value = null
  }

  function applyNode(node: DialogueNode) {
    if (node.bg) bg.value = node.bg
    if (node.sprite !== undefined) sprite.value = node.sprite
    if (node.expression) expression.value = node.expression
    if (node.mood) mood.value = node.mood
    if (node.chapter !== undefined) {
      chapter.value = node.chapter
      chapterTitle.value = node.chapterTitle ?? ''
    }
    if (node.cg !== undefined) {
      cg.value = node.cg
      if (node.cg) {
        sprite.value = null
        unlockCg(node.cg)
      }
    } else {
      cg.value = null
    }
    speaker.value = node.speaker ?? ''
    text.value = node.text ?? ''
    if (node.setFlag) flags.value.add(node.setFlag)
    if (node.unlockCg) unlockCg(node.unlockCg)
    if (node.ending) {
      endingId.value = node.ending
    }
  }

  function startGame() {
    routeId.value = 'common'
    nodeId.value = 'start'
    affection.value = 0
    affectionDelta.value = 0
    flags.value = new Set()
    history.value = []
    endingId.value = null
    cg.value = null
    pendingCgUnlock.value = null
    screen.value = 'game'
    goTo('start')
  }

  function enterRoute(id: string) {
    routeId.value = id
    nodeId.value = 'route-start'
    history.value = []
    cg.value = null
    chapter.value = 0
    chapterTitle.value = ''
    pendingCgUnlock.value = null
    screen.value = 'game'
    goTo('route-start')
  }

  function openGallery() {
    screen.value = 'gallery'
  }

  function goTo(id: string) {
    const node = (ALL_SCRIPTS[routeId.value] ?? []).find((n) => n.id === id)
    if (!node) {
      console.warn('missing node', routeId.value, id)
      return
    }

    // 纯分支节点（无文本）立即跳转，不占一屏
    const silentBranch =
      !node.text &&
      !node.choices?.length &&
      (node.affectionBranch || node.branch)
    if (silentBranch) {
      if (node.setFlag) flags.value.add(node.setFlag)
      if (node.unlockCg) unlockCg(node.unlockCg)
      let nextId: string | undefined
      if (node.affectionBranch) {
        nextId =
          affection.value >= node.affectionBranch.threshold
            ? node.affectionBranch.whenMet
            : node.affectionBranch.whenNot
      } else if (node.branch) {
        nextId = hasFlag(node.branch.flag)
          ? node.branch.whenTrue
          : node.branch.whenFalse
      }
      if (nextId) {
        goTo(nextId)
        return
      }
    }

    nodeId.value = id
    history.value.push(id)
    applyNode(node)

    const pending = node as DialogueNode & { _pendingNext?: string }

    if (node.branch) {
      pending._pendingNext = hasFlag(node.branch.flag)
        ? node.branch.whenTrue
        : node.branch.whenFalse
    }

    if (node.affectionBranch) {
      pending._pendingNext =
        affection.value >= node.affectionBranch.threshold
          ? node.affectionBranch.whenMet
          : node.affectionBranch.whenNot
    }
  }

  function advance() {
    if (isTyping.value) {
      skipTyping.value = true
      return
    }
    const node = currentNode.value
    if (!node) return
    if (node.choices?.length) return

    if (node.ending) {
      screen.value = 'ending'
      return
    }

    const pending = (node as DialogueNode & { _pendingNext?: string })._pendingNext
    if (pending) {
      goTo(pending)
      return
    }

    if (node.next === 'story-select') {
      screen.value = 'story-select'
      return
    }

    if (node.next) {
      if (node.next === '__ending__') {
        resolveEnding()
        return
      }
      goTo(node.next)
    }
  }

  function choose(choiceIndex: number) {
    const node = currentNode.value
    if (!node?.choices?.[choiceIndex]) return
    const c = node.choices[choiceIndex]
    if (c.affection) {
      const next = clampAffection(affection.value + c.affection)
      const applied = next - affection.value
      affection.value = next
      affectionDelta.value = applied
      checkAffectionCgs()
      window.setTimeout(() => {
        if (affectionDelta.value === applied) affectionDelta.value = 0
      }, 1600)
    }
    if (c.setFlag) flags.value.add(c.setFlag)
    goTo(c.next)
  }

  function resolveEnding() {
    checkAffectionCgs()
    // True: aff≥60% + 留下 + 坦白
    if (
      affection.value >= AffThreshold.trueEnd &&
      hasFlag('stay') &&
      hasFlag('confess')
    ) {
      unlockCg('intertidal')
      goTo('ending-true')
    } else if (
      affection.value >= AffThreshold.goodEnd &&
      (hasFlag('stay') || hasFlag('confess'))
    ) {
      goTo('ending-good')
    } else {
      goTo('ending-bitter')
    }
  }

  function backToTitle() {
    screen.value = 'title'
    pendingCgUnlock.value = null
  }

  function setTyping(v: boolean) {
    isTyping.value = v
    if (!v) skipTyping.value = false
  }

  return {
    screen,
    routeId,
    nodeId,
    affection,
    affectionDelta,
    flags,
    history,
    isTyping,
    skipTyping,
    endingId,
    unlockedCgs,
    unlockedCgList,
    pendingCgUnlock,
    bg,
    sprite,
    expression,
    mood,
    cg,
    speaker,
    text,
    chapter,
    chapterTitle,
    currentNode,
    endingData,
    hasFlag,
    startGame,
    enterRoute,
    openGallery,
    goTo,
    advance,
    choose,
    backToTitle,
    setTyping,
    unlockCg,
    dismissCgUnlock,
    checkAffectionCgs,
  }
})
