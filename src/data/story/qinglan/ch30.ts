import type { DialogueNode } from '../../../engine/types'

/**
 * 第30章 · 来大堂
 * 苏晴岚线 · 模板已清理
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
    text: '「并肩可以。别逞英雄。」她把对讲机别到我肩带上，「跟紧值班。你是我的责任。」',
    next: 'c30-end',
  },
  {
    id: 'c30-end',
    mood: 'dark',
    text: '短信四个字没有句号。大堂成了临时港湾——而她把你编进了今晚的航行日志。',
    next: 'c30-end-cg',
  },
  {
    id: 'c30-end-cg',
    cg: 'ql-ch30-end',
    sprite: null,
    mood: 'rain',
    text: '【CG · 章末】\n短信四个字与塞进掌心的钥匙。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch31',
  },
]
