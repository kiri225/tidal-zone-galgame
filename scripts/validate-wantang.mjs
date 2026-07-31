import { wantangScript } from "../src/data/story/wantang/index.ts";
const ids=new Set(wantangScript.map(n=>n.id));
const missing=[];
for (const n of wantangScript) {
  for (const t of [n.next, ...(n.choices||[]).map(c=>c.next), n.affectionBranch?.whenMet, n.affectionBranch?.whenNot, n.branch?.whenTrue, n.branch?.whenFalse].filter(Boolean)) {
    if (t !== "__ending__" && !ids.has(t)) missing.push(`${n.id}->${t}`);
  }
}
const ch = [...new Set(wantangScript.filter(n=>n.chapter).map(n=>n.chapter))];
console.log({ nodes: wantangScript.length, chapters: ch.length, missing: missing.length, endings: ["ending-true","ending-good","ending-bitter"].every(id=>ids.has(id)), sample: missing.slice(0,15) });
