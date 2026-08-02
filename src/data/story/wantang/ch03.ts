import type { DialogueNode } from '../../../engine/types'

/**
 * 第3章 · 会的人（小说级密度）
 * 入口：← ch02
 * 出口：→ ch04
 */
export const chapter03: DialogueNode[] = [
  {
    id: 'ch03',
    chapter: 3,
    chapterTitle: '会的人',
    bg: 'bookstore',
    mood: 'warm',
    sprite: 'wantang',
    expression: 'default',
    cg: null,
    text: '【第3章】会的人\n打烊前，晚棠一边关灯一边说了一句让我愣在原地的话。',
    next: 'c03-01',
  },
  {
    id: 'c03-01',
    text: '最后一盏壁灯灭时，店里只剩吧台那盏暖黄的小灯，把她的影子拉得很长，一直铺到我脚边。',
    next: 'c03-02',
  },
  {
    id: 'c03-02',
    speaker: '林晚棠',
    expression: 'soft',
    text: '会的人，十年前就该留住你。',
    next: 'c03-03',
  },
  {
    id: 'c03-03',
    text: '这句话落下时，像一枚石子投进深井——回声要很久才能浮上来。我站在原地，一时不知该往哪个方向接话。',
    next: 'c03-04',
  },
  {
    id: 'c03-04',
    speaker: '沈屿',
    text: '「会的人」，是指你吗？',
    next: 'c03-05',
  },
  {
    id: 'c03-05',
    speaker: '林晚棠',
    expression: 'wipe',
    text: '……我没说是谁。你自己对号入座，是你的事。\n她拿起抹布，手上的动作却比平时僵硬。',
    next: 'c03-06',
  },
  {
    id: 'c03-06',
    text: '玻璃门外，晚风把「潮声」两个字的招牌灯吹得轻轻晃。店里安静得能听见彼此的呼吸，和冰箱固执的低鸣。',
    next: 'c03-07',
  },
  {
    id: 'c03-07',
    choices: [
      {
        text: '「那句话，到底是什么意思？」——追问',
        next: 'c03-07a',
        affection: 10,
        setFlag: 'ask_meaning',
      },
      {
        text: '「你现在……还想留吗？」——直球',
        next: 'c03-07b',
        affection: 15,
        setFlag: 'ask_meaning',
      },
      {
        text: '假装没听懂，转而问明天的安排',
        next: 'c03-07c',
        affection: 0,
      },
    ],
  },
  {
    id: 'c03-07a',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……字面意思。别逼问。\n有些句子，解释了就死了。',
    next: 'c03-08',
  },
  {
    id: 'c03-07b',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……你学会直球了，沈屿。\n来了再说。别把「想」逼成承诺。',
    next: 'c03-08',
  },
  {
    id: 'c03-07c',
    speaker: '林晚棠',
    expression: 'crossed',
    text: '明天下午三点，别迟到。\n她把没说完的话，重新码进了书架的缝隙里。',
    next: 'c03-08',
  },
  {
    id: 'c03-08',
    text: '无论我怎么接，她都没有再往下说。可那句「十年前就该留住你」，已经像一滴墨落进清水，怎么搅都散不干净。',
    next: 'c03-09',
  },
  {
    id: 'c03-09',
    speaker: '沈屿',
    text: '你还记得那天我走的时候，说了什么吗？',
    next: 'c03-10',
  },
  {
    id: 'c03-10',
    speaker: '林晚棠',
    expression: 'teary',
    text: '记得。你说——「等我」。\n她的声音忽然低了下去，像被什么东西压住。',
    next: 'c03-11',
  },
  {
    id: 'c03-11',
    text: '「等我」两个字，被她说得又轻又冷，像在陈述一件早就过期的合同条款。',
    next: 'c03-12',
  },
  {
    id: 'c03-12',
    speaker: '沈屿',
    text: '十年，是不是太久了。',
    next: 'c03-13',
  },
  {
    id: 'c03-13',
    speaker: '林晚棠',
    expression: 'cold',
    text: '久不久，看等的人怎么算法。\n她抬眼看我，目光第一次没有躲闪。「我算得很仔细。」',
    next: 'c03-14',
  },
  {
    id: 'c03-14',
    choices: [
      {
        text: '「对不起，让你算了这么久。」',
        next: 'c03-14a',
        affection: 15,
        setFlag: 'apologize_wait',
      },
      {
        text: '「我没资格说抱歉，只能说——我回来了。」',
        next: 'c03-14b',
        affection: 10,
        setFlag: 'back_now',
      },
    ],
  },
  {
    id: 'c03-14a',
    speaker: '林晚棠',
    expression: 'teary',
    text: '道歉不能让账本平。\n但……谢谢你还记得欠着。',
    next: 'c03-15',
  },
  {
    id: 'c03-14b',
    speaker: '林晚棠',
    expression: 'tired',
    text: '回来了，就先别急着走。\n这句话，我暂且当利息收下。',
    next: 'c03-15',
  },
  {
    id: 'c03-15',
    text: '她转身去锁前门，钥匙串叮当作响。那一串钥匙里，有一把是我从没见过的新款——大概是这十年里新添的锁。',
    next: 'c03-16',
  },
  {
    id: 'c03-16',
    speaker: '沈屿',
    text: '这十年，你锁了多少扇门？',
    next: 'c03-17',
  },
  {
    id: 'c03-17',
    speaker: '林晚棠',
    expression: 'avert',
    text: '锁的不是门。\n是不想再被同一件事撞开的心。',
    next: 'c03-18',
  },
  {
    id: 'c03-18',
    text: '我忽然明白，那句「会的人十年前就该留住你」，不是在怪我不会——是在怪自己等了太久，久到连怪谁都变得吃力。',
    next: 'c03-19',
  },
  {
    id: 'c03-19',
    text: '她翻找钥匙串时，一枚样式老旧的钥匙晃了出来，木质的钥匙牌上刻着一个模糊的「沈」字——分明不是她的字迹。',
    next: 'c03-20',
  },
  {
    id: 'c03-20',
    speaker: '林晚棠',
    expression: 'book',
    text: '这串钥匙里有一把，是你父亲以前来店里，忘在吧台上的。\n一直没舍得扔。',
    next: 'c03-21',
  },
  {
    id: 'c03-21',
    speaker: '沈屿',
    text: '……原来在你这。',
    next: 'c03-22',
  },
  {
    id: 'c03-22',
    choices: [
      {
        text: '「先放你这儿吧，好歹有个地方记得他。」',
        next: 'c03-22a',
        affection: 10,
        setFlag: 'leave_key_with_her',
      },
      {
        text: '「谢了，我拿回去留个念想。」',
        next: 'c03-22b',
        affection: 5,
        setFlag: 'take_key_back',
      },
    ],
  },
  {
    id: 'c03-22a',
    speaker: '林晚棠',
    expression: 'soft',
    text: '……好。\n那我替你收着——连人带念想。',
    next: 'c03-23',
  },
  {
    id: 'c03-22b',
    speaker: '林晚棠',
    expression: 'default',
    text: '拿去吧。\n本来就该还给你。',
    next: 'c03-23',
  },
  {
    id: 'c03-23',
    text: '她把钥匙串重新收好，动作放轻了些，像是刚刚经手的不是一把铁，而是一段不便声张的悼念。',
    next: 'c03-24',
  },
  {
    id: 'c03-24',
    speaker: '林晚棠',
    expression: 'default',
    text: '别愣着。帮我把最后一批诗集搬上楼，明天二楼要腾地方。',
    next: 'c03-25',
  },
  {
    id: 'c03-25',
    speaker: '沈屿',
    text: '遵命，老板。',
    next: 'c03-26',
  },
  {
    id: 'c03-26',
    speaker: '林晚棠',
    expression: 'smile',
    text: '……老板这个词，你叫得倒顺口。\n她难得地笑了一下，很快又收了回去。',
    next: 'c03-27',
  },
  {
    id: 'c03-27',
    text: '我抱着最后一摞诗集往楼梯口走，脚步比平时慢——像是想把这段安静，尽量走得长一点。楼上的暗处，还有一整座没被光照到的书库在等着我们。',
    next: 'c03-end-cg',
  },
  {
    id: 'c03-end-cg',
    cg: 'ch03-end',
    sprite: null,
    mood: 'intimate',
    text: '【CG · 章末】\n打烊灯只剩一盏。未说完的句子落在吧台与她唇间，像潮汐故意留在岸上的那一线湿痕。',
    next: 'ch04',
  },
]
