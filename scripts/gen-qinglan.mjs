/**
 * Generates Su Qinglan 50-chapter route into TypeScript modules.
 * Run: node scripts/gen-qinglan.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '../src/data/story/qinglan')

/** @typedef {{ id: string, [k: string]: any }} Node */

const CHAPTERS = [
  [1, '夜班名牌', 'hotel-lobby', 'warm'],
  [2, '员工价', 'hotel-lobby', 'warm'],
  [3, '三点的咖啡', 'hotel-lobby', 'cold'],
  [4, '客人永远对', 'hotel-lobby', 'normal'],
  [5, '后厨烟', 'hotel-service', 'cold'],
  [6, '登记簿背面', 'hotel-lobby', 'warm'],
  [7, '雨声与门铃', 'hotel-lobby', 'rain'],
  [8, '停泊一夜', 'hotel-bar', 'warm'],
  [9, '早餐的三种吃法', 'hotel-lobby', 'warm'],
  [10, '父亲的订房单', 'shop-back', 'cold'],
  [11, '替班的空位', 'hotel-lobby', 'normal'],
  [12, '制服之外', 'street-day', 'warm'],
  [13, '常住客', 'hotel-bar', 'normal'],
  [14, '夜班日志', 'hotel-lobby', 'cold'],
  [15, '小别·年会', 'hotel-lobby', 'cold'],
  [16, '回到班表', 'hotel-lobby', 'warm'],
  [17, '酒吧收工', 'hotel-bar', 'intimate'],
  [18, '短暂停泊', 'hotel-bar', 'intimate'],
  [19, '卖铺拷问', 'hotel-lobby', 'cold'],
  [20, '几乎越线', 'hotel-corridor', 'intimate'],
  [21, '对班夜话', 'hotel-bar', 'intimate'],
  [22, '清醒的岸', 'hotel-bar', 'warm'],
  [23, '休班早晨', 'market-morning', 'warm'],
  [24, '经理休息日', 'port-dusk', 'warm'],
  [25, '清仓的钥匙', 'shop-interior', 'cold'],
  [26, '争吵的边缘', 'shop-interior', 'cold'],
  [27, '和解的盐', 'street-rain', 'rain'],
  [28, '谈到交班', 'hotel-lobby', 'warm'],
  [29, '台风预警', 'hotel-lobby', 'cold'],
  [30, '来大堂', 'hotel-lobby', 'dark'],
  [31, '应急灯', 'hotel-lobby-storm', 'dark'],
  [32, '只剩值班室', 'hotel-duty', 'intimate'],
  [33, '有没有当真', 'hotel-duty', 'intimate'],
  [34, '她先摘名牌', 'hotel-duty', 'intimate'],
  [35, '雨困值班室', 'hotel-duty', 'intimate'],
  [36, '习惯还是岸', 'hotel-duty', 'intimate'],
  [37, '黎明交班', 'seaside-dawn', 'cold'],
  [38, '潮间带·客房', 'hotel-room', 'warm'],
  [39, '假装前台', 'hotel-lobby', 'normal'],
  [40, '同事的眼光', 'hotel-lobby', 'cold'],
  [41, '备用房卡', 'hotel-lobby', 'warm'],
  [42, '买家皮鞋', 'hotel-lobby', 'cold'],
  [43, '监控死角', 'hotel-monitor', 'rain'],
  [44, '去留', 'hotel-bar', 'warm'],
  [45, '为谁摘牌', 'hotel-bar', 'intimate'],
  [46, '联名的想象', 'shop-interior', 'warm'],
  [47, '最后通牒', 'hotel-lobby', 'cold'],
  [48, '大堂的门', 'hotel-lobby', 'warm'],
  [49, '过客不再订', 'hotel-lobby', 'cold'],
  [50, '分叉的岸', 'seaside-dawn', 'cold'],
]

