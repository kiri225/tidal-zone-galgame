#!/usr/bin/env python3
"""Generate galgame assets via OpenAI-compatible image API (gpt-image-2).

Usage:
  py -3 scripts/gen-assets-openai.py                  # all missing
  py -3 scripts/gen-assets-openai.py --only wantang-default
  py -3 scripts/gen-assets-openai.py --force          # regenerate all
  py -3 scripts/gen-assets-openai.py --group char
  py -3 scripts/gen-assets-openai.py --group bg
  py -3 scripts/gen-assets-openai.py --group cg
"""

from __future__ import annotations

import argparse
import base64
import json
import os
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CHAR_DIR = ROOT / "public" / "images" / "char"
BG_DIR = ROOT / "public" / "images" / "bg"
CG_DIR = ROOT / "public" / "images" / "cg"
DEFAULT_SHEET = ROOT / "docs" / "refs" / "wantang-design-sheet-a.png"

WANTANG_BASE = (
    "Japanese anime manga style visual novel character standing sprite of Lin Wantang "
    "(林晚棠), mature bookstore clerk matching the provided character design sheet, "
    "cel-shaded, clean lineart, NOT photorealistic. Dark brown hair in a loose messy low bun "
    "with soft face-framing strands, warm brown eyes, elegant calm face. Cream / off-white "
    "button blouse with sleeves rolled to elbows, long navy apron with gold text 月影書店 on "
    "chest, wooden waist tag, dark brown long skirt, brown leather loafers. Full body standing, "
    "centered, feet near bottom, plain pure white background for cutout, no scenery, "
    "no floor shadow blob, no watermark, no UI, no design sheet panels."
)

SHEET_TO_DEFAULT_PROMPT = (
    "Using this character design sheet as the ONLY identity reference, create a single clean "
    "full-body visual novel standing sprite of the bookstore clerk woman. Match the front "
    "turnaround / main design exactly: face, dark messy bun, cream blouse, navy apron with "
    "gold 月影書店 logo, wooden tag, brown long skirt, brown loafers. Calm neutral expression, "
    "one hand lightly in apron pocket. Output ONLY the one full-body sprite on pure white "
    "background. No text, no color palette bars, no multiple views, no other panels."
)

EXPRESSIONS: list[tuple[str, str]] = [
    ("default", "calm neutral everyday expression, right hand in apron pocket, relaxed stance"),
    ("soft", "soft gentle expression, slightly warmer eyes, same pose as usual"),
    ("tense", "tense guarded expression, furrowed brows, lips tight"),
    ("blush", "shy blushing cheeks and ears, eyes slightly averted but face forward"),
    ("avert", "head turned slightly aside, eyes looking away from camera, reserved"),
    ("smile", "small quiet smile, soft eyes"),
    ("hurt", "hurt wounded expression, brows drawn up, fragile gaze"),
    ("laugh", "warm genuine laugh-smile, softer crescent eyes"),
    ("surprised", "surprised widened eyes, eyebrows raised, mouth slightly open"),
    ("teary", "teary glistening eyes, vulnerable expression"),
    ("cold", "cold distant aloof expression, emotionally closed"),
    ("tired", "late-night tired half-lidded eyes after bookstore shift"),
    ("book", "holding an old hardcover book against chest with both hands, calm expression"),
    ("crossed", "arms lightly crossed over chest, defensive tense expression"),
]

