import type { DialogueNode } from '../../../engine/types'

/**
 * 第37章 · 黎明交班
 * 苏晴岚线 · 模板已清理
 */
export const chapter37: DialogueNode[] = [
  {
    id: 'ch37',
    chapter: 37,
    chapterTitle: '黎明交班',
    bg: 'seaside-dawn',
    mood: 'cold',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第37章】黎明交班\n黎明。交班的人陆续到。卖铺的问题像退潮后的礁石，重新露出。',
    next: 'c37-01',
  },
  {
    id: 'c37-01',
    sprite: 'qinglan',
    expression: 'tired',
    speaker: '苏晴岚',
    text: '白天来了。\n我们又要假装——你是客人，我是经理。',
    next: 'c37-02',
  },
  {
    id: 'c37-02',
    speaker: '沈屿',
    text: '铺子的事，我会给你答案。',
    next: 'c37-03',
  },
  {
    id: 'c37-03',
    sprite: 'qinglan',
    expression: 'cold',
    speaker: '苏晴岚',
    text: '最好快。\n台风过境后，买家比潮水积极。',
    next: 'c37-choice',
  },
  {
    id: 'c37-choice',
    choices: [
      {
        text: '「先让我送你回去休息。」——照顾',
        next: 'c37-r0',
        affection: 10,
      },
      {
        text: '点头离开',
        next: 'c37-r1',
        affection: 0,
      },
    ],
  },
  {
    id: 'c37-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '晨光刺眼。她重新别上备用名牌——主名牌还在我口袋。',
    next: 'c37-end',
  },
  {
    id: 'c37-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '同事的目光扫过来。她职业笑完美归位，袖口却偷偷碰了我一下——像暗号。',
    next: 'c37-end',
  },
  {
    id: 'c37-end',
    mood: 'cold',
    text: '交班完成。台风退场，人却还停在潮间带——有些夜班，会改写成白天的心事。',
    next: 'c37-end-cg',
  },
  {
    id: 'c37-end-cg',
    cg: 'ql-ch37-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n黎明交班袖口的暗号。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch38',
  },
]
