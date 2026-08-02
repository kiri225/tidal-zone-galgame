#!/usr/bin/env python3
"""
Re-export Qinghe chapter-end CGs from square PNGs to 1536x1024.

Uses top-biased cover crop (keeps faces / upper body) instead of center crop
or blurred side pads — better for full-bleed galgame display.
"""
from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
CG_DIR = ROOT / "public" / "images" / "cg"
TARGET = (1536, 1024)
# 0 = top-aligned crop, 0.5 = center, 1 = bottom. Prefer slight top bias for portraits.
TOP_BIAS = 0.22


def cover_to(
    im: Image.Image,
    size: tuple[int, int] = TARGET,
    top_bias: float = TOP_BIAS,
) -> Image.Image:
    tw, th = size
    src = im.convert("RGB")
    w, h = src.size
    scale = max(tw / w, th / h)
    nw, nh = int(w * scale + 0.5), int(h * scale + 0.5)
    src = src.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = int((nh - th) * max(0.0, min(1.0, top_bias)))
    return src.crop((left, top, left + tw, top + th))


def main() -> None:
    n = 0
    for png in sorted(CG_DIR.glob("cg-qh-ch*-end.png")):
        im = Image.open(png)
        out = cover_to(im)
        dest = CG_DIR / (png.stem + ".webp")
        out.save(dest, "WEBP", quality=90, method=4)
        n += 1
        print(f"{dest.name}: {im.size} -> {out.size} (top_bias={TOP_BIAS})")
    print(f"done {n} files")


if __name__ == "__main__":
    main()
