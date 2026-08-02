import type { DialogueNode } from '../../../engine/types'

/**
 * 第39章 · 假装前台
 * 苏晴岚线 · 模板已清理
 */
export const chapter39: DialogueNode[] = [
  {
    id: 'ch39',
    chapter: 39,
    chapterTitle: '假装前台',
    bg: 'hotel-lobby',
    mood: 'normal',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第39章】假装前台\n复电营业。我们在大堂用「先生」「经理」互称，像排练一出冷笑话。',
    next: 'c39-01',
  },
  {
    id: 'c39-01',
    sprite: 'qinglan',
    expression: 'smile',
    speaker: '苏晴岚',
    text: '沈先生，您的房卡余额还够。\n需要续住吗？',
    next: 'c39-02',
  },
  {
    id: 'c39-02',
    speaker: '沈屿',
    text: '苏经理，续。',
    next: 'c39-03',
  },
  {
    id: 'c39-03',
    sprite: 'qinglan',
    text: '白班同事经过时，她笑得滴水不漏。只有我看见她口袋里空着的名牌夹。',
    next: 'c39-choice',
  },
  {
    id: 'c39-choice',
    choices: [
      {
        text: '配合演出',
        next: 'c39-r0',
        affection: 5,
      },
      {
        text: '「私下还叫晴岚。」——低声',
        next: 'c39-r1',
        affection: 10,
        setFlag: 'trust',
      },
    ],
  },
  {
    id: 'c39-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '打印机响。世界恢复秩序。秩序有时是一种温柔的暴力。',
    next: 'c39-end',
  },
  {
    id: 'c39-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '互称前台与客人时，她眼底有笑。「装一会儿。装完，名牌还是我的——人不是。」',
    next: 'c39-end',
  },
  {
    id: 'c39-end',
    mood: 'normal',
    text: '假装前台的游戏很短。短到白班推门前必须结束——却长到够你记住她卸妆后的声音。',
    next: 'c39-end-cg',
  },
  {
    id: 'c39-end-cg',
    cg: 'ql-ch39-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n假装前台时只对你说的傻瓜。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch40',
  },
]
