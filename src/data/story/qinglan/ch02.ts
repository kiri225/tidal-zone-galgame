import type { DialogueNode } from '../../../engine/types'

/**
 * 第2章 · 员工价
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter02: DialogueNode[] = [
  {
    id: 'ch02',
    chapter: 2,
    chapterTitle: '员工价',
    bg: 'hotel-lobby',
    mood: 'warm',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第2章】员工价\n第二天傍晚我下楼续住。她仍在，名牌仍亮，笑仍完美。',
    next: 'c02-01',
  },
  {
    id: 'c02-01',
    sprite: 'qinglan',
    text: '前台电脑屏幕反光里，映出我衬衫上的灰——清仓一天的证据。',
    next: 'c02-02',
  },
  {
    id: 'c02-02',
    sprite: 'qinglan',
    expression: 'cold',
    speaker: '苏晴岚',
    text: '续住可以。员工价再给您三晚。\n条件是：别在大堂抽烟，别把沙子带进电梯。',
    next: 'c02-03',
  },
  {
    id: 'c02-03',
    speaker: '沈屿',
    text: '听起来像雇佣条款。',
    next: 'c02-04',
  },
  {
    id: 'c02-04',
    sprite: 'qinglan',
    expression: 'smile',
    speaker: '苏晴岚',
    text: '酒店没有雇佣客人。\n只有过客，和更短的过客。',
    next: 'c02-05',
  },
  {
    id: 'c02-05',
    sprite: 'qinglan',
    text: '她把「过客」两个字说得很轻，像提醒我，也像提醒她自己。',
    next: 'c02-choice',
  },
  {
    id: 'c02-choice',
    choices: [
      {
        text: '「那我争取当个长一点的过客。」——顺着她的词',
        next: 'c02-r0',
        affection: 10,
        setFlag: 'habit',
      },
      {
        text: '「卖完就走。」——诚实得近乎冷',
        next: 'c02-r1',
        affection: 0,
      },
      {
        text: '「你看起来也像过客。」——反将一军',
        next: 'c02-r2',
        affection: 5,
      },
    ],
  },
  {
    id: 'c02-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '她低头在系统里敲了几下，耳尖微微红了一瞬，随即被冷蓝的顶灯吞掉。',
    next: 'c02-end',
  },
  {
    id: 'c02-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c02-end',
  },
  {
    id: 'c02-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c02-end',
  },
  {
    id: 'c02-end',
    mood: 'warm',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch03',
  },
]
