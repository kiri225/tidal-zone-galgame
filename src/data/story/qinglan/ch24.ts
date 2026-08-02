import type { DialogueNode } from '../../../engine/types'

/**
 * 第24章 · 经理休息日
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter24: DialogueNode[] = [
  {
    id: 'ch24',
    chapter: 24,
    chapterTitle: '经理休息日',
    bg: 'port-dusk',
    mood: 'warm',
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: '【第24章】经理休息日\n她带我走非游客路线：防波堤内侧、废弃的灯塔阴影、只有本地人知道的台阶。',
    next: 'c24-01',
  },
  {
    id: 'c24-01',
    sprite: 'qinglan',
    expression: 'casualsoft',
    speaker: '苏晴岚',
    text: '导游费免了。\n条件是——别拍照发朋友圈。我还不想被集团看见「经理带男客翻墙」。',
    next: 'c24-02',
  },
  {
    id: 'c24-02',
    speaker: '沈屿',
    text: '那我记在脑子里。',
    next: 'c24-03',
  },
  {
    id: 'c24-03',
    sprite: 'qinglan',
    expression: 'soft',
    speaker: '苏晴岚',
    text: '脑子比云端可靠。\n云端会备份，脑子会心疼。',
    next: 'c24-choice',
  },
  {
    id: 'c24-choice',
    choices: [
      {
        text: '「今天你不像客人眼里的你。」——肯定',
        next: 'c24-r0',
        affection: 15,
        setFlag: 'trust',
      },
      {
        text: '安静跟走',
        next: 'c24-r1',
        affection: 5,
      },
    ],
  },
  {
    id: 'c24-r0',
    sprite: 'qinglan',
    expression: 'soft',
    text: '夕阳把海切成金与墨。她站在风里，第一次主动伸手拉住我袖口，又假装是风太大。',
    next: 'c24-end',
  },
  {
    id: 'c24-r1',
    sprite: 'qinglan',
    expression: 'default',
    text: '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
    next: 'c24-end',
  },
  {
    id: 'c24-end',
    mood: 'warm',
    text: '这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。',
    next: 'ch25',
  },
]
