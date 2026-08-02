import type { DialogueNode } from '../../../engine/types'

/** 第10章 · 拾潮的旧物 */
export const chapter10: DialogueNode[] = [
  {
    id: 'ch10',
    chapter: 10,
    chapterTitle: '拾潮的旧物',
    bg: 'shop-interior',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第10章】拾潮的旧物\n拾潮后仓的樟脑味里，她蹲着帮我装箱，口罩仍挂在下巴。',
    next: 'c10-01',
  },
  {
    id: 'c10-01',
    sprite: 'qinghe',
    text: '拾潮后仓的樟脑味里，她蹲着帮我装箱，口罩仍挂在下巴。\n海风把帽檐掀起一瞬，又被她按回去——像把「顾清禾」三个字按回线下。',
    next: 'c10-02',
  },
  {
    id: 'c10-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '关了灯，我才是顾清禾。',
    next: 'c10-03',
  },
  {
    id: 'c10-03',
    speaker: '沈屿',
    text: '我听着。不录音，不截图。',
    next: 'c10-04',
  },
  {
    id: 'c10-04',
    sprite: 'qinghe',
    expression: 'avert',
    text: '环灯的白光在她颧骨上切出一条细线。她没有职业笑，只有呼吸。',
    next: 'c10-05',
  },
  {
    id: 'c10-05',
    sprite: 'qinghe',
    expression: 'default',
    speaker: '顾清禾',
    text: '我可以卖被看的部分。剩下的，不标价。',
    next: 'c10-choice',
  },
  {
    id: 'c10-choice',
    choices: [
      {
            'text': '「拾潮的旧物——我听见了。」——认真回应',
            'next': 'c10-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c10-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c10-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c10-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c10-mid',
  },
  {
    id: 'c10-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c10-mid',
  },
  {
    id: 'c10-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c10-mid',
  },
  {
    id: 'c10-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '这一章的潮位缓缓退开。拾潮的旧物四个字像留在沙滩上的壳——空的，却还能听见风。',
    next: 'c10-end',
  },
  {
    id: 'c10-end',
    mood: 'warm',
    sprite: null,
    text: '拾潮的旧物这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c10-end-cg',
  },
  {
    id: 'c10-end-cg',
    cg: 'qh-ch10-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n拾潮后仓的樟脑味里，她蹲着帮我装箱，口罩仍挂在下巴。',
    next: 'ch11',
  },
]
