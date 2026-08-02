import type { DialogueNode } from '../../../engine/types'

/** 第16章 · 回到公寓 */
export const chapter16: DialogueNode[] = [
  {
    id: 'ch16',
    chapter: 16,
    chapterTitle: '回到公寓',
    bg: 'qinghe-room',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第16章】回到公寓\n两天后门铃响。她站在门外，卫衣换成开衫，像回来对班。',
    next: 'c16-01',
  },
  {
    id: 'c16-01',
    sprite: 'qinghe',
    text: '两天后门铃响。她站在门外，卫衣换成开衫，像回来对班。',
    next: 'c16-02',
  },
  {
    id: 'c16-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '潮水会退。你呢。',
    next: 'c16-03',
  },
  {
    id: 'c16-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c16-choice',
  },
  {
    id: 'c16-choice',
    choices: [
      {
            'text': '「回到公寓——我听见了。」——认真回应',
            'next': 'c16-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c16-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c16-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c16-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c16-mid',
  },
  {
    id: 'c16-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c16-mid',
  },
  {
    id: 'c16-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c16-mid',
  },
  {
    id: 'c16-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '回到公寓。夜还很长，壳还没合拢。',
    next: 'c16-end',
  },
  {
    id: 'c16-end',
    mood: 'warm',
    sprite: null,
    text: '回到公寓这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c16-end-cg',
  },
  {
    id: 'c16-end-cg',
    cg: 'qh-ch16-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n两天后门铃响。她站在门外，卫衣换成开衫，像回来对班。',
    next: 'ch17',
  },
]
