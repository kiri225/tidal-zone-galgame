# 章末 CG 视频（可选）

将视频放到本目录后，剧情与图鉴会**自动优先播放视频**；缺失时回落为静图 + Ken Burns。

## 命名

| 文件 | 对应 CG id |
|------|------------|
| `cg-ch01-end.webm` | ch01-end |
| `cg-ch02-end.webm` | ch02-end |
| `cg-ch03-end.webm` | ch03-end |
| `cg-ch04-end.webm` | ch04-end |
| `cg-ch05-end.webm` | ch05-end |
| `cg-ch06-end.webm` | ch06-end |
| `cg-ch07-end.webm` | ch07-end |
| `cg-ch08-end.webm` | ch08-end |
| `cg-ch09-end.webm` | ch09-end |
| `cg-ch10-end.webm` | ch10-end |

也支持同名 `.mp4`：在 [`src/data/cg.ts`](../../../src/data/cg.ts) 里把对应 `video` 路径后缀改成 `.mp4` 即可。

## 建议规格

- 分辨率：1280×720 或 1920×1080
- 时长：6–15 秒，可循环
- 无声或极轻环境音（页面默认 `muted` 自动播放）
- 软 18+：暧昧、肌肤感、靠近；避免露骨镜头

封面静图在 `public/images/cg/cg-ch0N-end.png`。
