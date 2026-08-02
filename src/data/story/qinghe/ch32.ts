import type { DialogueNode } from '../../../engine/types'

/** 第32章 · 只剩你我 */
export const chapter32: DialogueNode[] = [
  {
    id: 'ch32',
    chapter: 32,
    chapterTitle: '只剩你我',
    bg: 'qinghe-room-off',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第32章】只剩你我\n世界缩成这一间。手机倒扣，评论区终于听不见。',
    next: 'c32-01',
  },
  {
    id: 'c32-01',
    sprite: 'qinghe',
    text: '世界缩成这一间。手机倒扣，评论区终于听不见。',
    next: 'c32-02',
  },
  {
    id: 'c32-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '潮水会退。你呢。',
    next: 'c32-03',
  },
  {
    id: 'c32-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c32-choice',
  },
  {
    id: 'c32-choice',
    choices: [
      {
            'text': '「只剩你我——我听见了。」——认真回应',
            'next': 'c32-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c32-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c32-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c32-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c32-mid',
  },
  {
    id: 'c32-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c32-mid',
  },
  {
    id: 'c32-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c32-mid',
  },
  {
    id: 'c32-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '只剩你我。夜还很长，壳还没合拢。',
    next: 'c32-end',
  },
  {
    id: 'c32-end',
    mood: 'warm',
    sprite: null,
    text: '只剩你我这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c32-end-cg',
  },
  {
    id: 'c32-end-cg',
    cg: 'qh-ch32-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n世界缩成这一间。手机倒扣，评论区终于听不见。',
    next: 'ch33',
  },
]
