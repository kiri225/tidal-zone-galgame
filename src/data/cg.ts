/** CG 图鉴：好感达到阈值解锁，剧情中可全屏展示；章末 CG 可由剧情直接解锁并支持视频 */
import { AffThreshold } from './affection'
import { ASSET_VER } from './assets'

function cgAsset(path: string): string {
  return `${path}?v=${ASSET_VER}`
}

export interface CgDef {
  id: string
  title: string
  subtitle: string
  /** 解锁所需晚棠好感（0–100）；storyUnlock 时仅作展示参考 */
  affectionRequired: number
  image: string
  /** 可选视频；文件存在时优先全屏播放 */
  video?: string
  /** 仅剧情节点解锁，不参与好感自动解锁 */
  storyUnlock?: boolean
  /** 剧情节点 id（可选，用于跳转回忆） */
  storyHint?: string
}

/** 章末软暧昧 CG（ch01–ch10） */
const chapterEndCgs: CgDef[] = [
  {
    id: 'ch01-end',
    title: '雇佣条款 · 章末',
    subtitle: '雨丝里那一眼回头',
    affectionRequired: 0,
    storyUnlock: true,
    image: cgAsset('/images/cg/cg-ch01-end.png'),
    video: cgAsset('/videos/cg/cg-ch01-end.webm'),
    storyHint: '第1章结尾',
  },
  {
    id: 'ch02-end',
    title: '中介的声音 · 章末',
    subtitle: '梯子旁停住的呼吸',
    affectionRequired: 0,
    storyUnlock: true,
    image: cgAsset('/images/cg/cg-ch02-end.png'),
    video: cgAsset('/videos/cg/cg-ch02-end.webm'),
    storyHint: '第2章结尾',
  },
  {
    id: 'ch03-end',
    title: '会的人 · 章末',
    subtitle: '打烊灯下未说完的句',
    affectionRequired: 0,
    storyUnlock: true,
    image: cgAsset('/images/cg/cg-ch03-end.png'),
    video: cgAsset('/videos/cg/cg-ch03-end.webm'),
    storyHint: '第3章结尾',
  },
  {
    id: 'ch04-end',
    title: '二楼迷宫 · 章末',
    subtitle: '窄道里并肩的体温',
    affectionRequired: 0,
    storyUnlock: true,
    image: cgAsset('/images/cg/cg-ch04-end.png'),
    video: cgAsset('/videos/cg/cg-ch04-end.webm'),
    storyHint: '第4章结尾',
  },
  {
    id: 'ch05-end',
    title: '灰尘与后颈 · 章末',
    subtitle: '光柱里的颈侧碎发',
    affectionRequired: 0,
    storyUnlock: true,
    image: cgAsset('/images/cg/cg-ch05-end.png'),
    video: cgAsset('/videos/cg/cg-ch05-end.webm'),
    storyHint: '第5章结尾',
  },
  {
    id: 'ch06-end',
    title: '未寄出的诗 · 章末',
    subtitle: '指尖与纸页的距离',
    affectionRequired: 0,
    storyUnlock: true,
    image: cgAsset('/images/cg/cg-ch06-end.png'),
    video: cgAsset('/videos/cg/cg-ch06-end.webm'),
    storyHint: '第6章结尾',
  },
  {
    id: 'ch07-end',
    title: '大麦茶 · 章末',
    subtitle: '杯沿上未散的热气',
    affectionRequired: 0,
    storyUnlock: true,
    image: cgAsset('/images/cg/cg-ch07-end.png'),
    video: cgAsset('/videos/cg/cg-ch07-end.webm'),
    storyHint: '第7章结尾',
  },
  {
    id: 'ch08-end',
    title: '潮声重逢 · 章末',
    subtitle: '夜色里送别前的停顿',
    affectionRequired: 0,
    storyUnlock: true,
    image: cgAsset('/images/cg/cg-ch08-end.png'),
    video: cgAsset('/videos/cg/cg-ch08-end.webm'),
    storyHint: '第8章结尾',
  },
  {
    id: 'ch09-end',
    title: '晚饭的三种吃法 · 章末',
    subtitle: '暖光里侧脸的一秒',
    affectionRequired: 0,
    storyUnlock: true,
    image: cgAsset('/images/cg/cg-ch09-end.png'),
    video: cgAsset('/videos/cg/cg-ch09-end.webm'),
    storyHint: '第9章结尾',
  },
  {
    id: 'ch10-end',
    title: '答录机 · 章末',
    subtitle: '听筒旁沉默的靠近',
    affectionRequired: 0,
    storyUnlock: true,
    image: cgAsset('/images/cg/cg-ch10-end.png'),
    video: cgAsset('/videos/cg/cg-ch10-end.webm'),
    storyHint: '第10章结尾',
  },
]

