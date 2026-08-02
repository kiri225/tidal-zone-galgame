import type { DialogueNode } from '../../../engine/types'

/**
 * 第20章 · 几乎越线
 * 苏晴岚线 · 抉择前增厚；分支回复各具口吻
 */
export const chapter20: DialogueNode[] = [
  {
    id: 'ch20',
    chapter: 20,
    chapterTitle: '几乎越线',
    bg: 'hotel-corridor',
    mood: 'intimate',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第20章】几乎越线\n走廊地毯吸收了脚步声。我们停在消防栓旁，呼吸忽然变得很响。',
    next: 'c20-01',
  },
  {
    id: 'c20-01',
    sprite: 'qinglan',
    text: '她背靠墙，名牌顶着我胸口。距离近得像违规。',
    next: 'c20-02',
  },
  {
    id: 'c20-02',
    sprite: 'qinglan',
    expression: 'blush',
    speaker: '苏晴岚',
    text: '……别把这当成夜班福利。\n我讨厌被服务化。',
    next: 'c20-03',
  },
  {
    id: 'c20-03',
    sprite: 'qinglan',
    text: '几乎吻上。酒气与皂角之间，只差一个决定。',
    next: 'c20-abranch',
  },
  {
    id: 'c20-abranch',
    affectionBranch: { threshold: 40, whenMet: 'c20-cg', whenNot: 'c20-aftercg' },
  },
  {
    id: 'c20-cg',
    bg: 'hotel-corridor',
    mood: 'intimate',
    sprite: null,
    cg: 'almost_ql',
    text: '【CG · 几乎越线】\n消防栓的红漆旁，她的唇停在「几乎」。名牌冰凉，呼吸滚烫——信任还没开口，身体已经先一步越界。',
    next: 'c20-aftercg',
    unlockCg: 'almost_ql',
  },
  {
    id: 'c20-aftercg',
    sprite: 'qinglan',
    expression: 'soft',
    cg: null,
    text: '她退开半步，呼吸仍乱。名牌冰凉，指尖却发烫——信任还没开口，身体已经先一步停在边界上。',
    next: 'c20-04',
  },
  {
    id: 'c20-04',
    sprite: 'qinglan',
    expression: 'tense',
    speaker: '苏晴岚',
    text: '过客可以短暂停泊。\n可停泊也要说清楚——停一晚，还是……敢不敢把房卡交回我手里。',
    next: 'c20-05',
  },
  {
    id: 'c20-05',
    speaker: '沈屿',
    text: '……你怕的是越线，还是怕我把越线当成夜班的一部分？',
    next: 'c20-choice',
  },
  {
    id: 'c20-choice',
    choices: [
      {
        text: '「我先问清：你愿不愿意。」——尊重',
        next: 'c20-r0',
        affection: 15,
        setFlag: 'trust',
      },
      {
        text: '「你不是服务。是你。」——揭面具',
        next: 'c20-r1',
        affection: 15,
        setFlag: 'trust',
      },
      {
        text: '「今晚太像前夜，先停。」——守界',
        next: 'c20-r2',
        affection: 10,
        setFlag: 'trust',
      },
    ],
  },
  {
    id: 'c20-r0',
    sprite: 'qinglan',
    expression: 'soft',
    speaker: '苏晴岚',
    text: '愿意。所以才怕。\n回去。明天班表还写着我的名——别让我带着心跳去交班。',
    next: 'c20-end',
  },
  {
    id: 'c20-r1',
    sprite: 'qinglan',
    expression: 'blush',
    speaker: '苏晴岚',
    text: '……谢谢你说「是你」。\n这句话比吻更越线。名牌还在，可我听见它松了一扣。',
    next: 'c20-end',
  },
  {
    id: 'c20-r2',
    sprite: 'qinglan',
    expression: 'soft',
    speaker: '苏晴岚',
    text: '守界的人，我反而更敢信。\n走廊灯还亮着——我们把「几乎」留到房卡真正交还的那天。',
    next: 'c20-end',
  },
  {
    id: 'c20-end',
    mood: 'intimate',
    text: '走廊应急灯嗡嗡作响。几乎发生的事停在消防栓旁——信任开了口，身体学会等待。',
    next: 'c20-end-cg',
  },
  {
    id: 'c20-end-cg',
    cg: 'ql-ch20-end',
    sprite: null,
    mood: 'intimate',
    text: '【CG · 章末】\n消防栓旁停在几乎的呼吸。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch21',
  },
]
