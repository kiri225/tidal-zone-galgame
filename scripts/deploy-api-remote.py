#!/usr/bin/env python3
"""兼容入口：转发到 backend 子模块的部署脚本。

后端独立仓库：https://github.com/kiri225/tidal-zone-api
推荐直接在该仓库执行：python scripts/deploy-remote.py
"""

from __future__ import annotations

import runpy
import sys
from pathlib import Path

SCRIPT = Path(__file__).resolve().parents[1] / "backend" / "scripts" / "deploy-remote.py"

if not SCRIPT.exists():
    raise SystemExit(
        "backend/scripts/deploy-remote.py missing；请先：\n"
        "  git submodule update --init --recursive\n"
        "或克隆 https://github.com/kiri225/tidal-zone-api"
    )

sys.argv[0] = str(SCRIPT)
runpy.run_path(str(SCRIPT), run_name="__main__")
