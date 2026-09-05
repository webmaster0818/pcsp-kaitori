import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR, PUBLISHED_DATE } from "@/lib/site";

const TITLE = "スマホ・PCの宅配買取の流れと梱包方法｜申込から入金まで・トラブル時の相談先";
const DESC =
  "スマホ・PCの宅配買取は、申込→梱包→発送→到着・査定→承諾またはキャンセル→入金という流れが一般的です。梱包の仕方（緩衝材・付属品・バッテリー機器の輸送上の注意）、送る前のデータ消去・「探す」解除・SIM抜きのチェック、査定後の減額・キャンセル・返送料の見方、入金までの目安、トラブル時の相談先（消費者ホットライン188・国民生活センター）とクーリングオフの考え方を一般知識として解説します。";
const PATH = "/guide/takuhai-nagare/";

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

export default function TakuhaiNagareGuidePage() {
  const conclusions = [
    "宅配買取の流れは、申込→梱包キットの到着（または自分で梱包）→発送→業者到着・査定→査定額の承諾またはキャンセル→入金、が一般的です。全体の日数は業者と本人確認の方式によって異なります。",
    "送る前に必ず、バックアップ・データ消去（初期化）・「探す」（アクティベーションロック）の解除・SIMカードやSDカードの取り外しを済ませます。ここを飛ばすと査定が止まる、減額される、返送されるといった結果になりがちです。",
    "査定後に減額があった場合にキャンセルできるか、そのときの返送料を誰が負担するかは業者によって異なります。申込前に規約で確認しておくのが、後悔しないための一番の対策です。",
    "宅配買取は一般に「訪問購入」ではないため、特定商取引法のクーリングオフの対象外とされています。トラブルになったときは消費者ホットライン188や国民生活センターに相談できます。",
  ];

  const steps = [
    {
      t: "申込（ウェブフォームまたはアプリ）",
      d: "業者の公式サイトやアプリから、売りたい端末の機種・容量・状態などを入力して申し込みます。多くの業者はこの時点で事前見積もり（仮査定）を提示します。本人確認の方式もこの段階で案内されるため、書類を手元に用意しておくと進めやすくなります。梱包キットを希望するかどうかもここで選ぶのが一般的です。",
    },
    {
      t: "梱包キットの到着、または自分で梱包",
      d: "梱包キットを申し込んだ場合は、段ボールや緩衝材、着払い伝票などが届きます。自分で梱包する場合は、手持ちの箱と緩衝材で用意します。キットの有無・料金は業者によって異なります。梱包の具体的な方法は後述します。",
    },
    {
      t: "発送",
      d: "業者指定の配送方法で発送します。送料が無料か有料か、着払い伝票が同梱されているか、集荷を依頼できるかは業者によって異なります。発送後は追跡番号を控えておくと、到着の確認や万一の紛失時の問い合わせに役立ちます。",
    },
    {
      t: "到着・査定",
      d: "業者に端末が届くと、実機を確認して最終的な査定額が決まります。到着から査定結果の連絡までの日数は業者によって異なり、混雑時には延びることもあります。事前見積もりと実機の状態が違う場合は、ここで減額や買取不可の連絡が来ます。",
    },
    {
      t: "査定額の承諾、またはキャンセル",
      d: "査定結果に納得すれば承諾し、買取が成立します。納得できない場合はキャンセルして端末を返送してもらいます。「連絡がなければ自動承諾」とする業者や、キャンセル時の返送料が自己負担となる業者もあるため、承諾の方法と期限、返送料の負担を事前に確認しておきましょう。",
    },
    {
      t: "入金",
      d: "承諾後、指定した銀行口座に振り込まれます。本人確認が本人限定受取郵便などの方式の場合は、郵便物の受け取りが完了してから入金となることがあります。入金までの日数は業者によって異なるため、公式サイトの記載を確認してください。",
    },
  ];

  const packingRows = [
    {
      label: "本体の保護",
      value:
        "画面を保護するために、本体を柔らかい布や気泡緩衝材（プチプチ）で包みます。画面フィルムやケースを付けたまま送るかどうかは、業者の案内に従ってください。輸送中に画面が割れると査定に影響するため、本体が箱の中で動かないように緩衝材で固定するのが基本です。",
    },
    {
      label: "箱の選び方",
      value:
        "本体より一回り大きい箱を使い、隙間を緩衝材や丸めた紙で埋めます。大きすぎる箱は中で動きやすく、小さすぎる箱は圧力がかかりやすくなります。ノートPCのように大きい機器は、角を守るように緩衝材を厚めに入れます。",
    },
    {
      label: "付属品・元箱",
      value:
        "充電器・ケーブル・元箱などの付属品は、査定にプラスになる場合があるため、あれば一緒に送るのが一般的です。ただし付属品の扱いは業者によって異なり、不要としているところもあります。元箱があっても、そのまま送らず、さらに外箱に入れて緩衝材で保護してください。",
    },
    {
      label: "複数台を送る場合",
      value:
        "端末同士が直接ぶつからないように、1台ずつ緩衝材で包んでから箱に入れます。申込時に台数と機種を正しく申告し、申込内容と同梱物が一致するようにしましょう。本人確認書類の写しを同梱する方式の場合は、指定された場所に入れます。",
    },
    {
      label: "バッテリー内蔵機器の輸送",
      value:
        "スマホやノートPCはリチウムイオンバッテリーを内蔵しているため、運送会社によって輸送の条件が定められていることがあります。一般には、電源を切り、機器に組み込まれた状態で送るのが原則です。膨張したバッテリーや損傷したバッテリーを含む機器は受け付けない運送会社・業者があるため、事前に確認してください。バッテリー単体を同梱するのは避けましょう。",
    },
  ];

  const preChecks = [
    {
      t: "バックアップとデータ消去（初期化）",
      d: "写真・連絡先・アプリのデータをクラウドやPCにバックアップしたうえで、端末を初期化します。Windows PCやMacは、単なる削除ではなくデータの復元が難しい方法で消去するのが基本です。業者側でもデータ消去を行うとしているところがありますが、送る前に自分で消去しておくのが原則です。",
    },
    {
      t: "「探す」（アクティベーションロック）の解除",
      d: "iPhone・iPad・Macは、Apple IDでの「探す」が有効なままだと、業者側で初期化できず、査定不可や返送になるのが一般的です。初期化する前に「探す」をオフにし、Apple IDからサインアウトしてください。Android端末も、Googleアカウントの保護機能が働くことがあるため、初期化前にアカウントを削除しておきます。",
    },
    {
      t: "SIMカード・SDカードの取り外し",
      d: "SIMカードを入れたまま送ると、個人情報や回線が第三者の手に渡るおそれがあります。SDカードにも写真などのデータが残っています。必ず取り外してから梱包してください。eSIMを使っている場合は、初期化前にキャリアの手順に従って移行・削除します。",
    },
    {
      t: "各種ロック・アカウントの解除",
      d: "画面ロック（パスコード・指紋・顔認証）を解除し、キャリアのアカウントや、業務用の端末管理（MDM）が設定されている場合はそれも解除します。管理が残っていると業者側で初期化できず、査定が進まないことがあります。",
    },
    {
      t: "残債とネットワーク利用制限の確認",
      d: "分割払いが残っている端末は、支払い状況によってネットワーク利用制限がかかることがあり、査定額に影響する場合があります。売る前に残債の有無と制限の状態を確認しておきましょう。",
    },
  ];

  const afterRows = [
    {
      label: "減額の理由の確認",
      value:
        "事前見積もりから減額された場合、理由（傷・画面の状態・バッテリー・付属品不足など）が示されるのが一般的です。理由が示されない、または納得できない場合は、問い合わせて説明を求めましょう。申告と実際の状態が違えば減額されるのが通常ですが、根拠のない減額に応じる必要はありません。",
    },
    {
      label: "キャンセルの可否と期限",
      value:
        "査定額に納得できないときにキャンセルできるか、いつまでに連絡が必要か、「連絡がなければ自動承諾」となるかを規約で確認します。自動承諾の期限が短い業者もあるため、査定結果の連絡を見逃さないようにしましょう。",
    },
    {
      label: "返送料の負担",
      value:
        "キャンセル時の返送料は、業者負担・自己負担・条件によって異なる、の3パターンがあります。自己負担の場合、返送料が査定額を上回るような端末では実質的にキャンセルしづらくなります。申込前に返送料の記載を確認しておくことが重要です。",
    },
    {
      label: "入金までの目安",
      value:
        "承諾から入金までの日数は業者によって異なり、「承諾後○営業日」のように公式サイトで案内されているのが一般的です。本人確認の方式によっては、郵便物の受け取りが完了するまで入金されないこともあります。入金予定日を過ぎても振り込まれない場合は、まず業者に問い合わせてください。",
    },
  ];

  const troubles = [
    {
      t: "消費者ホットライン「188（いやや）」",
      d: "全国共通の電話番号で、最寄りの消費生活センターや消費生活相談窓口につながります。「査定額に納得できないのに返送してもらえない」「連絡が取れない」「入金されない」といった買取トラブルについて相談できます。相談の際は、申込時の画面、規約、業者とのやり取りの記録、発送時の追跡番号を手元に用意しておくと話が早く進みます。",
    },
    {
      t: "国民生活センター",
      d: "消費生活に関する情報提供や相談を行う機関です。ウェブサイトでは買取サービスをめぐるトラブルの事例や注意喚起が公開されており、自分のケースに近い事例を確認できます。個別の相談は上記188を通じて地域の窓口へつなぐのが基本です。",
    },
    {
      t: "宅配買取とクーリングオフの考え方",
      d: "特定商取引法のクーリングオフ制度のうち、買取に関係するのは「訪問購入」（業者が自宅などを訪れて物品を買い取る取引）に対するものです。自分から申し込んで端末を送る宅配買取は、一般に訪問購入にはあたらないとされ、クーリングオフの対象外となるのが一般的です。そのため宅配買取では、業者の規約に定められたキャンセル条件が基本になります。「クーリングオフできるから大丈夫」と考えず、申込前に規約を確認してください。",
    },
    {
      t: "出張買取（訪問購入）の場合",
      d: "業者が自宅を訪れて買い取る出張買取は、特定商取引法上の「訪問購入」にあたるのが一般的で、一定期間内であればクーリングオフができる制度があります。また、その期間中は物品の引き渡しを拒むことができるとされています。詳しい条件や対象外となる物品については、消費者庁や国民生活センターの案内で確認してください。宅配買取と出張買取では制度上の扱いが違う、という点を押さえておきましょう。",
    },
  ];

  const faqs = [
    {
      q: "宅配買取は申込から入金までどのくらいかかりますか？",
      a: "業者によって異なるため、一概には言えません。梱包キットの到着、配送、到着後の査定、承諾後の入金、それぞれに日数がかかり、本人確認が本人限定受取郵便などの方式の場合はさらに郵便物の受け取りが必要です。急ぐ場合は、eKYCに対応していて査定日数と入金日数を公式サイトで明記している業者を選ぶのが一つの方法です。",
    },
    {
      q: "梱包キットは必ず使わないといけませんか？",
      a: "多くの業者では、梱包キットを使うか自分で梱包するかを選べます。自分で梱包する場合は、本体を緩衝材で包み、箱の隙間を埋めて動かないようにします。キットの有無・料金は業者によって異なるため、申込時に確認してください。",
    },
    {
      q: "査定額に納得できなかったらキャンセルできますか？返送料はかかりますか？",
      a: "キャンセルできる業者が一般的ですが、返送料の負担は業者負担・自己負担・条件次第と分かれます。また「連絡がなければ自動承諾」となる期限が設定されていることもあります。申込前に規約でキャンセル条件と返送料を確認しておくことが重要です。",
    },
    {
      q: "データを消さずに送ってしまいました。どうすればいいですか？",
      a: "すぐに業者へ連絡し、状況を伝えてください。多くの業者はデータ消去を行うとしていますが、送る前に自分で消去しておくのが原則です。「探す」が有効なままの場合は、Apple IDのウェブサイトから遠隔で端末をアカウントから削除できることがあります。今後は当サイトのデータ消去ガイドの手順で、発送前に済ませてください。",
    },
    {
      q: "宅配買取はクーリングオフできますか？",
      a: "自分から申し込んで端末を送る宅配買取は、一般に特定商取引法の「訪問購入」にはあたらないとされ、クーリングオフの対象外となるのが一般的です。キャンセルは業者の規約に定められた条件に従います。一方、業者が自宅に来て買い取る出張買取は訪問購入にあたるのが一般的で、クーリングオフの制度があります。",
    },
    {
      q: "業者と連絡が取れなくなりました。どこに相談すればいいですか？",
      a: "消費者ホットライン188に電話すると、最寄りの消費生活センターにつながり、買取トラブルについて相談できます。申込時の画面、規約、やり取りの記録、発送時の追跡番号を用意しておくとスムーズです。国民生活センターのウェブサイトでも、買取トラブルの事例と注意点が公開されています。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "宅配買取の流れと梱包方法", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">MAIL-IN BUYBACK FLOW</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          スマホ・PCの宅配買取の流れと梱包方法｜申込から入金まで・トラブル時の相談先
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          宅配買取は、店舗に行かずに全国どこからでもスマホやPCを売れる便利な方法ですが、端末を先に送るという性質上、「送る前の準備」と「査定後の対応」を理解しておかないと、減額や返送で損をすることがあります。このページでは、申込から入金までの一般的な流れ、梱包の仕方、送る前のチェック項目、査定後の減額・キャンセル・返送料の見方、そして万一トラブルになったときの相談先とクーリングオフの考え方を一般知識として整理します。
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

        {/* 流れ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">宅配買取の一般的な流れ（6ステップ）</h2>
          <div className="space-y-5">
            {steps.map((s, i) => (
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
          <p className="mt-3 text-xs text-steel-500">
            ※ 上記は一般的な流れの整理です。各ステップの日数・条件は業者によって異なるため、公式サイトおよび申込時の案内に従ってください。
          </p>
        </section>

        {/* 送る前チェック */}
        <section className="mt-14">
          <h2 className="section-title mb-2">送る前のチェック項目</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            宅配買取で最も多いつまずきが、端末側の準備不足です。以下は発送前に必ず済ませておきたい項目です。詳しい手順は<Link href="/guide/data-shokyo/" className="text-vermilion underline underline-offset-4">データ消去ガイド</Link>と<Link href="/guide/activation-lock/" className="text-vermilion underline underline-offset-4">アクティベーションロック解除ガイド</Link>で解説しています。
          </p>
          <div className="space-y-4">
            {preChecks.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 梱包 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">梱包の仕方</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            輸送中の破損は査定額に直接響きます。梱包キットを使う場合も自分で梱包する場合も、基本は「本体を包む」「箱の中で動かないようにする」「付属品は分けて保護する」の3点です。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {packingRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ バッテリー内蔵機器の輸送条件は運送会社ごとに定められています。最新の条件は利用する運送会社および業者の案内で確認してください。
          </p>
        </section>

        {/* 査定後 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">査定後の減額・キャンセル・返送料・入金の見方</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            宅配買取で後悔しやすいのは、査定結果が出てからの対応です。次の4点を申込前に規約で確認しておくと、査定後に慌てずに済みます。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {afterRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* トラブル */}
        <section className="mt-14">
          <h2 className="section-title mb-6">トラブルになったときの相談先とクーリングオフの考え方</h2>
          <div className="space-y-5">
            {troubles.map((s, i) => (
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
          <p className="mt-3 text-xs text-steel-500">
            ※ 法制度に関する記述は一般的な整理です。個別のケースについては、消費者ホットライン188または最寄りの消費生活センターにご相談ください。
          </p>
        </section>

        {/* 業者選び */}
        <section className="mt-14">
          <h2 className="section-title mb-2">流れを踏まえた業者選びのポイント</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            ここまで見てきたとおり、宅配買取では「送料・梱包キット」「査定日数・入金日数」「キャンセル時の返送料」「本人確認の方式」「データ消去の扱い」が手続きの快適さを左右します。査定額の目安だけでなく、これらの条件を同じ物差しで比較しておくと、申込後のつまずきを避けやすくなります。
          </p>
          <div className="border border-chalk-line bg-chalk-card p-5">
            <h3 className="font-display text-base text-steel-900">当サイトの比較表で確認できること</h3>
            <p className="mt-2 text-[13px] leading-loose text-steel-700">
              <Link href="/compare/" className="text-vermilion underline underline-offset-4">統一比較表</Link>では、掲載各社の公式サイトで確認できた送料・梱包キット・返送料・査定日数・入金・本人確認書類・データ消去の扱いを並べて整理しています。公式で確認できなかった項目は「公式では確認できず」と表示しています。本人確認の仕組みは<Link href="/guide/honnin-kakunin/" className="text-vermilion underline underline-offset-4">本人確認ガイド</Link>で、下取りとの違いは<Link href="/guide/shitadori-hikaku/" className="text-vermilion underline underline-offset-4">下取りと買取の比較</Link>で解説しています。
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">宅配買取の条件を比較表で見る</Link>
            <Link href="/shindan/" className="btn-ghost">売り方診断で確認する</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">宅配買取の流れでよくある質問</h2>
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
              <Link href="/guide/data-shokyo/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売る前のデータ消去・初期化</span>
                <span className="mt-1 block text-xs text-steel-500">発送前に必ず済ませたい手順</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/activation-lock/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">アクティベーションロック（「探す」）の解除</span>
                <span className="mt-1 block text-xs text-steel-500">解除されていないと査定が止まる理由と手順</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/honnin-kakunin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取で本人確認が必要な理由</span>
                <span className="mt-1 block text-xs text-steel-500">宅配買取の本人確認方式と使える書類</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/shitadori-hikaku/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">下取りと買取はどっちが得？</span>
                <span className="mt-1 block text-xs text-steel-500">宅配買取を選ぶ前に知りたい3つの手放し方の違い</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/kowareta/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">画面割れ・故障した端末を売る</span>
                <span className="mt-1 block text-xs text-steel-500">訳あり端末の梱包と査定の注意点</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/houjin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">法人・会社の端末をまとめて売る</span>
                <span className="mt-1 block text-xs text-steel-500">複数台の宅配買取と法人向けの流れ</span>
              </Link>
            </li>
            <li>
              <Link href="/mac/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Mac・MacBookの買取</span>
                <span className="mt-1 block text-xs text-steel-500">大きめの機器を宅配で送るときの対応業者</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取業者の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">送料・返送料・入金・本人確認を同じ物差しで比較</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
