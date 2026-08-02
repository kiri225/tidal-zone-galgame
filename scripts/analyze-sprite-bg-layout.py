#!/usr/bin/env python3
"""Analyze qinghe chapter bg usage and recommend sprite layout profiles."""
from __future__ import annotations

import re
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
STORY = ROOT / "src" / "data" / "story" / "qinghe"

# Heuristic profiles by scene type (camera distance)
PROFILE = {
    "qinghe-room": {
        "scale": 0.68,
        "x": 58,
        "bottom": -10,
        "note": "室内直播角：环灯/脚架在左侧前景，立绘偏右缩小，避免巨人感与挡手机脚架",
    },
    "qinghe-room-off": {
        "scale": 0.7,
        "x": 55,
        "bottom": -9,
        "note": "关灯公寓：同样室内透视，略抬立绘露出腰以上",
    },
    "bookstore": {
        "scale": 0.74,
        "x": 52,
        "bottom": -8,
        "note": "书店中景：书架高度参考，立绘中等",
    },
    "bookstore-close": {
        "scale": 0.78,
        "x": 50,
        "bottom": -6,
        "note": "关店近景：可略大",
    },
    "bookstore-loft": {
        "scale": 0.72,
        "x": 54,
        "bottom": -8,
        "note": "二楼书库：空间窄，略小",
    },
    "shop-interior": {
        "scale": 0.72,
        "x": 52,
        "bottom": -8,
        "note": "拾潮店内：柜台尺度",
    },
    "shop-back": {
        "scale": 0.7,
        "x": 50,
        "bottom": -8,
        "note": "后仓：较挤，缩小",
    },
    "hotel-lobby": {
        "scale": 0.66,
        "x": 50,
        "bottom": -10,
        "note": "大堂远景：人物应更小",
    },
    "hotel-lobby-storm": {
        "scale": 0.66,
        "x": 50,
        "bottom": -10,
        "note": "大堂台风：同远景",
    },
    "hotel-corridor": {
        "scale": 0.72,
        "x": 52,
        "bottom": -8,
        "note": "走廊中景",
    },
    "hotel-bar": {
        "scale": 0.74,
        "x": 48,
        "bottom": -7,
        "note": "酒吧吧台尺度",
    },
    "hotel-duty": {
        "scale": 0.76,
        "x": 50,
        "bottom": -6,
        "note": "值班室近景",
    },
    "hotel-room": {
        "scale": 0.72,
        "x": 55,
        "bottom": -8,
        "note": "客房",
    },
    "hotel-monitor": {
        "scale": 0.7,
        "x": 58,
        "bottom": -8,
        "note": "监控室：偏右避开屏幕墙",
    },
    "hotel-service": {
        "scale": 0.7,
        "x": 50,
        "bottom": -9,
        "note": "卸货通道",
    },
    "street-rain": {
        "scale": 0.78,
        "x": 50,
        "bottom": -5,
        "note": "雨街：中近景可偏大",
    },
    "street-night": {
        "scale": 0.78,
        "x": 50,
        "bottom": -5,
        "note": "夜街",
    },
    "street-day": {
        "scale": 0.78,
        "x": 50,
        "bottom": -5,
        "note": "日街",
    },
    "port-night": {
        "scale": 0.7,
        "x": 48,
        "bottom": -8,
        "note": "码头开阔远景：缩小",
    },
    "port-dusk": {
        "scale": 0.7,
        "x": 48,
        "bottom": -8,
        "note": "码头黄昏",
    },
    "market-morning": {
        "scale": 0.74,
        "x": 50,
        "bottom": -6,
        "note": "市集人流中景",
    },
    "tide-pools": {
        "scale": 0.72,
        "x": 50,
        "bottom": -7,
        "note": "岩滩：地平开阔，中等",
    },
    "seaside-dawn": {
        "scale": 0.7,
        "x": 50,
        "bottom": -8,
        "note": "海边黎明远景",
    },
    "gallery": {
        "scale": 0.74,
        "x": 52,
        "bottom": -7,
        "note": "画廊",
    },
    "wantang-room": {
        "scale": 0.74,
        "x": 52,
        "bottom": -7,
        "note": "晚棠阁楼",
    },
    "research-station": {
        "scale": 0.72,
        "x": 50,
        "bottom": -8,
        "note": "海洋站（少用）",
    },
}

DEFAULT = {
    "scale": 0.74,
    "x": 50,
    "bottom": -7,
    "note": "默认中景",
}


def main() -> None:
    ch_bgs: dict[str, set[str]] = defaultdict(set)
    bg_count: Counter[str] = Counter()
    for p in sorted(STORY.glob("ch*.ts")):
        text = p.read_text(encoding="utf-8")
        bgs = re.findall(r"bg:\s*'([^']+)'", text)
        for b in bgs:
            ch_bgs[p.stem].add(b)
            bg_count[b] += 1

    print("CHAPTER -> BG -> PROFILE")
    for ch in sorted(ch_bgs, key=lambda s: int(s[2:])):
        for b in sorted(ch_bgs[ch]):
            prof = PROFILE.get(b, DEFAULT)
            print(
                f"{ch:6s} | {b:22s} | scale={prof['scale']} x={prof['x']}% bottom={prof['bottom']}vh | {prof['note']}"
            )

    print("\nBG FREQUENCY")
    for b, c in bg_count.most_common():
        print(f"  {c:3d}  {b}")


if __name__ == "__main__":
    main()
