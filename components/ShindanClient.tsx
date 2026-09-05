"use client";

import { useState } from "react";
import Link from "next/link";

type Q1 = "iphone" | "android" | "mac" | "pc" | "tablet";
type Q2 = "ugoku" | "kowareta" | "kidou_shinai";
type Q3 = "takuhai" | "tenpo" | "matomete";
type Q4 = "kojin" | "houjin";

interface ResultCompany {
  name: string;
  slug: string;
}

interface Result {
  rule: string;
  title: string;
  reason: string;
  hub: { path: string; label: string } | null;
  companies: ResultCompany[];
  guide: { path: string; label: string } | null;
}

const q1Options: { value: Q1; label: string }[] = [
  { value: "iphone", label: "iPhone" },
  { value: "android", label: "Androidスマホ" },
  { value: "mac", label: "Mac・MacBook" },
  { value: "pc", label: "Windows PC・ノートPC" },
  { value: "tablet", label: "iPad・タブレット" },
];
const q2Options: { value: Q2; label: string }[] = [
  { value: "ugoku", label: "問題なく動く" },
  { value: "kowareta", label: "画面割れ・バッテリー劣化など故障あり（動く）" },
  { value: "kidou_shinai", label: "起動しない・電源が入らない" },
];
const q3Options: { value: Q3; label: string }[] = [
  { value: "takuhai", label: "宅配で送って売りたい" },
  { value: "tenpo", label: "店頭に持ち込みたい" },
  { value: "matomete", label: "他の不用品もまとめて手放したい" },
];
const q4Options: { value: Q4; label: string }[] = [
  { value: "kojin", label: "個人の端末" },
  { value: "houjin", label: "法人・会社の端末（複数台）" },
];

const hubOf: Record<Q1, { path: string; label: string }> = {
  iphone: { path: "/iphone/", label: "iPhoneの買取ハブ" },
  android: { path: "/android/", label: "Androidスマホの買取ハブ" },
  mac: { path: "/mac/", label: "Mac・MacBookの買取ハブ" },
  pc: { path: "/pc/", label: "Windows PC・ノートPCの買取ハブ" },
  tablet: { path: "/tablet/", label: "iPad・タブレットの買取ハブ" },
};

const companiesOf: Record<Q1, ResultCompany[]> = {
  iphone: [
    { name: "古本市場（ふるいち）スマホ買取", slug: "furuichi" },
    { name: "ネットオフ スマホ買取", slug: "netoff" },
    { name: "Mac買取ネット", slug: "mac-kaitori-net" },
  ],
  android: [
    { name: "古本市場（ふるいち）スマホ買取", slug: "furuichi" },
    { name: "ネットオフ スマホ買取", slug: "netoff" },
  ],
  mac: [{ name: "Mac買取ネット", slug: "mac-kaitori-net" }],
  pc: [],
  tablet: [
    { name: "古本市場（ふるいち）スマホ買取", slug: "furuichi" },
    { name: "ネットオフ スマホ買取", slug: "netoff" },
    { name: "Mac買取ネット", slug: "mac-kaitori-net" },
  ],
};

/** 判定ロジック（全開示・このままの順で評価） */
function judge(q1: Q1, q2: Q2, q3: Q3, q4: Q4): Result {
  if (q4 === "houjin") {
    return {
      rule: "ルール1",
      title: "法人向けの処分・買取の確認点から始める",
      reason:
        "法人・会社の端末は、データ消去証明・台数対応・資産管理の扱いが個人と異なります。まず法人向けの確認点を整理したページを提示します。掲載サービスの法人対応の有無は各社ページの「法人対応」欄をご確認ください。",
      hub: hubOf[q1],
      companies: companiesOf[q1],
      guide: { path: "/situation/houjin/", label: "法人のPC・スマホをまとめて処分するには" },
    };
  }
  if (q2 === "kidou_shinai") {
    return {
      rule: "ルール2",
      title: "起動しない端末の売り方・処分先を先に確認",
      reason:
        "起動しない端末は、データを自分で消去できないという固有のリスクがあります。遠隔でのアカウント解除と、故障品の受付条件を明記しているサービスの確認が先です。",
      hub: hubOf[q1],
      companies: companiesOf[q1],
      guide: { path: "/situation/kowareta/", label: "壊れた・起動しない端末を売るには" },
    };
  }
  if (q3 === "matomete") {
    return {
      rule: "ルール3",
      title: "一括査定・価格比較型のサービスも候補に",
      reason:
        "端末以外の不用品もまとめて手放したい場合は、複数の買取店にまとめて依頼できる一括査定型や、価格比較型のサービスという選択肢があります。端末単体の条件は該当カテゴリのハブでも確認できます。",
      hub: hubOf[q1],
      companies: [
        { name: "おいくら", slug: "oikura" },
        { name: "ヒカカク", slug: "hikakaku" },
        { name: "みんなの買取", slug: "minna-no-kaitori" },
      ],
      guide: null,
    };
  }
  if (q3 === "tenpo") {
    return {
      rule: "ルール4",
      title: "店頭買取に対応するサービスを条件表で確認",
      reason:
        "店頭持ち込みを希望の場合は、各サービスの「買取方法」欄で店頭対応の有無を確認してください。掲載サービスは宅配買取を中心に一次確認しているため、店頭の可否は各社ページの記載を必ず確認する必要があります。",
      hub: hubOf[q1],
      companies: companiesOf[q1],
      guide: { path: "/compare/", label: "掲載サービスの統一比較表" },
    };
  }
  // q3 === "takuhai"
  if (q2 === "kowareta") {
    return {
      rule: "ルール5",
      title: "故障品の受付条件を明記したサービスで宅配買取",
      reason:
        "画面割れやバッテリー劣化のある端末は、故障品の受付可否と減額の考え方がサービスにより異なります。各社ページの「故障品」欄と、査定後にキャンセルした場合の返送料を必ず確認してから送りましょう。",
      hub: hubOf[q1],
      companies: companiesOf[q1],
      guide: { path: "/situation/kowareta/", label: "壊れた端末を売るときの確認点" },
    };
  }
  return {
    rule: "ルール6",
    title: "宅配買取の流れを確認して、該当カテゴリのサービスへ",
    reason:
      "動く端末を宅配で売る、もっとも一般的なパターンです。送る前のデータ消去と「探す」の解除を済ませたうえで、送料・返送料・入金タイミングを各社ページで比較してください。",
    hub: hubOf[q1],
    companies: companiesOf[q1],
    guide: { path: "/guide/takuhai-nagare/", label: "宅配買取の流れと梱包方法" },
  };
}

