import type { DialogueNode } from '../../../engine/types'

/**
 * 第29章 · 台风预警
 * 苏晴岚线 · 模板已清理
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
    text: '对讲机嘶哑。她点头：「回房等广播。门窗关死。」指尖发抖的那一下，只有我看见。',
    next: 'c29-end',
  },
  {
    id: 'c29-end',
    mood: 'cold',
    text: '风开始拍门。名牌在她胸前轻颤，像一颗不肯安静的心脏——流程之外的真实。',
    next: 'c29-end-cg',
  },
  {
    id: 'c29-end-cg',
    cg: 'ql-ch29-end',
    sprite: null,
    mood: 'rain',
    text: '【CG · 章末】\n沙袋旁名牌轻颤的心跳。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch30',
  },
]
