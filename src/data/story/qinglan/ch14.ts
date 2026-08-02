import type { DialogueNode } from '../../../engine/types'

/**
 * 第14章 · 夜班日志
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter14: DialogueNode[] = [
  {
    id: 'ch14',
    chapter: 14,
    chapterTitle: '夜班日志',
    bg: 'hotel-lobby',
    mood: 'cold',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第14章】夜班日志\n夜班日志摊在柜台。她去巡楼时，我无意翻到今日备注。',
    next: 'c14-01',
  },
  {
    id: 'c14-01',
    sprite: 'qinglan',
    text: '「沈屿。约二十八。卖铺。像会走的那种。」字迹比废单上更用力。',
    next: 'c14-02',
  },
  {
    id: 'c14-02',
    sprite: 'qinglan',
    expression: 'hurt',
    speaker: '苏晴岚',
    text: '……看完了？',
    next: 'c14-03',
  },
  {
    id: 'c14-03',
    speaker: '沈屿',
    text: '像会走的那种——很准。',
    next: 'c14-04',
  },
  {
    id: 'c14-04',
    sprite: 'qinglan',
    expression: 'avert',
    speaker: '苏晴岚',
    text: '准才写。\n不准的，我不浪费铅笔。',
    next: 'c14-choice',
  },
  {
    id: 'c14-choice',
    choices: [
      {
        text: '「也许会改准。」——留下余地',
        next: 'c14-r0',
        affection: 15,
      },
      {
        text: '「你观察得很可怕。」——半真半假',
        next: 'c14-r1',
        affection: 5,
      },
      {
        text: '「走之前会说再见。」——仍像过客',
        next: 'c14-r2',
        affection: 0,
      },
    ],
  },
  {
    id: 'c14-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '日志合上。铅笔尖断了一截，像某种未写完的判决。',
    next: 'c14-end',
  },
  {
    id: 'c14-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c14-end',
  },
  {
    id: 'c14-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c14-end',
  },
  {
    id: 'c14-end',
    mood: 'cold',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch15',
  },
]