/** Per-chapter narrative beats: [narration..., sheLine, heLine?, choice?] */
const BEATS = {
  1: {
    open: '潮屿酒店的自动门吐出一阵凉气。前台灯亮得过分礼貌，像一张从不失手的名片。',
    lines: [
      ['旁白', '名牌上写着「苏晴岚 · 夜班经理」。字很小，笑却很大——标准到让人怀疑那笑是否属于她本人。'],
      ['苏晴岚', 'default', '欢迎光临潮屿酒店。\n您是……临时入住吗？看行李，不像度假。'],
      ['沈屿', null, '卖铺。镇上的旧货店——「拾潮」。店里没床，先住两晚。'],
      ['旁白', '她敲键盘的速度很快，指甲修剪得整齐，像一切失控都被预先裁掉。'],
      ['苏晴岚', 'smile', '明白了。本地人卖铺，我们有员工价通道。\n请出示证件。'],
      ['旁白', '房卡递过来时，她的指尖隔着塑料卡轻轻碰了我一下——职业距离刚好一厘米，多一分就像越界。'],
    ],
    choice: [
      ['「谢谢。你值班到几点？」——把她当人问', 10, 'ask_shift'],
      ['「员工价就员工价。」——只谈交易', 0, null],
      ['「名牌上的字，念起来很好听。」——试探温度', 5, null],
    ],
    close: '她把房卡推到台沿：「电梯在左侧。有事按零。」职业笑纹丝不动，像潮水永远盖住礁石。',
  },
  2: {
    open: '第二天傍晚我下楼续住。她仍在，名牌仍亮，笑仍完美。',
    lines: [
      ['旁白', '前台电脑屏幕反光里，映出我衬衫上的灰——清仓一天的证据。'],
      ['苏晴岚', 'cold', '续住可以。员工价再给您三晚。\n条件是：别在大堂抽烟，别把沙子带进电梯。'],
      ['沈屿', null, '听起来像雇佣条款。'],
      ['苏晴岚', 'smile', '酒店没有雇佣客人。\n只有过客，和更短的过客。'],
      ['旁白', '她把「过客」两个字说得很轻，像提醒我，也像提醒她自己。'],
    ],
    choice: [
      ['「那我争取当个长一点的过客。」——顺着她的词', 10, 'habit'],
      ['「卖完就走。」——诚实得近乎冷', 0, null],
      ['「你看起来也像过客。」——反将一军', 5, null],
    ],
    close: '她低头在系统里敲了几下，耳尖微微红了一瞬，随即被冷蓝的顶灯吞掉。',
  },
  3: {
    open: '凌晨三点，酒店像一具安静的肺。我下楼倒水，看见她坐在前台内侧，面前一杯见底的咖啡。',
    lines: [
      ['旁白', '她没戴职业笑。只是撑着额，眼下有淡淡的青。'],
      ['苏晴岚', 'tired', '……客人不睡觉吗。'],
      ['沈屿', null, '店主也不睡。'],
      ['旁白', '沉默并不尴尬。两个人都醒着，像两艘在同一潮位停泊的船，不必鸣笛。'],
      ['苏晴岚', 'coffee', '咖啡机坏了半边。这杯是冷的。\n你要是嫌苦，冰箱里有矿泉水。'],
    ],
    choice: [
      ['「冷的也行。」——坐下陪她对班', 10, 'habit'],
      ['「你该休息。」——关心一句', 5, null],
      ['默默倒水离开——不打扰', 0, null],
    ],
    close: '杯壁上的水珠滑落。窗外潮声很远，像有人在黑暗里翻一本没有页码的登记簿。',
  },
  4: {
    open: '有人在前台拍桌子。醉意、机票、投诉——全朝她砸过来。',
    lines: [
      ['旁白', '她点头、道歉、补房、升级早餐。笑容一寸不乱。'],
      ['苏晴岚', 'smile', '非常抱歉给您带来不便。我马上为您处理。'],
      ['旁白', '客人走后，她在柜台下握紧拳，指节发白，又迅速松开，像什么都没发生。'],
      ['沈屿', null, '你不生气吗。'],
      ['苏晴岚', 'cold', '客人永远对。\n生气是白班的奢侈品。'],
    ],
    choice: [
      ['「在我这儿你可以不对。」——拆她的规矩', 15, 'trust'],
      ['「……辛苦了。」——普通安慰', 5, null],
      ['不说话，只递纸巾', 10, null],
    ],
    close: '她看了我一眼，那一眼很短，却第一次不像对客人。',
  },
  5: {
    open: '卸货通道的灯坏了一盏。我找晚班经理签字，却在后巷撞见她。',
    lines: [
      ['旁白', '她靠着水泥墙，衬衫领口松开一颗扣，名牌翻到背面。没有烟，只有夜风。'],
      ['苏晴岚', 'avert', '……走错了。这里不是给客人看的。'],
      ['沈屿', null, '我不是来看风景的。'],
      ['旁白', '她把领口重新扣好，职业壳子咔哒一声合上，却合得慢了一拍。'],
      ['苏晴岚', 'tense', '签字单给我。\n看完就忘。'],
    ],
    choice: [
      ['「忘不了。」——诚实', 10, null],
      ['「好。」——尊重边界', 5, 'trust'],
      ['「你也可以不当机器。」——太直', 0, null],
    ],
    close: '通道尽头的潮味混着消毒水。破绽一旦被看见，就再也变不成完美的前台。',
  },
  6: {
    open: '前台废纸篓边，一张作废的登记单被风翻过来。背面有铅笔字。',
    lines: [
      ['旁白', '「三点的海比人诚实。」字迹清爽，像她敲键盘的节奏。'],
      ['苏晴岚', 'surprised', '……那是废单。'],
      ['沈屿', null, '废单也写得像诗。'],
      ['苏晴岚', 'avert', '夜班太闲会手痒。\n别告诉白班——他们会以为我精神有问题。'],
      ['旁白', '她把那张纸撕成两半，却把有字的一半塞进围裙口袋，而不是垃圾桶。'],
    ],
    choice: [
      ['「我不会说。」——守秘密', 10, 'trust'],
      ['「再写给我看。」——得寸进尺', 5, null],
      ['装作没看见', 0, null],
    ],
    close: '登记簿合上。有些句子只适合写在作废的纸上，才不会被系统归档。',
  },
  7: {
    open: '雨砸在雨棚上。门铃每隔几分钟响一次——外卖、迷路游客、淋湿的烟民。',
    lines: [
      ['旁白', '每次她刚开口，门铃就打断。我们的对话被切成碎片。'],
      ['苏晴岚', 'tired', '雨夜的前台最吵。\n安静是奢侈品。'],
      ['沈屿', null, '那我站远点，省得占你的安静额度。'],
      ['苏晴岚', 'soft', '……站这儿就行。\n至少你知道什么时候该闭嘴。'],
    ],
    choice: [
      ['继续陪她撑过雨点', 10, 'habit'],
      ['帮她开门接伞', 5, null],
      ['回房避雨', 0, null],
    ],
    close: '门铃又响。她去应门前，回头看了我一眼——像把一句没说完的话，暂存在雨声里。',
  },
  8: {
    open: '酒吧打烊后，她没有赶我走。吧台灯只留一盏，冷蓝变成琥珀。',
    lines: [
      ['旁白', '她把名牌摘下来，扣在掌心，像卸下一小块铠甲。'],
      ['苏晴岚', 'soft', '今晚没有醉鬼。\n你可以坐内侧——只有员工坐内侧。'],
      ['沈屿', null, '那我算员工，还是例外？'],
      ['苏晴岚', 'avert', '算……短暂停泊。\n别问期限。'],
    ],
    cg: { id: 'berth', threshold: 15, title: '停泊一夜', text: '制服未解，名牌却已摘下。吧台内侧两个人并肩，像两艘终于靠上同一根缆桩的船——暂时的，却真实的。' },
    choice: [
      ['「那我系紧缆绳。」——回应隐喻', 10, 'habit'],
      ['沉默陪她坐到杯空', 5, null],
    ],
    close: '杯底最后一滴酒反射灯火。停泊不必宣告，只需要今晚不解开绳。',
  },
  9: {
    open: '交班后的早晨，餐厅只剩员工餐的金属盘碰撞声。',
    lines: [
      ['苏晴岚', 'tired', '早餐。选。\n员工餐、我多做的便当、或者你回房睡——别饿着晕倒在我大堂。'],
    ],
    choice: [
      ['「员工餐。」——跟她同一张桌', 10, 'habit'],
      ['「便当。」——收下她多做的那份', 15, null],
      ['「回房睡。」——拒绝靠近', 0, null],
    ],
    close: '粥很烫。她吃得快，像习惯把一切温热的东西在冷却前解决。',
  },
  10: {
    open: '拾潮后仓的纸箱里，夹着一张发黄的酒店订房单。',
    lines: [
      ['旁白', '日期是十年前。备注栏歪歪扭扭：「晴岚姑娘帮忙看过店，谢。」——父亲的字。'],
      ['沈屿', null, '……我爸订过你们酒店？'],
      ['旁白', '晚上我把单据带到前台。她盯着看了很久。'],
      ['苏晴岚', 'tense', '那年台风，镇上停电。你父亲把钥匙寄存在前台，让我——那时我还是实习生——顺路看一眼卷帘门。\n小事。他偏偏写进备注。'],
      ['旁白', '原来我们中间隔着的，不只是一张房卡，还有一句她从未对我提起的谢。'],
    ],
    choice: [
      ['「谢谢你替他看过店。」——郑重道谢', 15, 'trust'],
      ['「你怎么不早说？」——追问', 5, null],
      ['把单据叠好还给她', 10, null],
    ],
    close: '旧单据重新夹进账本。有些缘分从父亲那一代就开始停泊，只是现在才退潮可见。',
  },
  11: {
    open: '同事请病假。班表上空出一块刺眼的白。',
    lines: [
      ['苏晴岚', 'default', '你能不能……坐一会儿前台。\n不是雇佣。是——拜托。我去处理四楼漏水。'],
      ['旁白', '「拜托」两个字从她嘴里出来，像生锈的锁终于转动。'],
    ],
    choice: [
      ['「去吧。我看着。」——答应', 15, 'habit'],
      ['「我不会系统。」——犹豫', 5, null],
      ['「这不算过客该做的。」——拉开距离', 0, null],
    ],
    close: '我坐在她的位子上，名牌仍在抽屉里。椅背残留一点皂角味。',
  },
  12: {
    open: '白天的旧街刺眼。她换了便装下楼——短袖、帆布鞋，没有名牌。',
    lines: [
      ['旁白', '我差点认不出她。少了制服，她忽然变成一个会买烟、会眯眼看太阳的普通人。'],
      ['苏晴岚', 'casual', '看什么。\n夜班经理也有白天。'],
      ['沈屿', null, '只是……很不一样。'],
      ['苏晴岚', 'avert', '不一样才对。\n制服是给客人的。'],
    ],
    cg: { id: 'offduty', threshold: 25, title: '制服之外', text: '日光下的她没有职业笑，只是把刘海拨到耳后，像终于允许自己被认错一次。' },
    choice: [
      ['「这样也好看。」——真诚', 10, null],
      ['「我想多看看这样的你。」——推进', 15, 'trust'],
    ],
    close: '她买了无糖的冰，分我一半。甜味很淡，像她肯分享的部分。',
  },
  13: {
    open: '酒吧里有个常住客，油滑地朝她眨眼。',
    lines: [
      ['旁白', '「经理又钓到短期的啦？」笑声刺耳。'],
      ['苏晴岚', 'smile', '先生喝多了。我叫代驾。'],
      ['旁白', '她脸色不变。那笑完美得让人发疼。'],
      ['沈屿', null, '你习惯被这样说？'],
      ['苏晴岚', 'cold', '习惯。\n习惯就不会疼——理论上。'],
    ],
    choice: [
      ['「下次我帮你回。」——站边', 15, 'trust'],
      ['「……对不起，听到了。」——笨拙', 5, null],
      ['假装去结账', 0, null],
    ],
    close: '代驾来了。她目送客人离开，肩线终于松下来一寸。',
  },
  14: {
    open: '夜班日志摊在柜台。她去巡楼时，我无意翻到今日备注。',
    lines: [
      ['旁白', '「沈屿。约二十八。卖铺。像会走的那种。」字迹比废单上更用力。'],
      ['苏晴岚', 'hurt', '……看完了？'],
      ['沈屿', null, '像会走的那种——很准。'],
      ['苏晴岚', 'avert', '准才写。\n不准的，我不浪费铅笔。'],
    ],
    choice: [
      ['「也许会改准。」——留下余地', 15, null],
      ['「你观察得很可怕。」——半真半假', 5, null],
      ['「走之前会说再见。」——仍像过客', 0, null],
    ],
    close: '日志合上。铅笔尖断了一截，像某种未写完的判决。',
  },
  15: {
    open: '集团短训通知钉在班表上。她要离开两天。',
    lines: [
      ['苏晴岚', 'default', '替班会照顾你的续住。\n别把沙子带进电梯——再说一次。'],
      ['沈屿', null, '两天而已。'],
      ['苏晴岚', 'soft', '对过客来说，两天很长。\n对夜班来说，两天只是两个交班。'],
    ],
    choice: [
      ['「回来时，我还在。」——承诺', 15, 'habit'],
      ['「一路顺风。」——客气', 5, null],
      ['「反正我会走。」——冷酷诚实', -5, null],
    ],
    close: '她拖着小行李箱进电梯。名牌在领口晃了一下，像挥手，又像告别。',
  },
  16: {
    open: '两天后，她归岗。第一句仍是流程：「欢迎光临——」然后停住。',
    lines: [
      ['旁白', '眼神停了半秒。半秒对前台来说，已经是事故。'],
      ['苏晴岚', 'smile', '……续住还顺利吗。'],
      ['沈屿', null, '沙子没进电梯。人还在。'],
      ['苏晴岚', 'soft', '那就好。\n班表上你的名字——我是说房间号——我核对过了。'],
    ],
    choice: [
      ['「你回来就好。」——直球', 15, 'habit'],
      ['点头，不多说', 5, null],
    ],
    close: '打印机吐出今日报表。她把它夹好，耳尖又红了一点点。',
  },
  17: {
    open: '酒吧收工。她倒了两杯，没有劝酒的甜言，只有一句清醒的邀请。',
    lines: [
      ['苏晴岚', 'lean', '不想一个人对空杯。\n你要是困，就回房。要是不困——坐下。'],
      ['旁白', '酒不烈。烈的是她看人时那种「我知道自己在做什么」的平静。'],
    ],
    choice: [
      ['坐下，碰杯', 10, 'habit'],
      ['「你清醒吗。」——确认', 15, 'trust'],
      ['回房', 0, null],
    ],
    close: '杯沿相碰，声音很轻。清醒的酒比醉更危险——因为它记得每一步。',
  },
  18: {
    open: '酒过一半，她忽然把杯底转了一圈。',
    lines: [
      ['苏晴岚', 'tired', '我习惯把人都当过客。\n省得疼。疼了就证明我又犯规了。'],
      ['沈屿', null, '犯规是什么。'],
      ['苏晴岚', 'avert', '把短暂停泊，当成岸。'],
      ['旁白', '吧台内侧的灯把她的侧脸切成明暗两半——职业与私心，刚好对半。'],
    ],
    choice: [
      ['「岸也可以是人。」——接住', 15, 'trust'],
      ['「那我先当过客。」——配合她的防', 0, null],
      ['「疼也比空着好。」——冒险', 10, null],
    ],
    close: '她没再喝。只是用拇指抹掉杯壁上的水痕，像抹掉一句快说出口的话。',
  },
  19: {
    open: '中介的电话在大堂回响。她听得分明：买家加价，催签字。',
    lines: [
      ['苏晴岚', 'cold', '你走的时候，会不会连房卡一起扔？\n酒店很擅长处理「未归还房卡」。人比较难。'],
      ['沈屿', null, '……你问得很直接。'],
      ['苏晴岚', 'tense', '夜班没时间绕弯。\n绕弯是给白天谈恋爱的人的。'],
    ],
    choice: [
      ['「房卡我会亲手还你。」——认真', 15, 'hesitate_sell'],
      ['「还没决定。」——诚实犹豫', 5, 'hesitate_sell'],
      ['「卖完就走，不拖泥带水。」——刺她', -5, null],
    ],
    close: '电话挂断。前台电脑的光映在她瞳孔里，像两扇随时会落锁的自动门。',
  },
  20: {
    open: '走廊地毯吸收了脚步声。我们停在消防栓旁，呼吸忽然变得很响。',
    lines: [
      ['旁白', '她背靠墙，名牌顶着我胸口。距离近得像违规。'],
      ['苏晴岚', 'blush', '……别把这当成夜班福利。\n我讨厌被服务化。'],
      ['旁白', '几乎吻上。酒气与皂角之间，只差一个决定。'],
    ],
    cg: { id: 'almost_ql', threshold: 40, title: '几乎越线', text: '消防栓的红漆旁，她的唇停在「几乎」。名牌冰凉，呼吸滚烫——信任还没开口，身体已经先一步越界。' },
    choice: [
      ['「我先问清：你愿不愿意。」——尊重', 15, 'trust'],
      ['「你不是服务。是你。」——揭面具', 15, 'trust'],
      ['「今晚太像前夜，先停。」——守界', 10, 'trust'],
    ],
    close: '她轻轻推开我，却把我的衣角捏了两秒才松手。「……回去。明天还有班。」',
  },
  21: {
    open: '又一个打烊后的酒吧。她把名牌放在吧台上，金属磕出一声轻响。',
    lines: [
      ['苏晴岚', 'soft', '坐内侧。\n今晚我想听你说话——不是客房投诉那种。'],
      ['旁白', '内侧的椅子矮一点。像故意让人卸下站在前台的那套骨架。'],
    ],
    cg: { id: 'shifttalk', threshold: 30, title: '对班夜话', text: '名牌躺在台面上。她托着腮，第一次用私人的声音问：卖铺之后，你还想成为谁的岸？' },
    choice: [
      ['诚实讲父亲与城市', 10, null],
      ['「想成为你的。」——冒险', 15, 'habit'],
    ],
    close: '灯灭之前，她把名牌重新别好——却别反了，第二天白班替她正过来。',
  },
  22: {
    open: '我们没有越线。杯空了，人还清醒。',
    lines: [
      ['苏晴岚', 'soft', '习惯比酒更醉。\n我怕的不是你碰我——是碰完你还当这是班表上的一次排班。'],
      ['沈屿', null, '那我就把班表改掉。'],
      ['苏晴岚', 'avert', '……油嘴。\n可今晚这样也好。清醒的岸，至少退潮时还在。'],
    ],
    choice: [
      ['「我记得今晚。」——承诺记忆', 10, 'trust'],
      ['握一下她的手就松开', 5, null],
    ],
    close: '自动门开合。夜风进来，又被挡回去——像一种克制的亲吻。',
  },
  23: {
    open: '休班早晨，码头早市喧闹。她穿便装，指着鱼摊讨价还价。',
    lines: [
      ['旁白', '完全不像夜班经理。更像潮屿土生土长的、会为三块钱认真皱眉的人。'],
      ['苏晴岚', 'smile', '你提袋子。\n经理休息日，指挥权在我。'],
    ],
    cg: { id: 'market_ql', threshold: 35, title: '休班早晨', text: '人潮里她忽然回头确认我还在——那一眼不是前台巡视，是怕短暂停泊提前离港。' },
    choice: [
      ['乖乖提袋子', 10, 'habit'],
      ['「你讨价还价好凶。」——笑她', 5, null],
    ],
    close: '袋里的冰袋渗出水。她的手背凉，碰触却热。',
  },
  24: {
    open: '她带我走非游客路线：防波堤内侧、废弃的灯塔阴影、只有本地人知道的台阶。',
    lines: [
      ['苏晴岚', 'casualsoft', '导游费免了。\n条件是——别拍照发朋友圈。我还不想被集团看见「经理带男客翻墙」。'],
      ['沈屿', null, '那我记在脑子里。'],
      ['苏晴岚', 'soft', '脑子比云端可靠。\n云端会备份，脑子会心疼。'],
    ],
    choice: [
      ['「今天你不像客人眼里的你。」——肯定', 15, 'trust'],
      ['安静跟走', 5, null],
    ],
    close: '夕阳把海切成金与墨。她站在风里，第一次主动伸手拉住我袖口，又假装是风太大。',
  },
  25: {
    open: '拾潮店内纸箱成山。门铃响——她站在门外，便装，手里两瓶盐汽水。',
    lines: [
      ['苏晴岚', 'default', '白班听说你清仓。\n……我休息。进来帮忙不算加班。'],
      ['旁白', '她第一次踏进父亲的店。灰尘在光柱里跳舞，像欢迎一位迟到的见证人。'],
      ['苏晴岚', 'think', '这收音机——你父亲台风年修过。我记得声音。'],
    ],
    choice: [
      ['「一起装箱。」——并肩', 15, 'habit'],
      ['「你休息就好。」——推辞', 0, null],
    ],
    close: '纸箱封口胶带拉出刺响。她额头沾了灰，没有立刻擦——像允许自己脏一点、真一点。',
  },
  26: {
    open: '买家加价的消息像潮水漫进店门。我犹豫的样子被她看在眼里。',
    lines: [
      ['苏晴岚', 'hurt', '果然是过客模板。\n加价一响，缆绳就松。'],
      ['沈屿', null, '我还没签。'],
      ['苏晴岚', 'cold', '还没签和会签，在夜班眼里只差一个交班。'],
      ['旁白', '盐汽水还没开。气氛却已经咸得发苦。'],
    ],
    choice: [
      ['「对不起。我怕。」——认怂且诚实', 10, null],
      ['「别用模板看我。」——争辩', 5, null],
      ['「你本来也当我是过客。」——反击', -10, null],
    ],
    close: '她放下没开的汽水，转身离开。门楣风铃乱响，像一场未完成的争吵。',
  },
  27: {
    open: '雨棚下，我追上去。她站在细雨里，没有撑伞。',
    lines: [
      ['沈屿', null, '对不起。不是模板——是我真的怕留下又离开，伤到你。'],
      ['苏晴岚', 'teary', '……那就别把怕，包装成聪明。'],
      ['旁白', '她把盐汽水塞进我手里，指尖冰凉。'],
    ],
    cg: { id: 'salt_ql', threshold: 45, title: '和解的盐', text: '雨棚下汽水开瓶，泡沫溢出。她靠着柱子笑了一下——很浅，却是真的。咸的不止汽水，还有刚退下去的怒意。' },
    choice: [
      ['「我留下来想清楚。」——给出方向', 15, 'hesitate_sell'],
      ['「先喝完这瓶。」——缓和', 10, null],
    ],
    close: '雨变小。她抬手替我拭掉额角水珠，动作短促，像一次未申报的温柔。',
  },
  28: {
    open: '和解后的凌晨，我们坐在大堂聊到交班。天色一点一点变蓝。',
    lines: [
      ['苏晴岚', 'soft', '习惯坐实了就麻烦。\n麻烦到我想给这习惯，起个名字。'],
      ['沈屿', null, '叫什么。'],
      ['苏晴岚', 'blush', '……还没想好。\n想好了再告诉你——如果你还在。'],
    ],
    choice: [
      ['「我会在。」——加固', 10, 'habit'],
      ['「你起名，我听。」——柔软', 10, null],
    ],
    close: '白班推门进来。她瞬间切换职业笑，对我只留一句极轻的：「去睡。」',
  },
  29: {
    open: '台风预警在酒店广播里循环。她把应急手册翻得纸页起毛。',
    lines: [
      ['苏晴岚', 'cold', '客人进内廊。沙袋、手电筒、对讲机。\n从现在起，我是流程，不是人。'],
      ['旁白', '可她检查窗户时，指尖发抖——只有我看见。'],
    ],
    choice: [
      ['「需要人手吗。」——加入', 10, 'habit'],
      ['回房按指示等待', 0, null],
    ],
    close: '风开始拍门。名牌在她胸前轻颤，像一颗不肯安静的心脏。',
  },
  30: {
    open: '短信只有四个字：「来大堂。」没有表情，没有句号。',
    lines: [
      ['旁白', '走廊灯闪了闪。我跑下去时，她正把最后一批客人安顿进内廊。'],
      ['苏晴岚', 'tense', '你房间靠海窗。不安全。\n从现在起，你跟着值班走。'],
      ['沈屿', null, '命令口吻。'],
      ['苏晴岚', 'cold', '夜班经理的口吻。\n嫌凶就回城。'],
    ],
    choice: [
      ['「听你的。」——服从也是信任', 10, 'trust'],
      ['「我来帮你。」——并肩', 15, 'habit'],
    ],
    close: '对讲机嘶哑作响。她把一把应急钥匙塞进我掌心：「别丢。」',
  },
  31: {
    open: '停电。应急灯把大堂切成一块块病态的绿白。',
    lines: [
      ['旁白', '她打开应急箱，动作稳得像排练过一百次。声音却发紧。'],
      ['苏晴岚', 'tired', '手电给老人房。蜡烛——算了，酒店怕烟感。\n你，跟紧。'],
      ['沈屿', null, '你怕黑？'],
      ['苏晴岚', 'avert', '怕失控。\n黑只是失控的一种包装。'],
    ],
    choice: [
      ['握住她的手腕片刻', 15, 'trust'],
      ['安静跟灯走', 5, null],
    ],
    close: '绿白光里，她的侧脸失去职业滤镜，只剩疲惫的真实。',
  },
  32: {
    open: '值班室只剩一张窄沙发。毯子一床。风声像要把整座酒店掀走。',
    lines: [
      ['旁白', '她把制服外套披在我肩上，自己只剩衬衫。'],
      ['苏晴岚', 'blush', '经理特权：先冻死客人——不对。\n……别告诉集团我乱讲话。'],
      ['旁白', '肩并着肩。体温缓慢地交换，像潮水交换盐分。'],
    ],
    choice: [
      ['把外套还给她一半', 10, null],
      ['「靠近一点。」——请求', 15, 'habit'],
    ],
    close: '窗外什么东西被风撕开。她闭眼，睫毛在应急光里投下细影。',
  },
  33: {
    open: '风声间隙，她忽然问——不看我。',
    lines: [
      ['苏晴岚', 'hurt', '你有没有哪怕一次，把我当过人，而不是前台？\n答慢了也行。但不许用客人那套话术。'],
    ],
    choice: [
      ['「有。从后厨那晚开始。」——具体', 15, 'trust'],
      ['「一直怕说错，所以像在对前台。」——坦白笨', 10, 'trust'],
      ['「从前台看见的，也是你。」——绕一点的真心', 10, 'trust'],
    ],
    close: '她吸了吸鼻子，用玩笑掩盖：「……考核通过。临时的。」',
  },
  34: {
    open: '她伸手摘下名牌。金属扣弹开的声音，在风里小得不可思议。',
    lines: [
      ['苏晴岚', 'blush', '摘了这个，我就不是经理。\n你还要不要——靠近。'],
      ['旁白', '卸妆仪式。比吻更先发生的，是身份的放下。'],
    ],
    choice: [
      ['「要。」——接住', 15, 'unmask'],
      ['「要，但怕你后悔。」——温柔暂缓', 5, 'unmask'],
    ],
    close: '名牌被她放进我衬衫口袋。「替我保管。涨潮之前，别还我。」',
  },
  35: {
    special: 'intimate',
  },
  36: {
    open: '风小了一点。有人的呼吸仍未平。',
    lines: [
      ['苏晴岚', 'soft', '一夜是习惯，还是岸？\n你现在答，我记入夜班日志。'],
    ],
    choice: [
      ['「岸。」——确认', 15, 'trust'],
      ['「想养成习惯的岸。」——幽默认真', 10, 'habit'],
      ['「……还在学怎么停泊。」——诚实软弱', 5, null],
    ],
    close: '她把脸埋进毯子里，闷声：「日志里只写一个字：在。」',
  },
  37: {
    open: '黎明。交班的人陆续到。卖铺的问题像退潮后的礁石，重新露出。',
    lines: [
      ['苏晴岚', 'tired', '白天来了。\n我们又要假装——你是客人，我是经理。'],
      ['沈屿', null, '铺子的事，我会给你答案。'],
      ['苏晴岚', 'cold', '最好快。\n台风过境后，买家比潮水积极。'],
    ],
    choice: [
      ['「先让我送你回去休息。」——照顾', 10, null],
      ['点头离开', 0, null],
    ],
    close: '晨光刺眼。她重新别上备用名牌——主名牌还在我口袋。',
  },
  38: {
    open: '她用经理权限开了一间空的海景房。窗边能看见潮间带。',
    lines: [
      ['苏晴岚', 'soft', '退潮才看得见礁石上挂着谁。\n涨潮的时候，大家都以为自己漂得很漂亮。'],
      ['旁白', '她说这话时看着海，不像在讲风景。'],
      ['沈屿', null, '那你看见我挂在哪儿了吗。'],
      ['苏晴岚', 'avert', '……还在看。\n礁石上的东西，有时是垃圾，有时是缆绳。'],
    ],
    choice: [
      ['「我想当缆绳。」——接隐喻', 15, 'trust'],
      ['并肩看潮不作答', 5, null],
    ],
    close: '潮线往外退。窗玻璃上，两个人的影子短暂重叠。',
  },
  39: {
    open: '复电营业。我们在大堂用「先生」「经理」互称，像排练一出冷笑话。',
    lines: [
      ['苏晴岚', 'smile', '沈先生，您的房卡余额还够。\n需要续住吗？'],
      ['沈屿', null, '苏经理，续。'],
      ['旁白', '白班同事经过时，她笑得滴水不漏。只有我看见她口袋里空着的名牌夹。'],
    ],
    choice: [
      ['配合演出', 5, null],
      ['「私下还叫晴岚。」——低声', 10, 'trust'],
    ],
    close: '打印机响。世界恢复秩序。秩序有时是一种温柔的暴力。',
  },
  40: {
    open: '白班起哄：「经理跟长住房关系不一般哦。」',
    lines: [
      ['旁白', '她面具瞬间合上，完美、光滑、拒人。'],
      ['苏晴岚', 'smile', '客人隐私，同事也请尊重。'],
      ['旁白', '私下她只留给我一句：'],
      ['苏晴岚', 'hurt', '……看见了吧。\n这城里，认真会被当成笑话。'],
    ],
    choice: [
      ['「那笑话我陪你听完。」——站边', 15, 'trust'],
      ['「对不起，连累你。」——内疚', 5, null],
      ['沉默', 0, null],
    ],
    close: '她把备用名牌别正，指尖用力到发白。',
  },
  41: {
    open: '交班前，她塞给我一张员工通道卡。红绳磨损，像常用之物。',
    lines: [
      ['苏晴岚', 'soft', '不是给客人的。\n丢了要写检讨——写我的名字。'],
      ['沈屿', null, '这么重要？'],
      ['苏晴岚', 'avert', '通道通向后厨、值班室、和……我偶尔躲雨的地方。\n你要是还打算扔房卡，这张也一并扔干净。'],
    ],
    choice: [
      ['「我系在钥匙串上。」——收下', 15, 'habit'],
      ['「太贵重，不敢要。」——退缩', 0, null],
    ],
    close: '红绳在掌心发涩。像一句不方便写进系统的许可。',
  },
  42: {
    open: '买家住进酒店。皮鞋在大理石上敲出自信的节奏。',
    lines: [
      ['旁白', '他在前台办入住，笑着跟我点头：「沈老板，我们很快就能签字了。」'],
      ['苏晴岚', 'smile', '欢迎入住。祝您商务顺利。'],
      ['旁白', '职业笑完美。只有我听得出那句「顺利」里的刺。'],
    ],
    choice: [
      ['当场含糊应付买家', 5, 'hesitate_sell'],
      ['「还没决定。」——当她面说', 15, null],
    ],
    close: '电梯门合上。她在键盘上敲字，力度像要把键帽敲裂。',
  },
  43: {
    open: '监控室。她调出大堂画面——我和买家握手的那一瞬被雨点打在玻璃上，模糊成一团。',
    lines: [
      ['苏晴岚', 'hurt', '看清楚了吗。\n过客模板的高潮段落。'],
      ['沈屿', null, '那是应付。不是答应。'],
      ['苏晴岚', 'cold', '监控不收录内心独白。\n只收录手。'],
    ],
    choice: [
      ['「那我用行动改写。」——承诺', 15, null],
      ['「别用监控审判我。」——烦躁', -5, null],
    ],
    close: '屏幕蓝光映着她的眼睛。雨声很大，像有人在外面反复刷卡失败。',
  },
  44: {
    open: '酒吧打烊。她把问题放到台面上，像放一把钥匙。',
    lines: [
      ['苏晴岚', 'tense', '去留。\n我要听完整的句子，不要前台话术。'],
    ],
    choice: [
      ['「我不卖了。我想留在潮屿。」——留下', 15, 'stay'],
      ['「铺子还是要卖。但我会回来住——住你看着的那种。」——半退', 0, null],
    ],
    branchStay: true,
    close: '她没有立刻笑。只是把红绳房卡在指间绕了一圈，又松开。',
  },
  45: {
    special: 'confess',
  },
  46: {
    open: '告白之后的想象很轻，像泡沫，却甜。',
    lines: [
      ['苏晴岚', 'laugh', '拾潮白天卖旧物，酒店夜班——不对。\n或许我辞职，开一间只营业到日出的小馆。你管灯，我管门锁。'],
      ['沈屿', null, '旅行书架也可以。住客把看完的书留下，换下一本。'],
      ['苏晴岚', 'soft', '那招牌写什么。\n「短暂停泊」太丧。「岸名」又太肉麻。'],
    ],
    choice: [
      ['「写潮间带。」——呼应主题', 10, null],
      ['「写我们的名字。」——更大胆', 15, null],
    ],
    close: '想象不必立刻成真。有时它只是为了让人敢把真的那一步迈出去。',
  },
  47: {
    open: '中介最后通牒。集团邮件同时到达：城区平级调动，征求她意见。',
    lines: [
      ['苏晴岚', 'tired', '你走，我也可以走。\n两条船同时离港，潮汐会很干净——干净得什么都不剩。'],
      ['沈屿', null, '你想去城区吗。'],
      ['苏晴岚', 'avert', '想过。\n想过就不代表要。'],
    ],
    choice: [
      ['「别为了逃我而走。」——挽留', 15, 'stay'],
      ['「你自由。」——放手式尊重', 5, null],
    ],
    close: '两部手机屏幕同时暗下。决定还在呼吸里，尚未写成回执。',
  },
  48: {
    open: '夜班结束。侧门的锁她故意没扣死。',
    lines: [
      ['苏晴岚', 'soft', '门留着。\n你要是还回来，别按门铃——门铃是给客人的。'],
      ['旁白', '风灌进走廊。自动门感应到动静，却没有人进出。'],
    ],
    choice: [
      ['「我知道侧门。」——接住', 10, 'habit'],
      ['站在门边看她离开', 5, null],
    ],
    close: '侧门缝里漏进潮声。像一句不肯结束的邀请。',
  },
  49: {
    open: '大堂只剩她。报表打完，铅笔却停在日志最后一行。',
    lines: [
      ['苏晴岚', 'tired', '过客不再订「下一次」。\n下一次是骗自己的续住。'],
      ['旁白', '她把那句关于我的备注涂掉，改写成一个字，又涂掉。'],
      ['苏晴岚', 'teary', '沈屿。\n你要是进来，就别再当短暂停泊。'],
    ],
    choice: [
      ['推开侧门进去', 15, 'trust'],
      ['在门外站到天光', 5, null],
    ],
    close: '铅笔滚落。这一次，没有客人永远对——只有她自己，要一个答案。',
  },
  50: {
    special: 'finale',
  },
}

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n')
}

