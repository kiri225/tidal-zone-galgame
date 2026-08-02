import type { DialogueNode } from '../../../engine/types'

/**
 * 第38章 · 潮间带·客房
 * 苏晴岚线 · 模板已清理
 */
export const chapter38: DialogueNode[] = [
  {
    id: 'ch38',
    chapter: 38,
    chapterTitle: '潮间带·客房',
    bg: 'hotel-room',
    mood: 'warm',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第38章】潮间带·客房\n她用经理权限开了一间空的海景房。窗边能看见潮间带。',
    next: 'c38-01',
  },
  {
    id: 'c38-01',
    sprite: 'qinglan',
    expression: 'soft',
    speaker: '苏晴岚',
    text: '退潮才看得见礁石上挂着谁。\n涨潮的时候，大家都以为自己漂得很漂亮。',
    next: 'c38-02',
  },
  {
    id: 'c38-02',
    sprite: 'qinglan',
    text: '她说这话时看着海，不像在讲风景。',
    next: 'c38-03',
  },
  {
    id: 'c38-03',
    speaker: '沈屿',
    text: '那你看见我挂在哪儿了吗。',
    next: 'c38-04',
  },
  {
    id: 'c38-04',
    sprite: 'qinglan',
    expression: 'avert',
    speaker: '苏晴岚',
    text: '……还在看。\n礁石上的东西，有时是垃圾，有时是缆绳。',
    next: 'c38-choice',
  },
  {
    id: 'c38-choice',
    choices: [
      {
        text: '「我想当缆绳。」——接隐喻',
        next: 'c38-r0',
        affection: 15,
        setFlag: 'trust',
      },
      {
        text: '并肩看潮不作答',
        next: 'c38-r1',
        affection: 5,
      },
    ],
  },
  {
    id: 'c38-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '潮线往外退。窗玻璃上，两个人的影子短暂重叠。',
    next: 'c38-end',
  },
  {
    id: 'c38-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '「你也可以不当听众。」她靠着窗框，「可你听了——那就记住：退潮才露出能站的地方。」',
    next: 'c38-end',
  },
  {
    id: 'c38-end',
    mood: 'warm',
    text: '海景房的玻璃映出两个人。隐喻说完，房间仍空——空得刚好能放下一个未命名的习惯。',
    next: 'c38-end-cg',
  },
  {
    id: 'c38-end-cg',
    cg: 'ql-ch38-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n空房窗边潮间带的隐喻。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch39',
  },
]
