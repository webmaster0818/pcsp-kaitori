import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { getCompany } from "@/lib/companies";
import ServiceNotice from "@/components/ServiceNotice";
import { IphoneModel, otherIphoneModels } from "@/lib/iphone-models";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";

export const IPHONE_MODEL_PUBLISHED = "2026-09-12";
export const IPHONE_MODEL_PUBLISHED_LABEL = "2026年9月12日";

/** ラインナップの確認元（公式サイトの機種一覧） */
const LINEUP_SOURCES = [
  { slug: "geo-kaitori", url: "https://buymobile.geo-online.co.jp/iPhone/" },
  { slug: "netoff", url: "https://www.netoff.co.jp/mobilebuy/" },
  { slug: "nicosuma-kaitori", url: "https://www.nicosuma.com/sell" },
  { slug: "daikoku-mobile", url: "https://kaitori.e-daikoku.com/mobile/" },
];

/** 売る前の準備（掲載社の公式記載に基づく共通手順） */
const PREP_STEPS: { t: string; d: string }[] = [
  {
    t: "バックアップの取得",
    d: "初期化すると端末内のデータは戻せません。ゲオの買取の案内でも「初期化を行うと、iPhone/iPad内のデータは全て消えてしまいます。必ず事前にバックアップを取ってください」と記載されています。写真・連絡先・アプリのログイン情報など、新しい端末に引き継ぐデータが揃っているかを、初期化の前にご確認ください。",
  },
  {
    t: "決済アプリ・交通系ICの事前処理",
    d: "ふるいち（古本市場）の事前準備ページでは「おサイフケータイ・楽天Edy・モバイルSuicaなどのICアプリはすべてデータ移行・削除した上でお送りください」「残額がある状態でお送りいただいた場合、残額分の金額・データについては当社では保障いたしかねます」と記載されています。残高の移行は初期化後には手続きが難しくなることがあるため、必ず事前に済ませてください。",
  },
  {
    t: "iCloudからのサインアウトと「探す」の解除",
    d: "ふるいちは「iCloudがログイン状態でiPhoneを探す機能がオン（アクティベーションロック有効）の端末は買取不可となります」と明記しています。にこスマ買取では、アクティベーションロックがかかっていた場合はCグレード（機能不良品）での買取か、キャンセル（返送）を選択する扱いとなります。ゲオの買取も、アクティベーションロック中の端末を買取不可の対象に挙げています。",
  },
  {
    t: "端末の初期化",
    d: "携帯市場は「端末内のデータは予め初期化していただいてから発送してください」と案内しています。ネットオフは「初期化されていないもの」、ブックオフの宅配買取は「データやアプリの消去など初期化がされていないもの」、リコマース宅配買取サービスは「初期化されていない商品」を、それぞれ受け付けない・買取できないものとして挙げています。初期化は、発送する側の前提条件となります。",
  },
  {
    t: "SIMカードの取り出し・充電・暗証番号の初期化",
    d: "ふるいちは「SIMカード・SDカードを抜く」「カード類の残存があった場合はお客様ご住所へご返却いたします。なお、その際の送料につきましてはお客様ご負担となります」と記載しています。動作確認のため、ゲオの買取は「バッテリーが十分に充電された状態で発送」を、ゲオ・ふるいち・ブックオフは暗証番号を各キャリアの初期設定番号に戻すことを、それぞれ案内しています。",
  },
];

