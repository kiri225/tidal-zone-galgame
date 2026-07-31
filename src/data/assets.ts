/**
 * 资源约定：
 * - 背景 bg：可带场景底的整图
 * - 立绘 char：必须是透明底 PNG（RGBA），勿带实景背景
 * - CG：全屏插画，好感达标解锁
 */
export const bgImages: Record<string, string> = {
  'port-night': '/images/bg/bg-port-night.png',
  'street-rain': '/images/bg/bg-street-rain.png',
  'shop-interior': '/images/bg/bg-shop-interior.png',
  bookstore: '/images/bg/bg-bookstore.png',
  'bookstore-close': '/images/bg/bg-bookstore-close.png',
  'seaside-dawn': '/images/bg/bg-seaside-dawn.png',
  'wantang-room': '/images/bg/bg-bookstore-close.png',
  black: '',
}

/** 林晚棠表情 → 透明立绘 PNG */
export const wantangSprites: Record<string, string> = {
  default: '/images/char/wantang-default.png',
  soft: '/images/char/wantang-smile.png',
  tense: '/images/char/wantang-default.png',
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
