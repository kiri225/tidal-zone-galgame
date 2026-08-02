import type { DialogueNode } from '../../../engine/types'

/**
 * 第5章 · 后厨烟
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter05: DialogueNode[] = [
  {
    id: 'ch05',
    chapter: 5,
    chapterTitle: '后厨烟',
    bg: 'street-night',
    mood: 'cold',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第5章】后厨烟\n卸货通道的灯坏了一盏。我找晚班经理签字，却在后巷撞见她。',
    next: 'c05-01',
  },
  {
    id: 'c05-01',
    sprite: 'qinglan',
    text: '她靠着水泥墙，衬衫领口松开一颗扣，名牌翻到背面。没有烟，只有夜风。',
    next: 'c05-02',
  },
  {
    id: 'c05-02',
    sprite: 'qinglan',
    expression: 'avert',
    speaker: '苏晴岚',
    text: '……走错了。这里不是给客人看的。',
    next: 'c05-03',
  },
  {
    id: 'c05-03',
    speaker: '沈屿',
    text: '我不是来看风景的。',
    next: 'c05-04',
  },
  {
    id: 'c05-04',
    sprite: 'qinglan',
    text: '她把领口重新扣好，职业壳子咔哒一声合上，却合得慢了一拍。',
    next: 'c05-05',
  },
  {
    id: 'c05-05',
    sprite: 'qinglan',
    expression: 'tense',
    speaker: '苏晴岚',
    text: '签字单给我。\n看完就忘。',
    next: 'c05-choice',
  },
  {
    id: 'c05-choice',
    choices: [
      {
        text: '「忘不了。」——诚实',
        next: 'c05-r0',
        affection: 10,
      },
      {
        text: '「好。」——尊重边界',
        next: 'c05-r1',
        affection: 5,
        setFlag: 'trust',
      },
      {
        text: '「你也可以不当机器。」——太直',
        next: 'c05-r2',
        affection: 0,
      },
    ],
  },
  {
    id: 'c05-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '通道尽头的潮味混着消毒水。破绽一旦被看见，就再也变不成完美的前台。',
    next: 'c05-end',
  },
  {
    id: 'c05-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c05-end',
  },
  {
    id: 'c05-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c05-end',
  },
  {
    id: 'c05-end',
    mood: 'cold',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch06',
  },
]
