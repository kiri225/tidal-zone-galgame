import type { DialogueNode } from '../../../engine/types'

/**
 * 第43章 · 监控死角
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter43: DialogueNode[] = [
  {
    id: 'ch43',
    chapter: 43,
    chapterTitle: '监控死角',
    bg: 'hotel-monitor',
    mood: 'rain',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第43章】监控死角\n监控室。她调出大堂画面——我和买家握手的那一瞬被雨点打在玻璃上，模糊成一团。',
    next: 'c43-01',
  },
  {
    id: 'c43-01',
    sprite: 'qinglan',
    expression: 'hurt',
    speaker: '苏晴岚',
    text: '看清楚了吗。\n过客模板的高潮段落。',
    next: 'c43-02',
  },
  {
    id: 'c43-02',
    speaker: '沈屿',
    text: '那是应付。不是答应。',
    next: 'c43-03',
  },
  {
    id: 'c43-03',
    sprite: 'qinglan',
    expression: 'cold',
    speaker: '苏晴岚',
    text: '监控不收录内心独白。\n只收录手。',
    next: 'c43-choice',
  },
  {
    id: 'c43-choice',
    choices: [
      {
        text: '「那我用行动改写。」——承诺',
        next: 'c43-r0',
        affection: 15,
      },
      {
        text: '「别用监控审判我。」——烦躁',
        next: 'c43-r1',
        affection: -5,
      },
    ],
  },
  {
    id: 'c43-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '屏幕蓝光映着她的眼睛。雨声很大，像有人在外面反复刷卡失败。',
    next: 'c43-end',
  },
  {
    id: 'c43-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c43-end',
  },
  {
    id: 'c43-end',
    mood: 'rain',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch44',
  },
]
