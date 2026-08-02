import type { DialogueNode } from '../../../engine/types'

/** 第9章 · 汽水与耳机 */
export const chapter09: DialogueNode[] = [
  {
    id: 'ch09',
    chapter: 9,
    chapterTitle: '汽水与耳机',
    bg: 'qinghe-room',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第9章】汽水与耳机\n她递来一罐常温汽水，有线耳机缠在手腕上，像未剪断的缆绳。',
    next: 'c09-01',
  },
  {
    id: 'c09-01',
    sprite: 'qinghe',
    text: '她递来一罐常温汽水，有线耳机缠在手腕上，像未剪断的缆绳。\n海风把帽檐掀起一瞬，又被她按回去——像把「顾清禾」三个字按回线下。',
    next: 'c09-02',
  },
  {
    id: 'c09-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '别用价目表看我。',
    next: 'c09-03',
  },
  {
    id: 'c09-03',
    speaker: '沈屿',
    text: '我听着。不录音，不截图。',
    next: 'c09-04',
  },
  {
    id: 'c09-04',
    sprite: 'qinghe',
    expression: 'avert',
    text: '环灯的白光在她颧骨上切出一条细线。她没有职业笑，只有呼吸。',
    next: 'c09-05',
  },
  {
    id: 'c09-05',
    sprite: 'qinghe',
    expression: 'default',
    speaker: '顾清禾',
    text: '我可以卖被看的部分。剩下的，不标价。',
    next: 'c09-choice',
  },
  {
    id: 'c09-choice',
    choices: [
      {
            'text': '「汽水与耳机——我听见了。」——认真回应',
            'next': 'c09-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c09-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c09-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c09-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c09-mid',
  },
  {
    id: 'c09-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c09-mid',
  },
  {
    id: 'c09-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c09-mid',
  },
  {
    id: 'c09-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '这一章的潮位缓缓退开。汽水与耳机四个字像留在沙滩上的壳——空的，却还能听见风。',
    next: 'c09-end',
  },
  {
    id: 'c09-end',
    mood: 'warm',
    sprite: null,
    text: '汽水与耳机这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c09-end-cg',
  },
  {
    id: 'c09-end-cg',
    cg: 'qh-ch09-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n她递来一罐常温汽水，有线耳机缠在手腕上，像未剪断的缆绳。',
    next: 'ch10',
  },
]
