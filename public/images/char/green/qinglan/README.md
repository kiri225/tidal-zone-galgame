# 苏晴岚绿幕立绘（分批）

游戏读的是 `public/images/char/qinglan-*.png`（透明图）。  
这里只放**绿幕原稿**，你来抠。

锁定参考：`docs/refs/qinglan-design-sheet-b.png`  
（爆乳 OL · **黑框眼镜** · 海军蓝酒店制服 · 冷蓝调）

## 批次

| 目录 | 文件 | 说明 |
|------|------|------|
| `batch-01-expressions/` | default soft tense blush avert smile hurt laugh surprised teary cold tired crossed book | 店服表情；book=抱夜班日志 |
| `batch-02-actions/` | lean coffee write offer shush beckon think wipe confused leandesk | 酒店动作；offer=递房卡 |
| `batch-03-outfits/` | casual casualsoft blouse blouseblush | 休班毛衣牛仔 / 卸名牌私服 |

共约 **28** 张。

## 抠图后

1. 输出 `public/images/char/qinglan-{key}.png`（RGBA）
2. 确认 `src/data/assets.ts` → `qinglanSprites`（当前暂复用晚棠占位，扣好后改路径）
3. 递增 `ASSET_VER`
