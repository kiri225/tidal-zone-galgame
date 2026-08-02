import type { DialogueNode } from '../../../engine/types'

/**
 * 第4章 · 二楼迷宫（小说级密度）
 * 入口：← ch03
 * 出口：→ ch05
 */
export const chapter04: DialogueNode[] = [
  {
    id: 'ch04',
    chapter: 4,
    chapterTitle: '二楼迷宫',
    bg: 'bookstore-loft',
    mood: 'warm',
    sprite: 'wantang',
    expression: 'default',
    cg: null,
    text: '【第4章】二楼迷宫\n第二天下午，潮声的二楼像一座纸做的迷宫——纸箱叠得比人高，走道窄得只容一人侧身。',
    next: 'c04-01',
  },
  {
    id: 'c04-01',
    text: '木地板吱呀作响，每一步都惊起一小片浮尘。窗是老式的推窗，缝隙里漏进海风与蝉声，混在一起，像一段没调准的录音带。',
    next: 'c04-02',
  },
  {
    id: 'c04-02',
    text: '纸箱上写着年代与作者，字迹一丝不苟——像她这个人。有的箱子贴了三层胶带，仿佛怕里面的东西逃跑。',
    next: 'c04-03',
  },
  {
    id: 'c04-03',
    speaker: '林晚棠',
    expression: 'default',
    text: '诗集放低一点，客人总爱蹲着翻。\n小说按姓氏，别把初版和普及版混了——差价能吵起来。',
    next: 'c04-04',
  },
  {
    id: 'c04-04',
    speaker: '沈屿',
    text: '你还是那么讲究。',
    next: 'c04-05',
  },
  {
    id: 'c04-05',
    speaker: '林晚棠',
    expression: 'crossed',
    text: '书不会离开我。\n人会。所以我对书，更负责一点。',
    next: 'c04-06',
  },
  {
    id: 'c04-06',
    text: '这句话说得云淡风轻，落进我耳朵里却像一记轻轻的耳光——不疼，却让人清醒了一瞬。',
    next: 'c04-07',
  },
  {
    id: 'c04-07',
    text: '我们分头搬箱子。她走在前面探路，我跟在后面，两人之间隔着的，是一整座随时会倾塌的纸墙。',
    next: 'c04-08',
  },
  {
    id: 'c04-08',
    text: '拐角处堆得最挤，她侧身让我先过，指尖不经意扫过我手背——两人都像被烫到，各自缩回半寸。',
    next: 'c04-09',
  },
  {
    id: 'c04-09',
    choices: [
      {
        text: '若无其事地继续搬箱子',
        next: 'c04-09a',
        affection: 5,
      },
      {
        text: '「抱歉。」——主动说破那一下触碰',
        next: 'c04-09b',
        affection: 10,
        setFlag: 'acknowledge_touch',
      },
      {
        text: '开玩笑：「这迷宫是不是故意设计得这么窄？」',
        next: 'c04-09c',
        affection: 10,
      },
    ],
  },
  {
    id: 'c04-09a',
    text: '她也没再提，只是接下来的几步，两人默契地拉开了一点距离——像两条终于学会避让的潮线。',
    next: 'c04-10',
  },
  {
    id: 'c04-09b',
    speaker: '林晚棠',
    expression: 'avert',
    text: '……没什么好抱歉的。地方本来就窄。\n她说完却先走开了两步，比刚才快一些。',
    next: 'c04-10',
  },
  {
    id: 'c04-09c',
    speaker: '林晚棠',
    expression: 'laugh',
    text: '是啊。专门用来考验不老实的人。\n她难得顺着我的玩笑接了一句，尾音却软了。',
    next: 'c04-10',
  },
  {
    id: 'c04-10',
    text: '往深处走，箱子越来越旧，标签的墨迹也越来越淡。最里侧那排，落着比别处更厚的灰。',
    next: 'c04-11',
  },
  {
    id: 'c04-11',
    speaker: '林晚棠',
    expression: 'book',
    text: '那几箱是老货，进店前就有的。\n我爸——你店里那位老爷子——以前常来这翻。',
    next: 'c04-12',
  },
  {
    id: 'c04-12',
    speaker: '沈屿',
    text: '我父亲常来这儿？',
    next: 'c04-13',
  },
  {
    id: 'c04-13',
    speaker: '林晚棠',
    expression: 'surprised',
    text: '每周三下午，雷打不动。\n他说，拾潮太吵，书店安静，适合发呆。',
    next: 'c04-14',
  },
  {
    id: 'c04-14',
    text: '「适合发呆」四个字，听起来完全不像我认识的那个沉默寡言的男人。可细想一下，又完全像。',
    next: 'c04-15',
  },
  {
    id: 'c04-15',
    choices: [
      {
        text: '「他都看些什么？」——想多了解父亲一点',
        next: 'c04-15a',
        affection: 10,
        setFlag: 'ask_father_reads',
      },
      {
        text: '「谢谢你告诉我这些。」——静静感激',
        next: 'c04-15b',
        affection: 10,
      },
      {
        text: '沉默着继续搬箱子，没接话',
        next: 'c04-15c',
        affection: 0,
      },
    ],
  },
  {
    id: 'c04-15a',
    speaker: '林晚棠',
    expression: 'soft',
    text: '航海笔记，还有几本旧诗集。\n有一次他问我，「屿」这个字，是不是取自潮间带的小岛。',
    next: 'c04-16',
  },
  {
    id: 'c04-15b',
    speaker: '林晚棠',
    expression: 'default',
    text: '不用谢。\n本来就该有人替你记得这些细节。',
    next: 'c04-16',
  },
  {
    id: 'c04-15c',
    text: '她也没再追问，只是把那几箱老货放到了最容易拿到的位置——像是替我，也替某个不在场的人，留了一条近路。',
    next: 'c04-16',
  },
  {
    id: 'c04-16',
    text: '木梯忽然吱呀一声，比刚才更响。窗外有卖鱼的喊声，又被潮风揉碎，飘得七零八落。',
    next: 'c04-17',
  },
  {
    id: 'c04-17',
    text: '我们一时都不再说话，只听纸页摩擦的细响，和彼此刻意放轻的呼吸。灰尘在光柱里，缓缓地转着圈。',
    next: 'c04-18',
  },
  {
    id: 'c04-18',
    speaker: '林晚棠',
    text: '小心脚下，靠窗那块地板软。之前塌过一次，摔的是我。',
    next: 'c04-19',
  },
  {
    id: 'c04-19',
    speaker: '沈屿',
    text: '你没事吧？',
    next: 'c04-20',
  },
  {
    id: 'c04-20',
    speaker: '林晚棠',
    expression: 'default',
    text: '事是没事，就是那天摔得书比人惨。\n她说得云淡风轻，可我注意到，她下意识避开了那块地板，连脚步都绕了一下。',
    next: 'c04-21',
  },
  {
    id: 'c04-21',
    choices: [
      {
        text: '走过去，站到软地板那侧，替她挡着',
        next: 'c04-21a',
        affection: 15,
        setFlag: 'protect_floor',
      },
      {
        text: '提醒她小心一点，各自留意',
        next: 'c04-21b',
        affection: 5,
      },
    ],
  },
  {
    id: 'c04-21a',
    text: '我走到那块地板前，用脚试了试，确认承重没问题，才示意她把箱子递过来。晚棠愣了一下，才把箱子递给我，没说话，眼神却软了一点。',
    next: 'c04-22',
  },
  {
    id: 'c04-21b',
    speaker: '林晚棠',
    expression: 'avert',
    text: '知道了知道了，我又不是三岁小孩。\n嘴上这么说，脚步却比刚才更留意了几分。',
    next: 'c04-22',
  },
  {
    id: 'c04-22',
    text: '搬完最后一箱，天色已经从金黄转向浅灰。窗外的蝉声渐渐稀疏，像谁把音量慢慢拧小。',
    next: 'c04-23',
  },
  {
    id: 'c04-23',
    speaker: '林晚棠',
    expression: 'tired',
    text: '二楼今天算清干净了。\n剩下那排最里面的，我自己慢慢弄——你不用都陪着。',
    next: 'c04-24',
  },
  {
    id: 'c04-24',
    speaker: '沈屿',
    text: '我不介意陪着。',
    next: 'c04-25',
  },
  {
    id: 'c04-25',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……我介意。\n有些箱子，我想一个人拆。',
    next: 'c04-26',
  },
  {
    id: 'c04-26',
    text: '她说这话时避开了我的视线，望向那排积灰最厚的箱子——像是那里面，藏着她还没准备好分享的东西。',
    next: 'c04-27',
  },
  {
    id: 'c04-27',
    text: '下楼时，木梯的吱呀声送我们一路。走到最后一级，晚棠忽然停下脚步，回头看了眼二楼的暗处，又很快转身。',
    next: 'ch05',
  },
]
