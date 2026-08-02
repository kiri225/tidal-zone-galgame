/**
 * Generate Qinghe (顾清禾 · 福利姬) full 50-chapter route with UTF-8 Chinese.
 * Run: node scripts/gen-qinghe-route.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(__dirname, '../src/data/story/qinghe')

const TITLES = [
  '',
  '卫衣与口罩',
  '潮间带的壳',
  '环灯漏光',
  '价目表',
  '拒打赏',
  '关播的脸',
  '窗外潮声',
  '环灯一夜',
  '汽水与耳机',
  '拾潮的旧物',
  '直播角的空位',
  '线下伪装',
  '订阅墙',
  '关灯预告',
  '小别·断更',
  '回到公寓',
  '常客不是客户',
  '壳的另一面',
  '卖铺拷问',
  '几乎越线',
  '关播夜话',
  '清醒的滤镜',
  '市集伪装',
  '外拍湿衫',
  '清仓的钥匙',
  '争吵的价目',
  '和解的盐',
  '谈到关灯',
  '台风预警',
  '来公寓',
  '环灯还亮',
  '只剩你我',
  '有没有当真',
  '她先关灯',
  '关灯一夜',
  '习惯还是岸',
  '黎明窗外',
  '潮间带·外拍',
  '假装开播',
  '评论区的眼光',
  '备用钥匙',
  '买家皮鞋',
  '订阅死角',
  '去留',
  '为谁关灯',
  '联名的想象',
  '最后通牒',
  '公寓的门',
  '过客不再订',
  '分叉的壳',
]

const BGS = [
  '',
  'street-day',
  'street-night',
  'qinghe-room',
  'qinghe-room',
  'qinghe-room',
  'qinghe-room-off',
  'qinghe-room',
  'qinghe-room',
  'qinghe-room',
  'shop-interior',
  'qinghe-room',
  'market-morning',
  'qinghe-room',
  'qinghe-room-off',
  'port-night',
  'qinghe-room',
  'qinghe-room',
  'qinghe-room-off',
  'shop-back',
  'qinghe-room',
  'qinghe-room-off',
  'qinghe-room',
  'market-morning',
  'tide-pools',
  'shop-interior',
  'street-rain',
  'street-rain',
  'qinghe-room',
  'street-rain',
  'qinghe-room',
  'qinghe-room',
  'qinghe-room-off',
  'qinghe-room-off',
  'qinghe-room-off',
  'qinghe-room-off',
  'qinghe-room',
  'seaside-dawn',
  'tide-pools',
  'qinghe-room',
  'qinghe-room',
  'qinghe-room',
  'shop-interior',
  'qinghe-room-off',
  'seaside-dawn',
  'qinghe-room-off',
  'shop-interior',
  'street-day',
  'qinghe-room',
  'port-night',
  'seaside-dawn',
]

/** Per-chapter unique prose hooks */
const HOOKS = [
  '',
  '旧街日光里，一个戴口罩的女人把棒球帽檐压得很低。卫衣太大，却仍压不住肩线。',
  '手机推送弹出「潮间带的壳」——青绿封面，价目清楚，像一份从不失手的合同。',
  '公寓门缝漏出一圈冷白。环灯还没关，像把夜晚焊在墙上。',
  '她把小黑板翻过来：基础写真、定制、专属——数字写得比潮汐表还整齐。',
  '打赏弹窗亮起。她盯着我，像在等一句「我不是来买的」。',
  '「下播了。」耳机摘下的瞬间，职业媚笑空了半拍。',
  '窗外潮声比评论区诚实。她把窗开一条缝，盐风灌进来。',
  '环灯只留一档。丝质吊带的肩带滑了一寸，她没有立刻拉回去。',
  '她递来一罐常温汽水，有线耳机缠在手腕上，像未剪断的缆绳。',
  '拾潮后仓的樟脑味里，她蹲着帮我装箱，口罩仍挂在下巴。',
  '三脚架旁空出一把椅子。她说：今晚不卖，只坐。',
  '早市人声里，她把帽檐压得更低：「别叫我的网名。」',
  '订阅墙把身体分成可买与不可买。她问：你站哪一边。',
  '她伸手关掉预览灯：「有一天我会关真的。」',
  '账号显示「本周断更」。港口风大，她把钥匙塞回我手里。',
  '两天后门铃响。她站在门外，卫衣换成开衫，像回来对班。',
  '「常客可以续杯，客户只能结账。」她把这句话写在便签上。',
  '关灯后的脸没有滤镜。她允许我多看三秒。',
  '卖铺的中介电话打断夜谈。她问：房卡会不会和我一起被扔掉。',
  '距离近到呼吸交叠。她说停——停在几乎，而不是越过。',
  '关播后只剩潮声。名牌式的价目卡被她扣在台面朝下。',
  '晨光里她打开美颜又关掉：「清醒的滤镜，比滤镜贵。」',
  '市集里她回头确认我还在，像确认一艘不肯走开的船。',
  '潮间带外拍，白衬衫湿透。她说这张不修图，只发给你。',
  '拾潮的钥匙串多了一枚公寓备用。她说：不是交易，是怕台风。',
  '我们吵起来。她说你是不是也在消费我——用关心的方式。',
  '雨棚下她递来盐汽水。和解的味道咸，却干净。',
  '谈到关灯。她说关了就不能假装这是工作。',
  '台风预警刷红。短信只有两个字：来。',
  '我推开她的门。环灯还亮，像不肯卸妆的夜。',
  '她调暗一档：「还亮着，是因为我还没决定信你。」',
  '世界缩成这一间。手机倒扣，评论区终于听不见。',
  '「有没有当真？」她问得很直，像论文摘要。',
  '她先关灯。黑暗里只剩潮声与呼吸——offair。',
  '关灯的一夜。信任与否，决定潮水能不能靠岸。',
  '清晨她问：我们算习惯，还是算岸。',
  '窗外黎明发青。她把环灯收进抽屉一寸。',
  '岩滩上她说寄居蟹会换壳；人有时候也得。',
  '她假装开播，又在开场白里念我的名字——只有我听得到。',
  '评论区问她是谁。她打字：过客。又删掉。',
  '备用钥匙躺在掌心。她说你可以来，但别带打赏。',
  '买家皮鞋踩进拾潮。她站在门外等我，口罩戴好。',
  '订阅后台的死角里，她把我的备注改成「不准结账」。',
  '去留摊在潮间带上。留下，或把壳还给海。',
  '为谁关灯。她要一句不躲进「工作」的坦白。',
  '我们想象联名：拾潮的旧物，配她关灯后的安静。',
  '中介与平台同时催。最后通牒像两股潮。',
  '公寓的门今晚不反锁。她说：过客会自己走开。',
  '她把「接受预约」关掉。过客不再订。',
  '分叉的壳。你站哪边，她就不问第二次。',
]

