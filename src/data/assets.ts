/**
 * 资源约定：
 * - 背景 bg：完整场景图
 * - 立绘 char：透明底 PNG（RGBA）
 * - CG：全屏插画
 */
export const bgImages: Record<string, string> = {
  'port-night': '/images/bg/bg-port-night.png',
  'street-rain': '/images/bg/bg-street-rain.png',
  'shop-interior': '/images/bg/bg-shop-interior.png',
  bookstore: '/images/bg/bg-bookstore.png',
  'bookstore-close': '/images/bg/bg-bookstore-close.png',
  'bookstore-loft': '/images/bg/bg-bookstore-loft.png',
  'seaside-dawn': '/images/bg/bg-seaside-dawn.png',
  'wantang-room': '/images/bg/bg-bookstore-close.png',
  black: '',
}

/** 林晚棠表情 → 透明立绘 PNG（RGBA） */
export const wantangSprites: Record<string, string> = {
  default: '/images/char/wantang-default.png',
  soft: '/images/char/wantang-soft.png',
  tense: '/images/char/wantang-tense.png',
  blush: '/images/char/wantang-blush.png',
  avert: '/images/char/wantang-blush.png',
  smile: '/images/char/wantang-smile.png',
  hurt: '/images/char/wantang-hurt.png',
}

export function getCharSprite(character: string, expression: string): string {
  if (character === 'wantang') {
    return wantangSprites[expression] ?? wantangSprites.default
  }
  return wantangSprites.default
}
