import type { DialogueNode } from '../../../engine/types'

/**
 * 顾清禾线 · 结局
 * True = aff≥60 + stay + confess + offair + not_customer
 */
export const endingNodes: DialogueNode[] = [
  {
    id: 'ending-true',
    chapter: 50,
    chapterTitle: '壳的岸',
    bg: 'seaside-dawn',
    mood: 'warm',
    sprite: null,
    cg: 'shore_shell',
    text: '【CG · 壳的岸】\n入秋后，拾潮没有卖掉。公寓里的环灯收进抽屉。清禾把账号改成「偶尔外拍，不接受打赏」。\n她说：短暂停泊也可以关灯。我说：那我留下。',
    unlockCg: 'shore_shell',
    ending: 'true',
  },
  {
    id: 'ending-good',
    chapter: 50,
    chapterTitle: '亮处相见',
    bg: 'qinghe-room',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'soft',
    cg: null,
    text: '铺子易主，我回了城市。可每当路过潮屿，总会在她关播后按门铃。\n她递来汽水：「备注还在——不准结账。要不要改成长期？」\n距离很远，亮处却很近。',
    ending: 'good',
  },
  {
    id: 'ending-bitter',
    chapter: 50,
    chapterTitle: '潮退以后',
    bg: 'port-night',
    mood: 'cold',
    sprite: 'qinghe',
    expression: 'hurt',
    cg: null,
    text: '离开那天，她重新打开环灯，职业媚笑完美无缺。\n备用钥匙没有索回——放在我手上，像一句不再追问的再见。\n码头起风。我回头，窗里白光依旧，像从来没有人关过灯。',
    ending: 'bittersweet',
  },
]
