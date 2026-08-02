import type { DialogueNode } from '../../../engine/types'

/** 第47章 · 最后通牒 */
export const chapter47: DialogueNode[] = [
  {
    id: 'ch47',
    chapter: 47,
    chapterTitle: '最后通牒',
    bg: 'street-day',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第47章】最后通牒\n中介与平台同时催。最后通牒像两股潮。',
    next: 'c47-01',
  },
  {
    id: 'c47-01',
    sprite: 'qinghe',
    text: '中介与平台同时催。最后通牒像两股潮。',
    next: 'c47-02',
  },
  {
    id: 'c47-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '短暂停泊也可以，别假装永恒。',
    next: 'c47-03',
  },
  {
    id: 'c47-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c47-choice',
  },
  {
    id: 'c47-choice',
    choices: [
      {
            'text': '「最后通牒——我听见了。」——认真回应',
            'next': 'c47-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c47-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c47-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c47-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c47-mid',
  },
  {
    id: 'c47-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c47-mid',
  },
  {
    id: 'c47-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c47-mid',
  },
  {
    id: 'c47-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '最后通牒。夜还很长，壳还没合拢。',
    next: 'c47-end',
  },
  {
    id: 'c47-end',
    mood: 'warm',
    sprite: null,
    text: '最后通牒这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c47-end-cg',
  },
  {
    id: 'c47-end-cg',
    cg: 'qh-ch47-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n中介与平台同时催。最后通牒像两股潮。',
    next: 'ch48',
  },
]
