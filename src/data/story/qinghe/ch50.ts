import type { DialogueNode } from '../../../engine/types'

/** 第50章 · 分叉的壳 */
export const chapter50: DialogueNode[] = [
  {
    id: 'ch50',
    chapter: 50,
    chapterTitle: '分叉的壳',
    bg: 'seaside-dawn',
    mood: 'cold',
    sprite: 'qinghe',
    expression: 'tired',
    cg: null,
    text: '【第50章】分叉的壳\n清晨的潮间带。潮水退去，露出两条浅浅的路。',
    next: 'c50-01',
  },
  {
    id: 'c50-01',
    text: '一条通向公路与城市，一条通向她的公寓与那盏可以关掉的环灯。',
    next: 'c50-02',
  },
  {
    id: 'c50-02',
    sprite: 'qinghe',
    expression: 'tired',
    speaker: '顾清禾',
    text: '分叉的壳。\n你站哪边，我就不问第二次。',
    next: 'c50-choice',
  },
  {
    id: 'c50-choice',
    choices: [
      { text: '「站你这边。」——最终心意', next: 'c50-04', affection: 5 },
      { text: '握住她的手，把备用钥匙缠上小指', next: 'c50-04', affection: 5 },
    ],
  },
  {
    id: 'c50-04',
    text: '她没有再要求完整的句子。潮声替我们把未说完的部分，拍打成某种可以站稳的节奏。',
    next: 'c50-05',
  },
  {
    id: 'c50-05',
    expression: 'soft',
    speaker: '顾清禾',
    text: '那我这个「壳」，可要改成私人的了。\n……关灯之后的那种。',
    next: 'c50-06',
  },
  {
    id: 'c50-06',
    text: '晨光越过海平线。三个月的短暂停泊，终于要决定要不要改写成岸。',
    next: 'c50-end-cg',
  },
  {
    id: 'c50-end-cg',
    cg: 'qh-ch50-end',
    sprite: null,
    mood: 'cold',
    text: '【CG · 章末】\n分叉的壳上，私人的岸名。',
    next: '__ending__',
  },
]
