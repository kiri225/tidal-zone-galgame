import type { DialogueNode } from '../../../engine/types'

/**
 * 第29章 · 台风预警
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter29: DialogueNode[] = [
  {
    id: 'ch29',
    chapter: 29,
    chapterTitle: '台风预警',
    bg: 'hotel-lobby',
    mood: 'cold',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第29章】台风预警\n台风预警在酒店广播里循环。她把应急手册翻得纸页起毛。',
    next: 'c29-01',
  },
  {
    id: 'c29-01',
    sprite: 'qinglan',
    expression: 'cold',
    speaker: '苏晴岚',
    text: '客人进内廊。沙袋、手电筒、对讲机。\n从现在起，我是流程，不是人。',
    next: 'c29-02',
  },
  {
    id: 'c29-02',
    sprite: 'qinglan',
    text: '可她检查窗户时，指尖发抖——只有我看见。',
    next: 'c29-choice',
  },
  {
    id: 'c29-choice',
    choices: [
      {
        text: '「需要人手吗。」——加入',
        next: 'c29-r0',
        affection: 10,
        setFlag: 'habit',
      },
      {
        text: '回房按指示等待',
        next: 'c29-r1',
        affection: 0,
      },
    ],
  },
  {
    id: 'c29-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '风开始拍门。名牌在她胸前轻颤，像一颗不肯安静的心脏。',
    next: 'c29-end',
  },
  {
    id: 'c29-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c29-end',
  },
  {
    id: 'c29-end',
    mood: 'cold',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch30',
  },
]
