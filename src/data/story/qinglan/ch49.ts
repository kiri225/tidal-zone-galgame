import type { DialogueNode } from '../../../engine/types'

/**
 * 第49章 · 过客不再订
 * 苏晴岚线 · 模板已清理
 */
export const chapter49: DialogueNode[] = [
  {
    id: 'ch49',
    chapter: 49,
    chapterTitle: '过客不再订',
    bg: 'hotel-lobby',
    mood: 'cold',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第49章】过客不再订\n大堂只剩她。报表打完，铅笔却停在日志最后一行。',
    next: 'c49-01',
  },
  {
    id: 'c49-01',
    sprite: 'qinglan',
    expression: 'tired',
    speaker: '苏晴岚',
    text: '过客不再订「下一次」。\n下一次是骗自己的续住。',
    next: 'c49-02',
  },
  {
    id: 'c49-02',
    sprite: 'qinglan',
    text: '她把那句关于我的备注涂掉，改写成一个字，又涂掉。',
    next: 'c49-03',
  },
  {
    id: 'c49-03',
    sprite: 'qinglan',
    expression: 'teary',
    speaker: '苏晴岚',
    text: '沈屿。\n你要是进来，就别再当短暂停泊。',
    next: 'c49-choice',
  },
  {
    id: 'c49-choice',
    choices: [
      {
        text: '推开侧门进去',
        next: 'c49-r0',
        affection: 15,
        setFlag: 'trust',
      },
      {
        text: '在门外站到天光',
        next: 'c49-r1',
        affection: 5,
      },
    ],
  },
  {
    id: 'c49-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '铅笔滚落。这一次，没有客人永远对——只有她自己，要一个答案。',
    next: 'c49-end',
  },
  {
    id: 'c49-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '空房率上升的报表被她折好。「集团会问。我会答：有一位长住——如果他愿意被写进去。」',
    next: 'c49-end',
  },
  {
    id: 'c49-end',
    mood: 'cold',
    text: '订房系统里，短暂停泊的字段闪了闪。有人的名字，正等着从过客改成岸。',
    next: 'c49-end-cg',
  },
  {
    id: 'c49-end-cg',
    cg: 'ql-ch49-end',
    sprite: null,
    mood: 'cold',
    text: '【CG · 章末】\n过客不再订——你还订不订。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch50',
  },
]
