import type { DialogueNode } from '../../../engine/types'

/**
 * 第19章 · 卖铺拷问
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter19: DialogueNode[] = [
  {
    id: 'ch19',
    chapter: 19,
    chapterTitle: '卖铺拷问',
    bg: 'hotel-lobby',
    mood: 'cold',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第19章】卖铺拷问\n中介的电话在大堂回响。她听得分明：买家加价，催签字。',
    next: 'c19-01',
  },
  {
    id: 'c19-01',
    sprite: 'qinglan',
    expression: 'cold',
    speaker: '苏晴岚',
    text: '你走的时候，会不会连房卡一起扔？\n酒店很擅长处理「未归还房卡」。人比较难。',
    next: 'c19-02',
  },
  {
    id: 'c19-02',
    speaker: '沈屿',
    text: '……你问得很直接。',
    next: 'c19-03',
  },
  {
    id: 'c19-03',
    sprite: 'qinglan',
    expression: 'tense',
    speaker: '苏晴岚',
    text: '夜班没时间绕弯。\n绕弯是给白天谈恋爱的人的。',
    next: 'c19-choice',
  },
  {
    id: 'c19-choice',
    choices: [
      {
        text: '「房卡我会亲手还你。」——认真',
        next: 'c19-r0',
        affection: 15,
        setFlag: 'hesitate_sell',
      },
      {
        text: '「还没决定。」——诚实犹豫',
        next: 'c19-r1',
        affection: 5,
        setFlag: 'hesitate_sell',
      },
      {
        text: '「卖完就走，不拖泥带水。」——刺她',
        next: 'c19-r2',
        affection: -5,
      },
    ],
  },
  {
    id: 'c19-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '电话挂断。前台电脑的光映在她瞳孔里，像两扇随时会落锁的自动门。',
    next: 'c19-end',
  },
  {
    id: 'c19-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c19-end',
  },
  {
    id: 'c19-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c19-end',
  },
  {
    id: 'c19-end',
    mood: 'cold',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch20',
  },
]
