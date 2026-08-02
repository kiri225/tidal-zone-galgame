import type { DialogueNode } from '../../../engine/types'

/** 第46章 · 联名的想象 */
export const chapter46: DialogueNode[] = [
  {
    id: 'ch46',
    chapter: 46,
    chapterTitle: '联名的想象',
    bg: 'shop-interior',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第46章】联名的想象\n我们想象联名：拾潮的旧物，配她关灯后的安静。',
    next: 'c46-01',
  },
  {
    id: 'c46-01',
    sprite: 'qinghe',
    text: '我们想象联名：拾潮的旧物，配她关灯后的安静。',
    next: 'c46-02',
  },
  {
    id: 'c46-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '我不怕被看，怕只被订阅。',
    next: 'c46-03',
  },
  {
    id: 'c46-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c46-choice',
  },
  {
    id: 'c46-choice',
    choices: [
      {
            'text': '「联名的想象——我听见了。」——认真回应',
            'next': 'c46-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c46-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c46-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c46-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c46-mid',
  },
  {
    id: 'c46-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c46-mid',
  },
  {
    id: 'c46-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c46-mid',
  },
  {
    id: 'c46-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '联名的想象。夜还很长，壳还没合拢。',
    next: 'c46-end',
  },
  {
    id: 'c46-end',
    mood: 'warm',
    sprite: null,
    text: '联名的想象这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c46-end-cg',
  },
  {
    id: 'c46-end-cg',
    cg: 'qh-ch46-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n我们想象联名：拾潮的旧物，配她关灯后的安静。',
    next: 'ch47',
  },
]