function pad(n) {
  return String(n).padStart(2, '0')
}

function emitNode(n, indent = '  ') {
  const lines = [`${indent}{`]
  lines.push(`${indent}  id: '${n.id}',`)
  if (n.chapter != null) lines.push(`${indent}  chapter: ${n.chapter},`)
  if (n.chapterTitle) lines.push(`${indent}  chapterTitle: '${esc(n.chapterTitle)}',`)
  if (n.bg) lines.push(`${indent}  bg: '${n.bg}',`)
  if (n.mood) lines.push(`${indent}  mood: '${n.mood}',`)
  if (n.sprite !== undefined) {
    lines.push(`${indent}  sprite: ${n.sprite === null ? 'null' : `'${n.sprite}'`},`)
  }
  if (n.expression) lines.push(`${indent}  expression: '${n.expression}',`)
  if (n.cg !== undefined) {
    lines.push(`${indent}  cg: ${n.cg === null ? 'null' : `'${n.cg}'`},`)
  }
  if (n.speaker) lines.push(`${indent}  speaker: '${esc(n.speaker)}',`)
  if (n.text != null) lines.push(`${indent}  text: '${esc(n.text)}',`)
  if (n.next) lines.push(`${indent}  next: '${n.next}',`)
  if (n.setFlag) lines.push(`${indent}  setFlag: '${n.setFlag}',`)
  if (n.unlockCg) lines.push(`${indent}  unlockCg: '${n.unlockCg}',`)
  if (n.ending) lines.push(`${indent}  ending: '${n.ending}',`)
  if (n.branch) {
    lines.push(
      `${indent}  branch: { flag: '${n.branch.flag}', whenTrue: '${n.branch.whenTrue}', whenFalse: '${n.branch.whenFalse}' },`,
    )
  }
  if (n.affectionBranch) {
    lines.push(
      `${indent}  affectionBranch: { threshold: ${n.affectionBranch.threshold}, whenMet: '${n.affectionBranch.whenMet}', whenNot: '${n.affectionBranch.whenNot}' },`,
    )
  }
  if (n.choices) {
    lines.push(`${indent}  choices: [`)
    for (const c of n.choices) {
      lines.push(`${indent}    {`)
      lines.push(`${indent}      text: '${esc(c.text)}',`)
      lines.push(`${indent}      next: '${c.next}',`)
      if (c.affection != null) lines.push(`${indent}      affection: ${c.affection},`)
      if (c.setFlag) lines.push(`${indent}      setFlag: '${c.setFlag}',`)
      lines.push(`${indent}    },`)
    }
    lines.push(`${indent}  ],`)
  }
  lines.push(`${indent}},`)
  return lines.join('\n')
}

