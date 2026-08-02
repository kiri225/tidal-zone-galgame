#!/usr/bin/env python3
"""Regenerate Wantang sprites with native transparent PNG + comparison boards.

Pipeline:
1) generations API with transparent background + ultra-locked prompt (design sheet text lock)
2) optional polish edit from generated default for each expression (transparent)
3) write compare boards under docs/refs/compare/
"""

from __future__ import annotations

import base64
import io
import json
import os
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
CHAR_DIR = ROOT / "public" / "images" / "char"
SHEET_A = ROOT / "docs" / "refs" / "wantang-design-sheet-a.png"
COMPARE_DIR = ROOT / "docs" / "refs" / "compare"
ANCHOR = CHAR_DIR / "wantang-default.png"

EXPRESSIONS: list[tuple[str, str]] = [
    ("default", "calm neutral everyday expression; right hand lightly in apron pocket; relaxed standing"),
    ("soft", "soft gentle warmer eyes; same pose"),
    ("tense", "tense guarded furrowed brows; lips tight; same pose"),
    ("blush", "shy blushing cheeks and ears; soft eyes; same pose"),
    ("avert", "head turned slightly aside; eyes looking away; reserved; same pose"),
    ("smile", "small quiet smile; soft eyes; same pose"),
    ("hurt", "hurt wounded brows drawn up; fragile gaze; same pose"),
    ("laugh", "warm genuine laugh-smile; softer crescent eyes; same pose"),
    ("surprised", "surprised widened eyes; eyebrows raised; mouth slightly open; same pose"),
    ("teary", "teary glistening eyes; vulnerable; same pose"),
    ("cold", "cold distant aloof expression; same pose"),
    ("tired", "late-night tired half-lidded eyes; same pose"),
    ("book", "holding an old hardcover book against chest with both hands; calm expression"),
    ("crossed", "arms lightly crossed over chest; defensive tense expression"),
]

# Extremely locked identity from the user's design sheet (月影書店店員)
DEFAULT_PROMPT = """
Japanese anime visual novel FULL-BODY standing sprite, transparent PNG background with alpha.

Character identity (must match bookstore clerk design sheet exactly):
- Mature woman about 28 years old, height impression 168cm, elegant intellectual calm face
- Dark brown / near-black hair tied in a LOOSE LOW MESSY BUN with soft face-framing strands
  (HAIR MUST BE LONG ENOUGH FOR A BUN — NOT a short bob, NOT chin-length short hair)
- Warm brown eyes, soft mature features, light makeup
- Outfit MUST be bookstore workwear:
  * cream / off-white long-sleeve BUTTON BLOUSE, sleeves rolled to mid-forearm
  * LONG navy-blue FULL APRON over the blouse (bib apron covering chest), gold text 「月影書店」 on chest
  * wooden rectangular tag hanging from waist tie
  * dark brown long skirt under apron
  * dark brown loafers
- Apron may have a tasteful side slit and a pocket; still clearly an APRON over blouse, NOT a dress
- Forbidden: sleeveless dress, halter dress, cocktail dress, bare shoulders, short hair bob,
  lingerie, photo-realism, multiple characters, UI text, scenery, floor shadow blob, solid backdrop

Composition: single character centered, feet near bottom edge, galgame tachie style, cel-shaded clean lineart.
Expression: calm neutral everyday look, one hand casually in apron pocket.
""".strip()


def load_env() -> None:
    env = ROOT / ".env"
    if not env.exists():
        return
    for line in env.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        k, v = line.split("=", 1)
        os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


def api() -> tuple[str, str, str]:
    key = os.environ.get("OPENAI_API_KEY", "")
    base = os.environ.get("OPENAI_BASE_URL", "https://api.hangzhale.com").rstrip("/")
    model = "gpt-image-2"  # only this supports transparent on the gateway
    if not key:
        raise SystemExit("Missing OPENAI_API_KEY")
    return key, base, model


def http_call(req: urllib.request.Request, retries: int = 4) -> dict:
    last: Exception | None = None
    for attempt in range(1, retries + 1):
        try:
            with urllib.request.urlopen(req, timeout=420) as resp:
                return json.load(resp)
        except urllib.error.HTTPError as e:
            err = e.read().decode("utf-8", errors="replace")
            last = RuntimeError(f"HTTP {e.code}: {err[:800]}")
            if e.code in (408, 429, 500, 502, 503, 504, 524) and attempt < retries:
                print(f"  retry {attempt} HTTP {e.code}")
                time.sleep(8 * attempt)
                continue
            raise last from e
        except Exception as e:  # noqa: BLE001
            last = e
            if attempt < retries:
                print(f"  retry {attempt} {e!r}")
                time.sleep(8 * attempt)
                continue
            raise
    raise RuntimeError(str(last))


