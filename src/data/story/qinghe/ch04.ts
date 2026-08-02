import type { DialogueNode } from '../../../engine/types'

/** 第4章 · 价目表 */
export const chapter04: DialogueNode[] = [
  {
    id: 'ch04',
    chapter: 4,
    chapterTitle: '价目表',
    bg: 'qinghe-room',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第4章】价目表\n她把小黑板翻过来：基础写真、定制、专属——数字写得比潮汐表还整齐。',
    next: 'c04-01',
  },
  {
    id: 'c04-01',
    sprite: 'qinghe',
    text: '她把小黑板翻过来：基础写真、定制、专属——数字写得比潮汐表还整齐。\n海风把帽檐掀起一瞬，又被她按回去——像把「顾清禾」三个字按回线下。',
    next: 'c04-02',
  },
  {
    id: 'c04-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '壳是我选的，不是我欠的。',
    next: 'c04-03',
  },
  {
    id: 'c04-03',
    speaker: '沈屿',
    text: '我听着。不录音，不截图。',
    next: 'c04-04',
  },
  {
    id: 'c04-04',
    sprite: 'qinghe',
    expression: 'avert',
    text: '她沉默了两秒。两秒对福利姬来说，已经是事故——事故里却有人。',
    next: 'c04-05',
  },
  {
    id: 'c04-05',
    sprite: 'qinghe',
    expression: 'default',
    speaker: '顾清禾',
    text: '价目表写清楚，是为了少费口舌。你要是来结账，门在那边。',
    next: 'c04-choice',
  },
  {
    id: 'c04-choice',
    choices: [
      {
            'text': '「价目表——我听见了。」——认真回应',
            'next': 'c04-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c04-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c04-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c04-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c04-mid',
  },
  {
    id: 'c04-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c04-mid',
  },
  {
    id: 'c04-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c04-mid',
  },
  {
    id: 'c04-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '这一章的潮位缓缓退开。价目表四个字像留在沙滩上的壳——空的，却还能听见风。',
    next: 'c04-end',
  },
  {
    id: 'c04-end',
    mood: 'warm',
    sprite: null,
    text: '价目表这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c04-end-cg',
  },
  {
    id: 'c04-end-cg',
    cg: 'qh-ch04-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n她把小黑板翻过来：基础写真、定制、专属——数字写得比潮汐表还整齐。',
    next: 'ch05',
  },
]