function buildStandardChapter(n, title, bg, mood) {
  const beat = BEATS[n]
  const nodes = []
  const prefix = `c${pad(n)}`
  const nextCh = n < 50 ? `ch${pad(n + 1)}` : '__ending__'

  if (beat.special === 'intimate') {
    nodes.push({
      id: `ch${pad(n)}`,
      chapter: n,
      chapterTitle: title,
      bg,
      mood: 'intimate',
      sprite: 'qinglan',
      expression: 'blush',
      cg: null,
      text: '',
      next: 'c35-trustgate',
    })
    return buildIntimate(n, title, bg, nodes)
  }
  if (beat.special === 'confess') {
    nodes.push({
      id: `ch${pad(n)}`,
      chapter: n,
      chapterTitle: title,
      bg,
      mood,
      sprite: 'qinglan',
      expression: 'tense',
      cg: null,
      text: '',
      next: 'c45-gate',
    })
    return buildConfess(n, title, bg, nodes)
  }
  if (beat.special === 'finale') {
    nodes.push({
      id: `ch${pad(n)}`,
      chapter: n,
      chapterTitle: title,
      bg: 'seaside-dawn',
      mood: 'cold',
      sprite: 'qinglan',
      expression: 'tired',
      cg: null,
      text: '',
      next: 'c50-01',
    })
    return buildFinale(n, title, bg, nodes)
  }

  nodes.push({
    id: `ch${pad(n)}`,
    chapter: n,
    chapterTitle: title,
    bg,
    mood,
    sprite: 'qinglan',
    expression: 'default',
    cg: null,
    text: `【第${n}章】${title}\n${beat.open}`,
    next: `${prefix}-01`,
  })

  let idx = 1
  for (const line of beat.lines) {
    const id = `${prefix}-${pad(idx)}`
    const next = `${prefix}-${pad(idx + 1)}`
    if (line[0] === '旁白') {
      nodes.push({ id, text: line[1], next, sprite: 'qinglan' })
    } else if (line[0] === '沈屿') {
      nodes.push({ id, speaker: '沈屿', text: line[2], next })
    } else {
      nodes.push({
        id,
        speaker: line[0],
        expression: line[1] || 'default',
        sprite: 'qinglan',
        text: line[2],
        next,
      })
    }
    idx++
  }

  if (beat.cg) {
    const branchId = `${prefix}-abranch`
    const cgId = `${prefix}-cg`
    const afterId = `${prefix}-aftercg`
    nodes[nodes.length - 1].next = branchId
    nodes.push({
      id: branchId,
      affectionBranch: {
        threshold: beat.cg.threshold,
        whenMet: cgId,
        whenNot: afterId,
      },
    })
    nodes.push({
      id: cgId,
      cg: beat.cg.id,
      mood: 'intimate',
      bg,
      sprite: null,
      text: `【CG · ${beat.cg.title}】\n${beat.cg.text}`,
      next: afterId,
      unlockCg: beat.cg.id,
    })
    nodes.push({
      id: afterId,
      cg: null,
      sprite: 'qinglan',
      expression: 'soft',
      text: '灯还亮着。有些画面已经发生，有些还差一个潮位。',
      next: `${prefix}-choice`,
    })
  } else {
    nodes[nodes.length - 1].next = `${prefix}-choice`
  }

  if (beat.choice) {
    const choices = beat.choice.map((c, i) => ({
      text: c[0],
      next: `${prefix}-r${i}`,
      affection: c[1],
      setFlag: c[2] || undefined,
    }))
    nodes.push({ id: `${prefix}-choice`, choices })
    for (let i = 0; i < beat.choice.length; i++) {
      nodes.push({
        id: `${prefix}-r${i}`,
        text: i === 0 ? beat.close : '她没有立刻接话，只是把那一瞬间收进眼底，像收进夜班日志的附注。',
        next: `${prefix}-end`,
        sprite: 'qinglan',
        expression: i === 0 ? 'soft' : 'default',
      })
    }
  } else {
    nodes.push({
      id: `${prefix}-choice`,
      text: beat.close,
      next: `${prefix}-end`,
      sprite: 'qinglan',
    })
  }

  // stay branch for ch44
  if (beat.branchStay) {
    const stayEnd = nodes.find((x) => x.id === `${prefix}-r0`)
    const leaveEnd = nodes.find((x) => x.id === `${prefix}-r1`)
    if (stayEnd) stayEnd.next = 'ch45'
    if (leaveEnd) leaveEnd.next = 'ch48'
    // remove generic end
    const endNode = { id: `${prefix}-end`, text: beat.close, next: nextCh }
    // r0/r1 already point away; still add end for safety
    nodes.push(endNode)
  } else {
    nodes.push({
      id: `${prefix}-end`,
      text: `这一章的潮位退下去时，夜班还没结束——有些答案，要留到下一班。`,
      next: nextCh,
      mood,
    })
  }

  return nodes
}

