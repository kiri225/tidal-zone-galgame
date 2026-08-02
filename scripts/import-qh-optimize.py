#!/usr/bin/env python3
"""Import Cursor assets for Qinghe optimize pass into public/."""
from __future__ import annotations

from pathlib import Path

from PIL import Image

ASSETS = Path(r"C:\Users\看i如、\.cursor\projects\c-Users-i-tidal-zone-galgame\assets")
ROOT = Path(__file__).resolve().parents[1]
GREEN1 = ROOT / "public" / "images" / "char" / "green" / "qinghe" / "batch-01-expressions"
GREEN2 = ROOT / "public" / "images" / "char" / "green" / "qinghe" / "batch-02-actions"
GREEN3 = ROOT / "public" / "images" / "char" / "green" / "qinghe" / "batch-03-outfits"
BG = ROOT / "public" / "images" / "bg"
CG = ROOT / "public" / "images" / "cg"

EXPR = {
    "qinghe-default.png",
    "qinghe-soft.png",
    "qinghe-tense.png",
    "qinghe-blush.png",
    "qinghe-avert.png",
    "qinghe-smile.png",
    "qinghe-hurt.png",
    "qinghe-laugh.png",
    "qinghe-surprised.png",
    "qinghe-teary.png",
    "qinghe-cold.png",
    "qinghe-tired.png",
    "qinghe-phone.png",
    "qinghe-crossed.png",
}
ACTIONS = {
    "qinghe-lean.png",
    "qinghe-ringlight.png",
    "qinghe-think.png",
    "qinghe-tip.png",
    "qinghe-pose.png",
    "qinghe-offair.png",
}
OUTFITS = {
    "qinghe-casual.png",
    "qinghe-casualsoft.png",
    "qinghe-blouse.png",
    "qinghe-blouseblush.png",
    "qinghe-lingerie.png",
    "qinghe-shore.png",
}


def cover_to(im: Image.Image, size: tuple[int, int]) -> Image.Image:
    tw, th = size
    w, h = im.size
    scale = max(tw / w, th / h)
    nw, nh = int(w * scale + 0.5), int(h * scale + 0.5)
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return im.crop((left, top, left + tw, top + th))


def copy_png(name: str, dest_dir: Path) -> None:
    src = ASSETS / name
    if not src.exists():
        return
    dest_dir.mkdir(parents=True, exist_ok=True)
    dest = dest_dir / name
    Image.open(src).convert("RGB").save(dest, "PNG")
    print("green", dest.relative_to(ROOT))


def save_webp(src_name: str, dest: Path, size: tuple[int, int]) -> None:
    src = ASSETS / src_name
    if not src.exists():
        return
    dest.parent.mkdir(parents=True, exist_ok=True)
    im = cover_to(Image.open(src).convert("RGB"), size)
    im.save(dest, "WEBP", quality=90, method=4)
    print("ok", dest.name, im.size)


def main() -> None:
    for n in EXPR:
        copy_png(n, GREEN1)
    for n in ACTIONS:
        copy_png(n, GREEN2)
    for n in OUTFITS:
        copy_png(n, GREEN3)

    save_webp("bg-qinghe-room.png", BG / "bg-qinghe-room.webp", (1920, 1080))
    save_webp("bg-qinghe-room-off.png", BG / "bg-qinghe-room-off.webp", (1920, 1080))

    for stem in (
        "cg-qh-ringlight",
        "cg-qh-tip-refuse",
        "cg-qh-offtalk",
        "cg-qh-market",
        "cg-qh-almost",
        "cg-qh-salt",
        "cg-qh-darkroom",
        "cg-qh-shore",
    ):
        save_webp(f"{stem}.png", CG / f"{stem}.webp", (1536, 1024))

    for p in sorted(ASSETS.glob("cg-qh-ch*-end.png")):
        save_webp(p.name, CG / f"{p.stem}.webp", (1536, 1024))


if __name__ == "__main__":
    main()
