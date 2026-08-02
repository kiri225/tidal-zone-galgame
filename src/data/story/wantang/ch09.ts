import type { DialogueNode } from '../../../engine/types'

/**
 * 第9章 · 晚饭的三种吃法（小说级密度）
 * 入口：← ch08
 * 出口：→ ch10
 */
export const chapter09: DialogueNode[] = [
  {
    id: 'ch09',
    chapter: 9,
    chapterTitle: '晚饭的三种吃法',
    bg: 'bookstore',
    mood: 'warm',
    sprite: 'wantang',
    expression: 'default',
    cg: null,
    text: '【第9章】晚饭的三种吃法\n第二天傍晚，书搬完最后一批，晚棠擦了擦手，忽然想起工资还没结的事。',
    next: 'c09-01',
  },
  {
    id: 'c09-01',
    text: '她翻出账本核对了几笔，笔尖在纸上顿了顿，像是在盘算一个不太好开口的提议。',
    next: 'c09-02',
  },
  {
    id: 'c09-02',
    speaker: '林晚棠',
    expression: 'soft',
    text: '码头新开了一家海鲜粥，味道听说不错。\n……当然，你也可以只要现金，我不勉强。',
    next: 'c09-03',
  },
  {
    id: 'c09-03',
    text: '她说这话时，眼神有意无意地避开我，手指在账本边缘轻轻摩挲，像是在给自己一个不那么难堪的退路。',
    next: 'c09-04',
  },
  {
    id: 'c09-04',
    speaker: '沈屿',
    text: '还有第三种选择吗？',
    next: 'c09-05',
  },
  {
    id: 'c09-05',
    speaker: '林晚棠',
    expression: 'crossed',
    text: '……第三种，是我煮。\n但丑话说前头，我手艺一般，别抱太大期望。',
    next: 'c09-06',
  },
  {
    id: 'c09-06',
    text: '三种选择摆在眼前，看似随意，落地却各有分量——一顿饭，原来也能像一次不动声色的告白。',
    next: 'c09-07',
  },
  {
    id: 'c09-07',
    choices: [
      {
        text: '「一起去码头吃粥。」',
        next: 'c09-07a',
        affection: 10,
        setFlag: 'dinner',
      },
      {
        text: '「想吃你煮的。」',
        next: 'c09-07b',
        affection: 15,
        setFlag: 'dinner',
      },
      {
        text: '「现金就好。」',
        next: 'c09-07c',
        affection: 0,
      },
    ],
  },
  {
    id: 'c09-07a',
    bg: 'port-dusk',
    mood: 'warm',
    expression: 'laugh',
    text: '码头的海鲜粥摊支在几盏昏黄的灯下，热气腾腾。粥很烫，晚棠吹了又吹，眼角被热气逼出一点湿意。',
    next: 'c09-08a',
  },
  {
    id: 'c09-08a',
    speaker: '林晚棠',
    text: '潮屿的夏天只适合两件事：睡觉，以及不想睡时，找人说话。',
    next: 'c09-09',
  },
  {
    id: 'c09-07b',
    bg: 'bookstore-close',
    mood: 'intimate',
    expression: 'blush',
    text: '她愣了一下，随即转身走进小厨房。雾气很快模糊了她的侧影，锅铲碰撞的声音断断续续。',
    next: 'c09-08b',
  },
  {
    id: 'c09-08b',
    speaker: '林晚棠',
    expression: 'blush',
    text: '别指望太好吃。\n她把碗推到我面前，语气生硬，可那碗面咸淡刚刚好，分明是花了心思的。',
    next: 'c09-09',
  },
  {
    id: 'c09-07c',
    bg: 'bookstore-close',
    mood: 'cold',
    expression: 'hurt',
    text: '钞票按在吧台上，指节因为用力而发白。她把钱推给我时没抬头，动作干脆得像在完成一笔普通交易。',
    next: 'c09-08c',
  },
  {
    id: 'c09-08c',
    text: '「那就这样。」门关上时，风铃响得很轻，轻得不像是在挽留，倒像是在放行。这一晚，两人之间原本该有的热气，被这句话冻住了大半。',
    next: 'ch10',
  },
  {
    id: 'c09-09',
    text: '晚风带着咸湿的水汽拂过，把这一顿饭的暖意，酿得更浓了几分。',
    next: 'c09-10',
  },
  {
    id: 'c09-10',
    speaker: '沈屿',
    text: '你一个人在潮屿，晚饭都是这样解决的吗？',
    next: 'c09-11',
  },
  {
    id: 'c09-11',
    speaker: '林晚棠',
    expression: 'default',
    text: '大多数时候，是随便扒两口就算。\n一个人吃饭，讲究不起来——讲究也没人看。',
    next: 'c09-12',
  },
  {
    id: 'c09-12',
    text: '「没人看」三个字轻飘飘的，落进我心里却不轻——这十年，她大概吃过太多顿「讲究不起来」的饭。',
    next: 'c09-13',
  },
  {
    id: 'c09-13',
    choices: [
      {
        text: '「以后我看着。」',
        next: 'c09-13a',
        affection: 15,
        setFlag: 'promise_company',
      },
      {
        text: '「那今天，好好吃一顿。」',
        next: 'c09-13b',
        affection: 10,
      },
    ],
  },
  {
    id: 'c09-13a',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……你倒是敢说大话。\n话说出口了，就别想轻易收回去。',
    next: 'c09-14',
  },
  {
    id: 'c09-13b',
    speaker: '林晚棠',
    expression: 'tired',
    text: '嗯。今天……确实好好吃了一顿。\n她低头喝了一口汤，掩去嘴角那一点藏不住的笑意。',
    next: 'c09-14',
  },
  {
    id: 'c09-14',
    text: '碗见了底，两人却都没有起身的意思，像是想把这顿饭后难得的闲适，多留一会儿。',
    next: 'c09-15',
  },
  {
    id: 'c09-15',
    speaker: '林晚棠',
    text: '明天如果下雨，店里的灯还会亮。\n她忽然说了这么一句，没头没尾，像是在回答一个我还没问出口的问题。',
    next: 'c09-16',
  },
  {
    id: 'c09-16',
    text: '海风把她额发吹乱，她也没有去理，只是望着远处渐渐亮起的渔船灯火，神情松弛得像卸下了一整天的重量。',
    next: 'c09-17',
  },
  {
    id: 'c09-17',
    speaker: '沈屿',
    text: '灯亮着，是不是就代表可以进去？',
    next: 'c09-18',
  },
  {
    id: 'c09-18',
    speaker: '林晚棠',
    expression: 'laugh',
    text: '算是吧。\n至少，比敲玻璃砸门要体面得多。',
    next: 'c09-19',
  },
  {
    id: 'c09-19',
    text: '收摊回程的路上，粥摊老板追出来塞了两颗话梅糖，说是「熟客优惠」——虽然我们今晚是第一次光顾。',
    next: 'c09-20',
  },
  {
    id: 'c09-20',
    speaker: '林晚棠',
    expression: 'soft',
    text: '潮屿的人情就这样。\n认不认识不重要，看着顺眼，就当熟客处。',
    next: 'c09-21',
  },
  {
    id: 'c09-21',
    text: '她把话梅糖剥开一颗，含在嘴里，酸得皱了皱眉，随即又被自己这副样子逗笑，笑声很轻，却比这一整晚的潮声都清楚。',
    next: 'ch10',
  },
]
