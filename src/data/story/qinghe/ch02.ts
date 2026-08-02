import type { DialogueNode } from '../../../engine/types'

/** 第2章 · 潮间带的壳 */
export const chapter02: DialogueNode[] = [
  {
    id: 'ch02',
    chapter: 2,
    chapterTitle: '潮间带的壳',
    bg: 'street-night',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第2章】潮间带的壳\n手机推送弹出「潮间带的壳」——青绿封面，价目清楚，像一份从不失手的合同。',
    next: 'c02-01',
  },
  {
    id: 'c02-01',
    sprite: 'qinghe',
    text: '手机推送弹出「潮间带的壳」——青绿封面，价目清楚，像一份从不失手的合同。\n海风把帽檐掀起一瞬，又被她按回去——像把「顾清禾」三个字按回线下。',
    next: 'c02-02',
  },
  {
    id: 'c02-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '关了灯，我才是顾清禾。',
    next: 'c02-03',
  },
  {
    id: 'c02-03',
    speaker: '沈屿',
    text: '这个账号，是你？',
    next: 'c02-04',
  },
  {
    id: 'c02-04',
    sprite: 'qinghe',
    expression: 'tense',
    text: '她沉默了两秒。两秒对福利姬来说，已经是事故——事故里却有人。',
    next: 'c02-05',
  },
  {
    id: 'c02-05',
    sprite: 'qinghe',
    expression: 'default',
    speaker: '顾清禾',
    text: '我可以卖被看的部分。剩下的，不标价。',
    next: 'c02-choice',
  },
  {
    id: 'c02-choice',
    choices: [
      {
            'text': '「潮间带的壳——我听见了。」——认真回应',
            'next': 'c02-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c02-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c02-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c02-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c02-mid',
  },
  {
    id: 'c02-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c02-mid',
  },
  {
    id: 'c02-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c02-mid',
  },
  {
    id: 'c02-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '这一章的潮位缓缓退开。潮间带的壳四个字像留在沙滩上的壳——空的，却还能听见风。',
    next: 'c02-end',
  },
  {
    id: 'c02-end',
    mood: 'warm',
    sprite: null,
    text: '潮间带的壳这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c02-end-cg',
  },
  {
    id: 'c02-end-cg',
    cg: 'qh-ch02-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n手机推送弹出「潮间带的壳」——青绿封面，价目清楚，像一份从不失手的合同。',
    next: 'ch03',
  },
]
