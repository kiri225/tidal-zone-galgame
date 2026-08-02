#!/usr/bin/env python3
"""Export Qinghe CGs to project 3:2 (1536x1024) without stretch; stage green sprites."""
from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ASSETS = Path(r"C:\Users\看i如、\.cursor\projects\c-Users-i-tidal-zone-galgame\assets")
CG_OUT = ROOT / "public" / "images" / "cg"
GREEN = ROOT / "public" / "images" / "char" / "green" / "qinghe"
TARGET = (1536, 1024)  # match qinglan affection CGs


def cover_to(im: Image.Image, size: tuple[int, int]) -> Image.Image:
    """Scale with aspect preserved, center-crop to size. Never stretch."""
    tw, th = size
    w, h = im.size
    scale = max(tw / w, th / h)
    nw, nh = int(w * scale + 0.5), int(h * scale + 0.5)
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return im.crop((left, top, left + tw, top + th))


def export_cg(src_name: str, dest_name: str) -> None:
    src = ASSETS / src_name
    if not src.exists():
        print("missing", src)
        return
    im = Image.open(src).convert("RGB")
    out = cover_to(im, TARGET)
    dest = CG_OUT / dest_name
    out.save(dest, "WEBP", quality=90, method=4)
    print(f"{dest.name}: {out.size} ratio={out.size[0]/out.size[1]:.3f} from {im.size}")


AFF = [
    ("cg-qh-ringlight.png", "cg-qh-ringlight.webp"),
    ("cg-qh-tip-refuse.png", "cg-qh-tip-refuse.webp"),
    ("cg-qh-offtalk.png", "cg-qh-offtalk.webp"),
    ("cg-qh-market.png", "cg-qh-market.webp"),
    ("cg-qh-almost.png", "cg-qh-almost.webp"),
    ("cg-qh-salt.png", "cg-qh-salt.webp"),
    ("cg-qh-darkroom.png", "cg-qh-darkroom.webp"),
    ("cg-qh-shore.png", "cg-qh-shore.webp"),
]


def main() -> None:
    CG_OUT.mkdir(parents=True, exist_ok=True)
    for src, dest in AFF:
        export_cg(src, dest)

    # Do NOT overwrite chapter-end CGs from affection bases — that recycled
    # 8 scenes across 50 chapters. Re-export from PNG via:
    #   python scripts/reexport-qh-chapter-cgs-pad.py
    # or regenerate: python scripts/gen-qinghe-chapter-end-cgs.py
    print("affection CGs exported; chapter-end left untouched")

    # stage green sprites
    batch1 = GREEN / "batch-01-expressions"
    batch3 = GREEN / "batch-03-outfits"
    batch1.mkdir(parents=True, exist_ok=True)
    batch3.mkdir(parents=True, exist_ok=True)
    (GREEN / "batch-02-actions").mkdir(parents=True, exist_ok=True)

    mapping = {
        "qinghe-default-green.png": batch1 / "qinghe-default.png",
        "qinghe-soft-green.png": batch1 / "qinghe-soft.png",
        "qinghe-blush-green.png": batch1 / "qinghe-blush.png",
        "qinghe-cold-green.png": batch1 / "qinghe-cold.png",
        "qinghe-casual-green.png": batch3 / "qinghe-casual.png",
        "qinghe-phone-green.png": batch1 / "qinghe-phone.png",
    }
    for src_name, dest in mapping.items():
        src = ASSETS / src_name
        if not src.exists():
            print("missing green", src)
            continue
        im = Image.open(src).convert("RGB")
        # normalize to 1024x1536 cover crop
        im = cover_to(im, (1024, 1536))
        im.save(dest, "PNG")
        print("green", dest.relative_to(ROOT), im.size)


if __name__ == "__main__":
    main()
