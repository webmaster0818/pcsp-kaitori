import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR, PUBLISHED_DATE } from "@/lib/site";

const TITLE = "買取で本人確認が必要な理由｜古物営業法と宅配買取の本人確認方法";
const DESC =
  "スマホ・PCを売るときに本人確認書類を求められるのは古物営業法に基づく手続きです。宅配買取（非対面取引）で使われる本人確認の方式、運転免許証・マイナンバーカード・パスポートなどよく使われる書類、住所が違うとき・未成年・法人の場合の一般的な扱い、個人情報の取り扱いで確認したい点を解説します。";
const PATH = "/guide/honnin-kakunin/";

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

export default function HonninKakuninGuidePage() {
  const conclusions = [
    "買取で本人確認を求められるのは、業者側の任意ルールではなく古物営業法に基づく手続きです。古物商は中古品を買い受けるとき、相手方の住所・氏名・職業・年齢を確認することが義務づけられています。",
    "宅配買取のような非対面の取引では、本人確認書類の写しの送付と、本人限定受取郵便などを組み合わせる方式や、スマホで顔写真と書類を撮影するeKYCなど、複数の方式が定められています。どの方式を採用しているかは業者によって異なります。",
    "よく使われる書類は運転免許証・マイナンバーカード（表面）・パスポートなどですが、受け付ける書類の種類と有効条件は業者ごとに違います。申込前に公式サイトの案内を確認しましょう。",
    "書類の住所と現住所が違う場合は追加書類が必要になるのが一般的です。未成年は保護者の同意、法人は登記事項証明書などの法人確認が求められるのが一般的です。",
  ];

  const methods = [
    {
      label: "本人確認書類の写しの送付",
      value:
        "運転免許証などのコピーや画像を、端末と一緒に同梱したり、申込フォームからアップロードしたりする方式です。書類の写しだけでは本人が送っているかを確認しきれないため、後述の本人限定受取郵便などと組み合わせる運用が一般的です。",
    },
    {
      label: "本人限定受取郵便・転送不要郵便との組み合わせ",
      value:
        "業者が書類記載の住所へ郵便物を送り、本人だけが受け取れる仕組みで住所と本人の一致を確認する方式です。書類の写しの送付とセットで使われ、郵便が届くまで手続きが進まない分、入金までの日数が延びることがあります。",
    },
    {
      label: "eKYC（オンライン本人確認）",
      value:
        "スマホのカメラで本人確認書類と自分の顔を撮影し、その場で照合する方式です。書類の厚みを確認するために傾けて撮影するなど、画面の案内に従って操作します。郵便物を待たずに完了できるため、対応している業者では宅配買取の手続きが早く進みやすい方式です。",
    },
    {
      label: "ICチップの読み取り",
      value:
        "マイナンバーカードや運転免許証のICチップをスマホで読み取り、記録された情報で本人確認を行う方式です。専用アプリが必要になることがあり、対応状況は業者によって異なります。",
    },
  ];

  const documents = [
    {
      label: "運転免許証",
      value:
        "顔写真・住所・氏名・生年月日がそろっており、宅配買取で広く受け付けられている書類です。有効期限内であること、裏面に住所変更の記載があれば裏面も提出することが求められるのが一般的です。",
    },
    {
      label: "マイナンバーカード（表面のみ）",
      value:
        "顔写真付きの本人確認書類として使えます。個人番号が記載された裏面は提出不要、あるいは提出しないよう案内している業者が一般的です。通知カードは本人確認書類として扱われないのが一般的です。",
    },
    {
      label: "パスポート",
      value:
        "顔写真付きの書類として使えますが、発行時期によっては住所の記載欄がないため、住所を確認できる別の書類を求められることがあります。",
    },
    {
      label: "健康保険証・住民票の写しなど",
      value:
        "顔写真のない書類は、単独では受け付けない、または他の書類との組み合わせを求めるなど、扱いが業者によって分かれます。健康保険証は記号・番号を隠すよう案内されることが一般的です。",
    },
    {
      label: "在留カード・特別永住者証明書",
      value:
        "外国籍の方の場合に使われる書類です。受付可否や必要な追加書類は業者によって異なるため、事前に確認してください。",
    },
  ];

  const cases = [
    {
      t: "書類の住所と現住所が違う場合",
      d: "引っ越し後に住所変更をしていない運転免許証などは、そのままでは本人確認に使えないのが一般的です。住所変更を済ませてから申し込むのが確実ですが、急ぐ場合は、現住所が記載された公共料金の領収書や住民票の写しなど、発行から一定期間内の補助書類の提出で対応している業者もあります。宅配買取で本人限定受取郵便を使う方式の場合、郵便物は書類の住所に送られるため、現住所と一致していないと手続きが止まる点に注意してください。",
    },
    {
      t: "未成年（18歳未満）の場合",
      d: "未成年からの買い受けは、保護者の同意書の提出や、保護者名義での申込を求めるのが一般的です。年齢の下限を設けて、一定の年齢未満からは買い取らないとしている業者もあります。同意書の書式は業者が用意していることが多いため、申込前に公式サイトで確認しましょう。成年年齢の引き下げにより、18歳・19歳は保護者の同意なしで申し込めるのが一般的ですが、各社の規定に従ってください。",
    },
    {
      t: "法人・個人事業主の場合",
      d: "法人名義で端末を売る場合は、個人の本人確認に加えて、登記事項証明書などの法人確認書類と、担当者の本人確認書類・在籍を示す書類が求められるのが一般的です。台数が多い法人向けの買取では、見積書や請求書の発行、データ消去証明書の発行など個人向けとは別の流れになることも多いため、法人対応を明記している業者を選ぶと手続きがスムーズです。",
    },
    {
      t: "家族名義の端末や、代理で売る場合",
      d: "古物営業法の本人確認は「売る人」に対して行われるため、原則として端末を送る本人の書類が必要です。家族の端末をまとめて売る場合でも、申込者本人の名義で手続きし、本人確認は申込者について行われるのが一般的です。他人になりすまして売ることはできません。故人の端末など特殊なケースは、業者に個別に相談してください。",
    },
  ];

  const cautions = [
    {
      t: "本人確認の目的は盗品・不正品の流通防止",
      d: "古物営業法が本人確認を義務づけているのは、盗まれた品物が中古市場に流れ込むのを防ぎ、万一流れた場合に警察が追跡できるようにするためです。古物商には取引の記録を残す義務もあり、本人確認はその記録の一部になります。「面倒な手続き」と感じるかもしれませんが、きちんと本人確認をする業者ほど法令に沿った運営をしていると見ることもできます。逆に、本人確認をまったく求めない買取は、法令上の運用として問題がある可能性を疑ってよいでしょう。",
    },
    {
      t: "書類の送り方を確認してから送る",
      d: "コピーを同梱するのか、フォームにアップロードするのか、アプリで撮影するのかは業者によって違います。指示と違う方法で送ると、確認が取れず査定や入金が止まることがあります。マイナンバーカードの裏面や健康保険証の記号・番号など、送らないように案内されている部分は、案内どおりに隠す・送らないを徹底しましょう。",
    },
    {
      t: "個人情報の取り扱いを事前に確認する",
      d: "本人確認書類には氏名・住所・生年月日・顔写真という重要な個人情報が含まれます。プライバシーポリシーで、書類の保管期間、利用目的、第三者提供の有無、問い合わせ窓口が明記されているかを確認しましょう。古物営業法上の記録は一定期間の保存が求められるため、「すぐに破棄」とはならないのが一般的です。保存期間や管理方法について説明が見当たらない場合は、申込前に問い合わせて確認するのが安心です。",
    },
    {
      t: "宅配買取では本人確認と「探す」の解除がセットで必要",
      d: "本人確認は取引の手続き上の要件ですが、それとは別に、iPhoneやMacの「探す」（アクティベーションロック）が有効なままだと、業者側で初期化できず査定が進まない、または減額・返送となるのが一般的です。書類の準備と同時に、端末側の準備も済ませておきましょう。",
    },
  ];

  const faqs = [
    {
      q: "スマホを売るだけなのに、なぜ免許証などの本人確認書類が必要なのですか？",
      a: "古物営業法に基づき、古物商（買取業者）は中古品を買い受けるときに相手方の住所・氏名・職業・年齢を確認することが義務づけられているためです。盗品が中古市場に流れることを防ぐ目的があり、業者が独自に決めているルールではありません。宅配・店頭・出張のいずれの買取方法でも本人確認は行われます。",
    },
    {
      q: "宅配買取の本人確認はどのような方法で行われますか？",
      a: "非対面の取引では、本人確認書類の写しを送り、業者から本人限定受取郵便などを送って本人と住所を確認する方式や、スマホで書類と顔を撮影するeKYCなど、複数の方式が定められています。どの方式を採用しているかは業者によって異なるため、申込前に公式サイトで確認してください。eKYCに対応している業者では、郵便物を待たずに手続きが進むことがあります。",
    },
    {
      q: "マイナンバーカードを使う場合、裏面も送る必要がありますか？",
      a: "本人確認では顔写真と住所・氏名が記載された表面が使われ、個人番号が記載された裏面は提出不要、または提出しないよう案内されるのが一般的です。誤って裏面を送らないように注意してください。通知カード（紙のカード）は本人確認書類として扱われないのが一般的です。",
    },
    {
      q: "引っ越したばかりで免許証の住所が古いままです。売れますか？",
      a: "そのままでは本人確認に使えないのが一般的です。住所変更を済ませてから申し込むのが確実ですが、現住所が確認できる公共料金の領収書や住民票の写しなどを補助書類として受け付ける業者もあります。本人限定受取郵便で確認する方式の場合は書類記載の住所に郵便物が届くため、現住所との不一致は手続きが止まる原因になります。",
    },
    {
      q: "未成年でもスマホを売れますか？",
      a: "未成年からの買い受けは、保護者の同意書の提出や保護者名義での申込を求めるのが一般的です。年齢の下限を設けている業者もあります。同意書の書式や年齢条件は業者によって異なるため、公式サイトの案内を確認してください。",
    },
    {
      q: "送った本人確認書類はどのように扱われますか？",
      a: "古物営業法上、古物商には取引の記録を一定期間保存することが求められるため、本人確認の情報もすぐには破棄されないのが一般的です。保管期間、利用目的、第三者提供の有無はプライバシーポリシーに記載されているはずなので、申込前に確認しましょう。記載が見当たらない場合は、業者に直接問い合わせることをおすすめします。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "買取で本人確認が必要な理由", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">IDENTITY VERIFICATION</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          買取で本人確認が必要な理由｜古物営業法と宅配買取の本人確認方法
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          スマホやPCを買取に出そうとすると、ほぼ必ず運転免許証などの本人確認書類を求められます。「個人情報を送るのは不安」「なぜ必要なのか分からない」という声は多いのですが、これは業者の都合ではなく法律に基づく手続きです。このページでは、本人確認が必要な理由、宅配買取（非対面取引）で使われる確認方式、よく使われる書類、住所が違う・未成年・法人といったケース別の扱い、そして個人情報の取り扱いで確認しておきたい点を一般知識として整理します。
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

        {/* なぜ必要か */}
        <section className="mt-14">
          <h2 className="section-title mb-2">本人確認は古物営業法に基づく義務</h2>
          <p className="mb-4 max-w-3xl text-sm leading-loose text-steel-600">
            中古品の売買を業として行う事業者は「古物商」として都道府県公安委員会の許可を受けており、古物営業法の規制を受けます。古物営業法では、古物商が古物を買い受けるときに、相手方の住所・氏名・職業・年齢を確認することが義務づけられています。スマホやPCも古物にあたるため、買取業者は個人から端末を買い取るたびにこの確認を行う必要があります。
          </p>
          <p className="mb-4 max-w-3xl text-sm leading-loose text-steel-600">
            この規制の目的は、盗品が中古市場に流れ込むのを防ぐこと、そして万一流れた場合に取引の記録から追跡できるようにすることです。古物商には取引の年月日・品目・相手方の情報などを帳簿等に記録して保存する義務もあり、本人確認はその記録の出発点になります。業者の公式サイトに「古物商許可番号」が記載されているのは、この許可を受けて営業していることを示すためです。
          </p>
          <p className="max-w-3xl text-sm leading-loose text-steel-600">
            なお、少額の取引では確認が省略できる例外があるとされていますが、スマホやPCのような品目は例外の対象外として扱われるのが一般的で、金額にかかわらず本人確認が求められると考えておくのが無難です。
          </p>
        </section>

        {/* 非対面の方式 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">宅配買取（非対面取引）で使われる本人確認の方式</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            店頭買取では書類を提示して対面で確認しますが、宅配買取は相手と顔を合わせません。そのため非対面の取引については、本人であることを確認するための方式が複数定められています。代表的なものを整理します。どの方式を採用しているかは業者ごとに異なります。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {methods.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 上記は一般的な方式の整理です。実際に採用されている方式と手順は、各業者の公式サイトおよび申込時の案内に従ってください。
          </p>
        </section>

        {/* 書類 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">よく使われる本人確認書類</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            受け付ける書類の種類は業者によって異なりますが、多くの業者で使われている書類と、提出時に気をつけたい点をまとめます。いずれも有効期限内であること、氏名・住所・生年月日がはっきり読めることが前提です。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {documents.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ケース別 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">ケース別の扱い（住所が違う・未成年・法人など）</h2>
          <div className="space-y-5">
            {cases.map((s, i) => (
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

        {/* 注意点 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">本人確認まわりで気をつけたいこと</h2>
          <div className="space-y-4">
            {cautions.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 業者選び */}
        <section className="mt-14">
          <h2 className="section-title mb-2">本人確認の条件を比較の軸に加える</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            本人確認の方式は、入金までの早さや手続きの手間に直結します。郵便物を待つ方式か、eKYCでその場で完了する方式か、受け付ける書類は何かを、送料や返送料と同じ物差しで確認しておくと、申込後に「書類が使えなかった」「郵便が届かず止まった」といったつまずきを避けやすくなります。
          </p>
          <div className="border border-chalk-line bg-chalk-card p-5">
            <h3 className="font-display text-base text-steel-900">当サイトの比較表で確認できること</h3>
            <p className="mt-2 text-[13px] leading-loose text-steel-700">
              当サイトの<Link href="/compare/" className="text-vermilion underline underline-offset-4">統一比較表</Link>では、掲載各社の公式サイトで確認できた本人確認書類の条件を、送料・返送料・入金・データ消去の扱いと並べて整理しています。公式で確認できなかった項目は「公式では確認できず」と正直に表示していますので、不明な点は申込前に各社へ直接確認してください。
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">本人確認の条件を比較表で見る</Link>
            <Link href="/shindan/" className="btn-ghost">売り方診断で自分に合う方法を確認する</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">買取の本人確認でよくある質問</h2>
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
                <span className="mt-1 block text-xs text-steel-500">申込から入金まで・本人確認書類を送るタイミング</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/data-shokyo/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売る前のデータ消去・初期化</span>
                <span className="mt-1 block text-xs text-steel-500">書類と一緒に済ませておきたい端末側の準備</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/activation-lock/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">アクティベーションロック（「探す」）の解除</span>
                <span className="mt-1 block text-xs text-steel-500">解除されていないと査定が進まない理由</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/shitadori-hikaku/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">下取りと買取はどっちが得？</span>
                <span className="mt-1 block text-xs text-steel-500">キャリア下取り・Apple Trade In・買取店の違い</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/houjin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">法人・会社の端末をまとめて売る</span>
                <span className="mt-1 block text-xs text-steel-500">法人確認書類・データ消去証明書の一般知識</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取業者の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">本人確認書類・送料・入金を同じ物差しで比較</span>
              </Link>
            </li>
            <li>
              <Link href="/iphone/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">iPhoneの買取</span>
                <span className="mt-1 block text-xs text-steel-500">機種別の売り方と対応業者</span>
              </Link>
            </li>
            <li>
              <Link href="/pc/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Windows PC・ノートPCの買取</span>
                <span className="mt-1 block text-xs text-steel-500">データ消去の責任が重いカテゴリの注意点</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
