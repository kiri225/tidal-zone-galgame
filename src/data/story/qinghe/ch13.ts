import type { DialogueNode } from '../../../engine/types'

/** 第13章 · 订阅墙 */
export const chapter13: DialogueNode[] = [
  {
    id: 'ch13',
    chapter: 13,
    chapterTitle: '订阅墙',
    bg: 'qinghe-room',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第13章】订阅墙\n订阅墙把身体分成可买与不可买。她问：你站哪一边。',
    next: 'c13-01',
  },
  {
    id: 'c13-01',
    sprite: 'qinghe',
    text: '订阅墙把身体分成可买与不可买。她问：你站哪一边。\n海风把帽檐掀起一瞬，又被她按回去——像把「顾清禾」三个字按回线下。',
    next: 'c13-02',
  },
  {
    id: 'c13-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '环灯很诚实，人心不一定。',
    next: 'c13-03',
  },
  {
    id: 'c13-03',
    speaker: '沈屿',
    text: '我听着。不录音，不截图。',
    next: 'c13-04',
  },
  {
    id: 'c13-04',
    sprite: 'qinghe',
    expression: 'avert',
    text: '环灯的白光在她颧骨上切出一条细线。她没有职业笑，只有呼吸。',
    next: 'c13-05',
  },
  {
    id: 'c13-05',
    sprite: 'qinghe',
    expression: 'default',
    speaker: '顾清禾',
    text: '我可以卖被看的部分。剩下的，不标价。',
    next: 'c13-choice',
  },
  {
    id: 'c13-choice',
    choices: [
      {
            'text': '「订阅墙——我听见了。」——认真回应',
            'next': 'c13-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c13-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c13-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c13-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c13-mid',
  },
  {
    id: 'c13-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c13-mid',
  },
  {
    id: 'c13-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c13-mid',
  },
  {
    id: 'c13-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '这一章的潮位缓缓退开。订阅墙四个字像留在沙滩上的壳——空的，却还能听见风。',
    next: 'c13-end',
  },
  {
    id: 'c13-end',
    mood: 'warm',
    sprite: null,
    text: '订阅墙这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c13-end-cg',
  },
  {
    id: 'c13-end-cg',
    cg: 'qh-ch13-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n订阅墙把身体分成可买与不可买。她问：你站哪一边。',
    next: 'ch14',
  },
]
