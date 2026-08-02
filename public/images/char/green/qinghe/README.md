# 顾清禾绿幕立绘（分批 · 自抠）

游戏读的是 `public/images/char/qinghe-*.webp|png`（透明图）。  
这里只放**绿幕原稿**，你来抠。

锁定参考：`docs/refs/qinghe-design-sheet-b.png`  
（福利姬 · **不戴眼镜** · 青绿丝质吊带 / 环灯 · 线下卫衣伪装）

## 批次进度

| 目录 | 已有文件 | 说明 |
|------|----------|------|
| `batch-01-expressions/` | default soft tense blush avert smile hurt laugh surprised teary cold tired phone crossed | 出镜吊带默认；phone=举手机；crossed=抱臂 |
| `batch-02-actions/` | （空，可续 lean think tip pose） | 调环灯 / 关播等 |
| `batch-03-outfits/` | casual casualsoft blouse | 卫衣伪装 / 柔和 / 关灯后衬衫 |

## 抠图后

1. 输出 `public/images/char/qinghe-{key}.png`（RGBA）或 WebP  
2. 确认 `src/data/assets.ts` → `qingheSprites`  
3. 递增 `ASSET_VER`

绿幕色与晴岚一致（高饱和绿），方便同一套抠图流程。
