import type { DialogueNode } from '../../../engine/types'

/**
 * 第41章 · 备用钥匙（小说级密度）
 * 入口：ch40 → ch41…
 * 出口：→ ch42
 */
export const chapter41: DialogueNode[] = [
  {
    id: 'ch41',
    chapter: 41,
    chapterTitle: '备用钥匙',
    bg: 'bookstore-close',
    mood: 'intimate',
    sprite: 'wantang',
    expression: 'default',
    cg: null,
    text: '【第41章】备用钥匙\n打烊后，晚棠从收银台最底下的抽屉里翻出一个用红绳系着的小铁圈，动作有点笨拙。',
    next: 'c41-01',
  },
  {
    id: 'c41-01',
    bg: 'wantang-room',
    text: '她把那东西攥在手心里转了两圈，像是在犹豫要不要真的把它递出去——这份犹豫，比她平时任何一次沉默都更明显。',
    next: 'c41-01b',
  },
  {
    id: 'c41-01b',
    text: '灯光落在她低垂的睫毛上，把她此刻的紧张照得清清楚楚——原来一向沉着的晚棠，也有会为一件小事踌躇的时候。',
    next: 'c41-02',
  },
  {
    id: 'c41-02',
    speaker: '林晚棠',
    expression: 'avert',
    text: '这个抽屉，我锁了三年。\n钥匙放在里面，不是没想过给谁，是没遇到值得的人。',
    next: 'c41-03',
  },
  {
    id: 'c41-03',
    text: '她终于把那枚钥匙推到我面前——一把普通的黄铜钥匙，边缘被摩挲得有点发亮，显然被她拿在手里反复端详过很多次。',
    next: 'c41-04',
  },
  {
    id: 'c41-04',
    speaker: '林晚棠',
    expression: 'surprised',
    text: '给你。潮声的备用钥匙。\n不是什么承诺——只是，台风那种夜里，别再让我听见你砸玻璃的声音。',
    next: 'c41-05',
  },
  {
    id: 'c41-05',
    text: '她说得轻描淡写，可眼神一直没离开我的手，像是在等我伸手接过——又像是怕我犹豫。',
    next: 'c41-06',
  },
  {
    id: 'c41-06',
    choices: [
      {
        text: '郑重地双手接过，收进贴身口袋',
        next: 'c41-07a',
        affection: 15,
        setFlag: 'got_key',
      },
      {
        text: '「你确定？」——先确认她是不是想清楚了',
        next: 'c41-07b',
        affection: 10,
        setFlag: 'got_key',
      },
      {
        text: '接过钥匙，顺手挂到自己的钥匙串上，语气轻松地打趣',
        next: 'c41-07c',
        affection: 10,
        setFlag: 'got_key',
      },
    ],
  },
  {
    id: 'c41-07a',
    text: '钥匙落进掌心的分量，比它本身的重量沉得多——像是接过了她十年来第一次，愿意把「进门权」交给一个人的信任。',
    next: 'c41-08',
  },
  {
    id: 'c41-08',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……用得着这么严肃吗。\n又不是要你娶我。',
    next: 'c41-09',
  },
  {
    id: 'c41-09',
    speaker: '沈屿',
    text: '严肃点，你才会信我不会弄丢它。',
    next: 'c41-10',
  },
  {
    id: 'c41-07b',
    speaker: '林晚棠',
    expression: 'avert',
    text: '不确定。\n但雨不会等我确定完，才决定下不下。有些东西，只能边给边确定。',
    next: 'c41-10b',
  },
  {
    id: 'c41-10b',
    speaker: '沈屿',
    text: '那我替你确定——我会好好用它。',
    next: 'c41-10',
  },
  {
    id: 'c41-07c',
    speaker: '林晚棠',
    expression: 'crossed',
    text: '……挂那么随便？\n多少给点仪式感，这是我这辈子第二把给出去的钥匙。',
    next: 'c41-08c',
  },
  {
    id: 'c41-08c',
    speaker: '沈屿',
    text: '第一把是给谁的？',
    next: 'c41-09c',
  },
  {
    id: 'c41-09c',
    speaker: '林晚棠',
    expression: 'soft',
    text: '我爸。\n他走后，这把就一直空着——直到现在。',
    next: 'c41-10',
  },
  {
    id: 'c41-10',
    text: '窗外夜色渐深，店里只留一盏昏黄的吧台灯。她靠在书架边，看着我把钥匙小心地收进贴身的口袋，神情说不出的复杂。',
    next: 'c41-11',
  },
  {
    id: 'c41-11',
    speaker: '林晚棠',
    expression: 'default',
    text: '这钥匙能开前门、后仓，还有二楼那扇总卡住的门——用力往左带一点才开得动，别硬拧，会断在锁芯里。',
    next: 'c41-12',
  },
  {
    id: 'c41-12',
    text: '她细致地讲解每一处机关，语气认真得像在交接一件传家的宝物，而不是一把铁皮钥匙。我忽然意识到，这份认真，本身就是她表达在意的方式。',
    next: 'c41-13',
  },
  {
    id: 'c41-13',
    speaker: '沈屿',
    text: '记住了。以后钥匙的事，你不用再操心。',
    next: 'c41-14',
  },
  {
    id: 'c41-14',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……钥匙的事是小事。\n真正的大事，是你别把「留下」这两个字，也弄丢了。',
    next: 'c41-15',
  },
  {
    id: 'c41-15',
    text: '这句话说得很轻，几乎被打烊后的静默吞掉，可它落进我心里的分量，比那把钥匙沉得多。',
    next: 'c41-16',
  },
  {
    id: 'c41-16',
    speaker: '沈屿',
    text: '弄丢东西，我这辈子好像只擅长弄丢一次。',
    next: 'c41-17',
  },
  {
    id: 'c41-17',
    speaker: '林晚棠',
    expression: 'laugh',
    text: '……那就一次够了。\n锁好门，早点睡——明天还要还我一个更像样的道歉，用行动。',
    next: 'c41-18',
  },
  {
    id: 'c41-18',
    text: '我关店门时，指尖触到口袋里那把钥匙的凉意，忽然觉得，这凉意比任何一句情话都更让人安心——它是真实的、可以随身带走的重量。',
    next: 'ch42',
  },
]