const LINES_QH = [
  '别用价目表看我。',
  '关了灯，我才是顾清禾。',
  '你可以走，但别付钱走人。',
  '壳是我选的，不是我欠的。',
  '环灯很诚实，人心不一定。',
  '我不怕被看，怕只被订阅。',
  '短暂停泊也可以，别假装永恒。',
  '潮水会退。你呢。',
]

function esc(s) {
  return s
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r/g, '')
    .replace(/\n/g, '\\n')
}

function node(fields) {
  const lines = ['  {']
  for (const [k, v] of Object.entries(fields)) {
    if (v === undefined) continue
    if (typeof v === 'string') lines.push(`    ${k}: '${esc(v)}',`)
    else if (typeof v === 'number' || typeof v === 'boolean' || v === null) lines.push(`    ${k}: ${v},`)
    else lines.push(`    ${k}: ${JSON.stringify(v)},`)
  }
  lines.push('  },')
  return lines.join('\n')
}

function pad(n) {
  return String(n).padStart(2, '0')
}

function nextChapter(n) {
  return n >= 50 ? '__ending__' : `ch${pad(n + 1)}`
}

function buildNormalChapter(n, opts = {}) {
  const title = TITLES[n]
  const bg = BGS[n]
  const hook = HOOKS[n]
  const p = `c${pad(n)}`
  const dense = n <= 15
  const qline = LINES_QH[(n - 1) % LINES_QH.length]
  const nodes = []

  nodes.push(
    node({
      id: `ch${pad(n)}`,
      chapter: n,
      chapterTitle: title,
      bg,
      mood: opts.mood || 'warm',
      sprite: 'qinghe',
      expression: opts.expr || (n >= 12 && n <= 12 ? 'casual' : 'default'),
      cg: null,
      text: `【第${n}章】${title}\n${hook}`,
      next: `${p}-01`,
    }),
  )

  if (dense) {
    nodes.push(
      node({
        id: `${p}-01`,
        sprite: 'qinghe',
        text: `${hook}\n海风把帽檐掀起一瞬，又被她按回去——像把「顾清禾」三个字按回线下。`,
        next: `${p}-02`,
      }),
    )
    nodes.push(
      node({
        id: `${p}-02`,
        sprite: 'qinghe',
        expression: 'soft',
        speaker: '顾清禾',
        text: qline,
        next: `${p}-03`,
      }),
    )
    nodes.push(
      node({
        id: `${p}-03`,
        speaker: '沈屿',
        text:
          n === 1
            ? '我只是路过。你看起来……不像在等人，像在躲人。'
            : n === 2
              ? '这个账号，是你？'
              : '我听着。不录音，不截图。',
        next: `${p}-04`,
      }),
    )
    nodes.push(
      node({
        id: `${p}-04`,
        sprite: 'qinghe',
        expression: n === 2 ? 'tense' : 'avert',
        text:
          n <= 5
            ? '她沉默了两秒。两秒对福利姬来说，已经是事故——事故里却有人。'
            : '环灯的白光在她颧骨上切出一条细线。她没有职业笑，只有呼吸。',
        next: `${p}-05`,
      }),
    )
    nodes.push(
      node({
        id: `${p}-05`,
        sprite: 'qinghe',
        expression: 'default',
        speaker: '顾清禾',
        text:
          n === 4
            ? '价目表写清楚，是为了少费口舌。你要是来结账，门在那边。'
            : n === 5
              ? '打赏可以让我笑。但你要是想走近，就先把支付界面关掉。'
              : '我可以卖被看的部分。剩下的，不标价。',
        next: `${p}-choice`,
      }),
    )
  } else {
    nodes.push(
      node({
        id: `${p}-01`,
        sprite: 'qinghe',
        text: hook,
        next: `${p}-02`,
      }),
    )
    nodes.push(
      node({
        id: `${p}-02`,
        sprite: 'qinghe',
        expression: 'soft',
        speaker: '顾清禾',
        text: qline,
        next: `${p}-03`,
      }),
    )
    nodes.push(
      node({
        id: `${p}-03`,
        speaker: '沈屿',
        text: '我在。',
        next: `${p}-choice`,
      }),
    )
  }

  const choices = opts.choices || [
    {
      text: `「${title}——我听见了。」——认真回应`,
      next: `${p}-r0`,
      affection: 10,
      ...(opts.flag0 ? { setFlag: opts.flag0 } : {}),
    },
    {
      text: '点头，把距离留给她',
      next: `${p}-r1`,
      affection: 5,
    },
    {
      text: '「今天先到这儿。」——尊重节奏',
      next: `${p}-r2`,
      affection: 5,
    },
  ]

  nodes.push(`  {\n    id: '${p}-choice',\n    choices: ${JSON.stringify(choices, null, 6).replace(/"/g, "'")},\n  },`)

  nodes.push(
    node({
      id: `${p}-r0`,
      sprite: 'qinghe',
      expression: 'soft',
      speaker: '顾清禾',
      text: opts.r0 || '……好。那你别用「订阅」的口气跟我说话。',
      next: opts.afterChoice || `${p}-mid`,
      ...(opts.setFlagR0 ? { setFlag: opts.setFlagR0 } : {}),
    }),
  )
  nodes.push(
    node({
      id: `${p}-r1`,
      sprite: 'qinghe',
      expression: 'default',
      text: opts.r1 || '她只是应了一声。帽檐下的眼睛亮了一下，又沉回去。',
      next: opts.afterChoice || `${p}-mid`,
    }),
  )
  nodes.push(
    node({
      id: `${p}-r2`,
      sprite: 'qinghe',
      expression: 'avert',
      speaker: '顾清禾',
      text: opts.r2 || '行。潮水也有退的时候。',
      next: opts.afterChoice || `${p}-mid`,
    }),
  )

  if (!opts.skipMid) {
    nodes.push(
      node({
        id: `${p}-mid`,
        sprite: 'qinghe',
        expression: 'tired',
        text: dense
          ? `这一章的潮位缓缓退开。${title}四个字像留在沙滩上的壳——空的，却还能听见风。`
          : `${title}。夜还很长，壳还没合拢。`,
        next: opts.gate || `${p}-end`,
      }),
    )
  }

  if (opts.affCg) {
    const { threshold, cgId, cgText } = opts.affCg
    nodes.push(
      `  {\n    id: '${p}-gate',\n    affectionBranch: { threshold: ${threshold}, whenMet: '${p}-cg', whenNot: '${p}-aftercg' },\n  },`,
    )
    nodes.push(
      node({
        id: `${p}-cg`,
        bg,
        mood: 'intimate',
        sprite: null,
        cg: cgId,
        text: cgText,
        unlockCg: cgId,
        next: `${p}-aftercg`,
      }),
    )
    nodes.push(
      node({
        id: `${p}-aftercg`,
        sprite: 'qinghe',
        expression: 'soft',
        cg: null,
        text: '灯还在。有些画面已经发生，有些还差一个潮位。',
        next: `${p}-end`,
      }),
    )
  }

  nodes.push(
    node({
      id: `${p}-end`,
      mood: 'warm',
      sprite: null,
      text: `${title}这一幕落下。潮声替未说完的句子收了尾。`,
      next: `${p}-end-cg`,
    }),
  )
  nodes.push(
    node({
      id: `${p}-end-cg`,
      cg: `qh-ch${pad(n)}-end`,
      sprite: null,
      mood: 'warm',
      text: `【CG · 章末】\n${hook}`,
      next: nextChapter(n),
    }),
  )

  return `import type { DialogueNode } from '../../../engine/types'\n\n/** 第${n}章 · ${title} */\nexport const chapter${pad(n)}: DialogueNode[] = [\n${nodes.join('\n')}\n]\n`
}

