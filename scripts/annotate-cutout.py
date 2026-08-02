#!/usr/bin/env python3
"""Normalize chroma green + write cutout-guide overlays for char sprites."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "images" / "char" / "green"
GUIDE = ROOT / "public" / "images" / "char" / "cutout-guide"
CHAR = ROOT / "public" / "images" / "char"

# Pure chroma green target
GREEN = (0, 255, 0)
# Magenta outline for cutout region
OUTLINE = (255, 0, 255, 255)


def is_green(r: int, g: int, b: int) -> bool:
    # chroma-ish green (covers #00FF00 and near-green spill)
    return g > 140 and g >= r + 40 and g >= b + 40


def normalize_and_mask(im: Image.Image) -> tuple[Image.Image, Image.Image]:
    rgba = im.convert("RGBA")
    w, h = rgba.size
    px = rgba.load()
    mask = Image.new("L", (w, h), 0)
    mp = mask.load()
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if is_green(r, g, b):
                px[x, y] = (*GREEN, 255)
                mp[x, y] = 0
            else:
                mp[x, y] = 255
    return rgba, mask


def annotate(src: Path) -> None:
    im = Image.open(src)
    green_im, mask = normalize_and_mask(im)

    # tighten green fill via flood from corners on near-green leftovers already handled
    out_green = SRC / src.name
    green_im.save(out_green)
    # also sync main char folder with green (user will cut themselves)
    (CHAR / src.name).write_bytes(out_green.read_bytes())

    # guide: dimmed green + magenta contour + bbox
    base = green_im.convert("RGBA")
    # edge of subject
    edges = mask.filter(ImageFilter.FIND_EDGES).point(lambda v: 255 if v > 40 else 0)
    # thicken outline
    edges = edges.filter(ImageFilter.MaxFilter(5))

    guide = base.copy()
    gp = guide.load()
    ep = edges.load()
    w, h = guide.size
    for y in range(h):
        for x in range(w):
            if ep[x, y]:
                gp[x, y] = OUTLINE

    # bounding box of subject
    bbox = mask.getbbox()
    draw = ImageDraw.Draw(guide)
    if bbox:
        x0, y0, x1, y1 = bbox
        pad = 4
        box = (max(0, x0 - pad), max(0, y0 - pad), min(w - 1, x1 + pad), min(h - 1, y1 + pad))
        draw.rectangle(box, outline=(255, 0, 255, 255), width=3)
        label = f"CUTOUT  {box[2]-box[0]}x{box[3]-box[1]}  chroma=#00FF00"
        try:
            font = ImageFont.truetype("arial.ttf", 22)
        except OSError:
            font = ImageFont.load_default()
        draw.rectangle((8, 8, 8 + 420, 40), fill=(0, 0, 0, 180))
        draw.text((14, 12), label, fill=(255, 0, 255, 255), font=font)

    GUIDE.mkdir(parents=True, exist_ok=True)
    guide_path = GUIDE / src.name.replace(".png", "-guide.png")
    guide.save(guide_path)
    print(f"ok {src.name} -> green + {guide_path.name}")


def main() -> None:
    SRC.mkdir(parents=True, exist_ok=True)
    files = sorted(SRC.glob("wantang-*.png"))
    if not files:
        raise SystemExit(f"No sprites in {SRC}")
    for f in files:
        annotate(f)
    print("ALL DONE")


if __name__ == "__main__":
    main()
