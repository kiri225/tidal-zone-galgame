import type { DialogueNode } from '../../../engine/types'

/**
 * 第8章 · 停泊一夜
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter08: DialogueNode[] = [
  {
    id: 'ch08',
    chapter: 8,
    chapterTitle: '停泊一夜',
    bg: 'hotel-bar',
    mood: 'warm',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第8章】停泊一夜\n酒吧打烊后，她没有赶我走。吧台灯只留一盏，冷蓝变成琥珀。',
    next: 'c08-01',
  },
  {
    id: 'c08-01',
    sprite: 'qinglan',
    text: '她把名牌摘下来，扣在掌心，像卸下一小块铠甲。',
    next: 'c08-02',
  },
  {
    id: 'c08-02',
    sprite: 'qinglan',
    expression: 'soft',
    speaker: '苏晴岚',
    text: '今晚没有醉鬼。\n你可以坐内侧——只有员工坐内侧。',
    next: 'c08-03',
  },
  {
    id: 'c08-03',
    speaker: '沈屿',
    text: '那我算员工，还是例外？',
    next: 'c08-04',
  },
  {
    id: 'c08-04',
    sprite: 'qinglan',
    expression: 'avert',
    speaker: '苏晴岚',
    text: '算……短暂停泊。\n别问期限。',
    next: 'c08-abranch',
  },
  {
    id: 'c08-abranch',
    affectionBranch: { threshold: 15, whenMet: 'c08-cg', whenNot: 'c08-aftercg' },
  },
  {
    id: 'c08-cg',
    bg: 'hotel-bar',
    mood: 'intimate',
    sprite: null,
    cg: 'berth',
    text: '【CG · 停泊一夜】\n制服未解，名牌却已摘下。吧台内侧两个人并肩，像两艘终于靠上同一根缆桩的船——暂时的，却真实的。',
    next: 'c08-aftercg',
    unlockCg: 'berth',
  },
  {
    id: 'c08-aftercg',
    sprite: 'qinglan',
    expression: 'soft',
    cg: null,
    text: '灯还亮着。有些画面已经发生，有些还差一个潮位。',
    next: 'c08-choice',
  },
  {
    id: 'c08-choice',
    choices: [
      {
        text: '「那我系紧缆绳。」——回应隐喻',
        next: 'c08-r0',
        affection: 10,
        setFlag: 'habit',
      },
      {
        text: '沉默陪她坐到杯空',
        next: 'c08-r1',
        affection: 5,
      },
    ],
  },
  {
    id: 'c08-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '杯底最后一滴酒反射灯火。停泊不必宣告，只需要今晚不解开绳。',
    next: 'c08-end',
  },
  {
    id: 'c08-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c08-end',
  },
  {
    id: 'c08-end',
    mood: 'warm',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch09',
  },
]
