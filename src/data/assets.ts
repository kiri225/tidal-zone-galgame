/**
 * 资源约定：
 * - 背景 bg：完整场景图
 * - 立绘 char：透明底 PNG（RGBA）
 * - CG：全屏插画
 *
 * ASSET_VER：换图后递增，强制浏览器绕过旧缓存
 */
export const ASSET_VER = '20260802b'

function asset(path: string): string {
  if (!path) return path
  const sep = path.includes('?') ? '&' : '?'
  return `${path}${sep}v=${ASSET_VER}`
}

export const bgImages: Record<string, string> = {
  'port-night': asset('/images/bg/bg-port-night.png'),
  'street-rain': asset('/images/bg/bg-street-rain.png'),
  'shop-interior': asset('/images/bg/bg-shop-interior.png'),
  bookstore: asset('/images/bg/bg-bookstore.png'),
  'bookstore-close': asset('/images/bg/bg-bookstore-close.png'),
  'bookstore-loft': asset('/images/bg/bg-bookstore-loft.png'),
  'seaside-dawn': asset('/images/bg/bg-seaside-dawn.png'),
  'wantang-room': asset('/images/bg/bg-bookstore-close.png'),
  black: '',
}

/** 林晚棠表情/姿态 → 透明立绘 PNG（RGBA） */
export const wantangSprites: Record<string, string> = {
  default: asset('/images/char/wantang-default.png'),
  soft: asset('/images/char/wantang-soft.png'),
  tense: asset('/images/char/wantang-tense.png'),
  blush: asset('/images/char/wantang-blush.png'),
  avert: asset('/images/char/wantang-avert.png'),
  smile: asset('/images/char/wantang-smile.png'),
  hurt: asset('/images/char/wantang-hurt.png'),
  laugh: asset('/images/char/wantang-laugh.png'),
  surprised: asset('/images/char/wantang-surprised.png'),
  teary: asset('/images/char/wantang-teary.png'),
  cold: asset('/images/char/wantang-cold.png'),
  tired: asset('/images/char/wantang-tired.png'),
  book: asset('/images/char/wantang-book.png'),
  crossed: asset('/images/char/wantang-crossed.png'),
}

export function getCharSprite(character: string, expression: string): string {
  if (character === 'wantang') {
    return wantangSprites[expression] ?? wantangSprites.default
  }
  return wantangSprites.default
}
