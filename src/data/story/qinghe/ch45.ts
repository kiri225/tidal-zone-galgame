import type { DialogueNode } from '../../../engine/types'

/** 第45章 · 为谁关灯 */
export const chapter45: DialogueNode[] = [
  {
    id: 'ch45',
    chapter: 45,
    chapterTitle: '为谁关灯',
    bg: 'qinghe-room-off',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'soft',
    cg: null,
    text: '【第45章】为谁关灯\n她把环灯推向抽屉边缘，却没有推进去。',
    next: 'c45-staygate',
  },
  {
    id: 'c45-staygate',
    branch: { flag: 'stay', whenTrue: 'c45-01', whenFalse: 'ch48' },
  },
  {
    id: 'c45-01',
    speaker: '顾清禾',
    text: '你留下，是为了拾潮，还是为了我。\n我想听一句不躲进「工作」的话。',
    next: 'c45-choice',
  },
  {
    id: 'c45-choice',
    choices: [
      { text: '「为你关灯。」——坦白', next: 'c45-yes', affection: 10, setFlag: 'confess' },
      { text: '「也为父亲……但更是你。」——诚实', next: 'c45-yes', affection: 10, setFlag: 'confess' },
      { text: '「还说不清。」——回避', next: 'c45-no', affection: 0 },
    ],
  },
  {
    id: 'c45-yes',
    sprite: 'qinghe',
    expression: 'soft',
    speaker: '顾清禾',
    text: '够了。\n这句话，比打赏贵。',
    next: 'c45-end',
  },
  {
    id: 'c45-no',
    sprite: 'qinghe',
    expression: 'hurt',
    text: '她把环灯又推回原位，没开，也没关死。',
    next: 'c45-end',
  },
  {
    id: 'c45-end',
    text: '坦白或不坦白，潮水都听得见。',
    next: 'c45-end-cg',
  },
  {
    id: 'c45-end-cg',
    cg: 'qh-ch45-end',
    sprite: null,
    text: '【CG · 章末】\n为谁关灯的回声。',
    next: 'ch46',
  },
]
