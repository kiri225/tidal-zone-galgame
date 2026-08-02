import type { DialogueNode } from '../../../engine/types'

/**
 * 第46章 · 联名的想象
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter46: DialogueNode[] = [
  {
    id: 'ch46',
    chapter: 46,
    chapterTitle: '联名的想象',
    bg: 'shop-interior',
    mood: 'warm',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第46章】联名的想象\n告白之后的想象很轻，像泡沫，却甜。',
    next: 'c46-01',
  },
  {
    id: 'c46-01',
    sprite: 'qinglan',
    expression: 'laugh',
    speaker: '苏晴岚',
    text: '拾潮白天卖旧物，酒店夜班——不对。\n或许我辞职，开一间只营业到日出的小馆。你管灯，我管门锁。',
    next: 'c46-02',
  },
  {
    id: 'c46-02',
    speaker: '沈屿',
    text: '旅行书架也可以。住客把看完的书留下，换下一本。',
    next: 'c46-03',
  },
  {
    id: 'c46-03',
    sprite: 'qinglan',
    expression: 'soft',
    speaker: '苏晴岚',
    text: '那招牌写什么。\n「短暂停泊」太丧。「岸名」又太肉麻。',
    next: 'c46-choice',
  },
  {
    id: 'c46-choice',
    choices: [
      {
        text: '「写潮间带。」——呼应主题',
        next: 'c46-r0',
        affection: 10,
      },
      {
        text: '「写我们的名字。」——更大胆',
        next: 'c46-r1',
        affection: 15,
      },
    ],
  },
  {
    id: 'c46-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '想象不必立刻成真。有时它只是为了让人敢把真的那一步迈出去。',
    next: 'c46-end',
  },
  {
    id: 'c46-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c46-end',
  },
  {
    id: 'c46-end',
    mood: 'warm',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch47',
  },
]
