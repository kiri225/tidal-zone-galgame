import type { DialogueNode } from '../../../engine/types'

/**
 * 第34章 · 她先摘名牌
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter34: DialogueNode[] = [
  {
    id: 'ch34',
    chapter: 34,
    chapterTitle: '她先摘名牌',
    bg: 'hotel-duty',
    mood: 'intimate',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第34章】她先摘名牌\n她伸手摘下名牌。金属扣弹开的声音，在风里小得不可思议。',
    next: 'c34-01',
  },
  {
    id: 'c34-01',
    sprite: 'qinglan',
    expression: 'blush',
    speaker: '苏晴岚',
    text: '摘了这个，我就不是经理。\n你还要不要——靠近。',
    next: 'c34-02',
  },
  {
    id: 'c34-02',
    sprite: 'qinglan',
    text: '卸妆仪式。比吻更先发生的，是身份的放下。',
    next: 'c34-choice',
  },
  {
    id: 'c34-choice',
    choices: [
      {
        text: '「要。」——接住',
        next: 'c34-r0',
        affection: 15,
        setFlag: 'unmask',
      },
      {
        text: '「要，但怕你后悔。」——温柔暂缓',
        next: 'c34-r1',
        affection: 5,
        setFlag: 'unmask',
      },
    ],
  },
  {
    id: 'c34-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '名牌被她放进我衬衫口袋。「替我保管。涨潮之前，别还我。」',
    next: 'c34-end',
  },
  {
    id: 'c34-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c34-end',
  },
  {
    id: 'c34-end',
    mood: 'intimate',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch35',
  },
]
