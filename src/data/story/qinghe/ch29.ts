import type { DialogueNode } from '../../../engine/types'

/** 第29章 · 台风预警 */
export const chapter29: DialogueNode[] = [
  {
    id: 'ch29',
    chapter: 29,
    chapterTitle: '台风预警',
    bg: 'street-rain',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第29章】台风预警\n台风预警刷红。短信只有两个字：来。',
    next: 'c29-01',
  },
  {
    id: 'c29-01',
    sprite: 'qinghe',
    text: '台风预警刷红。短信只有两个字：来。',
    next: 'c29-02',
  },
  {
    id: 'c29-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '环灯很诚实，人心不一定。',
    next: 'c29-03',
  },
  {
    id: 'c29-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c29-choice',
  },
  {
    id: 'c29-choice',
    choices: [
      {
            'text': '「台风预警——我听见了。」——认真回应',
            'next': 'c29-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c29-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c29-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c29-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c29-mid',
  },
  {
    id: 'c29-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c29-mid',
  },
  {
    id: 'c29-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c29-mid',
  },
  {
    id: 'c29-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '台风预警。夜还很长，壳还没合拢。',
    next: 'c29-end',
  },
  {
    id: 'c29-end',
    mood: 'warm',
    sprite: null,
    text: '台风预警这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c29-end-cg',
  },
  {
    id: 'c29-end-cg',
    cg: 'qh-ch29-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n台风预警刷红。短信只有两个字：来。',
    next: 'ch30',
  },
]
