---
name: gal-character-sprite
description: >-
  Generate galgame character standing sprites as transparent RGBA PNGs for the
  Intertidal Zone / 潮间带 project. Use when the user asks to create, regenerate,
  or replace character立绘, sprites, expressions, or transparent character PNGs.
---

# Galgame 人物立绘生成

## When to use

- 新建/重做角色立绘、表情差分
- 用户要求「透明底 PNG」「抠掉背景」
- 批量按表情表出图

## Hard requirements

1. **输出必须是透明底 RGBA PNG**（不要实景背景、不要纯色底板、不要阴影落地成不透明块）
2. 构图：全身或膝上立绘，人物居中偏下，脚/裙摆贴底边附近，左右留白
3. 建议尺寸：**1024×1536**（或同比例）
4. 风格统一：半写实插画 · 湿润海滨夜色氛围 · 细腻皮肤与布料 · 避免二次元大眼睛萌系
5. 保存路径：`public/images/char/{id}-{expression}.png`
6. 生成后用工具检查四角 alpha≈0；透明像素占比通常应 >20%

## Character roster（潮间带）

| id | 名 | 年龄 | 视觉关键词 |
|----|----|------|------------|
| wantang | 林晚棠 | 27 | 冷感、束发、亚麻衬衫、围裙、琥珀灯色调 |
| qinglan | 苏晴岚 | 29 | 干练酒店制服、短发或利落盘发、冷蓝 |
| qinghe | 顾清禾 | 31 | 实验服或户外科考服、知性、青绿 |
| zhixia | 叶知夏 | 23 | 明亮夏装、画室感、珊瑚粉点缀 |

## Expression set

每个角色尽量出齐：

| expression | 文件后缀 | 神态 |
|------------|----------|------|
| default | `-default` | 平静、日常 |
| soft | `-soft` 或复用 smile | 柔和 |
| tense | `-tense` | 紧绷、防备 |
| blush | `-blush` | 害羞、耳红 |
| avert | 可复用 blush | 眼神回避 |
| smile | `-smile` | 浅笑 |
| hurt | `-hurt` | 受伤、失落 |

映射写入 `src/data/assets.ts` 的 `{id}Sprites`。

## Prompt recipe（生成时遵守）

```
Anime-influenced semi-realistic visual novel character sprite of {name}, {age},
{clothing and hair}, {expression}, full body standing, facing slightly toward camera,
clean cutout, transparent background, no scenery, no floor shadow blob, soft coastal
night color grade, amber and deep blue accents, high detail fabric, PNG with alpha
```

负面提示强调：`background, scenery, room, beach photo background, solid color backdrop, watermark, text, extra limbs`

## Workflow

1. 读 `docs/STORY-DESIGN.md` 人物卡确认服装/气质
2. 生成主表情 default → 再出差分（保持同一脸与服装，只改表情）
3. 保存到 `public/images/char/`
4. 更新 `src/data/assets.ts` + 必要时 `characters.ts` 颜色
5. 在游戏里叠背景目检：透明区应直接透出背景层
6. **不要**在 `CharacterSprite.vue` 上再加遮罩抠图；素材本身必须透明

## Anti-patterns

- 把带背景的整图当立绘
- 用 CSS mask「假装」抠图
- 各表情脸型不一致
- 生成正方形头像当立绘
