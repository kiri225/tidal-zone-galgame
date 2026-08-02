#!/usr/bin/env python3
"""Batch-generate soft romantic chapter-end CG stills via OpenAI-compatible image API."""

from __future__ import annotations

import base64
import json
import os
import time
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CG_DIR = ROOT / "public" / "images" / "cg"
ENV = ROOT / ".env"

SUBS = {
    11: "rainy bookstore amber lamp, wet glass, intimate close distance",
    12: "sharing old umbrella in rain, overlapping shadows, soft blush",
    13: "bookstore bar at night, wine glasses, protective glance",
    14: "dim shop backroom lamp, pause over ledger, intimate",
    15: "night harbor wind, standing close side by side",
    16: "after closing, apron off, blouse collar slightly open, soft light",
    17: "warm nostalgic close-up, soft intimate gaze",
    18: "library closing lights, very close faces, soft blush",
    19: "cool bookstore mood with warm eyes underneath",
    20: "almost kiss close faces, breath shared, tasteful",
    21: "red wine on bar after close, intimate night talk",
    22: "dreamlike rainy chase, soft longing",
    23: "morning market light, standing close together",
    24: "breakwater dusk walk, slowed footsteps, soft smile",
    25: "postcard and fingertips close-up, warm emotion",
    26: "behind bookshelves, unresolved tension, close",
    27: "harbor lights reconciliation, soft intimacy",
    28: "candlelight breathing close, tasteful sensual",
    29: "rain alley looking back, wet hair strands",
    30: "wet clothes warmth, close embrace mood tasteful",
    31: "sitting on carpet knees close, soft intimate",
    32: "coat on floor, sitting close, quiet intimacy",
    33: "fingers on poetry book spine, close faces",
    34: "pause before a kiss, soft sensual CG",
    35: "storm night shelter, clinging closeness tasteful",
    36: "adult-soft intimate CG in dim bookstore, tasteful sensual not explicit",
    37: "seaside dawn barefoot, soft afterglow closeness",
    38: "tide pools rocks side by side silhouettes",
    39: "pretending normal, fingertip linger on cup",
    40: "wiping glass tense knuckles, soft blush",
    41: "handing a key, ear tips red, intimate",
    42: "shop lights stay-or-go decision, close",
    43: "rain night holding hands tightly",
    44: "hot soup table, answer in eyes, soft",
    45: "after cleaning side by side, warm smile",
    46: "unstoppable soft laugh close-up",
    47: "bookstore reunion warmth",
    48: "ledger closed, leaning close",
    49: "genuine laugh soft romantic CG",
    50: "intertidal zone dawn holding hands, true end mood",
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


def gen_one(ch: int, key: str, base: str, model: str) -> None:
    out = CG_DIR / f"cg-ch{ch:02d}-end.png"
    if out.exists() and out.stat().st_size > 50_000:
        print(f"skip {out.name}")
        return
    scene = SUBS[ch]
    prompt = (
        "Japanese anime manga style visual novel widescreen romantic CG, cel-shaded, "
        "NOT photorealistic. Lin Wantang mature bookstore clerk: dark messy low bun, "
        "warm brown eyes, cream blouse, often navy apron. Soft 18+ sensual intimate mood, "
        "tasteful closeness blush skin warmth, NO explicit nudity, NO pornographic acts. "
        f"Scene: {scene}. Cinematic composition, amber and deep blue coastal night grade, "
        "no watermark, no UI text."
    )
    url = base.rstrip("/") + "/v1/images/generations"
    body = json.dumps(
        {
            "model": model,
            "prompt": prompt,
            "size": "1536x1024",
            "n": 1,
        }
    ).encode()
    req = urllib.request.Request(
        url,
        data=body,
        headers={
            "Authorization": f"Bearer {key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    print(f"gen {out.name} ...")
    with urllib.request.urlopen(req, timeout=180) as resp:
        data = json.loads(resp.read().decode())
    item = data["data"][0]
    if "b64_json" in item:
        raw = base64.b64decode(item["b64_json"])
    else:
        with urllib.request.urlopen(item["url"], timeout=120) as r2:
            raw = r2.read()
    out.write_bytes(raw)
    print(f"ok {out.name} ({len(raw)} bytes)")


def main() -> None:
    load_env()
    key = os.environ.get("OPENAI_API_KEY", "")
    base = os.environ.get("OPENAI_BASE_URL", "https://api.openai.com")
    model = os.environ.get("OPENAI_IMAGE_MODEL", "gpt-image-2-1k")
    if not key:
        raise SystemExit("OPENAI_API_KEY missing")
    CG_DIR.mkdir(parents=True, exist_ok=True)
    start = int(os.environ.get("CG_START", "11"))
    end = int(os.environ.get("CG_END", "50"))
    for ch in range(start, end + 1):
        try:
            gen_one(ch, key, base, model)
        except urllib.error.HTTPError as e:
            print(f"HTTP {e.code} on ch{ch}: {e.read()[:300]!r}")
            time.sleep(2)
        except Exception as e:
            print(f"fail ch{ch}: {e}")
            time.sleep(1)
        time.sleep(0.8)


if __name__ == "__main__":
    main()