def save_b64(payload: dict, out: Path) -> float:
    b64 = payload["data"][0].get("b64_json")
    if not b64:
        raise RuntimeError("no b64_json")
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_bytes(base64.b64decode(b64))
    im = Image.open(out).convert("RGBA")
    px = im.load()
    zeros = 0
    total = im.width * im.height
    for y in range(im.height):
        for x in range(im.width):
            if px[x, y][3] == 0:
                zeros += 1
    ratio = zeros / total
    print(f"  saved {out.relative_to(ROOT)} alpha0={ratio:.1%} size={im.size}")
    return ratio


def generate_transparent(key: str, base: str, model: str, prompt: str, out: Path) -> float:
    print(f"-> generate transparent {out.name}")
    body = {
        "model": model,
        "prompt": prompt,
        "size": "1024x1536",
        "n": 1,
        "background": "transparent",
        "output_format": "png",
    }
    data = json.dumps(body).encode("utf-8")
    req = urllib.request.Request(
        f"{base}/v1/images/generations",
        data=data,
        headers={
            "Authorization": f"Bearer {key}",
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 tidal-zone-asset-gen",
        },
        method="POST",
    )
    return save_b64(http_call(req), out)


def edit_transparent(
    key: str, base: str, model: str, prompt: str, ref: Path, out: Path
) -> float:
    print(f"-> edit transparent {ref.name} -> {out.name}")
    boundary = f"----Bound{int(time.time() * 1000)}"
    chunks: list[bytes] = []

    def field(name: str, value: str) -> None:
        chunks.append(f"--{boundary}\r\n".encode())
        chunks.append(f'Content-Disposition: form-data; name="{name}"\r\n\r\n'.encode())
        chunks.append(value.encode("utf-8"))
        chunks.append(b"\r\n")

    field("model", model)
    field("prompt", prompt)
    field("size", "1024x1536")
    field("background", "transparent")
    field("output_format", "png")
    chunks.append(f"--{boundary}\r\n".encode())
    chunks.append(
        f'Content-Disposition: form-data; name="image"; filename="{ref.name}"\r\n'.encode()
    )
    chunks.append(b"Content-Type: image/png\r\n\r\n")
    chunks.append(ref.read_bytes())
    chunks.append(b"\r\n")
    chunks.append(f"--{boundary}--\r\n".encode())
    req = urllib.request.Request(
        f"{base}/v1/images/edits",
        data=b"".join(chunks),
        headers={
            "Authorization": f"Bearer {key}",
            "Content-Type": f"multipart/form-data; boundary={boundary}",
            "User-Agent": "Mozilla/5.0 tidal-zone-asset-gen",
        },
        method="POST",
    )
    return save_b64(http_call(req), out)