BACKGROUNDS: list[tuple[str, str]] = [
    (
        "bg-port-night",
        "Japanese anime cinematic visual novel background, coastal town pier at night, "
        "wet wooden docks, distant lighthouse glow, deep blue sea, amber lamps, moist air, "
        "no main character portrait, wide establishing shot, cel-shaded, NOT photorealistic",
    ),
    (
        "bg-street-rain",
        "Japanese anime cinematic visual novel background, narrow old street in light rain, "
        "puddle reflections, warm shop windows, wet cobblestones, coastal town night, "
        "no character portrait, cel-shaded, deep blue and amber palette, NOT photorealistic",
    ),
    (
        "bg-shop-interior",
        "Japanese anime cinematic visual novel background, small antique / thrift shop interior "
        "named 拾潮, shelves of old objects, sea glass jars, warm dust light beams, cozy clutter, "
        "no character portrait, cel-shaded, NOT photorealistic",
    ),
    (
        "bg-bookstore",
        "Japanese anime cinematic visual novel background, intimate late-night bookstore cafe "
        "潮声, tall wooden shelves, amber bar lamps, wine bottles, books, rainy window, "
        "empty of people, cel-shaded, NOT photorealistic",
    ),
    (
        "bg-bookstore-close",
        "Japanese anime cinematic visual novel background, same bookstore after closing, "
        "only one amber lamp lit, empty stools, quiet intimate atmosphere, books in shadow, "
        "no character portrait, cel-shaded, NOT photorealistic",
    ),
    (
        "bg-bookstore-loft",
        "Japanese anime cinematic visual novel background, small loft above bookstore, "
        "narrow window, book stacks, futon hint, rainy night mood, amber lamp, "
        "no character portrait, cel-shaded, NOT photorealistic",
    ),
    (
        "bg-seaside-dawn",
        "Japanese anime cinematic visual novel background, seaside at dawn, wet sand, "
        "tide pools and rocks, pale gold and blue morning light, empty shore, "
        "cel-shaded, NOT photorealistic",
    ),
]

CGS: list[tuple[str, str]] = [
    (
        "cg-reunion",
        "Japanese anime visual novel CG illustration, reunion in late-night bookstore, "
        "Lin Wantang behind amber-lit bar with bookshelves, reserved woman with messy bun "
        "cream shirt navy apron, soft eye contact across the counter, cinematic framing, "
        "cel-shaded, emotional, NOT photorealistic, no UI text",
    ),
    (
        "cg-nighttalk",
        "Japanese anime visual novel CG illustration, after-hours bookstore talk, "
        "Lin Wantang seated near dim amber lamp with wine glass, soft vulnerable expression, "
        "books and rain on window, intimate atmosphere, cel-shaded, NOT photorealistic",
    ),
    (
        "cg-rainnight",
        "Japanese anime visual novel CG illustration, rainbound night, Lin Wantang close, "
        "wet hair strands, emotional tension, warm lamp vs cold rain window, "
        "tasteful literary romance, cel-shaded anime, NOT photorealistic, no explicit nudity",
    ),
    (
        "cg-intertidal",
        "Japanese anime visual novel CG illustration, dawn on intertidal rocky shore, "
        "Lin Wantang and a young man silhouette walking or standing together, "
        "golden-blue morning light, hopeful ending mood, cel-shaded, NOT photorealistic",
    ),
]


def load_env() -> None:
    env_path = ROOT / ".env"
    if not env_path.exists():
        return
    for line in env_path.read_text(encoding="utf-8-sig").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        k, v = line.split("=", 1)
        os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


def api_config() -> tuple[str, str, str]:
    key = os.environ.get("OPENAI_API_KEY", "")
    base = os.environ.get("OPENAI_BASE_URL", "https://deepkey.top").rstrip("/")
    # deepkey exposes resolution-tagged aliases: gpt-image-2-1k / -2k / -4k
    model = os.environ.get("OPENAI_IMAGE_MODEL", "gpt-image-2-1k")
    if not key:
        raise SystemExit("Missing OPENAI_API_KEY in .env")
    return key, base, model


def _http_call(req: urllib.request.Request, timeout: int = 360, retries: int = 8) -> dict:
    last: Exception | None = None
    for attempt in range(1, retries + 1):
        try:
            with urllib.request.urlopen(req, timeout=timeout) as resp:
                return json.load(resp)
        except urllib.error.HTTPError as e:
            err = e.read().decode("utf-8", errors="replace")
            last = RuntimeError(f"HTTP {e.code}: {err[:800]}")
            # retry gateway timeouts / rate limits / flaky channel routing
            if e.code in (408, 429, 500, 502, 503, 504, 524) and attempt < retries:
                wait = min(60, 10 * attempt)
                print(f"  retry {attempt}/{retries} after HTTP {e.code}, sleep {wait}s")
                print(f"  detail: {err[:240]}")
                time.sleep(wait)
                continue
            raise last from e
        except Exception as e:  # noqa: BLE001
            last = e
            if attempt < retries:
                wait = 8 * attempt
                print(f"  retry {attempt}/{retries} after {e!r}, sleep {wait}s")
                time.sleep(wait)
                continue
            raise
    raise RuntimeError(str(last))


