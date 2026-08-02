import type { DialogueNode } from '../../../engine/types'

/** 第14章 · 关灯预告 */
export const chapter14: DialogueNode[] = [
  {
    id: 'ch14',
    chapter: 14,
    chapterTitle: '关灯预告',
    bg: 'qinghe-room-off',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第14章】关灯预告\n她伸手关掉预览灯：「有一天我会关真的。」',
    next: 'c14-01',
  },
  {
    id: 'c14-01',
    sprite: 'qinghe',
    text: '她伸手关掉预览灯：「有一天我会关真的。」\n海风把帽檐掀起一瞬，又被她按回去——像把「顾清禾」三个字按回线下。',
    next: 'c14-02',
  },
  {
    id: 'c14-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '我不怕被看，怕只被订阅。',
    next: 'c14-03',
  },
  {
    id: 'c14-03',
    speaker: '沈屿',
    text: '我听着。不录音，不截图。',
    next: 'c14-04',
  },
  {
    id: 'c14-04',
    sprite: 'qinghe',
    expression: 'avert',
    text: '环灯的白光在她颧骨上切出一条细线。她没有职业笑，只有呼吸。',
    next: 'c14-05',
  },
  {
    id: 'c14-05',
    sprite: 'qinghe',
    expression: 'default',
    speaker: '顾清禾',
    text: '我可以卖被看的部分。剩下的，不标价。',
    next: 'c14-choice',
  },
  {
    id: 'c14-choice',
    choices: [
      {
            'text': '「关灯预告——我听见了。」——认真回应',
            'next': 'c14-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c14-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c14-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c14-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c14-mid',
  },
  {
    id: 'c14-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c14-mid',
  },
  {
    id: 'c14-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c14-mid',
  },
  {
    id: 'c14-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '这一章的潮位缓缓退开。关灯预告四个字像留在沙滩上的壳——空的，却还能听见风。',
    next: 'c14-end',
  },
  {
    id: 'c14-end',
    mood: 'warm',
    sprite: null,
    text: '关灯预告这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c14-end-cg',
  },
  {
    id: 'c14-end-cg',
    cg: 'qh-ch14-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n她伸手关掉预览灯：「有一天我会关真的。」',
    next: 'ch15',
  },
]
