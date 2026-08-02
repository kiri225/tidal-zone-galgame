---
name: gal-background-scene
description: >-
  Generate galgame full-bleed background scenes for the Intertidal Zone / 潮间带
  project. Use when the user asks to create, regenerate, or replace 背景, scene
  BGs, location art, or atmosphere plates (not character cutouts).
---

# Galgame 背景场景生成

## When to use

- 新建/重做场景背景
- 用户提到背景、场景图、location BG、氛围板
- 为新节点补 `bg` 资源

## Hard requirements

1. **完整场景图**（可有环境人物剪影，但不要可攻略角色清晰正脸立绘）
2. 建议尺寸：**1536×1024** 或 **1920×1080**，横向
3. 保存：`public/images/bg/bg-{key}.png`
4. 在 `src/data/assets.ts` 的 `bgImages` 与 `characters.ts` 的 `bgLabels` 注册
5. 风格：**日漫/赛璐璐动画场景**（非写实、非 3D 写实渲染），深蓝夜海 · 琥珀灯 · 湿玻璃 · 细雨；统一色温，避免霓虹赛博/紫粉渐变网红风

## Scene catalog（潮间带）

| key | 中文 | 氛围 |
|-----|------|------|
| port-night | 潮屿码头 · 夜 | 潮声、灯塔远光、湿甲板 |
| street-rain | 旧街 · 细雨 | 窄巷、水洼反光、暖窗 |
| shop-interior | 拾潮 · 店内 | 旧物、樟脑、尘光柱 |
| shop-back | 拾潮 · 后仓 | 纸箱、账本、昏黄灯泡 |
| bookstore | 潮声 · 营业中 | 高书架、吧台琥珀灯 |
| bookstore-close | 潮声 · 打烊 | 只留一盏灯、红酒暗示 |
| hotel-lobby | 酒店大堂 · 夜 | 冷空调光、空旷 |
| hotel-lobby-storm | 大堂 · 台风停电 | 应急灯、沙袋、雨打玻璃 |
| hotel-bar | 酒店酒吧 | 吧台、冰块、孤独座位 |
| hotel-duty | 酒店值班室 | 窄沙发、应急手电、雨夜 |
| hotel-corridor | 酒店走廊 · 夜 | 地毯、消防柜、暧昧距离 |
| hotel-monitor | 酒店监控室 | 屏幕青光、雨点 |
| hotel-service | 酒店卸货通道 | 水泥墙、湿沥青、破绽 |
| hotel-room | 酒店客房 · 海景 | 窗边看潮、空房 |
| research-station | 海洋站实验室 | 标本柜、屏幕青光 |
| tide-pools | 潮间带岩滩 · 昼 | 积水坑、螺与藻、刺眼晨光 |
| gallery | 海边画廊 | 白墙、画框、午后 |
| seaside-dawn | 海边 · 黎明 | 淡青、湿沙、无人 |
| wantang-room | 晚棠阁楼 | 窄窗、书堆、雨声 |

## Prompt recipe

```
Japanese anime manga style cinematic visual novel background, {location description},
no main character portrait, wide establishing shot, cel-shaded anime environment,
moist coastal atmosphere, deep blue and amber palette, NOT photorealistic, NOT 3D render,
empty of dialogue UI, 16:9 or 3:2
```

负面：`character sprite, anime girl portrait, UI, text, watermark, purple neon city, cyberpunk`

## Workflow

1. 读 `docs/STORY-DESIGN.md` §2 场景表，确认 key 与剧情用途
2. 生成横向场景 → 存 `public/images/bg/bg-{key}.png`
3. 注册 `bgImages` / `bgLabels`
4. 用 `BackgroundLayer` 全屏 `object-fit: cover` 目检；关键叙事区（吧台、窗、床）尽量靠近画面中下 1/3，避免被对话框完全挡住

## CG vs Background

| 类型 | 用途 | 路径 |
|------|------|------|
| bg | 对话时循环使用的场景 | `public/images/bg/` |
| cg | 好感解锁的全屏插画（可含角色） | `public/images/cg/` |

CG 生成不走本 skill；人物透明立绘走 `gal-character-sprite`。

## Anti-patterns

- 竖图当背景
- 背景里塞清晰女主立绘（应分图层）
- 每张图色温完全不统一
- 把 CG 合成图误存进 `bg/`
