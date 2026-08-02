import type { DialogueNode } from '../../../engine/types'

/**
 * 第7章 · 雨声与门铃
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter07: DialogueNode[] = [
  {
    id: 'ch07',
    chapter: 7,
    chapterTitle: '雨声与门铃',
    bg: 'hotel-lobby',
    mood: 'rain',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第7章】雨声与门铃\n雨砸在雨棚上。门铃每隔几分钟响一次——外卖、迷路游客、淋湿的烟民。',
    next: 'c07-01',
  },
  {
    id: 'c07-01',
    sprite: 'qinglan',
    text: '每次她刚开口，门铃就打断。我们的对话被切成碎片。',
    next: 'c07-02',
  },
  {
    id: 'c07-02',
    sprite: 'qinglan',
    expression: 'tired',
    speaker: '苏晴岚',
    text: '雨夜的前台最吵。\n安静是奢侈品。',
    next: 'c07-03',
  },
  {
    id: 'c07-03',
    speaker: '沈屿',
    text: '那我站远点，省得占你的安静额度。',
    next: 'c07-04',
  },
  {
    id: 'c07-04',
    sprite: 'qinglan',
    expression: 'soft',
    speaker: '苏晴岚',
    text: '……站这儿就行。\n至少你知道什么时候该闭嘴。',
    next: 'c07-choice',
  },
  {
    id: 'c07-choice',
    choices: [
      {
        text: '继续陪她撑过雨点',
        next: 'c07-r0',
        affection: 10,
        setFlag: 'habit',
      },
      {
        text: '帮她开门接伞',
        next: 'c07-r1',
        affection: 5,
      },
      {
        text: '回房避雨',
        next: 'c07-r2',
        affection: 0,
      },
    ],
  },
  {
    id: 'c07-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '门铃又响。她去应门前，回头看了我一眼——像把一句没说完的话，暂存在雨声里。',
    next: 'c07-end',
  },
  {
    id: 'c07-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c07-end',
  },
  {
    id: 'c07-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c07-end',
  },
  {
    id: 'c07-end',
    mood: 'rain',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch08',
  },
]
