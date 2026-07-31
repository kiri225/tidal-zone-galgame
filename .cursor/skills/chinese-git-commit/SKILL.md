---
name: chinese-git-commit
description: >-
  Create git commits using Chinese Conventional Commit messages for the
  潮间带/galgame project. Use when committing, pushing chapter updates, or when
  the user asks for 中文提交 / 中文 commit / 提交规范.
---

# 中文 Git 提交规范

## 何时使用

- 任何 `git commit`（尤其是逐章推送晚棠线）
- 用户要求「中文提交」「按中文规范提交」

## 标题格式（必遵）

```
<类型>(可选范围): <简述>
```

- 全程**中文**简述（类型关键字用英文小写，与社区约定一致）
- 简述 ≤ 50 字，动词开头，不加句号
- 范围常用：`wantang` / `common` / `assets` / `engine` / `docs` / `skill`

### 类型表

| 类型 | 含义 | 示例 |
|------|------|------|
| `feat` | 新功能、新章节、新资源 | `feat(wantang): 完成第12章《旧伞》小说级剧本` |
| `fix` | 修 bug | `fix(engine): 修复好感分支静默跳转丢失 flag` |
| `docs` | 文档 | `docs: 更新五十章目录进度` |
| `style` | 不影响逻辑的格式 | `style: 统一剧本节点缩进` |
| `refactor` | 重构 | `refactor(wantang): 拆分章节为独立模块` |
| `perf` | 性能 | `perf: 压缩立绘 PNG` |
| `test` | 测试 | `test: 增加剧情图连通性校验` |
| `chore` | 杂务/工具/依赖 | `chore: 添加章节生成脚本` |
| `build` | 构建 | `build: 升级 vite 配置` |
| `ci` | CI | `ci: 添加构建检查` |

## 正文（可选）

需要说明动机或清单时，空一行后写正文，用 `- ` 列表：

```
feat(wantang): 完成第2章《中介的声音》

- 小说级对话约 30 节点
- 中介来电三向选项与好感变化
- 衔接到第3章
```

## 晚棠逐章推送专用模板

每完成一章、单独一次 commit + push：

```
feat(wantang): 完成第N章《标题》

- 小说级对话与场景描写
- 出口衔接到第N+1章
```

第1章资源/立绘可写：

```
feat(assets): 更新晚棠透明立绘与潮声场景

- RGBA 透明 PNG 表情差分
- 潮声店内 / 二楼书库背景
```

## 执行步骤

1. `git status` / `git diff` / `git log -5 --oneline` 确认范围
2. 只暂存本章相关文件（避免把未完成章塞进一次提交）
3. PowerShell 下提交：

```powershell
git commit -m @"
feat(wantang): 完成第2章《中介的声音》

- 小说级对话约 30 节点
- 衔接到第3章
"@
```

4. `git push -u origin HEAD`（已设 upstream 则 `git push`）
5. `git status` 确认干净或仅剩后续章改动

## 禁止

- 英文-only 标题（除非用户明确要求）
- `Update files` / `WIP` / `fix` 这类空泛描述
- `--no-verify`（除非用户明确要求）
- 把密钥、`.env` 提交进库
- 一次 commit 塞入多章（逐章推送模式下）

## 示例对照

❌ `update story`  
✅ `feat(wantang): 完成第8章《潮声重逢》`

❌ `feat: stuff`  
✅ `feat(wantang): 完成第35章《雨困一夜》并接入 CG 分支`
