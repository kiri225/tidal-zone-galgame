import type { DialogueNode } from '../../../engine/types'

/**
 * 第45章 · 为谁（小说级密度）
 * 入口：ch44（stay）→ ch45…
 * 出口：confess → ch46；若 !stay（安全兜底）→ ch48
 */
export const chapter45: DialogueNode[] = [
  {
    id: 'ch45',
    chapter: 45,
    chapterTitle: '为谁',
    bg: 'bookstore',
    mood: 'intimate',
    sprite: 'wantang',
    expression: 'default',
    cg: null,
    text: '【第45章】为谁',
    next: 'c45-gate',
  },
  {
    id: 'c45-gate',
    branch: { flag: 'stay', whenTrue: 'c45-01', whenFalse: 'ch48' },
  },
  {
    id: 'c45-01',
    text: '晚棠的问题还悬在空气里——「为了铺子，还是为了我」——像一道退潮时才露出的礁石，绕不过去，也藏不住。',
    next: 'c45-02',
  },
  {
    id: 'c45-02',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……为了铺子，还是为了我？\n沈屿，这次我要一个真答案，别用「都是」这种和稀泥的话糊弄我。',
    next: 'c45-03',
  },
  {
    id: 'c45-03',
    text: '她的手指绞着围裙的一角，这是她极少数会流露出的、不加掩饰的紧张。我忽然明白，这个问题背后，其实是另一个更害怕被拒绝的问题——「你，到底有没有真的选择我」。',
    next: 'c45-03b',
  },
  {
    id: 'c45-03b',
    text: '吧台灯的光线很静，映出她微微发抖的睫毛。这大概是她这辈子，第一次把自己完全交到一个问题的答案手里。',
    next: 'c45-04',
  },
  {
    id: 'c45-04',
    choices: [
      {
        text: '「为你。也顺便为铺子。」——坦白心意，把她放在第一位',
        next: 'c45-05a',
        affection: 2,
        setFlag: 'confess',
      },
      {
        text: '「为父亲留下的东西。」——用更安全的理由回避真心',
        next: 'c45-05b',
        affection: 0,
      },
    ],
  },
  {
    id: 'c45-05a',
    text: '我尽量让语气听起来平静，可说出口的瞬间，自己耳根也跟着发烫——这是我第一次，把「为你」这两个字，这么直接地说给她听。',
    next: 'c45-06a',
  },
  {
    id: 'c45-06a',
    speaker: '林晚棠',
    expression: 'smile',
    text: '……油嘴。\n但——记下了。这句话，我会记很久。',
    next: 'c45-07a',
  },
  {
    id: 'c45-07a',
    text: '她的眼眶红了一下，很快又忍了回去，像是怕一旦落泪，就会显得这份坦白，比它本身更沉重。',
    next: 'c45-08a',
  },
  {
    id: 'c45-08a',
    speaker: '沈屿',
    text: '铺子的事，我也没打算含糊。但你排第一，这点不会变。',
    next: 'c45-08a2',
  },
  {
    id: 'c45-08a2',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……第一名，很难当的。\n以后可不许降级。',
    next: 'c45-09',
  },
  {
    id: 'c45-05b',
    text: '「父亲」两个字一出口，我就知道自己说错了——这是一个安全、体面、却彻底回避了她真正想听到的答案。',
    next: 'c45-06b',
  },
  {
    id: 'c45-06b',
    speaker: '林晚棠',
    expression: 'avert',
    text: '「父亲。」\n她重复了一遍，像把一句刚捧起来的真心，重新轻轻放回了架子上。',
    next: 'c45-07b',
  },
  {
    id: 'c45-07b',
    text: '她没有再追问，只是转身继续手里的活，可空气里那份小心翼翼维持住的期待，已经悄悄冷却了几分。',
    next: 'c45-08b',
  },
  {
    id: 'c45-08b',
    speaker: '沈屿',
    text: '……不止为了他。也为了你。只是这句话，我需要多一点勇气才说得完整。',
    next: 'c45-09',
  },
  {
    id: 'c45-09',
    text: '她转过身，眼神里带着一点将信将疑，却还是没有把这份补上的坦白推开。',
    next: 'c45-10',
  },
  {
    id: 'c45-10',
    speaker: '林晚棠',
    expression: 'soft',
    text: '……好。这次算你过关。\n但下次，别让我等你补一句才算数。',
    next: 'c45-11',
  },
  {
    id: 'c45-11',
    text: '窗外的风铃又响了一下，这次听起来格外轻快，像是替这场迟到的坦白，敲下了一个小小的、暂时的休止符。',
    next: 'ch46',
  },
]