/** 状態のどこを見られるか（掲載社の公式記載） */
const CONDITION_ROWS: { label: string; value: string }[] = [
  {
    label: "画面（ディスプレイ）",
    value:
      "携帯市場は査定項目に「電源起動/表示確認（メイン・サブディスプレイ）」を挙げ、最低買取金額の保証外となる状態例として「液晶ひび割れ」「液晶やけ(変色)」「液晶浮き」「液晶内部剥がれ」などを掲載しています。にこスマ買取は「本体が割れている」をBグレード（本体割れ品）、「ディスプレイが動作しない・変色、光漏れしている」をCグレード（機能不良品）の基準にしています。ゲオの買取は「画面の傷・欠け、画面焼け・液漏れ」のあるiPhoneも買取対象と記載しています。",
  },
  {
    label: "バッテリーの状態",
    value:
      "ゲオの買取は「電池パックの膨張」や「深刻なダメージ・バッテリー膨張（パネル浮き・厚み2倍以上）」を買取不可の対象として挙げています。ふるいちは「故障、画面ワレ、バッテリー劣化などの著しいダメージがある端末については減額で買取させていただく場合やお値段がつけられない場合がございます」と記載しています。iPhoneでは「設定」→「バッテリー」→「バッテリーの状態」で最大容量の表示を確認できるため、お申し込み前に控えておくと、正確に申告できます。",
  },
  {
    label: "背面・フレーム",
    value:
      "携帯市場は保証外となる状態例に「角内部ヒビ」「フレーム歪みによる隙間」「フレーム欠け」「充電口等本体に歪み」を挙げています。ゲオの買取は「背面の傷・ヘコミ」のあるiPhoneも買取対象としています。大黒屋 携帯買取館は「大破状態（大きく歪んでいる・折れ曲がっている等）」の商品を買取不可としています。",
  },
  {
    label: "カメラ",
    value:
      "携帯市場の査定項目には「カメラ査定」が含まれます。にこスマ買取は「カメラに異常がある」状態を機能不良（Cグレード）の例に挙げています。ゲオの買取は「カメラレンズの傷」のあるiPhoneも買取対象と記載しています。レンズのひび・曇り、撮影時の黒点の有無は、発送前に一度撮影して確認しておくと、申告が容易になります。",
  },
  {
    label: "水濡れ",
    value:
      "携帯市場の査定項目には「水没反応確認」が含まれます。にこスマ買取は「水濡れしている」状態を機能不良（Cグレード）の例に挙げています。大黒屋 携帯買取館は、水没した端末は基本的に買取を行っておらず、一部の機種は状態により値段が付く場合があると記載しています。",
  },
  {
    label: "操作・音・ボタン",
    value:
      "携帯市場の査定項目には「通話・スピーカー・バイブ査定」「タッチパネル・キー操作確認」「端末機能などの動作確認全般」が含まれます。にこスマ買取は「スピーカーとマイクに異常がある」「ボタンに異常がある」状態を機能不良（Cグレード）の例に挙げています。",
  },
];

/** 付属品・箱の扱い（掲載社の公式記載） */
const ACCESSORY_ROWS: { label: string; value: string }[] = [
  {
    label: "ブックオフ スマホ・タブレット買取",
    value: "「箱 / 説明書等の付属品 などがある場合はお持ちください」「箱、付属品がついていれば査定金額アップ！」と記載。",
  },
  {
    label: "携帯市場 買取",
    value: "商品の状態の定義で、「新品」の条件として「箱および初期同梱付属品一式に破損、欠品がない」「箱、本体、付属が工場出荷時同等に傷や汚れがない」と記載。",
  },
  {
    label: "大黒屋 携帯買取館",
    value: "「付属品有無の確認や本体の簡単なクリーニングをしていただく事により購入当初の状態に近い方が更なる査定額UPに繋がる場合もございます。もちろん、本体のみの状態などでも買取可能」と記載。サイトの買取価格は「新品未使用品(保護フィルムが付いている状態)で本体・付属品・箱・保証書等がすべて揃った状態での買取上限金額」で、「保護フィルム・付属品・保証書等がない場合、買取価格が減額になることがございます」としています。",
  },
  {
    label: "にこスマ買取",
    value: "「付属品の有無で買取金額は変わることはございません。本体のみでお送りください」と記載。",
  },
  {
    label: "ゲオの買取（スマホ・タブレット）",
    value: "買取できない商品として「電池パックが無い（付属品として記載されている端末に限る）」を挙げています。",
  },
];

