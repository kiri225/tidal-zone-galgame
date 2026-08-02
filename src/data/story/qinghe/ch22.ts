import type { DialogueNode } from '../../../engine/types'

/** 第22章 · 清醒的滤镜 */
export const chapter22: DialogueNode[] = [
  {
    id: 'ch22',
    chapter: 22,
    chapterTitle: '清醒的滤镜',
    bg: 'qinghe-room',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第22章】清醒的滤镜\n晨光里她打开美颜又关掉：「清醒的滤镜，比滤镜贵。」',
    next: 'c22-01',
  },
  {
    id: 'c22-01',
    sprite: 'qinghe',
    text: '晨光里她打开美颜又关掉：「清醒的滤镜，比滤镜贵。」',
    next: 'c22-02',
  },
  {
    id: 'c22-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '我不怕被看，怕只被订阅。',
    next: 'c22-03',
  },
  {
    id: 'c22-03',
    speaker: '沈屿',
    text: '我在。',
    next: 'c22-choice',
  },
  {
    id: 'c22-choice',
    choices: [
      {
            'text': '「清醒的滤镜——我听见了。」——认真回应',
            'next': 'c22-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c22-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c22-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c22-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c22-mid',
  },
  {
    id: 'c22-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c22-mid',
  },
  {
    id: 'c22-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c22-mid',
  },
  {
    id: 'c22-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '清醒的滤镜。夜还很长，壳还没合拢。',
    next: 'c22-end',
  },
  {
    id: 'c22-end',
    mood: 'warm',
    sprite: null,
    text: '清醒的滤镜这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c22-end-cg',
  },
  {
    id: 'c22-end-cg',
    cg: 'qh-ch22-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n晨光里她打开美颜又关掉：「清醒的滤镜，比滤镜贵。」',
    next: 'ch23',
  },
]
