import type { DialogueNode } from '../../../engine/types'

/**
 * 第37章 · 黎明（小说级密度）
 * 入口：ch34（intimate_delay）/ ch35（lite）/ ch36（完整成人向）三条路径在此汇合
 * 出口：→ ch38
 */
export const chapter37: DialogueNode[] = [
  {
    id: 'ch37',
    chapter: 37,
    chapterTitle: '黎明',
    bg: 'seaside-dawn',
    mood: 'cold',
    sprite: 'wantang',
    expression: 'default',
    cg: null,
    text: '【第37章】黎明\n雨停在黎明之前，像是被这一整夜耗尽了力气。世界重新变得安静，安静得能听见彼此的心跳。',
    next: 'c37-01',
  },
  {
    id: 'c37-01',
    bg: 'tide-pools',
    mood: 'cold',
    sprite: 'wantang',
    expression: 'soft',
    text: '天光是一种很淡的青色，像被水泡过的墨。我们没有约定，却都不约而同地走出了店门，往海边去。',
    next: 'c37-02',
  },
  {
    id: 'c37-02',
    text: '台风过境后的沙滩一片狼藉——断枝、海藻、被冲上岸的贝壳，像一场大病之后留下的痕迹。可空气却出奇地干净，带着一点咸腥的甜。',
    next: 'c37-03',
  },
  {
    id: 'c37-03',
    text: '晚棠赤脚踩进湿沙里，脚印很快被后面涌上来的浪抹平，仿佛这个世界不允许她留下任何一点犹豫的痕迹。',
    next: 'c37-04',
  },
  {
    id: 'c37-04',
    speaker: '林晚棠',
    expression: 'surprised',
    text: '你看，潮水一夜之间，把整片岸都重新洗了一遍。\n昨晚那么闹，今早却什么都不剩——除了我们。',
    next: 'c37-05',
  },
  {
    id: 'c37-05',
    text: '她的肩膀轻轻靠了过来，没有说话，也不需要说话——这个动作本身，就像是把昨夜发生的一切，妥帖地折好，收进了今天。',
    next: 'c37-06',
  },
  {
    id: 'c37-06',
    speaker: '沈屿',
    text: '睡好了？',
    next: 'c37-07',
  },
  {
    id: 'c37-07',
    speaker: '林晚棠',
    expression: 'blush',
    text: '没怎么睡。\n……但不困。像是被抽走了什么很重的东西，反而轻了。',
    next: 'c37-08',
  },
  {
    id: 'c37-08',
    text: '远处渔船陆续出港，马达声低低地滚过海面。几只被台风逼得躲进内陆的海鸟，正成群结队地飞回礁石上。',
    next: 'c37-08b',
  },
  {
    id: 'c37-08b',
    text: '晚棠仰起脸，任海风把她的头发吹得凌乱。她闭着眼，像是在把这场台风、这一夜，连同这片清晨的海，一并深深吸进肺里。',
    next: 'c37-09',
  },
  {
    id: 'c37-09',
    choices: [
      {
        text: '「后悔吗？」——认真地问出这个问题',
        next: 'c37-10a',
        affection: 5,
      },
      {
        text: '什么都不问，只是把外套披在她肩上',
        next: 'c37-10b',
        affection: 15,
        setFlag: 'dawn_coat',
      },
      {
        text: '「以后……台风天我都陪你。」——先把话说死',
        next: 'c37-10c',
        affection: 10,
      },
    ],
  },
  {
    id: 'c37-10a',
    speaker: '林晚棠',
    expression: 'crossed',
    text: '你问这个，才让我有点后悔。\n——开玩笑的。不后悔。一点都不。',
    next: 'c37-11',
  },
  {
    id: 'c37-10b',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……你这人，什么都不问，比问了更让人心软。\n谢了。',
    next: 'c37-11',
  },
  {
    id: 'c37-10c',
    speaker: '林晚棠',
    expression: 'laugh',
    text: '话说太满，小心兑现不了。\n……但姑且，先记你这个账。',
    next: 'c37-11',
  },
  {
    id: 'c37-11',
    text: '海浪一层层涌上来，又退回去，把沙滩上两串脚印冲得若隐若现。她忽然弯腰，从水里捡起一块被磨得圆润的海玻璃。',
    next: 'c37-12',
  },
  {
    id: 'c37-12',
    speaker: '林晚棠',
    expression: 'book',
    text: '你父亲以前总来捡这种东西。\n他说，玻璃碎片被海磨够了年头，就不再割手了——会变成别的东西。',
    next: 'c37-13',
  },
  {
    id: 'c37-13',
    text: '她把那块海玻璃塞进我手心，凉凉的，圆润的边角贴着掌纹，像是接过了一段我一直没能好好告别的重量。',
    next: 'c37-14',
  },
  {
    id: 'c37-14',
    speaker: '沈屿',
    text: '谢谢。这块，我留着。',
    next: 'c37-15',
  },
  {
    id: 'c37-15',
    text: '太阳终于从海平线上探出一点边缘，把整片被台风蹂躏过的海面，染成一种温柔得不像话的金色。',
    next: 'c37-15b',
  },
  {
    id: 'c37-15b',
    speaker: '沈屿',
    text: '好看。',
    next: 'c37-15c',
  },
  {
    id: 'c37-15c',
    speaker: '林晚棠',
    expression: 'laugh',
    text: '说的是海，还是我？',
    next: 'c37-15d',
  },
  {
    id: 'c37-15d',
    speaker: '沈屿',
    text: '两个都是。',
    next: 'c37-16',
  },
  {
    id: 'c37-16',
    speaker: '林晚棠',
    expression: 'soft',
    text: '沈屿。\n昨晚之后，你还打算卖铺子吗？我想听你现在的答案，不急，但我想听。',
    next: 'c37-17',
  },
  {
    id: 'c37-17',
    text: '这个问题她问得很轻，可分量很重——像是把整个黎明，都当成了提问的场地，逼着彼此都拿出真心。',
    next: 'c37-18',
  },
  {
    id: 'c37-18',
    speaker: '沈屿',
    text: '还没想好细节。但有一件事，我很确定了。',
    next: 'c37-19',
  },
  {
    id: 'c37-19',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……什么事？',
    next: 'c37-20',
  },
  {
    id: 'c37-20',
    speaker: '沈屿',
    text: '我不想再对你，说一句需要十年才能兑现的话。',
    next: 'c37-21',
  },
  {
    id: 'c37-21',
    text: '她怔了一下，随即别过脸去看海，睫毛却抖得比海风更急。良久，她才低低地「嗯」了一声，像是把这句话，稳稳地收进了心里。',
    next: 'ch38',
  },
]
