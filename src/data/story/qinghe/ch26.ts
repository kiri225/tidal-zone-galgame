import type { DialogueNode } from '../../../engine/types'

/** 第26章 · 争吵的价目 */
export const chapter26: DialogueNode[] = [
  {
    id: 'ch26',
    chapter: 26,
    chapterTitle: '争吵的价目',
    bg: 'street-rain',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第26章】争吵的价目\n我们吵起来。她说你是不是也在消费我——用关心的方式。',
    next: 'c26-01',
  },
  {
    id: 'c26-01',
    sprite: 'qinghe',
    text: '我们吵起来。她说你是不是也在消费我——用关心的方式。',
    next: 'c26-02',
  },
  {
    id: 'c26-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '关了灯，我才是顾清禾。',
    next: 'c26-03',
  },
  {
    id: 'c26-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c26-choice',
  },
  {
    id: 'c26-choice',
    choices: [
      {
            'text': '「争吵的价目——我听见了。」——认真回应',
            'next': 'c26-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c26-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c26-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c26-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c26-mid',
  },
  {
    id: 'c26-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c26-mid',
  },
  {
    id: 'c26-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c26-mid',
  },
  {
    id: 'c26-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '争吵的价目。夜还很长，壳还没合拢。',
    next: 'c26-end',
  },
  {
    id: 'c26-end',
    mood: 'warm',
    sprite: null,
    text: '争吵的价目这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c26-end-cg',
  },
  {
    id: 'c26-end-cg',
    cg: 'qh-ch26-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n我们吵起来。她说你是不是也在消费我——用关心的方式。',
    next: 'ch27',
  },
]
