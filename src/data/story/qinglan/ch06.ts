import type { DialogueNode } from '../../../engine/types'

/**
 * 第6章 · 登记簿背面
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter06: DialogueNode[] = [
  {
    id: 'ch06',
    chapter: 6,
    chapterTitle: '登记簿背面',
    bg: 'hotel-lobby',
    mood: 'warm',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第6章】登记簿背面\n前台废纸篓边，一张作废的登记单被风翻过来。背面有铅笔字。',
    next: 'c06-01',
  },
  {
    id: 'c06-01',
    sprite: 'qinglan',
    text: '「三点的海比人诚实。」字迹清爽，像她敲键盘的节奏。',
    next: 'c06-02',
  },
  {
    id: 'c06-02',
    sprite: 'qinglan',
    expression: 'surprised',
    speaker: '苏晴岚',
    text: '……那是废单。',
    next: 'c06-03',
  },
  {
    id: 'c06-03',
    speaker: '沈屿',
    text: '废单也写得像诗。',
    next: 'c06-04',
  },
  {
    id: 'c06-04',
    sprite: 'qinglan',
    expression: 'avert',
    speaker: '苏晴岚',
    text: '夜班太闲会手痒。\n别告诉白班——他们会以为我精神有问题。',
    next: 'c06-05',
  },
  {
    id: 'c06-05',
    sprite: 'qinglan',
    text: '她把那张纸撕成两半，却把有字的一半塞进围裙口袋，而不是垃圾桶。',
    next: 'c06-choice',
  },
  {
    id: 'c06-choice',
    choices: [
      {
        text: '「我不会说。」——守秘密',
        next: 'c06-r0',
        affection: 10,
        setFlag: 'trust',
      },
      {
        text: '「再写给我看。」——得寸进尺',
        next: 'c06-r1',
        affection: 5,
      },
      {
        text: '装作没看见',
        next: 'c06-r2',
        affection: 0,
      },
    ],
  },
  {
    id: 'c06-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '登记簿合上。有些句子只适合写在作废的纸上，才不会被系统归档。',
    next: 'c06-end',
  },
  {
    id: 'c06-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c06-end',
  },
  {
    id: 'c06-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c06-end',
  },
  {
    id: 'c06-end',
    mood: 'warm',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch07',
  },
]
