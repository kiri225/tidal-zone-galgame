import type { DialogueNode } from '../../../engine/types'

/**
 * 第41章 · 备用房卡
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter41: DialogueNode[] = [
  {
    id: 'ch41',
    chapter: 41,
    chapterTitle: '备用房卡',
    bg: 'hotel-lobby',
    mood: 'warm',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第41章】备用房卡\n交班前，她塞给我一张员工通道卡。红绳磨损，像常用之物。',
    next: 'c41-01',
  },
  {
    id: 'c41-01',
    sprite: 'qinglan',
    expression: 'soft',
    speaker: '苏晴岚',
    text: '不是给客人的。\n丢了要写检讨——写我的名字。',
    next: 'c41-02',
  },
  {
    id: 'c41-02',
    speaker: '沈屿',
    text: '这么重要？',
    next: 'c41-03',
  },
  {
    id: 'c41-03',
    sprite: 'qinglan',
    expression: 'avert',
    speaker: '苏晴岚',
    text: '通道通向后厨、值班室、和……我偶尔躲雨的地方。\n你要是还打算扔房卡，这张也一并扔干净。',
    next: 'c41-choice',
  },
  {
    id: 'c41-choice',
    choices: [
      {
        text: '「我系在钥匙串上。」——收下',
        next: 'c41-r0',
        affection: 15,
        setFlag: 'habit',
      },
      {
        text: '「太贵重，不敢要。」——退缩',
        next: 'c41-r1',
        affection: 0,
      },
    ],
  },
  {
    id: 'c41-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '红绳在掌心发涩。像一句不方便写进系统的许可。',
    next: 'c41-end',
  },
  {
    id: 'c41-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c41-end',
  },
  {
    id: 'c41-end',
    mood: 'warm',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch42',
  },
]
