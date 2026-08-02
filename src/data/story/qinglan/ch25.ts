import type { DialogueNode } from '../../../engine/types'

/**
 * 第25章 · 清仓的钥匙
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter25: DialogueNode[] = [
  {
    id: 'ch25',
    chapter: 25,
    chapterTitle: '清仓的钥匙',
    bg: 'shop-interior',
    mood: 'cold',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第25章】清仓的钥匙\n拾潮店内纸箱成山。门铃响——她站在门外，便装，手里两瓶盐汽水。',
    next: 'c25-01',
  },
  {
    id: 'c25-01',
    sprite: 'qinglan',
    expression: 'default',
    speaker: '苏晴岚',
    text: '白班听说你清仓。\n……我休息。进来帮忙不算加班。',
    next: 'c25-02',
  },
  {
    id: 'c25-02',
    sprite: 'qinglan',
    text: '她第一次踏进父亲的店。灰尘在光柱里跳舞，像欢迎一位迟到的见证人。',
    next: 'c25-03',
  },
  {
    id: 'c25-03',
    sprite: 'qinglan',
    expression: 'think',
    speaker: '苏晴岚',
    text: '这收音机——你父亲台风年修过。我记得声音。',
    next: 'c25-choice',
  },
  {
    id: 'c25-choice',
    choices: [
      {
        text: '「一起装箱。」——并肩',
        next: 'c25-r0',
        affection: 15,
        setFlag: 'habit',
      },
      {
        text: '「你休息就好。」——推辞',
        next: 'c25-r1',
        affection: 0,
      },
    ],
  },
  {
    id: 'c25-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '纸箱封口胶带拉出刺响。她额头沾了灰，没有立刻擦——像允许自己脏一点、真一点。',
    next: 'c25-end',
  },
  {
    id: 'c25-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c25-end',
  },
  {
    id: 'c25-end',
    mood: 'cold',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch26',
  },
]
