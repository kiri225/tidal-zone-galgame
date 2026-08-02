#!/usr/bin/env python3
"""Convert Cursor-generated qh chapter CG PNGs in assets/ to 1536x1024 webp."""
from pathlib import Path
from PIL import Image

ASSETS = Path(r"C:\Users\看i如、\.cursor\projects\c-Users-i-tidal-zone-galgame\assets")
OUT = Path(__file__).resolve().parents[1] / "public" / "images" / "cg"


def cover_to(im: Image.Image, size=(1536, 1024)) -> Image.Image:
    tw, th = size
    w, h = im.size
    scale = max(tw / w, th / h)
    nw, nh = int(w * scale + 0.5), int(h * scale + 0.5)
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return im.crop((left, top, left + tw, top + th))


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for p in sorted(ASSETS.glob("cg-qh-ch*-end.png")):
        dest = OUT / (p.stem + ".webp")
        im = cover_to(Image.open(p).convert("RGB"))
        im.save(dest, "WEBP", quality=90, method=4)
        print("ok", dest.name, im.size)


if __name__ == "__main__":
    main()
