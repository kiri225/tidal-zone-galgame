import type { DialogueNode } from '../../../engine/types'

/**
 * 第12章 · 旧伞（小说级密度）
 * 入口：← ch11
 * 出口：→ ch13
 */
export const chapter12: DialogueNode[] = [
  {
    id: 'ch12',
    chapter: 12,
    chapterTitle: '旧伞',
    bg: 'bookstore',
    mood: 'warm',
    sprite: 'wantang',
    expression: 'default',
    cg: null,
    text: '【第12章】旧伞\n雨彻底停的那天下午，晚棠从后仓翻出一把老旧的黑伞，伞骨有一根已经弯了，撑开时歪歪扭扭。',
    next: 'c12-01',
  },
  {
    id: 'c12-01',
    text: '她把伞摊在吧台上晾着，动作很轻，像是在对待一件比伞本身更值钱的东西。',
    next: 'c12-02',
  },
  {
    id: 'c12-02',
    speaker: '沈屿',
    text: '这伞都坏成这样了，怎么还留着？',
    next: 'c12-03',
  },
  {
    id: 'c12-03',
    speaker: '林晚棠',
    expression: 'tired',
    text: '你记得伞吗？高二那年，连下了三天雨。',
    next: 'c12-04',
  },
  {
    id: 'c12-04',
    text: '这句话像一把钥匙，「咔哒」一声，打开了记忆深处一扇积灰的门。',
    next: 'c12-05',
  },
  {
    id: 'c12-05',
    speaker: '林晚棠',
    expression: 'soft',
    text: '我把伞放你桌上，自己冒雨走回去。\n第二天，你把伞还我，抽屉里还夹了张纸条，只写了一个字——「谢」。',
    next: 'c12-06',
  },
  {
    id: 'c12-06',
    speaker: '沈屿',
    text: '……字太丑，不敢多写。',
    next: 'c12-07',
  },
  {
    id: 'c12-07',
    speaker: '林晚棠',
    expression: 'laugh',
    text: '骗子。你作文明明写得很好，老师还当范文念过。\n只是不敢写给我看。',
    next: 'c12-08',
  },
  {
    id: 'c12-08',
    text: '她说这话时，指尖轻轻抚过伞骨那道弯折的地方，像在抚摸一道旧年的伤疤，又像在确认它是否还完好。',
    next: 'c12-09',
  },
  {
    id: 'c12-09',
    choices: [
      {
        text: '「现在……想补上。」',
        next: 'c12-09a',
        affection: 15,
        setFlag: 'want_write',
      },
      {
        text: '「那时候什么都怕。」——坦白当年的懦弱',
        next: 'c12-09b',
        affection: 10,
      },
      {
        text: '笑着岔开话题',
        next: 'c12-09c',
        affection: 0,
      },
    ],
  },
  {
    id: 'c12-09a',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……别用嘴巴预支承诺。\n写出来，我才算。',
    next: 'c12-10',
  },
  {
    id: 'c12-09b',
    speaker: '林晚棠',
    expression: 'surprised',
    text: '怕就对了。\n不怕的人，走得更干脆——你没那么快走干脆，这点我倒是没看走眼。',
    next: 'c12-10',
  },
  {
    id: 'c12-09c',
    speaker: '林晚棠',
    expression: 'avert',
    text: '也好。\n回忆太长，会占营业时间。',
    next: 'c12-10',
  },
  {
    id: 'c12-10',
    text: '她把伞重新撑开，对着光检查伞面有没有破洞，动作认真得像在鉴定一件文物。',
    next: 'c12-11',
  },
  {
    id: 'c12-11',
    speaker: '林晚棠',
    text: '这把伞后来一直放在店里。\n下雨天有客人忘带伞，我就借他们用，只是从没告诉过谁，它有过一段故事。',
    next: 'c12-12',
  },
  {
    id: 'c12-12',
    speaker: '沈屿',
    text: '这十年，它借出去过多少次？',
    next: 'c12-13',
  },
  {
    id: 'c12-13',
    speaker: '林晚棠',
    expression: 'default',
    text: '数不清了。\n但每次都有人还回来——大概它自己也认得回家的路。',
    next: 'c12-14',
  },
  {
    id: 'c12-14',
    text: '「认得回家的路」，这句话说的是伞，可我总觉得，她说的也是别的什么，只是没有点破。',
    next: 'c12-14b',
  },
  {
    id: 'c12-14b',
    affectionBranch: { threshold: 25, whenMet: 'c12-cg', whenNot: 'c12-15' },
  },
  {
    id: 'c12-cg',
    cg: 'umbrella',
    mood: 'rain',
    bg: 'street-rain',
    sprite: null,
    text: '【CG · 旧伞】\n雨丝斜斜地落下来。旧伞撑开时有点歪，却刚好够两个人并肩。伞骨那道弯折，像一道不肯愈合、也不肯丢弃的旧年痕迹。',
    next: 'c12-15',
  },
  {
    id: 'c12-15',
    cg: null,
    sprite: 'wantang',
    expression: 'soft',
    choices: [
      {
        text: '「有些东西，认路是因为有人一直等它回来。」',
        next: 'c12-15a',
        affection: 15,
        setFlag: 'metaphor_understood',
      },
      {
        text: '只是笑笑，不接这个话茬',
        next: 'c12-15b',
        affection: 5,
      },
    ],
  },
  {
    id: 'c12-15a',
    text: '她愣了一下，随即别过脸去，假装专心检查伞骨，耳朵却悄悄红了一圈——被说中心事的窘迫，藏都藏不住。',
    next: 'c12-16',
  },
  {
    id: 'c12-15b',
    text: '她似乎也松了口气，把伞重新收拢，动作利落，像是把方才那点欲言又止，一并收进了伞套里。',
    next: 'c12-16',
  },
  {
    id: 'c12-16',
    text: '傍晚的阳光透过雨后的水汽，在地板上投出一圈圈晃动的光斑，伞面上残留的水珠，被照得像细碎的星子。',
    next: 'c12-17',
  },
  {
    id: 'c12-17',
    speaker: '林晚棠',
    text: '对了，这把伞——你要是不嫌弃，可以拿去用。骨头虽然弯了，挡雨还是够格的。',
    next: 'c12-18',
  },
  {
    id: 'c12-18',
    speaker: '沈屿',
    text: '你舍得？这毕竟是……有纪念意义的伞。',
    next: 'c12-19',
  },
  {
    id: 'c12-19',
    speaker: '林晚棠',
    expression: 'blush',
    text: '纪念意义放在你手上，总比锁在后仓吃灰强。\n再说了，东西是死的，人才是活的——你能想起来用它，就够了。',
    next: 'c12-20',
  },
  {
    id: 'c12-20',
    text: '我接过伞，伞柄被岁月磨得温润，握在手心，竟有一种奇异的踏实感，仿佛握住的不只是一把旧伞。',
    next: 'c12-21',
  },
  {
    id: 'c12-21',
    speaker: '沈屿',
    text: '这次，我会把它好好还回来。',
    next: 'c12-22',
  },
  {
    id: 'c12-22',
    speaker: '林晚棠',
    expression: 'soft',
    text: '不急着还。\n用坏了，我再给你补一把新的——只要你人还在潮屿。',
    next: 'c12-23',
  },
  {
    id: 'c12-23',
    text: '「只要你人还在潮屿」这句话，被她说得很轻，轻得像是怕自己听见，又忍不住想说出口。',
    next: 'c12-end-cg',
  },
  {
    id: 'c12-end-cg',
    cg: 'ch12-end',
    sprite: null,
    mood: 'rain',
    text: '【CG · 章末】\n伞骨下交叠的影子。这一章的潮位退下去时，她还留在岸上。',
    next: 'ch13',
  },
]
