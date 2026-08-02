#!/usr/bin/env python3
"""
Generate Qinglan chapter-end CGs with locked character appearance, then export WebP.

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

# Locked identity (docs/refs/qinglan-design-notes.md)
CHAR_LOCK = (
    "SAME recurring heroine Su Qinglan every frame, strict character consistency: "
    "29yo Chinese woman, mature hotel night-shift manager, about 168cm, "
    "elegant feminine figure, slim waist, long legs, "
    "dark neat low bun with soft bangs, cool grey-blue eyes, "
    "ALWAYS thick black rectangular glasses unless scene says glasses removed, "
    "fair skin, refined jaw, composed professional beauty. "
    "NOT Lin Wantang, NOT bookstore clerk. "
    "Japanese anime manga cel-shaded visual novel widescreen CG, NOT photorealistic, NOT 3D. "
    "Soft emotional atmosphere, fully clothed, PG-13, NO nudity, NO sexual content, "
    "no watermark, no UI, no dialogue box, cinematic 16:9."
)

SCENES: dict[int, tuple[str, str]] = {
    # (outfit_note, scene)
    1: (
        "navy fitted hotel uniform, white blouse, black pencil skirt, silver name tag, black glasses",
        "hotel lobby front desk night, holding out room key card, polite smile with tiny warmth",
    ),
    2: (
        "navy hotel uniform, name tag, black glasses",
        "lobby front desk, looking down typing, ear tips faintly blush under cold blue light",
    ),
    3: (
        "navy hotel uniform, loosened posture, black glasses, tired",
        "hotel lobby 3am, cold coffee cup, professional smile removed, quiet intimacy",
    ),
    4: (
        "navy hotel uniform perfect smile, black glasses, name tag",
        "front desk after difficult guest, fist clenched under counter then releasing",
    ),
    5: (
        "navy hotel shirt collar one button open, name tag flipped, black glasses, avert gaze",
        "hotel service loading alley night wind, vulnerable crack in armor",
    ),
    6: (
        "navy hotel uniform, black glasses, holding torn registration slip",
        "front desk, pencil note on void slip, secret kept in apron pocket",
    ),
    7: (
        "navy hotel uniform wet rain mood, black glasses, tired soft eyes",
        "rainy hotel entrance doorbell, looking back before answering door",
    ),
    8: (
        "navy hotel uniform, black glasses, name tag removed held in palm",
        "hotel bar after close, amber single lamp, sitting staff-side of counter",
    ),
    9: (
        "navy hotel uniform slightly tired, black glasses",
        "staff breakfast table steam, metal tray, quiet shared meal mood",
    ),
    10: (
        "navy hotel uniform, black glasses, tense looking at old paper",
        "holding yellowed hotel booking slip, soft emotion under composure",
    ),
    11: (
        "navy hotel uniform, black glasses, beckoning soft",
        "empty front desk chair she asked him to watch, soap scent mood",
    ),
    12: (
        "casual day clothes soft blouse jeans, black glasses, NO name tag, NO hotel uniform",
        "sunlit old coastal street, ordinary warm person squinting in daylight",
    ),
    13: (
        "navy hotel uniform perfect customer smile, black glasses, aching shoulders",
        "hotel bar, after sleazy guest comment, smile perfect and painful",
    ),
    14: (
        "navy hotel uniform, black glasses, hurt soft expression",
        "night logbook open, pencil note visible mood, caught observing",
    ),
    15: (
        "navy hotel uniform, black glasses, small suitcase, name tag swaying",
        "elevator doors closing, brief farewell, cold lobby lights",
    ),
    16: (
        "navy hotel uniform, black glasses, soft surprise then smile",
        "returning to front desk, eyes pause half a second on him",
    ),
    17: (
        "navy hotel uniform jacket open, black glasses, calm smile",
        "hotel bar after hours, two untouched glasses on counter, quiet conversation mood",
    ),
    18: (
        "navy hotel uniform, black glasses, tired honest eyes",
        "bar counter, confessing short berth strategy, half light half shadow",
    ),
    19: (
        "navy hotel uniform, black glasses, cold tense",
        "lobby after broker phone call, asking if keycard will be thrown away",
    ),
    20: (
        "navy hotel uniform, black glasses, blush, name tag against chest",
        "hotel corridor night by red fire cabinet, almost-kiss distance",
    ),
    21: (
        "navy hotel uniform, black glasses, name tag lying on bar top",
        "after-hours bar, chin on hand, private night talk voice",
    ),
    22: (
        "navy hotel uniform, black glasses, soft avert",
        "bar doorway automatic door wind, restrained almost-kiss mood",
    ),
    23: (
        "casual clothes, black glasses, market smile",
        "morning harbor fish market, looking back to confirm he is still there",
    ),
    24: (
        "casual soft cardigan, black glasses",
        "breakwater non-tourist path dusk, tugging his sleeve in wind",
    ),
    25: (
        "casual clothes, black glasses, forehead dusted with shop dust",
        "inside old junk shop packing boxes, salt soda bottles",
    ),
    26: (
        "casual clothes, black glasses, hurt cold expression",
        "shop doorway argument mood, unopened salt soda between them",
    ),
    27: (
        "casual clothes wet rain, black glasses, teary soft smile",
        "under rain shelter, salt soda foam overflowing, reconciliation",
    ),
    28: (
        "navy hotel uniform, black glasses, soft blush",
        "lobby before shift change, dawn blue window, naming a habit",
    ),
    29: (
        "navy hotel uniform, black glasses, cold commander mood",
        "typhoon prep sandbags lobby, name tag trembling slightly",
    ),
    30: (
        "navy hotel uniform wet, black glasses, tense",
        "storm lobby, pressing emergency key into his palm",
    ),
    31: (
        "navy hotel uniform, black glasses, tired real face",
        "emergency green-white lights, blackout lobby, no professional filter",
    ),
    32: (
        "navy hotel shirt, black glasses, intimate soft",
        "narrow duty room sofa one blanket, wind howling outside",
    ),
    33: (
        "navy hotel shirt neat, black glasses, vulnerable serious eyes",
        "small duty room during storm, asking a quiet emotional question, fully clothed",
    ),
    34: (
        "navy hotel uniform, black glasses, holding silver name tag in hand",
        "duty room table, removing name badge as a symbolic moment, soft blush, fully clothed",
    ),
    35: (
        "blouse, glasses optional soft, intimate blush",
        "duty room rainbound closeness, trust after unmask, tasteful",
    ),
    36: (
        "blouse soft, black glasses, thoughtful",
        "after storm, defining habit versus shore",
    ),
    37: (
        "navy hotel uniform back on, black glasses, secret sleeve touch",
        "dawn shift change seaside light through lobby glass",
    ),
    38: (
        "soft blouse, black glasses, looking at ocean",
        "empty hotel sea-view room window, tide pool metaphor",
    ),
    39: (
        "navy hotel uniform, black glasses, playful soft",
        "pretending front desk lines only for him",
    ),
    40: (
        "navy hotel uniform, black glasses, cold shield",
        "lobby under colleagues' glances, shielding him from gossip",
    ),
    41: (
        "navy hotel uniform, black glasses, offering red-string keycard",
        "staff corridor spare keycard trust gift",
    ),
    42: (
        "navy hotel uniform, black glasses, cold watching",
        "lobby buyer leather shoes, decision tension",
    ),
    43: (
        "navy hotel uniform, black glasses, rain monitor glow",
        "security monitor room, pause button on handshake footage",
    ),
    44: (
        "navy hotel uniform, black glasses, tense bar night",
        "closed bar, stay-or-go question on the counter like a key",
    ),
    45: (
        "navy hotel uniform, black glasses, empty name-tag clip on collar, serious soft eyes",
        "hotel bar closed, asking for whom she removed the badge, emotional but fully clothed",
    ),
    46: (
        "casual soft, black glasses, shy smile",
        "old shop imagining co-named blackboard, ear tips red",
    ),
    47: (
        "navy hotel uniform, black glasses, resolute",
        "lobby dual ultimatum papers under glass, standing his shore",
    ),
    48: (
        "navy hotel uniform, black glasses, leaning on side door",
        "hotel side door deliberately unlocked for him only",
    ),
    49: (
        "navy hotel uniform, black glasses, quiet screen glow",
        "booking system saying transient guests no longer book — asking if he will",
    ),
    50: (
        "casual soft clothes, black glasses, genuine dawn smile",
        "seaside dawn tide pools, holding private name badge, true-end hope",
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


def gen_one(ch: int, key: str, base: str, model: str, force: bool) -> Path:
    outfit, scene = SCENES[ch]
    png = CG_DIR / f"cg-ql-ch{ch:02d}-end.png"
    webp = CG_DIR / f"cg-ql-ch{ch:02d}-end.webp"
    if not force and webp.exists() and webp.stat().st_size > 40_000:
        print(f"skip {webp.name}")
        return webp

    prompt = (
        f"{CHAR_LOCK} Outfit: {outfit}. Scene: {scene}. "
        "Deep blue and cool coastal night grade with restrained amber accents when indoors. "
        "Focus on Su Qinglan face and upper body consistency."
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
    print(f"gen {png.name} ...")
    with urllib.request.urlopen(req, timeout=180) as resp:
        data = json.loads(resp.read().decode())
    item = data["data"][0]
    if "b64_json" in item:
        raw = base64.b64decode(item["b64_json"])
    else:
        with urllib.request.urlopen(item["url"], timeout=120) as r2:
            raw = r2.read()
    png.write_bytes(raw)
    im = Image.open(png).convert("RGB")
    im.save(webp, "WEBP", quality=88, method=6)
    print(f"ok {webp.name} ({webp.stat().st_size} bytes)")
    return webp


def main() -> None:
    load_env()
    key = os.environ.get("OPENAI_API_KEY", "")
    base = os.environ.get("OPENAI_BASE_URL", "https://api.openai.com")
    model = os.environ.get("OPENAI_IMAGE_MODEL", "gpt-image-2-1k")
    if not key:
        raise SystemExit("OPENAI_API_KEY missing")
    CG_DIR.mkdir(parents=True, exist_ok=True)
    start = int(os.environ.get("CG_START", "1"))
    end = int(os.environ.get("CG_END", "50"))
    force = os.environ.get("CG_FORCE", "") in ("1", "true", "yes")
    # Force regenerate 1–2 as well for consistency lock unless SKIP_EXISTING
    for ch in range(start, end + 1):
        try:
            gen_one(ch, key, base, model, force=force)
        except urllib.error.HTTPError as e:
            print(f"HTTP {e.code} on ch{ch}: {e.read()[:400]!r}")
            time.sleep(2)
        except Exception as e:
            print(f"fail ch{ch}: {e}")
            time.sleep(1)
        time.sleep(0.6)


if __name__ == "__main__":
    main()
