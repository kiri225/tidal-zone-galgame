import type { DialogueNode } from '../../../engine/types'

/**
 * 第32章 · 靠得近一点（小说级密度）
 * 入口：ch31 → ch32…
 * 出口：→ ch33
 */
export const chapter32: DialogueNode[] = [
  {
    id: 'ch32',
    chapter: 32,
    chapterTitle: '靠得近一点',
    bg: 'bookstore',
    mood: 'intimate',
    sprite: 'wantang',
    expression: 'default',
    cg: null,
    text: '【第32章】靠得近一点\n毯子只有一条，双人份的暖意却要靠两具身体自己想办法。',
    next: 'c32-01',
  },
  {
    id: 'c32-01',
    text: '她把毯子摊开一半推向我，自己缩在另一半的边缘，中间留出一道刻意保持的空当——像书架上两本故意隔开的书。',
    next: 'c32-02',
  },
  {
    id: 'c32-02',
    speaker: '沈屿',
    text: '毯子够吗？',
    next: 'c32-03',
  },
  {
    id: 'c32-03',
    speaker: '林晚棠',
    expression: 'blush',
    text: '够。\n如果……靠得近一点的话。',
    next: 'c32-04',
  },
  {
    id: 'c32-04',
    text: '这句话说出口时，她自己先红了耳根，飞快地补了一句「地板凉，纯粹为了保暖」，像怕我误会，又像怕我不误会。',
    next: 'c32-05',
  },
  {
    id: 'c32-05',
    text: '雷声滚过屋顶，整栋楼都跟着轻轻震了一下。我往她那边挪近半尺，肩膀相触的瞬间，两人都僵住，谁也没有先挪开。',
    next: 'c32-06',
  },
  {
    id: 'c32-06',
    text: '她的体温比我想象中更烫——不是发烧的烫，是那种压抑了很久、终于被允许靠近的温度。',
    next: 'c32-07',
  },
  {
    id: 'c32-06b',
    text: '十年前我们隔着教室的两排课桌都不敢靠这么近，如今却因为一场台风，肩并着肩坐在同一块地板上——这个事实本身，比暴雨更让人晃神。',
    next: 'c32-07',
  },
  {
    id: 'c32-07',
    speaker: '林晚棠',
    expression: 'avert',
    text: '……你是不是长胖了。占地方。',
    next: 'c32-08',
  },
  {
    id: 'c32-08',
    speaker: '沈屿',
    text: '是你缩得太小。',
    next: 'c32-09',
  },
  {
    id: 'c32-09',
    text: '她轻哼一声，没再反驳，只是把毯子边角又往我这边拽了拽——这个动作和嘴上的话完全相反。',
    next: 'c32-10',
  },
  {
    id: 'c32-10',
    text: '她的头发有雨后纸页的气味，混着一点姜茶的辛甜。发梢扫过我的手臂，痒得像有人用羽毛写字。',
    next: 'c32-11',
  },
  {
    id: 'c32-10b',
    speaker: '沈屿',
    text: '你身上一直是这个味道——纸和雨。以前在教室后排，你路过我也能闻出来。',
    next: 'c32-10c',
  },
  {
    id: 'c32-10c',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……你居然记得这种没用的事。\n浪费脑容量。',
    next: 'c32-11',
  },
  {
    id: 'c32-11',
    choices: [
      {
        text: '把外套脱下来，垫在她坐的那侧地板上',
        next: 'c32-12a',
        affection: 10,
      },
      {
        text: '故意不说话，只是数着她的呼吸',
        next: 'c32-12b',
        affection: 5,
      },
      {
        text: '「你心跳很快。」——如实说出来',
        next: 'c32-12c',
        affection: 15,
        setFlag: 'notice_heartbeat',
      },
    ],
  },
  {
    id: 'c32-12a',
    speaker: '林晚棠',
    expression: 'tired',
    text: '……傻子。你自己也会冷。\n算了，谢了。',
    next: 'c32-13',
  },
  {
    id: 'c32-12b',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……你在数什么？\n别数。被你数着，更乱。',
    next: 'c32-13',
  },
  {
    id: 'c32-12c',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……那是雷声吓的。\n别自作多情——虽然，好像也没多情错。',
    next: 'c32-13',
  },
  {
    id: 'c32-13',
    text: '烛火忽明忽暗，把两人的影子投在书架上，叠成一个分不清彼此的形状。',
    next: 'c32-14',
  },
  {
    id: 'c32-14',
    speaker: '林晚棠',
    expression: 'default',
    text: '小时候台风天，我妈会把我塞进被窝里，说「捂住耳朵就听不见了」。\n……长大后才知道，捂住耳朵，心还是听得见。',
    next: 'c32-15',
  },
  {
    id: 'c32-15',
    text: '这句话像一把钥匙，悄悄拧开她一直锁着的某个抽屉。我没有接话，只是把肩膀又往她那边稳了稳，用沉默替她扛一点重量。',
    next: 'c32-16',
  },
  {
    id: 'c32-16',
    speaker: '沈屿',
    text: '我在。听得见也没关系。',
    next: 'c32-17',
  },
  {
    id: 'c32-17',
    text: '她没有回答，只是把脑袋很轻很轻地靠到我肩上——像怕重了会被这份靠近压碎。',
    next: 'c32-18',
  },
  {
    id: 'c32-18',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……就靠一下。\n雨太吵，我需要一个不会被吹走的东西。',
    next: 'c32-19',
  },
  {
    id: 'c32-19',
    text: '窗外的雨声渐渐从砸击变成一种绵长的白噪音。我数着她的呼吸——起初很急，慢慢地，慢了下来。',
    next: 'c32-19b',
  },
  {
    id: 'c32-19b',
    text: '一道闪电劈开窗帘的缝隙，紧接着是一声炸雷。她的手指猛地攥紧了我的袖口，几乎是本能地数起来——「一、二、三……」',
    next: 'c32-19c',
  },
  {
    id: 'c32-19c',
    speaker: '沈屿',
    text: '四、五。\n雷到了，可我还在。这次不用数了。',
    next: 'c32-20',
  },
  {
    id: 'c32-20',
    speaker: '林晚棠',
    expression: 'avert',
    text: '……嘴真甜，什么时候学的。\n别数。\n被你数着，更乱。',
    next: 'c32-end-cg',
  },
  {
    id: 'c32-end-cg',
    cg: 'ch32-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n外套垫着的那侧地板。这一章的潮位退下去时，她还留在岸上。',
    next: 'ch33',
  },
]
