#!/usr/bin/env python3
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def main() -> None:
    for rel in ("src/data/assets.ts", "src/data/cg.ts"):
        p = ROOT / rel
        text = p.read_text(encoding="utf-8")
        text2 = re.sub(r"(/images/(?:char|bg|cg)/[^\s'\"]+)\.png", r"\1.webp", text)
        text2 = text2.replace("透明立绘 PNG（RGBA）", "透明立绘 WebP（含 alpha）")
        text2 = text2.replace(
            "- 立绘 char：透明底 PNG（RGBA）\n * - CG：全屏插画",
            "- 立绘 char：透明 WebP\n * - CG / bg：WebP 全屏图",
        )
        p.write_text(text2, encoding="utf-8")
        print(rel, "webp refs", text2.count(".webp"))

    removed = 0
    for folder in ("char", "bg", "cg"):
        d = ROOT / "public" / "images" / folder
        for png in d.glob("*.png"):
            png.unlink()
            removed += 1
    print("removed runtime png", removed)


if __name__ == "__main__":
    main()
