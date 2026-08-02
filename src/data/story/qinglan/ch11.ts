import type { DialogueNode } from '../../../engine/types'

/**
 * 第11章 · 替班的空位
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter11: DialogueNode[] = [
  {
    id: 'ch11',
    chapter: 11,
    chapterTitle: '替班的空位',
    bg: 'hotel-lobby',
    mood: 'normal',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第11章】替班的空位\n同事请病假。班表上空出一块刺眼的白。',
    next: 'c11-01',
  },
  {
    id: 'c11-01',
    sprite: 'qinglan',
    expression: 'default',
    speaker: '苏晴岚',
    text: '你能不能……坐一会儿前台。\n不是雇佣。是——拜托。我去处理四楼漏水。',
    next: 'c11-02',
  },
  {
    id: 'c11-02',
    sprite: 'qinglan',
    text: '「拜托」两个字从她嘴里出来，像生锈的锁终于转动。',
    next: 'c11-choice',
  },
  {
    id: 'c11-choice',
    choices: [
      {
        text: '「去吧。我看着。」——答应',
        next: 'c11-r0',
        affection: 15,
        setFlag: 'habit',
      },
      {
        text: '「我不会系统。」——犹豫',
        next: 'c11-r1',
        affection: 5,
      },
      {
        text: '「这不算过客该做的。」——拉开距离',
        next: 'c11-r2',
        affection: 0,
      },
    ],
  },
  {
    id: 'c11-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '我坐在她的位子上，名牌仍在抽屉里。椅背残留一点皂角味。',
    next: 'c11-end',
  },
  {
    id: 'c11-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c11-end',
  },
  {
    id: 'c11-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c11-end',
  },
  {
    id: 'c11-end',
    mood: 'normal',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch12',
  },
]
