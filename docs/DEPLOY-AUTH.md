# 账号 / 存档部署说明

## 仓库拆分

| 仓库 | 说明 |
|------|------|
| [tidal-zone-galgame](https://github.com/kiri225/tidal-zone-galgame) | 前端 Vue SPA |
| [tidal-zone-api](https://github.com/kiri225/tidal-zone-api) | 后端 Spring Boot（本仓 `backend/` 为 submodule） |

初始化子模块：

```bash
git submodule update --init --recursive
```

## 游客 vs 账号

- **游客**：不登录即可玩，存档只写 `localStorage`
- **注册/登录**：标题页右上角；登录后本地与云端按 `updatedAt` 合并

## 服务器 PostgreSQL（1Panel 容器）

PG 容器：`1Panel-postgresql-5UMn`（网络 `1panel-network`，别名 `postgresql`）。

```bash
docker exec -e PGPASSWORD=*** 1Panel-postgresql-5UMn \
  psql -U <DB用户> -d postgres -c "CREATE DATABASE tidal_zone;"
```

API 容器加入 `1panel-network`，`DB_URL=jdbc:postgresql://postgresql:5432/tidal_zone`。  
前端 `tidal-zone` 与 API 同网 `tidal-zone-api_default`，nginx 反代 `http://tidal-zone-api:8080/api/`。

## 本地联调

```bash
# API 仓库或 submodule
cd backend
export DB_USER=...
export DB_PASSWORD=...
mvn spring-boot:run

# 前端（vite 代理 /api → :8080）
npm run dev
```

## 服务器部署

```bash
# 后端（在 tidal-zone-api 仓库，或本仓 scripts 转发）
export DEPLOY_PASSWORD=...
export DB_USER=...
export DB_PASSWORD=...
export JWT_SECRET=...
python scripts/deploy-remote.py          # API 仓库内
# 或：python scripts/deploy-api-remote.py  # galgame 仓库内转发

# 前端
npm run build
python scripts/deploy-remote.py
```

自检：

- `curl http://127.0.0.1:8088/api/health`
- `curl -H 'Host: galgame.kiri225.cn' http://127.0.0.1:9091/api/health`

## 环境变量（API）

| 变量 | 含义 |
|------|------|
| `DB_URL` | 默认 `jdbc:postgresql://postgresql:5432/tidal_zone` |
| `DB_USER` / `DB_PASSWORD` | 已有 PG 账号 |
| `JWT_SECRET` | ≥32 字节密钥 |
| `CORS_ORIGINS` | 允许的前端源 |
| `JWT_EXPIRE_HOURS` | Token 有效小时，默认 720 |
