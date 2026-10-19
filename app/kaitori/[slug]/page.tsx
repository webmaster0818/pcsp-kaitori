import type { Metadata } from "next";
import Link from "next/link";
import ServiceNotice from "@/components/ServiceNotice";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import {
  categoriesOf,
  companies,
  companyFaq,
  ctaFor,
  fmt,
  getCompany,
  serviceTypeOf,
} from "@/lib/companies";
import { jaDate } from "@/lib/site";

export function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

/** description を160字以内に収める（長い場合は補足文→運営会社名の順で省く） */
function fitDesc(base: string, short: string): string {
  const note = "確認できなかった項目は「公式では確認できず」と記載しています。";
  for (const s of [base + note, base + "未確認の項目は「公式では確認できず」と記載しています。", base, short]) {
    if (s.length <= 160) return s;
  }
  return short;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCompany(slug);
  const isPlatform = c.kind === "platform";
  if (c.seo) {
    return {
      title: c.seo.title,
      description: c.seo.description,
      alternates: { canonical: `/kaitori/${c.slug}/` },
    };
  }
  return {
    title: isPlatform
      ? `${c.name}の仕組みと利用条件｜利用料・流れ・運営会社【公式確認】`
      : `${c.name}${/買取(サービス)?(（.*）)?$/.test(c.name) ? "の利用条件" : "の買取条件"}｜送料・返送料・入金・データ消去【公式確認】`,
    description: fitDesc(
      isPlatform
        ? `${c.name}（運営: ${c.operator.name}）の仕組み・対象・利用料・流れを公式サイトで一次確認しています（${jaDate(c.confirmed_date)}確認）。`
        : `${c.name}（運営: ${c.operator.name}）の送料・梱包キット・返送料・査定日数・入金タイミング・キャンセル規定・データ消去・故障品の受付を公式サイトで一次確認しています（${jaDate(c.confirmed_date)}確認）。`,
      isPlatform
        ? `${c.name}の仕組み・対象・利用料・流れを公式サイトで一次確認しています（${jaDate(c.confirmed_date)}確認）。運営は${c.operator.name}です。`
        : `${c.name}の送料・返送料・査定日数・入金タイミング・キャンセル規定・データ消去・故障品の受付を公式サイトで一次確認しています（${jaDate(c.confirmed_date)}確認）。`,
    ),
    alternates: { canonical: `/kaitori/${c.slug}/` },
  };
}

