import type { DialogueNode } from '../../../engine/types'

/** 第30章 · 来公寓 */
export const chapter30: DialogueNode[] = [
  {
    id: 'ch30',
    chapter: 30,
    chapterTitle: '来公寓',
    bg: 'qinghe-room',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第30章】来公寓\n我推开她的门。环灯还亮，像不肯卸妆的夜。',
    next: 'c30-01',
  },
  {
    id: 'c30-01',
    sprite: 'qinghe',
    text: '我推开她的门。环灯还亮，像不肯卸妆的夜。',
    next: 'c30-02',
  },
  {
    id: 'c30-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '我不怕被看，怕只被订阅。',
    next: 'c30-03',
  },
  {
    id: 'c30-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c30-choice',
  },
  {
    id: 'c30-choice',
    choices: [
      {
            'text': '「来公寓——我听见了。」——认真回应',
            'next': 'c30-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c30-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c30-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c30-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c30-mid',
  },
  {
    id: 'c30-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c30-mid',
  },
  {
    id: 'c30-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c30-mid',
  },
  {
    id: 'c30-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '来公寓。夜还很长，壳还没合拢。',
    next: 'c30-end',
  },
  {
    id: 'c30-end',
    mood: 'warm',
    sprite: null,
    text: '来公寓这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c30-end-cg',
  },
  {
    id: 'c30-end-cg',
    cg: 'qh-ch30-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n我推开她的门。环灯还亮，像不肯卸妆的夜。',
    next: 'ch31',
  },
]