export const cgCatalog: CgDef[] = [
  ...chapterEndCgs,
  {
    id: 'reunion',
    title: '潮声重逢',
    subtitle: '十年后的第一盏灯',
    affectionRequired: AffThreshold.reunion,
    image: cgAsset('/images/cg/cg-reunion.png'),
    storyHint: '搬书的黄昏',
  },
  {
    id: 'poem',
    title: '未寄出的诗',
    subtitle: '退潮时，岸会记得谁曾停留',
    affectionRequired: AffThreshold.poem,
    image: cgAsset('/images/cg/cg-poem.png'),
    storyHint: '未寄出的诗',
  },
  {
    id: 'umbrella',
    title: '旧伞',
    subtitle: '雨停之后，它还认得回家的路',
    affectionRequired: AffThreshold.umbrella,
    image: cgAsset('/images/cg/cg-umbrella.png'),
    storyHint: '旧伞',
  },
  {
    id: 'nighttalk',
    title: '关店夜话',
    subtitle: '红酒与未说完的话',
    affectionRequired: AffThreshold.nighttalk,
    image: cgAsset('/images/cg/cg-nighttalk.png'),
    storyHint: '打烊后的吧台',
  },
  {
    id: 'market',
    title: '市集早晨',
    subtitle: '人来人往里，并肩的片刻',
    affectionRequired: AffThreshold.market,
    image: cgAsset('/images/cg/cg-market.png'),
    storyHint: '市集早晨',
  },
  {
    id: 'almostkiss',
    title: '几乎吻上',
    subtitle: '停在「几乎」的那一秒',
    affectionRequired: AffThreshold.almostkiss,
    image: cgAsset('/images/cg/cg-almostkiss.png'),
    storyHint: '几乎吻上',
  },
  {
    id: 'reconcile',
    title: '和解的盐',
    subtitle: '薄冰底下，水一直是热的',
    affectionRequired: AffThreshold.reconcile,
    image: cgAsset('/images/cg/cg-reconcile.png'),
    storyHint: '和解的盐',
  },
  {
    id: 'rainnight',
    title: '雨困一夜',
    subtitle: '潮汐终于靠岸',
    affectionRequired: AffThreshold.rainnight,
    image: cgAsset('/images/cg/cg-rainnight.png'),
    storyHint: '台风夜里',
  },
  {
    id: 'intertidal',
    title: '潮间带',
    subtitle: '涨潮时相爱，退潮时也不走开',
    affectionRequired: AffThreshold.intertidal,
    image: cgAsset('/images/cg/cg-intertidal.png'),
    storyHint: 'True End',
  },
]

export const cgImages: Record<string, string> = Object.fromEntries(
  cgCatalog.map((c) => [c.id, c.image]),
)

export const cgVideos: Record<string, string | undefined> = Object.fromEntries(
  cgCatalog.map((c) => [c.id, c.video]),
)

export function getCgById(id: string): CgDef | undefined {
  return cgCatalog.find((c) => c.id === id)
}