function buildCh34() {
  const n = 34
  const p = 'c34'
  return `import type { DialogueNode } from '../../../engine/types'

/** 第34章 · 她先关灯 */
export const chapter34: DialogueNode[] = [
${node({
  id: 'ch34',
  chapter: 34,
  chapterTitle: '她先关灯',
  bg: 'qinghe-room',
  mood: 'intimate',
  sprite: 'qinghe',
  expression: 'tense',
  cg: null,
  text: '【第34章】她先关灯\n台风夜里，环灯是屋里唯一的白。她的手指停在开关上，像停在一句还没说出口的同意。',
  next: `${p}-01`,
})}
${node({
  id: `${p}-01`,
  sprite: 'qinghe',
  expression: 'cold',
  speaker: '顾清禾',
  text: '开着灯，我还能假装这是工作。\n关了——就只剩顾清禾。',
  next: `${p}-02`,
})}
${node({
  id: `${p}-02`,
  speaker: '沈屿',
  text: '那你关。我留下来的不是观众。',
  next: `${p}-03`,
})}
${node({
  id: `${p}-03`,
  sprite: 'qinghe',
  expression: 'blush',
  text: '喀哒。环灯灭了。窗外暴雨把公寓切成黑白两半。她的呼吸在黑暗里变得很近——像卸下价目表。',
  next: `${p}-choice`,
  setFlag: 'offair',
})}
  {
    id: '${p}-choice',
    choices: [
      { text: '「我看见你了。」——不当客户', next: '${p}-r0', affection: 15, setFlag: 'not_customer' },
      { text: '握住她的手，不说话', next: '${p}-r1', affection: 10 },
      { text: '「怕你后悔。」——给退路', next: '${p}-r2', affection: 5 },
    ],
  },
${node({
  id: `${p}-r0`,
  sprite: 'qinghe',
  expression: 'soft',
  speaker: '顾清禾',
  text: '……那就别再打开支付。\n关灯的人，不收打赏。',
  next: `${p}-end`,
})}
${node({
  id: `${p}-r1`,
  sprite: 'qinghe',
  expression: 'soft',
  text: '她的手指收紧。黑暗里，职业媚笑彻底消失。',
  next: `${p}-end`,
})}
${node({
  id: `${p}-r2`,
  sprite: 'qinghe',
  expression: 'avert',
  speaker: '顾清禾',
  text: '后悔是以后的事。现在先……别开灯。',
  next: `${p}-end`,
})}
${node({
  id: `${p}-end`,
  mood: 'intimate',
  text: 'offair。这个词不会出现在她的价目表上，却写进了这一夜。',
  next: `${p}-end-cg`,
})}
${node({
  id: `${p}-end-cg`,
  cg: 'qh-ch34-end',
  sprite: null,
  mood: 'intimate',
  text: '【CG · 章末】\n环灯熄灭的瞬间，她先成为顾清禾。',
  next: 'ch35',
})}
]
`
}

