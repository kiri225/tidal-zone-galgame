export type Expression =
  | 'default'
  | 'soft'
  | 'tense'
  | 'blush'
  | 'avert'
  | 'smile'
  | 'hurt'
  | 'laugh'
  | 'surprised'
  | 'teary'
  | 'cold'
  | 'tired'
  | 'book'
  | 'crossed'
  /** 托腮 */
  | 'lean'
  /** 端杯/茶 */
  | 'coffee'
  /** 写备忘 */
  | 'write'
  /** 递书 */
  | 'offer'
  /** 嘘 / 安静 */
  | 'shush'
  /** 招手 */
  | 'beckon'
  /** 沉思 */
  | 'think'
  /** 擦杯 */
  | 'wipe'
  /** 懵 */
  | 'confused'
  /** 伏案 / 靠柜台 */
  | 'leandesk'
  /** 店服·深 V 围裙（性感版） */
  | 'apron'
  /** 店服·托腮（围裙开衩） */
  | 'apronlean'
  /** 开衫外套店服（外出） */
  | 'cardigan'
  /** 开衫·柔和 */
  | 'cardigansoft'
  /** 私服高领（房间/日常） */
  | 'casual'
  /** 私服·柔和 */
  | 'casualsoft'
  /** 卸围裙衬衫裙（打烊后） */
  | 'blouse'
  /** 卸围裙·害羞 */
  | 'blouseblush'

export interface Choice {
  text: string
  next: string
  /** 好感增量 */
  affection?: number
  /** 写入 flag */
  setFlag?: string
}

export interface DialogueNode {
  id: string
  /** 旁白时留空 */
  speaker?: string
  /** 纯分支节点可省略 */
  text?: string
  /** 背景 key */
  bg?: string
  /** 立绘角色 key，null 表示清空 */
  sprite?: string | null
  expression?: Expression
  /** 氛围滤镜 */
  mood?: 'normal' | 'warm' | 'cold' | 'rain' | 'intimate' | 'dark'
  /** 全屏 CG（展示时隐藏立绘） */
  cg?: string | null
  /** 章节号（进入该节点时刷新 HUD） */
  chapter?: number
  /** 章节标题 */
  chapterTitle?: string
  /** 自动跳转 */
  next?: string
  choices?: Choice[]
  /** 到达此节点时设置 */
  setFlag?: string
  /** 若存在则按 flag 跳转 */
  branch?: { flag: string; whenTrue: string; whenFalse: string }
  /** 按好感阈值分支 */
  affectionBranch?: { threshold: number; whenMet: string; whenNot: string }
  /** 到达此节点时强制解锁的 CG */
  unlockCg?: string
  /** 结局标记 */
  ending?: 'true' | 'good' | 'bittersweet'
}

export interface CharacterDef {
  id: string
  name: string
  color: string
  title: string
  unlocked: boolean
}

export type Screen = 'title' | 'story-select' | 'game' | 'ending' | 'gallery'
