import type { DialogueNode } from '../../../engine/types'

/** 第27章 · 和解的盐 */
export const chapter27: DialogueNode[] = [
  {
    id: 'ch27',
    chapter: 27,
    chapterTitle: '和解的盐',
    bg: 'street-rain',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第27章】和解的盐\n雨棚下她递来盐汽水。和解的味道咸，却干净。',
    next: 'c27-01',
  },
  {
    id: 'c27-01',
    sprite: 'qinghe',
    text: '雨棚下她递来盐汽水。和解的味道咸，却干净。',
    next: 'c27-02',
  },
  {
    id: 'c27-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '你可以走，但别付钱走人。',
    next: 'c27-03',
  },
  {
    id: 'c27-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c27-choice',
  },
  {
    id: 'c27-choice',
    choices: [
      {
            'text': '「和解的盐——我听见了。」——认真回应',
            'next': 'c27-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c27-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c27-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c27-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c27-mid',
  },
  {
    id: 'c27-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c27-mid',
  },
  {
    id: 'c27-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c27-mid',
  },
  {
    id: 'c27-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '和解的盐。夜还很长，壳还没合拢。',
    next: 'c27-gate',
  },
  {
    id: 'c27-gate',
    affectionBranch: { threshold: 45, whenMet: 'c27-cg', whenNot: 'c27-aftercg' },
  },
  {
    id: 'c27-cg',
    bg: 'street-rain',
    mood: 'intimate',
    sprite: null,
    cg: 'salt_qh',
    text: '【CG · 和解的盐】\n雨棚下盐汽水的气泡碎开。和解的咸，干净。',
    unlockCg: 'salt_qh',
    next: 'c27-aftercg',
  },
  {
    id: 'c27-aftercg',
    sprite: 'qinghe',
    expression: 'soft',
    cg: null,
    text: '灯还在。有些画面已经发生，有些还差一个潮位。',
    next: 'c27-end',
  },
  {
    id: 'c27-end',
    mood: 'warm',
    sprite: null,
    text: '和解的盐这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c27-end-cg',
  },
  {
    id: 'c27-end-cg',
    cg: 'qh-ch27-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n雨棚下她递来盐汽水。和解的味道咸，却干净。',
    next: 'ch28',
  },
]
