import type { DialogueNode } from '../../../engine/types'

/**
 * 第16章 · 关店之后（小说级密度）
 * 入口：ch15 → ch16…
 * 出口：→ ch17
 */
export const chapter16: DialogueNode[] = [
  {
    id: 'ch16',
    chapter: 16,
    chapterTitle: '关店之后',
    bg: 'street-rain',
    mood: 'rain',
    sprite: 'wantang',
    expression: 'default',
    cg: null,
    text: '【第16章】关店之后\n她回来的第三夜，雨落得比记忆里更密——密到能把整条旧街揉皱。',
    next: 'c16-01',
  },
  {
    id: 'c16-01',
    bg: 'street-rain',
    mood: 'rain',
    sprite: null,
    text: '伞骨被风顶得歪斜。我绕了远路，只为经过潮声门口——理由早备好：路过。\n可雨里没有「顺路」这种东西，只有借口愿不愿意被拆穿。',
    next: 'c16-02',
  },
  {
    id: 'c16-02',
    text: '门口挂着「打烊」，玻璃后却还亮着一盏暖光。她说过：夜里睡不着，别来砸门，短信就行。\n我没发短信。手机在口袋里，屏幕黑着，像一句故意没被说出口的话。',
    next: 'c16-03',
  },
  {
    id: 'c16-03',
    text: '指节抬起又落下，落下又抬起。最后到底还是敲了——两下，很轻，怕惊到什么，又怕不够真诚。',
    next: 'c16-04',
  },
  {
    id: 'c16-04',
    text: '店里的脚步声停顿了一瞬，像被雨声绊了一下。随后是门闩挪动的轻响。',
    next: 'c16-05',
  },
  {
    id: 'c16-05',
    speaker: '林晚棠',
    expression: 'crossed',
    text: '……这个点了。\n谁教你「短信就行」是用来无视的？',
    next: 'c16-06',
  },
  {
    id: 'c16-06',
    speaker: '沈屿',
    text: '手机没电。至少——这次是真的。',
    next: 'c16-07',
  },
  {
    id: 'c16-07',
    speaker: '林晚棠',
    expression: 'soft',
    text: '……进来。别站在雨里装文艺，湿透了不好看。',
    next: 'c16-08',
  },
  {
    id: 'c16-08',
    bg: 'bookstore-close',
    mood: 'intimate',
    text: '门内只留一盏吧台灯，其余灯早已灭下。她换掉了围裙，亚麻衬衫领口松开两颗扣，随意束起的发垂下几缕，被灯光镀成浅金。\n地板还没拖，我的鞋印一路湿到吧台边。',
    next: 'c16-09',
  },
  {
    id: 'c16-09',
    text: '她转身从柜下抽出一条干毛巾，不由分说扣在我头上，力道不轻不重。',
    next: 'c16-10',
  },
  {
    id: 'c16-10',
    speaker: '林晚棠',
    expression: 'default',
    text: '像只被丢进海里又捞起来的猫。\n擦擦，别把水滴在我刚整理好的诗集区。',
    next: 'c16-11',
  },
  {
    id: 'c16-11',
    text: '毛巾上有洗衣液混着纸页的味道，和很久以前的那把伞如出一辙——原来有些气味，十年也冲不淡。',
    next: 'c16-12',
  },
  {
    id: 'c16-12',
    text: '吧台角落摊着一本账本，红笔圈出几行数字，被她看见我的视线后迅速合上，动作快得像藏起一道伤口。',
    next: 'c16-13',
  },
  {
    id: 'c16-13',
    choices: [
      {
        text: '「账不好看？」——直接问',
        next: 'c16-14a',
        affection: 5,
        setFlag: 'noticed_ledger',
      },
      {
        text: '什么都没看见似地移开视线',
        next: 'c16-14b',
        affection: 5,
      },
    ],
  },
  {
    id: 'c16-14a',
    speaker: '林晚棠',
    expression: 'cold',
    text: '雨季都这样，客人少，书却照样吃灰要除潮。\n别操这个心——你又不是股东。',
    next: 'c16-15',
  },
  {
    id: 'c16-14b',
    speaker: '林晚棠',
    expression: 'avert',
    text: '……谢了，没多问。\n有些账，算给自己看就够。',
    next: 'c16-15',
  },
  {
    id: 'c16-15',
    text: '她转身从柜子里取出一瓶已经开过的红酒，酒液只少了小半指，像是刚开不久，又像是开了很久，只是没舍得一个人喝完。',
    next: 'c16-16',
  },
  {
    id: 'c16-16',
    text: '桌上摆着两只高脚杯——不是一只，是两只。擦得很干净，像早就准备好，又像只是随手拿错。',
    next: 'c16-17',
  },
  {
    id: 'c16-17',
    choices: [
      {
        text: '「在等谁？」——挑眉，故意问',
        next: 'c16-18a',
        affection: 5,
        setFlag: 'ask_who_expected',
      },
      {
        text: '不问，只是安静地坐到吧台前',
        next: 'c16-18b',
        affection: 10,
        setFlag: 'notice_two_glasses',
      },
    ],
  },
  {
    id: 'c16-18a',
    speaker: '林晚棠',
    expression: 'avert',
    text: '……谁都不等。\n习惯拿两只杯子，这样擦的时候不用来回两趟。',
    next: 'c16-19',
  },
  {
    id: 'c16-18b',
    text: '她看我一眼，见我没多问，倒像有点意外——甚至有一瞬的、藏不住的松弛。',
    next: 'c16-19',
  },
  {
    id: 'c16-19',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……好吧，被你看穿也行。\n就是有时候，想着万一有人来。',
    next: 'c16-20',
  },
  {
    id: 'c16-20',
    text: '话说出口，她自己先愣了一下，像被自己的坦白吓到。手指转着杯脚，转得比平时擦杯子更用力。',
    next: 'c16-21',
  },
  {
    id: 'c16-21',
    speaker: '沈屿',
    text: '万一那个人，今晚真的来了呢。',
    next: 'c16-22',
  },
  {
    id: 'c16-22',
    choices: [
      {
        text: '「我想见你。」——说出真话',
        next: 'c16-23a',
        affection: 15,
        setFlag: 'admit_wanted_to_see',
      },
      {
        text: '「路过而已。」——留一点退路',
        next: 'c16-23b',
        affection: 5,
      },
    ],
  },
  {
    id: 'c16-23a',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……你这样说，我怎么反驳。\n算了，反驳也没意思。坐。',
    next: 'c16-24',
  },
  {
    id: 'c16-23b',
    speaker: '林晚棠',
    expression: 'tired',
    text: '路过。\n潮屿的雨夜，路过的人倒是不少——真正推门的没几个。',
    next: 'c16-24',
  },
  {
    id: 'c16-24',
    text: '她拔开软木塞，酒液注入杯中，暗红得像凝住的潮水。递给我时，指尖隔着杯壁擦过我的手背，两人都没有立刻挪开。',
    next: 'c16-25',
  },
  {
    id: 'c16-25',
    text: '雨声在玻璃外织成一张密网，把整间店隔成一座孤岛。收音机里放着一支很旧的爵士曲，音量被她调得很低，低到几乎只剩鼓刷的沙响。',
    next: 'c16-26',
  },
  {
    id: 'c16-26',
    speaker: '林晚棠',
    expression: 'soft',
    text: '这场雨……有点像十年前那年。\n那年也是这个月份，店还没开，我还在别人的店里打工。',
    next: 'c16-27',
  },
  {
    id: 'c16-27',
    text: '她的目光越过我，落在窗外那条被雨拉成细线的旧街，像在望着某个已经不在场的人。',
    next: 'c16-28',
  },
  {
    id: 'c16-28',
    speaker: '沈屿',
    text: '那时候你就想开一家自己的店？',
    next: 'c16-29',
  },
  {
    id: 'c16-29',
    speaker: '林晚棠',
    expression: 'default',
    text: '想有个地方，灯不用看别人脸色开关。\n仅此而已——后来才知道，「仅此而已」也很贵。',
    next: 'c16-30',
  },
  {
    id: 'c16-30',
    text: '她举杯，我们碰了一下，声音很轻，像怕惊动这间店里所有沉睡的旧书。\n酒液滑过喉间，带着黑莓与一点烟熏，后味微苦——像今晚所有还没说完的话。',
    next: 'ch17',
  },
]
