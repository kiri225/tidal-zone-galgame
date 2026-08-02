import type { DialogueNode } from '../../../engine/types'

/** 第19章 · 卖铺拷问 */
export const chapter19: DialogueNode[] = [
  {
    id: 'ch19',
    chapter: 19,
    chapterTitle: '卖铺拷问',
    bg: 'shop-back',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第19章】卖铺拷问\n卖铺的中介电话打断夜谈。她问：房卡会不会和我一起被扔掉。',
    next: 'c19-01',
  },
  {
    id: 'c19-01',
    sprite: 'qinghe',
    text: '卖铺的中介电话打断夜谈。她问：房卡会不会和我一起被扔掉。',
    next: 'c19-02',
  },
  {
    id: 'c19-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '你可以走，但别付钱走人。',
    next: 'c19-03',
  },
  {
    id: 'c19-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c19-choice',
  },
  {
    id: 'c19-choice',
    choices: [
      {
            'text': '「卖铺拷问——我听见了。」——认真回应',
            'next': 'c19-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c19-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c19-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c19-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c19-mid',
  },
  {
    id: 'c19-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c19-mid',
  },
  {
    id: 'c19-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c19-mid',
  },
  {
    id: 'c19-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '卖铺拷问。夜还很长，壳还没合拢。',
    next: 'c19-end',
  },
  {
    id: 'c19-end',
    mood: 'warm',
    sprite: null,
    text: '卖铺拷问这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c19-end-cg',
  },
  {
    id: 'c19-end-cg',
    cg: 'qh-ch19-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n卖铺的中介电话打断夜谈。她问：房卡会不会和我一起被扔掉。',
    next: 'ch20',
  },
]
