import type { DialogueNode } from '../../../engine/types'

/**
 * 第18章 · 短暂停泊
 * 苏晴岚线 · 模板已清理
 */
export const chapter18: DialogueNode[] = [
  {
    id: 'ch18',
    chapter: 18,
    chapterTitle: '短暂停泊',
    bg: 'hotel-bar',
    mood: 'intimate',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第18章】短暂停泊\n酒过一半，她忽然把杯底转了一圈。',
    next: 'c18-01',
  },
  {
    id: 'c18-01',
    sprite: 'qinglan',
    expression: 'tired',
    speaker: '苏晴岚',
    text: '我习惯把人都当过客。\n省得疼。疼了就证明我又犯规了。',
    next: 'c18-02',
  },
  {
    id: 'c18-02',
    speaker: '沈屿',
    text: '犯规是什么。',
    next: 'c18-03',
  },
  {
    id: 'c18-03',
    sprite: 'qinglan',
    expression: 'avert',
    speaker: '苏晴岚',
    text: '把短暂停泊，当成岸。',
    next: 'c18-04',
  },
  {
    id: 'c18-04',
    sprite: 'qinglan',
    text: '吧台内侧的灯把她的侧脸切成明暗两半——职业与私心，刚好对半。',
    next: 'c18-choice',
  },
  {
    id: 'c18-choice',
    choices: [
      {
        text: '「岸也可以是人。」——接住',
        next: 'c18-r0',
        affection: 15,
        setFlag: 'trust',
      },
      {
        text: '「那我先当过客。」——配合她的防',
        next: 'c18-r1',
        affection: 0,
      },
      {
        text: '「疼也比空着好。」——冒险',
        next: 'c18-r2',
        affection: 10,
      },
    ],
  },
  {
    id: 'c18-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '她没再喝。只是用拇指抹掉杯壁上的水痕，像抹掉一句快说出口的话。',
    next: 'c18-end',
  },
  {
    id: 'c18-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '「配合得很好。」她干笑一声，「过客剧本我熟。演完就散。」杯壁上的水痕被她抹平。',
    next: 'c18-end',
  },
  {
    id: 'c18-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '她看了我很久，终于说：「空着也是一种疼。至少你知道。」拇指停在杯沿，没有再抹。',
    next: 'c18-end',
  },
  {
    id: 'c18-end',
    mood: 'intimate',
    text: '她没再喝。只是用拇指抹掉杯壁水痕，像抹掉一句快说出口的话——又故意留下一点。',
    next: 'c18-end-cg',
  },
  {
    id: 'c18-end-cg',
    cg: 'ql-ch18-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n把短暂停泊说成岸的危险。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch19',
  },
]
