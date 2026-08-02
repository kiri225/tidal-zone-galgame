/** 预加载下一幕可能用到的图片，减少点击后的白屏等待 */

const cache = new Set<string>()

export function preloadImages(urls: Array<string | null | undefined>) {
  for (const url of urls) {
    if (!url || cache.has(url)) continue
    cache.add(url)
    const img = new Image()
    img.decoding = 'async'
    img.src = url
  }
}
