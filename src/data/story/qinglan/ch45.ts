import type { DialogueNode } from '../../../engine/types'

/**
 * 第45章 · 为谁摘牌
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter45: DialogueNode[] = [
  {
    id: 'ch45',
    chapter: 45,
    chapterTitle: '为谁摘牌',
    bg: 'hotel-bar',
    mood: 'intimate',
    sprite: 'qinglan',
    expression: 'tense',
    cg: null,
    text: '【第45章】为谁摘牌\n留下之后，还有一句必须问清的话。',
    next: 'c45-gate',
  },
  {
    id: 'c45-gate',
    branch: { flag: 'stay', whenTrue: 'c45-01', whenFalse: 'ch48' },
  },
  {
    id: 'c45-01',
    sprite: 'qinglan',
    expression: 'tense',
    speaker: '苏晴岚',
    text: '你留下来——为谁摘的牌？\n为父亲的店，还是为……我。',
    next: 'c45-02',
  },
  {
    id: 'c45-02',
    choices: [
      {
        text: '「为你。店是理由，你是答案。」——坦白',
        next: 'c45-yes',
        affection: 15,
        setFlag: 'confess',
      },
      {
        text: '「先为父亲。但我想一起试试。」——回避一半',
        next: 'c45-half',
        affection: 0,
      },
    ],
  },
  {
    id: 'c45-yes',
    expression: 'teary',
    speaker: '苏晴岚',
    text: '……真会说话。\n可今晚我允许你说这种肉麻的。',
    next: 'ch46',
  },
  {
    id: 'c45-half',
    expression: 'hurt',
    speaker: '苏晴岚',
    text: '也行。\n至少你没用前台话术骗我。',
    next: 'ch48',
  },
]
