import re
from pathlib import Path
from collections import Counter

deltas = Counter()
thrs = Counter()
for p in Path("src/data/story").rglob("*.ts"):
    t = p.read_text(encoding="utf-8")
    for m in re.finditer(r"affection:\s*(-?\d+)", t):
        deltas[int(m.group(1))] += 1
    for m in re.finditer(r"threshold:\s*(\d+)", t):
        thrs[int(m.group(1))] += 1
print("deltas", dict(sorted(deltas.items())))
print("thresholds", dict(sorted(thrs.items())))
