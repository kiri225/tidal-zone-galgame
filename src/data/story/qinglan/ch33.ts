import type { DialogueNode } from '../../../engine/types'

/**
 * 第33章 · 有没有当真
 * 苏晴岚线 · 抉择前增厚
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
    next: 'c33-02',
  },
  {
    id: 'c33-02',
    sprite: 'qinglan',
    text: '值班室的灯只留一盏。名牌反扣在桌上，金属面朝下——像她故意不让「苏晴岚 · 夜班经理」盯着这句问话。',
    next: 'c33-03',
  },
  {
    id: 'c33-03',
    sprite: 'qinglan',
    expression: 'tense',
    speaker: '苏晴岚',
    text: '过客会把短暂停泊说成缘分。\n我听过太多。所以我要听——有没有当真。',
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
    text: '「有过。」她重复，声音发紧，「有过就危险。危险我却……还是问了。」',
    next: 'c33-end',
  },
  {
    id: 'c33-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '「怕说错的人，通常比说得太满的人可信。」她把毯子拉高一点，遮住半张脸。',
    next: 'c33-end',
  },
  {
    id: 'c33-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '从前台看见的那句，让她沉默很久。「……那你看见的，别只拿去当故事讲。」',
    next: 'c33-end',
  },
  {
    id: 'c33-end',
    mood: 'intimate',
    text: '有没有当真——这个问题比台风更响。答案不在对讲机里，在她不肯再戴的那张笑里。',
    next: 'c33-end-cg',
  },
  {
    id: 'c33-end-cg',
    cg: 'ql-ch33-end',
    sprite: null,
    mood: 'intimate',
    text: '【CG · 章末】\n有没有当真——问出口的风声。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch34',
  },
]
