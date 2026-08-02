import type { DialogueNode } from '../../../engine/types'

/**
 * 第50章 · 分叉的岸
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter50: DialogueNode[] = [
  {
    id: 'ch50',
    chapter: 50,
    chapterTitle: '分叉的岸',
    bg: 'seaside-dawn',
    mood: 'cold',
    sprite: 'qinglan',
    expression: 'tired',
    cg: null,
    text: '【第50章】分叉的岸\n清晨的潮间带。潮水退去，露出两条浅浅的路。',
    next: 'c50-01',
  },
  {
    id: 'c50-01',
    text: '一条通向公路与城市，一条通向酒店侧门与那间旧店。海风带着将至的秋意。',
    next: 'c50-02',
  },
  {
    id: 'c50-02',
    sprite: 'qinglan',
    expression: 'tired',
    speaker: '苏晴岚',
    text: '分叉的岸。\n你站哪边，我就不问第二次。',
    next: 'c50-03',
  },
  {
    id: 'c50-03',
    choices: [
      {
        text: '「站你这边。」——最终心意',
        next: 'c50-04',
        affection: 5,
      },
      {
        text: '握紧她的手，把员工卡的红绳缠上小指',
        next: 'c50-04',
        affection: 5,
      },
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
    speaker: '苏晴岚',
    text: '那我这个「岸」，可要重新印名牌了。\n……印私人的那种。',
    next: 'c50-06',
  },
  {
    id: 'c50-06',
    text: '晨光越过海平线。三个月的短暂停泊，终于要决定要不要改写成岸名。',
    next: '__ending__',
  },
]
