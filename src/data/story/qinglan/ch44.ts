import type { DialogueNode } from '../../../engine/types'

/**
 * 第44章 · 去留
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter44: DialogueNode[] = [
  {
    id: 'ch44',
    chapter: 44,
    chapterTitle: '去留',
    bg: 'hotel-bar',
    mood: 'warm',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第44章】去留\n酒吧打烊。她把问题放到台面上，像放一把钥匙。',
    next: 'c44-01',
  },
  {
    id: 'c44-01',
    sprite: 'qinglan',
    expression: 'tense',
    speaker: '苏晴岚',
    text: '去留。\n我要听完整的句子，不要前台话术。',
    next: 'c44-choice',
  },
  {
    id: 'c44-choice',
    choices: [
      {
        text: '「我不卖了。我想留在潮屿。」——留下',
        next: 'c44-r0',
        affection: 15,
        setFlag: 'stay',
      },
      {
        text: '「铺子还是要卖。但我会回来住——住你看着的那种。」——半退',
        next: 'c44-r1',
        affection: 0,
      },
    ],
  },
  {
    id: 'c44-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '她没有立刻笑。只是把红绳房卡在指间绕了一圈，又松开。',
    next: 'ch45',
  },
  {
    id: 'c44-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'ch48',
  },
  {
    id: 'c44-end',
    text: '她没有立刻笑。只是把红绳房卡在指间绕了一圈，又松开。',
    next: 'ch45',
  },
]
