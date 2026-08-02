import type { DialogueNode } from '../../../engine/types'

/** 第43章 · 订阅死角 */
export const chapter43: DialogueNode[] = [
  {
    id: 'ch43',
    chapter: 43,
    chapterTitle: '订阅死角',
    bg: 'qinghe-room-off',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第43章】订阅死角\n订阅后台的死角里，她把我的备注改成「不准结账」。',
    next: 'c43-01',
  },
  {
    id: 'c43-01',
    sprite: 'qinghe',
    text: '订阅后台的死角里，她把我的备注改成「不准结账」。',
    next: 'c43-02',
  },
  {
    id: 'c43-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '你可以走，但别付钱走人。',
    next: 'c43-03',
  },
  {
    id: 'c43-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c43-choice',
  },
  {
    id: 'c43-choice',
    choices: [
      {
            'text': '「订阅死角——我听见了。」——认真回应',
            'next': 'c43-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c43-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c43-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c43-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c43-mid',
  },
  {
    id: 'c43-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c43-mid',
  },
  {
    id: 'c43-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c43-mid',
  },
  {
    id: 'c43-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '订阅死角。夜还很长，壳还没合拢。',
    next: 'c43-end',
  },
  {
    id: 'c43-end',
    mood: 'warm',
    sprite: null,
    text: '订阅死角这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c43-end-cg',
  },
  {
    id: 'c43-end-cg',
    cg: 'qh-ch43-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n订阅后台的死角里，她把我的备注改成「不准结账」。',
    next: 'ch44',
  },
]
