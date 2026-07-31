import type { DialogueNode } from '../../../engine/types'

/**
 * 第48章 · 潮声的门（小说级密度）
 * 入口：ch44（不留下）/ ch47（留下）两条路径在此汇合
 * 出口：→ ch49
 */
export const chapter48: DialogueNode[] = [
  {
    id: 'ch48',
    chapter: 48,
    chapterTitle: '潮声的门',
    bg: 'bookstore',
    mood: 'warm',
    sprite: 'wantang',
    expression: 'default',
    cg: null,
    text: '【第48章】潮声的门',
    next: 'c48-gate',
  },
  {
    id: 'c48-gate',
    branch: { flag: 'stay', whenTrue: 'c48-stay-01', whenFalse: 'c48-leave-01' },
  },
  {
    id: 'c48-stay-01',
    text: '「不卖了」这三个字，晚棠翻来覆去看了很多遍，才终于回了一句「知道了」——简短得像她惯常的风格，可我知道，这三个字底下藏着的分量。',
    next: 'c48-stay-02',
  },
  {
    id: 'c48-stay-02',
    text: '傍晚我到潮声，她已经把吧台重新擦了一遍，桌上多摆了一张椅子——像是提前替我留好了位置。',
    next: 'c48-stay-03',
  },
  {
    id: 'c48-stay-03',
    speaker: '林晚棠',
    expression: 'soft',
    text: '以后不管你怎么选——反正现在已经选了——我都会在潮声。\n门开着。灯也开着。这两句话，我以前只对我爸说过。',
    next: 'c48-stay-04',
  },
  {
    id: 'c48-stay-04',
    text: '这句话落地时，风铃轻轻响了一声，像是给这份郑重，加了一道无声的注脚。',
    next: 'c48-stay-05',
  },
  {
    id: 'c48-stay-05',
    speaker: '沈屿',
    text: '那我以后，是不是也算半个「潮声」的人了？',
    next: 'c48-stay-06',
  },
  {
    id: 'c48-stay-06',
    speaker: '林晚棠',
    expression: 'smile',
    text: '算。\n不过工资照旧按时薪算——包水，不包饭。规矩不能因为关系变了就作废。',
    next: 'c48-common-01',
  },
  {
    id: 'c48-leave-01',
    text: '那句「祝你在城市里，也能听见潮声」说出口后的几天，晚棠对我的态度并没有明显的冷淡——她只是把我们之间，悄悄调回了雇佣关系刚开始时的那种、有礼有节的距离。',
    next: 'c48-leave-02',
  },
  {
    id: 'c48-leave-02',
    text: '我照常去潮声帮忙搬最后几批要处理的旧书，两人之间的对话，也渐渐只剩下与工作有关的只言片语。',
    next: 'c48-leave-03',
  },
  {
    id: 'c48-leave-03',
    speaker: '林晚棠',
    expression: 'default',
    text: '无论你最终去哪儿——潮声的门，不会因为你的决定而改变。\n它以前怎么开，以后也怎么开。',
    next: 'c48-leave-04',
  },
  {
    id: 'c48-leave-04',
    text: '她说这话时语气克制得近乎疏离，可我分明看见，她说完之后，悄悄别开了脸，像是怕自己的眼睛，泄露出跟嘴上不一样的话。',
    next: 'c48-leave-05',
  },
  {
    id: 'c48-leave-05',
    text: '这几天，我反而比任何时候都更认真地重新审视自己那份「保持联系」的决定——它体面，却也悬空，像一句没有落脚点的承诺。',
    next: 'c48-common-01',
  },
  {
    id: 'c48-common-01',
    text: '风铃又轻轻响了一下。这间店，见证过我们十年前的错过，也见证了这几个月里，一点一点重新靠近的过程。',
    next: 'c48-common-02',
  },
  {
    id: 'c48-common-02',
    text: '窗外暮色四合，街灯次第亮起。潮屿的夜和十年前没什么两样——可店里的两个人，早已不是当年那两个不敢开口的少年少女。',
    next: 'c48-common-03',
  },
  {
    id: 'c48-common-03',
    speaker: '沈屿',
    text: '晚棠。谢谢你，这几个月，一直把门给我留着。',
    next: 'c48-common-04',
  },
  {
    id: 'c48-common-04',
    speaker: '林晚棠',
    expression: 'soft',
    text: '……门是留给所有人的。\n只是有些人进来了就走，有些人——会留下来把灯一起点亮。',
    next: 'c48-common-05',
  },
  {
    id: 'c48-common-05',
    text: '她说这话时看着我，眼神里藏着一个没说完的问句——我到底是哪一种人。',
    next: 'c48-common-06',
  },
  {
    id: 'c48-common-06',
    text: '吧台后的老式挂钟走得很慢，滴答声在安静的店里格外清晰，像是在替这个问题，一秒一秒地计时。',
    next: 'c48-common-07',
  },
  {
    id: 'c48-common-07',
    speaker: '沈屿',
    text: '会留下来的那种。这次不用你再问第二遍。',
    next: 'c48-common-08',
  },
  {
    id: 'c48-common-08',
    text: '她没有立刻回应，只是转身把最后一盏灯的开关按下——不是关灯，是把原本昏暗的一角，重新点亮。',
    next: 'c48-common-09',
  },
  {
    id: 'c48-common-09',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……那就别让我，又白白等了一次。',
    next: 'ch49',
  },
]
