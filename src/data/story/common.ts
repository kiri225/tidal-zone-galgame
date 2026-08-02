import type { DialogueNode } from '../../engine/types'

/** 序章 · 共通（路线中立：不深绑任一女主） */
export const commonScript: DialogueNode[] = [
  {
    id: 'start',
    bg: 'port-night',
    mood: 'cold',
    sprite: null,
    text: '七月的潮屿，空气里总有一层咸。\n出租车停在码头边，引擎熄灭的瞬间，蝉声与潮声一起涌上来。',
    next: 'c2',
  },
  {
    id: 'c2',
    speaker: '沈屿',
    text: '……还是这么湿。',
    next: 'c2b',
  },
  {
    id: 'c2b',
    text: '十年前离开时也是这样的天气。\n那时我以为，只要走得够远，潮汐就追不上记忆。',
    next: 'c3',
  },
  {
    id: 'c3',
    text: '父亲的葬礼办得很简单。亲戚们散得也快。\n只留下一把旧钥匙，和一间叫「拾潮」的铺子——专门收海边人家不要的旧物。',
    next: 'c4',
  },
  {
    id: 'c4',
    bg: 'shop-interior',
    mood: 'warm',
    text: '推开门，尘味混着樟脑。货架上摆着锈掉的怀表、缺角的瓷碗、不知谁的航海日志。\n柜台抽屉里，还有一张发黄的收据——十年前我帮父亲记的账。',
    next: 'c4b',
  },
  {
    id: 'c4b',
    text: '玻璃门内侧，我取出早已写好的纸条：「本店转让洽谈中」。\n胶布撕开的声音，在空店里格外响。',
    next: 'c4c',
  },
  {
    id: 'c4c',
    speaker: '沈屿',
    text: '贴上去就走。别拖。',
    choices: [
      {
        text: '干脆贴上——月底前必须脱身',
        next: 'c5a',
        affection: 0,
        setFlag: 'posted_sign',
      },
      {
        text: '手指顿了一下……先贴一半，边缘卷着',
        next: 'c5b',
        affection: 0,
        setFlag: 'hesitate_sell_early',
      },
    ],
  },
  {
    id: 'c5a',
    text: '纸条贴正。透过玻璃，潮屿的街灯把「转让」两个字照得很清楚。\n像把自己的退路，钉死在了门上。',
    next: 'c5',
  },
  {
    id: 'c5b',
    text: '纸条歪了一点。下缘卷着，像还没下定决心。\n我没再去抚平它。',
    next: 'c5',
  },
  {
    id: 'c5',
    text: '后仓纸箱里翻出一只铁皮铅笔盒。里面没有铅笔，只有一枚光滑的海玻璃，和一张折叠的纸条——父亲字迹：「屿回来时给。」\n没有下文。',
    next: 'c5c',
  },
  {
    id: 'c5c',
    speaker: '沈屿',
    text: '三周。处理完就走。\n……这次别再拖泥带水。',
    next: 'c6',
  },
  {
    id: 'c6',
    bg: 'street-rain',
    mood: 'rain',
    sprite: null,
    text: '夜里下起细雨。店里没有能入口的东西，我沿着记忆里的路走，想找点吃的。\n转角处，一扇玻璃门亮着暖灯。门楣上写着两个字：潮声。',
    next: 'c6b',
  },
  {
    id: 'c6b',
    text: '中学时这条街还没有书店。\n雨痕在玻璃上拖成细线，风铃的影子轻轻晃——有人在灯里，可我不打算推门。\n今晚只是路过。有些门，推开就再也关不上。',
    next: 'c6c',
  },
  {
    id: 'c6c',
    text: '街的尽头，潮屿酒店的灯牌在雨里闪了一下，冷蓝、礼貌、像一张从不失手的名片。\n拾潮的后仓堆满纸箱，没有一张能睡的床。卖铺的三个月，总得找个停泊处。',
    next: 'c7',
  },
  {
    id: 'c7',
    speaker: '沈屿',
    text: '……先把今晚过了。',
    choices: [
      {
        text: '先回店凑合一夜——明天再找住处',
        next: 'c8a',
        affection: 0,
        setFlag: 'provisional_sleep',
      },
      {
        text: '雨里再走一段——把镇子重新认一遍',
        next: 'c8b',
        affection: 0,
        setFlag: 'walk_rain_town',
      },
    ],
  },
  {
    id: 'c8a',
    bg: 'shop-interior',
    mood: 'cold',
    text: '我折回路口。暖灯与冷蓝都退到身后。\n在旧沙发上铺了外套，海玻璃揣在胸口口袋——凉，圆，像一滴被时间冻住的海。',
    next: 'c9',
  },
  {
    id: 'c8b',
    bg: 'street-rain',
    mood: 'rain',
    text: '雨丝斜织。潮声书店的暖光、酒店灯牌的冷蓝，交替掠过余光。\n镇子比记忆里安静，也比记忆里亮——亮的地方，都像在等人推门。',
    next: 'c9',
  },
  {
    id: 'c9',
    text: '处理完铺子就走。最多一个月。\n这句话在心里说过很多遍，雨声把它冲淡了一点，又冲得更清楚。',
    next: 'c10',
  },
  {
    id: 'c10',
    sprite: null,
    mood: 'normal',
    bg: 'port-night',
    text: '【序章结束】\n潮汐还没告诉你，该停靠哪一岸。\n亲密度随选择累积；达到门槛将解锁专属 CG。\n请选择要深入的故事线。',
    next: 'story-select',
  },
]
