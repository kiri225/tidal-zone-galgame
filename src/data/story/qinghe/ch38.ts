import type { DialogueNode } from '../../../engine/types'

/** 第38章 · 潮间带·外拍 */
export const chapter38: DialogueNode[] = [
  {
    id: 'ch38',
    chapter: 38,
    chapterTitle: '潮间带·外拍',
    bg: 'tide-pools',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第38章】潮间带·外拍\n岩滩上她说寄居蟹会换壳；人有时候也得。',
    next: 'c38-01',
  },
  {
    id: 'c38-01',
    sprite: 'qinghe',
    text: '岩滩上她说寄居蟹会换壳；人有时候也得。',
    next: 'c38-02',
  },
  {
    id: 'c38-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '我不怕被看，怕只被订阅。',
    next: 'c38-03',
  },
  {
    id: 'c38-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c38-choice',
  },
  {
    id: 'c38-choice',
    choices: [
      {
            'text': '「潮间带·外拍——我听见了。」——认真回应',
            'next': 'c38-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c38-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c38-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c38-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c38-mid',
  },
  {
    id: 'c38-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c38-mid',
  },
  {
    id: 'c38-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c38-mid',
  },
  {
    id: 'c38-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '潮间带·外拍。夜还很长，壳还没合拢。',
    next: 'c38-end',
  },
  {
    id: 'c38-end',
    mood: 'warm',
    sprite: null,
    text: '潮间带·外拍这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c38-end-cg',
  },
  {
    id: 'c38-end-cg',
    cg: 'qh-ch38-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n岩滩上她说寄居蟹会换壳；人有时候也得。',
    next: 'ch39',
  },
]
