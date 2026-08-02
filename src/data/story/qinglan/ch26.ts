import type { DialogueNode } from '../../../engine/types'

/**
 * 第26章 · 争吵的边缘
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter26: DialogueNode[] = [
  {
    id: 'ch26',
    chapter: 26,
    chapterTitle: '争吵的边缘',
    bg: 'shop-interior',
    mood: 'cold',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第26章】争吵的边缘\n买家加价的消息像潮水漫进店门。我犹豫的样子被她看在眼里。',
    next: 'c26-01',
  },
  {
    id: 'c26-01',
    sprite: 'qinglan',
    expression: 'hurt',
    speaker: '苏晴岚',
    text: '果然是过客模板。\n加价一响，缆绳就松。',
    next: 'c26-02',
  },
  {
    id: 'c26-02',
    speaker: '沈屿',
    text: '我还没签。',
    next: 'c26-03',
  },
  {
    id: 'c26-03',
    sprite: 'qinglan',
    expression: 'cold',
    speaker: '苏晴岚',
    text: '还没签和会签，在夜班眼里只差一个交班。',
    next: 'c26-04',
  },
  {
    id: 'c26-04',
    sprite: 'qinglan',
    text: '盐汽水还没开。气氛却已经咸得发苦。',
    next: 'c26-choice',
  },
  {
    id: 'c26-choice',
    choices: [
      {
        text: '「对不起。我怕。」——认怂且诚实',
        next: 'c26-r0',
        affection: 10,
      },
      {
        text: '「别用模板看我。」——争辩',
        next: 'c26-r1',
        affection: 5,
      },
      {
        text: '「你本来也当我是过客。」——反击',
        next: 'c26-r2',
        affection: -10,
      },
    ],
  },
  {
    id: 'c26-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '她放下没开的汽水，转身离开。门楣风铃乱响，像一场未完成的争吵。',
    next: 'c26-end',
  },
  {
    id: 'c26-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c26-end',
  },
  {
    id: 'c26-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c26-end',
  },
  {
    id: 'c26-end',
    mood: 'cold',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch27',
  },
]
