#!/usr/bin/env python3
from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
cg_path = root / "src" / "data" / "cg.ts"
snippet = (root / "scripts" / "_chapter_end_catalog_snippet.ts").read_text(encoding="utf-8").rstrip() + "\n"
cg = cg_path.read_text(encoding="utf-8")
m = re.search(r"const chapterEndCgs: CgDef\[\] = \[([\s\S]*?)\n\]", cg)
if not m:
    raise SystemExit("chapterEndCgs not found")
old = m.group(1).rstrip()
if not old.endswith(","):
    old += ","
new_arr = old + "\n" + snippet
cg2 = cg[: m.start(1)] + "\n" + new_arr + cg[m.end(1) :]
cg2 = cg2.replace("章末软暧昧 CG（ch01–ch10）", "章末软暧昧 CG（ch01–ch50）")
cg_path.write_text(cg2, encoding="utf-8")
print("merged, chXX-end count =", len(re.findall(r"id: 'ch\d+-end'", cg2)))
