import type { DialogueNode } from '../../../engine/types'

/** 第33章 · 有没有当真 */
export const chapter33: DialogueNode[] = [
  {
    id: 'ch33',
    chapter: 33,
    chapterTitle: '有没有当真',
    bg: 'qinghe-room-off',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第33章】有没有当真\n「有没有当真？」她问得很直，像论文摘要。',
    next: 'c33-01',
  },
  {
    id: 'c33-01',
    sprite: 'qinghe',
    text: '「有没有当真？」她问得很直，像论文摘要。',
    next: 'c33-02',
  },
  {
    id: 'c33-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '别用价目表看我。',
    next: 'c33-03',
  },
  {
    id: 'c33-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c33-choice',
  },
  {
    id: 'c33-choice',
    choices: [
      {
            'text': '「有没有当真——我听见了。」——认真回应',
            'next': 'c33-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c33-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c33-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c33-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c33-mid',
  },
  {
    id: 'c33-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c33-mid',
  },
  {
    id: 'c33-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c33-mid',
  },
  {
    id: 'c33-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '有没有当真。夜还很长，壳还没合拢。',
    next: 'c33-end',
  },
  {
    id: 'c33-end',
    mood: 'warm',
    sprite: null,
    text: '有没有当真这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c33-end-cg',
  },
  {
    id: 'c33-end-cg',
    cg: 'qh-ch33-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n「有没有当真？」她问得很直，像论文摘要。',
    next: 'ch34',
  },
]
