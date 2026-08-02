import type { DialogueNode } from '../../../engine/types'

/**
 * 第20章 · 几乎越线
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter20: DialogueNode[] = [
  {
    id: 'ch20',
    chapter: 20,
    chapterTitle: '几乎越线',
    bg: 'hotel-lobby',
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
    bg: 'hotel-lobby',
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
    text: '灯还亮着。有些画面已经发生，有些还差一个潮位。',
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
    text: '她轻轻推开我，却把我的衣角捏了两秒才松手。「……回去。明天还有班。」',
    next: 'c20-end',
  },
  {
    id: 'c20-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c20-end',
  },
  {
    id: 'c20-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c20-end',
  },
  {
    id: 'c20-end',
    mood: 'intimate',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch21',
  },
]
