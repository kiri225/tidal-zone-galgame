import type { DialogueNode } from '../../../engine/types'

/**
 * 林晚棠线 · 结局节点
 * 由 gameStore.resolveEnding() 按 affection / stay / confess 判定后 goTo：
 *   True       = affection≥12 AND stay AND confess → ending-true（CG 潮间带）
 *   Good       = affection≥7  AND (stay OR confess) → ending-good
 *   Bittersweet = 其余情况 → ending-bitter
 */
export const endingNodes: DialogueNode[] = [
  {
    id: 'ending-true',
    bg: 'bookstore',
    mood: 'warm',
    sprite: null,
    cg: 'intertidal',
    chapter: 50,
    chapterTitle: '潮间带',
    ending: 'true',
    unlockCg: 'intertidal',
    text: '【CG · 潮间带】\n入秋后，「拾潮」没有卖掉。两家店的后门正式打通——白天旧物与海玻璃，夜里书与酒，招牌上只写一行小字：\n「潮间带：涨潮时相爱，退潮时也不走开。」\n晚棠站在吧台后，笑着说这行字，她改了十七遍才定稿。我说，值得。',
  },
  {
    id: 'ending-good',
    bg: 'port-night',
    mood: 'warm',
    sprite: 'wantang',
    expression: 'soft',
    cg: null,
    chapter: 50,
    chapterTitle: '每年七月',
    ending: 'good',
    text: '铺子最终还是易了主，我带着父亲的旧物回了城市，重新开始一份寻常的工作。\n但每年七月，我都会准时回到潮屿，在潮声打烊后的吧台坐下。\n晚棠推来一杯海盐威士忌：「今年也准时。真难得。」\n距离很远，约定却很近——这是我们能给彼此的、最诚实的答案。',
  },
  {
    id: 'ending-bitter',
    bg: 'seaside-dawn',
    mood: 'cold',
    sprite: 'wantang',
    expression: 'hurt',
    cg: null,
    chapter: 50,
    chapterTitle: '空壳',
    ending: 'bittersweet',
    text: '离开潮屿那天，她没有来码头。\n只在拾潮的柜台上，留了一本书，扉页写着：\n「退潮会露出很多东西。愿你在别处，也能被温柔地看见。」\n我没有回头。海风很大，像有人在背后，用力喊了一声我的名字——可我终究没有确认，那到底是不是幻觉。',
  },
]
