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
