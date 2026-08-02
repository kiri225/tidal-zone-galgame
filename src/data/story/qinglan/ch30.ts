import type { DialogueNode } from '../../../engine/types'

/**
 * 第30章 · 来大堂
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter30: DialogueNode[] = [
  {
    id: 'ch30',
    chapter: 30,
    chapterTitle: '来大堂',
    bg: 'hotel-lobby',
    mood: 'dark',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第30章】来大堂\n短信只有四个字：「来大堂。」没有表情，没有句号。',
    next: 'c30-01',
  },
  {
    id: 'c30-01',
    sprite: 'qinglan',
    text: '走廊灯闪了闪。我跑下去时，她正把最后一批客人安顿进内廊。',
    next: 'c30-02',
  },
  {
    id: 'c30-02',
    sprite: 'qinglan',
    expression: 'tense',
    speaker: '苏晴岚',
    text: '你房间靠海窗。不安全。\n从现在起，你跟着值班走。',
    next: 'c30-03',
  },
  {
    id: 'c30-03',
    speaker: '沈屿',
    text: '命令口吻。',
    next: 'c30-04',
  },
  {
    id: 'c30-04',
    sprite: 'qinglan',
    expression: 'cold',
    speaker: '苏晴岚',
    text: '夜班经理的口吻。\n嫌凶就回城。',
    next: 'c30-choice',
  },
  {
    id: 'c30-choice',
    choices: [
      {
        text: '「听你的。」——服从也是信任',
        next: 'c30-r0',
        affection: 10,
        setFlag: 'trust',
      },
      {
        text: '「我来帮你。」——并肩',
        next: 'c30-r1',
        affection: 15,
        setFlag: 'habit',
      },
    ],
  },
  {
    id: 'c30-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '对讲机嘶哑作响。她把一把应急钥匙塞进我掌心：「别丢。」',
    next: 'c30-end',
  },
  {
    id: 'c30-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c30-end',
  },
  {
    id: 'c30-end',
    mood: 'dark',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch31',
  },
]