/** ネットワーク利用制限・残債についての公式記載 */
const RESTRICTION_ROWS: { slug: string; value: string }[] = [
  {
    slug: "geo-kaitori",
    value:
      "買取利用特約第2条9項に「『割賦販売による未払いの端末代金が残存または、盗難・紛失保証サービスに加入』などの理由で、ネットワーク利用制限がかかっている端末につきましては、下記の〔ア〜エ〕について異議無く同意出来る方のみお申し込み可能」とあり、買取完了後も分割払いを完済すること、滞納等で使用不能になった場合は買取金額を全額返金すること、損害賠償金として買取代金の2倍相当額を支払うこと、異議申し立てをしないことが条件として記載されています。査定基準ページでは未使用品の条件として「ネットワークの利用制限が『〇』『△』『ー』の状態」と記載。",
  },
  {
    slug: "keitai-ichiba",
    value:
      "公式Q&Aの減額対象の説明に「②ネットワーク利用制限が『△』『－』の場合 ※ネットワーク利用制限が『×』の商品は買取不可となります。」と明記。端末代金の残債については「買取できますが、買取の値段が下がる可能性があります」と記載。最低買取価格保証の検品基準には「ネットワーク判定が『〇』」が含まれます。",
  },
  {
    slug: "daikoku-mobile",
    value:
      "宅配買取の流れページに「※ネットワーク利用制限判定が『○』または『△』判定の新品スマートフォンのみが宅配買取対象となりますのでご注意下さい。」と明記。残債については公式Q&Aに「docomoネットワーク利用制限確認サイトにて、『○』か『△』が表示されれば、通常価格で買取可能です」「○は通常価格、△は【利用制限△】価格での買取となり、通常価格とは異なります」と記載。中古端末の宅配買取可否は公式では確認できず（中古端末は店頭買取が案内されています）。",
  },
  {
    slug: "bookoff-mobile",
    value:
      "お売りいただく前のご準備ページに「ネットワーク利用制限が『◯』と『△』の端末のみお売りいただけます。『△』は減額の対象となります」と明記。店頭買取の「お売りいただけないアイテム」には「ネットワーク利用制限【×】の端末」と記載。残債がある端末の扱いについての直接の記載は公式では確認できず。",
  },
  {
    slug: "nicosuma-kaitori",
    value:
      "公式サポートに「ネットワーク利用制限が☓の場合、買取が不可となりますので、査定の際に確認させていただきます」と記載。ネットワーク利用制限は「デバイス代金の未払いや不正利用を発見した際に、通話や通信をできなくする仕組み」と説明されています。グレード表でも「ネットワーク利用制限が×ではない」ことが全グレード共通の前提になっています。",
  },
  {
    slug: "furuichi",
    value:
      "事前準備ページで、ネットワーク利用制限が「×」の端末は買取不可、「△」は買取可能だが「支払残債があるなど一定の制限がかかる可能性がある端末のため、買取金額減額の対象」と記載。分割払いの完済とネットワーク利用制限が結び付けて説明されています。",
  },
  {
    slug: "netoff",
    value: "買取できないものとして「ネットワーク利用制限×」を明記。残債そのものについての記載は公式では確認できず。",
  },
  {
    slug: "recommerce",
    value:
      "ネットワーク利用制限（いわゆる赤ロム）・残債のある端末の扱いについて、公式サイト（買取ページ・注意事項・特定商取引法に基づく表記・よくあるご質問）で記載を確認できませんでした。",
  },
];

export interface IphoneModelPageProps {
  model: IphoneModel;
  h1: string;
  intro: string;
  /** 冒頭の要点セクションの見出し（ページごとに個別の文言を渡す） */
  conclusionsTitle: string;
  /** 要点 */
  conclusions: string[];
  /** ラインナップ節の補足（世代ごとに異なる説明） */
  lineupNote: string;
  /** 売る前の準備節の補足（世代ごとに異なる説明） */
  prepNote: string;
  /** 状態チェック節の補足（世代ごとに異なる説明） */
  conditionNote: string;
  /** ネットワーク利用制限・残債節の補足（世代ごとに異なる説明） */
  restrictionNote: string;
  /** 世代固有の注意点 */
  genPoints: { t: string; d: string }[];
  faqs: { q: string; a: string }[];
}

