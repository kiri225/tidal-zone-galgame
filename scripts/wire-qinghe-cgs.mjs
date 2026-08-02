/** Append Qinghe CG catalog entries into src/data/cg.ts */
import fs from 'fs'

const TITLES = {
  1: '卫衣与口罩',
  2: '潮间带的壳',
  3: '环灯漏光',
  4: '价目表',
  5: '拒打赏',
  6: '关播的脸',
  7: '窗外潮声',
  8: '环灯一夜',
  9: '汽水与耳机',
  10: '拾潮的旧物',
  11: '直播角的空位',
  12: '线下伪装',
  13: '订阅墙',
  14: '关灯预告',
  15: '小别·断更',
  16: '回到公寓',
  17: '常客不是客户',
  18: '壳的另一面',
  19: '卖铺拷问',
  20: '几乎越线',
  21: '关播夜话',
  22: '清醒的滤镜',
  23: '市集伪装',
  24: '外拍湿衫',
  25: '清仓的钥匙',
  26: '争吵的价目',
  27: '和解的盐',
  28: '谈到关灯',
  29: '台风预警',
  30: '来公寓',
  31: '环灯还亮',
  32: '只剩你我',
  33: '有没有当真',
  34: '她先关灯',
  35: '关灯一夜',
  36: '习惯还是岸',
  37: '黎明窗外',
  38: '潮间带·外拍',
  39: '假装开播',
  40: '评论区的眼光',
  41: '备用钥匙',
  42: '买家皮鞋',
  43: '订阅死角',
  44: '去留',
  45: '为谁关灯',
  46: '联名的想象',
  47: '最后通牒',
  48: '公寓的门',
  49: '过客不再订',
  50: '分叉的壳',
}

const SUBS = {
  1: '帽檐下海水绿的眼睛',
  2: '推送里的青绿封面',
  3: '门缝漏出的冷白',
  4: '小黑板上的数字潮汐',
  5: '熄灭的支付界面',
  6: '摘耳机后的空半拍',
  7: '窗缝里的盐风',
  8: '环灯下的内侧椅子',
  9: '常温汽水与缠绕耳机',
  10: '后仓樟脑旁的口罩',
  11: '三脚架旁空出的椅子',
  12: '早市里压低的帽檐',
  13: '订阅墙的两边',
  14: '预览灯将灭未灭',
  15: '断更与港口的风',
  16: '门铃后的开衫',
  17: '常客续杯的便签',
  18: '关灯后多看的三秒',
  19: '中介铃声与房卡',
  20: '几乎而未越过',
  21: '价目卡朝下的夜话',
  22: '关掉的美颜',
  23: '回头确认你还在',
  24: '不修图的湿衫',
  25: '备用钥匙串',
  26: '用关心消费吗',
  27: '雨棚下的盐汽水',
  28: '关灯就不能假装工作',
  29: '短信两个字：来',
  30: '仍亮着的环灯',
  31: '调暗一档的信任',
  32: '倒扣的手机',
  33: '有没有当真',
  34: '她先关灯',
  35: '关灯一夜的岸',
  36: '习惯还是岸',
  37: '抽屉里的环灯',
  38: '换壳的寄居蟹',
  39: '开场白里的私名',
  40: '删掉的过客',
  41: '不准带打赏的钥匙',
  42: '门外的口罩',
  43: '备注：不准结账',
  44: '潮间带上的去留',
  45: '为谁关灯的坦白',
  46: '联名的想象',
  47: '两股潮的通牒',
  48: '不反锁的门',
  49: '关掉预约',
  50: '分叉的壳',
}

const chapterEntries = Array.from({ length: 50 }, (_, i) => {
  const n = i + 1
  const pad = String(n).padStart(2, '0')
  return `  {
    id: 'qh-ch${pad}-end',
    title: '${TITLES[n]} · 章末',
    subtitle: '${SUBS[n]}',
    affectionRequired: 0,
    storyUnlock: true,
    image: cgAsset('/images/cg/cg-qh-ch${pad}-end.webp'),
    storyHint: '清禾第${n}章结尾',
    route: 'qinghe',
  },`
}).join('\n')

