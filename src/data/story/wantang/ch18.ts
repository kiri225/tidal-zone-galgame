import type { DialogueNode } from '../../../engine/types'

/**
 * 第18章 · 高二那年（小说级密度）
 * 入口：ch17 → ch18…
 * 出口：→ ch19
 */
export const chapter18: DialogueNode[] = [
  {
    id: 'ch18',
    chapter: 18,
    chapterTitle: '高二那年',
    bg: 'bookstore-close',
    mood: 'intimate',
    sprite: 'wantang',
    expression: 'default',
    cg: null,
    text: '【第18章】高二那年\n那棵榕树——我当然记得。它长在教学楼后面，气根垂到能扫到人的头顶，我们都嫌它挡光，却没人真的去剪。',
    next: 'c18-01',
  },
  {
    id: 'c18-01',
    speaker: '沈屿',
    text: '记得。你总在树荫下面等收发室开门，说是躲太阳，其实是躲值日。',
    next: 'c18-02',
  },
  {
    id: 'c18-02',
    speaker: '林晚棠',
    expression: 'smile',
    text: '被你看穿了这么多年，也没提过一次。\n算你有分寸——虽然分寸用得有点晚。',
    next: 'c18-03',
  },
  {
    id: 'c18-03',
    text: '话题绕回校园，操场、晚自习、被没收又悄悄归还的小说。她笑得比平时多，眼角却比平时更软，带着一点被回忆泡湿的痕迹。',
    next: 'c18-04',
  },
  {
    id: 'c18-04',
    speaker: '林晚棠',
    expression: 'tired',
    text: '你还记得高二运动会吗？我们班输了接力，你却在终点线外喊得最凶。',
    next: 'c18-05',
  },
  {
    id: 'c18-05',
    speaker: '沈屿',
    text: '喊得凶，是因为你在最后一棒——摔了一跤又爬起来。',
    next: 'c18-06',
  },
  {
    id: 'c18-06',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……那次膝盖蹭破了皮，你递了张纸巾，一句话没说，脸比我还红。\n那是我第一次觉得，你的沉默不完全是冷淡。',
    next: 'c18-07',
  },
  {
    id: 'c18-07',
    text: '她从围裙口袋里摸出一枚旧糖纸——玻璃纸已经发脆泛黄，边角卷起，被她当作书签夹在诗集里用了很多年。',
    next: 'c18-08',
  },
  {
    id: 'c18-08',
    speaker: '林晚棠',
    expression: 'avert',
    text: '这个……你送的。运动会那天，你从口袋里摸出来，说「甜的，压压惊」。\n我一直没吃，也没舍得扔。',
    next: 'c18-09',
  },
  {
    id: 'c18-09',
    choices: [
      {
        text: '「我以为你早忘了。」——惊讶又心软',
        next: 'c18-10a',
        affection: 10,
      },
      {
        text: '坦白：「其实我也留着一样的东西。」',
        next: 'c18-10b',
        affection: 15,
        setFlag: 'kept_same_token',
      },
    ],
  },
  {
    id: 'c18-10a',
    speaker: '林晚棠',
    expression: 'soft',
    text: '忘了才怪。\n有些东西，忘不掉是因为从没真正拥有过——只能攥紧那点残余。',
    next: 'c18-11',
  },
  {
    id: 'c18-10b',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……你留着什么？\n别说是我随手写的纸条，那种东西也值得你收十年？',
    next: 'c18-11',
  },
  {
    id: 'c18-11',
    text: '灯光把她的侧脸镀出一层旧照片般的黄。窗外雨声渐歇，只剩水管里残留的滴答，一下，又一下，像倒数。',
    next: 'c18-12',
  },
  {
    id: 'c18-12',
    speaker: '林晚棠',
    expression: 'default',
    text: '高二那年冬天，图书馆闭馆前十分钟总会响铃。你每次都装作没听见，多蹭几页书。',
    next: 'c18-13',
  },
  {
    id: 'c18-13',
    speaker: '沈屿',
    text: '因为多蹭那几页，才能多蹭到你多待几分钟。',
    next: 'c18-14',
  },
  {
    id: 'c18-14',
    text: '她愣了一下，随即别开眼，耳根泛起一点不易察觉的红——像被拆穿了一桩藏了十年的小案子。',
    next: 'c18-15',
  },
  {
    id: 'c18-15',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……早说啊。\n那时候要是说了，我们是不是就不用绕这么大一圈潮汐。',
    next: 'c18-16',
  },
  {
    id: 'c18-16',
    text: '话题不知不觉滑向了那个谁都刻意避开的码头。她的声音低下去，像退潮时露出的礁石，湿润，尖锐，藏了很多年的棱角。',
    next: 'c18-17',
  },
  {
    id: 'c18-17',
    speaker: '林晚棠',
    expression: 'surprised',
    text: '你走那天，我站在码头后面。\n不是不想靠近——是靠近了，我怕自己走不了，也怕你走不了。',
    next: 'c18-18',
  },
  {
    id: 'c18-18',
    text: '这句话在我心口砸出一个很深的坑。原来那年那场沉默的告别，不是她的冷漠，而是她拼尽全力才维持住的克制。',
    next: 'c18-19',
  },
  {
    id: 'c18-19',
    choices: [
      {
        text: '「对不起。」——诚恳道歉',
        next: 'c18-20a',
        affection: 10,
      },
      {
        text: '「如果重来，我会回头。」——给出承诺',
        next: 'c18-20b',
        affection: 15,
        setFlag: 'regret_spoken',
      },
    ],
  },
  {
    id: 'c18-20a',
    speaker: '林晚棠',
    expression: 'teary',
    text: '对不起很轻。\n轻到潮汐一冲就没，轻到我这十年，连怨都怨不出个具体的形状。',
    next: 'c18-21',
  },
  {
    id: 'c18-20b',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……别用假设养我。\n假设不会淋雨，不会算账，不会在雨夜里真的推门进来——用现在。',
    next: 'c18-21',
  },
  {
    id: 'c18-21',
    text: '她低头把糖纸重新折好，收回围裙口袋，动作很轻，像把一段终于说出口的心事重新藏好，留一点余地给明天。',
    next: 'c18-22',
  },
  {
    id: 'c18-22',
    speaker: '林晚棠',
    expression: 'default',
    text: '好了，扯远了。\n开店这几年，我倒也学会不指望「如果」——它从不打烊，却也从不进账。',
    next: 'c18-23',
  },
  {
    id: 'c18-23',
    text: '她起身去储物间翻找，回来时手里多了一本边角磨损的相册，封皮上贴着已经褪色的「高二3班」贴纸。',
    next: 'c18-24',
  },
  {
    id: 'c18-24',
    speaker: '林晚棠',
    expression: 'laugh',
    text: '毕业前收的合影，一直忘了寄给谁。\n要不要看看，当年谁的发型最惨？',
    next: 'c18-25',
  },
  {
    id: 'c18-25',
    choices: [
      {
        text: '凑近一起翻看，故意笑话她当年的刘海',
        next: 'c18-26a',
        affection: 10,
      },
      {
        text: '只是安静地看她认真翻页的侧脸',
        next: 'c18-26b',
        affection: 10,
        setFlag: 'watch_her_quietly',
      },
    ],
  },
  {
    id: 'c18-26a',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……那是「厚重感」，不是刘海失败。\n再笑，罚你把这本相册按年份重新排好。',
    next: 'c18-27',
  },
  {
    id: 'c18-26b',
    text: '她没察觉我的视线偏离了照片，只顾着一页页翻，偶尔停在某张合照上，指尖轻轻抚过某个角落。',
    next: 'c18-27',
  },
  {
    id: 'c18-27',
    text: '最后一页夹着一张空白的信纸，边缘已经泛黄，却始终没有落笔——像一句准备了十年、终究没找到开头的话。',
    next: 'ch19',
  },
]
