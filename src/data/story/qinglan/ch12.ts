import type { DialogueNode } from '../../../engine/types'

/**
 * 第12章 · 制服之外
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter12: DialogueNode[] = [
  {
    id: 'ch12',
    chapter: 12,
    chapterTitle: '制服之外',
    bg: 'street-day',
    mood: 'warm',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第12章】制服之外\n白天的旧街刺眼。她换了便装下楼——短袖、帆布鞋，没有名牌。',
    next: 'c12-01',
  },
  {
    id: 'c12-01',
    sprite: 'qinglan',
    text: '我差点认不出她。少了制服，她忽然变成一个会买烟、会眯眼看太阳的普通人。',
    next: 'c12-02',
  },
  {
    id: 'c12-02',
    sprite: 'qinglan',
    expression: 'casual',
    speaker: '苏晴岚',
    text: '看什么。\n夜班经理也有白天。',
    next: 'c12-03',
  },
  {
    id: 'c12-03',
    speaker: '沈屿',
    text: '只是……很不一样。',
    next: 'c12-04',
  },
  {
    id: 'c12-04',
    sprite: 'qinglan',
    expression: 'avert',
    speaker: '苏晴岚',
    text: '不一样才对。\n制服是给客人的。',
    next: 'c12-abranch',
  },
  {
    id: 'c12-abranch',
    affectionBranch: { threshold: 25, whenMet: 'c12-cg', whenNot: 'c12-aftercg' },
  },
  {
    id: 'c12-cg',
    bg: 'street-day',
    mood: 'intimate',
    sprite: null,
    cg: 'offduty',
    text: '【CG · 制服之外】\n日光下的她没有职业笑，只是把刘海拨到耳后，像终于允许自己被认错一次。',
    next: 'c12-aftercg',
    unlockCg: 'offduty',
  },
  {
    id: 'c12-aftercg',
    sprite: 'qinglan',
    expression: 'soft',
    cg: null,
    text: '灯还亮着。有些画面已经发生，有些还差一个潮位。',
    next: 'c12-choice',
  },
  {
    id: 'c12-choice',
    choices: [
      {
        text: '「这样也好看。」——真诚',
        next: 'c12-r0',
        affection: 10,
      },
      {
        text: '「我想多看看这样的你。」——推进',
        next: 'c12-r1',
        affection: 15,
        setFlag: 'trust',
      },
    ],
  },
  {
    id: 'c12-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '她买了无糖的冰，分我一半。甜味很淡，像她肯分享的部分。',
    next: 'c12-end',
  },
  {
    id: 'c12-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c12-end',
  },
  {
    id: 'c12-end',
    mood: 'warm',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch13',
  },
]