const affectionEntries = `
  // 清禾线好感 CG
  {
    id: 'ringlight',
    title: '环灯一夜',
    subtitle: '内侧椅子不收费',
    affectionRequired: AffThreshold.ringlight,
    image: cgAsset('/images/cg/cg-qh-ringlight.webp'),
    storyHint: '环灯一夜',
    route: 'qinghe',
  },
  {
    id: 'tip_refuse',
    title: '拒打赏',
    subtitle: '支付界面熄灭',
    affectionRequired: AffThreshold.tip_refuse,
    image: cgAsset('/images/cg/cg-qh-tip-refuse.webp'),
    storyHint: '拒打赏',
    route: 'qinghe',
  },
  {
    id: 'offtalk',
    title: '关播夜话',
    subtitle: '价目卡朝下',
    affectionRequired: AffThreshold.offtalk,
    image: cgAsset('/images/cg/cg-qh-offtalk.webp'),
    storyHint: '关播夜话',
    route: 'qinghe',
  },
  {
    id: 'market_qh',
    title: '市集伪装',
    subtitle: '回头确认你还在',
    affectionRequired: AffThreshold.market_qh,
    image: cgAsset('/images/cg/cg-qh-market.webp'),
    storyHint: '市集伪装',
    route: 'qinghe',
  },
  {
    id: 'almost_qh',
    title: '几乎越线',
    subtitle: '停在几乎',
    affectionRequired: AffThreshold.almost_qh,
    image: cgAsset('/images/cg/cg-qh-almost.webp'),
    storyHint: '几乎越线',
    route: 'qinghe',
  },
  {
    id: 'salt_qh',
    title: '和解的盐',
    subtitle: '雨棚下的盐汽水',
    affectionRequired: AffThreshold.salt_qh,
    image: cgAsset('/images/cg/cg-qh-salt.webp'),
    storyHint: '和解的盐',
    route: 'qinghe',
  },
  {
    id: 'darkroom',
    title: '关灯一夜',
    subtitle: '关灯之后才靠岸',
    affectionRequired: AffThreshold.darkroom,
    image: cgAsset('/images/cg/cg-qh-darkroom.webp'),
    storyHint: '关灯一夜',
    route: 'qinghe',
  },
  {
    id: 'shore_shell',
    title: '壳的岸',
    subtitle: '短暂停泊，也可以关灯',
    affectionRequired: AffThreshold.shore_shell,
    image: cgAsset('/images/cg/cg-qh-shore.webp'),
    storyHint: 'True End',
    route: 'qinghe',
  },
`

const path = 'src/data/cg.ts'
let s = fs.readFileSync(path, 'utf8')
if (s.includes("id: 'qh-ch01-end'")) {
  console.log('qinghe CGs already present, skip')
  process.exit(0)
}

s = s.replace(/\r\n/g, '\n')

const marker = '\n]\n\nexport const cgCatalog'
if (!s.includes(marker)) throw new Error('chapterEndCgs end marker not found')
s = s.replace(marker, `\n\n${chapterEntries}\n]\n\nexport const cgCatalog`)

const affMarker = `\n    route: 'qinglan',\n  },\n]\n\nexport const cgImages`
if (!s.includes(affMarker)) {
  const idx = s.lastIndexOf("id: 'shore_name'")
  if (idx < 0) throw new Error('shore_name not found')
  const routeIdx = s.indexOf("route: 'qinglan'", idx)
  const close = s.indexOf('\n]', routeIdx)
  s = s.slice(0, close) + ',\n' + affectionEntries + s.slice(close)
} else {
  s = s.replace(affMarker, `\n    route: 'qinglan',\n  },${affectionEntries}]\n\nexport const cgImages`)
}

fs.writeFileSync(path, s.replace(/\n/g, '\r\n'), 'utf8')
console.log('Injected qinghe chapter-end + affection CGs')
