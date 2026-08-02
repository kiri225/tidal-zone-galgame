import type { DialogueNode } from '../../../engine/types'

/** 第12章 · 线下伪装 */
export const chapter12: DialogueNode[] = [
  {
    id: 'ch12',
    chapter: 12,
    chapterTitle: '线下伪装',
    bg: 'market-morning',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'casual',
    cg: null,
    text: '【第12章】线下伪装\n早市人声里，她把帽檐压得更低：「别叫我的网名。」',
    next: 'c12-01',
  },
  {
    id: 'c12-01',
    sprite: 'qinghe',
    text: '早市人声里，她把帽檐压得更低：「别叫我的网名。」\n海风把帽檐掀起一瞬，又被她按回去——像把「顾清禾」三个字按回线下。',
    next: 'c12-02',
  },
  {
    id: 'c12-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '壳是我选的，不是我欠的。',
    next: 'c12-03',
  },
  {
    id: 'c12-03',
    speaker: '沈屿',
    text: '我听着。不录音，不截图。',
    next: 'c12-04',
  },
  {
    id: 'c12-04',
    sprite: 'qinghe',
    expression: 'avert',
    text: '环灯的白光在她颧骨上切出一条细线。她没有职业笑，只有呼吸。',
    next: 'c12-05',
  },
  {
    id: 'c12-05',
    sprite: 'qinghe',
    expression: 'default',
    speaker: '顾清禾',
    text: '我可以卖被看的部分。剩下的，不标价。',
    next: 'c12-choice',
  },
  {
    id: 'c12-choice',
    choices: [
      {
            'text': '「线下伪装——我听见了。」——认真回应',
            'next': 'c12-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c12-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c12-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c12-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c12-mid',
  },
  {
    id: 'c12-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c12-mid',
  },
  {
    id: 'c12-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c12-mid',
  },
  {
    id: 'c12-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '这一章的潮位缓缓退开。线下伪装四个字像留在沙滩上的壳——空的，却还能听见风。',
    next: 'c12-end',
  },
  {
    id: 'c12-end',
    mood: 'warm',
    sprite: null,
    text: '线下伪装这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c12-end-cg',
  },
  {
    id: 'c12-end-cg',
    cg: 'qh-ch12-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n早市人声里，她把帽檐压得更低：「别叫我的网名。」',
    next: 'ch13',
  },
]
