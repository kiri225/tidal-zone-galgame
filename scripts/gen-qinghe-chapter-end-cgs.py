#!/usr/bin/env python3
"""
Generate Qinghe chapter-end CGs (1536x1024, 3:2) with locked character appearance.

Env: OPENAI_API_KEY, OPENAI_BASE_URL, OPENAI_IMAGE_MODEL
Optional: CG_START=1 CG_END=50 CG_FORCE=1
"""

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
    "SAME recurring heroine Gu Qinghe every frame, strict character consistency: "
    "31yo Chinese woman, about 170cm, elegant mature figure, slim waist, long legs, "
    "long deep teal-brown wavy hair half-loose or loosely tied, "
    "sea-glass green eyes, NO eyeglasses, NO black-rim glasses, "
    "fair skin, soft mature face. "
    "NOT Su Qinglan, NOT Lin Wantang, NOT hotel uniform, NOT lab coat. "
    "Japanese anime manga cel-shaded visual novel illustration, landscape composition, "
    "NOT photorealistic, NOT 3D, natural body proportions NOT vertically stretched. "
    "Soft coastal teal and foam-white grade with warm white LED light when indoors. "
    "Fully clothed tasteful, no nudity, no watermark, no UI, no dialogue box."
)

# (outfit_note, scene) per chapter
SCENES: dict[int, tuple[str, str]] = {
    1: (
        "oversized grey hoodie, baseball cap, black mask pulled down to chin",
        "sunlit old coastal street, looking aside under cap brim, first encounter mood",
    ),
    2: (
        "oversized hoodie offline disguise",
        "phone screen glow showing teal cover account name Shell of Intertidal Zone mood",
    ),
    3: (
        "teal silk slip dress sheer black cardigan",
        "apartment door crack leaking cold white ring-light glow, night hallway",
    ),
    4: (
        "teal silk slip, holding small blackboard price list",
        "livestream corner desk, price numbers neat like a tide chart",
    ),
    5: (
        "teal silk slip, soft smile, payment UI dimmed on phone face-down",
        "refusing tips mood, empty tip popup atmosphere",
    ),
    6: (
        "teal silk slip, removing wired earbuds, empty half-beat expression",
        "after stream ends, ring light still on, professional smile gone",
    ),
    7: (
        "teal silk slip cardigan, opening window slit",
        "ocean night sound through window, salt wind curtains",
    ),
    8: (
        "teal silk slip dress sheer black cardigan, LED ring light glow",
        "sitting on inner chair beside ring light in seaside apartment, soft calm mood",
    ),
    9: (
        "teal slip, offering room-temp soda can, earbuds wrapped on wrist",
        "apartment night desk, quiet sharing mood",
    ),
    10: (
        "hoodie mask at chin, crouching packing boxes",
        "inside old junk shop back room camphor dust light shafts",
    ),
    11: (
        "teal slip, empty chair beside phone tripod",
        "livestream corner, tonight not selling only sitting",
    ),
    12: (
        "grey hoodie baseball cap mask, market morning",
        "harbor morning market crowd, whisper do not call my net name",
    ),
    13: (
        "teal slip, serious soft eyes",
        "apartment, subscription wall metaphor mood, asking which side he stands",
    ),
    14: (
        "hand on preview lamp switch, teal slip",
        "almost turning lights off promise, soft blush",
    ),
    15: (
        "hoodie windblown at port night, handing keys back briefly",
        "account weekly hiatus mood, harbor farewell",
    ),
    16: (
        "cardigan instead of hoodie, soft smile at doorbell",
        "returning to apartment door like returning to a shift",
    ),
    17: (
        "teal slip, sticky note saying regulars refill customers checkout",
        "apartment desk night, boundary clarifying mood",
    ),
    18: (
        "lights dimmer, soft face without filter",
        "three extra seconds of looking allowed after lights lowered",
    ),
    19: (
        "tense hoodie, phone ringing broker sell-shop",
        "apartment interrupted night talk, will keycard be thrown with me",
    ),
    20: (
        "teal slip blush, almost-kiss distance then stop",
        "apartment corridor night, almost crossed line mood",
    ),
    21: (
        "earbuds off, price card face-down on table",
        "after-stream night talk, no price tags",
    ),
    22: (
        "morning light, beauty filter toggled off on phone",
        "clear filter more expensive than filter mood",
    ),
    23: (
        "hoodie cap market, looking back to confirm he is still there",
        "morning market glance back, boat that will not leave",
    ),
    24: (
        "wet white shirt over dark swimsuit on tide rocks, coastal photoshoot",
        "tide pool rocks daylight, holding camera remote, wind in hair",
    ),
    25: (
        "hoodie dusty, spare apartment key on shop keyring",
        "old shop packing, not a transaction afraid of typhoon",
    ),
    26: (
        "hurt cold expression hoodie",
        "street-rain argument are you consuming me with care",
    ),
    27: (
        "wet hair soft smile under rain shelter, salt soda",
        "reconciliation foam overflowing, clean salt taste",
    ),
    28: (
        "teal slip, talking about turning lights off",
        "apartment night, once off cannot pretend it is work",
    ),
    29: (
        "tense hoodie, typhoon warning red phone screen",
        "street rain, SMS with only one word come",
    ),
    30: (
        "opening apartment door, ring light still blazing",
        "storm night arrival, light like makeup not removed",
    ),
    31: (
        "hand dimming ring light one notch",
        "still lit because she has not decided to trust yet",
    ),
    32: (
        "phone face-down, only two people left in room",
        "comment section finally silent, intimate quiet",
    ),
    33: (
        "serious soft eyes teal slip",
        "asking were you ever serious, paper-abstract honesty",
    ),
    34: (
        "finger on ring-light switch, then darkness",
        "she turns lights off first, offair moment, soft blush",
    ),
    35: (
        "soft cardigan over slip, moonlight, restrained blush",
        "lights-off apartment closeness after trust, tasteful fully clothed",
    ),
    36: (
        "morning soft, thoughtful",
        "asking habit or shore after the night",
    ),
    37: (
        "pushing ring light one inch into drawer at dawn",
        "window dawn blue, quiet hope",
    ),
    38: (
        "tide pools daylight casual cardigan",
        "hermit crab changing shells metaphor on rocks",
    ),
    39: (
        "pretending to start stream, whispering his name only he hears",
        "ring light on but private opening line",
    ),
    40: (
        "typing then deleting word passerby in comments",
        "screen glow on face, soft hurt",
    ),
    41: (
        "offering spare key on palm",
        "you may come but bring no tips",
    ),
    42: (
        "hoodie mask outside shop, buyer leather shoes inside",
        "waiting at doorway while decision weighs",
    ),
    43: (
        "admin panel glow, note edited to no checkout allowed",
        "subscription dead angle, private remark",
    ),
    44: (
        "seaside dawn tide pools, stay or go",
        "two shallow paths on wet sand",
    ),
    45: (
        "ring light at drawer edge not fully in",
        "for whom do you turn lights off confession mood",
    ),
    46: (
        "shy smile imagining co-named shop blackboard",
        "old shop interior warm dust light",
    ),
    47: (
        "resolute face, two ultimatum papers",
        "broker and platform dual tide pressure",
    ),
    48: (
        "apartment door deliberately unlocked tonight",
        "passersby will leave on their own mood",
    ),
    49: (
        "toggling accept bookings off on phone",
        "passersby no longer book, quiet screen",
    ),
    50: (
        "dawn tide pools soft genuine smile, private shore",
        "forked shell true-end hope morning light",
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
    """Cover-crop square → landscape with slight top bias (keep faces)."""
    tw, th = size
    src = im.convert("RGB")
    w, h = src.size
    scale = max(tw / w, th / h)
    nw, nh = int(w * scale + 0.5), int(h * scale + 0.5)
    src = src.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = int((nh - th) * max(0.0, min(1.0, top_bias)))
    return src.crop((left, top, left + tw, top + th))


def gen_one(ch: int, key: str, base: str, model: str, force: bool) -> Path:
    outfit, scene = SCENES[ch]
    png = CG_DIR / f"cg-qh-ch{ch:02d}-end.png"
    webp = CG_DIR / f"cg-qh-ch{ch:02d}-end.webp"
    if not force and webp.exists() and webp.stat().st_size > 80_000:
        print(f"skip {webp.name}", flush=True)
        return webp

    prompt = (
        f"{CHAR_LOCK} Outfit: {outfit}. Scene: {scene}. "
        "Focus on Gu Qinghe face and upper-body consistency. "
        "Wide landscape framing."
    )
    url = base.rstrip("/") + "/v1/images/generations"
    body = json.dumps(
        {
            "model": model,
            "prompt": prompt,
            "size": "1024x1024",
            "n": 1,
        }
    ).encode()
    req = urllib.request.Request(
        url,
        data=body,
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {key}",
        },
        method="POST",
    )
    print(f"gen ch{ch:02d}...", flush=True)
    with urllib.request.urlopen(req, timeout=120) as resp:
        data = json.loads(resp.read().decode())
    b64 = data["data"][0].get("b64_json")
    if b64:
        raw = base64.b64decode(b64)
        png.write_bytes(raw)
    else:
        img_url = data["data"][0]["url"]
        with urllib.request.urlopen(img_url, timeout=120) as r:
            png.write_bytes(r.read())

    im = Image.open(png).convert("RGB")
    im = cover_to_landscape(im, (1536, 1024))
    im.save(webp, "WEBP", quality=90, method=4)
    print(f"ok {webp.name} {im.size}", flush=True)
    return webp


def main() -> None:
    load_env()
    key = os.environ.get("OPENAI_API_KEY", "")
    if not key:
        raise SystemExit("OPENAI_API_KEY missing — put it in .env or env")
    base = os.environ.get("OPENAI_BASE_URL", "https://api.openai.com")
    model = os.environ.get("OPENAI_IMAGE_MODEL", "gpt-image-1")
    start = int(os.environ.get("CG_START", "1"))
    end = int(os.environ.get("CG_END", "50"))
    force = os.environ.get("CG_FORCE", "1") == "1"
    CG_DIR.mkdir(parents=True, exist_ok=True)
    for ch in range(start, end + 1):
        for attempt in range(3):
            try:
                gen_one(ch, key, base, model, force)
                break
            except urllib.error.HTTPError as e:
                print(f"ch{ch} HTTP {e.code}: {e.read()[:200]!r}")
                time.sleep(2 + attempt * 2)
            except Exception as e:
                print(f"ch{ch} err {e}")
                time.sleep(2 + attempt * 2)
        else:
            print(f"FAIL ch{ch}")


if __name__ == "__main__":
    main()
