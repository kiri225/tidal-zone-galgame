import type { DialogueNode } from '../../../engine/types'

/** 第21章 · 关播夜话 */
export const chapter21: DialogueNode[] = [
  {
    id: 'ch21',
    chapter: 21,
    chapterTitle: '关播夜话',
    bg: 'qinghe-room-off',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第21章】关播夜话\n关播后只剩潮声。名牌式的价目卡被她扣在台面朝下。',
    next: 'c21-01',
  },
  {
    id: 'c21-01',
    sprite: 'qinghe',
    text: '关播后只剩潮声。名牌式的价目卡被她扣在台面朝下。',
    next: 'c21-02',
  },
  {
    id: 'c21-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '环灯很诚实，人心不一定。',
    next: 'c21-03',
  },
  {
    id: 'c21-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c21-choice',
  },
  {
    id: 'c21-choice',
    choices: [
      {
            'text': '「关播夜话——我听见了。」——认真回应',
            'next': 'c21-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c21-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c21-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c21-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c21-mid',
  },
  {
    id: 'c21-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c21-mid',
  },
  {
    id: 'c21-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c21-mid',
  },
  {
    id: 'c21-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '关播夜话。夜还很长，壳还没合拢。',
    next: 'c21-gate',
  },
  {
    id: 'c21-gate',
    affectionBranch: { threshold: 30, whenMet: 'c21-cg', whenNot: 'c21-aftercg' },
  },
  {
    id: 'c21-cg',
    bg: 'qinghe-room-off',
    mood: 'intimate',
    sprite: null,
    cg: 'offtalk',
    text: '【CG · 关播夜话】\n耳机摘下，价目卡朝下。关播后的夜话不标价。',
    unlockCg: 'offtalk',
    next: 'c21-aftercg',
  },
  {
    id: 'c21-aftercg',
    sprite: 'qinghe',
    expression: 'soft',
    cg: null,
    text: '灯还在。有些画面已经发生，有些还差一个潮位。',
    next: 'c21-end',
  },
  {
    id: 'c21-end',
    mood: 'warm',
    sprite: null,
    text: '关播夜话这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c21-end-cg',
  },
  {
    id: 'c21-end-cg',
    cg: 'qh-ch21-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n关播后只剩潮声。名牌式的价目卡被她扣在台面朝下。',
    next: 'ch22',
  },
]
