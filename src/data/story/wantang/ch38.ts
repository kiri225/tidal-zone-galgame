import type { DialogueNode } from '../../../engine/types'

/**
 * 第38章 · 潮间带（小说级密度）
 * 入口：ch37 → ch38…
 * 出口：→ ch39
 */
export const chapter38: DialogueNode[] = [
  {
    id: 'ch38',
    chapter: 38,
    chapterTitle: '潮间带',
    bg: 'tide-pools',
    mood: 'cold',
    sprite: 'wantang',
    expression: 'cardigan',
    cg: null,
    text: '【第38章】潮间带\n她带着我沿海岸线又走了一段，在一片裸露的礁石滩前停下——那是退潮才会显形的地方。',
    next: 'c38-01',
  },
  {
    id: 'c38-01',
    bg: 'tide-pools',
    text: '石缝里藏着藤壶、寄居蟹，和几汪困住了小鱼的浅水洼。涨潮时，这里会被彻底淹没；退潮时，才露出它真正的模样。',
    next: 'c38-01b',
  },
  {
    id: 'c38-01b',
    text: '晚棠踩着礁石往里走了几步，动作熟练得像走自家后院——鞋跟早就沾满了细沙，她却毫不在意。',
    next: 'c38-02',
  },
  {
    id: 'c38-02',
    speaker: '林晚棠',
    expression: 'tired',
    text: '这里叫潮间带。\n涨潮时被淹没，退潮时才露出真模样——有点像人。',
    next: 'c38-03',
  },
  {
    id: 'c38-03',
    text: '她蹲下身，指尖点了点一只缩在石缝里的寄居蟹，动作轻得像怕惊扰了什么脆弱的秘密。',
    next: 'c38-04',
  },
  {
    id: 'c38-04',
    speaker: '林晚棠',
    expression: 'default',
    text: '你看这只寄居蟹。壳不是它的，是捡来的。\n可它照样把日子过得像那是它自己的家。',
    next: 'c38-05',
  },
  {
    id: 'c38-05',
    speaker: '沈屿',
    text: '你在说它，还是在说潮声书店？',
    next: 'c38-06',
  },
  {
    id: 'c38-06',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……被你看穿了。\n是，也不全是。',
    next: 'c38-07',
  },
  {
    id: 'c38-07',
    text: '海风吹散她接下来那句话的一半，剩下的字被浪声吞掉。她没有再重复，只是望着渐渐后退的水线，神情安静得像在等待什么。',
    next: 'c38-07b',
  },
  {
    id: 'c38-07b',
    speaker: '林晚棠',
    expression: 'default',
    text: '涨潮的时候，这些石头看起来都一样，什么都藏得住。\n只有肯等到水退下去的人，才会知道，哪块石头下面，其实是空的。',
    next: 'c38-08',
  },
  {
    id: 'c38-08',
    text: '她不问我卖不卖铺子——这份克制，比任何逼问都更让我意识到，她其实很想问，只是把这份想要，也一并藏进了退潮才露出的礁石缝里。',
    next: 'c38-09',
  },
  {
    id: 'c38-09',
    choices: [
      {
        text: '「那我是哪一种潮？」——顺着她的比喻问下去',
        next: 'c38-10a',
        affection: 10,
      },
      {
        text: '握住她的手，不说话，只是一起看水线后退',
        next: 'c38-10b',
        affection: 15,
        setFlag: 'dawn_hold',
      },
      {
        text: '「你怕的，到底是我涨潮时的样子，还是退潮时的？」——追问核心',
        next: 'c38-10c',
        affection: 10,
      },
    ],
  },
  {
    id: 'c38-10a',
    speaker: '林晚棠',
    expression: 'smile',
    text: '你自己选。\n别问观察员——观察员只负责记录，不负责定义。',
    next: 'c38-11',
  },
  {
    id: 'c38-10b',
    text: '她的手指回扣过来，握得很紧。潮声很大，可两人相扣的心跳，比潮声更大。',
    next: 'c38-11',
  },
  {
    id: 'c38-10c',
    speaker: '林晚棠',
    expression: 'teary',
    text: '……怕退潮时的你。\n涨潮时的靠近谁都会，退潮时还愿意留下来看真相的人，太少了。',
    next: 'c38-11',
  },
  {
    id: 'c38-11',
    text: '一只浪打上来，没过脚踝，凉得让人一激灵。她笑着往我这边躲了一下，肩膀撞上我的手臂。',
    next: 'c38-12',
  },
  {
    id: 'c38-12',
    speaker: '林晚棠',
    expression: 'soft',
    text: '这片滩，我小时候常来。\n我爸说，学会看潮汐表的人，才算真正的潮屿人——什么时候涨，什么时候退，心里要有数。',
    next: 'c38-13',
  },
  {
    id: 'c38-13',
    speaker: '沈屿',
    text: '那我现在，心里有数吗？',
    next: 'c38-14',
  },
  {
    id: 'c38-14',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……还差一点。\n但比十年前，好太多了。',
    next: 'c38-14b',
  },
  {
    id: 'c38-14b',
    speaker: '沈屿',
    text: '那就再练。反正——我不打算只学一次潮汐表就走。',
    next: 'c38-14c',
  },
  {
    id: 'c38-14c',
    speaker: '林晚棠',
    expression: 'surprised',
    text: '……行。那我天天考你。',
    next: 'c38-15',
  },
  {
    id: 'c38-15',
    text: '太阳完全升起，把整片潮间带照得清清楚楚——石头、藤壶、寄居蟹，还有两个人交叠的影子，一起被拉得很长。',
    next: 'c38-15b',
  },
  {
    id: 'c38-15b',
    text: '一只早起的白鹭从礁石上振翅飞起，掠过水面，翅尖点碎了一片碎金似的反光。',
    next: 'c38-16',
  },
  {
    id: 'c38-16',
    text: '晚棠站起身，拍了拍膝盖上的沙，望向镇子的方向，语气忽然带上一点现实的沉重。',
    next: 'c38-17',
  },
  {
    id: 'c38-17',
    speaker: '林晚棠',
    expression: 'default',
    text: '该回去了。\n台风过后，店里、铺子，都有一堆烂摊子等着收拾——温柔的清晨，也不能当饭吃。',
    next: 'c38-18',
  },
  {
    id: 'c38-18',
    text: '我们并肩往回走，脚印一路留在退潮后的湿沙上，很快又会被下一次涨潮抹去——可这一次，我不再害怕这种消失。',
    next: 'c38-end-cg',
  },
  {
    id: 'c38-end-cg',
    cg: 'ch38-end',
    sprite: null,
    mood: 'intimate',
    text: '【CG · 章末】\n礁石上并肩的影子。这一章的潮位退下去时，她还留在岸上。',
    next: 'ch39',
  },
]
