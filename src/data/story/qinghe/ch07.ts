import type { DialogueNode } from '../../../engine/types'

/** 第7章 · 窗外潮声 */
export const chapter07: DialogueNode[] = [
  {
    id: 'ch07',
    chapter: 7,
    chapterTitle: '窗外潮声',
    bg: 'qinghe-room',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第7章】窗外潮声\n窗外潮声比评论区诚实。她把窗开一条缝，盐风灌进来。',
    next: 'c07-01',
  },
  {
    id: 'c07-01',
    sprite: 'qinghe',
    text: '窗外潮声比评论区诚实。她把窗开一条缝，盐风灌进来。\n海风把帽檐掀起一瞬，又被她按回去——像把「顾清禾」三个字按回线下。',
    next: 'c07-02',
  },
  {
    id: 'c07-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '短暂停泊也可以，别假装永恒。',
    next: 'c07-03',
  },
  {
    id: 'c07-03',
    speaker: '沈屿',
    text: '我听着。不录音，不截图。',
    next: 'c07-04',
  },
  {
    id: 'c07-04',
    sprite: 'qinghe',
    expression: 'avert',
    text: '环灯的白光在她颧骨上切出一条细线。她没有职业笑，只有呼吸。',
    next: 'c07-05',
  },
  {
    id: 'c07-05',
    sprite: 'qinghe',
    expression: 'default',
    speaker: '顾清禾',
    text: '我可以卖被看的部分。剩下的，不标价。',
    next: 'c07-choice',
  },
  {
    id: 'c07-choice',
    choices: [
      {
            'text': '「窗外潮声——我听见了。」——认真回应',
            'next': 'c07-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c07-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c07-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c07-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c07-mid',
  },
  {
    id: 'c07-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c07-mid',
  },
  {
    id: 'c07-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c07-mid',
  },
  {
    id: 'c07-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '这一章的潮位缓缓退开。窗外潮声四个字像留在沙滩上的壳——空的，却还能听见风。',
    next: 'c07-end',
  },
  {
    id: 'c07-end',
    mood: 'warm',
    sprite: null,
    text: '窗外潮声这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c07-end-cg',
  },
  {
    id: 'c07-end-cg',
    cg: 'qh-ch07-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n窗外潮声比评论区诚实。她把窗开一条缝，盐风灌进来。',
    next: 'ch08',
  },
]
