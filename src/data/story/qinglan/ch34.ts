import type { DialogueNode } from '../../../engine/types'

/**
 * 第34章 · 她先摘名牌
 * 苏晴岚线 · 卸妆瞬间增厚
 */
export const chapter34: DialogueNode[] = [
  {
    id: 'ch34',
    chapter: 34,
    chapterTitle: '她先摘名牌',
    bg: 'hotel-duty',
    mood: 'intimate',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第34章】她先摘名牌\n她伸手摘下名牌。金属扣弹开的声音，在风里小得不可思议。',
    next: 'c34-01',
  },
  {
    id: 'c34-01',
    sprite: 'qinglan',
    expression: 'blush',
    speaker: '苏晴岚',
    text: '摘了这个，我就不是经理。\n你还要不要——靠近。',
    next: 'c34-02',
  },
  {
    id: 'c34-02',
    sprite: 'qinglan',
    text: '卸妆仪式。比吻更先发生的，是身份的放下。',
    next: 'c34-03',
  },
  {
    id: 'c34-03',
    sprite: 'qinglan',
    text: '名牌躺在掌心，字迹朝上又被她翻过去。班表还夹在文件板上，今晚的「夜班经理」栏空了一格——像潮水先退开半寸，露出底下的岸。',
    next: 'c34-04',
  },
  {
    id: 'c34-04',
    sprite: 'qinglan',
    expression: 'soft',
    speaker: '苏晴岚',
    text: '房卡可以交还，过客可以离开。\n名牌一旦摘下……我就没法假装这只是短暂停泊。你还要不要？',
    next: 'c34-choice',
  },
  {
    id: 'c34-choice',
    choices: [
      {
        text: '「要。」——接住',
        next: 'c34-r0',
        affection: 15,
        setFlag: 'unmask',
      },
      {
        text: '「要，但怕你后悔。」——温柔暂缓',
        next: 'c34-r1',
        affection: 5,
        setFlag: 'unmask',
      },
    ],
  },
  {
    id: 'c34-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '名牌被她放进我衬衫口袋。「替我保管。涨潮之前，别还我。」',
    next: 'c34-end',
  },
  {
    id: 'c34-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她把名牌放回桌角，没有别上。「怕我后悔——也合理。那今晚先停在摘下之前。」',
    next: 'c34-end',
  },
  {
    id: 'c34-end',
    mood: 'intimate',
    text: '金属叩桌一声轻响。卸妆从名牌开始——礼服还在，人已经退潮露出岸。',
    next: 'c34-end-cg',
  },
  {
    id: 'c34-end-cg',
    cg: 'ql-ch34-end',
    sprite: null,
    mood: 'intimate',
    text: '【CG · 章末】\n金属扣弹开时卸下的铠甲。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch35',
  },
]
