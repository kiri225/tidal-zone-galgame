import type { DialogueNode } from '../../../engine/types'

/**
 * 第44章 · 去留
 * 苏晴岚线 · 抉择前增厚；r0→ch45 / r1→ch48
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
    next: 'c44-02',
  },
  {
    id: 'c44-02',
    sprite: 'qinglan',
    text: '台面上只剩两杯见底的水，和一枚红绳房卡。班表折角压在杯沿下——今晚她把「交班」推迟了半小时，只为听这一句。',
    next: 'c44-03',
  },
  {
    id: 'c44-03',
    sprite: 'qinglan',
    expression: 'hurt',
    speaker: '苏晴岚',
    text: '过客可以说短暂停泊。\n可卖铺的人若只把潮屿当中转站——名牌摘不摘，都跟我无关。你说清楚。',
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
    text: '她没有立刻笑。红绳房卡在指间绕了一圈，又松开。「……留下。这两个字，我记下了。」',
    next: 'c44-end-cg-1',
  },
  {
    id: 'c44-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '「回来住。」她重复，声音平，「听起来像会员卡。会员卡可以停——人比较难。」',
    next: 'c44-end-cg-2',
  },
  {
    id: 'c44-end',
    text: '去留被放到台面上，像一把钥匙。钥匙转或不转，大堂的灯都一样亮——她却不一样了。',
    next: 'c44-end-cg-1',
  },
  {
    id: 'c44-end-cg-1',
    cg: 'ql-ch44-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n台面上那把去留的钥匙。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch45',
  },
  {
    id: 'c44-end-cg-2',
    cg: 'ql-ch44-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n台面上那把去留的钥匙。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch48',
  },
]
