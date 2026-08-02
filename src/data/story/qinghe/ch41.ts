import type { DialogueNode } from '../../../engine/types'

/** 第41章 · 备用钥匙 */
export const chapter41: DialogueNode[] = [
  {
    id: 'ch41',
    chapter: 41,
    chapterTitle: '备用钥匙',
    bg: 'qinghe-room',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第41章】备用钥匙\n备用钥匙躺在掌心。她说你可以来，但别带打赏。',
    next: 'c41-01',
  },
  {
    id: 'c41-01',
    sprite: 'qinghe',
    text: '备用钥匙躺在掌心。她说你可以来，但别带打赏。',
    next: 'c41-02',
  },
  {
    id: 'c41-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '别用价目表看我。',
    next: 'c41-03',
  },
  {
    id: 'c41-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c41-choice',
  },
  {
    id: 'c41-choice',
    choices: [
      {
            'text': '「备用钥匙——我听见了。」——认真回应',
            'next': 'c41-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c41-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c41-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c41-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c41-mid',
  },
  {
    id: 'c41-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c41-mid',
  },
  {
    id: 'c41-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c41-mid',
  },
  {
    id: 'c41-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '备用钥匙。夜还很长，壳还没合拢。',
    next: 'c41-end',
  },
  {
    id: 'c41-end',
    mood: 'warm',
    sprite: null,
    text: '备用钥匙这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c41-end-cg',
  },
  {
    id: 'c41-end-cg',
    cg: 'qh-ch41-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n备用钥匙躺在掌心。她说你可以来，但别带打赏。',
    next: 'ch42',
  },
]
