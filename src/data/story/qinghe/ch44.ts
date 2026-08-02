import type { DialogueNode } from '../../../engine/types'

/** 第44章 · 去留 */
export const chapter44: DialogueNode[] = [
  {
    id: 'ch44',
    chapter: 44,
    chapterTitle: '去留',
    bg: 'seaside-dawn',
    mood: 'cold',
    sprite: 'qinghe',
    expression: 'tired',
    cg: null,
    text: '【第44章】去留\n潮间带露出两条浅浅的路。买家的电话在口袋里震动。',
    next: 'c44-01',
  },
  {
    id: 'c44-01',
    sprite: 'qinghe',
    speaker: '顾清禾',
    text: '铺子可以卖。人呢。\n你是走，还是……把壳留下。',
    next: 'c44-choice',
  },
  {
    id: 'c44-choice',
    choices: [
      { text: '「留下。」——留下', next: 'c44-stay', affection: 15, setFlag: 'stay' },
      { text: '「卖掉，但会回来。」——保持联系', next: 'c44-go', affection: 0 },
    ],
  },
  {
    id: 'c44-stay',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……那就别只把钥匙还给我。\n把你也留下。',
    next: 'c44-end',
  },
  {
    id: 'c44-go',
    sprite: 'qinghe',
    expression: 'hurt',
    text: '她点头，像签下一份她早就预习过的退房单。',
    next: 'c44-end',
  },
  {
    id: 'c44-end',
    text: '去留两个字，比价目表更难写。',
    next: 'c44-end-cg',
  },
  {
    id: 'c44-end-cg',
    cg: 'qh-ch44-end',
    sprite: null,
    text: '【CG · 章末】\n潮间带上的去留。',
    next: 'ch45',
  },
]
