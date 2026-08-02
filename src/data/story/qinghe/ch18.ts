import type { DialogueNode } from '../../../engine/types'

/** 第18章 · 壳的另一面 */
export const chapter18: DialogueNode[] = [
  {
    id: 'ch18',
    chapter: 18,
    chapterTitle: '壳的另一面',
    bg: 'qinghe-room-off',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第18章】壳的另一面\n关灯后的脸没有滤镜。她允许我多看三秒。',
    next: 'c18-01',
  },
  {
    id: 'c18-01',
    sprite: 'qinghe',
    text: '关灯后的脸没有滤镜。她允许我多看三秒。',
    next: 'c18-02',
  },
  {
    id: 'c18-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '关了灯，我才是顾清禾。',
    next: 'c18-03',
  },
  {
    id: 'c18-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c18-choice',
  },
  {
    id: 'c18-choice',
    choices: [
      {
            'text': '「壳的另一面——我听见了。」——认真回应',
            'next': 'c18-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c18-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c18-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c18-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c18-mid',
  },
  {
    id: 'c18-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c18-mid',
  },
  {
    id: 'c18-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c18-mid',
  },
  {
    id: 'c18-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '壳的另一面。夜还很长，壳还没合拢。',
    next: 'c18-end',
  },
  {
    id: 'c18-end',
    mood: 'warm',
    sprite: null,
    text: '壳的另一面这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c18-end-cg',
  },
  {
    id: 'c18-end-cg',
    cg: 'qh-ch18-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n关灯后的脸没有滤镜。她允许我多看三秒。',
    next: 'ch19',
  },
]