function buildCh35() {
  return `import type { DialogueNode } from '../../../engine/types'

/** 第35章 · 关灯一夜 */
export const chapter35: DialogueNode[] = [
${node({
  id: 'ch35',
  chapter: 35,
  chapterTitle: '关灯一夜',
  bg: 'qinghe-room-off',
  mood: 'intimate',
  sprite: 'qinghe',
  expression: 'blush',
  cg: null,
  text: '【第35章】关灯一夜\n门反锁。风还在，世界很远。环灯冷着，只剩潮声。',
  next: 'c35-gate',
})}
  {
    id: 'c35-gate',
    branch: { flag: 'not_customer', whenTrue: 'c35-off', whenFalse: 'c35-nocust' },
  },
${node({
  id: 'c35-nocust',
  sprite: 'qinghe',
  expression: 'tired',
  speaker: '顾清禾',
  text: '今晚到这儿。\n还把我当可结账的人，我不会靠岸——清醒的。',
  next: 'c35-nocust2',
})}
${node({
  id: 'c35-nocust2',
  text: '她只是把毯子分我一半，背对着我。呼吸很长，像一道未开启的门。',
  next: 'c35-end-cg',
})}
  {
    id: 'c35-off',
    branch: { flag: 'offair', whenTrue: 'c35-01', whenFalse: 'c35-nocust' },
  },
${node({
  id: 'c35-01',
  text: '黑暗里她的眼睛很亮。没有滤镜，没有价目，只有一个人。',
  next: 'c35-02',
})}
${node({
  id: 'c35-02',
  sprite: 'qinghe',
  expression: 'blush',
  speaker: '顾清禾',
  text: '接下来不是直播，也不是消遣。\n你确定吗？确定了，我就不装「潮间带的壳」。',
  next: 'c35-03',
})}
${node({
  id: 'c35-03',
  speaker: '沈屿',
  text: '确定。我想靠近的是你，不是订阅。',
  next: 'c35-04',
})}
${node({
  id: 'c35-04',
  text: '她笑了一下，很浅，随即吻上来——清醒、同意、没有退路的那种。',
  next: 'c35-abranch',
  setFlag: 'intimate_night',
})}
  {
    id: 'c35-abranch',
    affectionBranch: { threshold: 50, whenMet: 'c35-cg', whenNot: 'c35-lite' },
  },
${node({
  id: 'c35-cg',
  bg: 'qinghe-room-off',
  mood: 'intimate',
  sprite: null,
  cg: 'darkroom',
  text: '【CG · 关灯一夜】\n暴雨隔绝世界。丝带落地的声音比打赏提示更轻。她看着我，像看着一场终于被允许靠岸的潮汐——不再出售，不再逃。',
  unlockCg: 'darkroom',
  next: 'c35-end-cg',
})}
${node({
  id: 'c35-lite',
  sprite: 'qinghe',
  expression: 'blush',
  text: '吻很深，衣衫乱了，却在将要越过最后一线时停住。额头抵着额头，两人都在发抖。',
  next: 'c35-end-cg',
})}
${node({
  id: 'c35-end-cg',
  cg: 'qh-ch35-end',
  sprite: null,
  mood: 'intimate',
  text: '【CG · 章末】\n关灯的岸上，只留下呼吸与雨。',
  next: 'ch36',
})}
]
`
}

