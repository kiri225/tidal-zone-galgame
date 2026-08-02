import type { DialogueNode } from '../../../engine/types'

/**
 * 第27章 · 和解的盐
 * 苏晴岚线 · 模板已清理
 */
export const chapter27: DialogueNode[] = [
  {
    id: 'ch27',
    chapter: 27,
    chapterTitle: '和解的盐',
    bg: 'street-rain',
    mood: 'rain',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第27章】和解的盐\n雨棚下，我追上去。她站在细雨里，没有撑伞。',
    next: 'c27-01',
  },
  {
    id: 'c27-01',
    speaker: '沈屿',
    text: '对不起。不是模板——是我真的怕留下又离开，伤到你。',
    next: 'c27-02',
  },
  {
    id: 'c27-02',
    sprite: 'qinglan',
    expression: 'teary',
    speaker: '苏晴岚',
    text: '……那就别把怕，包装成聪明。',
    next: 'c27-03',
  },
  {
    id: 'c27-03',
    sprite: 'qinglan',
    text: '她把盐汽水塞进我手里，指尖冰凉。',
    next: 'c27-abranch',
  },
  {
    id: 'c27-abranch',
    affectionBranch: { threshold: 45, whenMet: 'c27-cg', whenNot: 'c27-aftercg' },
  },
  {
    id: 'c27-cg',
    bg: 'street-rain',
    mood: 'intimate',
    sprite: null,
    cg: 'salt_ql',
    text: '【CG · 和解的盐】\n雨棚下汽水开瓶，泡沫溢出。她靠着柱子笑了一下——很浅，却是真的。咸的不止汽水，还有刚退下去的怒意。',
    next: 'c27-aftercg',
    unlockCg: 'salt_ql',
  },
  {
    id: 'c27-aftercg',
    sprite: 'qinglan',
    expression: 'soft',
    cg: null,
    text: '灯还亮着。有些画面已经发生，有些还差一个潮位。',
    next: 'c27-choice',
  },
  {
    id: 'c27-choice',
    choices: [
      {
        text: '「我留下来想清楚。」——给出方向',
        next: 'c27-r0',
        affection: 15,
        setFlag: 'hesitate_sell',
      },
      {
        text: '「先喝完这瓶。」——缓和',
        next: 'c27-r1',
        affection: 10,
      },
    ],
  },
  {
    id: 'c27-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '雨变小。她抬手替我拭掉额角水珠，动作短促，像一次未申报的温柔。',
    next: 'c27-end',
  },
  {
    id: 'c27-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '泡沫溢出来。她靠着柱子，浅浅笑了一下：「咸的。跟刚才的气一样。喝完再说。」',
    next: 'c27-end',
  },
  {
    id: 'c27-end',
    mood: 'rain',
    text: '雨变小。她抬手拭掉我额角水珠，动作短促，像一次未申报的温柔——和解的盐。',
    next: 'c27-end-cg',
  },
  {
    id: 'c27-end-cg',
    cg: 'ql-ch27-end',
    sprite: null,
    mood: 'rain',
    text: '【CG · 章末】\n雨棚下泡沫溢出的和解。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch28',
  },
]
