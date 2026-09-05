import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR, PUBLISHED_DATE } from "@/lib/site";

const TITLE = "スマホは下取りと買取どっちが得？｜キャリア下取り・Apple Trade In・買取店の違い";
const DESC =
  "スマホを手放す方法は、キャリアの下取り、Apple Trade In、買取店の3つに大きく分かれます。それぞれの仕組み（ポイント・割引還元か現金か、機種変更と連動するか）、メリット・デメリット、下取りが向く人と買取が向く人、判断のチェックリスト、残債や返却プログラムとの違いなどの注意点を一般知識として整理します。";
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
    "「下取り」と「買取」は還元のかたちが違います。キャリア下取りは機種変更と同時に、ポイントや月々の割引として還元されるのが一般的。Apple Trade Inは新しいApple製品の値引きやギフトカードでの還元。買取店は機種変更と関係なく、現金で買い取ります。",
    "どちらが得かは端末の状態と、あなたが何を優先するかで変わります。手間をかけずに乗り換えたいなら下取り、現金が必要・乗り換え先が決まっていない・古い端末や画面割れの端末なら買取が向く傾向があります。",
    "同じ端末でも、下取り価格と買取店の査定額は評価基準が異なります。判断する前に、公式サイトの下取り条件と、買取店の査定を両方確認してから決めるのが失敗しにくい進め方です。",
    "下取り条件・対象機種・還元方法は頻繁に変更されます。このページは仕組みの違いを一般知識として整理したもので、金額や条件は必ず各社の公式サイトで最新情報を確認してください。",
  ];

  const methodRows = [
    {
      label: "キャリア下取り",
      value:
        "携帯電話会社（キャリア）が、機種変更や乗り換えの際に古い端末を引き取る仕組みです。還元はポイントの付与や月々の利用料金からの割引といったかたちで行われるのが一般的で、その場で現金を受け取るものではありません。手続きは店頭または郵送で行い、機種変更とセットになっているのが基本です。",
    },
    {
      label: "Apple Trade In",
      value:
        "Appleが公式に提供する下取りプログラムで、新しいApple製品を購入するときの値引き、または（購入を伴わない場合）Appleギフトカードでの還元が一般的です。対象はiPhoneに限らず、Mac・iPad・Apple Watch・Android端末も含まれることがあります。オンラインでの見積もり後に端末を送り、実機確認で最終額が決まる流れです。",
    },
    {
      label: "買取店（宅配・店頭・出張）",
      value:
        "中古端末を買い取る専門業者に売る方法です。機種変更や新端末の購入とはまったく独立しており、還元は現金（銀行振込または店頭での現金払い）です。宅配買取なら全国から利用でき、キャリアやメーカーを問わず、画面割れや古い機種でも査定対象になることが多いのが特徴です。",
    },
  ];

  const meritRows = [
    {
      label: "キャリア下取りのメリット",
      value:
        "機種変更の手続きと同時に完結するため、別の業者を探す手間がありません。店頭で手続きすれば端末をその場で引き渡せます。キャリアが実施するキャンペーンによっては、下取り額の上乗せが行われることもあります。",
    },
    {
      label: "キャリア下取りのデメリット",
      value:
        "還元がポイントや割引のため、現金として使えないのが一般的です。機種変更や乗り換えが前提なので、端末だけを手放したい人には向きません。対象機種や状態の条件が決まっており、条件から外れると下取り不可や大幅な減額になることがあります。還元が月々の割引の場合、途中で解約すると残りの割引を受けられなくなることもあります。",
    },
    {
      label: "Apple Trade Inのメリット",
      value:
        "Apple製品の購入と同時にオンラインで完結できます。見積もりがその場で分かりやすく、購入代金に直接充てられるのが便利です。Apple公式のため、端末のデータ消去やリサイクルへの流れも整備されています。",
    },
    {
      label: "Apple Trade Inのデメリット",
      value:
        "還元がApple製品の値引きまたはギフトカードのため、Apple製品を買う予定がない人には使い道が限られます。状態の判定基準が定められており、画面割れなどがあると見積額が大きく下がる、または下取り価格がつかず無料回収になる場合があります。",
    },
    {
      label: "買取店のメリット",
      value:
        "現金で受け取れるため、使い道が限定されません。機種変更と切り離して、使わなくなった端末だけを売ることができます。複数の業者に見積もりを取って比較できる点も下取りとの大きな違いです。画面割れ・古い機種・キャリアやメーカーがバラバラな複数台でも、対応している業者が多くあります。",
    },
    {
      label: "買取店のデメリット",
      value:
        "自分で業者を選ぶ手間がかかります。宅配買取は端末を送ってから査定・入金まで日数がかかり、査定後に減額があった場合の対応（承諾・キャンセル・返送料）を自分で判断する必要があります。本人確認書類の提出も必要です。業者によって条件の差が大きいため、比較せずに決めると損をしやすい面があります。",
    },
  ];

  const fits = [
    {
      t: "下取りが向く人",
      d: "機種変更や乗り換えを同時に行う予定があり、手続きを一か所で済ませたい人。ポイントや月々の割引でも困らない人。端末の状態が良く、下取りの対象機種・状態条件に問題なく当てはまる人。Apple製品を続けて買う予定があり、購入代金にそのまま充てたい人（Apple Trade In）。",
    },
    {
      t: "買取が向く人",
      d: "現金で受け取りたい人。機種変更の予定がない、または乗り換え先をまだ決めていない人。使わなくなった端末を後からまとめて手放したい人。画面割れ・バッテリー劣化・古い機種など、下取りの条件から外れそうな端末を持っている人。複数の見積もりを比較して納得してから決めたい人。",
    },
    {
      t: "両方を確認してから決めるのが向く人",
      d: "端末の状態が良く、機種変更も予定している人は、下取り額と買取店の査定額の両方を確認してから決めるのが無駄のない進め方です。下取りは公式サイトで機種と状態を選べば目安が分かり、買取店も機種・容量・状態を入力すれば事前見積もりを出しているところが多いため、比較自体はそれほど手間がかかりません。",
    },
  ];

  const checklist = [
    {
      t: "現金が必要か、ポイント・割引でもよいか",
      d: "還元のかたちが一番大きな分かれ目です。現金が必要なら買取一択。ポイントや割引でも問題なければ下取りも候補になります。",
    },
    {
      t: "機種変更・乗り換えを同時にするか",
      d: "下取りは機種変更や新端末の購入が前提です。端末だけを手放したい、または乗り換え先が決まっていないなら買取を検討します。",
    },
    {
      t: "端末の状態は下取りの条件に当てはまるか",
      d: "下取りには対象機種と状態の条件があります。画面割れ・大きな傷・起動不良などがある場合は、下取り不可や大幅減額になることが多いため、買取店の「訳あり」対応の方が結果的に有利なこともあります。",
    },
    {
      t: "残債（分割払いの残り）はどうなっているか",
      d: "端末代金を分割で支払っている途中の場合、下取りに出しても残債の支払いは続きます。買取店に売る場合も同様で、残債があると「ネットワーク利用制限」がかかる可能性があるため、査定額に影響することがあります。売る前に残債の有無を確認しておきましょう。",
    },
    {
      t: "返却プログラム系の契約になっていないか",
      d: "一定期間後に端末を返却すると残りの支払いが免除されるタイプのプログラムで購入した端末は、そもそも「返却」が前提のため、下取りや買取とは別の扱いになります。契約内容を確認せずに買取店へ売ると、返却できず残りの支払いが必要になることがあります。",
    },
    {
      t: "急いでいるか、日数に余裕があるか",
      d: "店頭下取りは機種変更と同時にその場で完結します。宅配買取は端末の発送から査定・入金まで日数がかかるのが一般的なので、急ぎなら店頭系の方法を検討します。",
    },
  ];

  const cautions = [
    {
      t: "下取り条件は変わるので公式サイトで最新を確認",
      d: "キャリア下取りもApple Trade Inも、対象機種・状態の判定基準・還元のかたち・キャンペーンの有無は定期的に変更されます。過去に見た情報や、まとめサイトの古い情報をもとに判断せず、手続き直前に必ず公式サイトで確認してください。当サイトでは金額や還元額の具体的な数値は扱っていません。",
    },
    {
      t: "「見積額」と「最終額」は違うことがある",
      d: "下取りも買取も、オンラインでの見積もりは自己申告の状態にもとづく目安で、実機を確認した後に最終額が決まります。申告と実際の状態が違えば減額されます。宅配の場合、減額に納得できないときにキャンセルできるか、返送料は誰が負担するかを事前に確認しておきましょう。",
    },
    {
      t: "どの方法でもデータ消去と「探す」の解除は自分で行う",
      d: "下取りでも買取でも、端末を渡す前に自分でバックアップを取り、初期化し、iPhoneやiPadなら「探す」（アクティベーションロック）を解除しておく必要があります。解除されていないと、下取り不可・査定不可・返送となるのが一般的です。SIMカードやSDカードの抜き忘れにも注意してください。",
    },
    {
      t: "残債とネットワーク利用制限",
      d: "分割払いの残債がある端末は、支払い状況によってネットワーク利用制限がかかることがあり、買取店では制限の状態によって査定額が変わるか、買取対象外となることがあります。売る前に残債を確認し、可能なら完済してから手放すのが安心です。下取りに出しても残債の支払いが消えるわけではない点にも注意しましょう。",
    },
    {
      t: "返却プログラムと下取り・買取の違い",
      d: "購入時に「一定期間後に端末を返却すると残りの支払いが不要になる」タイプのプログラムに加入している場合、その端末はプログラムの条件に従って返却するのが原則です。買取店に売ってしまうと返却できなくなり、残りの支払いが必要になることがあります。契約書やマイページで、購入時のプログラム内容を必ず確認してください。",
    },
  ];

  const faqs = [
    {
      q: "下取りと買取の一番大きな違いは何ですか？",
      a: "還元のかたちと、機種変更との関係です。キャリア下取りはポイントや月々の割引、Apple Trade Inは新製品の値引きやギフトカードで還元されるのが一般的で、いずれも新しい端末の購入とセットです。買取店は現金で買い取り、機種変更とは無関係に端末だけを売ることができます。",
    },
    {
      q: "結局どちらが得ですか？",
      a: "端末の状態と、あなたが何を優先するかで変わるため、一概には言えません。状態が良く機種変更も同時に行うなら下取りの手軽さが魅力ですし、現金が必要・乗り換え予定がない・状態に難がある端末なら買取が向く傾向があります。同じ端末でも評価基準が違うため、公式の下取り条件と買取店の見積もりを両方確認してから決めるのが失敗しにくい方法です。",
    },
    {
      q: "画面が割れているスマホは下取りできますか？",
      a: "下取りには状態の条件があり、画面割れがあると下取り不可や大幅な減額、または無料回収扱いになることが一般的です。買取店では画面割れや故障品を専門に扱っているところもあるため、状態に難がある端末は買取店の「訳あり」対応を確認する方が選択肢が広がります。",
    },
    {
      q: "分割払いが残っているスマホを下取りや買取に出せますか？",
      a: "出すこと自体は可能な場合が多いですが、下取りに出しても残債の支払いは続きます。買取店の場合、残債があるとネットワーク利用制限の状態によって査定額が変わったり、買取対象外になったりすることがあります。売る前に残債の有無と利用制限の状態を確認しておきましょう。",
    },
    {
      q: "返却プログラムで買った端末を買取店に売ってもいいですか？",
      a: "返却が前提のプログラムでは、端末を返却しないと残りの支払いが免除されないのが一般的です。買取店に売ってしまうと返却できなくなり、残額の支払いが必要になることがあります。契約内容を確認し、判断に迷う場合はキャリアに問い合わせてください。",
    },
    {
      q: "下取りでもデータ消去は自分でする必要がありますか？",
      a: "はい。下取り・買取のどちらでも、端末を渡す前に自分でバックアップと初期化を行い、iPhoneなら「探す」を解除しておくのが基本です。解除されていないと手続きが進まないのが一般的です。手順は当サイトのデータ消去ガイドとアクティベーションロック解除ガイドで解説しています。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "スマホは下取りと買取どっちが得？", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">TRADE-IN VS BUYBACK</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          スマホは下取りと買取どっちが得？｜キャリア下取り・Apple Trade In・買取店の違い
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          使わなくなったスマホの手放し方には、携帯電話会社の下取り、Apple Trade In、買取店への売却という3つの選択肢があります。どれも「古い端末を渡してお金に換える」点は同じに見えますが、還元のかたち、機種変更との関係、端末の状態に対する評価は大きく異なります。このページでは、3つの仕組みの違い、それぞれのメリット・デメリット、どちらが向くかの判断材料、そして残債や返却プログラムといった見落としやすい注意点を一般知識として整理します。具体的な金額や還元額は変動が大きいため扱わず、判断の考え方に絞って解説します。
        </p>

        {/* 結論先出し */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">先に結論</h2>
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
            まず、それぞれが「誰が」「どのタイミングで」「何で」還元するのかを押さえておきましょう。ここを理解すると、後の判断がぶれにくくなります。
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
            ※ 各プログラムの内容・対象・還元方法は変更されることがあります。手続き前に必ず公式サイトで最新の条件を確認してください。
          </p>
        </section>

        {/* メリデメ */}
        <section className="mt-14">
          <h2 className="section-title mb-2">それぞれのメリット・デメリット</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            一般的に言われるメリット・デメリットを整理します。どれが「良い・悪い」ではなく、自分の状況に合うかどうかで見てください。
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
          <h2 className="section-title mb-6">下取りが向く人・買取が向く人</h2>
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
            次の6つを順に確認すると、下取りと買取のどちらを軸にするかが整理しやすくなります。
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
          <h2 className="section-title mb-6">下取り・買取で気をつけたいこと</h2>
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
          <h2 className="section-title mb-2">買取を選ぶなら、条件を同じ物差しで比較する</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            買取を選ぶ場合、業者ごとに送料・返送料・査定日数・入金タイミング・データ消去の扱い・画面割れの対応が異なります。見積額だけでなく、減額時のキャンセル条件や返送料まで含めて比較すると、手続き後の「こんなはずでは」を避けやすくなります。
          </p>
          <div className="border border-chalk-line bg-chalk-card p-5">
            <h3 className="font-display text-base text-steel-900">当サイトの比較表と診断</h3>
            <p className="mt-2 text-[13px] leading-loose text-steel-700">
              <Link href="/compare/" className="text-vermilion underline underline-offset-4">統一比較表</Link>では、掲載各社の公式サイトで確認できた条件を並べて整理しています。iPhone・Android・Mac・PC・タブレットなどカテゴリ別のページもあり、<Link href="/shindan/" className="text-vermilion underline underline-offset-4">売り方診断</Link>では端末の状態と希望に合わせて、確認すべきカテゴリを案内しています。宅配買取の具体的な手順は<Link href="/guide/takuhai-nagare/" className="text-vermilion underline underline-offset-4">宅配買取の流れ</Link>で解説しています。
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
              <Link href="/guide/takuhai-nagare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">宅配買取の流れと梱包方法</span>
                <span className="mt-1 block text-xs text-steel-500">買取を選んだときの申込から入金までの手順</span>
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
                <span className="mt-1 block text-xs text-steel-500">解除されていないと下取りも買取も進まない</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/kowareta/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">画面割れ・故障した端末を売る</span>
                <span className="mt-1 block text-xs text-steel-500">下取り条件から外れる端末の売り方</span>
              </Link>
            </li>
            <li>
              <Link href="/iphone/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">iPhoneの買取</span>
                <span className="mt-1 block text-xs text-steel-500">Apple Trade Inと比較したいときの対応業者</span>
              </Link>
            </li>
            <li>
              <Link href="/android/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Androidスマホの買取</span>
                <span className="mt-1 block text-xs text-steel-500">キャリア下取りと比較したいときの対応業者</span>
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
