import type { DialogueNode } from '../../../engine/types'

/**
 * 第7章 · 大麦茶（小说级密度）
 * 入口：← ch06
 * 出口：→ ch08
 */
export const chapter07: DialogueNode[] = [
  {
    id: 'ch07',
    chapter: 7,
    chapterTitle: '大麦茶',
    bg: 'bookstore',
    mood: 'warm',
    sprite: 'wantang',
    expression: 'default',
    cg: null,
    text: '【第7章】大麦茶\n搬到黄昏，两人都出了一身汗。晚棠从冰箱里取出一壶冰镇大麦茶，倒了两杯。',
    next: 'c07-01',
  },
  {
    id: 'c07-01',
    text: '夕光斜斜切过吧台，把浮尘照成细金，也把玻璃杯里的茶水染成一种温暖的琥珀色。',
    next: 'c07-02',
  },
  {
    id: 'c07-02',
    speaker: '林晚棠',
    expression: 'tired',
    text: '谢了，今天搬得比预期快。\n工资晚上结——或者，用一顿晚饭抵，你选。',
    next: 'c07-03',
  },
  {
    id: 'c07-03',
    text: '远处传来一声悠长的船笛，被晚风揉碎在半空。茶入口很苦，后味却泛起一丝回甘，像今天所有没说破的句子。',
    next: 'c07-04',
  },
  {
    id: 'c07-04',
    speaker: '沈屿',
    text: '大麦茶，你什么时候学会煮的？',
    next: 'c07-05',
  },
  {
    id: 'c07-05',
    speaker: '林晚棠',
    expression: 'default',
    text: '开店第一年。\n那时候客人少，闲得只能研究怎么把免费的茶水，煮得让人愿意多坐一会儿。',
    next: 'c07-06',
  },
  {
    id: 'c07-06',
    text: '她说这话时，眼神落在窗外渐暗的街道，像是想起了那段独自撑起一间店的、安静又漫长的时光。',
    next: 'c07-07',
  },
  {
    id: 'c07-07',
    choices: [
      {
        text: '「那时候，有没有想过我会回来？」',
        next: 'c07-07a',
        affection: 10,
        setFlag: 'ask_expect_return',
      },
      {
        text: '「一个人撑店，辛苦吗？」——关心她',
        next: 'c07-07b',
        affection: 15,
        setFlag: 'care_hardship',
      },
      {
        text: '只是安静地喝茶，不追问',
        next: 'c07-07c',
        affection: 5,
      },
    ],
  },
  {
    id: 'c07-07a',
    speaker: '林晚棠',
    expression: 'avert',
    text: '想过，又不敢想。\n想多了，日子会过得像在等一封永远不会来的信。',
    next: 'c07-08',
  },
  {
    id: 'c07-07b',
    speaker: '林晚棠',
    expression: 'soft',
    text: '辛苦是辛苦。\n但辛苦有个好处——忙起来，就没空想那些没用的事。',
    next: 'c07-08',
  },
  {
    id: 'c07-07c',
    text: '她也没多说什么，只是把杯子往我这边推了推，像是用这个小动作，代替了一句没说出口的谢谢。',
    next: 'c07-08',
  },
  {
    id: 'c07-08',
    text: '风铃忽然轻响，一个熟悉的身影探进头来又缩回——是那位常来的老邮差，隔着玻璃冲晚棠挥了挥手，没有进来。',
    next: 'c07-09',
  },
  {
    id: 'c07-09',
    speaker: '林晚棠',
    text: '老陈。这镇上还在送信的人，只剩他一个了。',
    next: 'c07-10',
  },
  {
    id: 'c07-10',
    speaker: '沈屿',
    text: '你以前是不是……给我寄过信？',
    next: 'c07-11',
  },
  {
    id: 'c07-11',
    text: '这句话一出口，晚棠端杯子的手顿了一下，茶水晃出一圈细小的涟漪。',
    next: 'c07-12',
  },
  {
    id: 'c07-12',
    speaker: '林晚棠',
    expression: 'teary',
    text: '……写过。没寄。\n地址换了三次，我总跟不上你搬家的速度，后来就懒得追了。',
    next: 'c07-13',
  },
  {
    id: 'c07-13',
    text: '「懒得追」三个字说得云淡风轻，可我却听出了另一层意思——不是懒，是怕追上了，又被落下一次。',
    next: 'c07-14',
  },
  {
    id: 'c07-14',
    choices: [
      {
        text: '「如果当年寄到了，我一定会回信。」',
        next: 'c07-14a',
        affection: 10,
        setFlag: 'would_have_replied',
      },
      {
        text: '「现在也不晚，想说的可以直接说。」',
        next: 'c07-14b',
        affection: 15,
        setFlag: 'say_now',
      },
    ],
  },
  {
    id: 'c07-14a',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……你倒是敢打包票。\n信这种东西，一旦错过时机，回不回都不重要了。',
    next: 'c07-15',
  },
  {
    id: 'c07-14b',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……现在说，未免太随便了。\n至少，得配一壶更好喝的茶。',
    next: 'c07-15',
  },
  {
    id: 'c07-15',
    text: '她说着又给我续了半杯，动作比刚才自然了一点，像是把方才那阵沉重，悄悄兑进了茶水里稀释掉。',
    next: 'c07-16',
  },
  {
    id: 'c07-16',
    text: '暮色一点点漫进店里，把书架的轮廓染成深蓝。她起身去点亮吧台的暖灯，橙黄的光晕一下子把整间店裹得更暖了。',
    next: 'c07-17',
  },
  {
    id: 'c07-17',
    speaker: '林晚棠',
    expression: 'surprised',
    text: '每天这个点，我最喜欢。\n忙完一天，灯一亮，好像什么都可以重新开始。',
    next: 'c07-18',
  },
  {
    id: 'c07-18',
    text: '她靠在书架旁，端着那杯没喝完的大麦茶，眼神第一次带着一种毫无防备的松弛——像退潮后终于晒暖的礁石。',
    next: 'c07-19',
  },
  {
    id: 'c07-19',
    text: '船笛又响了一声，比先前更近。潮声混着蝉鸣，从半开的窗缝里涌进来，把这间小店泡得又暖又软。',
    next: 'c07-20',
  },
  {
    id: 'c07-20',
    text: '吧台后面挂着一张泛黄的合照，边角卷起——是几个店员和常客的合影，角落里有一道模糊的侧影，被人用红笔轻轻圈了一下。',
    next: 'c07-21',
  },
  {
    id: 'c07-21',
    speaker: '沈屿',
    text: '那张照片里，被圈起来的人是谁？',
    next: 'c07-22',
  },
  {
    id: 'c07-22',
    speaker: '林晚棠',
    expression: 'avert',
    text: '……路过的客人。\n圈起来，是提醒自己别把找零算错。',
    next: 'c07-23',
  },
  {
    id: 'c07-23',
    text: '她的解释干脆得不像真话，可我没有拆穿——有些谎言，是留给彼此一点体面的余地。',
    next: 'c07-24',
  },
  {
    id: 'c07-24',
    choices: [
      {
        text: '再多留一会儿，陪她喝完这壶茶',
        next: 'c07-24a',
        affection: 10,
        setFlag: 'stay_longer',
      },
      {
        text: '主动帮她把打烊前的杂事收尾',
        next: 'c07-24b',
        affection: 10,
      },
    ],
  },
  {
    id: 'c07-24a',
    speaker: '林晚棠',
    expression: 'smile',
    text: '难得你不急着走。\n那就再坐会儿——反正茶还有半壶。',
    next: 'c07-25',
  },
  {
    id: 'c07-24b',
    speaker: '林晚棠',
    expression: 'soft',
    text: '……手脚倒是勤快。\n算了，破例让你多留十分钟当报酬。',
    next: 'c07-25',
  },
  {
    id: 'c07-25',
    text: '夕光一点点沉入海平线，天色从橙红转向靛蓝。吧台灯的暖光，成了这间店此刻唯一的白昼。',
    next: 'c07-26',
  },
  {
    id: 'c07-26',
    text: '晚棠把最后一口茶喝完，抬眼看向我，眼神里有种她自己大概都没察觉的、久违的松弛。',
    next: 'ch08',
  },
]
