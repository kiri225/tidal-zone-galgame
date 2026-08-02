import type { DialogueNode } from '../../../engine/types'

/** 第20章 · 几乎越线 */
export const chapter20: DialogueNode[] = [
  {
    id: 'ch20',
    chapter: 20,
    chapterTitle: '几乎越线',
    bg: 'qinghe-room',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第20章】几乎越线\n距离近到呼吸交叠。她说停——停在几乎，而不是越过。',
    next: 'c20-01',
  },
  {
    id: 'c20-01',
    sprite: 'qinghe',
    text: '距离近到呼吸交叠。她说停——停在几乎，而不是越过。',
    next: 'c20-02',
  },
  {
    id: 'c20-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '壳是我选的，不是我欠的。',
    next: 'c20-03',
  },
  {
    id: 'c20-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c20-choice',
  },
  {
    id: 'c20-choice',
    choices: [
      {
            'text': '「几乎越线——我听见了。」——认真回应',
            'next': 'c20-r0',
            'affection': 10,
            'setFlag': 'shell'
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c20-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c20-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c20-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c20-mid',
  },
  {
    id: 'c20-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c20-mid',
  },
  {
    id: 'c20-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c20-mid',
  },
  {
    id: 'c20-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '几乎越线。夜还很长，壳还没合拢。',
    next: 'c20-gate',
  },
  {
    id: 'c20-gate',
    affectionBranch: { threshold: 40, whenMet: 'c20-cg', whenNot: 'c20-aftercg' },
  },
  {
    id: 'c20-cg',
    bg: 'qinghe-room',
    mood: 'intimate',
    sprite: null,
    cg: 'almost_qh',
    text: '【CG · 几乎越线】\n呼吸交叠的距离里，她说停。几乎，已经是完整的句子。',
    unlockCg: 'almost_qh',
    next: 'c20-aftercg',
  },
  {
    id: 'c20-aftercg',
    sprite: 'qinghe',
    expression: 'soft',
    cg: null,
    text: '灯还在。有些画面已经发生，有些还差一个潮位。',
    next: 'c20-end',
  },
  {
    id: 'c20-end',
    mood: 'warm',
    sprite: null,
    text: '几乎越线这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c20-end-cg',
  },
  {
    id: 'c20-end-cg',
    cg: 'qh-ch20-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n距离近到呼吸交叠。她说停——停在几乎，而不是越过。',
    next: 'ch21',
  },
]
