#!/usr/bin/env python3
"""Wire Qinglan ch01–ch50 chapter-end CG nodes and refresh cg.ts catalog entries."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
STORY = ROOT / "src" / "data" / "story" / "qinglan"
CG_TS = ROOT / "src" / "data" / "cg.ts"

TITLES = {
    1: "夜班名牌",
    2: "员工价",
    3: "三点的咖啡",
    4: "客人永远对",
    5: "后厨烟",
    6: "登记簿背面",
    7: "雨声与门铃",
    8: "停泊一夜",
    9: "早餐的三种吃法",
    10: "父亲的订房单",
    11: "替班的空位",
    12: "制服之外",
    13: "常住客",
    14: "夜班日志",
    15: "小别·年会",
    16: "回到班表",
    17: "酒吧收工",
    18: "短暂停泊",
    19: "卖铺拷问",
    20: "几乎越线",
    21: "对班夜话",
    22: "清醒的岸",
    23: "休班早晨",
    24: "经理休息日",
    25: "清仓的钥匙",
    26: "争吵的边缘",
    27: "和解的盐",
    28: "谈到交班",
    29: "台风预警",
    30: "来大堂",
    31: "应急灯",
    32: "只剩值班室",
    33: "有没有当真",
    34: "她先摘名牌",
    35: "雨困值班室",
    36: "习惯还是岸",
    37: "黎明交班",
    38: "潮间带·客房",
    39: "假装前台",
    40: "同事的眼光",
    41: "备用房卡",
    42: "买家皮鞋",
    43: "监控死角",
    44: "去留",
    45: "为谁摘牌",
    46: "联名的想象",
    47: "最后通牒",
    48: "大堂的门",
    49: "过客不再订",
    50: "分叉的岸",
}

SUBS = {
    1: "房卡与名牌之间的一厘米",
    2: "过客三个字里的耳尖红",
    3: "冷咖啡旁卸下的职业笑",
    4: "柜台下握紧又松开的拳",
    5: "卸货通道里合得太慢的领口",
    6: "废单背面那行不肯扔掉的字",
    7: "门铃缝里暂存的半句话",
    8: "吧台内侧摘下的名牌",
    9: "员工餐热气里并排的沉默",
    10: "旧订房单上父亲写下的谢",
    11: "替班椅背上残留的皂角味",
    12: "日光下没有名牌的普通人",
    13: "完美笑容底下发疼的肩线",
    14: "日志里「像会走的那种」",
    15: "电梯门合上前晃动的名牌",
    16: "归岗时停住半秒的眼神",
    17: "清醒碰杯时太轻的一声",
    18: "把短暂停泊说成岸的危险",
    19: "房卡会不会被一起扔掉",
    20: "消防栓旁停在几乎的呼吸",
    21: "名牌躺在台面上的夜话",
    22: "习惯比酒更醉的清醒岸",
    23: "早市人潮里回头确认你还在",
    24: "非游客路线上拉住的袖口",
    25: "拾潮灰尘里沾灰的额头",
    26: "未开封盐汽水旁的冷意",
    27: "雨棚下泡沫溢出的和解",
    28: "交班前想给习惯起的名字",
    29: "沙袋旁名牌轻颤的心跳",
    30: "短信四个字与塞进掌心的钥匙",
    31: "应急灯里失去滤镜的侧脸",
    32: "窄沙发上一床毯子的体温",
    33: "有没有当真——问出口的风声",
    34: "金属扣弹开时卸下的铠甲",
    35: "雨困值班室里终于靠岸",
    36: "习惯还是岸的定义战",
    37: "黎明交班袖口的暗号",
    38: "空房窗边潮间带的隐喻",
    39: "假装前台时只对你说的傻瓜",
    40: "同事眼光外被挡住的一侧",
    41: "红绳备用房卡的信任重量",
    42: "买家皮鞋与未推上前的房卡",
    43: "监控死角里按下的暂停键",
    44: "台面上那把去留的钥匙",
    45: "为谁摘牌的领口空扣",
    46: "联名小黑板上未写完的如果",
    47: "双线通牒下站在你选过的岸",
    48: "大堂侧门故意不锁的缝",
    49: "过客不再订——你还订不订",
    50: "分叉的岸上私人名牌的晨光",
}


def mood_for(ch: int) -> str:
    if ch in (20, 32, 33, 34, 35, 36):
        return "intimate"
    if ch in (7, 27, 29, 30, 31, 43):
        return "rain"
    if ch in (3, 5, 14, 15, 19, 26, 40, 42, 47, 49, 50):
        return "cold"
    return "warm"


def strip_end_cg_nodes(text: str, ch: int) -> str:
    return re.sub(
        rf"\n?\s*\{{\s*id:\s*'c{ch:02d}-end-cg[^']*'[\s\S]*?\n\s*\}},?",
        "",
        text,
    )


def chapter_exits(text: str, ch: int) -> list[str]:
    found: list[str] = []
    for m in re.finditer(r"next:\s*'(ch(\d+)|__ending__)'", text):
        token = m.group(1)
        if token == "__ending__":
            found.append(token)
            continue
        num = int(m.group(2))
        if num != ch:
            found.append(f"ch{num:02d}")
    out: list[str] = []
    for t in found:
        if t not in out:
            out.append(t)
    return out


def wire_file(path: Path, ch: int) -> str:
    raw = path.read_text(encoding="utf-8")
    cg_id = f"ql-ch{ch:02d}-end"
    base = strip_end_cg_nodes(raw, ch)
    targets = chapter_exits(base, ch)
    if not targets:
        return f"WARN {path.name}: no exits"

    sub = SUBS[ch]
    mood = mood_for(ch)
    new_text = base
    blocks: list[str] = []

    for i, target in enumerate(targets):
        end_id = f"c{ch:02d}-end-cg" if len(targets) == 1 else f"c{ch:02d}-end-cg-{i + 1}"
        new_text, count = re.subn(
            rf"next:\s*'{re.escape(target)}'",
            f"next: '{end_id}'",
            new_text,
        )
        if count == 0:
            return f"WARN {path.name}: failed to replace {target}"
        blocks.append(
            f"""  {{
    id: '{end_id}',
    cg: '{cg_id}',
    sprite: null,
    mood: '{mood}',
    text: '【CG · 章末】\\n{sub}。这一章的潮位退下去时，夜班的岸还留着她的影子。',
    next: '{target}',
  }}"""
        )

    body = new_text.rstrip()
    if body.endswith("]"):
        body = body[:-1].rstrip()
    if not body.endswith(","):
        body += ","
    body += "\n" + ",\n".join(blocks) + ",\n]\n"
    path.write_text(body, encoding="utf-8")
    action = "rewire" if f"cg: '{cg_id}'" in raw else "wired"
    return f"{action} {path.name} 《{TITLES[ch]}》 exits={targets}"


def catalog_entries() -> str:
    lines: list[str] = []
    for ch in range(1, 51):
        lines.append(
            f"""  {{
    id: 'ql-ch{ch:02d}-end',
    title: '{TITLES[ch]} · 章末',
    subtitle: '{SUBS[ch]}',
    affectionRequired: 0,
    storyUnlock: true,
    image: cgAsset('/images/cg/cg-ql-ch{ch:02d}-end.webp'),
    storyHint: '晴岚第{ch}章结尾',
    route: 'qinglan',
  }},"""
        )
    return "\n".join(lines)


def patch_cg_ts() -> None:
    text = CG_TS.read_text(encoding="utf-8")
    text2 = re.sub(
        r"\n\s*\{\s*id:\s*'ql-ch\d+-end'[\s\S]*?route:\s*'qinglan',\s*\},?",
        "",
        text,
    )
    block = catalog_entries()
    m = re.search(r"\]\s*\n\s*export const cgCatalog", text2)
    if not m:
        raise SystemExit("cannot find chapterEndCgs end")
    text2 = (
        text2[: m.start()]
        + "\n\n"
        + block
        + "\n\n]\n\nexport const cgCatalog"
        + text2[m.end() :]
    )
    CG_TS.write_text(text2, encoding="utf-8")
    print("patched cg.ts with 50 qinglan chapter-end entries")


def main() -> None:
    logs: list[str] = []
    for ch in range(1, 51):
        path = STORY / f"ch{ch:02d}.ts"
        if not path.exists():
            logs.append(f"missing {path.name}")
            continue
        logs.append(wire_file(path, ch))
    print("\n".join(logs))
    patch_cg_ts()


if __name__ == "__main__":
    main()
