import type { DialogueNode } from '../../../engine/types'

/**
 * 第15章 · 小别·年会
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter15: DialogueNode[] = [
  {
    id: 'ch15',
    chapter: 15,
    chapterTitle: '小别·年会',
    bg: 'hotel-lobby',
    mood: 'cold',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第15章】小别·年会\n集团短训通知钉在班表上。她要离开两天。',
    next: 'c15-01',
  },
  {
    id: 'c15-01',
    sprite: 'qinglan',
    expression: 'default',
    speaker: '苏晴岚',
    text: '替班会照顾你的续住。\n别把沙子带进电梯——再说一次。',
    next: 'c15-02',
  },
  {
    id: 'c15-02',
    speaker: '沈屿',
    text: '两天而已。',
    next: 'c15-03',
  },
  {
    id: 'c15-03',
    sprite: 'qinglan',
    expression: 'soft',
    speaker: '苏晴岚',
    text: '对过客来说，两天很长。\n对夜班来说，两天只是两个交班。',
    next: 'c15-choice',
  },
  {
    id: 'c15-choice',
    choices: [
      {
        text: '「回来时，我还在。」——承诺',
        next: 'c15-r0',
        affection: 15,
        setFlag: 'habit',
      },
      {
        text: '「一路顺风。」——客气',
        next: 'c15-r1',
        affection: 5,
      },
      {
        text: '「反正我会走。」——冷酷诚实',
        next: 'c15-r2',
        affection: -5,
      },
    ],
  },
  {
    id: 'c15-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '她拖着小行李箱进电梯。名牌在领口晃了一下，像挥手，又像告别。',
    next: 'c15-end',
  },
  {
    id: 'c15-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c15-end',
  },
  {
    id: 'c15-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c15-end',
  },
  {
    id: 'c15-end',
    mood: 'cold',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch16',
  },
]
