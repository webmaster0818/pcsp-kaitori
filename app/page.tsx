import type { Metadata } from "next";
import Link from "next/link";
import { categories, companies, kaitoriCompanies, platformCompanies } from "@/lib/companies";
import { CHECKED_LABEL, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE_NAME}｜${SITE_TAGLINE}`,
  description:
    "iPhone・Android・Mac・Windows PC・タブレットの買取サービスを公式サイトで一次確認し、送料・返送料・入金・データ消去の扱い・古物商許可を確認日つきで比較。売る前のデータ消去手順やアクティベーションロック解除も解説する、中立のPC・スマホ買取ナビです。",
  alternates: { canonical: "/" },
};

const catNumbers = ["01", "02", "03", "04", "05"];

const guides = [
  {
    href: "/guide/data-shokyo/",
    label: "売る前のデータ消去 完全手順",
    desc: "iPhone・Android・Windows・Mac別。初期化だけでは足りない項目まで",
  },
  {
    href: "/guide/activation-lock/",
    label: "アクティベーションロックの解除",
    desc: "「探す」の解除と、送った後でも遠隔で外す方法",
  },
  {
    href: "/guide/honnin-kakunin/",
    label: "買取の本人確認はなぜ必要か",
    desc: "古物営業法の仕組みと、宅配買取での確認方法",
  },
  {
    href: "/guide/shitadori-hikaku/",
    label: "下取りと買取はどっちが得？",
    desc: "キャリア下取り・Apple Trade In・買取店の違い",
  },
  {
    href: "/guide/takuhai-nagare/",
    label: "宅配買取の流れと梱包方法",
    desc: "申込から入金まで。トラブル時の相談先も",
  },
  {
    href: "/situation/kowareta/",
    label: "壊れた・起動しない端末を売る",
    desc: "画面割れ・水没・起動不可の売り方と処分先",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="relative overflow-hidden bg-steel-900 text-chalk">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 items-center justify-center border-l border-steel-700 md:flex"
        >
          <p className="tate font-display text-sm text-steel-400">
            一次確認・確認日明記・口コミ非創作
          </p>
        </div>
        <div className="mx-auto max-w-site px-4 py-20 md:py-28">
          <p className="kicker mb-6 !text-vermilion">PC &amp; SMARTPHONE SELLING GUIDE</p>
          <h1 className="font-display text-3xl leading-relaxed md:text-5xl md:leading-relaxed">
            売る前の5分で読む、
            <br />
            <span className="text-vermilion">中立</span>のPC・スマホ買取ナビ。
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-loose text-steel-200 md:text-base">
            スマホやPCを売るとき、いちばん怖いのは「データ」と「送った後の条件」です。掲載サービスの送料・返送料・入金・データ消去の扱いは、すべて各社公式サイトを一次確認し、確認日（{CHECKED_LABEL}）を明記。確認できなかった項目は「公式では確認できず」と正直に書きます。
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/guide/data-shokyo/" className="btn-primary">
              売る前のデータ消去手順を見る
            </Link>
            <Link
              href="/compare/"
              className="btn-ghost !border-steel-500 !bg-transparent !text-chalk hover:!border-vermilion hover:!text-vermilion"
            >
              掲載サービスの比較表
            </Link>
          </div>
        </div>
      </section>

      {/* カテゴリ導線 */}
      <section className="mx-auto max-w-site px-4 py-16 md:py-24">
        <p className="kicker mb-3">CATEGORY</p>
        <h2 className="section-title mb-4">端末の種類別に、売り方から考える</h2>
        <p className="mb-10 max-w-2xl text-sm leading-loose text-steel-600">
          iPhoneとWindows PCでは、売る前の準備も、対応するサービスも異なります。まず端末の種類を選び、そのカテゴリの判断ポイントと一次確認済みの条件を確認してください。
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Link
              key={cat.slug}
              href={cat.path}
              className="group relative border border-chalk-line bg-chalk-card p-6 transition-colors hover:border-vermilion"
            >
              <span className="font-display text-sm tracking-widest2 text-vermilion">
                {catNumbers[i]}
              </span>
              <h3 className="mt-3 font-display text-xl text-steel-900 group-hover:text-vermilion">
                {cat.name}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-steel-600">
                {cat.lead}
              </p>
              <p className="mt-4 text-xs text-steel-500">
                掲載:{" "}
                {cat.companySlugs.length > 0
                  ? cat.companySlugs
                      .map((s) => companies.find((c) => c.slug === s)?.name)
                      .filter(Boolean)
                      .join("・")
                  : "買取業者は該当なし（一括査定・価格比較サービスを掲載）"}
              </p>
              <span
                aria-hidden="true"
                className="absolute bottom-4 right-4 font-display text-vermilion opacity-0 transition-opacity group-hover:opacity-100"
              >
                →
              </span>
            </Link>
          ))}
          <div className="flex flex-col justify-center border border-dashed border-steel-300 bg-chalk p-6">
            <h3 className="font-display text-xl text-steel-900">
              どう売ればいいか分からない？
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-steel-600">
              端末の種類・状態・売り方・個人か法人かの4問に答えると、ルールベースで合うページとサービスを提示します。判定ロジックは全て開示しています。
            </p>
            <Link href="/shindan/" className="btn-primary mt-5 text-sm">
              売り方診断へ
            </Link>
          </div>
        </div>
      </section>

      {/* ガイド導線 */}
      <section className="bg-chalk-warm">
        <div className="mx-auto max-w-site px-4 py-16 md:py-20">
          <p className="kicker mb-3">BEFORE YOU SELL</p>
          <h2 className="section-title mb-4">売る前に必ず読むガイド</h2>
          <p className="mb-8 max-w-2xl text-sm leading-loose text-steel-600">
            買取価格を比べる前に、データ消去とアクティベーションロックの解除を済ませることが、どのサービスを使う場合でも共通の前提です。手順と注意点を一般知識として整理しました。
          </p>
          <ul className="grid gap-3 text-sm md:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <li key={g.href}>
                <Link href={g.href} className="block h-full border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                  <span className="font-display text-steel-900">{g.label}</span>
                  <span className="mt-1 block text-xs text-steel-500">{g.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 比較表導線 */}
      <section className="bg-steel-800 text-chalk">
        <div className="mx-auto max-w-site px-4 py-16 md:py-20">
          <div className="md:flex md:items-end md:justify-between md:gap-8">
            <div>
              <p className="kicker mb-3">COMPARISON</p>
              <h2 className="font-display text-2xl leading-snug md:text-3xl">
                掲載サービスを、同じ物差しで並べる
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-loose text-steel-200">
                買取サービス{kaitoriCompanies.length}社と一括査定・価格比較型{platformCompanies.length}サービス。送料・梱包キット・返送料・査定日数・入金タイミング・キャンセル規定・データ消去の扱い・故障品の受付・運営会社と古物商許可番号を統一フォーマットで比較しています（{CHECKED_LABEL}公式確認）。
              </p>
            </div>
            <Link href="/compare/" className="btn-primary mt-8 shrink-0 md:mt-0">
              比較表を見る
            </Link>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-px border border-steel-700 bg-steel-700 sm:grid-cols-3">
            {companies.map((c) => (
              <li key={c.slug} className="bg-steel-800">
                <Link
                  href={`/kaitori/${c.slug}/`}
                  className="block px-4 py-4 text-center font-display text-sm tracking-wider text-chalk transition-colors hover:bg-steel-700 hover:text-vermilion"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 編集方針 */}
      <section className="mx-auto max-w-site px-4 py-16 md:py-24">
        <p className="kicker mb-3">POLICY</p>
        <h2 className="section-title mb-8">このサイトの約束</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "公式サイトの一次確認",
              d: `掲載する条件はすべて各社公式サイトで確認し、確認日を明記します。今回の確認日は${CHECKED_LABEL}です。`,
            },
            {
              t: "確認できないことは書かない",
              d: "公式で確認できなかった項目は「公式では確認できず」と表示します。架空の買取金額・実績・口コミは一切掲載しません。",
            },
            {
              t: "価格は変動する前提で扱う",
              d: "中古端末の買取価格は日々変わります。当サイトは価格の断定をせず、各社公式の最新表示を確認する導線と、条件の事実比較を提供します。",
            },
          ].map((x) => (
            <div key={x.t} className="border-t-2 border-vermilion pt-4">
              <h3 className="font-display text-lg text-steel-900">{x.t}</h3>
              <p className="mt-3 text-[13px] leading-loose text-steel-600">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm">
          <Link href="/content-policy/" className="text-vermilion underline underline-offset-4 hover:text-vermilion-deep">
            コンテンツ制作ポリシーの全文を読む
          </Link>
        </p>
      </section>
    </>
  );
}
