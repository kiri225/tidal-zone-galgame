import type { DialogueNode } from '../../../engine/types'

/** 第6章 · 关播的脸 */
export const chapter06: DialogueNode[] = [
  {
    id: 'ch06',
    chapter: 6,
    chapterTitle: '关播的脸',
    bg: 'qinghe-room-off',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第6章】关播的脸\n「下播了。」耳机摘下的瞬间，职业媚笑空了半拍。',
    next: 'c06-01',
  },
  {
    id: 'c06-01',
    sprite: 'qinghe',
    text: '「下播了。」耳机摘下的瞬间，职业媚笑空了半拍。\n海风把帽檐掀起一瞬，又被她按回去——像把「顾清禾」三个字按回线下。',
    next: 'c06-02',
  },
  {
    id: 'c06-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '我不怕被看，怕只被订阅。',
    next: 'c06-03',
  },
  {
    id: 'c06-03',
    speaker: '沈屿',
    text: '我听着。不录音，不截图。',
    next: 'c06-04',
  },
  {
    id: 'c06-04',
    sprite: 'qinghe',
    expression: 'avert',
    text: '环灯的白光在她颧骨上切出一条细线。她没有职业笑，只有呼吸。',
    next: 'c06-05',
  },
  {
    id: 'c06-05',
    sprite: 'qinghe',
    expression: 'default',
    speaker: '顾清禾',
    text: '我可以卖被看的部分。剩下的，不标价。',
    next: 'c06-choice',
  },
  {
    id: 'c06-choice',
    choices: [
      {
            'text': '「关播的脸——我听见了。」——认真回应',
            'next': 'c06-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c06-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c06-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c06-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c06-mid',
  },
  {
    id: 'c06-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c06-mid',
  },
  {
    id: 'c06-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c06-mid',
  },
  {
    id: 'c06-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '这一章的潮位缓缓退开。关播的脸四个字像留在沙滩上的壳——空的，却还能听见风。',
    next: 'c06-end',
  },
  {
    id: 'c06-end',
    mood: 'warm',
    sprite: null,
    text: '关播的脸这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c06-end-cg',
  },
  {
    id: 'c06-end-cg',
    cg: 'qh-ch06-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n「下播了。」耳机摘下的瞬间，职业媚笑空了半拍。',
    next: 'ch07',
  },
]
