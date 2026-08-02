import type { DialogueNode } from '../../../engine/types'

/** 第36章 · 习惯还是岸 */
export const chapter36: DialogueNode[] = [
  {
    id: 'ch36',
    chapter: 36,
    chapterTitle: '习惯还是岸',
    bg: 'qinghe-room',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第36章】习惯还是岸\n清晨她问：我们算习惯，还是算岸。',
    next: 'c36-01',
  },
  {
    id: 'c36-01',
    sprite: 'qinghe',
    text: '清晨她问：我们算习惯，还是算岸。',
    next: 'c36-02',
  },
  {
    id: 'c36-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '壳是我选的，不是我欠的。',
    next: 'c36-03',
  },
  {
    id: 'c36-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c36-choice',
  },
  {
    id: 'c36-choice',
    choices: [
      {
            'text': '「习惯还是岸——我听见了。」——认真回应',
            'next': 'c36-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c36-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c36-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c36-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c36-mid',
  },
  {
    id: 'c36-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c36-mid',
  },
  {
    id: 'c36-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c36-mid',
  },
  {
    id: 'c36-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '习惯还是岸。夜还很长，壳还没合拢。',
    next: 'c36-end',
  },
  {
    id: 'c36-end',
    mood: 'warm',
    sprite: null,
    text: '习惯还是岸这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c36-end-cg',
  },
  {
    id: 'c36-end-cg',
    cg: 'qh-ch36-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n清晨她问：我们算习惯，还是算岸。',
    next: 'ch37',
  },
]
