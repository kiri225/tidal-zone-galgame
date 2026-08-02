#!/usr/bin/env python3
from pathlib import Path
from PIL import Image

src_dir = Path(r"C:\Users\看i如、\.cursor\projects\c-Users-i-tidal-zone-galgame\assets")
out_dir = Path("public/images/cg")
names = [
    "cg-ql-ch01-end",
    "cg-ql-ch02-end",
    "cg-ql-berth",
    "cg-ql-offduty",
    "cg-ql-shifttalk",
    "cg-ql-market",
    "cg-ql-almost",
    "cg-ql-salt",
    "cg-ql-dutynight",
    "cg-ql-shore",
]
for name in names:
    src = src_dir / f"{name}.png"
    if not src.exists():
        print("missing", src)
        continue
    im = Image.open(src).convert("RGB")
    out = out_dir / f"{name}.webp"
    im.save(out, "WEBP", quality=88, method=6)
    print("wrote", out, out.stat().st_size)
