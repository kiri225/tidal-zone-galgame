import type { DialogueNode } from '../../../engine/types'

/** 第34章 · 她先关灯 */
export const chapter34: DialogueNode[] = [
  {
    id: 'ch34',
    chapter: 34,
    chapterTitle: '她先关灯',
    bg: 'qinghe-room',
    mood: 'intimate',
    sprite: 'qinghe',
    expression: 'tense',
    cg: null,
    text: '【第34章】她先关灯\n台风夜里，环灯是屋里唯一的白。她的手指停在开关上，像停在一句还没说出口的同意。',
    next: 'c34-01',
  },
  {
    id: 'c34-01',
    sprite: 'qinghe',
    expression: 'cold',
    speaker: '顾清禾',
    text: '开着灯，我还能假装这是工作。\n关了——就只剩顾清禾。',
    next: 'c34-02',
  },
  {
    id: 'c34-02',
    speaker: '沈屿',
    text: '那你关。我留下来的不是观众。',
    next: 'c34-03',
  },
  {
    id: 'c34-03',
    sprite: 'qinghe',
    expression: 'blush',
    text: '喀哒。环灯灭了。窗外暴雨把公寓切成黑白两半。她的呼吸在黑暗里变得很近——像卸下价目表。',
    next: 'c34-choice',
    setFlag: 'offair',
  },
  {
    id: 'c34-choice',
    choices: [
      { text: '「我看见你了。」——不当客户', next: 'c34-r0', affection: 15, setFlag: 'not_customer' },
      { text: '握住她的手，不说话', next: 'c34-r1', affection: 10 },
      { text: '「怕你后悔。」——给退路', next: 'c34-r2', affection: 5 },
    ],
  },
  {
    id: 'c34-r0',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '……那就别再打开支付。\n关灯的人，不收打赏。',
    next: 'c34-end',
  },
  {
    id: 'c34-r1',
    sprite: 'qinghe',
    expression: 'soft',
    text: '她的手指收紧。黑暗里，职业媚笑彻底消失。',
    next: 'c34-end',
  },
  {
    id: 'c34-r2',
    sprite: 'qinghe',
    expression: 'avert',
    speaker: '顾清禾',
    text: '后悔是以后的事。现在先……别开灯。',
    next: 'c34-end',
  },
  {
    id: 'c34-end',
    mood: 'intimate',
    text: 'offair。这个词不会出现在她的价目表上，却写进了这一夜。',
    next: 'c34-end-cg',
  },
  {
    id: 'c34-end-cg',
    cg: 'qh-ch34-end',
    sprite: null,
    mood: 'intimate',
    text: '【CG · 章末】\n环灯熄灭的瞬间，她先成为顾清禾。',
    next: 'ch35',
  },
]
