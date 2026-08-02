import type { DialogueNode } from '../../../engine/types'

/** 第11章 · 直播角的空位 */
export const chapter11: DialogueNode[] = [
  {
    id: 'ch11',
    chapter: 11,
    chapterTitle: '直播角的空位',
    bg: 'qinghe-room',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第11章】直播角的空位\n三脚架旁空出一把椅子。她说：今晚不卖，只坐。',
    next: 'c11-01',
  },
  {
    id: 'c11-01',
    sprite: 'qinghe',
    text: '三脚架旁空出一把椅子。她说：今晚不卖，只坐。\n海风把帽檐掀起一瞬，又被她按回去——像把「顾清禾」三个字按回线下。',
    next: 'c11-02',
  },
  {
    id: 'c11-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '你可以走，但别付钱走人。',
    next: 'c11-03',
  },
  {
    id: 'c11-03',
    speaker: '沈屿',
    text: '我听着。不录音，不截图。',
    next: 'c11-04',
  },
  {
    id: 'c11-04',
    sprite: 'qinghe',
    expression: 'avert',
    text: '环灯的白光在她颧骨上切出一条细线。她没有职业笑，只有呼吸。',
    next: 'c11-05',
  },
  {
    id: 'c11-05',
    sprite: 'qinghe',
    expression: 'default',
    speaker: '顾清禾',
    text: '我可以卖被看的部分。剩下的，不标价。',
    next: 'c11-choice',
  },
  {
    id: 'c11-choice',
    choices: [
      {
            'text': '「直播角的空位——我听见了。」——认真回应',
            'next': 'c11-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c11-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c11-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c11-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c11-mid',
  },
  {
    id: 'c11-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c11-mid',
  },
  {
    id: 'c11-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c11-mid',
  },
  {
    id: 'c11-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '这一章的潮位缓缓退开。直播角的空位四个字像留在沙滩上的壳——空的，却还能听见风。',
    next: 'c11-end',
  },
  {
    id: 'c11-end',
    mood: 'warm',
    sprite: null,
    text: '直播角的空位这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c11-end-cg',
  },
  {
    id: 'c11-end-cg',
    cg: 'qh-ch11-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n三脚架旁空出一把椅子。她说：今晚不卖，只坐。',
    next: 'ch12',
  },
]
