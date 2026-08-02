import { computed, onMounted, onUnmounted, readonly, ref } from 'vue'

export type DeviceKind = 'phone' | 'tablet' | 'desktop'
export type DeviceOrientation = 'portrait' | 'landscape'

export type DeviceProfile = {
  kind: DeviceKind
  orientation: DeviceOrientation
  /** 横屏且可视高度很矮（典型手机横持） */
  shortLandscape: boolean
  touch: boolean
  coarsePointer: boolean
  width: number
  height: number
  /** 立绘相对场景布局的设备倍率 */
  spriteScaleMul: number
  /** 立绘基准宽（px 上限用 clamp 表达的中间值由 CSS 变量驱动） */
  spriteWidth: string
  spriteHeight: string
  /** 对话框预留高度 */
  dialogueReserve: string
  panelMaxHeight: string
  panelPad: string
  bodyMaxHeight: string
  compactHud: boolean
}

function readViewport() {
  const vv = window.visualViewport
  return {
    width: Math.round(vv?.width ?? window.innerWidth),
    height: Math.round(vv?.height ?? window.innerHeight),
  }
}

function detectTouch(): boolean {
  return (
    'ontouchstart' in window ||
    (navigator.maxTouchPoints ?? 0) > 0 ||
    window.matchMedia('(pointer: coarse)').matches
  )
}

function detectKind(width: number, height: number, touch: boolean): DeviceKind {
  const minSide = Math.min(width, height)
  const maxSide = Math.max(width, height)
  const ua = navigator.userAgent || ''
  const uaPhone = /iPhone|iPod|Android.+Mobile|Windows Phone|Mobile/i.test(ua)
  const uaTablet = /iPad|Android(?!.*Mobile)|Tablet/i.test(ua)

  // iPadOS 桌面 UA 伪装：有触摸且较大屏仍当平板
  if (uaTablet || (touch && minSide >= 600 && maxSide >= 900 && !uaPhone)) {
    return 'tablet'
  }
  if (uaPhone || (touch && minSide < 600) || (touch && maxSide < 900 && minSide < 500)) {
    return 'phone'
  }
  if (!touch && minSide >= 700) return 'desktop'
  if (touch && minSide >= 600) return 'tablet'
  return minSide < 640 ? 'phone' : 'desktop'
}

function buildProfile(): DeviceProfile {
  const { width, height } = readViewport()
  const touch = detectTouch()
  const coarsePointer = window.matchMedia('(pointer: coarse)').matches
  const orientation: DeviceOrientation = width >= height ? 'landscape' : 'portrait'
  const kind = detectKind(width, height, touch)
  const shortLandscape =
    orientation === 'landscape' && height <= 560 && (kind === 'phone' || kind === 'tablet')

  if (kind === 'phone' && shortLandscape) {
    return {
      kind,
      orientation,
      shortLandscape: true,
      touch,
      coarsePointer,
      width,
      height,
      spriteScaleMul: 0.82,
      spriteWidth: 'clamp(160px, 36vh, 320px)',
      spriteHeight: 'min(52vh, 380px)',
      dialogueReserve: '5.5rem',
      panelMaxHeight: 'min(40vh, 150px)',
      panelPad: '0.4rem 0.7rem',
      bodyMaxHeight: '4.2em',
      compactHud: true,
    }
  }

  if (kind === 'phone') {
    return {
      kind,
      orientation,
      shortLandscape: false,
      touch,
      coarsePointer,
      width,
      height,
      spriteScaleMul: 0.9,
      spriteWidth: 'clamp(200px, 56vw, 340px)',
      spriteHeight: 'min(58vh, 520px)',
      dialogueReserve: '8rem',
      panelMaxHeight: 'min(32vh, 210px)',
      panelPad: '0.7rem 0.85rem',
      bodyMaxHeight: '6.8em',
      compactHud: true,
    }
  }

  if (kind === 'tablet') {
    return {
      kind,
      orientation,
      shortLandscape,
      touch,
      coarsePointer,
      width,
      height,
      spriteScaleMul: shortLandscape ? 0.88 : 0.95,
      spriteWidth: shortLandscape
        ? 'clamp(220px, 40vh, 420px)'
        : 'clamp(280px, 42vh, 500px)',
      spriteHeight: shortLandscape ? 'min(60vh, 520px)' : 'min(70vh, 720px)',
      dialogueReserve: shortLandscape ? '6.5rem' : '9.5rem',
      panelMaxHeight: shortLandscape ? 'min(36vh, 180px)' : 'min(34vh, 260px)',
      panelPad: shortLandscape ? '0.55rem 1rem' : '0.9rem 1.25rem',
      bodyMaxHeight: shortLandscape ? '5em' : '8.5em',
      compactHud: shortLandscape,
    }
  }

  // desktop
  return {
    kind: 'desktop',
    orientation,
    shortLandscape: false,
    touch,
    coarsePointer,
    width,
    height,
    spriteScaleMul: 1,
    spriteWidth: 'clamp(300px, 48vh, 560px)',
    spriteHeight: 'min(78vh, 820px)',
    dialogueReserve: '10.5rem',
    panelMaxHeight: 'min(38vh, 280px)',
    panelPad: '1rem 1.35rem',
    bodyMaxHeight: '9.5em',
    compactHud: false,
  }
}

