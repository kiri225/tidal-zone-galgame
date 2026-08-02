import type { DialogueNode } from '../../../engine/types'

/**
 * 第21章 · 对班夜话
 * 苏晴岚线 · 模板已清理
 */
export const chapter21: DialogueNode[] = [
  {
    id: 'ch21',
    chapter: 21,
    chapterTitle: '对班夜话',
    bg: 'hotel-bar',
    mood: 'intimate',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第21章】对班夜话\n又一个打烊后的酒吧。她把名牌放在吧台上，金属磕出一声轻响。',
    next: 'c21-01',
  },
  {
    id: 'c21-01',
    sprite: 'qinglan',
    expression: 'soft',
    speaker: '苏晴岚',
    text: '坐内侧。\n今晚我想听你说话——不是客房投诉那种。',
    next: 'c21-02',
  },
  {
    id: 'c21-02',
    sprite: 'qinglan',
    text: '内侧的椅子矮一点。像故意让人卸下站在前台的那套骨架。',
    next: 'c21-abranch',
  },
  {
    id: 'c21-abranch',
    affectionBranch: { threshold: 30, whenMet: 'c21-cg', whenNot: 'c21-aftercg' },
  },
  {
    id: 'c21-cg',
    bg: 'hotel-bar',
    mood: 'intimate',
    sprite: null,
    cg: 'shifttalk',
    text: '【CG · 对班夜话】\n名牌躺在台面上。她托着腮，第一次用私人的声音问：卖铺之后，你还想成为谁的岸？',
    next: 'c21-aftercg',
    unlockCg: 'shifttalk',
  },
  {
    id: 'c21-aftercg',
    sprite: 'qinglan',
    expression: 'soft',
    cg: null,
    text: '灯还亮着。有些画面已经发生，有些还差一个潮位。',
    next: 'c21-choice',
  },
  {
    id: 'c21-choice',
    choices: [
      {
        text: '诚实讲父亲与城市',
        next: 'c21-r0',
        affection: 10,
      },
      {
        text: '「想成为你的。」——冒险',
        next: 'c21-r1',
        affection: 15,
        setFlag: 'habit',
      },
    ],
  },
  {
    id: 'c21-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '灯灭之前，她把名牌重新别好——却别反了，第二天白班替她正过来。',
    next: 'c21-end',
  },
  {
    id: 'c21-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '耳尖烧红。她把名牌翻来覆去：「……油嘴。可今晚，我允许你油这一次。」',
    next: 'c21-end',
  },
  {
    id: 'c21-end',
    mood: 'intimate',
    text: '灯灭前，她把名牌重新别好——却别反了。第二天白班替她正过来，假装没看见。',
    next: 'c21-end-cg',
  },
  {
    id: 'c21-end-cg',
    cg: 'ql-ch21-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n名牌躺在台面上的夜话。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch22',
  },
]
