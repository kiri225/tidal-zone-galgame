import type { DialogueNode } from '../../../engine/types'

/**
 * 第47章 · 最后通牒
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter47: DialogueNode[] = [
  {
    id: 'ch47',
    chapter: 47,
    chapterTitle: '最后通牒',
    bg: 'hotel-lobby',
    mood: 'cold',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第47章】最后通牒\n中介最后通牒。集团邮件同时到达：城区平级调动，征求她意见。',
    next: 'c47-01',
  },
  {
    id: 'c47-01',
    sprite: 'qinglan',
    expression: 'tired',
    speaker: '苏晴岚',
    text: '你走，我也可以走。\n两条船同时离港，潮汐会很干净——干净得什么都不剩。',
    next: 'c47-02',
  },
  {
    id: 'c47-02',
    speaker: '沈屿',
    text: '你想去城区吗。',
    next: 'c47-03',
  },
  {
    id: 'c47-03',
    sprite: 'qinglan',
    expression: 'avert',
    speaker: '苏晴岚',
    text: '想过。\n想过就不代表要。',
    next: 'c47-choice',
  },
  {
    id: 'c47-choice',
    choices: [
      {
        text: '「别为了逃我而走。」——挽留',
        next: 'c47-r0',
        affection: 15,
        setFlag: 'stay',
      },
      {
        text: '「你自由。」——放手式尊重',
        next: 'c47-r1',
        affection: 5,
      },
    ],
  },
  {
    id: 'c47-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '两部手机屏幕同时暗下。决定还在呼吸里，尚未写成回执。',
    next: 'c47-end',
  },
  {
    id: 'c47-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c47-end',
  },
  {
    id: 'c47-end',
    mood: 'cold',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch48',
  },
]
