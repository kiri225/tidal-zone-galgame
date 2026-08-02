# 苏晴岚 · 人物稿定稿说明（爆乳 OL · 黑框眼镜）

参考图：

- [`qinglan-design-sheet-b.png`](qinglan-design-sheet-b.png) — 造型 / 换装 / 色板 / 道具（**锁定用**）
- [`qinglan-design-sheet-a.png`](qinglan-design-sheet-a.png) — 表情与姿态总览

对照晚棠：[`wantang-design-sheet-b.png`](wantang-design-sheet-b.png)

## 锁定外观

| 项 | 定稿 |
|----|------|
| 定位 | **爆乳干练 OL** · 酒店夜班经理 |
| 标志配件 | **黑框眼镜**（粗框矩形，全表情/全换装必戴，除非剧情明确摘下） |
| 年龄体态 | 29 · 约 168cm · 丰满胸围（比常规 OL 再大一圈）、细腰、长腿 |
| 发型 | 深色利落低盘发 + 轻刘海 |
| 瞳色 | 冷灰蓝（镜片后） |
| 主色 | 海军蓝紧身西装 · 冷蓝点缀 · 银名牌 · **忌琥珀暖调** |
| 默认服 | 合身夜班西装 + 白衬衫微开领 + 黑色铅笔裙 + 丝袜高跟鞋 + 名牌 + 黑框眼镜 |
| 气质 | 知性眼镜 OL；职业笑完美；身材外放、内心孤独 |

## 换装

| 服装 | 场景 | 立绘 key（拟） |
|------|------|----------------|
| 紧身夜班制服 + 眼镜 + 名牌 | 大堂 / 默认 | `default` 系 |
| 解外套 / 衬衫 | 疲惫对班、应急 | `tired` / 动作 |
| 休班毛衣牛仔 + 眼镜 | 制服之外、早市 | `casual` / `casualsoft` |
| 卸名牌解领（可摘镜） | 值班室、亲密 | `blouse` / `blouseblush` |

## 道具锚点

黑框眼镜 · 名牌 · 红绳员工卡 · 夜班日志 · 应急手电 · 盐汽水

## 绿幕立绘（待抠）

目录：`public/images/char/green/qinglan/`（与晚棠批次分开）

| 批次 | 内容 |
|------|------|
| `batch-01-expressions/` | 表情 + crossed / book |
| `batch-02-actions/` | lean / coffee / write / offer… |
| `batch-03-outfits/` | casual* / blouse* |

抠好后写入 `public/images/char/qinglan-{key}.png`，再改 `assets.ts` 的 `qinglanSprites`。