function buildIntimate(n, title, bg, nodes) {
  // ch35: trust gate + affection gate
  nodes[0].text = `【第${n}章】${title}\n值班室的门反锁。风还在，世界很远。`
  nodes[0].next = 'c35-trustgate'
  nodes[0].mood = 'intimate'
  nodes.push({
    id: 'c35-trustgate',
    branch: { flag: 'trust', whenTrue: 'c35-01', whenFalse: 'c35-notrust' },
  })
  nodes.push({
    id: 'c35-notrust',
    sprite: 'qinglan',
    expression: 'tired',
    speaker: '苏晴岚',
    text: '今晚到这儿。\n信任没到的岸，我不靠——清醒的。',
    next: 'c35-notrust2',
  })
  nodes.push({
    id: 'c35-notrust2',
    text: '她只是把毯子分我一半，背对着我。呼吸很长，像一道未开启的门。',
    next: 'ch36',
  })
  nodes.push({
    id: 'c35-01',
    text: '名牌在我口袋里发烫。她看着我，眼睛里没有职业，只有一个人。',
    next: 'c35-02',
  })
  nodes.push({
    id: 'c35-02',
    speaker: '苏晴岚',
    expression: 'blush',
    sprite: 'qinglan',
    text: '接下来不是排班，也不是消遣。\n你确定吗？确定了，我就不装经理了。',
    next: 'c35-03',
  })
  nodes.push({
    id: 'c35-03',
    speaker: '沈屿',
    text: '确定。我想靠近的是你，不是前台。',
    next: 'c35-04',
  })
  nodes.push({
    id: 'c35-04',
    text: '她笑了一下，很浅，随即吻上来——清醒、同意、没有退路的那种。',
    next: 'c35-branch',
    setFlag: 'intimate_night',
  })
  nodes.push({
    id: 'c35-branch',
    affectionBranch: { threshold: 50, whenMet: 'c35-cg', whenNot: 'c35-lite' },
  })
  nodes.push({
    id: 'c35-cg',
    cg: 'dutynight',
    mood: 'intimate',
    bg,
    sprite: null,
    unlockCg: 'dutynight',
    text: '【CG · 雨困值班室】\n应急灯把她的轮廓镶成冷白。风声隔绝世界，只剩呼吸与心跳。她看着我，像看着一场终于被允许靠岸的潮汐——不再服务，不再逃。',
    next: 'ch36',
  })
  nodes.push({
    id: 'c35-lite',
    sprite: 'qinglan',
    expression: 'blush',
    text: '吻很深，衣衫乱了，却在将要越过最后一线时停住。额头抵着额头，两人都在发抖。',
    next: 'c35-lite2',
  })
  nodes.push({
    id: 'c35-lite2',
    speaker: '苏晴岚',
    expression: 'soft',
    text: '今晚这样就好。\n等我更相信你明天还在——剩下的，我不会再躲。',
    next: 'ch36',
  })
  return nodes
}

