from pathlib import Path
import re

story = Path("src/data/story/qinglan")
cg = Path("public/images/cg")
missing_wire = []
missing_img = []
for ch in range(1, 51):
    f = story / f"ch{ch:02d}.ts"
    t = f.read_text(encoding="utf-8")
    cid = f"ql-ch{ch:02d}-end"
    if f"cg: '{cid}'" not in t:
        missing_wire.append(ch)
    webp = cg / f"cg-ql-ch{ch:02d}-end.webp"
    if not webp.exists() or webp.stat().st_size < 10000:
        missing_img.append(ch)

print("missing wire", missing_wire)
print("missing/small img", missing_img)
print("webp count", len(list(cg.glob("cg-ql-ch*-end.webp"))))

# cg.ts entries
cts = Path("src/data/cg.ts").read_text(encoding="utf-8")
ids = re.findall(r"id: '(ql-ch\d+-end)'", cts)
print("catalog", len(ids), "unique", len(set(ids)))
