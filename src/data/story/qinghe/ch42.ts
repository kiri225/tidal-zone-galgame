import type { DialogueNode } from '../../../engine/types'

/** 第42章 · 买家皮鞋 */
export const chapter42: DialogueNode[] = [
  {
    id: 'ch42',
    chapter: 42,
    chapterTitle: '买家皮鞋',
    bg: 'shop-interior',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第42章】买家皮鞋\n买家皮鞋踩进拾潮。她站在门外等我，口罩戴好。',
    next: 'c42-01',
  },
  {
    id: 'c42-01',
    sprite: 'qinghe',
    text: '买家皮鞋踩进拾潮。她站在门外等我，口罩戴好。',
    next: 'c42-02',
  },
  {
    id: 'c42-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '关了灯，我才是顾清禾。',
    next: 'c42-03',
  },
  {
    id: 'c42-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c42-choice',
  },
  {
    id: 'c42-choice',
    choices: [
      {
            'text': '「买家皮鞋——我听见了。」——认真回应',
            'next': 'c42-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c42-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c42-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c42-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c42-mid',
  },
  {
    id: 'c42-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c42-mid',
  },
  {
    id: 'c42-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c42-mid',
  },
  {
    id: 'c42-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '买家皮鞋。夜还很长，壳还没合拢。',
    next: 'c42-end',
  },
  {
    id: 'c42-end',
    mood: 'warm',
    sprite: null,
    text: '买家皮鞋这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c42-end-cg',
  },
  {
    id: 'c42-end-cg',
    cg: 'qh-ch42-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n买家皮鞋踩进拾潮。她站在门外等我，口罩戴好。',
    next: 'ch43',
  },
]
