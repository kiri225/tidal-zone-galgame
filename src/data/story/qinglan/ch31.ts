import type { DialogueNode } from '../../../engine/types'

/**
 * 第31章 · 应急灯
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter31: DialogueNode[] = [
  {
    id: 'ch31',
    chapter: 31,
    chapterTitle: '应急灯',
    bg: 'hotel-lobby-storm',
    mood: 'dark',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第31章】应急灯\n停电。应急灯把大堂切成一块块病态的绿白。',
    next: 'c31-01',
  },
  {
    id: 'c31-01',
    sprite: 'qinglan',
    text: '她打开应急箱，动作稳得像排练过一百次。声音却发紧。',
    next: 'c31-02',
  },
  {
    id: 'c31-02',
    sprite: 'qinglan',
    expression: 'tired',
    speaker: '苏晴岚',
    text: '手电给老人房。蜡烛——算了，酒店怕烟感。\n你，跟紧。',
    next: 'c31-03',
  },
  {
    id: 'c31-03',
    speaker: '沈屿',
    text: '你怕黑？',
    next: 'c31-04',
  },
  {
    id: 'c31-04',
    sprite: 'qinglan',
    expression: 'avert',
    speaker: '苏晴岚',
    text: '怕失控。\n黑只是失控的一种包装。',
    next: 'c31-choice',
  },
  {
    id: 'c31-choice',
    choices: [
      {
        text: '握住她的手腕片刻',
        next: 'c31-r0',
        affection: 15,
        setFlag: 'trust',
      },
      {
        text: '安静跟灯走',
        next: 'c31-r1',
        affection: 5,
      },
    ],
  },
  {
    id: 'c31-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '绿白光里，她的侧脸失去职业滤镜，只剩疲惫的真实。',
    next: 'c31-end',
  },
  {
    id: 'c31-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c31-end',
  },
  {
    id: 'c31-end',
    mood: 'dark',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch32',
  },
]