function Fieldset<T extends string>({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: { value: T; label: string }[];
  value: T | null;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset className="border border-chalk-line bg-chalk-card p-5">
      <legend className="bg-steel-800 px-3 py-1 font-display text-sm tracking-wider text-chalk">
        {legend}
      </legend>
      <div className="mt-2 grid gap-2 sm:grid-cols-2">
        {options.map((o) => (
          <label
            key={o.value}
            className={`flex cursor-pointer items-center gap-3 border px-4 py-3 text-sm transition-colors ${
              value === o.value
                ? "border-vermilion bg-vermilion-faint text-steel-900"
                : "border-chalk-line bg-chalk hover:border-steel-300"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              className="accent-[#c94f2f]"
            />
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function ShindanClient() {
  const [q1, setQ1] = useState<Q1 | null>(null);
  const [q2, setQ2] = useState<Q2 | null>(null);
  const [q3, setQ3] = useState<Q3 | null>(null);
  const [q4, setQ4] = useState<Q4 | null>(null);

  const result = q1 && q2 && q3 && q4 ? judge(q1, q2, q3, q4) : null;
  const done = result !== null;

  return (
    <div className="space-y-6">
      <Fieldset legend="Q1. 売りたい端末の種類は？" name="q1" options={q1Options} value={q1} onChange={setQ1} />
      <Fieldset legend="Q2. 端末の状態は？" name="q2" options={q2Options} value={q2} onChange={setQ2} />
      <Fieldset legend="Q3. どう売りたい？" name="q3" options={q3Options} value={q3} onChange={setQ3} />
      <Fieldset legend="Q4. 個人と法人、どちらの端末？" name="q4" options={q4Options} value={q4} onChange={setQ4} />

      {!done && (
        <p className="text-sm text-steel-500">
          4問すべてに回答すると、判定結果がここに表示されます。
        </p>
      )}

      {result && (
        <section
          aria-live="polite"
          className="border-2 border-vermilion bg-chalk-card p-6"
        >
          <p className="kicker mb-2">RESULT（適用: {result.rule}）</p>
          <h2 className="font-display text-xl text-steel-900 md:text-2xl">
            {result.title}
          </h2>
          <p className="mt-4 text-sm leading-loose text-steel-700">{result.reason}</p>
          {result.companies.length === 0 && (
            <p className="mt-3 border border-dashed border-steel-300 bg-chalk p-3 text-sm leading-loose text-steel-700">
              該当なし: 確認日時点で、当サイト掲載の買取サービスにWindows PCを対象と明記している社はありません。PCカテゴリを持つ一括査定・価格比較型サービス（おいくら・ヒカカク）を候補としてご検討ください。
            </p>
          )}
          <p className="mt-3 text-sm leading-loose text-steel-700">
            どのパターンでも、送る前に「データ消去」と「探す（アクティベーションロック）の解除」を済ませることが共通の前提です。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {result.guide && (
              <Link href={result.guide.path} className="btn-primary text-sm">
                {result.guide.label}
              </Link>
            )}
            {result.hub && (
              <Link href={result.hub.path} className="btn-ghost text-sm">
                {result.hub.label}を見る
              </Link>
            )}
            {result.companies.map((c) => (
              <Link
                key={c.slug}
                href={`/kaitori/${c.slug}/`}
                className="btn-ghost text-sm"
              >
                {c.name}の一次確認
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 判定ロジック全開示 */}
      <section className="border border-chalk-line bg-chalk-warm p-6">
        <h2 className="font-display text-lg text-steel-900">
          判定ロジック（全開示）
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-steel-600">
          この診断は以下のルールを上から順に評価するだけの、シンプルなルールベースです。スコアリングや隠れた重み付けはありません。Q1（端末の種類）は、提示するカテゴリハブと掲載サービスの絞り込みにのみ使います。
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-[13px] leading-relaxed text-steel-700">
          <li>Q4が「法人」→ 法人のまとめて処分ページを提示（＋Q1のカテゴリハブ）</li>
          <li>Q2が「起動しない」→ 壊れた・起動しない端末のページを提示（＋Q1のカテゴリハブ）</li>
          <li>Q3が「まとめて手放したい」→ 一括査定・価格比較型サービス（おいくら・ヒカカク・みんなの買取）を提示</li>
          <li>Q3が「店頭に持ち込みたい」→ 比較表で買取方法欄を確認するよう案内</li>
          <li>Q3が「宅配」かつ Q2が「故障あり」→ 壊れた端末の確認点ページ＋Q1のカテゴリの掲載サービス</li>
          <li>上記以外（動く端末を宅配で売る）→ 宅配買取の流れページ＋Q1のカテゴリの掲載サービス</li>
        </ol>
      </section>
    </div>
  );
}
