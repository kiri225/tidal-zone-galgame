#!/usr/bin/env python3
"""Generate Qinghe affection CGs at 1536x1024 (3:2). CG_FORCE=1 to overwrite."""

from __future__ import annotations

import base64
import json
import os
import time
import urllib.error
import urllib.request
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
CG_DIR = ROOT / "public" / "images" / "cg"
ENV = ROOT / ".env"

CHAR_LOCK = (
    "SAME heroine Gu Qinghe: 31yo Chinese woman, long teal-brown wavy hair, "
    "sea-glass green eyes, NO glasses, mature elegant figure, "
    "anime cel-shaded visual novel illustration, natural proportions NOT stretched, "
    "tasteful fully clothed, no watermark no UI no text."
)

SCENES = {
    "ringlight": (
        "cg-qh-ringlight",
        "teal silk slip dress and sheer black cardigan beside a round LED ring light, "
        "seaside apartment at night with ocean window, soft calm expression",
    ),
    "tip-refuse": (
        "cg-qh-tip-refuse",
        "phone face-down on desk with screen off, soft real smile, apartment livestream corner",
    ),
    "offtalk": (
        "cg-qh-offtalk",
        "removing earbuds after recording, small card face-down on table, quiet night lamp talk",
    ),
    "market": (
        "cg-qh-market",
        "grey oversized hoodie and baseball cap, morning harbor market, looking back over shoulder",
    ),
    "almost": (
        "cg-qh-almost",
        "close face distance then stopping, apartment corridor night soft blush restrained mood",
    ),
    "salt": (
        "cg-qh-salt",
        "under rain shelter wet hair soft smile handing a salt soda bottle, coastal street night",
    ),
    "darkroom": (
        "cg-qh-darkroom",
        "hand turning off ring light switch, moonlight through ocean window, quiet cardigan",
    ),
    "shore": (
        "cg-qh-shore",
        "tide pools at dawn, packed ring light bag nearby, genuine soft smile morning light",
    ),
}


def load_env() -> None:
    if not ENV.exists():
        return
    for line in ENV.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        k, v = line.split("=", 1)
        os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


def cover_to_landscape(
    im: Image.Image, size: tuple[int, int], top_bias: float = 0.22
) -> Image.Image:
    """Cover-crop to landscape with slight top bias (keep faces; no stretch)."""
    tw, th = size
    src = im.convert("RGB")
    w, h = src.size
    scale = max(tw / w, th / h)
    nw, nh = int(w * scale + 0.5), int(h * scale + 0.5)
    src = src.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = int((nh - th) * max(0.0, min(1.0, top_bias)))
    return src.crop((left, top, left + tw, top + th))


def gen(name: str, stem: str, scene: str, key: str, base: str, model: str, force: bool) -> None:
    webp = CG_DIR / f"{stem}.webp"
    png = CG_DIR / f"{stem}.png"
    if not force and webp.exists() and webp.stat().st_size > 100_000:
        print("skip", webp.name, flush=True)
        return
    prompt = f"{CHAR_LOCK} Scene: {scene}."
    url = base.rstrip("/") + "/v1/images/generations"
    body = json.dumps({"model": model, "prompt": prompt, "size": "1536x1024", "n": 1}).encode()
    req = urllib.request.Request(
        url,
        data=body,
        headers={"Content-Type": "application/json", "Authorization": f"Bearer {key}"},
        method="POST",
    )
    print(f"gen {name}...", flush=True)
    with urllib.request.urlopen(req, timeout=120) as resp:
        data = json.loads(resp.read().decode())
    b64 = data["data"][0].get("b64_json")
    if b64:
        png.write_bytes(base64.b64decode(b64))
    else:
        with urllib.request.urlopen(data["data"][0]["url"], timeout=120) as r:
            png.write_bytes(r.read())
    im = cover_to_landscape(Image.open(png).convert("RGB"), (1536, 1024))
    im.save(webp, "WEBP", quality=90, method=4)
    print("ok", webp.name, im.size, flush=True)


def main() -> None:
    load_env()
    key = os.environ["OPENAI_API_KEY"]
    base = os.environ.get("OPENAI_BASE_URL", "https://api.openai.com")
    model = os.environ.get("OPENAI_IMAGE_MODEL", "gpt-image-1")
    force = os.environ.get("CG_FORCE", "1") == "1"
    CG_DIR.mkdir(parents=True, exist_ok=True)
    for name, (stem, scene) in SCENES.items():
        for attempt in range(3):
            try:
                gen(name, stem, scene, key, base, model, force)
                break
            except Exception as e:
                print(name, "err", e)
                time.sleep(2 + attempt * 2)


if __name__ == "__main__":
    main()