function buildCh44() {
  return `import type { DialogueNode } from '../../../engine/types'

/** 第44章 · 去留 */
export const chapter44: DialogueNode[] = [
${node({
  id: 'ch44',
  chapter: 44,
  chapterTitle: '去留',
  bg: 'seaside-dawn',
  mood: 'cold',
  sprite: 'qinghe',
  expression: 'tired',
  cg: null,
  text: '【第44章】去留\n潮间带露出两条浅浅的路。买家的电话在口袋里震动。',
  next: 'c44-01',
})}
${node({
  id: 'c44-01',
  sprite: 'qinghe',
  speaker: '顾清禾',
  text: '铺子可以卖。人呢。\n你是走，还是……把壳留下。',
  next: 'c44-choice',
})}
  {
    id: 'c44-choice',
    choices: [
      { text: '「留下。」——留下', next: 'c44-stay', affection: 15, setFlag: 'stay' },
      { text: '「卖掉，但会回来。」——保持联系', next: 'c44-go', affection: 0 },
    ],
  },
${node({
  id: 'c44-stay',
  sprite: 'qinghe',
  expression: 'soft',
  speaker: '顾清禾',
  text: '……那就别只把钥匙还给我。\n把你也留下。',
  next: 'c44-end',
})}
${node({
  id: 'c44-go',
  sprite: 'qinghe',
  expression: 'hurt',
  text: '她点头，像签下一份她早就预习过的退房单。',
  next: 'c44-end',
})}
${node({
  id: 'c44-end',
  text: '去留两个字，比价目表更难写。',
  next: 'c44-end-cg',
})}
${node({
  id: 'c44-end-cg',
  cg: 'qh-ch44-end',
  sprite: null,
  text: '【CG · 章末】\n潮间带上的去留。',
  next: 'ch45',
})}
]
`
}

