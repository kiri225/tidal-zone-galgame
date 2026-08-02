import type { DialogueNode } from '../../../engine/types'

/** 第25章 · 清仓的钥匙 */
export const chapter25: DialogueNode[] = [
  {
    id: 'ch25',
    chapter: 25,
    chapterTitle: '清仓的钥匙',
    bg: 'shop-interior',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第25章】清仓的钥匙\n拾潮的钥匙串多了一枚公寓备用。她说：不是交易，是怕台风。',
    next: 'c25-01',
  },
  {
    id: 'c25-01',
    sprite: 'qinghe',
    text: '拾潮的钥匙串多了一枚公寓备用。她说：不是交易，是怕台风。',
    next: 'c25-02',
  },
  {
    id: 'c25-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '别用价目表看我。',
    next: 'c25-03',
  },
  {
    id: 'c25-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c25-choice',
  },
  {
    id: 'c25-choice',
    choices: [
      {
            'text': '「清仓的钥匙——我听见了。」——认真回应',
            'next': 'c25-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c25-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c25-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c25-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c25-mid',
  },
  {
    id: 'c25-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c25-mid',
  },
  {
    id: 'c25-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c25-mid',
  },
  {
    id: 'c25-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '清仓的钥匙。夜还很长，壳还没合拢。',
    next: 'c25-end',
  },
  {
    id: 'c25-end',
    mood: 'warm',
    sprite: null,
    text: '清仓的钥匙这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c25-end-cg',
  },
  {
    id: 'c25-end-cg',
    cg: 'qh-ch25-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n拾潮的钥匙串多了一枚公寓备用。她说：不是交易，是怕台风。',
    next: 'ch26',
  },
]
