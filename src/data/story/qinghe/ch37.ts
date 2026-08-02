import type { DialogueNode } from '../../../engine/types'

/** 第37章 · 黎明窗外 */
export const chapter37: DialogueNode[] = [
  {
    id: 'ch37',
    chapter: 37,
    chapterTitle: '黎明窗外',
    bg: 'seaside-dawn',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第37章】黎明窗外\n窗外黎明发青。她把环灯收进抽屉一寸。',
    next: 'c37-01',
  },
  {
    id: 'c37-01',
    sprite: 'qinghe',
    text: '窗外黎明发青。她把环灯收进抽屉一寸。',
    next: 'c37-02',
  },
  {
    id: 'c37-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '环灯很诚实，人心不一定。',
    next: 'c37-03',
  },
  {
    id: 'c37-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c37-choice',
  },
  {
    id: 'c37-choice',
    choices: [
      {
            'text': '「黎明窗外——我听见了。」——认真回应',
            'next': 'c37-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c37-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c37-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c37-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c37-mid',
  },
  {
    id: 'c37-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c37-mid',
  },
  {
    id: 'c37-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c37-mid',
  },
  {
    id: 'c37-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '黎明窗外。夜还很长，壳还没合拢。',
    next: 'c37-end',
  },
  {
    id: 'c37-end',
    mood: 'warm',
    sprite: null,
    text: '黎明窗外这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c37-end-cg',
  },
  {
    id: 'c37-end-cg',
    cg: 'qh-ch37-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n窗外黎明发青。她把环灯收进抽屉一寸。',
    next: 'ch38',
  },
]
