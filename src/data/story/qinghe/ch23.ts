import type { DialogueNode } from '../../../engine/types'

/** 第23章 · 市集伪装 */
export const chapter23: DialogueNode[] = [
  {
    id: 'ch23',
    chapter: 23,
    chapterTitle: '市集伪装',
    bg: 'market-morning',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'casual',
    cg: null,
    text: '【第23章】市集伪装\n市集里她回头确认我还在，像确认一艘不肯走开的船。',
    next: 'c23-01',
  },
  {
    id: 'c23-01',
    sprite: 'qinghe',
    text: '市集里她回头确认我还在，像确认一艘不肯走开的船。',
    next: 'c23-02',
  },
  {
    id: 'c23-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '短暂停泊也可以，别假装永恒。',
    next: 'c23-03',
  },
  {
    id: 'c23-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c23-choice',
  },
  {
    id: 'c23-choice',
    choices: [
      {
            'text': '「市集伪装——我听见了。」——认真回应',
            'next': 'c23-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c23-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c23-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c23-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c23-mid',
  },
  {
    id: 'c23-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c23-mid',
  },
  {
    id: 'c23-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c23-mid',
  },
  {
    id: 'c23-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '市集伪装。夜还很长，壳还没合拢。',
    next: 'c23-gate',
  },
  {
    id: 'c23-gate',
    affectionBranch: { threshold: 35, whenMet: 'c23-cg', whenNot: 'c23-aftercg' },
  },
  {
    id: 'c23-cg',
    bg: 'market-morning',
    mood: 'intimate',
    sprite: null,
    cg: 'market_qh',
    text: '【CG · 市集伪装】\n帽檐下她回头确认你还在——像确认一艘不肯走开的船。',
    unlockCg: 'market_qh',
    next: 'c23-aftercg',
  },
  {
    id: 'c23-aftercg',
    sprite: 'qinghe',
    expression: 'soft',
    cg: null,
    text: '灯还在。有些画面已经发生，有些还差一个潮位。',
    next: 'c23-end',
  },
  {
    id: 'c23-end',
    mood: 'warm',
    sprite: null,
    text: '市集伪装这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c23-end-cg',
  },
  {
    id: 'c23-end-cg',
    cg: 'qh-ch23-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n市集里她回头确认我还在，像确认一艘不肯走开的船。',
    next: 'ch24',
  },
]
