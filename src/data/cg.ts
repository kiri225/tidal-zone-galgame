/** CG 图鉴：好感达到阈值解锁，剧情中可全屏展示 */
import { AffThreshold } from './affection'
import { ASSET_VER } from './assets'

function cgAsset(path: string): string {
  return `${path}?v=${ASSET_VER}`
}

export interface CgDef {
  id: string
  title: string
  subtitle: string
  /** 解锁所需晚棠好感（0–100） */
  affectionRequired: number
  image: string
  /** 剧情节点 id（可选，用于跳转回忆） */
  storyHint?: string
}

export const cgCatalog: CgDef[] = [
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

export function getCgById(id: string): CgDef | undefined {
  return cgCatalog.find((c) => c.id === id)
}
