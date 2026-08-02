import type { DialogueNode } from '../../../engine/types'

/**
 * 第40章 · 同事的眼光
 * 苏晴岚线 · 模板已清理
 */
export const chapter40: DialogueNode[] = [
  {
    id: 'ch40',
    chapter: 40,
    chapterTitle: '同事的眼光',
    bg: 'hotel-lobby',
    mood: 'cold',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第40章】同事的眼光\n白班起哄：「经理跟长住房关系不一般哦。」',
    next: 'c40-01',
  },
  {
    id: 'c40-01',
    sprite: 'qinglan',
    text: '她面具瞬间合上，完美、光滑、拒人。',
    next: 'c40-02',
  },
  {
    id: 'c40-02',
    sprite: 'qinglan',
    expression: 'smile',
    speaker: '苏晴岚',
    text: '客人隐私，同事也请尊重。',
    next: 'c40-03',
  },
  {
    id: 'c40-03',
    sprite: 'qinglan',
    text: '私下她只留给我一句：',
    next: 'c40-04',
  },
  {
    id: 'c40-04',
    sprite: 'qinglan',
    expression: 'hurt',
    speaker: '苏晴岚',
    text: '……看见了吧。\n这城里，认真会被当成笑话。',
    next: 'c40-choice',
  },
  {
    id: 'c40-choice',
    choices: [
      {
        text: '「那笑话我陪你听完。」——站边',
        next: 'c40-r0',
        affection: 15,
        setFlag: 'trust',
      },
      {
        text: '「对不起，连累你。」——内疚',
        next: 'c40-r1',
        affection: 5,
      },
      {
        text: '沉默',
        next: 'c40-r2',
        affection: 0,
      },
    ],
  },
  {
    id: 'c40-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '她把备用名牌别正，指尖用力到发白。',
    next: 'c40-end',
  },
  {
    id: 'c40-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '「别解释。」她打断我，「一解释就像心虚。夜班经理不心虚——人会。」',
    next: 'c40-end',
  },
  {
    id: 'c40-r2',
    sprite: 'qinglan',
    expression: 'default',
    text: '她把班表拍在柜台上，力道比平时重：「眼光算什么。签到表上，我的名字还在。」',
    next: 'c40-end',
  },
  {
    id: 'c40-end',
    mood: 'cold',
    text: '白班的眼光像探照灯。她没有躲——只是把你挡在职业笑够不到的那一侧。',
    next: 'c40-end-cg',
  },
  {
    id: 'c40-end-cg',
    cg: 'ql-ch40-end',
    sprite: null,
    mood: 'cold',
    text: '【CG · 章末】\n同事眼光外被挡住的一侧。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch41',
  },
]
