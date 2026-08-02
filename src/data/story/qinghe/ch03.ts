import type { DialogueNode } from '../../../engine/types'

/** 第3章 · 环灯漏光 */
export const chapter03: DialogueNode[] = [
  {
    id: 'ch03',
    chapter: 3,
    chapterTitle: '环灯漏光',
    bg: 'qinghe-room',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第3章】环灯漏光\n公寓门缝漏出一圈冷白。环灯还没关，像把夜晚焊在墙上。',
    next: 'c03-01',
  },
  {
    id: 'c03-01',
    sprite: 'qinghe',
    text: '公寓门缝漏出一圈冷白。环灯还没关，像把夜晚焊在墙上。\n海风把帽檐掀起一瞬，又被她按回去——像把「顾清禾」三个字按回线下。',
    next: 'c03-02',
  },
  {
    id: 'c03-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '你可以走，但别付钱走人。',
    next: 'c03-03',
  },
  {
    id: 'c03-03',
    speaker: '沈屿',
    text: '我听着。不录音，不截图。',
    next: 'c03-04',
  },
  {
    id: 'c03-04',
    sprite: 'qinghe',
    expression: 'avert',
    text: '她沉默了两秒。两秒对福利姬来说，已经是事故——事故里却有人。',
    next: 'c03-05',
  },
  {
    id: 'c03-05',
    sprite: 'qinghe',
    expression: 'default',
    speaker: '顾清禾',
    text: '我可以卖被看的部分。剩下的，不标价。',
    next: 'c03-choice',
  },
  {
    id: 'c03-choice',
    choices: [
      {
            'text': '「环灯漏光——我听见了。」——认真回应',
            'next': 'c03-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c03-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c03-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c03-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c03-mid',
  },
  {
    id: 'c03-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c03-mid',
  },
  {
    id: 'c03-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c03-mid',
  },
  {
    id: 'c03-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '这一章的潮位缓缓退开。环灯漏光四个字像留在沙滩上的壳——空的，却还能听见风。',
    next: 'c03-end',
  },
  {
    id: 'c03-end',
    mood: 'warm',
    sprite: null,
    text: '环灯漏光这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c03-end-cg',
  },
  {
    id: 'c03-end-cg',
    cg: 'qh-ch03-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n公寓门缝漏出一圈冷白。环灯还没关，像把夜晚焊在墙上。',
    next: 'ch04',
  },
]