function buildConfess(n, title, bg, nodes) {
  nodes[0].text = `【第${n}章】${title}\n留下之后，还有一句必须问清的话。`
  nodes[0].next = 'c45-gate'
  nodes.push({
    id: 'c45-gate',
    branch: { flag: 'stay', whenTrue: 'c45-01', whenFalse: 'ch48' },
  })
  nodes.push({
    id: 'c45-01',
    speaker: '苏晴岚',
    expression: 'tense',
    sprite: 'qinglan',
    text: '你留下来——为谁摘的牌？\n为父亲的店，还是为……我。',
    next: 'c45-02',
  })
  nodes.push({
    id: 'c45-02',
    choices: [
      {
        text: '「为你。店是理由，你是答案。」——坦白',
        next: 'c45-yes',
        affection: 15,
        setFlag: 'confess',
      },
      {
        text: '「先为父亲。但我想一起试试。」——回避一半',
        next: 'c45-half',
        affection: 0,
      },
    ],
  })
  nodes.push({
    id: 'c45-yes',
    speaker: '苏晴岚',
    expression: 'teary',
    text: '……真会说话。\n可今晚我允许你说这种肉麻的。',
    next: 'ch46',
  })
  nodes.push({
    id: 'c45-half',
    speaker: '苏晴岚',
    expression: 'hurt',
    text: '也行。\n至少你没用前台话术骗我。',
    next: 'ch48',
  })
  return nodes
}

