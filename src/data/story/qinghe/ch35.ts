import type { DialogueNode } from '../../../engine/types'

/** 第35章 · 关灯一夜 */
export const chapter35: DialogueNode[] = [
  {
    id: 'ch35',
    chapter: 35,
    chapterTitle: '关灯一夜',
    bg: 'qinghe-room-off',
    mood: 'intimate',
    sprite: 'qinghe',
    expression: 'blush',
    cg: null,
    text: '【第35章】关灯一夜\n门反锁。风还在，世界很远。环灯冷着，只剩潮声。',
    next: 'c35-gate',
  },
  {
    id: 'c35-gate',
    branch: { flag: 'not_customer', whenTrue: 'c35-off', whenFalse: 'c35-nocust' },
  },
  {
    id: 'c35-nocust',
    sprite: 'qinghe',
    expression: 'tired',
    speaker: '顾清禾',
    text: '今晚到这儿。\n还把我当可结账的人，我不会靠岸——清醒的。',
    next: 'c35-nocust2',
  },
  {
    id: 'c35-nocust2',
    text: '她只是把毯子分我一半，背对着我。呼吸很长，像一道未开启的门。',
    next: 'c35-end-cg',
  },
  {
    id: 'c35-off',
    branch: { flag: 'offair', whenTrue: 'c35-01', whenFalse: 'c35-nocust' },
  },
  {
    id: 'c35-01',
    text: '黑暗里她的眼睛很亮。没有滤镜，没有价目，只有一个人。',
    next: 'c35-02',
  },
  {
    id: 'c35-02',
    sprite: 'qinghe',
    expression: 'blush',
    speaker: '顾清禾',
    text: '接下来不是直播，也不是消遣。\n你确定吗？确定了，我就不装「潮间带的壳」。',
    next: 'c35-03',
  },
  {
    id: 'c35-03',
    speaker: '沈屿',
    text: '确定。我想靠近的是你，不是订阅。',
    next: 'c35-04',
  },
  {
    id: 'c35-04',
    text: '她笑了一下，很浅，随即吻上来——清醒、同意、没有退路的那种。',
    next: 'c35-abranch',
    setFlag: 'intimate_night',
  },
  {
    id: 'c35-abranch',
    affectionBranch: { threshold: 50, whenMet: 'c35-cg', whenNot: 'c35-lite' },
  },
  {
    id: 'c35-cg',
    bg: 'qinghe-room-off',
    mood: 'intimate',
    sprite: null,
    cg: 'darkroom',
    text: '【CG · 关灯一夜】\n暴雨隔绝世界。丝带落地的声音比打赏提示更轻。她看着我，像看着一场终于被允许靠岸的潮汐——不再出售，不再逃。',
    unlockCg: 'darkroom',
    next: 'c35-end-cg',
  },
  {
    id: 'c35-lite',
    sprite: 'qinghe',
    expression: 'blush',
    text: '吻很深，衣衫乱了，却在将要越过最后一线时停住。额头抵着额头，两人都在发抖。',
    next: 'c35-end-cg',
  },
  {
    id: 'c35-end-cg',
    cg: 'qh-ch35-end',
    sprite: null,
    mood: 'intimate',
    text: '【CG · 章末】\n关灯的岸上，只留下呼吸与雨。',
    next: 'ch36',
  },
]
