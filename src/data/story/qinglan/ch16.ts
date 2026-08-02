import type { DialogueNode } from '../../../engine/types'

/**
 * 第16章 · 回到班表
 * 苏晴岚线 · 模板已清理
 */
export const chapter16: DialogueNode[] = [
  {
    id: 'ch16',
    chapter: 16,
    chapterTitle: '回到班表',
    bg: 'hotel-lobby',
    mood: 'warm',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第16章】回到班表\n两天后，她归岗。第一句仍是流程：「欢迎光临——」然后停住。',
    next: 'c16-01',
  },
  {
    id: 'c16-01',
    sprite: 'qinglan',
    text: '眼神停了半秒。半秒对前台来说，已经是事故。',
    next: 'c16-02',
  },
  {
    id: 'c16-02',
    sprite: 'qinglan',
    expression: 'smile',
    speaker: '苏晴岚',
    text: '……续住还顺利吗。',
    next: 'c16-03',
  },
  {
    id: 'c16-03',
    speaker: '沈屿',
    text: '沙子没进电梯。人还在。',
    next: 'c16-04',
  },
  {
    id: 'c16-04',
    sprite: 'qinglan',
    expression: 'soft',
    speaker: '苏晴岚',
    text: '那就好。\n班表上你的名字——我是说房间号——我核对过了。',
    next: 'c16-choice',
  },
  {
    id: 'c16-choice',
    choices: [
      {
        text: '「你回来就好。」——直球',
        next: 'c16-r0',
        affection: 15,
        setFlag: 'habit',
      },
      {
        text: '点头，不多说',
        next: 'c16-r1',
        affection: 5,
      },
    ],
  },
  {
    id: 'c16-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '打印机吐出今日报表。她把它夹好，耳尖又红了一点点。',
    next: 'c16-end',
  },
  {
    id: 'c16-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她只是点了下头，职业笑重新归位，却比两天前慢了半拍才说：「欢迎……续住。」',
    next: 'c16-end',
  },
  {
    id: 'c16-end',
    mood: 'warm',
    text: '班表重新贴上墙。她的名字回到夜班那一栏；我的房间号，也被她用铅笔轻轻描过一次。',
    next: 'c16-end-cg',
  },
  {
    id: 'c16-end-cg',
    cg: 'ql-ch16-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n归岗时停住半秒的眼神。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch17',
  },
]
