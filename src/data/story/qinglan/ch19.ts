import type { DialogueNode } from '../../../engine/types'

/**
 * 第19章 · 卖铺拷问
 * 苏晴岚线 · 电话后加压，抉择前增厚
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
    next: 'c19-04',
  },
  {
    id: 'c19-04',
    sprite: 'qinglan',
    text: '电话挂断后，大堂忽然静得过分。中介名片还摊在键盘旁，红绳房卡压在名片角上——像故意让你看见：过客可以退房，短暂停泊也可以改成续住。',
    next: 'c19-05',
  },
  {
    id: 'c19-05',
    sprite: 'qinglan',
    expression: 'cold',
    speaker: '苏晴岚',
    text: '班表上你还写着「临时入住」。\n临时，两个字——你是打算把它划掉，还是划到卖完那天为止？',
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
    text: '「亲手还。」她重复这两个字，像把它们写进班表备注。「……那我等着。等到交班也行。」',
    next: 'c19-end',
  },
  {
    id: 'c19-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '「犹豫比假装果断好看。」她把中介名片翻面压在键盘下，「至少说明你还在想岸。」',
    next: 'c19-end',
  },
  {
    id: 'c19-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '职业笑瞬间合拢，冷得像自动门。「明白了。未归还房卡——我们很擅长处理。」',
    next: 'c19-end',
  },
  {
    id: 'c19-end',
    mood: 'cold',
    text: '电话挂断。前台电脑的光映在她瞳孔里，像两扇随时会落锁的自动门——锁不锁，在你。',
    next: 'c19-end-cg',
  },
  {
    id: 'c19-end-cg',
    cg: 'ql-ch19-end',
    sprite: null,
    mood: 'cold',
    text: '【CG · 章末】\n房卡会不会被一起扔掉。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch20',
  },
]