function buildFinale(n, title, bg, nodes) {
  nodes[0].text = `【第${n}章】${title}\n清晨的潮间带。潮水退去，露出两条浅浅的路。`
  nodes[0].bg = 'seaside-dawn'
  nodes[0].next = 'c50-01'
  nodes.push({
    id: 'c50-01',
    text: '一条通向公路与城市，一条通向酒店侧门与那间旧店。海风带着将至的秋意。',
    next: 'c50-02',
  })
  nodes.push({
    id: 'c50-02',
    speaker: '苏晴岚',
    expression: 'tired',
    sprite: 'qinglan',
    text: '分叉的岸。\n你站哪边，我就不问第二次。',
    next: 'c50-03',
  })
  nodes.push({
    id: 'c50-03',
    choices: [
      {
        text: '「站你这边。」——最终心意',
        next: 'c50-04',
        affection: 5,
      },
      {
        text: '握紧她的手，把员工卡的红绳缠上小指',
        next: 'c50-04',
        affection: 5,
      },
    ],
  })
  nodes.push({
    id: 'c50-04',
    text: '她没有再要求完整的句子。潮声替我们把未说完的部分，拍打成某种可以站稳的节奏。',
    next: 'c50-05',
  })
  nodes.push({
    id: 'c50-05',
    speaker: '苏晴岚',
    expression: 'soft',
    text: '那我这个「岸」，可要重新印名牌了。\n……印私人的那种。',
    next: 'c50-06',
  })
  nodes.push({
    id: 'c50-06',
    text: '晨光越过海平线。三个月的短暂停泊，终于要决定要不要改写成岸名。',
    next: '__ending__',
  })
  return nodes
}