function buildCh45() {
  return `import type { DialogueNode } from '../../../engine/types'

/** 第45章 · 为谁关灯 */
export const chapter45: DialogueNode[] = [
${node({
  id: 'ch45',
  chapter: 45,
  chapterTitle: '为谁关灯',
  bg: 'qinghe-room-off',
  mood: 'warm',
  sprite: 'qinghe',
  expression: 'soft',
  cg: null,
  text: '【第45章】为谁关灯\n她把环灯推向抽屉边缘，却没有推进去。',
  next: 'c45-staygate',
})}
  {
    id: 'c45-staygate',
    branch: { flag: 'stay', whenTrue: 'c45-01', whenFalse: 'ch48' },
  },
${node({
  id: 'c45-01',
  speaker: '顾清禾',
  text: '你留下，是为了拾潮，还是为了我。\n我想听一句不躲进「工作」的话。',
  next: 'c45-choice',
})}
  {
    id: 'c45-choice',
    choices: [
      { text: '「为你关灯。」——坦白', next: 'c45-yes', affection: 10, setFlag: 'confess' },
      { text: '「也为父亲……但更是你。」——诚实', next: 'c45-yes', affection: 10, setFlag: 'confess' },
      { text: '「还说不清。」——回避', next: 'c45-no', affection: 0 },
    ],
  },
${node({
  id: 'c45-yes',
  sprite: 'qinghe',
  expression: 'soft',
  speaker: '顾清禾',
  text: '够了。\n这句话，比打赏贵。',
  next: 'c45-end',
})}
${node({
  id: 'c45-no',
  sprite: 'qinghe',
  expression: 'hurt',
  text: '她把环灯又推回原位，没开，也没关死。',
  next: 'c45-end',
})}
${node({
  id: 'c45-end',
  text: '坦白或不坦白，潮水都听得见。',
  next: 'c45-end-cg',
})}
${node({
  id: 'c45-end-cg',
  cg: 'qh-ch45-end',
  sprite: null,
  text: '【CG · 章末】\n为谁关灯的回声。',
  next: 'ch46',
})}
]
`
}

