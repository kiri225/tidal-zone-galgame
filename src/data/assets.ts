/**
 * 资源约定：
 * - 背景 bg：完整场景图
 * - 立绘 char：透明 WebP
 * - CG / bg：WebP 全屏图
 *
 * ASSET_VER：换图后递增，强制浏览器绕过旧缓存
 */
export const ASSET_VER = '20260802dev1'

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
  'hotel-lobby-storm': asset('/images/bg/bg-hotel-lobby-storm.webp'),
  'hotel-bar': asset('/images/bg/bg-hotel-bar.webp'),
  'hotel-duty': asset('/images/bg/bg-hotel-duty.webp'),
  'hotel-corridor': asset('/images/bg/bg-hotel-corridor.webp'),
  'hotel-monitor': asset('/images/bg/bg-hotel-monitor.webp'),
  'hotel-service': asset('/images/bg/bg-hotel-service.webp'),
  'hotel-room': asset('/images/bg/bg-hotel-room.webp'),
  gallery: asset('/images/bg/bg-gallery.webp'),
  'research-station': asset('/images/bg/bg-research-station.webp'),
  'qinghe-room': asset('/images/bg/bg-qinghe-room.webp'),
  'qinghe-room-off': asset('/images/bg/bg-qinghe-room-off.webp'),
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

/** 苏晴岚表情/姿态 → 透明立绘 WebP（含 alpha） */
export const qinglanSprites: Record<string, string> = {
  default: asset('/images/char/qinglan-default.webp'),
  soft: asset('/images/char/qinglan-soft.webp'),
  tense: asset('/images/char/qinglan-tense.webp'),
  blush: asset('/images/char/qinglan-blush.webp'),
  avert: asset('/images/char/qinglan-avert.webp'),
  smile: asset('/images/char/qinglan-smile.webp'),
  hurt: asset('/images/char/qinglan-hurt.webp'),
  laugh: asset('/images/char/qinglan-laugh.webp'),
  surprised: asset('/images/char/qinglan-surprised.webp'),
  teary: asset('/images/char/qinglan-teary.webp'),
  cold: asset('/images/char/qinglan-cold.webp'),
  tired: asset('/images/char/qinglan-tired.webp'),
  book: asset('/images/char/qinglan-book.webp'),
  crossed: asset('/images/char/qinglan-crossed.webp'),
  lean: asset('/images/char/qinglan-lean.webp'),
  coffee: asset('/images/char/qinglan-coffee.webp'),
  write: asset('/images/char/qinglan-write.webp'),
  offer: asset('/images/char/qinglan-offer.webp'),
  shush: asset('/images/char/qinglan-shush.webp'),
  beckon: asset('/images/char/qinglan-beckon.webp'),
  think: asset('/images/char/qinglan-think.webp'),
  wipe: asset('/images/char/qinglan-wipe.webp'),
  confused: asset('/images/char/qinglan-confused.webp'),
  leandesk: asset('/images/char/qinglan-leandesk.webp'),
  casual: asset('/images/char/qinglan-casual.webp'),
  casualsoft: asset('/images/char/qinglan-casualsoft.webp'),
  blouse: asset('/images/char/qinglan-blouse.webp'),
  blouseblush: asset('/images/char/qinglan-blouseblush.webp'),
  // 剧本若落到晚棠专用换装 key，回退制服 default
  apron: asset('/images/char/qinglan-default.webp'),
  apronlean: asset('/images/char/qinglan-leandesk.webp'),
  cardigan: asset('/images/char/qinglan-casual.webp'),
  cardigansoft: asset('/images/char/qinglan-casualsoft.webp'),
}

/** 顾清禾表情/姿态 → 透明立绘 WebP */
export const qingheSprites: Record<string, string> = {
  default: asset('/images/char/qinghe-default.webp'),
  soft: asset('/images/char/qinghe-soft.webp'),
  tense: asset('/images/char/qinghe-tense.webp'),
  blush: asset('/images/char/qinghe-blush.webp'),
  avert: asset('/images/char/qinghe-avert.webp'),
  smile: asset('/images/char/qinghe-smile.webp'),
  hurt: asset('/images/char/qinghe-hurt.webp'),
  laugh: asset('/images/char/qinghe-laugh.webp'),
  surprised: asset('/images/char/qinghe-surprised.webp'),
  teary: asset('/images/char/qinghe-teary.webp'),
  cold: asset('/images/char/qinghe-cold.webp'),
  tired: asset('/images/char/qinghe-tired.webp'),
  book: asset('/images/char/qinghe-book.webp'),
  crossed: asset('/images/char/qinghe-crossed.webp'),
  lean: asset('/images/char/qinghe-lean.webp'),
  coffee: asset('/images/char/qinghe-coffee.webp'),
  write: asset('/images/char/qinghe-write.webp'),
  offer: asset('/images/char/qinghe-offer.webp'),
  shush: asset('/images/char/qinghe-shush.webp'),
  beckon: asset('/images/char/qinghe-beckon.webp'),
  think: asset('/images/char/qinghe-think.webp'),
  wipe: asset('/images/char/qinghe-wipe.webp'),
  confused: asset('/images/char/qinghe-confused.webp'),
  leandesk: asset('/images/char/qinghe-leandesk.webp'),
  casual: asset('/images/char/qinghe-casual.webp'),
  casualsoft: asset('/images/char/qinghe-casualsoft.webp'),
  blouse: asset('/images/char/qinghe-blouse.webp'),
  blouseblush: asset('/images/char/qinghe-blouseblush.webp'),
  phone: asset('/images/char/qinghe-phone.webp'),
  lingerie: asset('/images/char/qinghe-lingerie.webp'),
  ringlight: asset('/images/char/qinghe-ringlight.webp'),
  apron: asset('/images/char/qinghe-default.webp'),
  apronlean: asset('/images/char/qinghe-lean.webp'),
  cardigan: asset('/images/char/qinghe-casual.webp'),
  cardigansoft: asset('/images/char/qinghe-casualsoft.webp'),
}

export function getCharSprite(character: string, expression: string): string {
  if (character === 'qinghe') {
    return qingheSprites[expression] ?? qingheSprites.default
  }
  if (character === 'qinglan') {
    return qinglanSprites[expression] ?? qinglanSprites.default
  }
  if (character === 'wantang') {
    return wantangSprites[expression] ?? wantangSprites.default
  }
  return wantangSprites.default
}
