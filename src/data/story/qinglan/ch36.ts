import type { DialogueNode } from '../../../engine/types'

/**
 * 第36章 · 习惯还是岸
 * 苏晴岚线 · 模板已清理
 */
export const chapter36: DialogueNode[] = [
  {
    id: 'ch36',
    chapter: 36,
    chapterTitle: '习惯还是岸',
    bg: 'hotel-duty',
    mood: 'intimate',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第36章】习惯还是岸\n风小了一点。有人的呼吸仍未平。',
    next: 'c36-01',
  },
  {
    id: 'c36-01',
    sprite: 'qinglan',
    expression: 'soft',
    speaker: '苏晴岚',
    text: '一夜是习惯，还是岸？\n你现在答，我记入夜班日志。',
    next: 'c36-choice',
  },
  {
    id: 'c36-choice',
    choices: [
      {
        text: '「岸。」——确认',
        next: 'c36-r0',
        affection: 15,
        setFlag: 'trust',
      },
      {
        text: '「想养成习惯的岸。」——幽默认真',
        next: 'c36-r1',
        affection: 10,
        setFlag: 'habit',
      },
      {
        text: '「……还在学怎么停泊。」——诚实软弱',
        next: 'c36-r2',
        affection: 5,
      },
    ],
  },
  {
    id: 'c36-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '她把脸埋进毯子里，闷声：「日志里只写一个字：在。」',
    next: 'c36-end',
  },
  {
    id: 'c36-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '「岸。」这个字在风停后的安静里格外清楚。她耳尖红着，却没有收回。',
    next: 'c36-end',
  },
  {
    id: 'c36-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '她把脸埋进毯子边缘：「……你选词的方式，很坏。坏在让我想信。」',
    next: 'c36-end',
  },
  {
    id: 'c36-end',
    mood: 'intimate',
    text: '雨困之后的第一句定义战：习惯还是岸。她没有立刻选——却把选择权，放在了你手心。',
    next: 'c36-end-cg',
  },
  {
    id: 'c36-end-cg',
    cg: 'ql-ch36-end',
    sprite: null,
    mood: 'intimate',
    text: '【CG · 章末】\n习惯还是岸的定义战。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch37',
  },
]
