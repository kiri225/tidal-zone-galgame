import type { DialogueNode } from '../../../engine/types'

/**
 * 第23章 · 休班早晨
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter23: DialogueNode[] = [
  {
    id: 'ch23',
    chapter: 23,
    chapterTitle: '休班早晨',
    bg: 'market-morning',
    mood: 'warm',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第23章】休班早晨\n休班早晨，码头早市喧闹。她穿便装，指着鱼摊讨价还价。',
    next: 'c23-01',
  },
  {
    id: 'c23-01',
    sprite: 'qinglan',
    text: '完全不像夜班经理。更像潮屿土生土长的、会为三块钱认真皱眉的人。',
    next: 'c23-02',
  },
  {
    id: 'c23-02',
    sprite: 'qinglan',
    expression: 'smile',
    speaker: '苏晴岚',
    text: '你提袋子。\n经理休息日，指挥权在我。',
    next: 'c23-abranch',
  },
  {
    id: 'c23-abranch',
    affectionBranch: { threshold: 35, whenMet: 'c23-cg', whenNot: 'c23-aftercg' },
  },
  {
    id: 'c23-cg',
    bg: 'market-morning',
    mood: 'intimate',
    sprite: null,
    cg: 'market_ql',
    text: '【CG · 休班早晨】\n人潮里她忽然回头确认我还在——那一眼不是前台巡视，是怕短暂停泊提前离港。',
    next: 'c23-aftercg',
    unlockCg: 'market_ql',
  },
  {
    id: 'c23-aftercg',
    sprite: 'qinglan',
    expression: 'soft',
    cg: null,
    text: '灯还亮着。有些画面已经发生，有些还差一个潮位。',
    next: 'c23-choice',
  },
  {
    id: 'c23-choice',
    choices: [
      {
        text: '乖乖提袋子',
        next: 'c23-r0',
        affection: 10,
        setFlag: 'habit',
      },
      {
        text: '「你讨价还价好凶。」——笑她',
        next: 'c23-r1',
        affection: 5,
      },
    ],
  },
  {
    id: 'c23-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '袋里的冰袋渗出水。她的手背凉，碰触却热。',
    next: 'c23-end',
  },
  {
    id: 'c23-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c23-end',
  },
  {
    id: 'c23-end',
    mood: 'warm',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch24',
  },
]
