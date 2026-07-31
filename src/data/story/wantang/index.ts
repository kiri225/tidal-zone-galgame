import type { DialogueNode } from '../../../engine/types'
import { wantangScript as generated } from './script'
import { chapter01 } from './ch01'
import { chapter02 } from './ch02'
import { chapter03 } from './ch03'
import { chapter04 } from './ch04'
import { chapter05 } from './ch05'
import { chapter06 } from './ch06'
import { chapter07 } from './ch07'
import { chapter08 } from './ch08'
import { chapter09 } from './ch09'
import { chapter10 } from './ch10'
import { chapter11 } from './ch11'
import { chapter12 } from './ch12'
import { chapter13 } from './ch13'
import { chapter14 } from './ch14'
import { chapter15 } from './ch15'
import { chapter16 } from './ch16'
import { chapter17 } from './ch17'
import { chapter18 } from './ch18'
import { chapter19 } from './ch19'
import { chapter20 } from './ch20'
import { chapter21 } from './ch21'
import { chapter22 } from './ch22'
import { chapter23 } from './ch23'
import { chapter24 } from './ch24'
import { chapter25 } from './ch25'
import { chapter26 } from './ch26'
import { chapter27 } from './ch27'
import { chapter28 } from './ch28'
import { chapter29 } from './ch29'
import { chapter30 } from './ch30'
import { chapter31 } from './ch31'
import { chapter32 } from './ch32'
import { chapter33 } from './ch33'
import { chapter34 } from './ch34'

const routeStart = generated.find((n) => n.id === 'route-start')
if (!routeStart) throw new Error('missing route-start')

export const wantangScript: DialogueNode[] = [
  {
    ...routeStart,
    text: '【林晚棠线】五十章。亲密度影响 CG、雨夜与结局。\n从第1章起，对话与场景将按小说密度展开。',
  },
  ...chapter01,
  ...chapter02,
  ...chapter03,
  ...chapter04,
  ...chapter05,
  ...chapter06,
  ...chapter07,
  ...chapter08,
  ...chapter09,
  ...chapter10,
  ...chapter11,
  ...chapter12,
  ...chapter13,
  ...chapter14,
  ...chapter15,
  ...chapter16,
  ...chapter17,
  ...chapter18,
  ...chapter19,
  ...chapter20,
  ...chapter21,
  ...chapter22,
  ...chapter23,
  ...chapter24,
  ...chapter25,
  ...chapter26,
  ...chapter27,
  ...chapter28,
  ...chapter29,
  ...chapter30,
  ...chapter31,
  ...chapter32,
  ...chapter33,
  ...chapter34,
  // 未替换章节暂用生成稿
  ...generated.slice(generated.findIndex((x) => x.id === 'ch35')),
]

export const WANTANG_CHAPTER_COUNT = 50
