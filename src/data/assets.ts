/**
 * 资源约定：
 * - 背景 bg：完整场景图
 * - 立绘 char：透明底 PNG（RGBA）
 * - CG：全屏插画
 *
 * ASSET_VER：换图后递增，强制浏览器绕过旧缓存
 */
export const ASSET_VER = '20260802r'

function asset(path: string): string {
  if (!path) return path
  const sep = path.includes('?') ? '&' : '?'
  return `${path}${sep}v=${ASSET_VER}`
}

export const bgImages: Record<string, string> = {
  'port-night': asset('/images/bg/bg-port-night.png'),
  'port-dusk': asset('/images/bg/bg-port-dusk.png'),
  'street-rain': asset('/images/bg/bg-street-rain.png'),
  'street-night': asset('/images/bg/bg-street-night.png'),
  'street-day': asset('/images/bg/bg-street-day.png'),
  'shop-interior': asset('/images/bg/bg-shop-interior.png'),
  'shop-back': asset('/images/bg/bg-shop-back.png'),
  bookstore: asset('/images/bg/bg-bookstore.png'),
  'bookstore-close': asset('/images/bg/bg-bookstore-close.png'),
  'bookstore-loft': asset('/images/bg/bg-bookstore-loft.png'),
  'wantang-room': asset('/images/bg/bg-wantang-room.png'),
  'seaside-dawn': asset('/images/bg/bg-seaside-dawn.png'),
  'tide-pools': asset('/images/bg/bg-tide-pools.png'),
  'market-morning': asset('/images/bg/bg-market-morning.png'),
  'hotel-lobby': asset('/images/bg/bg-hotel-lobby.png'),
  'hotel-bar': asset('/images/bg/bg-hotel-bar.png'),
  gallery: asset('/images/bg/bg-gallery.png'),
  'research-station': asset('/images/bg/bg-research-station.png'),
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
  lean: asset('/images/char/wantang-lean.png'),
  coffee: asset('/images/char/wantang-coffee.png'),
  write: asset('/images/char/wantang-write.png'),
  offer: asset('/images/char/wantang-offer.png'),
  shush: asset('/images/char/wantang-shush.png'),
  beckon: asset('/images/char/wantang-beckon.png'),
  think: asset('/images/char/wantang-think.png'),
  wipe: asset('/images/char/wantang-wipe.png'),
  confused: asset('/images/char/wantang-confused.png'),
  leandesk: asset('/images/char/wantang-leandesk.png'),
  apron: asset('/images/char/wantang-apron.png'),
  apronlean: asset('/images/char/wantang-apronlean.png'),
  cardigan: asset('/images/char/wantang-cardigan.png'),
  cardigansoft: asset('/images/char/wantang-cardigansoft.png'),
  casual: asset('/images/char/wantang-casual.png'),
  casualsoft: asset('/images/char/wantang-casualsoft.png'),
  blouse: asset('/images/char/wantang-blouse.png'),
  blouseblush: asset('/images/char/wantang-blouseblush.png'),
}

export function getCharSprite(character: string, expression: string): string {
  if (character === 'wantang') {
    return wantangSprites[expression] ?? wantangSprites.default
  }
  return wantangSprites.default
}
