#!/usr/bin/env python3
"""Sync Cursor-generated Qinghe BG/CG from assets/ into public/images at 1536x1024."""
from __future__ import annotations

from pathlib import Path

from PIL import Image

ASSETS = Path(r"C:\Users\cai23\.cursor\projects\d-code-galgame\assets")
ROOT = Path(__file__).resolve().parents[1]
BG = ROOT / "public" / "images" / "bg"
CG = ROOT / "public" / "images" / "cg"
TARGET = (1536, 1024)


def cover_to(im: Image.Image, size: tuple[int, int], top_bias: float = 0.18) -> Image.Image:
    tw, th = size
    src = im.convert("RGB")
    w, h = src.size
    scale = max(tw / w, th / h)
    nw, nh = int(w * scale + 0.5), int(h * scale + 0.5)
    src = src.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = int((nh - th) * max(0.0, min(1.0, top_bias)))
    return src.crop((left, top, left + tw, top + th))


def safe_save_webp(im: Image.Image, dest: Path) -> None:
    tmp = dest.with_suffix(".webp.tmp")
    im.save(tmp, "WEBP", quality=90, method=4)
    try:
        if dest.exists():
            dest.unlink()
    except OSError:
        bak = dest.with_suffix(".webp.old")
        try:
            if bak.exists():
                bak.unlink()
            dest.rename(bak)
        except OSError as e:
            print("lock", dest.name, e)
            return
    tmp.rename(dest)


def export(src_name: str, dest: Path, bias: float = 0.18) -> None:
    src = ASSETS / src_name
    if not src.exists():
        print("miss", src_name)
        return
    im = Image.open(src)
    out = cover_to(im, TARGET, bias)
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.suffix.lower() == ".webp":
        try:
            out.save(dest.with_suffix(".png"), "PNG")
        except OSError:
            pass
        safe_save_webp(out, dest)
    else:
        out.save(dest, "PNG")
    print(f"ok {dest.name} from {im.size} -> {out.size} r={out.size[0]/out.size[1]:.3f}")


def main() -> None:
    export("bg-qinghe-room.png", BG / "bg-qinghe-room.webp", 0.35)
    export("bg-qinghe-room-off.png", BG / "bg-qinghe-room-off.webp", 0.35)

    for stem in [
        "cg-qh-ringlight",
        "cg-qh-tip-refuse",
        "cg-qh-offtalk",
        "cg-qh-market",
        "cg-qh-almost",
        "cg-qh-salt",
        "cg-qh-darkroom",
        "cg-qh-shore",
    ]:
        export(f"{stem}.png", CG / f"{stem}.webp")

    for ch in range(1, 51):
        export(f"cg-qh-ch{ch:02d}-end.png", CG / f"cg-qh-ch{ch:02d}-end.webp")


if __name__ == "__main__":
    main()
