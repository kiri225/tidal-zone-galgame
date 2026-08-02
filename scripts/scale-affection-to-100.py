#!/usr/bin/env python3
"""Scale story affection deltas & thresholds from 0–20 to 0–100 (×5)."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SCALE = 5
STORY = ROOT / "src" / "data" / "story"


def scale_file(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    orig = text

    def repl_aff(m: re.Match[str]) -> str:
        n = int(m.group(1))
        return f"affection: {n * SCALE}"

    def repl_thr(m: re.Match[str]) -> str:
        n = int(m.group(1))
        return f"threshold: {n * SCALE}"

    # choice / node affection deltas (not affectionBranch / affectionRequired)
    text = re.sub(r"\baffection:\s*(-?\d+)\b", repl_aff, text)
    text = re.sub(r"\bthreshold:\s*(\d+)\b", repl_thr, text)
    # JSON-ish in script.ts
    text = re.sub(
        r'"threshold"\s*:\s*(\d+)',
        lambda m: f'"threshold": {int(m.group(1)) * SCALE}',
        text,
    )

    if text != orig:
        path.write_text(text, encoding="utf-8")
        return True
    return False


def main() -> None:
    changed = 0
    for path in STORY.rglob("*.ts"):
        if scale_file(path):
            print("scaled", path.relative_to(ROOT))
            changed += 1
    print(f"done, {changed} files")


if __name__ == "__main__":
    main()
