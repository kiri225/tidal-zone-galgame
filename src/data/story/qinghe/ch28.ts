import type { DialogueNode } from '../../../engine/types'

/** 第28章 · 谈到关灯 */
export const chapter28: DialogueNode[] = [
  {
    id: 'ch28',
    chapter: 28,
    chapterTitle: '谈到关灯',
    bg: 'qinghe-room',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第28章】谈到关灯\n谈到关灯。她说关了就不能假装这是工作。',
    next: 'c28-01',
  },
  {
    id: 'c28-01',
    sprite: 'qinghe',
    text: '谈到关灯。她说关了就不能假装这是工作。',
    next: 'c28-02',
  },
  {
    id: 'c28-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '壳是我选的，不是我欠的。',
    next: 'c28-03',
  },
  {
    id: 'c28-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c28-choice',
  },
  {
    id: 'c28-choice',
    choices: [
      {
            'text': '「谈到关灯——我听见了。」——认真回应',
            'next': 'c28-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c28-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c28-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c28-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c28-mid',
  },
  {
    id: 'c28-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c28-mid',
  },
  {
    id: 'c28-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c28-mid',
  },
  {
    id: 'c28-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '谈到关灯。夜还很长，壳还没合拢。',
    next: 'c28-end',
  },
  {
    id: 'c28-end',
    mood: 'warm',
    sprite: null,
    text: '谈到关灯这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c28-end-cg',
  },
  {
    id: 'c28-end-cg',
    cg: 'qh-ch28-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n谈到关灯。她说关了就不能假装这是工作。',
    next: 'ch29',
  },
]
