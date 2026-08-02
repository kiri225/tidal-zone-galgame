import type { DialogueNode } from '../../../engine/types'

/** 第24章 · 外拍湿衫 */
export const chapter24: DialogueNode[] = [
  {
    id: 'ch24',
    chapter: 24,
    chapterTitle: '外拍湿衫',
    bg: 'tide-pools',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第24章】外拍湿衫\n潮间带外拍，白衬衫湿透。她说这张不修图，只发给你。',
    next: 'c24-01',
  },
  {
    id: 'c24-01',
    sprite: 'qinghe',
    text: '潮间带外拍，白衬衫湿透。她说这张不修图，只发给你。',
    next: 'c24-02',
  },
  {
    id: 'c24-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '潮水会退。你呢。',
    next: 'c24-03',
  },
  {
    id: 'c24-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c24-choice',
  },
  {
    id: 'c24-choice',
    choices: [
      {
            'text': '「外拍湿衫——我听见了。」——认真回应',
            'next': 'c24-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c24-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c24-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c24-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c24-mid',
  },
  {
    id: 'c24-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c24-mid',
  },
  {
    id: 'c24-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c24-mid',
  },
  {
    id: 'c24-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '外拍湿衫。夜还很长，壳还没合拢。',
    next: 'c24-end',
  },
  {
    id: 'c24-end',
    mood: 'warm',
    sprite: null,
    text: '外拍湿衫这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c24-end-cg',
  },
  {
    id: 'c24-end-cg',
    cg: 'qh-ch24-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n潮间带外拍，白衬衫湿透。她说这张不修图，只发给你。',
    next: 'ch25',
  },
]
