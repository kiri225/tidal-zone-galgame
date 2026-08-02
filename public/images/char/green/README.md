# 绿幕立绘原稿

游戏运行时读的是上一级 `public/images/char/*.png`（扣好后的透明图）。  
本目录只放**绿幕原稿**。

## 林晚棠（首发）

| 批次目录 | 内容 |
|----------|------|
| `batch-01-expressions/` | 表情 + 抱书/抱臂 |
| `batch-02-actions/` | 托腮、端杯、写备忘等动作 |
| `batch-03-outfits/` | 围裙性感版 / 开衫 / 私服 / 卸围裙 |
| `batch-04-stylefix/` | avert/smile/soft/tense 画风对齐重出 |

文件名：`wantang-{key}.png` → 扣好后覆盖 `public/images/char/wantang-{key}.png`。

## 苏晴岚（单独目录）

见 [`qinglan/README.md`](qinglan/README.md)。

| 批次目录 | 内容 |
|----------|------|
| `qinglan/batch-01-expressions/` | 表情 + crossed / book（夜班日志） |
| `qinglan/batch-02-actions/` | 托腮、端杯、写日志、递房卡等 |
| `qinglan/batch-03-outfits/` | 休班便装 / 卸名牌私服 |

文件名：`qinglan-{key}.png` → 扣好后放到 `public/images/char/qinglan-{key}.png`。  
锁定参考：`docs/refs/qinglan-design-sheet-b.png`（爆乳 OL · 黑框眼镜）。

## 顾清禾（单独目录）

见 [`qinghe/README.md`](qinghe/README.md)。

| 批次目录 | 内容 |
|----------|------|
| `qinghe/batch-01-expressions/` | 表情 + phone |
| `qinghe/batch-02-actions/` | 直播动作（待补） |
| `qinghe/batch-03-outfits/` | 卫衣伪装 / 换装 |

文件名：`qinghe-{key}.png` → 扣好后放到 `public/images/char/qinghe-{key}.png`。  
锁定参考：`docs/refs/qinghe-design-sheet-b.png`（福利姬 · 不戴眼镜）。

## 通用流程

1. 在对应批次目录抠图（去绿幕 → RGBA）
2. 覆盖/写入 `public/images/char/{id}-{key}.png`
3. 递增 `src/data/assets.ts` 的 `ASSET_VER`
