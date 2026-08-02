import type { DialogueNode } from '../../../engine/types'

/**
 * 第28章 · 谈到交班
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter28: DialogueNode[] = [
  {
    id: 'ch28',
    chapter: 28,
    chapterTitle: '谈到交班',
    bg: 'hotel-lobby',
    mood: 'warm',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第28章】谈到交班\n和解后的凌晨，我们坐在大堂聊到交班。天色一点一点变蓝。',
    next: 'c28-01',
  },
  {
    id: 'c28-01',
    sprite: 'qinglan',
    expression: 'soft',
    speaker: '苏晴岚',
    text: '习惯坐实了就麻烦。\n麻烦到我想给这习惯，起个名字。',
    next: 'c28-02',
  },
  {
    id: 'c28-02',
    speaker: '沈屿',
    text: '叫什么。',
    next: 'c28-03',
  },
  {
    id: 'c28-03',
    sprite: 'qinglan',
    expression: 'blush',
    speaker: '苏晴岚',
    text: '……还没想好。\n想好了再告诉你——如果你还在。',
    next: 'c28-choice',
  },
  {
    id: 'c28-choice',
    choices: [
      {
        text: '「我会在。」——加固',
        next: 'c28-r0',
        affection: 10,
        setFlag: 'habit',
      },
      {
        text: '「你起名，我听。」——柔软',
        next: 'c28-r1',
        affection: 10,
      },
    ],
  },
  {
    id: 'c28-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '白班推门进来。她瞬间切换职业笑，对我只留一句极轻的：「去睡。」',
    next: 'c28-end',
  },
  {
    id: 'c28-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c28-end',
  },
  {
    id: 'c28-end',
    mood: 'warm',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch29',
  },
]
