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
| qinglan | 苏晴岚 | 29 | 爆乳干练OL、黑框眼镜、紧身酒店制服、利落盘发、冷蓝 |
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
| lean | `-lean` | 托腮 |
| coffee | `-coffee` | 端杯/茶 |
| write | `-write` | 写备忘 |
| offer | `-offer` | 递书 |
| shush | `-shush` | 嘘 / 安静 |
| beckon | `-beckon` | 招手 |
| think | `-think` | 沉思 |
| wipe | `-wipe` | 擦杯 |
| confused | `-confused` | 懵 |
| leandesk | `-leandesk` | 伏案 / 靠柜台 |
| apron | `-apron` | 店服深 V + 围裙开衩（性感版） |
| apronlean | `-apronlean` | 同上 · 托腮 |
| cardigan | `-cardigan` | 开衫外套店服（外出/海边） |
| cardigansoft | `-cardigansoft` | 开衫 · 柔和 |
| casual | `-casual` | 私服高领裙（房间） |
| casualsoft | `-casualsoft` | 私服 · 柔和 |
| blouse | `-blouse` | 卸围裙衬衫裙（打烊后） |
| blouseblush | `-blouseblush` | 卸围裙 · 害羞 |

场景建议：店内日常用 apron/动作差分；外出/市集/海边用 cardigan*；房间用 casual*；打烊亲密用 blouse*。  
映射写入 `src/data/assets.ts`。参考稿：`docs/refs/wantang-design-sheet-b.png` · `docs/refs/qinglan-design-sheet-b.png`。

绿幕原稿分批目录（勿直接给游戏读；扣好后覆盖 `public/images/char/`）：

| 目录 | 批次 |
|------|------|
| `public/images/char/green/batch-01-expressions/` | 晚棠：表情 + book/crossed |
| `public/images/char/green/batch-02-actions/` | 晚棠：动作姿态 |
| `public/images/char/green/batch-03-outfits/` | 晚棠：换装 |
| `public/images/char/green/batch-04-stylefix/` | 晚棠：画风对齐重出 |
| `public/images/char/green/qinglan/batch-01-expressions/` | 晴岚：表情 + crossed/book |
| `public/images/char/green/qinglan/batch-02-actions/` | 晴岚：酒店动作 |
| `public/images/char/green/qinglan/batch-03-outfits/` | 晴岚：休班/私服 |

详见 `public/images/char/green/README.md` · `green/qinglan/README.md`。新角色绿幕开独立子目录，不要与晚棠批次混放。

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
