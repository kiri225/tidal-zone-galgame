import type { DialogueNode } from '../../../engine/types'

/**
 * 第11章 · 雨天的灯（小说级密度）
 * 入口：← ch10
 * 出口：→ ch12
 */
export const chapter11: DialogueNode[] = [
  {
    id: 'ch11',
    chapter: 11,
    chapterTitle: '雨天的灯',
    bg: 'street-rain',
    mood: 'rain',
    sprite: 'wantang',
    expression: 'default',
    cg: null,
    text: '【第11章】雨天的灯\n第二天傍晚，天说变就变。乌云压得很低，还没走到码头，雨已经先落了下来。',
    next: 'c11-01',
  },
  {
    id: 'c11-01',
    bg: 'street-rain',
    mood: 'rain',
    sprite: 'wantang',
    text: '我绕路经过潮声——招牌的灯亮着，暖黄的光晕在雨幕里晕开一圈，像一句兑现了的、很轻的承诺。',
    next: 'c11-02',
  },
  {
    id: 'c11-02',
    text: '玻璃门上蒙着一层水汽，隔着雨丝，能看见晚棠正低头擦拭吧台，动作不疾不徐，仿佛外面的暴雨与她无关。',
    next: 'c11-03',
  },
  {
    id: 'c11-03',
    text: '我站在屋檐下犹豫了片刻——带着一身湿意进去，多少有些狼狈；可就这么走过去，又觉得辜负了这盏为夜晚点亮的灯。',
    next: 'c11-04',
  },
  {
    id: 'c11-04',
    text: '她像是察觉到了门外的动静，抬起头，隔着雨雾和玻璃，与我对上了视线。',
    next: 'c11-05',
  },
  {
    id: 'c11-05',
    speaker: '林晚棠',
    expression: 'surprised',
    text: '路过？\n进来擦擦吧，地板滑，别摔了。',
    next: 'c11-06',
  },
  {
    id: 'c11-06',
    choices: [
      {
        text: '推门进去',
        next: 'c11-06a',
        affection: 10,
        setFlag: 'rain_visit',
      },
      {
        text: '隔着玻璃挥手，转身离开',
        next: 'c11-06b',
        affection: 0,
      },
    ],
  },
  {
    id: 'c11-06a',
    bg: 'bookstore',
    mood: 'warm',
    text: '风铃响起的瞬间，暖气和纸页的气味一起涌过来，把满身的凉意驱散了大半。',
    next: 'c11-07',
  },
  {
    id: 'c11-06b',
    expression: 'avert',
    text: '她点点头，重新低下头擦杯子，没有再劝。灯光在雨里缩成一小团，像随时会被风雨掐灭的一点星火。',
    next: 'ch12',
  },
  {
    id: 'c11-07',
    text: '晚棠丢给我一条干毛巾。毛巾上有洗衣液和纸页混合的味道，是这间店特有的气息。',
    next: 'c11-08',
  },
  {
    id: 'c11-08',
    speaker: '林晚棠',
    text: '别把雨带到书上。\n嘴里这么嫌弃，手上却已经倒好了一杯热水，推到我面前。',
    next: 'c11-09',
  },
  {
    id: 'c11-09',
    speaker: '沈屿',
    text: '这雨来得挺突然。',
    next: 'c11-10',
  },
  {
    id: 'c11-10',
    speaker: '林晚棠',
    expression: 'default',
    text: '潮屿的雨都这样，说来就来，说走也走得干脆。\n倒不像有些人，走了以后，能拖上十年。',
    next: 'c11-11',
  },
  {
    id: 'c11-11',
    text: '这话带着刺，却又裹着一层若有似无的笑意，让人分不清该认真反驳，还是干脆认打认罚。',
    next: 'c11-12',
  },
  {
    id: 'c11-12',
    choices: [
      {
        text: '「这次不会再走那么久了。」',
        next: 'c11-12a',
        affection: 10,
        setFlag: 'promise_not_long',
      },
      {
        text: '认罚：「是我欠打。」——自嘲化解',
        next: 'c11-12b',
        affection: 5,
      },
    ],
  },
  {
    id: 'c11-12a',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……话别说太满。\n潮屿的雨都能说变就变，人心更是。',
    next: 'c11-13',
  },
  {
    id: 'c11-12b',
    speaker: '林晚棠',
    expression: 'smile',
    text: '算你识相。\n知道欠打，就多留一会儿，把账还清。',
    next: 'c11-13',
  },
  {
    id: 'c11-13',
    text: '窗外的雨越下越密，敲在玻璃上的声音密集得像有人在不停地叩门。店里却因为这场雨，显得格外安稳。',
    next: 'c11-14',
  },
  {
    id: 'c11-14',
    text: '晚棠翻出一本厚厚的相册，摊在吧台上，随意地翻着——大多是些进货单和旧照片，夹杂在一起，毫无章法。',
    next: 'c11-15',
  },
  {
    id: 'c11-15',
    speaker: '林晚棠',
    text: '下雨天没客人，我一般就翻翻这些。\n打发时间，也算是……跟过去打个照面。',
    next: 'c11-16',
  },
  {
    id: 'c11-16',
    text: '她翻到一页，停顿了一下，似乎想把那页快速翻过去，动作却慢了半拍，被我看到了角落里一张模糊的合影。',
    next: 'c11-17',
  },
  {
    id: 'c11-17',
    speaker: '沈屿',
    text: '等等，那张——是我们高中的运动会吗？',
    next: 'c11-18',
  },
  {
    id: 'c11-18',
    speaker: '林晚棠',
    expression: 'avert',
    text: '……是。你非要看清楚是吧。\n她别过脸，却也没有真的把相册合上。',
    next: 'c11-19',
  },
  {
    id: 'c11-19',
    text: '照片里，穿着运动服的少年少女挤在一起，笑得毫无顾忌。我一眼就认出了角落里那个没有笑、却眼神发亮的女孩。',
    next: 'c11-20',
  },
  {
    id: 'c11-20',
    choices: [
      {
        text: '「那时候你看起来很开心。」',
        next: 'c11-20a',
        affection: 10,
      },
      {
        text: '「照片里你没笑，眼睛却在笑。」',
        next: 'c11-20b',
        affection: 15,
        setFlag: 'notice_eyes',
      },
    ],
  },
  {
    id: 'c11-20a',
    speaker: '林晚棠',
    expression: 'soft',
    text: '那天……你跑赢了接力赛最后一棒。\n开心，大概是替你开心的。',
    next: 'c11-21',
  },
  {
    id: 'c11-20b',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……你的观察力，用在这种地方，真是浪费。\n算了，被你说中了也没什么好否认的。',
    next: 'c11-21',
  },
  {
    id: 'c11-21',
    text: '雨声渐渐小了下去，从密集的敲击变成绵长的细响，像一首正在收尾的曲子。',
    next: 'c11-22',
  },
  {
    id: 'c11-22',
    speaker: '林晚棠',
    text: '雨小了，你该趁着这会儿回去，等下又该下大。',
    next: 'c11-23',
  },
  {
    id: 'c11-23',
    text: '她把相册合上，重新收进吧台底下的抽屉，动作轻柔，像是收好了一段刚刚被翻出来、又重新封存的时光。',
    next: 'ch12',
  },
]
