import { Box, Button, Checkbox, HStack, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./App.css";

type Ops = {
  oneStar: string[],
  twoStar: string[],
  threeStar: string[],
  fourStar: string[],
  fiveStar: string[],
  sixStar: string[]
}

const ops: Ops = {
  oneStar: [
    "Castle-3",
    "Justice Knight",
    "Lancet-2",
    "THRM-EX"
  ],
  twoStar: [
    "12F",
    "ドゥリン",
    "ノイルホーン",
    "ヤトウ",
    "レンジャー"
  ],
  threeStar: [
    "バニラ",
    "フェン",
    "プリュム",
    "ポプカル",
    "ミッドナイト",
    "メランサ",
    "カーディ	",
    "スポット",
    "ビーグル",
    "アドナキエル",
    "カタパルト",
    "クルース",
    "スチュワード",
    "ラヴァ",
    "アンセル",
    "ハイビスカス",
    "オーキッド"
  ],
  fourStar: [
    "ヴィグナ",
    "クーリエ",
    "スカベンジャー",
    "テンニンカ",
    "ビーンストーク",
    "アレーン",
    "ウタゲ",
    "エステル",
    "カッター",
    "コンビクション",
    "ジャッキー",
    "ドーベルマン",
    "ビーハンター",
    "フロストリーフ",
    "マトイマル",
    "ムース",
    "クオーラ",
    "グム",
    "ジュナー",
    "バブル",
    "マッターホルン",
    "アシッドドロップ",
    "アンブリエル",
    "ヴァーミル",
    "ジェシカ",
    "シラユキ",
    "パインコーン",
    "メイ",
    "メテオ",
    "インディゴ",
    "カシャ",
    "ギターノ",
    "グレイ",
    "プリン",
    "ヘイズ",
    "ガヴィル",
    "ススーロ",
    "セイリュウ",
    "パフューマー",
    "ミルラ",
    "アーススピリット",
    "ディピカ",
    "ポデンコ",
    "ロベルタ",
    "イーサン",
    "グラベル",
    "ジェイ",
    "ショウ",
    "ロープ"
  ],
  fiveStar: [
    "エリジウム",
    "キアーベ",
    "グラニ",
    "ズィマー",
    "テキサス",
    "ブラックナイト",
    "リード",
    "ワイルドメイン",
    "Tachanka",
    "アカフユ",
    "アステシア",
    "アーミヤ(剣)",
    "インドラ",
    "ウィスラッシュ",
    "エアースカーペ",
    "エンカク",
    "サベージ",
    "シデロカ",
    "スペクター",
    "スワイヤー",
    "テキーラ",
    "バイビーク",
    "フランカ",
    "フリント",
    "ブローカ",
    "ラ・プルマ",
    "ラップランド",
    "Blitz",
    "アスベストス",
    "アッシュロック",
    "ヴァルカン",
    "ウン",
    "オーロラ",
    "クロワッサン",
    "シャレム",
    "ニアール",
    "バイソン",
    "ヘビーレイン",
    "リスカム",
    "アオスタ",
    "アズリウス",
    "アンドレアナ",
    "イグゼキュター",
    "エイプリル",
    "グレースロート",
    "シェーシャ",
    "トギフォンス",
    "ファイヤーウォッチ",
    "プラチナ",
    "プロヴァンス",
    "メテオリーテ",
    "寒芒クルース",
    "アイリス",
    "アブサント",
    "アーミヤ(術)",
    "コロセラム",
    "イェラ",
    "スカイフレア",
    "トミミ",
    "ナイトメア",
    "ビーズワクス",
    "ミント",
    "レイズ",
    "レオンハルト",
    "炎獄ラヴァ",
    "ウィスパーレイン",
    "サイレンス",
    "セイロン	",
    "トゥイエ",
    "ハニーベリー",
    "フィリオプシス",
    "フォリニック",
    "ブリーズ",
    "マルベリー",
    "ワルファリン",
    "イースチナ",
    "クエルクス",
    "グラウコス",
    "シャマレ",
    "シーン",
    "ソラ",
    "ツキノギ",
    "プラマニクス",
    "メイヤー",
    "九色鹿",
    "Frost",
    "ウユウ",
    "エフイーター",
    "エンフォーサー",
    "カゼマル",
    "カフカ",
    "キララ",
    "クリフハート",
    "スノーズント",
    "ベナ",
    "マンティコア",
    "レッド",
    "ロビン",
    "ワイフー"
  ],
  sixStar: [
    "サイラッハ",
    "サガ",
    "シージ",
    "バグパイプ",
    "フレイムテイル",
    "シルバーアッシュ",
    "スカジ",
    "スルト",
    "ソーンズ",
    "チェン",
    "パラス",
    "ブレイズ",
    "ヘラグ",
    "マウンテン",
    "耀騎士ニアール",
    "サリア",
    "ニェン",
    "ブレミシャイン",
    "ホシグマ",
    "マドロック",
    "ユーネクテス",
    "Ash",
    "W",
    "アルケット",
    "エクシア",
    "シュヴァルツ",
    "ファートゥース",
    "フィアメッタ",
    "ロサ",
    "ロスモンティス", //kawaii
    "遊龍チェン",
    "イフリータ",
    "エイヤフィヤトラ",
    "カーネリアン",
    "ケオベ",
    "ゴールデングロー",
    "シー",
    "パッセンジャー",
    "モスティマ",
    "ケルシー",
    "シャイニング",
    "ナイチンゲール",
    "アンジェリーナ",
    "スズラン",
    "ノーシス",
    "マゼラン",
    "リィン",
    "濁心スカジ",
    "ア",
    "ウィーディ",
    "グレイディーア",
    "ファントム",
    "ミヅキ",
    "リー"
  ]
}

const all = [...ops.oneStar, ...ops.twoStar, ...ops.threeStar, ...ops.fourStar, ...ops.fiveStar, ...ops.sixStar]

export const App = () => {
  const [result, setResult] = useState<string[]>([])
  const [inputs, setInputs] = useState([-1, -1, -1, -1, -1, -1])

  const handleClick = () => {
    let result: string[] = []
    setResult([])
    if (inputs.filter(it => it != -1).length == 0) {
      for (let i = 0; i < 12; i++) {
        const r = all[Math.floor(Math.random() * all.length)]
        if (!result.includes(r)) result.push(r)
        else i--
      }
    } else {
      for (let i = 0; i < inputs[0]; i++) {
        if (inputs[0] <= ops.oneStar.length) {
          const r = ops.oneStar[Math.floor(Math.random() * ops.oneStar.length)]
          if (!result.includes(r)) result.push(r)
          else i--
        }
      }
      for (let i = 0; i < inputs[1]; i++) {
        if (inputs[1] <= ops.twoStar.length) {
          const r = ops.twoStar[Math.floor(Math.random() * ops.twoStar.length)]
          if (!result.includes(r)) result.push(r)
          else i--
        }
      }
      for (let i = 0; i < inputs[2]; i++) {
        if (inputs[2] <= ops.threeStar.length) {
          const r = ops.threeStar[Math.floor(Math.random() * ops.threeStar.length)]
          if (!result.includes(r)) result.push(r)
          else i--
        }
      }
      for (let i = 0; i < inputs[3]; i++) {
        if (inputs[3] <= ops.fourStar.length) {
          const r = ops.fourStar[Math.floor(Math.random() * ops.fourStar.length)]
          if (!result.includes(r)) result.push(r)
          else i--
        }
      }
      for (let i = 0; i < inputs[4]; i++) {
        if (inputs[4] <= ops.fiveStar.length) {
          const r = ops.fiveStar[Math.floor(Math.random() * ops.fiveStar.length)]
          if (!result.includes(r)) result.push(r)
          else i--
        }
      }
      for (let i = 0; i < inputs[5]; i++) {
        if (inputs[5] <= ops.sixStar.length) {
          const r = ops.sixStar[Math.floor(Math.random() * ops.sixStar.length)]
          if (!result.includes(r)) result.push(r)
          else i--
        }
      }
    }
    setResult(result)
  }

  const handleChange = (value: String, index: number) => {
    let newInputs = [...inputs]
    if (value.match(/[1-9]?\d+/)) {
      newInputs[index] = Number(value)
    } else {
      newInputs[index] = -1
    }
    setInputs(newInputs)
  }

  return (
    <div className="app">
      <HStack margin={"2em"}>
        <Input placeholder="1" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { handleChange(e.target.value, 0) }} />
        <Input placeholder="2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { handleChange(e.target.value, 1) }} />
        <Input placeholder="3" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { handleChange(e.target.value, 2) }} />
        <Input placeholder="4" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { handleChange(e.target.value, 3) }} />
        <Input placeholder="5" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { handleChange(e.target.value, 4) }} />
        <Input placeholder="6" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { handleChange(e.target.value, 5) }} />
        <Button onClick={handleClick}>Roll!</Button>
      </HStack>
      <Box fontSize={"2em"} borderColor={"black"} borderWidth={2} height={"12em"} width={"22em"} margin="auto" marginTop={5}>
        {result.map(it => `${it}, `)}
      </Box>
    </div>
  )
}