export default async function KaitoriPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCompany(slug);
  const cta = ctaFor(c);
  const cats = categoriesOf(c);
  const isPlatform = c.kind === "platform";
  const faqs = isPlatform
    ? [
        {
          q: `${c.name}の利用に費用はかかりますか？`,
          a: fmt(c.hiyou.satei) === "公式では確認できず"
            ? `利用料は、公式サイトでは確認できませんでした（${jaDate(c.confirmed_date)}時点）。ご利用前に、公式サイトにて最新情報をご確認ください。`
            : `公式サイトの記載にもとづく利用料は「${c.hiyou.satei}」です（${jaDate(c.confirmed_date)}確認）。`,
        },
        {
          q: `${c.name}は端末を直接買い取るサービスですか？`,
          a: `端末を直接買い取るサービスではありません。${c.name}のサービス形態は「${serviceTypeOf(c)}」です。実際の買取契約は、紹介先や比較先の各買取店との間で行うのが一般的です。買取条件は各店で異なるため、契約前に各店の規定をご確認ください。`,
        },
        {
          q: `${c.name}で扱える品目は何ですか？`,
          a: fmt(c.target) === "公式では確認できず"
            ? `対象品目は、公式サイトでは確認できませんでした（${jaDate(c.confirmed_date)}時点）。ご利用前に、公式サイトにて最新情報をご確認ください。`
            : `公式サイトの記載にもとづく対象品目は「${c.target}」です（${jaDate(c.confirmed_date)}確認）。`,
        },
      ]
    : companyFaq(c);
  if (c.extra_faq) faqs.unshift(...c.extra_faq);

  const quickRows: { label: string; value: string }[] = isPlatform
    ? [
        { label: "サービス形態", value: serviceTypeOf(c) },
        { label: "対象", value: fmt(c.target) },
        { label: "利用料", value: fmt(c.hiyou.satei) },
        { label: "流れ", value: fmt(c.methods) },
        { label: "対応エリア", value: fmt(c.area) },
        { label: "本人確認", value: fmt(c.honnin) },
      ]
    : [
        { label: "買取方法", value: fmt(c.methods) },
        { label: "対象", value: fmt(c.target) },
        { label: "査定料", value: fmt(c.hiyou.satei) },
        { label: "送料", value: fmt(c.hiyou.souryou) },
        { label: "梱包キット", value: fmt(c.hiyou.kit) },
        { label: "返送料", value: fmt(c.hiyou.hensou) },
        { label: "査定日数", value: fmt(c.satei_days) },
        { label: "入金", value: fmt(c.nyukin) },
        { label: "キャンセル", value: fmt(c.cancel) },
        { label: "本人確認", value: fmt(c.honnin) },
        { label: "データ消去", value: fmt(c.data_erase) },
        { label: "故障品", value: fmt(c.broken) },
        { label: "法人対応", value: fmt(c.houjin) },
      ];

  const h1 = c.seo?.h1 ?? (isPlatform
    ? `${c.name}の仕組みと利用条件｜利用料・流れ・運営会社【公式確認】`
    : `${c.name}${/買取(サービス)?(（.*）)?$/.test(c.name) ? "の利用条件" : "の買取条件"}｜送料・返送料・入金・データ消去【公式確認】`);

  return (
    <>
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "比較表", path: "/compare/" },
          { name: c.name, path: `/kaitori/${c.slug}/` },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">{isPlatform ? "SERVICE FACT SHEET" : "COMPANY FACT SHEET"}</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          {h1}
        </h1>
        <ServiceNotice company={c} variant="full" />
        {c.lead && (
          <section className="mt-6 max-w-3xl border-2 border-vermilion bg-chalk-warm p-5 md:p-6">
            <h2 className="font-display text-base text-steel-900 md:text-lg">{c.lead.heading}</h2>
            <p className="mt-3 text-sm leading-loose text-steel-800">{c.lead.answer}</p>
            {c.lead.points && c.lead.points.length > 0 && (
              <ul className="mt-4 space-y-2">
                {c.lead.points.map((p) => (
                  <li key={p} className="flex gap-2 text-[13px] leading-loose text-steel-800">
                    <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                    {p}
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-4 text-xs leading-relaxed text-steel-500">
              出典：
              {c.lead.sources.map((src, i) => (
                <span key={src.url}>
                  {i > 0 && "／"}
                  <a href={src.url} rel="nofollow noopener" target="_blank" className="underline underline-offset-4 hover:text-vermilion">
                    {src.label}
                  </a>
                </span>
              ))}
              （確認日：{jaDate(c.lead.checked)}）
            </p>
          </section>
        )}
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          {c.name}のサービス条件を、公式サイトの記載にもとづき一次確認しています（確認日: {jaDate(c.confirmed_date)}{c.seo?.modified ? `、最終更新: ${jaDate(c.seo.modified)}` : ""}）。
          サービス形態: {serviceTypeOf(c)}。対象: {fmt(c.target)}。対応エリア: {fmt(c.area)}。買取価格は日々変動するため本ページには掲載せず、条件のみを整理しています。
        </p>

        {/* 実務即答テーブル */}
        <section className="mt-10">
          <h2 className="section-title mb-5">主要な取引条件</h2>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {quickRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-32 md:w-40">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {c.note && (
            <p className="mt-3 text-xs leading-relaxed text-steel-500">
              補足: {c.note}
            </p>
          )}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={cta.href} rel={cta.rel} target="_blank" className="btn-primary">
              {c.name}の公式サイトを見る
            </a>
            <Link href="/compare/" className="btn-ghost">
              比較表で他社と比較する
            </Link>
          </div>
        </section>

        {/* 業者別の追加セクション（流れ・条件） */}
        {c.sections?.map((sec) => (
          <section key={sec.title} className="mt-14">
            <h2 className="section-title mb-5">{sec.title}</h2>
            {sec.intro && <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-700">{sec.intro}</p>}
            {sec.steps ? (
              <ol className="space-y-3">
                {sec.items.map((it, i) => (
                  <li key={it.t} className="flex gap-4 border border-chalk-line bg-chalk-card p-5">
                    <span aria-hidden="true" className="font-display text-lg leading-none text-vermilion">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-display text-base text-steel-900">{it.t}</h3>
                      <p className="mt-2 text-[13px] leading-loose text-steel-700">{it.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            ) : (
              <div className="grid gap-3 md:grid-cols-2">
                {sec.items.map((it) => (
                  <div key={it.t} className="border-l-2 border-vermilion bg-chalk-card px-4 py-4">
                    <h3 className="font-display text-[15px] text-steel-900">{it.t}</h3>
                    <p className="mt-2 text-[13px] leading-loose text-steel-700">{it.d}</p>
                  </div>
                ))}
              </div>
            )}
            {sec.links && sec.links.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-3">
                {sec.links.map((l) => (
                  <Link key={l.href} href={l.href} className="btn-ghost text-sm">{l.label}</Link>
                ))}
              </div>
            )}
            <p className="mt-4 text-xs leading-relaxed text-steel-500">出典：{sec.source}</p>
          </section>
        ))}

        {/* 特徴 */}
        <section className="mt-14">
          <h2 className="section-title mb-5">公式サイトが掲げる特徴</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {c.features.map((f) => (
              <li
                key={f}
                className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-relaxed text-steel-800"
              >
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-steel-500">
            ※ いずれも{c.name}公式サイトの記載にもとづきます（{jaDate(c.confirmed_date)}確認）。当サイト独自の評価ではありません。
          </p>
        </section>

        {/* 送る前の準備（買取業者のみ） */}
        {!isPlatform && (
          <section className="mt-14 border border-chalk-line bg-chalk-warm p-6">
            <h2 className="font-display text-lg text-steel-900">発送前にご自身で済ませておくこと</h2>
            <p className="mt-3 text-sm leading-loose text-steel-700">
              データ消去の取り扱いは上表のとおりですが、どの業者に発送する場合でも、バックアップ・サインアウト・初期化・「探す」の解除・SIMカードの取り出しは、ご自身で済ませておくのが基本です。手順は以下のガイドでご説明しています。
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link href="/guide/data-shokyo/" className="btn-ghost text-sm">売却前のデータ消去手順</Link>
              <Link href="/guide/activation-lock/" className="btn-ghost text-sm">アクティベーションロックと「探す」の解除</Link>
              <Link href="/guide/takuhai-nagare/" className="btn-ghost text-sm">宅配買取の流れと梱包方法</Link>
            </div>
          </section>
        )}

        {/* 運営会社 */}
        <section className="mt-14">
          <h2 className="section-title mb-5">運営会社情報</h2>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                <tr>
                  <th className="w-32 md:w-40">運営会社</th>
                  <td>{c.operator.name}</td>
                </tr>
                <tr>
                  <th>所在地</th>
                  <td>{c.operator.address}</td>
                </tr>
                <tr>
                  <th>古物商許可</th>
                  <td>{fmt(c.operator.kobutsu)}</td>
                </tr>
                {c.operator.extra?.map((e) => (
                  <tr key={e.label}>
                    <th>{e.label}</th>
                    <td>{e.value}</td>
                  </tr>
                ))}
                <tr>
                  <th>確認元</th>
                  <td>
                    <a
                      href={c.operator.source}
                      rel="nofollow noopener"
                      target="_blank"
                      className="text-vermilion underline underline-offset-4 hover:text-vermilion-deep"
                    >
                      {c.operator.source}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-5">{c.name}に関するよくある質問</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex gap-2 font-display text-base text-steel-900">
                  <span aria-hidden="true" className="text-vermilion">Q.</span>
                  {f.q}
                </h3>
                <p className="mt-3 text-sm leading-loose text-steel-700">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 情報の検証欄 */}
        <section className="mt-14 border border-steel-200 bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">掲載情報の確認方法について</h2>
          <ul className="mt-4 space-y-2 text-[13px] leading-loose text-steel-700">
            <li>・本ページの条件は、{c.name}公式サイト（{c.official_url}）および運営会社ページを{jaDate(c.confirmed_date)}に確認して作成しています。</li>
            <li>・公式サイトで確認できなかった項目は「公式では確認できず」と表示し、推測で補完していません。</li>
            <li>・口コミ・体験談の創作、架空の買取金額・実績の掲載は行いません。買取価格は変動するため、当サイトでは掲載しておりません。</li>
            <li>・条件は変更される場合があります。お申し込み前に、公式サイトおよび利用規約にて最新の内容をご確認ください。</li>
          </ul>
          <p className="mt-4 text-xs text-steel-500">
            詳細は<Link href="/content-policy/" className="text-vermilion underline underline-offset-4">コンテンツ制作ポリシー</Link>をご覧ください。
          </p>
        </section>

        {/* 導線 */}
        <section className="mt-14">
          <h2 className="section-title mb-5">関連ページ</h2>
          <ul className="grid gap-3 text-sm md:grid-cols-2">
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">掲載サービスの統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">同じ基準で条件を比較</span>
              </Link>
            </li>
            {isPlatform &&
              companies
                .filter((x) => x.kind === "platform" && x.slug !== c.slug)
                .map((x) => (
                  <li key={x.slug}>
                    <Link href={`/kaitori/${x.slug}/`} className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                      <span className="font-display text-steel-900">{x.name}</span>
                      <span className="mt-1 block text-xs text-steel-500">一括査定・価格比較サービスの仕組みと対象（公式確認）</span>
                    </Link>
                  </li>
                ))}
            {cats.map((cat) => (
              <li key={cat.slug}>
                <Link href={cat.path} className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                  <span className="font-display text-steel-900">{cat.name}</span>
                  <span className="mt-1 block text-xs text-steel-500">カテゴリ別の判断ポイントとサービス比較</span>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/guide/data-shokyo/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売却前のデータ消去手順</span>
                <span className="mt-1 block text-xs text-steel-500">iPhone・Android・Windows・Mac別</span>
              </Link>
            </li>
            <li>
              <Link href="/shindan/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売り方診断（4問）</span>
                <span className="mt-1 block text-xs text-steel-500">端末の種類と状態から、判定ルールにもとづき提示</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
