import type { DialogueNode } from '../../../engine/types'

/**
 * 第32章 · 只剩值班室
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter32: DialogueNode[] = [
  {
    id: 'ch32',
    chapter: 32,
    chapterTitle: '只剩值班室',
    bg: 'hotel-lobby',
    mood: 'intimate',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第32章】只剩值班室\n值班室只剩一张窄沙发。毯子一床。风声像要把整座酒店掀走。',
    next: 'c32-01',
  },
  {
    id: 'c32-01',
    sprite: 'qinglan',
    text: '她把制服外套披在我肩上，自己只剩衬衫。',
    next: 'c32-02',
  },
  {
    id: 'c32-02',
    sprite: 'qinglan',
    expression: 'blush',
    speaker: '苏晴岚',
    text: '经理特权：先冻死客人——不对。\n……别告诉集团我乱讲话。',
    next: 'c32-03',
  },
  {
    id: 'c32-03',
    sprite: 'qinglan',
    text: '肩并着肩。体温缓慢地交换，像潮水交换盐分。',
    next: 'c32-choice',
  },
  {
    id: 'c32-choice',
    choices: [
      {
        text: '把外套还给她一半',
        next: 'c32-r0',
        affection: 10,
      },
      {
        text: '「靠近一点。」——请求',
        next: 'c32-r1',
        affection: 15,
        setFlag: 'habit',
      },
    ],
  },
  {
    id: 'c32-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '窗外什么东西被风撕开。她闭眼，睫毛在应急光里投下细影。',
    next: 'c32-end',
  },
  {
    id: 'c32-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c32-end',
  },
  {
    id: 'c32-end',
    mood: 'intimate',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch33',
  },
]
