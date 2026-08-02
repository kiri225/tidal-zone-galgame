#!/usr/bin/env python3
"""Convert public game PNGs to WebP (skip green/cutout/compare)."""

from __future__ import annotations

import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    import subprocess

    subprocess.check_call([sys.executable, "-m", "pip", "install", "pillow", "-q"])
    from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
IMG = ROOT / "public" / "images"
SKIP_PARTS = {"green", "cutout-guide", "compare", "refs"}


def should_skip(path: Path) -> bool:
    return any(p in SKIP_PARTS for p in path.parts)


def convert_one(src: Path, *, max_side: int, quality: int) -> tuple[int, int]:
    im = Image.open(src)
    im.load()
    before = src.stat().st_size
    if im.mode not in ("RGB", "RGBA"):
        im = im.convert("RGBA" if "A" in im.getbands() else "RGB")

    w, h = im.size
    scale = min(1.0, max_side / max(w, h))
    if scale < 1.0:
        im = im.resize((max(1, int(w * scale)), max(1, int(h * scale))), Image.Resampling.LANCZOS)

    dest = src.with_suffix(".webp")
    save_kw: dict = {"quality": quality, "method": 4}
    if im.mode == "RGBA":
        save_kw["exact"] = True
    im.save(dest, "WEBP", **save_kw)
    after = dest.stat().st_size
    return before, after


def main() -> None:
    jobs: list[tuple[Path, int, int]] = []
    for name, max_side, quality in (
        ("char", 1280, 82),
        ("bg", 1920, 78),
        ("cg", 1920, 80),
    ):
        d = IMG / name
        if not d.exists():
            continue
        for png in sorted(d.rglob("*.png")):
            if should_skip(png):
                continue
            jobs.append((png, max_side, quality))

    total_before = total_after = 0
    for png, max_side, quality in jobs:
        before, after = convert_one(png, max_side=max_side, quality=quality)
        total_before += before
        total_after += after
        ratio = 100 * after / before if before else 0
        print(f"{png.relative_to(IMG)}  {before/1024:.0f}KB -> {after/1024:.0f}KB ({ratio:.0f}%)")

    print(
        f"\nDONE {len(jobs)} files  "
        f"{total_before/1024/1024:.1f}MB -> {total_after/1024/1024:.1f}MB  "
        f"saved {(total_before-total_after)/1024/1024:.1f}MB"
    )


if __name__ == "__main__":
    main()
