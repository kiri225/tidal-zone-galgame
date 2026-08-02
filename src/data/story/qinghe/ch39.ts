import type { DialogueNode } from '../../../engine/types'

/** 第39章 · 假装开播 */
export const chapter39: DialogueNode[] = [
  {
    id: 'ch39',
    chapter: 39,
    chapterTitle: '假装开播',
    bg: 'qinghe-room',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第39章】假装开播\n她假装开播，又在开场白里念我的名字——只有我听得到。',
    next: 'c39-01',
  },
  {
    id: 'c39-01',
    sprite: 'qinghe',
    text: '她假装开播，又在开场白里念我的名字——只有我听得到。',
    next: 'c39-02',
  },
  {
    id: 'c39-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '短暂停泊也可以，别假装永恒。',
    next: 'c39-03',
  },
  {
    id: 'c39-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c39-choice',
  },
  {
    id: 'c39-choice',
    choices: [
      {
            'text': '「假装开播——我听见了。」——认真回应',
            'next': 'c39-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c39-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c39-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c39-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c39-mid',
  },
  {
    id: 'c39-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c39-mid',
  },
  {
    id: 'c39-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c39-mid',
  },
  {
    id: 'c39-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '假装开播。夜还很长，壳还没合拢。',
    next: 'c39-end',
  },
  {
    id: 'c39-end',
    mood: 'warm',
    sprite: null,
    text: '假装开播这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c39-end-cg',
  },
  {
    id: 'c39-end-cg',
    cg: 'qh-ch39-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n她假装开播，又在开场白里念我的名字——只有我听得到。',
    next: 'ch40',
  },
]
