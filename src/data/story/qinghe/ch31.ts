import type { DialogueNode } from '../../../engine/types'

/** 第31章 · 环灯还亮 */
export const chapter31: DialogueNode[] = [
  {
    id: 'ch31',
    chapter: 31,
    chapterTitle: '环灯还亮',
    bg: 'qinghe-room',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第31章】环灯还亮\n她调暗一档：「还亮着，是因为我还没决定信你。」',
    next: 'c31-01',
  },
  {
    id: 'c31-01',
    sprite: 'qinghe',
    text: '她调暗一档：「还亮着，是因为我还没决定信你。」',
    next: 'c31-02',
  },
  {
    id: 'c31-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '短暂停泊也可以，别假装永恒。',
    next: 'c31-03',
  },
  {
    id: 'c31-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c31-choice',
  },
  {
    id: 'c31-choice',
    choices: [
      {
            'text': '「环灯还亮——我听见了。」——认真回应',
            'next': 'c31-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c31-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c31-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c31-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c31-mid',
  },
  {
    id: 'c31-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c31-mid',
  },
  {
    id: 'c31-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c31-mid',
  },
  {
    id: 'c31-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '环灯还亮。夜还很长，壳还没合拢。',
    next: 'c31-end',
  },
  {
    id: 'c31-end',
    mood: 'warm',
    sprite: null,
    text: '环灯还亮这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c31-end-cg',
  },
  {
    id: 'c31-end-cg',
    cg: 'qh-ch31-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n她调暗一档：「还亮着，是因为我还没决定信你。」',
    next: 'ch32',
  },
]
