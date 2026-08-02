# 《潮间带》剧情大纲

**设计稿 → [`docs/STORY-DESIGN.md`](docs/STORY-DESIGN.md)**  
**晚棠 50 章目录 → [`src/data/story/wantang/CHAPTERS.md`](src/data/story/wantang/CHAPTERS.md)**  
**晴岚 50 章目录 → [`src/data/story/qinglan/CHAPTERS.md`](src/data/story/qinglan/CHAPTERS.md)**

## 结构

- 序章共通 → 角色选择
- **林晚棠线：50 章**（小说级手写，好感 / CG / 三结局）
- **苏晴岚线：50 章**（已可玩；trust 门槛 + 三结局；立绘/CG 暂占位）
- 其余二人线：预留（同样按 ≥50 章规划）

## 规则

- 每条可攻略线 **最少 50 章**
- 立绘：透明 RGBA PNG/WebP · 背景：全幅场景
- Skills：`.cursor/skills/gal-character-sprite` · `gal-background-scene`
- 晴岚生成器：`node scripts/gen-qinglan.mjs`（可手改 `ch*.ts` 加厚）
