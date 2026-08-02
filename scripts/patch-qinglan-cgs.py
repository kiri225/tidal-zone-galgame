#!/usr/bin/env python3
"""Tag wantang chapter-end CGs with route; append Qinglan ch01/ch02 end entries."""
from pathlib import Path
import re

p = Path("src/data/cg.ts")
t = p.read_text(encoding="utf-8")
start = t.index("const chapterEndCgs")
end = t.index("export const cgCatalog")
head, mid, tail = t[:start], t[start:end], t[end:]


def add_route(m: re.Match[str]) -> str:
    block = m.group(0)
    if "route:" in block:
        return block
    if "storyHint:" in block:
        return re.sub(
            r"(storyHint: '[^']*',)",
            r"\1\n    route: 'wantang',",
            block,
            count=1,
        )
    return block.replace(
        "storyUnlock: true,",
        "storyUnlock: true,\n    route: 'wantang',",
    )


mid2 = re.sub(r"\{[^{}]*?storyUnlock: true[^{}]*?\}", add_route, mid, flags=re.S)

ql_block = """
  {
    id: 'ql-ch01-end',
    title: '夜班名牌 · 章末',
    subtitle: '房卡与名牌之间的一厘米',
    affectionRequired: 0,
    storyUnlock: true,
    image: cgAsset('/images/cg/cg-ql-ch01-end.webp'),
    storyHint: '晴岚第1章结尾',
    route: 'qinglan',
  },
  {
    id: 'ql-ch02-end',
    title: '员工价 · 章末',
    subtitle: '过客三个字里的耳尖红',
    affectionRequired: 0,
    storyUnlock: true,
    image: cgAsset('/images/cg/cg-ql-ch02-end.webp'),
    storyHint: '晴岚第2章结尾',
    route: 'qinglan',
  },
"""

if "ql-ch02-end" not in mid2:
    # insert before closing of chapterEndCgs array
    mid2 = mid2.rstrip()
    if mid2.endswith("]"):
        mid2 = mid2[:-1] + ql_block + "\n]\n\n"
    else:
        raise SystemExit("unexpected chapterEndCgs ending")

# Point Qinglan affection CGs to dedicated assets
aff_map = {
    "berth": "cg-ql-berth.webp",
    "offduty": "cg-ql-offduty.webp",
    "shifttalk": "cg-ql-shifttalk.webp",
    "market_ql": "cg-ql-market.webp",
    "almost_ql": "cg-ql-almost.webp",
    "salt_ql": "cg-ql-salt.webp",
    "dutynight": "cg-ql-dutynight.webp",
    "shore_name": "cg-ql-shore.webp",
}

for cid, fname in aff_map.items():
    # replace image line inside the object that has id: 'cid'
    pattern = rf"(id: '{cid}',[\s\S]*?image: cgAsset\(')/images/cg/[^']+('\))"
    repl = rf"\1/images/cg/{fname}\2"
    tail2, n = re.subn(pattern, repl, tail, count=1)
    if n != 1:
        print("warn replace", cid, n)
    tail = tail2

# Drop the placeholder comment
tail = tail.replace(
    "  // 晴岚线 CG（图暂复用现有资源，待专用插画）\n",
    "  // 晴岚线好感 CG\n",
)

p.write_text(head + mid2 + tail, encoding="utf-8")
print("wantang route count", mid2.count("route: 'wantang'"))
print("ql-ch02 present", "ql-ch02-end" in (head + mid2 + tail))
