import type { DialogueNode } from '../../../engine/types'

/**
 * 第35章 · 雨困一夜（小说级密度）
 * 入口：ch34（intimate_night）→ ch35…
 * 分支：!intimate_night → 直接 ch37；intimate_night 且 affectionBranch≥50% → CG rainnight → ch36；否则 lite → ch37
 */
export const chapter35: DialogueNode[] = [
  {
    id: 'ch35',
    chapter: 35,
    chapterTitle: '雨困一夜',
    bg: 'bookstore-close',
    mood: 'intimate',
    sprite: 'wantang',
    expression: 'default',
    cg: null,
    text: '【第35章】雨困一夜',
    next: 'c35-gate',
  },
  {
    id: 'c35-gate',
    branch: { flag: 'intimate_night', whenTrue: 'c35-01', whenFalse: 'ch37' },
  },
  {
    id: 'c35-01',
    text: '她抬起头看我，眼睛在昏暗里亮得反常，像是把这一整夜积攒的勇气都用在了这一个眼神上。',
    next: 'c35-02',
  },
  {
    id: 'c35-02',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……接下来，不是随口的。\n你确定吗？确定了，我就不装矜持了。',
    next: 'c35-03',
  },
  {
    id: 'c35-03',
    speaker: '沈屿',
    text: '确定。这十年，我没有比现在更确定过什么。',
    next: 'c35-04',
  },
  {
    id: 'c35-04',
    text: '她笑了一下，很轻，像终于卸下了什么重物。她伸手，替我把额前被雨打湿的头发拨到一边，动作生疏却认真。',
    next: 'c35-04b',
  },
  {
    id: 'c35-04b',
    speaker: '林晚棠',
    expression: 'blush',
    text: '你手心在出汗。\n……原来你也会紧张。挺好，扯平了。',
    next: 'c35-04c',
  },
  {
    id: 'c35-04c',
    speaker: '沈屿',
    text: '第一次，本来就该紧张。',
    next: 'c35-05',
  },
  {
    id: 'c35-05',
    text: '烛台已经空了，只剩应急灯的微光，和窗外一浪一浪没有尽头的雨声，把这间书店，变成了一座与外界暂时断联的孤岛。',
    next: 'c35-06',
  },
  {
    id: 'c35-06',
    speaker: '林晚棠',
    expression: 'blush',
    text: '……别看得这么认真，我会紧张。\n我又不是你没见过的人。',
    next: 'c35-07',
  },
  {
    id: 'c35-07',
    speaker: '沈屿',
    text: '正因为见过，才更想认真看。',
    next: 'c35-08',
  },
  {
    id: 'c35-08',
    text: '她轻轻锤了我一下，力道却软得没有半分责怪的意思。窗外风声呼啸，屋内的空气却越来越暖，暖得让人忘了外面还是台风夜。',
    next: 'c35-09',
  },
  {
    id: 'c35-09',
    text: '她伸手关掉了最后一盏应急灯——彻底的黑暗里，只剩下彼此的呼吸、心跳，和窗外永不停歇的潮声。',
    next: 'c35-branch',
  },
  {
    id: 'c35-branch',
    affectionBranch: { threshold: 50, whenMet: 'c35-cg', whenNot: 'c35-lite' },
  },
  {
    id: 'c35-cg',
    cg: 'rainnight',
    mood: 'intimate',
    bg: 'bookstore-close',
    sprite: null,
    text: '【CG · 雨困一夜】\n烛火早已燃尽，唯有应急灯把她的轮廓镶成一圈暖色。雨声隔绝了整个世界，只剩两个人的呼吸。\n她看着我，像看着一场终于愿意靠岸的潮水——不再试探，不再逃。',
    next: 'ch36',
  },
  {
    id: 'c35-lite',
    cg: null,
    sprite: 'wantang',
    expression: 'blush',
    text: '我们的吻越来越深，衣衫也乱了几分，可就在即将越界的那一瞬，两人几乎同时停住，额头抵着额头，一起笑了出来。',
    next: 'c35-lite2',
  },
  {
    id: 'c35-lite2',
    text: '不是身体不愿意——是心里都清楚，还缺一点点，能把「往后余生都留下」这句话，坦然说出口的勇气。',
    next: 'c35-lite3',
  },
  {
    id: 'c35-lite3',
    speaker: '林晚棠',
    expression: 'soft',
    text: '今晚这样就好。\n……先让我相信，你明天早上还在。等我真的信了，剩下的，我不会再怕。',
    next: 'c35-lite4',
  },
  {
    id: 'c35-lite4',
    text: '她把脑袋埋进我颈窝，呼吸渐渐平稳下来。窗外的雨还没停，可怀里的重量，是真实而滚烫的。',
    next: 'ch37',
  },
]
