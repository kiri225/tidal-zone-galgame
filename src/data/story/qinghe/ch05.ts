import type { DialogueNode } from '../../../engine/types'

/** 第5章 · 拒打赏 */
export const chapter05: DialogueNode[] = [
  {
    id: 'ch05',
    chapter: 5,
    chapterTitle: '拒打赏',
    bg: 'qinghe-room',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'default',
    cg: null,
    text: '【第5章】拒打赏\n打赏弹窗亮起。她盯着我，像在等一句「我不是来买的」。',
    next: 'c05-01',
  },
  {
    id: 'c05-01',
    sprite: 'qinghe',
    text: '打赏弹窗亮起。她盯着我，像在等一句「我不是来买的」。\n海风把帽檐掀起一瞬，又被她按回去——像把「顾清禾」三个字按回线下。',
    next: 'c05-02',
  },
  {
    id: 'c05-02',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '环灯很诚实，人心不一定。',
    next: 'c05-03',
  },
  {
    id: 'c05-03',
    speaker: '沈屿',
    text: '我听着。不录音，不截图。',
    next: 'c05-04',
  },
  {
    id: 'c05-04',
    sprite: 'qinghe',
    expression: 'avert',
    text: '她沉默了两秒。两秒对福利姬来说，已经是事故——事故里却有人。',
    next: 'c05-05',
  },
  {
    id: 'c05-05',
    sprite: 'qinghe',
    expression: 'default',
    speaker: '顾清禾',
    text: '打赏可以让我笑。但你要是想走近，就先把支付界面关掉。',
    next: 'c05-choice',
  },
  {
    id: 'c05-choice',
    choices: [
      {
            'text': '关掉支付界面——「我不打赏」',
            'next': 'c05-r0',
            'affection': 15,
            'setFlag': 'not_customer'
      },
      {
            'text': '把手机扣在桌上',
            'next': 'c05-r1',
            'affection': 10,
            'setFlag': 'not_customer'
      },
      {
            'text': '沉默片刻',
            'next': 'c05-r2',
            'affection': 0
      }
],
  },
  {
    id: 'c05-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……好。那你别用「订阅」的口气跟我说话。',
    next: 'c05-mid',
  },
  {
    id: 'c05-r1',
    sprite: 'qinghe',
    expression: 'default',
    text: '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
    next: 'c05-mid',
  },
  {
    id: 'c05-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '行。潮水也有退的时候。',
    next: 'c05-mid',
  },
  {
    id: 'c05-mid',
    sprite: 'qinghe',
    expression: 'tired',
    text: '这一章的潮位缓缓退开。拒打赏四个字像留在沙滩上的壳——空的，却还能听见风。',
    next: 'c05-gate',
  },
  {
    id: 'c05-gate',
    affectionBranch: { threshold: 25, whenMet: 'c05-cg', whenNot: 'c05-aftercg' },
  },
  {
    id: 'c05-cg',
    bg: 'qinghe-room',
    mood: 'intimate',
    sprite: null,
    cg: 'tip_refuse',
    text: '【CG · 拒打赏】\n支付界面熄灭。她看着空荡的弹幕位，第一次笑得不像报价。',
    unlockCg: 'tip_refuse',
    next: 'c05-aftercg',
  },
  {
    id: 'c05-aftercg',
    sprite: 'qinghe',
    expression: 'soft',
    cg: null,
    text: '灯还在。有些画面已经发生，有些还差一个潮位。',
    next: 'c05-end',
  },
  {
    id: 'c05-end',
    mood: 'warm',
    sprite: null,
    text: '拒打赏这一幕落下。潮声替未说完的句子收了尾。',
    next: 'c05-end-cg',
  },
  {
    id: 'c05-end-cg',
    cg: 'qh-ch05-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n打赏弹窗亮起。她盯着我，像在等一句「我不是来买的」。',
    next: 'ch06',
  },
]