function nodesToTs(n, title, nodes) {
  const body = nodes.map((node) => emitNode(node)).join('\n')
  return `import type { DialogueNode } from '../../../engine/types'

/**
 * 第${n}章 · ${title}
 * 苏晴岚线 · 生成稿（可手改加厚）
 */
export const chapter${pad(n)}: DialogueNode[] = [
${body}
]
`
}

function buildEndings() {
  const endings = [
    {
      id: 'ending-true',
      bg: 'hotel-lobby',
      mood: 'warm',
      sprite: null,
      cg: 'shore_name',
      chapter: 50,
      chapterTitle: '岸名',
      ending: 'true',
      unlockCg: 'shore_name',
      text: '【CG · 岸名】\n入秋后，拾潮没有卖掉。酒店侧门多了一块小黑板：旅行书架，住客可换书。晴岚辞去城区调动，夜班名牌背面用油性笔写了两个字——「在岸」。\n她说：短暂停泊也可以办长期。我说：那我续住。',
    },
    {
      id: 'ending-good',
      bg: 'port-night',
      mood: 'warm',
      sprite: 'qinglan',
      expression: 'soft',
      cg: null,
      chapter: 50,
      chapterTitle: '偶尔续住',
      ending: 'good',
      text: '铺子易主，我回了城市。可每当出差路过潮屿，总会在夜班时段推开那扇侧门。\n晴岚推来一杯无酒精特调：「房卡系统里还有你的备注——会走的那种。要不要我改掉？」\n距离很远，续住却很近。',
    },
    {
      id: 'ending-bitter',
      bg: 'seaside-dawn',
      mood: 'cold',
      sprite: 'qinglan',
      expression: 'hurt',
      cg: null,
      chapter: 50,
      chapterTitle: '完美的笑',
      ending: 'bittersweet',
      text: '离开那天，她亲自办理退房，职业笑完美无缺。\n房卡被她收回抽屉，红绳员工卡没有索回——放在我手上，像一句不再追问的再见。\n码头起风。我回头，大堂灯火依旧，像从来没有人靠岸过。',
    },
  ]
  return `import type { DialogueNode } from '../../../engine/types'

/**
 * 苏晴岚线 · 结局节点
 * True = aff≥60 + stay + confess + trust
 */
export const endingNodes: DialogueNode[] = [
${endings.map((n) => emitNode(n)).join('\n')}
]
`
}

function buildIndex() {
  const imports = CHAPTERS.map(
    ([n]) => `import { chapter${pad(n)} } from './ch${pad(n)}'`,
  ).join('\n')
  const spreads = CHAPTERS.map(([n]) => `  ...chapter${pad(n)},`).join('\n')
  return `import type { DialogueNode } from '../../../engine/types'
${imports}
import { endingNodes } from './endings'

export const qinglanScript: DialogueNode[] = [
  {
    id: 'route-start',
    bg: 'hotel-lobby',
    mood: 'warm',
    sprite: 'qinglan',
    expression: 'default',
    text: '【苏晴岚线】五十章。亲密度与信任（trust）影响 CG、雨夜与结局。\\n先揭面具，再靠近。',
    next: 'ch01',
  },
${spreads}
  ...endingNodes,
]

export const QINGLAN_CHAPTER_COUNT = 50
`
}

function buildChaptersMd() {
  const lines = [
    '# 苏晴岚线 · 50章目录',
    '',
    '> **进度**：第1–50章已生成可玩模块（`ch01.ts`–`ch50.ts`），可按小说密度继续手改加厚。',
    '> 好感轴：信任揭面具 > 身体靠近。True = aff≥60 + stay + confess + trust。',
    '',
    '## 第一幕 · 停泊（1–15）',
    '',
  ]
  for (let i = 0; i < 50; i++) {
    const [n, title] = CHAPTERS[i]
    if (n === 16) lines.push('', '## 第二幕 · 对班（16–28）', '')
    if (n === 29) lines.push('', '## 第三幕 · 卸妆（29–40）', '')
    if (n === 41) lines.push('', '## 第四幕 · 岸名（41–50）', '')
    lines.push(`${n}. ${title} ✅`)
  }
  lines.push('')
  return lines.join('\n')
}

// --- main ---
fs.mkdirSync(outDir, { recursive: true })

for (const [n, title, bg, mood] of CHAPTERS) {
  const nodes = buildStandardChapter(n, title, bg, mood)
  fs.writeFileSync(path.join(outDir, `ch${pad(n)}.ts`), nodesToTs(n, title, nodes), 'utf8')
}

fs.writeFileSync(path.join(outDir, 'endings.ts'), buildEndings(), 'utf8')
fs.writeFileSync(path.join(outDir, 'index.ts'), buildIndex(), 'utf8')
fs.writeFileSync(path.join(outDir, 'CHAPTERS.md'), buildChaptersMd(), 'utf8')

console.log(`Generated ${CHAPTERS.length} chapters → ${outDir}`)
