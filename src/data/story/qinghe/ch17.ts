import type { DialogueNode } from '../../../engine/types'

/** 第17章 · 常客不是客户 */
export const chapter17: DialogueNode[] = [
  {
    id: 'ch17',
    chapter: 17,
    chapterTitle: '常客不是客户',
    bg: 'qinghe-room',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第17章】常客不是客户\n「常客可以续杯，客户只能结账。」她把这句话写在便签上。',
    next: 'c17-01',
  },
  {
    id: 'c17-01',
    sprite: 'qinghe',
    text: '「常客可以续杯，客户只能结账。」她把这句话写在便签上。',
    next: 'c17-02',
  },
  {
    id: 'c17-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '别用价目表看我。',
    next: 'c17-03',
  },
  {
    id: 'c17-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c17-choice',
  },
  {
    id: 'c17-choice',
    choices: [
      {
            'text': '「常客不是客户——我听见了。」——认真回应',
            'next': 'c17-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c17-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c17-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c17-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c17-mid',
  },
  {
    id: 'c17-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c17-mid',
  },
  {
    id: 'c17-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c17-mid',
  },
  {
    id: 'c17-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '常客不是客户。夜还很长，壳还没合拢。',
    next: 'c17-end',
  },
  {
    id: 'c17-end',
    mood: 'warm',
    sprite: null,
    text: '常客不是客户这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c17-end-cg',
  },
  {
    id: 'c17-end-cg',
    cg: 'qh-ch17-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n「常客可以续杯，客户只能结账。」她把这句话写在便签上。',
    next: 'ch18',
  },
]