export default function IphoneModelPage({
  model,
  h1,
  intro,
  conclusionsTitle,
  conclusions,
  lineupNote,
  prepNote,
  conditionNote,
  restrictionNote,
  genPoints,
  faqs,
}: IphoneModelPageProps) {
  const others = otherIphoneModels(model.slug);
  const sources = LINEUP_SOURCES.map((s) => ({ ...s, company: getCompany(s.slug) }));
  const restrictions = RESTRICTION_ROWS.map((r) => ({ ...r, company: getCompany(r.slug) }));

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: h1,
    description: intro.slice(0, 200),
    datePublished: IPHONE_MODEL_PUBLISHED,
    dateModified: IPHONE_MODEL_PUBLISHED,
    mainEntityOfPage: `${SITE_URL}${model.path}`,
    author: { "@type": "Organization", name: OPERATOR.name },
    publisher: { "@type": "Organization", name: SITE_NAME },
  };

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "iPhoneの買取", path: "/iphone/" },
          { name: `${model.name}の売却`, path: model.path },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">IPHONE</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          {h1}
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">{intro}</p>
        <p className="mt-4 max-w-3xl text-xs leading-loose text-steel-500">
          公開日: {IPHONE_MODEL_PUBLISHED_LABEL}／掲載社の条件は、公式サイトで一次確認した内容です。買取価格は機種・状態・時期により大きく変動するため、当サイトでは買取価格・相場の数値を掲載しておりません。最新の金額は、各社公式サイトの表示をご確認ください。
        </p>

        {/* 冒頭の要点 */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">{conclusionsTitle}</h2>
          <ul className="mt-4 space-y-3">
            {conclusions.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* ラインナップ */}
        <section className="mt-14">
          <h2 className="section-title mb-2">公式サイトで確認できた{model.name}のラインナップ表記</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">{lineupNote}</p>
          <ul className="flex flex-wrap gap-2">
            {model.lineup.map((l) => (
              <li key={l} className="border border-chalk-line bg-chalk-card px-4 py-2 font-display text-sm text-steel-900">
                {l}
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-3xl text-xs leading-loose text-steel-500">
            上記の表記は、当サイト掲載社のうち、公式サイトに機種一覧を掲載している次の4社のページを確認し、複数社に共通して掲載されていた表記のみを記載したものです（{IPHONE_MODEL_PUBLISHED_LABEL}確認）。1社のみに掲載されている表記は採用していません。容量・発売年・搭載チップなどの仕様は、当サイトでは扱っておりません。
          </p>
          <ul className="mt-3 space-y-1 text-xs text-steel-500">
            {sources.map((s) => (
              <li key={s.slug}>
                ・{s.company.name}:{" "}
                <a href={s.url} rel="nofollow noopener" target="_blank" className="text-vermilion underline underline-offset-4">
                  {s.url}
                </a>
                <ServiceNotice company={s.company} />
              </li>
            ))}
          </ul>
        </section>

        {/* 世代固有の注意点 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">{model.name}の売却時に特に確認したい注意点</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {genPoints.map((p, i) => (
              <div key={p.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {p.t}
                </h3>
                <p className="mt-3 text-[13px] leading-loose text-steel-700">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 売る前の準備 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">売却前の準備の手順</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">{prepNote}</p>
          <div className="space-y-5">
            {PREP_STEPS.map((s, i) => (
              <div key={s.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.t}
                </h3>
                <p className="mt-3 text-[13px] leading-loose text-steel-700">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/guide/data-shokyo/" className="btn-primary">初期化の手順を見る</Link>
            <Link href="/guide/activation-lock/" className="btn-ghost">「探す」の解除方法</Link>
          </div>
        </section>

        {/* 状態のどこを見られるか */}
        <section className="mt-14">
          <h2 className="section-title mb-2">査定で確認される端末の状態</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">{conditionNote}</p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {CONDITION_ROWS.map((r) => (
                  <tr key={r.label}>
                    <th className="w-32 md:w-44">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 上記は、各社公式サイトの記載を整理したものです（{IPHONE_MODEL_PUBLISHED_LABEL}確認）。減額幅・金額は、当サイトでは扱っておりません。査定結果は、同じ状態でも社により異なります。
          </p>
        </section>

        {/* 付属品と箱 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">付属品と箱の扱いの違い</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            箱や付属品の評価は、掲載社の間でも大きく異なります。付属品がある場合は持参するよう案内する社がある一方、付属品の有無で金額は変わらないため本体のみを送るよう明記している社もあります。お手元に箱が残っているかどうかによって、適した申込先が異なります。以下の記載は、いずれも各社公式サイトで確認したものです。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {ACCESSORY_ROWS.map((r) => (
                  <tr key={r.label}>
                    <th className="w-36 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 箱や付属品の有無による金額の差は、当サイトでは扱っておりません。付属品の扱いは、申込ページの記載を必ずご確認ください。
          </p>
        </section>

        {/* ネットワーク利用制限と残債 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">ネットワーク利用制限と残債の確認</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">{restrictionNote}</p>
          <div className="max-w-3xl space-y-4 text-sm leading-loose text-steel-600">
            <p>
              ネットワーク利用制限は、端末を購入したキャリアが公開している確認ページで、端末のIMEI（製造番号）を入力すると状態を調べられるのが一般的です。IMEIはiPhoneの「設定」→「一般」→「情報」で確認できます。ふるいちの事前準備ページでは、確認ページに表示されるステータスとして「◯（端末代金支払済／完済）」「△（端末代金未完済／支払中、保証サービス加入中）」「×（支払停滞中／利用制限中）」「－（製造番号の誤入力、本体交換製品、未反映等）」の4つが挙げられています。
            </p>
            <p>
              分割払いが残っていること自体で売却できなくなるわけではありませんが、支払いが止まると制限がかかり、購入した側が使用できなくなります。そのため、掲載社の多くが、制限の状態によって減額したり買取自体を断ったりする扱いを公式に明記しています。下表は、掲載社ごとの公式記載を整理したものです。記載を確認できなかった社は「公式では確認できず」と表示しており、対応していないという意味ではありません。
            </p>
          </div>
          <div className="mt-6 overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {restrictions.map((r) => (
                  <tr key={r.slug}>
                    <th className="w-36 md:w-56">{r.company.name}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
                <tr>
                  <th className="w-36 md:w-56">Mac買取ネット</th>
                  <td className="tag-na">ネットワーク利用制限・残債の扱いについての記載は公式では確認できず。</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 記載は、{IPHONE_MODEL_PUBLISHED_LABEL}時点の当サイトの調査によるものです。規約・条件は変更される場合があるため、ご利用前に、各社公式サイトにて最新情報をご確認ください。残債の有無と支払いの扱いは、ご契約中のキャリアにご確認ください。
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">{model.name}に関するよくある質問</h2>
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

        {/* 次の手順 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">申し込みまでの次の手順</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            機種名の特定、初期化、ネットワーク利用制限の確認が済んだら、各社の条件を比較のうえお申し込みください。掲載社の送料・返送料・入金・キャンセル規定・データ消去の扱いは、同じ基準で比較した比較表にまとめています。故障や画面割れがある場合は、受け付けている社とそうでない社に分かれるため、事前に故障品の扱いをご確認ください。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">掲載サービスの比較表</Link>
            <Link href="/iphone/" className="btn-ghost">iPhoneの買取（全体）</Link>
          </div>
        </section>

        {/* 関連リンク */}
        <section className="mt-14">
          <h2 className="section-title mb-6">関連ページ</h2>
          <ul className="grid gap-3 text-sm md:grid-cols-2">
            {others.map((m) => (
              <li key={m.slug}>
                <Link href={m.path} className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                  <span className="font-display text-steel-900">{m.name}の売却前の確認事項</span>
                  <span className="mt-1 block text-xs text-steel-500">{m.summary}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/iphone/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">iPhoneの買取（全体）</span>
                <span className="mt-1 block text-xs text-steel-500">世代を問わない判断ポイントと掲載社の比較</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/data-shokyo/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売却前のデータ消去手順</span>
                <span className="mt-1 block text-xs text-steel-500">バックアップ・サインアウト・初期化の順番</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/activation-lock/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">アクティベーションロックと「探す」の解除</span>
                <span className="mt-1 block text-xs text-steel-500">「探す」を解除しないと買取が成立しない理由</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/kowareta/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">壊れた・起動しない端末の売り方</span>
                <span className="mt-1 block text-xs text-steel-500">画面割れ・水没・起動不可の端末の売却先</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/shitadori-hikaku/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">スマホの下取りと買取の違い</span>
                <span className="mt-1 block text-xs text-steel-500">キャリア下取りとの違いを整理</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/takuhai-nagare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">宅配買取の流れと梱包方法</span>
                <span className="mt-1 block text-xs text-steel-500">申込から入金までの流れ</span>
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
