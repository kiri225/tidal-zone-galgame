import type { DialogueNode } from '../../../engine/types'

/**
 * 第33章 · 有没有当真
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter33: DialogueNode[] = [
  {
    id: 'ch33',
    chapter: 33,
    chapterTitle: '有没有当真',
    bg: 'hotel-duty',
    mood: 'intimate',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第33章】有没有当真\n风声间隙，她忽然问——不看我。',
    next: 'c33-01',
  },
  {
    id: 'c33-01',
    sprite: 'qinglan',
    expression: 'hurt',
    speaker: '苏晴岚',
    text: '你有没有哪怕一次，把我当过人，而不是前台？\n答慢了也行。但不许用客人那套话术。',
    next: 'c33-choice',
  },
  {
    id: 'c33-choice',
    choices: [
      {
        text: '「有。从后厨那晚开始。」——具体',
        next: 'c33-r0',
        affection: 15,
        setFlag: 'trust',
      },
      {
        text: '「一直怕说错，所以像在对前台。」——坦白笨',
        next: 'c33-r1',
        affection: 10,
        setFlag: 'trust',
      },
      {
        text: '「从前台看见的，也是你。」——绕一点的真心',
        next: 'c33-r2',
        affection: 10,
        setFlag: 'trust',
      },
    ],
  },
  {
    id: 'c33-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '她吸了吸鼻子，用玩笑掩盖：「……考核通过。临时的。」',
    next: 'c33-end',
  },
  {
    id: 'c33-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c33-end',
  },
  {
    id: 'c33-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c33-end',
  },
  {
    id: 'c33-end',
    mood: 'intimate',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch34',
  },
]
