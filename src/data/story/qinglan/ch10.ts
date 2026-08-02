import type { DialogueNode } from '../../../engine/types'

/**
 * 第10章 · 父亲的订房单
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter10: DialogueNode[] = [
  {
    id: 'ch10',
    chapter: 10,
    chapterTitle: '父亲的订房单',
    bg: 'shop-back',
    mood: 'cold',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第10章】父亲的订房单\n拾潮后仓的纸箱里，夹着一张发黄的酒店订房单。',
    next: 'c10-01',
  },
  {
    id: 'c10-01',
    sprite: 'qinglan',
    text: '日期是十年前。备注栏歪歪扭扭：「晴岚姑娘帮忙看过店，谢。」——父亲的字。',
    next: 'c10-02',
  },
  {
    id: 'c10-02',
    speaker: '沈屿',
    text: '……我爸订过你们酒店？',
    next: 'c10-03',
  },
  {
    id: 'c10-03',
    sprite: 'qinglan',
    text: '晚上我把单据带到前台。她盯着看了很久。',
    next: 'c10-04',
  },
  {
    id: 'c10-04',
    sprite: 'qinglan',
    expression: 'tense',
    speaker: '苏晴岚',
    text: '那年台风，镇上停电。你父亲把钥匙寄存在前台，让我——那时我还是实习生——顺路看一眼卷帘门。\n小事。他偏偏写进备注。',
    next: 'c10-05',
  },
  {
    id: 'c10-05',
    sprite: 'qinglan',
    text: '原来我们中间隔着的，不只是一张房卡，还有一句她从未对我提起的谢。',
    next: 'c10-choice',
  },
  {
    id: 'c10-choice',
    choices: [
      {
        text: '「谢谢你替他看过店。」——郑重道谢',
        next: 'c10-r0',
        affection: 15,
        setFlag: 'trust',
      },
      {
        text: '「你怎么不早说？」——追问',
        next: 'c10-r1',
        affection: 5,
      },
      {
        text: '把单据叠好还给她',
        next: 'c10-r2',
        affection: 10,
      },
    ],
  },
  {
    id: 'c10-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '旧单据重新夹进账本。有些缘分从父亲那一代就开始停泊，只是现在才退潮可见。',
    next: 'c10-end',
  },
  {
    id: 'c10-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c10-end',
  },
  {
    id: 'c10-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c10-end',
  },
  {
    id: 'c10-end',
    mood: 'cold',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch11',
  },
]
