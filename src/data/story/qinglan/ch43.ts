import type { DialogueNode } from '../../../engine/types'

/**
 * 第43章 · 监控死角
 * 苏晴岚线 · 模板已清理
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
    text: '「别解释给镜头听。」她摘耳机，「解释给我——如果还有解释。」',
    next: 'c43-end',
  },
  {
    id: 'c43-end',
    mood: 'rain',
    text: '灰白的屏幕里，一笔交易像退潮。死角之外，有人把心放在了会不会被回放的位置。',
    next: 'c43-end-cg',
  },
  {
    id: 'c43-end-cg',
    cg: 'ql-ch43-end',
    sprite: null,
    mood: 'rain',
    text: '【CG · 章末】\n监控死角里按下的暂停键。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch44',
  },
]
