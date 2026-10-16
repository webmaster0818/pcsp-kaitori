import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { categories, companies, kaitoriCompanies, platformCompanies } from "@/lib/companies";
import { CHECKED_RANGE_LABEL, SITE_NAME, SITE_TAGLINE, SITE_URL, OPERATOR } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE_NAME}｜${SITE_TAGLINE}`,
  description:
    "iPhone・Android・Mac・Windows PC・タブレットの買取サービスを公式サイトで一次確認し、送料・返送料・入金・データ消去の扱い・古物商許可を確認日を明記して比較しています。売却前のデータ消去手順やアクティベーションロックの解除方法もご説明します。",
  alternates: { canonical: "/" },
};

const catNumbers = ["01", "02", "03", "04", "05"];

const guides = [
  {
    href: "/guide/data-shokyo/",
    label: "売却前のデータ消去手順",
    desc: "iPhone・Android・Windows・Mac別の手順と、初期化だけでは消えない項目",
  },
  {
    href: "/guide/activation-lock/",
    label: "アクティベーションロックと「探す」の解除",
    desc: "「探す」の解除方法と、発送後に遠隔で解除する方法",
  },
  {
    href: "/guide/honnin-kakunin/",
    label: "買取で本人確認が必要な理由",
    desc: "古物営業法の仕組みと、宅配買取での本人確認方法",
  },
  {
    href: "/guide/shitadori-hikaku/",
    label: "スマホの下取りと買取の違い",
    desc: "キャリア下取り・Apple Trade In・買取店の違い",
  },
  {
    href: "/guide/takuhai-nagare/",
    label: "宅配買取の流れと梱包方法",
    desc: "申込から入金までの流れと、トラブル時の相談先",
  },
  {
    href: "/situation/kowareta/",
    label: "壊れた・起動しない端末の売り方",
    desc: "画面割れ・水没・起動不可の売り方と処分先",
  },
];

const homeLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      inLanguage: "ja",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: OPERATOR.name,
      address: OPERATOR.address,
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeLd} />
      {/* ヒーロー */}
      <section className="relative overflow-hidden bg-steel-900 text-chalk">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 items-center justify-center border-l border-steel-700 md:flex"
        >
          <p className="tate font-display text-sm text-steel-400">
            公式一次確認・確認日明記・口コミ創作なし
          </p>
        </div>
        <div className="mx-auto max-w-site px-4 py-20 md:py-28">
          <p className="kicker mb-6 !text-vermilion">PC &amp; SMARTPHONE SELLING GUIDE</p>
          <h1 className="font-display text-3xl leading-relaxed md:text-5xl md:leading-relaxed">
            公式情報にもとづく
            <br />
            <span className="text-vermilion">中立</span>のPC・スマホ買取比較
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-loose text-steel-200 md:text-base">
            スマホやPCの売却にあたっては、データの取り扱いと発送後の条件を事前に確認することが重要です。掲載サービスの送料・返送料・入金・データ消去の扱いは、すべて各社公式サイトで一次確認し、確認日（{CHECKED_RANGE_LABEL}）を各社ごとに明記しています。確認できなかった項目は「公式では確認できず」と記載します。
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/guide/data-shokyo/" className="btn-primary">
              売却前のデータ消去手順を見る
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
        <h2 className="section-title mb-4">端末の種類別の売り方</h2>
        <p className="mb-10 max-w-2xl text-sm leading-loose text-steel-600">
          iPhoneとWindows PCでは、売却前の準備も対応するサービスも異なります。端末の種類を選択のうえ、各カテゴリの判断ポイントと、公式サイトで一次確認した条件をご確認ください。
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
                  : "該当する買取業者なし（一括査定・価格比較サービスを掲載）"}
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
              売り方の判断に迷う場合
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-steel-600">
              端末の種類・状態・売り方・個人か法人かの4問に答えると、あらかじめ定めた判定ルールにもとづき、適したページとサービスを提示します。判定ロジックはすべて開示しています。
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
          <h2 className="section-title mb-4">売却前に確認したいガイド</h2>
          <p className="mb-8 max-w-2xl text-sm leading-loose text-steel-600">
            どのサービスを利用する場合も、買取価格を比較する前にデータ消去とアクティベーションロックの解除を済ませておくことが前提となります。手順と注意点を、一般的な知識として整理しています。
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
                掲載サービスの統一基準による比較
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-loose text-steel-200">
                買取サービス{kaitoriCompanies.length}社と一括査定・価格比較型{platformCompanies.length}サービスについて、送料・梱包キット・返送料・査定日数・入金タイミング・キャンセル規定・データ消去の扱い・故障品の受付・運営会社と古物商許可番号を統一フォーマットで比較しています（{CHECKED_RANGE_LABEL}公式確認）。
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
        <h2 className="section-title mb-8">当サイトの編集方針</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "公式情報にもとづく正確な情報提供に努めます",
              d: `掲載する条件はすべて各社公式サイトで確認し、確認日を明記します。現在の掲載社は${CHECKED_RANGE_LABEL}に確認しています。`,
            },
            {
              t: "未確認の情報は掲載しません",
              d: "公式で確認できなかった項目は「公式では確認できず」と表示します。架空の買取金額・実績・口コミは一切掲載しません。",
            },
            {
              t: "独自の評価付けは行いません",
              d: "中古端末の買取価格は日々変動します。当サイトでは価格の断定や独自の順位付けを行わず、各社公式サイトの最新表示へのご案内と、条件の事実比較を提供します。",
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
            コンテンツ制作ポリシーの全文
          </Link>
        </p>
      </section>
    </>
  );
}
