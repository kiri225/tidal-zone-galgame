import type { DialogueNode } from '../../../engine/types'

/**
 * 第42章 · 买家皮鞋
 * 苏晴岚线 · 生成稿（可手改加厚）
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
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c42-end',
  },
  {
    id: 'c42-end',
    mood: 'cold',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch43',
  },
]
