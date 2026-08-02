import type { DialogueNode } from '../../../engine/types'

/**
 * 第13章 · 常住客
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter13: DialogueNode[] = [
  {
    id: 'ch13',
    chapter: 13,
    chapterTitle: '常住客',
    bg: 'hotel-bar',
    mood: 'normal',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第13章】常住客\n酒吧里有个常住客，油滑地朝她眨眼。',
    next: 'c13-01',
  },
  {
    id: 'c13-01',
    sprite: 'qinglan',
    text: '「经理又钓到短期的啦？」笑声刺耳。',
    next: 'c13-02',
  },
  {
    id: 'c13-02',
    sprite: 'qinglan',
    expression: 'smile',
    speaker: '苏晴岚',
    text: '先生喝多了。我叫代驾。',
    next: 'c13-03',
  },
  {
    id: 'c13-03',
    sprite: 'qinglan',
    text: '她脸色不变。那笑完美得让人发疼。',
    next: 'c13-04',
  },
  {
    id: 'c13-04',
    speaker: '沈屿',
    text: '你习惯被这样说？',
    next: 'c13-05',
  },
  {
    id: 'c13-05',
    sprite: 'qinglan',
    expression: 'cold',
    speaker: '苏晴岚',
    text: '习惯。\n习惯就不会疼——理论上。',
    next: 'c13-choice',
  },
  {
    id: 'c13-choice',
    choices: [
      {
        text: '「下次我帮你回。」——站边',
        next: 'c13-r0',
        affection: 15,
        setFlag: 'trust',
      },
      {
        text: '「……对不起，听到了。」——笨拙',
        next: 'c13-r1',
        affection: 5,
      },
      {
        text: '假装去结账',
        next: 'c13-r2',
        affection: 0,
      },
    ],
  },
  {
    id: 'c13-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '代驾来了。她目送客人离开，肩线终于松下来一寸。',
    next: 'c13-end',
  },
  {
    id: 'c13-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c13-end',
  },
  {
    id: 'c13-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c13-end',
  },
  {
    id: 'c13-end',
    mood: 'normal',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch14',
  },
]
