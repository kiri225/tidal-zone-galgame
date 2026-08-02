import type { DialogueNode } from '../../../engine/types'

/**
 * 第35章 · 雨困值班室
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter35: DialogueNode[] = [
  {
    id: 'ch35',
    chapter: 35,
    chapterTitle: '雨困值班室',
    bg: 'hotel-duty',
    mood: 'intimate',
    sprite: 'qinglan',
    expression: 'blush',
    cg: null,
    text: '【第35章】雨困值班室\n值班室的门反锁。风还在，世界很远。',
    next: 'c35-trustgate',
  },
  {
    id: 'c35-trustgate',
    branch: { flag: 'trust', whenTrue: 'c35-01', whenFalse: 'c35-notrust' },
  },
  {
    id: 'c35-notrust',
    sprite: 'qinglan',
    expression: 'tired',
    speaker: '苏晴岚',
    text: '今晚到这儿。\n信任没到的岸，我不靠——清醒的。',
    next: 'c35-notrust2',
  },
  {
    id: 'c35-notrust2',
    text: '她只是把毯子分我一半，背对着我。呼吸很长，像一道未开启的门。',
    next: 'c35-end-cg',
  },
  {
    id: 'c35-01',
    text: '名牌在我口袋里发烫。她看着我，眼睛里没有职业，只有一个人。',
    next: 'c35-02',
  },
  {
    id: 'c35-02',
    sprite: 'qinglan',
    expression: 'blush',
    speaker: '苏晴岚',
    text: '接下来不是排班，也不是消遣。\n你确定吗？确定了，我就不装经理了。',
    next: 'c35-03',
  },
  {
    id: 'c35-03',
    speaker: '沈屿',
    text: '确定。我想靠近的是你，不是前台。',
    next: 'c35-04',
  },
  {
    id: 'c35-04',
    text: '她笑了一下，很浅，随即吻上来——清醒、同意、没有退路的那种。',
    next: 'c35-branch',
    setFlag: 'intimate_night',
  },
  {
    id: 'c35-branch',
    affectionBranch: { threshold: 50, whenMet: 'c35-cg', whenNot: 'c35-lite' },
  },
  {
    id: 'c35-cg',
    bg: 'hotel-duty',
    mood: 'intimate',
    sprite: null,
    cg: 'dutynight',
    text: '【CG · 雨困值班室】\n应急灯把她的轮廓镶成冷白。风声隔绝世界，只剩呼吸与心跳。她看着我，像看着一场终于被允许靠岸的潮汐——不再服务，不再逃。',
    next: 'c35-end-cg',
    unlockCg: 'dutynight',
  },
  {
    id: 'c35-lite',
    sprite: 'qinglan',
    expression: 'blush',
    text: '吻很深，衣衫乱了，却在将要越过最后一线时停住。额头抵着额头，两人都在发抖。',
    next: 'c35-lite2',
  },
  {
    id: 'c35-lite2',
    expression: 'soft',
    speaker: '苏晴岚',
    text: '今晚这样就好。\n等我更相信你明天还在——剩下的，我不会再躲。',
    next: 'c35-end-cg',
  },
  {
    id: 'c35-end-cg',
    cg: 'ql-ch35-end',
    sprite: null,
    mood: 'intimate',
    text: '【CG · 章末】\n雨困值班室里终于靠岸。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch36',
  },
]
