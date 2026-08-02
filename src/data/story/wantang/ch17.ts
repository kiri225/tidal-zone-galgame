import type { DialogueNode } from '../../../engine/types'

/**
 * 第17章 · 红酒与借口（小说级密度）
 * 入口：ch16 → ch17…
 * 出口：→ ch18
 */
export const chapter17: DialogueNode[] = [
  {
    id: 'ch17',
    chapter: 17,
    chapterTitle: '红酒与借口',
    bg: 'bookstore-close',
    mood: 'intimate',
    sprite: 'wantang',
    expression: 'default',
    cg: null,
    text: '【第17章】红酒与借口\n酒杯碰响之后，店里安静得能听见蜡烛芯燃烧的细微爆裂——如果这里点着蜡烛的话。事实上，只有雨。',
    next: 'c17-01',
  },
  {
    id: 'c17-01',
    speaker: '林晚棠',
    expression: 'avert',
    text: '别多想。我只是……不想一个人把这瓶喝完。\n开了就要喝完，不然明天会有股怪味——这是原则问题，不是借口。',
    next: 'c17-02',
  },
  {
    id: 'c17-02',
    speaker: '沈屿',
    text: '十年前你也这样，把话说到一半就自己找个理由圆回去。',
    next: 'c17-03',
  },
  {
    id: 'c17-03',
    speaker: '林晚棠',
    expression: 'crossed',
    text: '……那是我聪明。\n把话说全，风险太大——你听全了，是要负责的。',
    next: 'c17-04',
  },
  {
    id: 'c17-04',
    text: '远处传来一声船笛，闷闷的，像被雨泡软了尾音。她低头看着杯里晃动的酒液，睫毛在灯光下投出一小片阴影。',
    next: 'c17-05',
  },
  {
    id: 'c17-05',
    choices: [
      {
        text: '安静陪她喝完这一杯',
        next: 'c17-06a',
        affection: 10,
      },
      {
        text: '「那今晚，想说完哪一句？」——直接问',
        next: 'c17-06b',
        affection: 15,
        setFlag: 'ask_finish',
      },
    ],
  },
  {
    id: 'c17-06a',
    speaker: '林晚棠',
    expression: 'surprised',
    text: '……你倒是听话。\n有时候，听话比聪明更难得——至少不会逼我把风险摊在桌上。',
    next: 'c17-07',
  },
  {
    id: 'c17-06b',
    speaker: '林晚棠',
    expression: 'blush',
    text: '想说的太多，多到得排队。\n先从「你还要不要卖铺」开始——别急，喝完这杯再说。',
    next: 'c17-07',
  },
  {
    id: 'c17-07',
    text: '「卖铺」两个字像一颗小石子，落进原本安静的水面，涟漪散得很慢，却谁都装作没看见。',
    next: 'c17-08',
  },
  {
    id: 'c17-08',
    speaker: '沈屿',
    text: '你今天特别爱用「借口」这个词。红酒是，两只杯子是，账本也是。',
    next: 'c17-09',
  },
  {
    id: 'c17-09',
    speaker: '林晚棠',
    expression: 'avert',
    text: '因为借口比真话轻。\n轻的东西才方便随时收回——你该知道，我们俩都很擅长收回话。',
    next: 'c17-10',
  },
  {
    id: 'c17-10',
    text: '她说这话时语气很平，却没看我，只是转着杯脚，像转一枚拿不定主意的硬币。',
    next: 'c17-11',
  },
  {
    id: 'c17-11',
    choices: [
      {
        text: '「那我们能不能，今晚少收回一点？」——轻轻推一把',
        next: 'c17-12a',
        affection: 10,
        setFlag: 'push_honesty',
      },
      {
        text: '不追问，只是把她的杯子续满',
        next: 'c17-12b',
        affection: 5,
      },
    ],
  },
  {
    id: 'c17-12a',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……你现在学会得寸进尺了。\n好啊——今晚，少收回一点。就一点。',
    next: 'c17-13',
  },
  {
    id: 'c17-12b',
    text: '她看着我倒酒，没说谢，只是那一瞬肩膀松下去一点，像卸掉了一小块看不见的重量。',
    next: 'c17-13',
  },
  {
    id: 'c17-13',
    text: '风把雨丝斜斜甩上玻璃，发出细密的声响，像谁在外面用指甲挠门。她忽然笑了一下，很短，几乎来不及被看见。',
    next: 'c17-14',
  },
  {
    id: 'c17-14',
    speaker: '林晚棠',
    expression: 'laugh',
    text: '想起高二那年，你也总找借口。\n借口交作业迟到，借口不敢直视我，借口——走的那天，连告别都省了。',
    next: 'c17-15',
  },
  {
    id: 'c17-15',
    text: '这句话像被浸过盐水，说出来时轻描淡写，落进耳朵却带着刺痛。我一时不知该辩解还是沉默。',
    next: 'c17-16',
  },
  {
    id: 'c17-16',
    speaker: '沈屿',
    text: '那时候的借口，是因为不知道怎么说「舍不得」。',
    next: 'c17-17',
  },
  {
    id: 'c17-17',
    speaker: '林晚棠',
    expression: 'hurt',
    text: '……现在知道了？\n算了，别现在回答。这个问题——留到明天，或者留到我们都清醒的时候。',
    next: 'c17-18',
  },
  {
    id: 'c17-18',
    text: '瓶身见了底，她把最后一点酒平分进两只杯子，动作很仔细，像在分一件不该被浪费的东西。',
    next: 'c17-19',
  },
  {
    id: 'c17-19',
    speaker: '林晚棠',
    expression: 'book',
    text: '好了，喝完了。\n原则问题解决——你该满意了吧。',
    next: 'c17-20',
  },
  {
    id: 'c17-20',
    text: '她打了个很轻的哈欠，随即掩饰般端起杯子抿了一口，试图把那点疲惫藏进酒里。',
    next: 'c17-21',
  },
  {
    id: 'c17-21',
    speaker: '沈屿',
    text: '困了就早点休息。我帮你把杯子洗了再走。',
    next: 'c17-22',
  },
  {
    id: 'c17-22',
    speaker: '林晚棠',
    expression: 'soft',
    text: '……不急。\n难得有人陪着喝完一整瓶——多坐一会儿，不算借口。',
    next: 'c17-23',
  },
  {
    id: 'c17-23',
    text: '酒意让灯光都变得暖软。她把脚踝搭上吧台横杆，姿态松懈得不像平时那个把每句话都收拾得整整齐齐的人。',
    next: 'c17-23a',
  },
  {
    id: 'c17-23a',
    choices: [
      {
        text: '把外套脱下搭在她肩上',
        next: 'c17-23b',
        affection: 10,
        setFlag: 'coat_on_shoulder',
      },
      {
        text: '只是安静地看着她放松下来',
        next: 'c17-23c',
        affection: 5,
      },
    ],
  },
  {
    id: 'c17-23b',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……谁让你自作主张。\n不过——谢了。店里空调开得凶，冻死也不好看。',
    next: 'c17-23d',
  },
  {
    id: 'c17-23c',
    text: '她没察觉我的视线，只顾着盯着杯底最后一点残酒，像盯着一段快要讲完的故事。',
    next: 'c17-23d',
  },
  {
    id: 'c17-23d',
    text: '窗外雨势渐弱，路灯的光被拉得细长，倒映在湿漉漉的地砖上，像一条通向别处的、模糊的路。',
    next: 'c17-24',
  },
  {
    id: 'c17-24',
    speaker: '林晚棠',
    expression: 'avert',
    text: '对了……你还记得高二那年，教学楼后面那棵榕树吗？',
    next: 'ch18',
  },
]
