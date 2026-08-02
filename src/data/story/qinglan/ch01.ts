import type { DialogueNode } from '../../../engine/types'

/**
 * 第1章 · 夜班名牌
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter01: DialogueNode[] = [
  {
    id: 'ch01',
    chapter: 1,
    chapterTitle: '夜班名牌',
    bg: 'hotel-lobby',
    mood: 'warm',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第1章】夜班名牌\n潮屿酒店的自动门吐出一阵凉气。前台灯亮得过分礼貌，像一张从不失手的名片。',
    next: 'c01-01',
  },
  {
    id: 'c01-01',
    sprite: 'qinglan',
    text: '名牌上写着「苏晴岚 · 夜班经理」。字很小，笑却很大——标准到让人怀疑那笑是否属于她本人。',
    next: 'c01-02',
  },
  {
    id: 'c01-02',
    sprite: 'qinglan',
    expression: 'default',
    speaker: '苏晴岚',
    text: '欢迎光临潮屿酒店。\n您是……临时入住吗？看行李，不像度假。',
    next: 'c01-03',
  },
  {
    id: 'c01-03',
    speaker: '沈屿',
    text: '卖铺。镇上的旧货店——「拾潮」。店里没床，先住两晚。',
    next: 'c01-04',
  },
  {
    id: 'c01-04',
    sprite: 'qinglan',
    text: '她敲键盘的速度很快，指甲修剪得整齐，像一切失控都被预先裁掉。',
    next: 'c01-05',
  },
  {
    id: 'c01-05',
    sprite: 'qinglan',
    expression: 'smile',
    speaker: '苏晴岚',
    text: '明白了。本地人卖铺，我们有员工价通道。\n请出示证件。',
    next: 'c01-06',
  },
  {
    id: 'c01-06',
    sprite: 'qinglan',
    text: '房卡递过来时，她的指尖隔着塑料卡轻轻碰了我一下——职业距离刚好一厘米，多一分就像越界。',
    next: 'c01-choice',
  },
  {
    id: 'c01-choice',
    choices: [
      {
        text: '「谢谢。你值班到几点？」——把她当人问',
        next: 'c01-r0',
        affection: 10,
        setFlag: 'ask_shift',
      },
      {
        text: '「员工价就员工价。」——只谈交易',
        next: 'c01-r1',
        affection: 0,
      },
      {
        text: '「名牌上的字，念起来很好听。」——试探温度',
        next: 'c01-r2',
        affection: 5,
      },
    ],
  },
  {
    id: 'c01-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '她把房卡推到台沿：「电梯在左侧。有事按零。」职业笑纹丝不动，像潮水永远盖住礁石。',
    next: 'c01-end',
  },
  {
    id: 'c01-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c01-end',
  },
  {
    id: 'c01-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c01-end',
  },
  {
    id: 'c01-end',
    mood: 'warm',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch02',
  },
]
