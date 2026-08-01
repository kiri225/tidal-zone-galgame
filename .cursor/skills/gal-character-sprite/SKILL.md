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
4. 风格统一：**日漫/赛璐璐动画风**（非写实），湿润海滨夜色 · 琥珀与深蓝；避免真人照片感、避免过度写实皮肤纹理
5. 保存路径：`public/images/char/{id}-{expression}.png`
6. 生成后用工具检查四角 alpha≈0；透明像素占比通常应 >20%

## Character roster（潮间带）

| id | 名 | 年龄 | 视觉关键词 |
|----|----|------|------------|
| wantang | 林晚棠 | 27 | 冷感、束发、亚麻衬衫、围裙、琥珀灯色调 |
| qinglan | 苏晴岚 | 29 | 干练酒店制服、短发或利落盘发、冷蓝 |
| qinghe | 顾清禾 | 31 | 实验服或户外科考服、知性、青绿 |
| zhixia | 叶知夏 | 23 | 明亮夏装、画室感、珊瑚粉点缀 |

## Expression / pose set

每个角色尽量出齐（表情 + 姿态差分，避免全是同姿势只换脸）：

| expression | 文件后缀 | 神态 |
|------------|----------|------|
| default | `-default` | 平静、日常（身份锚点） |
| soft | `-soft` | 柔和 |
| tense | `-tense` | 紧绷、防备（脸） |
| blush | `-blush` | 害羞、耳红 |
| avert | `-avert` | 侧目回避（头/视线转向） |
| smile | `-smile` | 浅笑 |
| hurt | `-hurt` | 受伤、失落 |
| laugh | `-laugh` | 真心笑、眼弯 |
| surprised | `-surprised` | 惊讶 |
| teary | `-teary` | 含泪、脆弱 |
| cold | `-cold` | 冷淡疏离 |
| tired | `-tired` | 打烊疲态 |
| book | `-book` | 抱书姿态 |
| crossed | `-crossed` | 抱臂防备姿态 |

映射写入 `src/data/assets.ts` 的 `{id}Sprites`。姿态差分仍必须用 default 作 reference。

## Prompt recipe（生成时遵守）

```
Japanese anime manga style visual novel character standing sprite of {name}, {age},
{clothing and hair}, {expression}, cel-shaded, clean lineart, NOT photorealistic,
full body standing, facing slightly toward camera, clean cutout, transparent background,
no scenery, no floor shadow blob, soft coastal night color grade, amber and deep blue accents,
PNG with alpha
```

负面提示强调：`background, scenery, room, beach photo background, solid color backdrop, watermark, text, extra limbs`

## Workflow

1. 读 `docs/STORY-DESIGN.md` 人物卡确认服装/气质
2. **先生成并锁定一张 `default` 立绘**，之后所有表情差分必须用 `reference_image_paths` 指向该 default
3. 差分提示词必须写清：`SAME character as reference exactly` + `ONLY change expression` + 禁止改发型/服装/性别
4. 保存到 `public/images/char/`，抠透明底（白底与纯黑棚拍底都要去）
5. 更新 `src/data/assets.ts`
6. 目检：六张立绘并排，脸型发型服装应一眼可辨为同一人
7. **不要**在 `CharacterSprite.vue` 上用 CSS mask 假装抠图

## Anti-patterns

- 每个表情单独无参考生成（会导致脸/发型/性别漂移）
- 把带背景的整图当立绘
- 各表情服装不一致（围裙文字、发髻位置漂移）
- 生成正方形头像当立绘
- 写实照片风与日漫风混用