def fit(im: Image.Image, box: tuple[int, int]) -> Image.Image:
    im = im.convert("RGBA")
    ratio = min(box[0] / im.width, box[1] / im.height)
    nw, nh = max(1, int(im.width * ratio)), max(1, int(im.height * ratio))
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", box, (0, 0, 0, 0))
    canvas.alpha_composite(im, ((box[0] - nw) // 2, (box[1] - nh) // 2))
    return canvas


def checker(size: tuple[int, int]) -> Image.Image:
    w, h = size
    im = Image.new("RGBA", size, (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    for y in range(0, h, 16):
        for x in range(0, w, 16):
            c = (58, 62, 70, 255) if ((x // 16) + (y // 16)) % 2 == 0 else (38, 42, 50, 255)
            d.rectangle([x, y, x + 15, y + 15], fill=c)
    return im


def make_compare(sheet: Path, sprites: list[Path], out: Path, title: str) -> None:
    COMPARE_DIR.mkdir(parents=True, exist_ok=True)
    cols = 4
    cell = (340, 520)
    items: list[tuple[str, Image.Image]] = [("DESIGN", Image.open(sheet).convert("RGBA"))]
    for p in sprites:
        if p.exists():
            items.append((p.stem.replace("wantang-", ""), Image.open(p).convert("RGBA")))
    rows = (len(items) + cols - 1) // cols
    pad, header = 20, 56
    board = Image.new(
        "RGB",
        (pad + cols * (cell[0] + pad), header + pad + rows * (cell[1] + pad + 26)),
        (12, 16, 22),
    )
    draw = ImageDraw.Draw(board)
    try:
        font = ImageFont.truetype("arial.ttf", 20)
        font_s = ImageFont.truetype("arial.ttf", 14)
    except Exception:
        font = ImageFont.load_default()
        font_s = font
    draw.text((pad, 16), title, fill=(240, 230, 210), font=font)
    for idx, (label, im) in enumerate(items):
        r, c = divmod(idx, cols)
        x = pad + c * (cell[0] + pad)
        y = header + pad + r * (cell[1] + pad + 26)
        tile = checker(cell)
        tile.alpha_composite(fit(im, cell))
        board.paste(tile.convert("RGB"), (x, y))
        draw.text((x, y + cell[1] + 4), label, fill=(200, 190, 170), font=font_s)
    board.save(out, quality=92)
    print(f"  compare -> {out.relative_to(ROOT)}")


def side_by_side(sheet: Path, sprite: Path, out: Path) -> None:
    COMPARE_DIR.mkdir(parents=True, exist_ok=True)
    left = fit(Image.open(sheet).convert("RGBA"), (720, 1024))
    right = checker((720, 1024))
    right.alpha_composite(fit(Image.open(sprite).convert("RGBA"), (720, 1024)))
    board = Image.new("RGB", (720 * 2 + 40, 1024 + 70), (12, 16, 22))
    draw = ImageDraw.Draw(board)
    try:
        font = ImageFont.truetype("arial.ttf", 26)
    except Exception:
        font = ImageFont.load_default()
    draw.text((16, 18), "DESIGN SHEET", fill=(240, 230, 210), font=font)
    draw.text((720 + 28, 18), "GENERATED RGBA SPRITE", fill=(240, 230, 210), font=font)
    left_bg = Image.new("RGB", (720, 1024), (28, 32, 40))
    left_rgba = Image.new("RGBA", (720, 1024), (28, 32, 40, 255))
    left_rgba.alpha_composite(left)
    board.paste(left_rgba.convert("RGB"), (12, 56))
    board.paste(right.convert("RGB"), (720 + 28, 56))
    board.save(out, quality=93)
    print(f"  compare -> {out.relative_to(ROOT)}")


def main() -> None:
    load_env()
    key, base, model = api()
    print(f"model={model} transparent=true")

    # 1) native transparent default (prompt-locked to design sheet)
    ratio = generate_transparent(key, base, model, DEFAULT_PROMPT, ANCHOR)
    if ratio < 0.2:
        print("!! expected native transparent PNG", file=sys.stderr)
        sys.exit(1)

    # 2) polish once against design sheet via edit (keep transparent)
    polish = (
        "Using the character design sheet as identity reference, refine this standing sprite "
        "so face, hair bun, cream blouse, navy apron with 月影書店, wooden tag, brown skirt and "
        "loafers match the sheet MORE closely. Keep full-body galgame sprite composition. "
        "Keep transparent PNG alpha background. Do NOT turn apron into a dress. Do NOT shorten hair."
    )
    # Combine sheet+sprite is hard; edit sprite with sheet as image may drift.
    # Instead: edit sprite alone with verbal lock (safer), then compare to sheet.
    # Optional second pass: edit using sheet — skip if drifts; we already prompt-locked.

    side_by_side(SHEET_A, ANCHOR, COMPARE_DIR / "compare-side-by-side.jpg")
    make_compare(
        SHEET_A,
        [ANCHOR],
        COMPARE_DIR / "compare-default-vs-sheet.jpg",
        "Wantang default (transparent) vs design sheet",
    )

    outs = [ANCHOR]
    for expr, desc in EXPRESSIONS:
        if expr == "default":
            continue
        out = CHAR_DIR / f"wantang-{expr}.png"
        prompt = (
            "Edit this EXACT visual novel standing sprite. Keep identical face, long hair in messy bun, "
            "cream blouse, navy apron with 月影書店, wooden tag, brown skirt, loafers, proportions. "
            f"ONLY change to: {desc}. Keep transparent PNG alpha background. No redesign, no short hair, no dress."
        )
        edit_transparent(key, base, model, prompt, ANCHOR, out)
        outs.append(out)
        time.sleep(0.8)

    make_compare(
        SHEET_A,
        outs,
        COMPARE_DIR / "compare-all-expressions.jpg",
        "Wantang all expressions (native transparent PNG) vs design sheet",
    )
    # bump asset ver hint file
    print("ALL DONE")
    print(f"Compare boards in: {COMPARE_DIR}")


if __name__ == "__main__":
    main()
