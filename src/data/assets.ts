/**
 * 资源约定：
 * - 背景 bg：完整场景图
 * - 立绘 char：透明 WebP
 * - CG / bg：WebP 全屏图
 *
 * ASSET_VER：换图后递增，强制浏览器绕过旧缓存
 */
export const ASSET_VER = '20260802s'

function asset(path: string): string {
  if (!path) return path
  const sep = path.includes('?') ? '&' : '?'
  return `${path}${sep}v=${ASSET_VER}`
}

export const bgImages: Record<string, string> = {
  'port-night': asset('/images/bg/bg-port-night.webp'),
  'port-dusk': asset('/images/bg/bg-port-dusk.webp'),
  'street-rain': asset('/images/bg/bg-street-rain.webp'),
  'street-night': asset('/images/bg/bg-street-night.webp'),
  'street-day': asset('/images/bg/bg-street-day.webp'),
  'shop-interior': asset('/images/bg/bg-shop-interior.webp'),
  'shop-back': asset('/images/bg/bg-shop-back.webp'),
  bookstore: asset('/images/bg/bg-bookstore.webp'),
  'bookstore-close': asset('/images/bg/bg-bookstore-close.webp'),
  'bookstore-loft': asset('/images/bg/bg-bookstore-loft.webp'),
  'wantang-room': asset('/images/bg/bg-wantang-room.webp'),
  'seaside-dawn': asset('/images/bg/bg-seaside-dawn.webp'),
  'tide-pools': asset('/images/bg/bg-tide-pools.webp'),
  'market-morning': asset('/images/bg/bg-market-morning.webp'),
  'hotel-lobby': asset('/images/bg/bg-hotel-lobby.webp'),
  'hotel-bar': asset('/images/bg/bg-hotel-bar.webp'),
  gallery: asset('/images/bg/bg-gallery.webp'),
  'research-station': asset('/images/bg/bg-research-station.webp'),
  black: '',
}

/** 林晚棠表情/姿态 → 透明立绘 WebP（含 alpha） */
export const wantangSprites: Record<string, string> = {
  default: asset('/images/char/wantang-default.webp'),
  soft: asset('/images/char/wantang-soft.webp'),
  tense: asset('/images/char/wantang-tense.webp'),
  blush: asset('/images/char/wantang-blush.webp'),
  avert: asset('/images/char/wantang-avert.webp'),
  smile: asset('/images/char/wantang-smile.webp'),
  hurt: asset('/images/char/wantang-hurt.webp'),
  laugh: asset('/images/char/wantang-laugh.webp'),
  surprised: asset('/images/char/wantang-surprised.webp'),
  teary: asset('/images/char/wantang-teary.webp'),
  cold: asset('/images/char/wantang-cold.webp'),
  tired: asset('/images/char/wantang-tired.webp'),
  book: asset('/images/char/wantang-book.webp'),
  crossed: asset('/images/char/wantang-crossed.webp'),
  lean: asset('/images/char/wantang-lean.webp'),
  coffee: asset('/images/char/wantang-coffee.webp'),
  write: asset('/images/char/wantang-write.webp'),
  offer: asset('/images/char/wantang-offer.webp'),
  shush: asset('/images/char/wantang-shush.webp'),
  beckon: asset('/images/char/wantang-beckon.webp'),
  think: asset('/images/char/wantang-think.webp'),
  wipe: asset('/images/char/wantang-wipe.webp'),
  confused: asset('/images/char/wantang-confused.webp'),
  leandesk: asset('/images/char/wantang-leandesk.webp'),
  apron: asset('/images/char/wantang-apron.webp'),
  apronlean: asset('/images/char/wantang-apronlean.webp'),
  cardigan: asset('/images/char/wantang-cardigan.webp'),
  cardigansoft: asset('/images/char/wantang-cardigansoft.webp'),
  casual: asset('/images/char/wantang-casual.webp'),
  casualsoft: asset('/images/char/wantang-casualsoft.webp'),
  blouse: asset('/images/char/wantang-blouse.webp'),
  blouseblush: asset('/images/char/wantang-blouseblush.webp'),
}

/**
 * 苏晴岚立绘：暂复用晚棠资源作占位，待 P2 专用立绘生成后替换路径。
 * 表情 key 与 Expression 对齐；缺失时回退 default。
 */
export const qinglanSprites: Record<string, string> = {
  ...wantangSprites,
}

export function getCharSprite(character: string, expression: string): string {
  if (character === 'qinglan') {
    return qinglanSprites[expression] ?? qinglanSprites.default
  }
  if (character === 'wantang') {
    return wantangSprites[expression] ?? wantangSprites.default
  }
  return wantangSprites.default
}
