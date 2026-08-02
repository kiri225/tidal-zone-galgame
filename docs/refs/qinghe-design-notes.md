# 顾清禾 · 人物稿设计构思（福利姬 · 肉番尺度）

> 状态：**造型锁定（福利姬版）**  
> 参考图：[`qinghe-design-sheet-b.png`](qinghe-design-sheet-b.png)（造型锁定用）· [`qinghe-design-sheet-a.png`](qinghe-design-sheet-a.png)（表情姿态）  
> 对照：[`qinglan-design-notes.md`](qinglan-design-notes.md) · [`wantang-design-sheet-b.png`](wantang-design-sheet-b.png)  
> 旧「海洋站研究员」稿作废。剧本目录：`src/data/story/qinghe/`。

---

## 0. 尺度与参考

| 项 | 定调 |
|----|------|
| 职业 | **福利姬**——付费写真 / 直播卖色气的线上内容女；潮屿长租海边公寓，把「被看」做成生意 |
| 尺度 | **肉番向成熟体**——日常便装已有曲线可读；出镜服=职业服；亲密可到解丝带 / 只剩外套 |
| 参考 | 《暖雪》：**身份一眼可读 + 布料少而准 + 成熟丰满**；福利姬版＝「镜头前的专业暴露」仍像本人，不是换皮泳装 |
| 与晚棠差 | 晚棠＝克制藏欲；清禾＝**职业就是露**，怕的是露完仍没人留下 |
| 与晴岚差 | 晴岚＝冷蓝眼镜 OL、怕被服务化；清禾＝青绿福利姬、**怕只被当订阅号 / 打赏对象**；**默认不戴眼镜** |
| 忌 | 幼态、校服、过度暗黑奇幻；也忌与晴岚同款黑框眼镜 |

**一句话造型**：环灯下的丰满福利姬——报价单写得清楚，眼神却在问「你是来订阅的，还是来停泊的」。

---

## 1. 锁定外观

| 项 | 定稿 |
|----|------|
| 定位 | **肉番福利姬** · 潮屿海边公寓长租 · 线上付费内容 |
| 网名（拟） | 「潮间带的壳」或「清禾_shell」（剧本可改） |
| 年龄体态 | 31 · 约 **170cm** · **丰乳肥臀、细腰、长腿**；比晴岚略沉的成熟肉感 |
| 发型 | 深青褐长发，**半披或随手夹起**；出镜时更卷更湿润；线下常素面低绑 |
| 瞳色 | **海水玻璃绿** |
| 脸型 | 成熟柔和；镜头前会「职业媚」；关掉环灯后表情空半拍 |
| 主色 | **青绿 · 沫白 · 墨黑内衣 · 环灯暖白**；点缀打赏粉 / 珊瑚橙 |
| 气质 | 生意口吻冷静（价目、时长、能不能露脸）；私下直球问「你刚才看的是我，还是滤镜」 |

### 身材锚点

- 胸腰臀夸张可读（福利姬职业刚需）  
- 锁骨 / 腰窝 / 腿根是出镜构图锚点  
- 线下罩衫也压不住曲线（拾潮偶遇可读）  

---

## 2. 换装矩阵

| 服装 | 场景 | 立绘 key（拟） | 肉番要点 |
|------|------|----------------|----------|
| 出镜默认：青绿/黑丝质吊带睡裙 + 薄开衫半敞 | 直播/写真开场 | `default` / `soft` | 职业露；肩带易滑 |
| 硬核出镜：黑/墨绿蕾丝套装 + 丝袜 | 付费场、高价 CG | `lingerie` / `lingerieblush` | 福利姬本职 |
| 线下伪装：宽卫衣/风衣 + 口罩或棒球帽 | 街上、市集、酒店 | `casual` / `casualsoft` | 「普通人」外壳 |
| 海边外拍：湿透白衬衫 + 泳装内搭 | 岩滩/黎明拍摄 | `shore` / `shorewet` | 潮间带隐喻回收 |
| 亲密：只剩开衫或床单 | 关灯后、关掉打赏 | `blouse` / `blouseblush` / `after` | 与订阅场切割 |

