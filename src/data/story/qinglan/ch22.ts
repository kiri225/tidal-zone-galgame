import type { DialogueNode } from '../../../engine/types'

/**
 * 第22章 · 清醒的岸
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter22: DialogueNode[] = [
  {
    id: 'ch22',
    chapter: 22,
    chapterTitle: '清醒的岸',
    bg: 'hotel-bar',
    mood: 'warm',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第22章】清醒的岸\n我们没有越线。杯空了，人还清醒。',
    next: 'c22-01',
  },
  {
    id: 'c22-01',
    sprite: 'qinglan',
    expression: 'soft',
    speaker: '苏晴岚',
    text: '习惯比酒更醉。\n我怕的不是你碰我——是碰完你还当这是班表上的一次排班。',
    next: 'c22-02',
  },
  {
    id: 'c22-02',
    speaker: '沈屿',
    text: '那我就把班表改掉。',
    next: 'c22-03',
  },
  {
    id: 'c22-03',
    sprite: 'qinglan',
    expression: 'avert',
    speaker: '苏晴岚',
    text: '……油嘴。\n可今晚这样也好。清醒的岸，至少退潮时还在。',
    next: 'c22-choice',
  },
  {
    id: 'c22-choice',
    choices: [
      {
        text: '「我记得今晚。」——承诺记忆',
        next: 'c22-r0',
        affection: 10,
        setFlag: 'trust',
      },
      {
        text: '握一下她的手就松开',
        next: 'c22-r1',
        affection: 5,
      },
    ],
  },
  {
    id: 'c22-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '自动门开合。夜风进来，又被挡回去——像一种克制的亲吻。',
    next: 'c22-end',
  },
  {
    id: 'c22-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c22-end',
  },
  {
    id: 'c22-end',
    mood: 'warm',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch23',
  },
]