function buildCh50() {
  return `import type { DialogueNode } from '../../../engine/types'

/** 第50章 · 分叉的壳 */
export const chapter50: DialogueNode[] = [
${node({
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
})}
${node({
  id: 'c50-01',
  text: '一条通向公路与城市，一条通向她的公寓与那盏可以关掉的环灯。',
  next: 'c50-02',
})}
${node({
  id: 'c50-02',
  sprite: 'qinghe',
  expression: 'tired',
  speaker: '顾清禾',
  text: '分叉的壳。\n你站哪边，我就不问第二次。',
  next: 'c50-choice',
})}
  {
    id: 'c50-choice',
    choices: [
      { text: '「站你这边。」——最终心意', next: 'c50-04', affection: 5 },
      { text: '握住她的手，把备用钥匙缠上小指', next: 'c50-04', affection: 5 },
    ],
  },
${node({
  id: 'c50-04',
  text: '她没有再要求完整的句子。潮声替我们把未说完的部分，拍打成某种可以站稳的节奏。',
  next: 'c50-05',
})}
${node({
  id: 'c50-05',
  expression: 'soft',
  speaker: '顾清禾',
  text: '那我这个「壳」，可要改成私人的了。\n……关灯之后的那种。',
  next: 'c50-06',
})}
${node({
  id: 'c50-06',
  text: '晨光越过海平线。三个月的短暂停泊，终于要决定要不要改写成岸。',
  next: 'c50-end-cg',
})}
${node({
  id: 'c50-end-cg',
  cg: 'qh-ch50-end',
  sprite: null,
  mood: 'cold',
  text: '【CG · 章末】\n分叉的壳上，私人的岸名。',
  next: '__ending__',
})}
]
`
}

// --- generate ---
fs.mkdirSync(OUT, { recursive: true })

const special = {
  34: buildCh34,
  35: buildCh35,
  44: buildCh44,
  45: buildCh45,
  50: buildCh50,
}

for (let n = 1; n <= 50; n++) {
  let body
  if (special[n]) {
    body = special[n]()
  } else {
    const opts = {}
    if (n === 5) {
      opts.choices = [
        {
          text: '关掉支付界面——「我不打赏」',
          next: 'c05-r0',
          affection: 15,
          setFlag: 'not_customer',
        },
        { text: '把手机扣在桌上', next: 'c05-r1', affection: 10, setFlag: 'not_customer' },
        { text: '沉默片刻', next: 'c05-r2', affection: 0 },
      ]
      opts.affCg = {
        threshold: 25,
        cgId: 'tip_refuse',
        cgText:
          '【CG · 拒打赏】\n支付界面熄灭。她看着空荡的弹幕位，第一次笑得不像报价。',
      }
      opts.gate = 'c05-gate'
    }
    if (n === 8) {
      opts.affCg = {
        threshold: 15,
        cgId: 'ringlight',
        cgText:
          '【CG · 环灯一夜】\n冷白环灯下，丝质肩带与未说完的价目。她允许你坐进镜头外的椅子——不收费的那种。',
      }
      opts.gate = 'c08-gate'
    }
    if (n === 12) opts.expr = 'casual'
    if (n === 20) {
      opts.affCg = {
        threshold: 40,
        cgId: 'almost_qh',
        cgText:
          '【CG · 几乎越线】\n呼吸交叠的距离里，她说停。几乎，已经是完整的句子。',
      }
      opts.gate = 'c20-gate'
      opts.flag0 = 'shell'
    }
    if (n === 21) {
      opts.affCg = {
        threshold: 30,
        cgId: 'offtalk',
        cgText:
          '【CG · 关播夜话】\n耳机摘下，价目卡朝下。关播后的夜话不标价。',
      }
      opts.gate = 'c21-gate'
    }
    if (n === 23) {
      opts.affCg = {
        threshold: 35,
        cgId: 'market_qh',
        cgText:
          '【CG · 市集伪装】\n帽檐下她回头确认你还在——像确认一艘不肯走开的船。',
      }
      opts.gate = 'c23-gate'
      opts.expr = 'casual'
    }
    if (n === 27) {
      opts.affCg = {
        threshold: 45,
        cgId: 'salt_qh',
        cgText:
          '【CG · 和解的盐】\n雨棚下盐汽水的气泡碎开。和解的咸，干净。',
      }
      opts.gate = 'c27-gate'
    }
    body = buildNormalChapter(n, opts)
  }
  fs.writeFileSync(path.join(OUT, `ch${pad(n)}.ts`), body, 'utf8')
}