def request_json(url: str, key: str, body: dict, timeout: int = 360) -> dict:
    data = json.dumps(body).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=data,
        headers={
            "Authorization": f"Bearer {key}",
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 tidal-zone-asset-gen",
        },
        method="POST",
    )
    return _http_call(req, timeout=timeout)


def request_multipart(url: str, key: str, fields: dict, files: dict, timeout: int = 360) -> dict:
    boundary = f"----Bound{int(time.time() * 1000)}"
    chunks: list[bytes] = []
    for name, value in fields.items():
        chunks.append(f"--{boundary}\r\n".encode())
        chunks.append(f'Content-Disposition: form-data; name="{name}"\r\n\r\n'.encode())
        chunks.append(str(value).encode("utf-8"))
        chunks.append(b"\r\n")
    for name, (filename, content, ctype) in files.items():
        chunks.append(f"--{boundary}\r\n".encode())
        chunks.append(
            f'Content-Disposition: form-data; name="{name}"; filename="{filename}"\r\n'.encode()
        )
        chunks.append(f"Content-Type: {ctype}\r\n\r\n".encode())
        chunks.append(content)
        chunks.append(b"\r\n")
    chunks.append(f"--{boundary}--\r\n".encode())
    body = b"".join(chunks)
    req = urllib.request.Request(
        url,
        data=body,
        headers={
            "Authorization": f"Bearer {key}",
            "Content-Type": f"multipart/form-data; boundary={boundary}",
            "User-Agent": "Mozilla/5.0 tidal-zone-asset-gen",
        },
        method="POST",
    )
    return _http_call(req, timeout=timeout)


def save_b64_image(payload: dict, out: Path) -> None:
    item = payload["data"][0]
    b64 = item.get("b64_json")
    if not b64:
        raise RuntimeError("No b64_json in response")
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_bytes(base64.b64decode(b64))
    print(f"  saved {out.relative_to(ROOT)} ({out.stat().st_size} bytes)")


def generate(
    key: str,
    base: str,
    model: str,
    prompt: str,
    size: str,
    out: Path,
    *,
    transparent: bool = False,
) -> None:
    print(f"-> generate {out.name}")
    body: dict = {"model": model, "prompt": prompt, "size": size, "n": 1}
    if transparent:
        # OpenAI gpt-image family; ignored/failed by some relays — cutout still runs.
        body["background"] = "transparent"
        body["output_format"] = "png"
    try:
        payload = request_json(f"{base}/v1/images/generations", key, body)
    except RuntimeError as e:
        if transparent and "HTTP" in str(e):
            print("  transparent param rejected, retry plain generate")
            body.pop("background", None)
            body.pop("output_format", None)
            payload = request_json(f"{base}/v1/images/generations", key, body)
        else:
            raise
    save_b64_image(payload, out)


def edit(
    key: str, base: str, model: str, prompt: str, size: str, ref: Path, out: Path
) -> None:
    print(f"-> edit from {ref.name} -> {out.name}")
    payload = request_multipart(
        f"{base}/v1/images/edits",
        key,
        {"model": model, "prompt": prompt, "size": size},
        {"image": (ref.name, ref.read_bytes(), "image/png")},
    )
    save_b64_image(payload, out)


