/**
 * 立绘相对背景的透视布局（按场景相机距离）。
 * scale：相对默认立绘尺寸的倍率（室内远/中景更小，街景略大）
 * xPercent：水平锚点（避开环灯、吧台、屏幕墙等前景）
 * bottomVh：贴底偏移（负值=腿伸进对话框后方）
 */
export type SpriteLayout = {
  scale: number
  xPercent: number
  bottomVh: number
}

const DEFAULT_LAYOUT: SpriteLayout = {
  scale: 0.74,
  xPercent: 50,
  bottomVh: -7,
}

/** 背景 key → 布局（与 bgImages 对齐） */
export const bgSpriteLayout: Record<string, SpriteLayout> = {
  'qinghe-room': { scale: 0.66, xPercent: 60, bottomVh: -12 },
  'qinghe-room-off': { scale: 0.68, xPercent: 56, bottomVh: -11 },
  bookstore: { scale: 0.72, xPercent: 52, bottomVh: -9 },
  'bookstore-close': { scale: 0.76, xPercent: 50, bottomVh: -7 },
  'bookstore-loft': { scale: 0.7, xPercent: 54, bottomVh: -9 },
  'shop-interior': { scale: 0.7, xPercent: 52, bottomVh: -9 },
  'shop-back': { scale: 0.68, xPercent: 50, bottomVh: -9 },
  'hotel-lobby': { scale: 0.62, xPercent: 50, bottomVh: -12 },
  'hotel-lobby-storm': { scale: 0.62, xPercent: 50, bottomVh: -12 },
  'hotel-corridor': { scale: 0.7, xPercent: 52, bottomVh: -9 },
  'hotel-bar': { scale: 0.72, xPercent: 46, bottomVh: -8 },
  'hotel-duty': { scale: 0.74, xPercent: 50, bottomVh: -7 },
  'hotel-room': { scale: 0.7, xPercent: 55, bottomVh: -9 },
  'hotel-monitor': { scale: 0.68, xPercent: 58, bottomVh: -9 },
  'hotel-service': { scale: 0.68, xPercent: 50, bottomVh: -10 },
  'street-rain': { scale: 0.76, xPercent: 50, bottomVh: -6 },
  'street-night': { scale: 0.76, xPercent: 50, bottomVh: -6 },
  'street-day': { scale: 0.76, xPercent: 50, bottomVh: -6 },
  'port-night': { scale: 0.66, xPercent: 46, bottomVh: -10 },
  'port-dusk': { scale: 0.66, xPercent: 46, bottomVh: -10 },
  'market-morning': { scale: 0.72, xPercent: 50, bottomVh: -7 },
  'tide-pools': { scale: 0.7, xPercent: 50, bottomVh: -8 },
  'seaside-dawn': { scale: 0.68, xPercent: 50, bottomVh: -9 },
  gallery: { scale: 0.72, xPercent: 52, bottomVh: -8 },
  'wantang-room': { scale: 0.72, xPercent: 52, bottomVh: -8 },
  'research-station': { scale: 0.7, xPercent: 50, bottomVh: -9 },
}

/** 姿态差分微调（在背景布局之上叠加） */
const expressionTweaks: Record<string, Partial<SpriteLayout>> = {
  lean: { scale: 0.95, bottomVh: 2 },
  leandesk: { scale: 0.92, bottomVh: 3 },
  phone: { scale: 0.98, xPercent: 2 },
  ringlight: { xPercent: 4 },
  book: { scale: 0.96 },
  coffee: { scale: 0.96 },
  write: { scale: 0.94, bottomVh: 2 },
  crossed: { scale: 0.98 },
}

export function resolveSpriteLayout(bg: string, expression: string): SpriteLayout {
  const base = bgSpriteLayout[bg] ?? DEFAULT_LAYOUT
  const tweak = expressionTweaks[expression]
  if (!tweak) return base
  return {
    scale: Math.max(0.5, base.scale * (tweak.scale ?? 1)),
    xPercent: Math.min(72, Math.max(28, base.xPercent + (tweak.xPercent ?? 0))),
    bottomVh: base.bottomVh + (tweak.bottomVh ?? 0),
  }
}
