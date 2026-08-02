import type { DialogueNode } from '../../../engine/types'

/** 第40章 · 评论区的眼光 */
export const chapter40: DialogueNode[] = [
  {
    id: 'ch40',
    chapter: 40,
    chapterTitle: '评论区的眼光',
    bg: 'qinghe-room',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第40章】评论区的眼光\n评论区问她是谁。她打字：过客。又删掉。',
    next: 'c40-01',
  },
  {
    id: 'c40-01',
    sprite: 'qinghe',
    text: '评论区问她是谁。她打字：过客。又删掉。',
    next: 'c40-02',
  },
  {
    id: 'c40-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '潮水会退。你呢。',
    next: 'c40-03',
  },
  {
    id: 'c40-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c40-choice',
  },
  {
    id: 'c40-choice',
    choices: [
      {
            'text': '「评论区的眼光——我听见了。」——认真回应',
            'next': 'c40-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c40-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c40-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c40-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c40-mid',
  },
  {
    id: 'c40-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c40-mid',
  },
  {
    id: 'c40-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c40-mid',
  },
  {
    id: 'c40-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '评论区的眼光。夜还很长，壳还没合拢。',
    next: 'c40-end',
  },
  {
    id: 'c40-end',
    mood: 'warm',
    sprite: null,
    text: '评论区的眼光这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c40-end-cg',
  },
  {
    id: 'c40-end-cg',
    cg: 'qh-ch40-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n评论区问她是谁。她打字：过客。又删掉。',
    next: 'ch41',
  },
]
