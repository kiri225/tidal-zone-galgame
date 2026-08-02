import type { DialogueNode } from '../../../engine/types'

/**
 * 第24章 · 经理休息日
 * 苏晴岚线 · 模板已清理
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
    text: '台阶湿滑。她忽然拉住我袖口，随即松开，假装是风太大。「……跟上。别掉进游客照。」',
    next: 'c24-end',
  },
  {
    id: 'c24-end',
    mood: 'warm',
    text: '夕阳把海切成金与墨。非游客路线没有路牌——只有她记得的、肯分给我的几步。',
    next: 'c24-end-cg',
  },
  {
    id: 'c24-end-cg',
    cg: 'ql-ch24-end',
    sprite: null,
    mood: 'warm',
    text: '【CG · 章末】\n非游客路线上拉住的袖口。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: 'ch25',
  },
]
