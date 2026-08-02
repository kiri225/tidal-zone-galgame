import type { DialogueNode } from '../../../engine/types'

/** 第1章 · 卫衣与口罩 */
export const chapter01: DialogueNode[] = [
  {
    id: 'ch01',
    chapter: 1,
    chapterTitle: '卫衣与口罩',
    bg: 'street-day',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第1章】卫衣与口罩\n旧街日光里，一个戴口罩的女人把棒球帽檐压得很低。卫衣太大，却仍压不住肩线。',
    next: 'c01-01',
  },
  {
    id: 'c01-01',
    sprite: 'qinghe',
    text: '旧街日光里，一个戴口罩的女人把棒球帽檐压得很低。卫衣太大，却仍压不住肩线。\n海风把帽檐掀起一瞬，又被她按回去——像把「顾清禾」三个字按回线下。',
    next: 'c01-02',
  },
  {
    id: 'c01-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '别用价目表看我。',
    next: 'c01-03',
  },
  {
    id: 'c01-03',
    speaker: '沈屿',
    text: '我只是路过。你看起来……不像在等人，像在躲人。',
    next: 'c01-04',
  },
  {
    id: 'c01-04',
    sprite: 'qinghe',
    expression: 'avert',
    text: '她沉默了两秒。两秒对福利姬来说，已经是事故——事故里却有人。',
    next: 'c01-05',
  },
  {
    id: 'c01-05',
    sprite: 'qinghe',
    expression: 'default',
    speaker: '顾清禾',
    text: '我可以卖被看的部分。剩下的，不标价。',
    next: 'c01-choice',
  },
  {
    id: 'c01-choice',
    choices: [
      {
            'text': '「卫衣与口罩——我听见了。」——认真回应',
            'next': 'c01-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c01-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c01-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c01-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c01-mid',
  },
  {
    id: 'c01-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c01-mid',
  },
  {
    id: 'c01-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c01-mid',
  },
  {
    id: 'c01-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '这一章的潮位缓缓退开。卫衣与口罩四个字像留在沙滩上的壳——空的，却还能听见风。',
    next: 'c01-end',
  },
  {
    id: 'c01-end',
    mood: 'warm',
    sprite: null,
    text: '卫衣与口罩这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c01-end-cg',
  },
  {
    id: 'c01-end-cg',
    cg: 'qh-ch01-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n旧街日光里，一个戴口罩的女人把棒球帽檐压得很低。卫衣太大，却仍压不住肩线。',
    next: 'ch02',
  },
]
