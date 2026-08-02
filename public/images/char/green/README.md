# 晚棠绿幕立绘（分批）

游戏运行时读的是上一级 `public/images/char/*.png`（扣好后的透明图）。  
本目录只放**绿幕原稿**，按批次分开，方便分批抠图 / 替换。

| 批次目录 | 内容 | 说明 |
|----------|------|------|
| `batch-01-expressions/` | 表情 + 抱书/抱臂 | 最早一批店服表情差分 |
| `batch-02-actions/` | 托腮、端杯、写备忘等动作 | 设计稿动作行 |
| `batch-03-outfits/` | 围裙性感版 / 开衫 / 私服 / 卸围裙 | 设计稿 B 换装 |
| `batch-04-stylefix/` | avert/smile/soft/tense 画风对齐重出 | 黑底原稿 |

## 流程

1. 在对应 `batch-XX-*/` 里抠图（去绿幕 → RGBA）
2. 用扣好的文件**覆盖** `public/images/char/wantang-{key}.png`
3. 需要时把 `src/data/assets.ts` 里的 `ASSET_VER` 递增，强制刷新缓存

文件名与 `Expression` / `wantangSprites` 的 key 一致：`wantang-{key}.png`。
