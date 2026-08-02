import type { DialogueNode } from '../../../engine/types'

/**
 * 第9章 · 早餐的三种吃法
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter09: DialogueNode[] = [
  {
    id: 'ch09',
    chapter: 9,
    chapterTitle: '早餐的三种吃法',
    bg: 'hotel-lobby',
    mood: 'warm',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第9章】早餐的三种吃法\n交班后的早晨，餐厅只剩员工餐的金属盘碰撞声。',
    next: 'c09-01',
  },
  {
    id: 'c09-01',
    sprite: 'qinglan',
    expression: 'tired',
    speaker: '苏晴岚',
    text: '早餐。选。\n员工餐、我多做的便当、或者你回房睡——别饿着晕倒在我大堂。',
    next: 'c09-choice',
  },
  {
    id: 'c09-choice',
    choices: [
      {
        text: '「员工餐。」——跟她同一张桌',
        next: 'c09-r0',
        affection: 10,
        setFlag: 'habit',
      },
      {
        text: '「便当。」——收下她多做的那份',
        next: 'c09-r1',
        affection: 15,
      },
      {
        text: '「回房睡。」——拒绝靠近',
        next: 'c09-r2',
        affection: 0,
      },
    ],
  },
  {
    id: 'c09-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '粥很烫。她吃得快，像习惯把一切温热的东西在冷却前解决。',
    next: 'c09-end',
  },
  {
    id: 'c09-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c09-end',
  },
  {
    id: 'c09-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c09-end',
  },
  {
    id: 'c09-end',
    mood: 'warm',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch10',
  },
]
