import type { DialogueNode } from '../../../engine/types'

/**
 * 第48章 · 大堂的门
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter48: DialogueNode[] = [
  {
    id: 'ch48',
    chapter: 48,
    chapterTitle: '大堂的门',
    bg: 'hotel-lobby',
    mood: 'warm',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第48章】大堂的门\n夜班结束。侧门的锁她故意没扣死。',
    next: 'c48-01',
  },
  {
    id: 'c48-01',
    sprite: 'qinglan',
    expression: 'soft',
    speaker: '苏晴岚',
    text: '门留着。\n你要是还回来，别按门铃——门铃是给客人的。',
    next: 'c48-02',
  },
  {
    id: 'c48-02',
    sprite: 'qinglan',
    text: '风灌进走廊。自动门感应到动静，却没有人进出。',
    next: 'c48-choice',
  },
  {
    id: 'c48-choice',
    choices: [
      {
        text: '「我知道侧门。」——接住',
        next: 'c48-r0',
        affection: 10,
        setFlag: 'habit',
      },
      {
        text: '站在门边看她离开',
        next: 'c48-r1',
        affection: 5,
      },
    ],
  },
  {
    id: 'c48-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '侧门缝里漏进潮声。像一句不肯结束的邀请。',
    next: 'c48-end',
  },
  {
    id: 'c48-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c48-end',
  },
  {
    id: 'c48-end',
    mood: 'warm',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch49',
  },
]
