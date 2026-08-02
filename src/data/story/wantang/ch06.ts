import type { DialogueNode } from '../../../engine/types'

/**
 * 第6章 · 未寄出的诗（小说级密度）
 * 入口：← ch05
 * 出口：→ ch07
 */
export const chapter06: DialogueNode[] = [
  {
    id: 'ch06',
    chapter: 6,
    chapterTitle: '未寄出的诗',
    bg: 'bookstore',
    mood: 'warm',
    sprite: 'wantang',
    expression: 'book',
    cg: null,
    text: '【第6章】未寄出的诗\n下楼整理吧台旁的旧书脊时，一本毫不起眼的笔记本从缝隙里滑了出来，摔在我脚边。',
    next: 'c06-01',
  },
  {
    id: 'c06-01',
    text: '封皮是深蓝色，边角磨得发白。我弯腰去捡，扉页恰好翻开——上面写着我的名字，字迹是她的，工整得像刻上去的。',
    next: 'c06-02',
  },
  {
    id: 'c06-02',
    text: '书脊上有潮痕，像是曾经被雨淋过，又被人小心晾干，重新收好。',
    next: 'c06-03',
  },
  {
    id: 'c06-03',
    speaker: '林晚棠',
    expression: 'avert',
    text: '……那本别动。\n是以前抄给你的诗。你走那天，没来得及给。',
    next: 'c06-04',
  },
  {
    id: 'c06-04',
    text: '她的语气比平时更快，几乎是从吧台后面冲出来，想把本子拿走——手伸到一半，又停住了，像是终究没忍心真的抢过去。',
    next: 'c06-05',
  },
  {
    id: 'c06-05',
    choices: [
      {
        text: '「我想看。」',
        next: 'c06-05a',
        affection: 2,
        setFlag: 'read_poems',
      },
      {
        text: '轻轻合上，放回原处',
        next: 'c06-05b',
        affection: 1,
        setFlag: 'respect_notebook',
      },
      {
        text: '「现在给我，也不晚。」',
        next: 'c06-05c',
        affection: 3,
        setFlag: 'read_poems',
      },
    ],
  },
  {
    id: 'c06-05a',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……随便你。\n反正已经晚了十年，也不差这一刻。',
    next: 'c06-06',
  },
  {
    id: 'c06-05b',
    speaker: '林晚棠',
    expression: 'surprised',
    text: '……谢了。\n有些东西，等你准备好看的时候，我再给你。',
    next: 'c06-05b2',
  },
  {
    id: 'c06-05b2',
    text: '她把本子接过去，抱在胸前，像抱住一件终于不用急着交出去的东西。',
    next: 'ch07',
  },
  {
    id: 'c06-05c',
    speaker: '林晚棠',
    expression: 'teary',
    text: '晚不晚，不是你说了算。\n……看吧。既然它自己都跳出来了。',
    next: 'c06-06',
  },
  {
    id: 'c06-06',
    text: '我翻开笔记本。纸页发脆，边缘泛黄，字迹是她惯常的工整小楷，一行一行，密密地写满了整整半本。',
    next: 'c06-07',
  },
  {
    id: 'c06-07',
    text: '大多是些零碎的句子：潮汐、蝉声、某年夏天的一场雨、某次没说出口的晚安。日期从高二一直写到大学第一年，中间断了很久。',
    next: 'c06-08',
  },
  {
    id: 'c06-08',
    text: '末句写着：「退潮时，岸会记得谁曾经停留。」\n再往下，墨迹在「沈」字停住，像被人猛地按住了笔尖。',
    next: 'c06-08b',
  },
  {
    id: 'c06-08b',
    affectionBranch: { threshold: 4, whenMet: 'c06-cg', whenNot: 'c06-09' },
  },
  {
    id: 'c06-cg',
    cg: 'poem',
    mood: 'intimate',
    bg: 'bookstore',
    sprite: null,
    text: '【CG · 未寄出的诗】\n暖灯把她的侧脸勾得很轻。深蓝封皮上的潮痕、发脆的纸页、停在「沈」字的墨迹——十年没寄出的句子，终于在这一刻被读完。',
    next: 'c06-09',
  },
  {
    id: 'c06-09',
    cg: null,
    sprite: 'wantang',
    expression: 'teary',
    speaker: '沈屿',
    text: '后面呢？',
    next: 'c06-10',
  },
  {
    id: 'c06-10',
    speaker: '林晚棠',
    expression: 'teary',
    text: '后面——你上了船。\n字就写不下去了。',
    next: 'c06-11',
  },
  {
    id: 'c06-11',
    text: '她说这话时，眼睛望着窗外，声音很平，平得像在陈述天气，可指尖却死死掐进了掌心。',
    next: 'c06-12',
  },
  {
    id: 'c06-12',
    choices: [
      {
        text: '「我能帮你把它写完吗？」',
        next: 'c06-12a',
        affection: 3,
        setFlag: 'offer_finish_poem',
      },
      {
        text: '静静把本子还给她，不说话',
        next: 'c06-12b',
        affection: 1,
      },
    ],
  },
  {
    id: 'c06-12a',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……那不是你的字。写完了也不算数。\n可她没有拒绝我把本子留在吧台上，那已经算是一种默许。',
    next: 'c06-13',
  },
  {
    id: 'c06-12b',
    text: '她接过本子，指腹摩挲着那个没写完的「沈」字，像在替过去的自己，抚平一道旧伤口。',
    next: 'c06-13',
  },
  {
    id: 'c06-13',
    text: '翻回前面几页，有一首没写完的诗，题目是《潮间带》，只有开头两句：「涨潮时我们是彼此的岸，退潮后才看清谁是沙。」',
    next: 'c06-14',
  },
  {
    id: 'c06-14',
    speaker: '沈屿',
    text: '这首为什么没写完？',
    next: 'c06-15',
  },
  {
    id: 'c06-15',
    speaker: '林晚棠',
    expression: 'avert',
    text: '因为写到一半，我发现自己不知道——我们俩，谁是岸，谁是沙。\n后来想通了，又觉得没必要写下去了。',
    next: 'c06-16',
  },
  {
    id: 'c06-16',
    text: '「想通了」这三个字，说得平静，却比任何激烈的控诉都更让人心里发沉。',
    next: 'c06-17',
  },
  {
    id: 'c06-17',
    choices: [
      {
        text: '「那现在，你想通了什么？」',
        next: 'c06-17a',
        affection: 2,
        setFlag: 'ask_what_understood',
      },
      {
        text: '「我想，我大概一直是沙。」——自嘲',
        next: 'c06-17b',
        affection: 2,
      },
    ],
  },
  {
    id: 'c06-17a',
    speaker: '林晚棠',
    expression: 'soft',
    text: '想通了：岸从来不是固定的。\n潮水涨落之间，谁都可能是岸，也可能是沙——重要的是，愿不愿意留下来看清楚。',
    next: 'c06-18',
  },
  {
    id: 'c06-17b',
    speaker: '林晚棠',
    expression: 'hurt',
    text: '……你要这么说，那我大概也是。\n我们都一样，被潮水冲得没了棱角。',
    next: 'c06-18',
  },
  {
    id: 'c06-18',
    text: '窗外的夕光渐渐染红，把本子上那些未写完的字句照得像是浸了血一样鲜活。',
    next: 'c06-19',
  },
  {
    id: 'c06-19',
    speaker: '林晚棠',
    text: '看够了吧。该收摊了。\n她伸手想把本子拿回去，动作却比先前柔和了许多。',
    next: 'c06-20',
  },
  {
    id: 'c06-20',
    text: '我把本子递还给她，指尖在封面上多停留了一秒——像是想把里面那些没说完的句子，先替她记一半在心里。',
    next: 'c06-21',
  },
  {
    id: 'c06-21',
    speaker: '沈屿',
    text: '谢谢你没有烧掉它。',
    next: 'c06-22',
  },
  {
    id: 'c06-22',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……烧过一次念头。\n后来觉得，烧了也是白烧——有些东西，早就写进了别处，烧不掉。',
    next: 'c06-23',
  },
  {
    id: 'c06-23',
    text: '她把本子重新塞回原来那道书缝，动作和刚才一样轻，仿佛那不是一本笔记本，而是一小块脆弱的、需要藏好的时间。',
    next: 'ch07',
  },
]
