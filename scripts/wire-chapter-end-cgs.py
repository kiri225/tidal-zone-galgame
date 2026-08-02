#!/usr/bin/env python3
"""Wire ch11–ch50 chapter-end CG nodes; emit catalog snippet."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
STORY = ROOT / "src" / "data" / "story" / "wantang"

SUBS = {
    11: "雨灯下的湿意靠近",
    12: "伞骨下交叠的影子",
    13: "酒香里未拆穿的护短",
    14: "后仓灯下的停顿",
    15: "夜港风里的并肩",
    16: "卸围裙后的领口松扣",
    17: "旧回忆贴上现下的体温",
    18: "图书馆闭馆铃后的近",
    19: "冷意底下的热",
    20: "几乎吻上的那一秒余温",
    21: "关店夜话的红酒气",
    22: "梦里追上去的雨",
    23: "市集晨光里的并肩",
    24: "防波堤上放慢的脚步",
    25: "明信片边角的指尖",
    26: "书架后未说完的气",
    27: "夜港灯火下的和解",
    28: "烛影里的呼吸交叠",
    29: "雨巷尽头的回头",
    30: "湿衣下的体温",
    31: "地毯上膝碰膝的距离",
    32: "外套垫着的那侧地板",
    33: "诗集脊背上的指腹",
    34: "吻住之前的停顿",
    35: "雨困夜里的靠岸",
    36: "潮汐贴上皮肤的岸",
    37: "黎明潮间带的赤足",
    38: "礁石上并肩的影子",
    39: "假装平常时多停的半秒",
    40: "擦杯指节泛白的紧张",
    41: "钥匙递出时的耳根红",
    42: "铺子灯光里的去留",
    43: "雨夜里紧握的手",
    44: "热汤上的答案",
    45: "并肩清扫后的并肩",
    46: "笑意藏不住的侧脸",
    47: "店内重逢的暖",
    48: "账本合上后的靠近",
    49: "真笑落下的那一下",
    50: "潮间带上十指相扣",
}


def chapter_title(text: str) -> str:
    m = re.search(r"chapterTitle:\s*'([^']+)'", text)
    return m.group(1) if m else "?"


def mood_for(ch: int) -> str:
    if ch >= 34:
        return "intimate"
    if ch in (11, 12, 16, 29, 30, 43):
        return "rain"
    return "warm"


def exit_targets(text: str, ch: int) -> list[str]:
    found: list[str] = []
    for m in re.finditer(r"next:\s*'(ch(\d+)|__ending__)'", text):
        token = m.group(1)
        if token == "__ending__":
            found.append(token)
            continue
        num = int(m.group(2))
        if num != ch:
            found.append(f"ch{num:02d}" if num < 10 else f"ch{num}")
    # normalize: story uses ch11 not ch11 with weird padding — ch01 style for <10 only
    normed = []
    for t in found:
        if t == "__ending__":
            normed.append(t)
        else:
            n = int(t.replace("ch", ""))
            normed.append(f"ch{n:02d}" if n < 10 else f"ch{n}")
    # unique preserve order
    out: list[str] = []
    for t in normed:
        if t not in out:
            out.append(t)
    return out


def wire_file(path: Path, ch: int) -> list[str]:
    text = path.read_text(encoding="utf-8")
    cg_id = f"ch{ch:02d}-end"
    if f"cg: '{cg_id}'" in text:
        return [f"skip {path.name}: already wired"]

    targets = exit_targets(text, ch)
    if not targets:
        return [f"WARN {path.name}: no chapter exits"]

    title = chapter_title(text)
    sub = SUBS.get(ch, "章末未说完的靠近")
    mood = mood_for(ch)
    blocks: list[str] = []
    new_text = text
    replaced = 0

    for i, target in enumerate(targets):
        # Match both ch11 and ch11 forms — use actual spelling in file
        # Find how target appears in file
        n = int(target.replace("ch", "")) if target != "__ending__" else None
        variants = [target]
        if n is not None:
            variants = list({f"ch{n}", f"ch{n:02d}"})

        end_id = f"c{ch:02d}-end-cg" if len(targets) == 1 else f"c{ch:02d}-end-cg-{i + 1}"
        for v in variants:
            pat = re.compile(rf"next:\s*'{re.escape(v)}'")
            new_text, count = pat.subn(f"next: '{end_id}'", new_text)
            replaced += count

        # Resolve next_after to spelling used in story index (prefer unpadded for >=10)
        next_after = target
        if target != "__ending__":
            n = int(target.replace("ch", ""))
            next_after = f"ch{n:02d}" if n < 10 else f"ch{n}"

        blocks.append(
            f"""  {{
    id: '{end_id}',
    cg: '{cg_id}',
    sprite: null,
    mood: '{mood}',
    text: '【CG · 章末】\\n{sub}。这一章的潮位退下去时，她还留在岸上。',
    next: '{next_after}',
  }}"""
        )

    if replaced == 0:
        return [f"WARN {path.name}: exits found but none replaced: {targets}"]

    body = new_text.rstrip()
    if body.endswith("]"):
        body = body[:-1].rstrip()
    if not body.endswith(","):
        body += ","
    body += "\n" + ",\n".join(blocks) + ",\n]\n"
    path.write_text(body, encoding="utf-8")
    return [f"wired {path.name} x{replaced} 《{title}》 exits={targets} -> {cg_id}"]


def main() -> None:
    logs: list[str] = []
    catalog: list[str] = []
    for ch in range(11, 51):
        path = STORY / f"ch{ch:02d}.ts"
        if not path.exists():
            logs.append(f"missing {path.name}")
            continue
        logs.extend(wire_file(path, ch))
        title = chapter_title(path.read_text(encoding="utf-8"))
        sub = SUBS.get(ch, "章末未说完的靠近")
        catalog.append(
            f"""  {{
    id: 'ch{ch:02d}-end',
    title: '{title} · 章末',
    subtitle: '{sub}',
    affectionRequired: 0,
    storyUnlock: true,
    image: cgAsset('/images/cg/cg-ch{ch:02d}-end.png'),
    video: cgAsset('/videos/cg/cg-ch{ch:02d}-end.webm'),
    storyHint: '第{ch}章结尾',
  }},"""
        )
    out = ROOT / "scripts" / "_chapter_end_catalog_snippet.ts"
    out.write_text("\n".join(catalog) + "\n", encoding="utf-8")
    print("\n".join(logs))
    print(f"catalog snippet -> {out}")


if __name__ == "__main__":
    main()