const endings = `import type { DialogueNode } from '../../../engine/types'

/**
 * 顾清禾线 · 结局
 * True = aff≥60 + stay + confess + offair + not_customer
 */
export const endingNodes: DialogueNode[] = [
  {
    id: 'ending-true',
    chapter: 50,
    chapterTitle: '壳的岸',
    bg: 'seaside-dawn',
    mood: 'warm',
    sprite: null,
    cg: 'shore_shell',
    text: '【CG · 壳的岸】\\n入秋后，拾潮没有卖掉。公寓里的环灯收进抽屉。清禾把账号改成「偶尔外拍，不接受打赏」。\\n她说：短暂停泊也可以关灯。我说：那我留下。',
    unlockCg: 'shore_shell',
    ending: 'true',
  },
  {
    id: 'ending-good',
    chapter: 50,
    chapterTitle: '亮处相见',
    bg: 'qinghe-room',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'soft',
    cg: null,
    text: '铺子易主，我回了城市。可每当路过潮屿，总会在她关播后按门铃。\\n她递来汽水：「备注还在——不准结账。要不要改成长期？」\\n距离很远，亮处却很近。',
    ending: 'good',
  },
  {
    id: 'ending-bitter',
    chapter: 50,
    chapterTitle: '潮退以后',
    bg: 'port-night',
    mood: 'cold',
    sprite: 'qinghe',
    expression: 'hurt',
    cg: null,
    text: '离开那天，她重新打开环灯，职业媚笑完美无缺。\\n备用钥匙没有索回——放在我手上，像一句不再追问的再见。\\n码头起风。我回头，窗里白光依旧，像从来没有人关过灯。',
    ending: 'bittersweet',
  },
]
`

fs.writeFileSync(path.join(OUT, 'endings.ts'), endings, 'utf8')

const imports = Array.from({ length: 50 }, (_, i) => {
  const p = pad(i + 1)
  return `import { chapter${p} } from './ch${p}'`
}).join('\n')

const spreads = Array.from({ length: 50 }, (_, i) => `  ...chapter${pad(i + 1)},`).join('\n')

const index = `import type { DialogueNode } from '../../../engine/types'
${imports}
import { endingNodes } from './endings'

export const qingheScript: DialogueNode[] = [
  {
    id: 'route-start',
    bg: 'street-day',
    mood: 'warm',
    sprite: 'qinghe',
    expression: 'casual',
    text: '潮屿的旧街有风。有人把「被看」做成生意，也有人在关灯之后，才肯把自己交出来。\\n你抬眼——卫衣、口罩、一双海水玻璃绿的眼睛。',
    next: 'ch01',
  },
${spreads}
  ...endingNodes,
]

export const QINGHE_CHAPTER_COUNT = 50
`

fs.writeFileSync(path.join(OUT, 'index.ts'), index, 'utf8')

console.log('Generated qinghe route: 50 chapters + endings + index')
