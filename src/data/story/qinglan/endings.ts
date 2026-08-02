import type { DialogueNode } from '../../../engine/types'

/**
 * 苏晴岚线 · 结局节点
 * True = aff≥60 + stay + confess + trust
 */
export const endingNodes: DialogueNode[] = [
  {
    id: 'ending-true',
    chapter: 50,
    chapterTitle: '岸名',
    bg: 'hotel-lobby',
    mood: 'warm',
    sprite: null,
    cg: 'shore_name',
    text: '【CG · 岸名】\n入秋后，拾潮没有卖掉。酒店侧门多了一块小黑板：旅行书架，住客可换书。晴岚辞去城区调动，夜班名牌背面用油性笔写了两个字——「在岸」。\n她说：短暂停泊也可以办长期。我说：那我续住。',
    unlockCg: 'shore_name',
    ending: 'true',
  },
  {
    id: 'ending-good',
    chapter: 50,
    chapterTitle: '偶尔续住',
    bg: 'port-night',
    mood: 'warm',
    sprite: 'qinglan',
    expression: 'soft',
    cg: null,
    text: '铺子易主，我回了城市。可每当出差路过潮屿，总会在夜班时段推开那扇侧门。\n晴岚推来一杯无酒精特调：「房卡系统里还有你的备注——会走的那种。要不要我改掉？」\n距离很远，续住却很近。',
    ending: 'good',
  },
  {
    id: 'ending-bitter',
    chapter: 50,
    chapterTitle: '完美的笑',
    bg: 'seaside-dawn',
    mood: 'cold',
    sprite: 'qinglan',
    expression: 'hurt',
    cg: null,
    text: '离开那天，她亲自办理退房，职业笑完美无缺。\n房卡被她收回抽屉，红绳员工卡没有索回——放在我手上，像一句不再追问的再见。\n码头起风。我回头，大堂灯火依旧，像从来没有人靠岸过。',
    ending: 'bittersweet',
  },
]
