import type { DialogueNode } from '../../../engine/types'

/**
 * 第17章 · 酒吧收工
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter17: DialogueNode[] = [
  {
    id: 'ch17',
    chapter: 17,
    chapterTitle: '酒吧收工',
    bg: 'hotel-bar',
    mood: 'intimate',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第17章】酒吧收工\n酒吧收工。她倒了两杯，没有劝酒的甜言，只有一句清醒的邀请。',
    next: 'c17-01',
  },
  {
    id: 'c17-01',
    sprite: 'qinglan',
    expression: 'lean',
    speaker: '苏晴岚',
    text: '不想一个人对空杯。\n你要是困，就回房。要是不困——坐下。',
    next: 'c17-02',
  },
  {
    id: 'c17-02',
    sprite: 'qinglan',
    text: '酒不烈。烈的是她看人时那种「我知道自己在做什么」的平静。',
    next: 'c17-choice',
  },
  {
    id: 'c17-choice',
    choices: [
      {
        text: '坐下，碰杯',
        next: 'c17-r0',
        affection: 10,
        setFlag: 'habit',
      },
      {
        text: '「你清醒吗。」——确认',
        next: 'c17-r1',
        affection: 15,
        setFlag: 'trust',
      },
      {
        text: '回房',
        next: 'c17-r2',
        affection: 0,
      },
    ],
  },
  {
    id: 'c17-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '杯沿相碰，声音很轻。清醒的酒比醉更危险——因为它记得每一步。',
    next: 'c17-end',
  },
  {
    id: 'c17-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c17-end',
  },
  {
    id: 'c17-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c17-end',
  },
  {
    id: 'c17-end',
    mood: 'intimate',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch18',
  },
]
