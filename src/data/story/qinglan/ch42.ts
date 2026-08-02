import type { DialogueNode } from '../../../engine/types'

/**
 * 第42章 · 买家皮鞋
 * 苏晴岚线 · 模板已清理
 */
export const chapter42: DialogueNode[] = [
  {
    id: 'ch42',
    chapter: 42,
    chapterTitle: '买家皮鞋',
    bg: 'hotel-lobby',
    mood: 'cold',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第42章】买家皮鞋\n买家住进酒店。皮鞋在大理石上敲出自信的节奏。',
    next: 'c42-01',
  },
  {
    id: 'c42-01',
    sprite: 'qinglan',
    text: '他在前台办入住，笑着跟我点头：「沈老板，我们很快就能签字了。」',
    next: 'c42-02',
  },
  {
    id: 'c42-02',
    sprite: 'qinglan',
    expression: 'smile',
    speaker: '苏晴岚',
    text: '欢迎入住。祝您商务顺利。',
    next: 'c42-03',
  },
  {
    id: 'c42-03',
    sprite: 'qinglan',
    text: '职业笑完美。只有我听得出那句「顺利」里的刺。',
    next: 'c42-choice',
  },
  {
    id: 'c42-choice',
    choices: [
      {
        text: '当场含糊应付买家',
        next: 'c42-r0',
        affection: 5,
        setFlag: 'hesitate_sell',
      },
      {
        text: '「还没决定。」——当她面说',
        next: 'c42-r1',
        affection: 15,
      },
    ],
  },
  {
    id: 'c42-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '电梯门合上。她在键盘上敲字，力度像要把键帽敲裂。',
    next: 'c42-end',
  },
  {
    id: 'c42-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '「加价很诱人。」她冷冷说，「诱人的东西通常会把岸变成码头——只停片刻。」',
    next: 'c42-end',
  },
  {
    id: 'c42-end',
    mood: 'cold',
    text: '中介名片与房卡并排放着。一种是卖，一种是住——她等你把哪一张推到前面。',
    next: 'c42-end-cg',
  },
  {
    id: 'c42-end-cg',
    cg: 'ql-ch42-end',
    sprite: null,
    mood: 'cold',
    text: '【CG · 章末】\n买家皮鞋与未推上前的房卡。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch43',
  },
]
