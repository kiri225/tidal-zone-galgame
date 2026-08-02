import type { DialogueNode } from '../../../engine/types'

/** 第49章 · 过客不再订 */
export const chapter49: DialogueNode[] = [
  {
    id: 'ch49',
    chapter: 49,
    chapterTitle: '过客不再订',
    bg: 'port-night',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第49章】过客不再订\n她把「接受预约」关掉。过客不再订。',
    next: 'c49-01',
  },
  {
    id: 'c49-01',
    sprite: 'qinghe',
    text: '她把「接受预约」关掉。过客不再订。',
    next: 'c49-02',
  },
  {
    id: 'c49-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '别用价目表看我。',
    next: 'c49-03',
  },
  {
    id: 'c49-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c49-choice',
  },
  {
    id: 'c49-choice',
    choices: [
      {
            'text': '「过客不再订——我听见了。」——认真回应',
            'next': 'c49-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c49-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c49-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c49-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c49-mid',
  },
  {
    id: 'c49-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c49-mid',
  },
  {
    id: 'c49-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c49-mid',
  },
  {
    id: 'c49-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '过客不再订。夜还很长，壳还没合拢。',
    next: 'c49-end',
  },
  {
    id: 'c49-end',
    mood: 'warm',
    sprite: null,
    text: '过客不再订这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c49-end-cg',
  },
  {
    id: 'c49-end-cg',
    cg: 'qh-ch49-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n她把「接受预约」关掉。过客不再订。',
    next: 'ch50',
  },
]
