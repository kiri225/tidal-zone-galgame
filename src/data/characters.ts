import type { CharacterDef } from '../engine/types'

export const characters: CharacterDef[] = [
  {
    id: 'wantang',
    name: '林晚棠',
    color: '#c4a484',
    title: '潮声 · 深夜书店',
    unlocked: true,
  },
  {
    id: 'qinglan',
    name: '苏晴岚',
    color: '#7a9bb5',
    title: '潮屿酒店 · 夜班',
    unlocked: true,
  },
  {
    id: 'qinghe',
    name: '顾清禾',
    color: '#6b8f71',
    title: '海洋站 · 研究员',
    unlocked: false,
  },
  {
    id: 'zhixia',
    name: '叶知夏',
    color: '#d4a0a0',
    title: '海边画廊 · 助理',
    unlocked: false,
  },
]

export const bgLabels: Record<string, string> = {
  'port-night': '潮屿码头 · 夜',
  'port-dusk': '潮屿码头 · 黄昏',
  'street-rain': '旧街 · 细雨',
  'street-night': '旧街 · 夜',
  'street-day': '旧街 · 昼',
  'shop-interior': '拾潮 · 店内',
  'shop-back': '拾潮 · 后仓',
  bookstore: '潮声 · 店内',
  'bookstore-close': '潮声 · 关店后',
  'bookstore-loft': '潮声 · 二楼书库',
  'wantang-room': '晚棠阁楼',
  'seaside-dawn': '海边 · 黎明',
  'tide-pools': '潮间带岩滩',
  'market-morning': '早市 · 码头',
  'hotel-lobby': '酒店大堂 · 夜',
  'hotel-bar': '酒店酒吧',
  gallery: '海边画廊',
  'research-station': '海洋站实验室',
  black: '黑暗',
}

export const speakerColors: Record<string, string> = {
  沈屿: '#a8c0d0',
  林晚棠: '#c4a484',
  苏晴岚: '#7a9bb5',
  '': '#e8ddd0',
}
