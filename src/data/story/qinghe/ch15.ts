import type { DialogueNode } from '../../../engine/types'

/** 第15章 · 小别·断更 */
export const chapter15: DialogueNode[] = [
  {
    id: 'ch15',
    chapter: 15,
    chapterTitle: '小别·断更',
    bg: 'port-night',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第15章】小别·断更\n账号显示「本周断更」。港口风大，她把钥匙塞回我手里。',
    next: 'c15-01',
  },
  {
    id: 'c15-01',
    sprite: 'qinghe',
    text: '账号显示「本周断更」。港口风大，她把钥匙塞回我手里。\n海风把帽檐掀起一瞬，又被她按回去——像把「顾清禾」三个字按回线下。',
    next: 'c15-02',
  },
  {
    id: 'c15-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '短暂停泊也可以，别假装永恒。',
    next: 'c15-03',
  },
  {
    id: 'c15-03',
    speaker: '沈屿',
    text: '我听着。不录音，不截图。',
    next: 'c15-04',
  },
  {
    id: 'c15-04',
    sprite: 'qinghe',
    expression: 'avert',
    text: '环灯的白光在她颧骨上切出一条细线。她没有职业笑，只有呼吸。',
    next: 'c15-05',
  },
  {
    id: 'c15-05',
    sprite: 'qinghe',
    expression: 'default',
    speaker: '顾清禾',
    text: '我可以卖被看的部分。剩下的，不标价。',
    next: 'c15-choice',
  },
  {
    id: 'c15-choice',
    choices: [
      {
            'text': '「小别·断更——我听见了。」——认真回应',
            'next': 'c15-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c15-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c15-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c15-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c15-mid',
  },
  {
    id: 'c15-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c15-mid',
  },
  {
    id: 'c15-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c15-mid',
  },
  {
    id: 'c15-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '这一章的潮位缓缓退开。小别·断更四个字像留在沙滩上的壳——空的，却还能听见风。',
    next: 'c15-end',
  },
  {
    id: 'c15-end',
    mood: 'warm',
    sprite: null,
    text: '小别·断更这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c15-end-cg',
  },
  {
    id: 'c15-end-cg',
    cg: 'qh-ch15-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n账号显示「本周断更」。港口风大，她把钥匙塞回我手里。',
    next: 'ch16',
  },
]