特有姿态：

| key | 姿态 |
|-----|------|
| `phone` | 举手机自拍 / 对前置 |
| `ringlight` | 伸手调环灯 |
| `tip` | 展示价目/打赏码又收回 |
| `pose` | 职业摆拍（手挡胸又挡不住） |
| `offair` | 摘耳机、关灯，脸瞬间冷下来 |

---

## 3. 道具锚点

环灯 · 三脚架手机夹 · 有线耳机 · 丝带 · 价目小黑板 / 打赏码（剧情可模糊处理）· 口罩 · 窗外潮声录音笔 · 半杯常温汽水

隐喻：

- **壳 / 订阅墙**＝付费才能看的身体 vs 免费却不敢给的真心  
- **关环灯**＝卸妆级节点（对标晴岚摘名牌）  

---

## 4. 好感 / 视觉同步

| 阶段 | 外观变化 |
|------|----------|
| 初遇 | 线下卫衣口罩；或只闻潮声公寓里的环灯漏光 |
| 信任 | 给他看「关灯脸」；拒绝收他打赏 |
| 高好感 | 外拍湿衫不修图发他；问能不能不开直播 |
| 成人向 | `aff` + `offair`（关灯/不当客户）后进完整版 |

关键 Flag 草案：`offair`（见过关灯后的她）、`not_customer`（拒绝打赏关系）、`shell`（谈壳与订阅）、`stay` / `confess`、`intimate_night`

---

## 5. 色板

```
--qh-sea:       #1F6F6A;
--qh-foam:      #E8F2F0;
--qh-ink:       #1A1A1D;   /* 内衣 / 三脚架 */
--qh-lace:      #2A4A46;   /* 墨绿蕾丝 */
--qh-lamp:      #FFF1DD;   /* 环灯 */
--qh-tip:       #E89AA8;   /* 打赏粉点缀 */
--qh-iris:      #3FA89A;
--qh-skin:      #F0D4C4;
```

---

## 6. 与三人对照

| 角色 | 一句 |
|------|------|
| 晚棠 | 琥珀灯下深 V——怕说完就被丢下 |
| 晴岚 | 冷蓝名牌眼镜——怕被服务化 |
| **清禾** | **环灯青绿福利姬——怕只被当成订阅与打赏** |
| 知夏 | （未开）珊瑚粉画室感 |

---

## 7. 场景 key（对 STORY-DESIGN）

| 地点 key | 名称 | 用途 |
|----------|------|------|
| qinghe-room | 清禾公寓 · 直播角 | 环灯、三脚架、主场景 |
| qinghe-room-off | 公寓 · 关灯后 | 卸「职业脸」、亲密 |
| tide-pools | 潮间带岩滩 | 外拍 / 隐喻 |
| （废）research-station | 原海洋站 | 不再作为清禾主场 |

---

## 8. Prompt 关键词

```
mature 31yo Chinese adult content creator heroine (fuli ji),
voluptuous hourglass, sea-glass green eyes, long teal-brown hair,
NO glasses, teal silk slip dress with open cardigan under ring light,
black lace lingerie variant, oversized hoodie offline disguise,
seaside wet shirt photoshoot variant, cel-shaded anime galgame,
mature sensual Warm Snow-like body language, modern apartment cam setup,
NOT wuxia, Chinese labels on design sheet
```

---

## 9. 资源约定

- **立绘**：绿幕原稿 → `public/images/char/green/qinghe/`（自抠后覆盖 `public/images/char/qinghe-*.png`）
- **CG**：统一 **1536×1024（3:2）**，与晴岚一致；禁止压成 16:9 拉伸。重导出脚本：`scripts/fix-qinghe-cg-ratio.py`
