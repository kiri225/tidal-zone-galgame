import type { DialogueNode } from '../../../engine/types'

/**
 * 第3章 · 三点的咖啡
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter03: DialogueNode[] = [
  {
    id: 'ch03',
    chapter: 3,
    chapterTitle: '三点的咖啡',
    bg: 'hotel-lobby',
    mood: 'cold',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第3章】三点的咖啡\n凌晨三点，酒店像一具安静的肺。我下楼倒水，看见她坐在前台内侧，面前一杯见底的咖啡。',
    next: 'c03-01',
  },
  {
    id: 'c03-01',
    sprite: 'qinglan',
    text: '她没戴职业笑。只是撑着额，眼下有淡淡的青。',
    next: 'c03-02',
  },
  {
    id: 'c03-02',
    sprite: 'qinglan',
    expression: 'tired',
    speaker: '苏晴岚',
    text: '……客人不睡觉吗。',
    next: 'c03-03',
  },
  {
    id: 'c03-03',
    speaker: '沈屿',
    text: '店主也不睡。',
    next: 'c03-04',
  },
  {
    id: 'c03-04',
    sprite: 'qinglan',
    text: '沉默并不尴尬。两个人都醒着，像两艘在同一潮位停泊的船，不必鸣笛。',
    next: 'c03-05',
  },
  {
    id: 'c03-05',
    sprite: 'qinglan',
    expression: 'coffee',
    speaker: '苏晴岚',
    text: '咖啡机坏了半边。这杯是冷的。\n你要是嫌苦，冰箱里有矿泉水。',
    next: 'c03-choice',
  },
  {
    id: 'c03-choice',
    choices: [
      {
        text: '「冷的也行。」——坐下陪她对班',
        next: 'c03-r0',
        affection: 10,
        setFlag: 'habit',
      },
      {
        text: '「你该休息。」——关心一句',
        next: 'c03-r1',
        affection: 5,
      },
      {
        text: '默默倒水离开——不打扰',
        next: 'c03-r2',
        affection: 0,
      },
    ],
  },
  {
    id: 'c03-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '杯壁上的水珠滑落。窗外潮声很远，像有人在黑暗里翻一本没有页码的登记簿。',
    next: 'c03-end',
  },
  {
    id: 'c03-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c03-end',
  },
  {
    id: 'c03-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c03-end',
  },
  {
    id: 'c03-end',
    mood: 'cold',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch04',
  },
]