def cutout_white_black(path: Path) -> None:
    """Flood-fill remove near-white / near-black studio backgrounds."""
    try:
        from PIL import Image
    except ImportError:
        print("  (skip cutout: Pillow not installed)")
        return

    im = Image.open(path).convert("RGBA")
    w, h = im.size
    px = im.load()
    visited = bytearray(w * h)
    q: list[int] = []

    def is_bg(x: int, y: int) -> bool:
        r, g, b, a = px[x, y]
        if a == 0:
            return True
        if r > 230 and g > 230 and b > 230:
            return True
        if r > 200 and g > 200 and b > 200 and abs(r - g) < 16 and abs(g - b) < 16:
            return True
        if r < 28 and g < 28 and b < 28:
            return True
        if r < 45 and g < 45 and b < 45 and abs(r - g) < 8 and abs(g - b) < 8:
            return True
        return False

    def push(x: int, y: int) -> None:
        if x < 0 or y < 0 or x >= w or y >= h:
            return
        i = y * w + x
        if visited[i]:
            return
        visited[i] = 1
        q.append(i)

    for x, y in [
        (0, 0),
        (w - 1, 0),
        (0, h - 1),
        (w - 1, h - 1),
        (w // 2, 0),
        (0, h // 2),
        (w - 1, h // 2),
        (w // 2, h - 1),
    ]:
        push(x, y)

    while q:
        i = q.pop()
        x, y = i % w, i // w
        if not is_bg(x, y):
            continue
        r, g, b, _ = px[x, y]
        px[x, y] = (r, g, b, 0)
        push(x + 1, y)
        push(x - 1, y)
        push(x, y + 1)
        push(x, y - 1)

    im.save(path)
    print(f"  cutout {path.name}")


def should_skip(path: Path, force: bool) -> bool:
    return path.exists() and path.stat().st_size > 1000 and not force


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--force", action="store_true")
    parser.add_argument("--only", help="single stem, e.g. wantang-default or bg-bookstore")
    parser.add_argument("--group", choices=["char", "bg", "cg", "all"], default="all")
    parser.add_argument("--no-cutout", action="store_true")
    parser.add_argument(
        "--from-sheet",
        nargs="?",
        const=str(DEFAULT_SHEET),
        default=None,
        help="use character design sheet as reference for wantang-default (then diffs)",
    )
    args = parser.parse_args()

    load_env()
    key, base, model = api_config()
    sheet = Path(args.from_sheet) if args.from_sheet else None
    if sheet and not sheet.exists():
        raise SystemExit(f"Design sheet not found: {sheet}")
    print(f"model={model} base={base}")
    if sheet:
        print(f"sheet={sheet}")

    jobs: list[tuple[str, str, Path]] = []

    # char
    if args.group in ("char", "all"):
        for expr, _ in EXPRESSIONS:
            jobs.append(("char", expr, CHAR_DIR / f"wantang-{expr}.png"))

    if args.group in ("bg", "all"):
        for stem, _ in BACKGROUNDS:
            jobs.append(("bg", stem, BG_DIR / f"{stem}.png"))

    if args.group in ("cg", "all"):
        for stem, _ in CGS:
            jobs.append(("cg", stem, CG_DIR / f"{stem}.png"))

    if args.only:
        jobs = [j for j in jobs if j[2].stem == args.only or j[1] == args.only]
        if not jobs:
            raise SystemExit(f"No job matched --only {args.only}")

    # ensure default first for char edits
    jobs.sort(key=lambda j: (0 if j[2].stem == "wantang-default" else 1, j[0], j[1]))

    for kind, key_name, out in jobs:
        if should_skip(out, args.force):
            print(f"= skip existing {out.relative_to(ROOT)}")
            continue

        try:
            if kind == "char":
                expr_prompt = dict(EXPRESSIONS)[key_name]
                if key_name == "default":
                    if sheet:
                        edit(
                            key,
                            base,
                            model,
                            SHEET_TO_DEFAULT_PROMPT,
                            "1024x1536",
                            sheet,
                            out,
                        )
                    else:
                        prompt = f"{WANTANG_BASE} Expression/pose: {expr_prompt}."
                        generate(
                            key,
                            base,
                            model,
                            prompt,
                            "1024x1536",
                            out,
                            transparent=True,
                        )
                else:
                    ref = CHAR_DIR / "wantang-default.png"
                    if not ref.exists():
                        raise RuntimeError("wantang-default.png missing; generate default first")
                    prompt = (
                        "Edit the reference visual novel standing sprite. "
                        "Keep EXACTLY the same woman as the reference: same face, hair bun, "
                        "cream blouse, navy apron with 月影書店, wooden tag, brown skirt, "
                        "loafers, body proportions. "
                        f"ONLY change to: {expr_prompt}. "
                        "Keep plain pure white background, full body, cel-shaded anime, "
                        "NOT photorealistic, no scenery, no design sheet."
                    )
                    edit(key, base, model, prompt, "1024x1536", ref, out)
                if not args.no_cutout:
                    cutout_white_black(out)
            elif kind == "bg":
                prompt = dict(BACKGROUNDS)[key_name]
                generate(key, base, model, prompt, "1536x1024", out)
            else:
                prompt = dict(CGS)[key_name]
                generate(key, base, model, prompt, "1536x1024", out)
        except Exception as e:
            print(f"!! failed {out.name}: {e}", file=sys.stderr)
            sys.exit(1)

        time.sleep(1.2)

    print("ALL DONE")


if __name__ == "__main__":
    main()
