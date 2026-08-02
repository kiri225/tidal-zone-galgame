# 章末 CG 视频（可选）

将视频放到本目录后，剧情与图鉴会**自动优先播放视频**；缺失时回落为静图 + Ken Burns。

## 命名

`cg-ch01-end.webm` … `cg-ch50-end.webm`（对应 CG id `ch01-end` … `ch50-end`）

也支持同名 `.mp4`：在 `src/data/cg.ts` 里把对应 `video` 路径后缀改成 `.mp4` 即可。

## 建议规格

- 分辨率：1280×720 或 1920×1080
- 时长：6–15 秒，可循环
- 无声或极轻环境音（页面默认 `muted` 自动播放）
- 软 18+：暧昧、肌肤感、靠近；避免露骨镜头

封面静图在 `public/images/cg/cg-ch0N-end.png` / `cg-chNN-end.png`。
