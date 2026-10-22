import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR, PUBLISHED_DATE } from "@/lib/site";

const TITLE = "スマホは下取りと買取のどちらが得か｜キャリア下取り・Apple Trade In・買取店の違い";
const DESC =
  "スマホを手放す方法は、キャリアの下取り、Apple Trade In、買取店の3つに大きく分かれます。それぞれの仕組み（ポイント・割引による還元か現金か、機種変更と連動するか）、下取りと買取それぞれに適した方、判断のためのチェックリスト、残債や返却プログラムに関する注意点を、一般的な知識として整理しています。";
const PATH = "/guide/shitadori-hikaku/";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  datePublished: PUBLISHED_DATE,
  dateModified: PUBLISHED_DATE,
  mainEntityOfPage: `${SITE_URL}${PATH}`,
  author: { "@type": "Organization", name: OPERATOR.name },
  publisher: { "@type": "Organization", name: SITE_NAME },
};

export default function ShitadoriHikakuGuidePage() {
  const conclusions = [
    "「下取り」と「買取」は還元の形が異なります。キャリア下取りは機種変更と同時に、ポイントや月々の割引として還元されるのが一般的です。Apple Trade Inは新しいApple製品の値引きやギフトカードで還元されます。買取店は機種変更とは関係なく、現金で買い取ります。",
    "どちらが有利かは、端末の状態と優先する条件によって変わります。手間をかけずに乗り換えたい場合は下取り、現金が必要な場合や乗り換え先が決まっていない場合、古い端末や画面割れの端末の場合は買取が適している傾向があります。",
    "同じ端末でも、下取り価格と買取店の査定額は評価基準が異なります。公式サイトの下取り条件と買取店の査定額の両方を確認したうえで判断することをおすすめします。",
    "下取り条件・対象機種・還元方法は頻繁に変更されます。本ページは仕組みの違いを一般的な知識として整理したものです。金額や条件は、必ず各社の公式サイトで最新情報をご確認ください。",
  ];

  const methodRows = [
    {
      label: "キャリア下取り",
      value:
        "携帯電話会社（キャリア）が、機種変更や乗り換えの際に古い端末を引き取る仕組みです。還元はポイントの付与や月々の利用料金からの割引といった形で行われるのが一般的で、その場で現金を受け取るものではありません。手続きは店頭または郵送で行い、機種変更と同時に行うのが基本です。",
    },
    {
      label: "Apple Trade In",
      value:
        "Appleが公式に提供する下取りプログラムで、新しいApple製品を購入するときの値引き、または（購入を伴わない場合）Appleギフトカードでの還元が一般的です。対象はiPhoneに限らず、Mac・iPad・Apple Watch・Android端末も含まれることがあります。オンラインでの見積もり後に端末を送り、実機確認で最終額が決まる流れです。",
    },
    {
      label: "買取店（宅配・店頭・出張）",
      value:
        "中古端末を買い取る専門業者に売却する方法です。機種変更や新端末の購入とは独立しており、還元は現金（銀行振込または店頭での現金払い）です。宅配買取なら全国から利用でき、キャリアやメーカーを問わず、画面割れや古い機種でも査定対象になることが多いのが特徴です。",
    },
  ];

  const meritRows = [
    { label: "キャリア下取り", value: "機種変更と同時に手続きできる点が利点です。還元はポイント・割引で、機種変更が前提です。" },
    { label: "Apple Trade In", value: "Apple製品の購入代金に直接充てられる点が利点です。還元は値引きまたはギフトカードです。" },
    { label: "買取店", value: "現金で受け取れ、機種変更とは別に売却できる点が利点です。業者選びと比較の手間がかかります。" },
  ];

  const fits = [
    {
      t: "下取りが適している方",
      d: "機種変更や乗り換えを同時に行う予定があり、手続きを一か所で済ませたい方に適しています。還元がポイントや月々の割引でも問題がない方、端末の状態が良く下取りの対象機種・状態条件に当てはまる方、Apple製品を継続して購入する予定があり購入代金に充てたい方（Apple Trade In）も該当します。",
    },
    {
      t: "買取が適している方",
      d: "現金での受け取りを希望する方に適しています。機種変更の予定がない方や乗り換え先が決まっていない方、使わなくなった端末を後からまとめて手放したい方、画面割れ・バッテリー劣化・古い機種など下取りの条件から外れる可能性のある端末をお持ちの方、複数の見積もりを比較してから決めたい方も該当します。",
    },
    {
      t: "両方を確認してから決めるのが適している方",
      d: "端末の状態が良く、機種変更も予定している方は、下取り額と買取店の査定額の両方を確認してから決めることをおすすめします。下取りは公式サイトで機種と状態を選択すると目安がわかり、買取店も機種・容量・状態の入力で事前見積もりを提示しているところが多いため、比較に大きな手間はかかりません。",
    },
  ];

  const checklist = [
    {
      t: "現金が必要か、ポイント・割引でもよいか",
      d: "還元の形が最も大きな判断材料です。現金が必要な場合は買取が適しています。ポイントや割引でも問題がない場合は、下取りも候補になります。",
    },
    {
      t: "機種変更・乗り換えを同時にするか",
      d: "下取りは機種変更や新端末の購入が前提です。端末のみを手放したい場合や乗り換え先が決まっていない場合は、買取を検討します。",
    },
    {
      t: "端末の状態は下取りの条件に当てはまるか",
      d: "下取りには対象機種と状態の条件があります。画面割れ・大きな傷・起動不良などがある場合は、下取り不可や大幅減額になることが多いため、買取店の「訳あり」対応のほうが有利な場合もあります。",
    },
    {
      t: "残債（分割払いの残り）はどうなっているか",
      d: "端末代金を分割で支払っている途中の場合、下取りに出しても残債の支払いは続きます。買取店に売る場合も同様で、残債があると「ネットワーク利用制限」がかかる可能性があるため、査定額に影響することがあります。売却前に残債の有無をご確認ください。",
    },
    {
      t: "返却プログラムの契約に該当していないか",
      d: "一定期間後に端末を返却すると残りの支払いが免除されるタイプのプログラムで購入した端末は、返却が前提のため、下取りや買取とは別の扱いになります。契約内容を確認せずに買取店へ売ると、返却できず残りの支払いが必要になることがあります。",
    },
    {
      t: "急いでいるか、日数に余裕があるか",
      d: "店頭下取りは機種変更と同時にその場で完結します。宅配買取は端末の発送から査定・入金まで日数がかかるのが一般的なため、急ぐ場合は店頭での手続きを検討します。",
    },
  ];

  const cautions = [
    {
      t: "下取り条件の変更と公式サイトでの最新情報の確認",
      d: "キャリア下取りもApple Trade Inも、対象機種・状態の判定基準・還元の形・キャンペーンの有無は定期的に変更されます。過去に確認した情報や、他サイトの古い情報をもとに判断せず、手続き直前に必ず公式サイトで確認してください。当サイトでは、金額や還元額の具体的な数値は掲載しておりません。",
    },
    {
      t: "見積額と最終額が異なる場合",
      d: "下取りも買取も、オンラインでの見積もりは自己申告の状態にもとづく目安で、実機を確認した後に最終額が決まります。申告と実際の状態が異なる場合は減額されます。宅配の場合は、減額に納得できない際にキャンセルできるか、返送料をどちらが負担するかを事前にご確認ください。",
    },
    {
      t: "データ消去と「探す」の解除はどの方法でも利用者自身で行う",
      d: "下取りでも買取でも、端末を渡す前にご自身でバックアップを取り、初期化し、iPhoneやiPadなら「探す」（アクティベーションロック）を解除しておく必要があります。解除されていないと、下取り不可・査定不可・返送となるのが一般的です。SIMカードやSDカードの抜き忘れにも注意してください。",
    },
    {
      t: "残債とネットワーク利用制限",
      d: "分割払いの残債がある端末は、支払い状況によってネットワーク利用制限がかかることがあり、買取店では制限の状態によって査定額が変わるか、買取対象外となることがあります。売却前に残債を確認し、可能であれば完済してから手放すことをおすすめします。下取りに出しても残債の支払いがなくなるわけではない点にもご注意ください。",
    },
    {
      t: "返却プログラムと下取り・買取の違い",
      d: "購入時に「一定期間後に端末を返却すると残りの支払いが不要になる」タイプのプログラムに加入している場合、その端末はプログラムの条件に従って返却するのが原則です。買取店に売却すると返却できなくなり、残りの支払いが必要になることがあります。契約書やマイページで、購入時のプログラム内容を必ず確認してください。",
    },
  ];

  const faqs = [
    {
      q: "下取りと買取の一番大きな違いは何ですか？",
      a: "還元の形と、機種変更との関係です。キャリア下取りはポイントや月々の割引、Apple Trade Inは新製品の値引きやギフトカードで還元されるのが一般的です。キャリア下取りは新しい端末の購入と同時に行いますが、Apple Trade Inは新しい端末を購入せずにApple Gift Cardで受け取ることもできます。買取店は現金で買い取り、機種変更とは無関係に端末だけを売ることができます。",
    },
    {
      q: "どちらが得ですか？",
      a: "端末の状態と優先する条件によって変わるため、一概には言えません。状態が良く機種変更も同時に行う場合は下取りの手軽さが利点となり、現金が必要な場合、乗り換えの予定がない場合、状態に難がある端末の場合は買取が適している傾向があります。同じ端末でも評価基準が異なるため、公式の下取り条件と買取店の見積もりの両方を確認してから決めることをおすすめします。",
    },
    {
      q: "画面が割れているスマホは下取りできますか？",
      a: "下取りには状態の条件があり、画面割れがあると下取り不可や大幅な減額、または無料回収扱いになることが一般的です。買取店では画面割れや故障品を専門に扱っているところもあるため、状態に難がある端末は、買取店の「訳あり」対応を確認すると選択肢が広がります。",
    },
    {
      q: "分割払いが残っているスマホを下取りや買取に出せますか？",
      a: "申し込み自体は可能な場合が多いものの、下取りに出しても残債の支払いは続きます。買取店の場合、残債があるとネットワーク利用制限の状態によって査定額が変わったり、買取対象外になったりすることがあります。売却前に残債の有無と利用制限の状態をご確認ください。",
    },
    {
      q: "返却プログラムで購入した端末を買取店に売却してもよいですか？",
      a: "返却が前提のプログラムでは、端末を返却しないと残りの支払いが免除されないのが一般的です。買取店に売却すると返却できなくなり、残額の支払いが必要になることがあります。契約内容を確認し、判断に迷う場合はキャリアに問い合わせてください。",
    },
    {
      q: "下取りでもデータ消去は自分で行う必要がありますか？",
      a: "はい。下取り・買取のどちらでも、端末を渡す前にご自身でバックアップと初期化を行い、iPhoneなら「探す」を解除しておくのが基本です。解除されていないと手続きが進まないのが一般的です。手順は、当サイトのデータ消去のページとアクティベーションロック解除のページで解説しています。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "スマホの下取りと買取の比較", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">TRADE-IN VS BUYBACK</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          スマホは下取りと買取のどちらが得か｜キャリア下取り・Apple Trade In・買取店の違い
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          使わなくなったスマホの手放し方には、携帯電話会社の下取り、Apple Trade In、買取店への売却という3つの選択肢があります。いずれも古い端末を渡して対価を得る点は共通していますが、還元の形、機種変更との関係、端末の状態に対する評価は大きく異なります。本ページでは、3つの仕組みの違い、いずれが適しているかの判断材料、残債や返却プログラムといった見落としやすい注意点を、一般的な知識として整理しています。具体的な金額や還元額は変動が大きいため掲載せず、判断の考え方に絞って解説します。
        </p>

        {/* 結論先出し */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">下取りと買取の還元方法の違いと使い分け</h2>
          <ul className="mt-4 space-y-3">
            {conclusions.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* 3つの仕組み */}
        <section className="mt-14">
          <h2 className="section-title mb-2">3つの手放し方の仕組みの違い</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            はじめに、それぞれの仕組みについて、還元する主体、還元の時期、還元の形を整理します。この点を理解しておくと、その後の判断がしやすくなります。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {methodRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 各プログラムの内容・対象・還元方法は変更されることがあります。手続き前に、必ず公式サイトで最新の条件をご確認ください。
          </p>
        </section>

        {/* メリデメ */}
        <section className="mt-14">
          <h2 className="section-title mb-2">3つの方法の利点</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            ここでは要点のみを記載します。下取りのメリット・デメリットの詳細は
            <Link href="/guide/shitadori-merit-demerit/" className="text-vermilion underline">下取りのメリット・デメリット</Link>
            で、申し込みから完了までの手順は
            <Link href="/guide/shitadori-nagare/" className="text-vermilion underline">下取りの流れ</Link>
            で整理しています。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {meritRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 向く人 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">下取りと買取それぞれに適した方</h2>
          <div className="space-y-5">
            {fits.map((s, i) => (
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
        </section>

        {/* チェックリスト */}
        <section className="mt-14">
          <h2 className="section-title mb-2">判断のチェックリスト</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            次の6項目を順に確認すると、下取りと買取のいずれを中心に検討するかを整理できます。
          </p>
          <div className="space-y-4">
            {checklist.map((c, i) => (
              <div key={c.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {c.t}
                </h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 注意点 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">下取り・買取の注意点</h2>
          <div className="space-y-4">
            {cautions.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 買取を選ぶなら */}
        <section className="mt-14">
          <h2 className="section-title mb-2">買取を選ぶ場合の条件の比較</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            買取を選ぶ場合、業者ごとに送料・返送料・査定日数・入金タイミング・データ消去の扱い・画面割れの対応が異なります。見積額だけでなく、減額時のキャンセル条件や返送料まで含めて比較すると、手続き後に想定と異なる結果となる事態を避けられます。
          </p>
          <div className="border border-chalk-line bg-chalk-card p-5">
            <h3 className="font-display text-base text-steel-900">当サイトの比較表と診断</h3>
            <p className="mt-2 text-[13px] leading-loose text-steel-700">
              <Link href="/compare/" className="text-vermilion underline underline-offset-4">統一比較表</Link>では、掲載各社の公式サイトで確認できた条件を一覧で掲載しています。iPhone・Android・Mac・PC・タブレットなどカテゴリ別のページもあり、<Link href="/shindan/" className="text-vermilion underline underline-offset-4">売り方診断</Link>では端末の状態と希望に合わせて、確認すべきカテゴリを案内しています。宅配買取の具体的な手順は<Link href="/guide/takuhai-nagare/" className="text-vermilion underline underline-offset-4">宅配買取の流れ</Link>で解説しています。
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">買取業者の条件を比較表で見る</Link>
            <Link href="/shindan/" className="btn-ghost">売り方診断で確認する</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">下取りと買取でよくある質問</h2>
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

        {/* 関連リンク */}
        <section className="mt-14">
          <h2 className="section-title mb-6">関連ページ</h2>
          <ul className="grid gap-3 text-sm md:grid-cols-2">
            <li>
              <Link href="/guide/carrier-shitadori/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">キャリアの下取りプログラムの仕組みと条件</span>
                <span className="mt-1 block text-xs text-steel-500">ドコモ・au・ソフトバンク・楽天モバイルを同じ項目で整理</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/shitadori-merit-demerit/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">下取りのメリット・デメリット</span>
                <span className="mt-1 block text-xs text-steel-500">手間・受け取り方・期限・責任の所在</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/shitadori-nagare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">下取りの申し込みから完了までの流れ</span>
                <span className="mt-1 block text-xs text-steel-500">店頭とオンライン（郵送）の違いと期限</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/shitadori-dekinai/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">下取りに出せない・減額になるケース</span>
                <span className="mt-1 block text-xs text-steel-500">画面割れ・残債・ロック・期限</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/takuhai-nagare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">宅配買取の流れと梱包方法</span>
                <span className="mt-1 block text-xs text-steel-500">買取を選んだ場合の申込から入金までの手順</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/honnin-kakunin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取で本人確認が必要な理由</span>
                <span className="mt-1 block text-xs text-steel-500">古物営業法と宅配買取の本人確認方法</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/data-shokyo/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売る前のデータ消去・初期化</span>
                <span className="mt-1 block text-xs text-steel-500">下取りでも買取でも必要な端末側の準備</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/activation-lock/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">アクティベーションロック（「探す」）の解除</span>
                <span className="mt-1 block text-xs text-steel-500">解除されていない場合は下取りも買取も進まない理由</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/kowareta/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">壊れた・起動しないスマホやPCの売却</span>
                <span className="mt-1 block text-xs text-steel-500">下取り条件から外れる端末の売却方法</span>
              </Link>
            </li>
            <li>
              <Link href="/iphone/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">iPhoneの買取</span>
                <span className="mt-1 block text-xs text-steel-500">Apple Trade Inと比較する際の対応業者</span>
              </Link>
            </li>
            <li>
              <Link href="/android/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Androidスマホの買取</span>
                <span className="mt-1 block text-xs text-steel-500">キャリア下取りと比較する際の対応業者</span>
              </Link>
            </li>
            <li>
              <Link href="/tablet/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">iPad・タブレットの買取</span>
                <span className="mt-1 block text-xs text-steel-500">セルラーモデル・Wi-Fiモデルの違いと注意点</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
