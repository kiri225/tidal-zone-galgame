import type { DialogueNode } from '../../../engine/types'

/**
 * 第46章 · 联名的想象（小说级密度）
 * 入口：ch45 → ch46…
 * 出口：→ ch47
 */
export const chapter46: DialogueNode[] = [
  {
    id: 'ch46',
    chapter: 46,
    chapterTitle: '联名的想象',
    bg: 'bookstore',
    mood: 'warm',
    sprite: 'wantang',
    expression: 'default',
    cg: null,
    text: '【第46章】联名的想象\n晚饭后，晚棠翻出一张皱巴巴的草图——是她某个失眠的夜里，随手画在旧账本背面的。',
    next: 'c46-01',
  },
  {
    id: 'c46-01',
    text: '草图上是拾潮和潮声的平面布局，两间铺子之间那道原本紧闭的后墙，被她用红笔圈出来，画了一个大大的问号。',
    next: 'c46-01b',
  },
  {
    id: 'c46-01b',
    text: '我盯着那张草图看了很久，忽然意识到，她大概不止一个晚上没睡好——这张纸的折痕，说明它被反复拿出来、又反复收起来过。',
    next: 'c46-02',
  },
  {
    id: 'c46-02',
    speaker: '林晚棠',
    expression: 'avert',
    text: '别误会，我不是提前替你规划人生。\n就是……失眠的时候，脑子总爱瞎想。',
    next: 'c46-03',
  },
  {
    id: 'c46-03',
    text: '她嘴上说着「瞎想」，可这张草图上的每一处标注，都精细得不像随手涂鸦——尺寸、动线、甚至连采光都算进去了。',
    next: 'c46-branch',
  },
  {
    id: 'c46-branch',
    affectionBranch: { threshold: 12, whenMet: 'c46-04a', whenNot: 'c46-04b' },
  },
  {
    id: 'c46-04a',
    speaker: '林晚棠',
    expression: 'soft',
    text: '如果你真的留下……后门可以打通。\n白天卖旧物，夜里开书与酒。名字随便你——或者，叫「潮间带」。',
    next: 'c46-05',
  },
  {
    id: 'c46-04b',
    speaker: '林晚棠',
    expression: 'default',
    text: '留下也好，先把日子过明白，别急着想那么远。\n招牌的事，不急——急的话，倒显得不真诚了。',
    next: 'ch47',
  },
  {
    id: 'c46-05',
    text: '「潮间带」三个字被她说出口时，语气轻描淡写，可我知道，这个名字她大概在心里，已经反复念过很多遍了。',
    next: 'c46-05b',
  },
  {
    id: 'c46-05b',
    text: '她用红笔在草图角落，试探性地写下这三个字，笔迹比平时的价签字体软了几分。',
    next: 'c46-06',
  },
  {
    id: 'c46-06',
    speaker: '沈屿',
    text: '涨潮时被淹没，退潮时露真模样——是这个意思？',
    next: 'c46-07',
  },
  {
    id: 'c46-07',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……你倒是记性好。\n对。也想借这个名字提醒自己——往后不管涨潮还是退潮，都别再假装看不见彼此。',
    next: 'c46-07b',
  },
  {
    id: 'c46-07b',
    text: '她说这话时，指尖无意识地敲着草图边缘，像是在替这个还没正式挂牌的名字，打着一段只有她自己听得见的节拍。',
    next: 'c46-08',
  },
  {
    id: 'c46-08',
    choices: [
      {
        text: '「潮间带。好，就叫这个。」——正式定下这个名字',
        next: 'c46-09a',
        affection: 2,
        setFlag: 'name_intertidal',
      },
      {
        text: '「名字以后再定，人先定下来最重要。」——先稳住关系本身',
        next: 'c46-09b',
        affection: 2,
      },
    ],
  },
  {
    id: 'c46-09a',
    text: '她认真地点了点头，眼神像是已经看见了那块挂在联名店门口的小黑板，上面写着这个新名字。',
    next: 'c46-10a',
  },
  {
    id: 'c46-10a',
    speaker: '林晚棠',
    expression: 'laugh',
    text: '那就这么定了。\n招牌我来做——你负责别再让人把它拆下来。',
    next: 'c46-11a',
  },
  {
    id: 'c46-11a',
    text: '她把那张草图小心折好，收进围裙口袋，动作郑重得像在收好一份即将生效的契约。',
    next: 'ch47',
  },
  {
    id: 'c46-09b',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……学会抓重点了。\n行，那名字先欠着，反正你也跑不掉了。',
    next: 'ch47',
  },
]
