import type { DialogueNode } from '../../../engine/types'

/** 第8章 · 环灯一夜 */
export const chapter08: DialogueNode[] = [
  {
    id: 'ch08',
    chapter: 8,
    chapterTitle: '环灯一夜',
    bg: 'qinghe-room',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第8章】环灯一夜\n环灯只留一档。丝质吊带的肩带滑了一寸，她没有立刻拉回去。',
    next: 'c08-01',
  },
  {
    id: 'c08-01',
    sprite: 'qinghe',
    text: '环灯只留一档。丝质吊带的肩带滑了一寸，她没有立刻拉回去。\n海风把帽檐掀起一瞬，又被她按回去——像把「顾清禾」三个字按回线下。',
    next: 'c08-02',
  },
  {
    id: 'c08-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '潮水会退。你呢。',
    next: 'c08-03',
  },
  {
    id: 'c08-03',
    speaker: '沈屿',
    text: '我听着。不录音，不截图。',
    next: 'c08-04',
  },
  {
    id: 'c08-04',
    sprite: 'qinghe',
    expression: 'avert',
    text: '环灯的白光在她颧骨上切出一条细线。她没有职业笑，只有呼吸。',
    next: 'c08-05',
  },
  {
    id: 'c08-05',
    sprite: 'qinghe',
    expression: 'default',
    speaker: '顾清禾',
    text: '我可以卖被看的部分。剩下的，不标价。',
    next: 'c08-choice',
  },
  {
    id: 'c08-choice',
    choices: [
      {
            'text': '「环灯一夜——我听见了。」——认真回应',
            'next': 'c08-r0',
            'affection': 10
      },
      {
            'text': '点头，把距离留给她',
            'next': 'c08-r1',
            'affection': 5
      },
      {
            'text': '「今天先到这儿。」——尊重节奏',
            'next': 'c08-r2',
            'affection': 5
      }
],
  },
  {
    id: 'c08-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c08-mid',
  },
  {
    id: 'c08-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c08-mid',
  },
  {
    id: 'c08-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c08-mid',
  },
  {
    id: 'c08-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '这一章的潮位缓缓退开。环灯一夜四个字像留在沙滩上的壳——空的，却还能听见风。',
    next: 'c08-gate',
  },
  {
    id: 'c08-gate',
    affectionBranch: { threshold: 15, whenMet: 'c08-cg', whenNot: 'c08-aftercg' },
  },
  {
    id: 'c08-cg',
    bg: 'qinghe-room',
    mood: 'intimate',
    sprite: null,
    cg: 'ringlight',
    text: '【CG · 环灯一夜】\n冷白环灯下，丝质肩带与未说完的价目。她允许你坐进镜头外的椅子——不收费的那种。',
    unlockCg: 'ringlight',
    next: 'c08-aftercg',
  },
  {
    id: 'c08-aftercg',
    sprite: 'qinghe',
    expression: 'soft',
    cg: null,
    text: '灯还在。有些画面已经发生，有些还差一个潮位。',
    next: 'c08-end',
  },
  {
    id: 'c08-end',
    mood: 'warm',
    sprite: null,
    text: '环灯一夜这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c08-end-cg',
  },
  {
    id: 'c08-end-cg',
    cg: 'qh-ch08-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n环灯只留一档。丝质吊带的肩带滑了一寸，她没有立刻拉回去。',
    next: 'ch09',
  },
]
