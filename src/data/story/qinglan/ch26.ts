import type { DialogueNode } from '../../../engine/types'

/**
 * 第26章 · 争吵的边缘
 * 苏晴岚线 · 模板已清理
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
    text: '「那就证明给我看。」她抱臂，冷，「别用嘴争。用留下来的分钟争。」',
    next: 'c26-end',
  },
  {
    id: 'c26-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '她像被戳中旧伤，笑得很薄：「对。我当过。所以更讨厌你把它演得这么像。」',
    next: 'c26-end',
  },
  {
    id: 'c26-end',
    mood: 'cold',
    text: '她放下没开的汽水，转身离开。门楣风铃乱响——像一场未完成的争吵，等雨来收场。',
    next: 'c26-end-cg',
  },
  {
    id: 'c26-end-cg',
    cg: 'ql-ch26-end',
    sprite: null,
    mood: 'cold',
    text: '【CG · 章末】\n未开封盐汽水旁的冷意。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch27',
  },
]
