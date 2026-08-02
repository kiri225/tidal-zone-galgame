import type { DialogueNode } from '../../../engine/types'

/** 第48章 · 公寓的门 */
export const chapter48: DialogueNode[] = [
  {
    id: 'ch48',
    chapter: 48,
    chapterTitle: '公寓的门',
    bg: 'qinghe-room',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第48章】公寓的门\n公寓的门今晚不反锁。她说：过客会自己走开。',
    next: 'c48-01',
  },
  {
    id: 'c48-01',
    sprite: 'qinghe',
    text: '公寓的门今晚不反锁。她说：过客会自己走开。',
    next: 'c48-02',
  },
  {
    id: 'c48-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '潮水会退。你呢。',
    next: 'c48-03',
  },
  {
    id: 'c48-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c48-choice',
  },
  {
    id: 'c48-choice',
    choices: [
      {
            'text': '「公寓的门——我听见了。」——认真回应',
            'next': 'c48-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c48-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c48-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c48-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c48-mid',
  },
  {
    id: 'c48-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c48-mid',
  },
  {
    id: 'c48-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c48-mid',
  },
  {
    id: 'c48-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '公寓的门。夜还很长，壳还没合拢。',
    next: 'c48-end',
  },
  {
    id: 'c48-end',
    mood: 'warm',
    sprite: null,
    text: '公寓的门这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c48-end-cg',
  },
  {
    id: 'c48-end-cg',
    cg: 'qh-ch48-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n公寓的门今晚不反锁。她说：过客会自己走开。',
    next: 'ch49',
  },
]