const profile = ref<DeviceProfile>(
  typeof window === 'undefined'
    ? {
        kind: 'desktop',
        orientation: 'landscape',
        shortLandscape: false,
        touch: false,
        coarsePointer: false,
        width: 1280,
        height: 720,
        spriteScaleMul: 1,
        spriteWidth: 'clamp(300px, 48vh, 560px)',
        spriteHeight: 'min(78vh, 820px)',
        dialogueReserve: '10.5rem',
        panelMaxHeight: 'min(38vh, 280px)',
        panelPad: '1rem 1.35rem',
        bodyMaxHeight: '9.5em',
        compactHud: false,
      }
    : buildProfile(),
)

let listening = false
let raf = 0

function refresh() {
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    profile.value = buildProfile()
  })
}

function ensureListeners() {
  if (listening || typeof window === 'undefined') return
  listening = true
  window.addEventListener('resize', refresh, { passive: true })
  window.addEventListener('orientationchange', refresh, { passive: true })
  window.visualViewport?.addEventListener('resize', refresh, { passive: true })
  window.visualViewport?.addEventListener('scroll', refresh, { passive: true })
}

function teardownListeners() {
  if (!listening || typeof window === 'undefined') return
  listening = false
  window.removeEventListener('resize', refresh)
  window.removeEventListener('orientationchange', refresh)
  window.visualViewport?.removeEventListener('resize', refresh)
  window.visualViewport?.removeEventListener('scroll', refresh)
  cancelAnimationFrame(raf)
}

/** 全局设备档案：自动识别手机/平板/桌面与横竖屏 */
export function useDeviceProfile() {
  onMounted(() => {
    ensureListeners()
    refresh()
  })
  onUnmounted(() => {
    // 多组件共用时不立刻拆；App 级挂载一次即可。此处仅刷新一次保证最新。
  })

  const cssVars = computed(() => ({
    '--device-kind': profile.value.kind,
    '--dialogue-reserve': profile.value.dialogueReserve,
    '--panel-max-height': profile.value.panelMaxHeight,
    '--panel-pad': profile.value.panelPad,
    '--body-max-height': profile.value.bodyMaxHeight,
    '--sprite-base-width': profile.value.spriteWidth,
    '--sprite-base-height': profile.value.spriteHeight,
  }))

  return {
    profile: readonly(profile),
    cssVars,
    refresh,
    ensureListeners,
  }
}

/** 在根组件调用一次，保证全局监听 */
export function useDeviceProfileRoot() {
  const api = useDeviceProfile()
  onMounted(() => {
    api.ensureListeners()
    api.refresh()
  })
  onUnmounted(() => {
    teardownListeners()
  })
  return api
}
