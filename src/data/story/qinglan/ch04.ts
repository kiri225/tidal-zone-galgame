import type { DialogueNode } from '../../../engine/types'

/**
 * 第4章 · 客人永远对
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter04: DialogueNode[] = [
  {
    id: 'ch04',
    chapter: 4,
    chapterTitle: '客人永远对',
    bg: 'hotel-lobby',
    mood: 'normal',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第4章】客人永远对\n有人在前台拍桌子。醉意、机票、投诉——全朝她砸过来。',
    next: 'c04-01',
  },
  {
    id: 'c04-01',
    sprite: 'qinglan',
    text: '她点头、道歉、补房、升级早餐。笑容一寸不乱。',
    next: 'c04-02',
  },
  {
    id: 'c04-02',
    sprite: 'qinglan',
    expression: 'smile',
    speaker: '苏晴岚',
    text: '非常抱歉给您带来不便。我马上为您处理。',
    next: 'c04-03',
  },
  {
    id: 'c04-03',
    sprite: 'qinglan',
    text: '客人走后，她在柜台下握紧拳，指节发白，又迅速松开，像什么都没发生。',
    next: 'c04-04',
  },
  {
    id: 'c04-04',
    speaker: '沈屿',
    text: '你不生气吗。',
    next: 'c04-05',
  },
  {
    id: 'c04-05',
    sprite: 'qinglan',
    expression: 'cold',
    speaker: '苏晴岚',
    text: '客人永远对。\n生气是白班的奢侈品。',
    next: 'c04-choice',
  },
  {
    id: 'c04-choice',
    choices: [
      {
        text: '「在我这儿你可以不对。」——拆她的规矩',
        next: 'c04-r0',
        affection: 15,
        setFlag: 'trust',
      },
      {
        text: '「……辛苦了。」——普通安慰',
        next: 'c04-r1',
        affection: 5,
      },
      {
        text: '不说话，只递纸巾',
        next: 'c04-r2',
        affection: 10,
      },
    ],
  },
  {
    id: 'c04-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '她看了我一眼，那一眼很短，却第一次不像对客人。',
    next: 'c04-end',
  },
  {
    id: 'c04-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c04-end',
  },
  {
    id: 'c04-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c04-end',
  },
  {
    id: 'c04-end',
    mood: 'normal',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch05',
  },
]
