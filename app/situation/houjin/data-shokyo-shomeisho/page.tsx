import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { companies, fmt } from "@/lib/companies";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";

const TITLE = "法人の端末処分とデータ消去証明書｜求められる理由と確認事項";
const DESC =
  "法人がPC・スマホを処分・買取に出す際に求められるデータ消去証明書について、必要となる理由、記載されることが多い項目、依頼前に業者へ確認すべき事項、台帳との照合、社内の承認と記録の保管方法を、一般知識としてご説明します。消去の対応内容は業者により異なります。";
const PATH = "/situation/houjin/data-shokyo-shomeisho/";
const PUBLISHED = "2026-09-11";
const PUBLISHED_LABEL = "2026年9月11日";

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
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  mainEntityOfPage: `${SITE_URL}${PATH}`,
  author: { "@type": "Organization", name: OPERATOR.name },
  publisher: { "@type": "Organization", name: SITE_NAME },
};

export default function HoujinDataShokyoShomeishoPage() {
  const conclusions = [
    "データ消去証明書は、法令で一律に義務付けられた書類ではありません。社内の情報セキュリティ規程、取引先との契約、監査対応のいずれかで、消去の記録を残す必要があると定められているかどうかをまず確認します。社内で要否を決めてから業者を選定すると、手続きが円滑に進みます。",
    "証明書を発行できるか、どの単位（1台ごとか、依頼のまとまりごとか）で発行されるか、記載項目に何が含まれるかは業者により異なります。依頼前にご確認ください。当サイトでは掲載サービスの公式サイト記載の範囲でのみ状況を掲載しています。",
    "台数の多い法人の処分では、証明書の価値は「消去したこと」の記録よりも、「どの端末を消去したかを後から追跡できること」にあります。資産台帳・貸与台帳の管理番号と、証明書に記載される識別情報（シリアル番号など）を照合できる形式になっているかを、事前に確認することが実務上の要点です。",
    "証明書は受領して完了ではなく、保管場所、管理者、保管期間を定めることで初めて機能します。承認の記録（誰が処分を決裁したか）とあわせて保管する運用とすることで、監査や引き継ぎの際に説明できます。",
    "端末ごとの初期化は、証明書の有無にかかわらず、社内で事前に済ませておくことが基本です。具体的な操作手順は、OS別に別ページでご説明しています。",
  ];

  const whyRows = [
    {
      label: "社内の情報セキュリティ規程",
      value:
        "情報資産の廃棄・譲渡について手続きを定めている場合、その手続きの中で「消去の記録を残す」ことが求められている場合があります。規程の文言によって、社内の作業記録で足りるのか、第三者が発行した書面が必要なのかが変わります。まず自社の規程を確認し、判断できない場合は情報システム担当や法務担当にご確認ください。",
    },
    {
      label: "取引先との契約・秘密保持",
      value:
        "受託業務で預かったデータを扱った端末については、契約の中で返却・廃棄の方法や報告義務が定められていることがあります。この場合は「何を、どの方法で、いつ消去したか」を相手方に説明できる形式が必要となるため、書面として残る証明書が選ばれる傾向にあります。契約ごとに求められる内容が異なるため、該当する契約書をご確認ください。",
    },
    {
      label: "監査・内部統制への対応",
      value:
        "外部監査や内部監査で固定資産の除却・譲渡を確認される場面では、処分した端末が実際にどう処理されたかの裏付けを求められることがあります。資産台帳から除却した記録と、端末そのものの処理記録が対応していれば、説明が容易になります。必要な範囲は監査の方針によるため、担当部署にご確認ください。",
    },
    {
      label: "社内への説明・引き継ぎ",
      value:
        "担当者の交代により、端末の処分の経緯がわからなくなることは、法人の端末管理でよく見られる状況です。監査や契約の要請がない場合でも、記録を残しておくことで円滑に引き継げます。この目的であれば、業者発行の証明書でなくても、社内の作業記録と受領書の組み合わせで足りる場合があります。",
    },
  ];

  const itemRows = [
    {
      label: "対象端末の識別情報",
      value:
        "シリアル番号、IMEI、製造番号、型番など、端末を一意に特定できる情報です。台帳と照合する前提であれば、識別情報が一括ではなく1台ごとに記載されるかどうかが重要です。記載の単位は業者により異なるため、依頼前にご確認ください。",
    },
    {
      label: "消去の方法",
      value:
        "ソフトウェアによる消去か、ストレージの物理的な破壊かといった方式の記載です。使用したツールの名称や設定まで記載されるかどうかは、業者によって異なります。社内規程で方式が指定されている場合は、その方式に対応できるかを事前にご確認ください。",
    },
    {
      label: "実施日・実施者",
      value:
        "いつ、どの業者が実施したかの記載です。引き渡しから実施までに日数がある場合は、その間の保管状況もあわせて確認しておくと、社内への説明が容易になります。",
    },
    {
      label: "発行者の情報と押印",
      value:
        "発行した業者の名称・所在地などです。監査や取引先への提出を想定している場合は、提出先が求める体裁（押印の要否、電子データの可否）を事前に確認してから依頼すると、差し戻しを防げます。",
    },
    {
      label: "結果の区分",
      value:
        "消去が正常に完了したのか、故障などで所定の方法では実施できず別の方法（物理破壊など）に切り替えたのかがわかる記載です。起動しない端末が含まれる場合は、その端末の扱いをどのように記録するかもあわせてご確認ください。",
    },
  ];

  const askList = [
    "データ消去証明書（消去報告書）は発行されますか。発行は依頼のまとまりごとですか、1台ごとですか。",
    "証明書にはどの識別情報が記載されますか。シリアル番号やIMEIの単位で記載されますか。",
    "証明書の発行に費用はかかりますか。買取の対象にならなかった端末も証明書の対象に含まれますか。",
    "消去はどの方法で行われますか。社内規程で方式を指定している場合、その方式に対応できますか。",
    "端末を引き渡してから消去が実施されるまで、どのくらいの期間がかかりますか。その間はどこで保管されますか。",
    "証明書はいつ、どの形式（紙・電子データ）で受け取れますか。",
    "起動しない端末や画面が割れて操作できない端末は、どのように扱われますか。",
    "台数がまとまる場合、端末リストを事前に提出する形になりますか。リストの様式は指定がありますか。",
    "法人名義での取引に対応していますか。必要な書類は何ですか。",
  ];

  const flowSteps = [
    {
      t: "処分する端末の洗い出しと台帳との照合",
      d: "資産台帳や貸与台帳から対象を抽出し、現物と照合します。この段階で管理番号とシリアル番号の対応表を作成しておくと、後で受領する証明書との照合が一度で完了します。所有権の確認が必要な端末（リース品など）の区分も、この段階で行います。",
    },
    {
      t: "消去の方針と証明書の要否の決定",
      d: "情報セキュリティ規程や該当する契約を確認し、消去の方法と記録の残し方を決めます。方式に指定がある場合は、その時点で業者を選定する条件が定まります。判断できない項目は、情報システム担当・法務担当・経理担当にご確認ください。",
    },
    {
      t: "決裁の取得と承認記録の保管",
      d: "処分を決定した者がわかる記録を残します。稟議書でも台帳の備考欄でも形式は問いませんが、後から「いつ、誰の承認で処分したか」を確認できることが重要です。証明書があっても承認の記録がない場合、監査での説明が困難になります。",
    },
    {
      t: "社内での初期化と引き渡し",
      d: "業者側の消去のみに依存せず、社内で事前に初期化しておくことで、引き渡しから消去までの間のリスクを低減できます。OS別の具体的な手順は個人向けのデータ消去ガイドと同じ操作になるため、そちらをご参照ください。組織アカウントやMDMの解除は、この前に管理者が済ませておく工程です。",
    },
    {
      t: "引き渡し時の台数と内容の相互確認",
      d: "リストと現物を照合し、受領書や預り証を受け取ります。買取の対象にならなかった端末が出た場合の扱い（返却か処分か）も、この時点で決まっている状態が望ましい形です。",
    },
    {
      t: "証明書の受領・台帳との照合・保管",
      d: "受け取った証明書の識別情報を台帳と照合し、漏れがないかを確認します。照合が完了したら、保管場所と保管期間を定めて社内の記録に残します。担当者以外にもわかる場所にまとめて保管することで、引き継ぎも円滑になります。",
    },
  ];

  const pitfalls = [
    {
      t: "証明書のみで社内手続きが完了すると考える",
      d: "証明書は業者が実施したことの記録であり、社内で誰が処分を決めたかの記録にはなりません。決裁の記録、台帳からの除却処理、証明書の3点がそろって初めて、経緯を説明できる状態になります。会計上の処理は会計方針により扱いが異なるため、経理部門や顧問税理士にご確認ください。",
    },
    {
      t: "識別情報の粒度を確認しないまま依頼する",
      d: "一括単位でのみ発行される形式では、台帳の1台ごとの記録と照合できません。台帳との照合が目的であれば、依頼前に記載の単位をご確認ください。対応は業者により異なります。",
    },
    {
      t: "買取対象外の端末が記録から漏れる",
      d: "査定の結果、買取の対象にならなかった端末が返却されたり、別の扱いになったりすることがあります。これらの端末が証明書の対象から外れると、記録に漏れが生じます。見積の段階で、対象外となった端末の処理方法をご確認ください。",
    },
    {
      t: "組織アカウントの解除を忘れたまま送付する",
      d: "MDMの登録や組織アカウントとの紐づけが残った端末は、初期化しても管理下に戻る設定になっていることがあり、次の利用者が使えません。差し戻しの原因になるため、管理コンソール側の登録解除を先に済ませてください。手順は提供元の公式ドキュメントに従います。",
    },
    {
      t: "起動しない端末の扱いを決めずに含める",
      d: "画面が割れて操作できない端末や電源が入らない端末は、社内での初期化ができません。これらの端末の記録方法や受け入れの可否は業者により異なるため、事前に台数と状態を伝えてご確認ください。",
    },
  ];

  const recordRows = [
    {
      label: "保管する書類",
      value:
        "端末リスト（管理番号とシリアル番号の対応表）、決裁の記録、受領書・預り証、データ消去証明書、買取明細や請求書の5点がそろっていれば、後から経緯を確認できます。",
    },
    {
      label: "保管の場所と責任者",
      value:
        "紙とデータが分散すると、引き継ぎの際に失われるおそれがあります。保管場所と管理者を定めておきます。資産台帳の該当行から書類の保管場所を参照できるようにしておくと、検索の手間が減ります。",
    },
    {
      label: "保管期間",
      value:
        "保管期間は社内規程や関係する契約、会計上の要請によって異なります。一律の目安を当サイトで示すことはできないため、社内の文書管理規程と、該当する契約・会計処理の要請に照らしてご判断ください。",
    },
    {
      label: "台帳側の更新",
      value:
        "証明書を受け取ったら、台帳の該当行に処分の事実と書類の所在を記載し、完了とします。台帳を更新しないまま放置すると、次の棚卸で現物のない資産が残り続けることになります。",
    },
  ];

  const faqs = [
    {
      q: "データ消去証明書は法律で必要と決まっているのですか。",
      a: "一律に義務付けられているものではありません。必要になるかどうかは、社内の情報セキュリティ規程、取引先との契約、監査対応といった個別の事情で決まります。自社にとって必要かどうかは、規程と該当する契約を確認したうえで、情報システム担当・法務担当とご判断ください。当サイトでは一律に必要・不要を判断することはできません。",
    },
    {
      q: "自分たちで初期化すれば証明書は要りませんか。",
      a: "社内の作業記録で足りるかどうかは、求められている記録の性質によります。第三者が実施したことの記録を求められている場合は、社内の初期化だけでは要件を満たさない可能性があります。一方で、社内の引き継ぎのためだけであれば、作業記録と受領書で足りる場合もあります。判断は社内規程と契約の内容によるため、担当部署にご確認ください。",
    },
    {
      q: "証明書があれば、データが復元されないと保証されるのですか。",
      a: "証明書は、業者が所定の方法で消去を実施したことを記録した書面です。復元されないことを当サイトが保証するものではありません。また、消去の効力や確実性は方式・端末・実施内容によって変わります。どの方法でどこまで実施されるかは業者により異なるため、依頼前に方法と範囲をご確認ください。",
    },
    {
      q: "台数が少ない場合でも証明書は発行してもらえますか。",
      a: "発行の条件（最低台数の有無、費用の有無）は業者により異なります。台数がまとまらないと法人向けの窓口では受け付けていない場合もあるため、台数と端末の種類を伝えたうえでご確認ください。掲載サービスについては、公式サイトで確認できた記載の範囲を下の表に掲載しています。",
    },
    {
      q: "買取に出す場合と廃棄する場合で、証明書の扱いは変わりますか。",
      a: "買取では端末が再利用されるため、ストレージを残したままソフトウェアで消去する流れが一般的です。廃棄ではストレージを物理的に破壊する方法が選ばれることもあります。どちらに対応しているか、証明書の記載がどう変わるかは業者により異なるため、処分の方針を伝えたうえでご確認ください。",
    },
    {
      q: "証明書に載る識別情報と、社内の管理番号が違うのですが。",
      a: "多くの場合、証明書にはシリアル番号やIMEIなど端末側の識別情報が記載されます。社内の管理番号とは別の体系となるため、依頼前に管理番号とシリアル番号の対応表を作成し、受領した証明書と照合する運用とします。対応表があれば、台帳の更新も一度で完了します。",
    },
    {
      q: "掲載されている買取サービスは法人に対応していますか。",
      a: "当サイトでは、各社の公式サイトで確認できた記載の範囲でのみ掲載しています。記載が確認できなかった項目は「公式では確認できず」と表示しており、対応していないことを意味するものではありません。法人対応の可否と必要書類は、各社に直接ご確認ください。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "法人のPC・スマホの一括処分・買取", path: "/situation/houjin/" },
          { name: "法人の端末処分とデータ消去証明書", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">FOR BUSINESS</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          法人の端末処分とデータ消去証明書｜求められる理由と確認事項
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          法人が業務用のPC・スマホ・タブレットをまとめて手放す際、個人の売却にはない書類として挙げられるのが、データ消去証明書（消去報告書）です。ただし、この書類はあらゆる場合に必要となるものではなく、記載内容も発行の単位も業者によって異なります。本ページでは、証明書が求められる理由、記載されることが多い項目、依頼前の確認事項を、一般知識として順にご説明します。端末ごとの初期化手順は個人向けの操作と同じため、別ページでご説明しています。
        </p>
        <p className="mt-4 max-w-3xl text-xs leading-loose text-steel-500">
          公開日: {PUBLISHED_LABEL}／本ページは一般的な情報の提供を目的としており、個別の法務・会計・監査上の判断を示すものではありません。消去の対応内容や証明書の発行条件は業者により異なるため、依頼前に必ず各社へご確認ください。
        </p>

        {/* 冒頭の要点 */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">データ消去証明書の要否と確認事項</h2>
          <ul className="mt-4 space-y-3">
            {conclusions.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* なぜ必要になるのか */}
        <section className="mt-14">
          <h2 className="section-title mb-2">証明書が求められる場合</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            法人であれば一律に証明書が必要というわけではありません。実際には、次のいずれかの事情がある場合に必要となります。自社がどれに該当するかを明確にすることで、業者に依頼すべき内容が定まります。該当するものがない場合は、社内の作業記録で足りることもあります。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {whyRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 要否の判断は社内規程・契約内容によります。当サイトでは一律の判断を示すことはできません。社内の担当部署にご確認ください。
          </p>
        </section>

        {/* 記載項目 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">証明書に記載されることが多い項目</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            様式は業者ごとに異なり、統一された書式があるわけではありません。以下に、一般に記載されることが多い項目を掲載します。提出先が決まっている場合は、提出先が求める記載が含まれるかどうかを依頼前にご確認ください。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {itemRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 記載項目・発行単位・費用の有無は業者により異なります。上記がすべて含まれるとは限りません。
          </p>
        </section>

        {/* 質問リスト */}
        <section className="mt-14">
          <h2 className="section-title mb-2">依頼前の確認事項</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            問い合わせの段階で以下の事項を確認しておくと、後から条件が合わずにやり直す事態を避けられます。問い合わせフォームにそのまま転記して使用できる形式としています。
          </p>
          <div className="border border-chalk-line bg-chalk-card p-5">
            <ul className="space-y-3">
              {askList.map((c) => (
                <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                  <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">掲載サービスの条件を比較表で見る</Link>
            <Link href="/situation/houjin/" className="btn-ghost">法人の端末処分の全体像に戻る</Link>
          </div>
        </section>

        {/* 消去方式との関係 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">消去の方法と証明書の関係</h2>
          <div className="max-w-3xl space-y-4 text-sm leading-loose text-steel-600">
            <p>
              証明書は、実施した内容を記録した書面です。そのため、消去の方法が決まらなければ、証明書の記載内容も決まりません。大きく分けると、ストレージを残したままデータを読み出せない状態にする方法と、ストレージそのものを物理的に破壊する方法があります。買取に出す場合は端末が再利用されるため前者が前提になり、廃棄であれば後者が選ばれることもあります。どちらに対応しているか、証明書の記載がどう変わるかは業者により異なるため、処分の方針を伝えたうえでご確認ください。
            </p>
            <p>
              当サイトでは、特定の消去方式や規格を推奨することはしていません。社内規程で方式が指定されている場合は、その指定が優先されます。指定がない場合は、再利用の可否と、社内で説明できる記録が残るかどうかを基準に選択します。業者の案内に方式の名称や認証の有無が記載されている場合も、その内容が自社の要件を満たすかどうかは、記載を確認したうえで社内の担当部署が判断する事項です。
            </p>
            <p>
              なお、業者側での消去の対応があっても、社内で先に初期化しておく運用は有効です。引き渡しから実際に消去が行われるまでには時間があり、輸送と保管の段階のリスクには社内の初期化によってのみ対応できます。OS別の初期化の手順は個人の売却時と同じ操作になるため、
              <Link href="/guide/data-shokyo/" className="text-vermilion underline underline-offset-4">売る前のデータ消去の手順</Link>
              でご説明しています。Apple製品で「探す」が有効なまま送付した場合の対処は
              <Link href="/guide/activation-lock/" className="text-vermilion underline underline-offset-4">アクティベーションロックの解説ページ</Link>
              をご参照ください。
            </p>
          </div>
        </section>

        {/* 進め方 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">台数が多い場合の進め方</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            数台であれば個別に処理できますが、台数が多くなると、各端末の処理状況を追跡できなくなることが最大の課題です。最初に対応表を作成しておけば、最後の照合が一度で完了します。
          </p>
          <div className="space-y-5">
            {flowSteps.map((s, i) => (
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
            <Link href="/guide/data-shokyo/" className="btn-primary">端末ごとの初期化手順を見る</Link>
            <Link href="/guide/takuhai-nagare/" className="btn-ghost">宅配買取の基本の流れを見る</Link>
          </div>
        </section>

        {/* よくある課題 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">よくある課題</h2>
          <div className="space-y-4">
            {pitfalls.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 社内の承認と記録 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">社内の承認と記録の残し方</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            証明書は単体では十分に機能しません。処分を決定した者を示す承認の記録と、各端末の処理状況を示す台帳の更新がそろって初めて、後から経緯を説明できる状態になります。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {recordRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 会計上の除却・売却の処理方法、保管期間の考え方は会計方針や社内規程により異なります。経理部門・顧問税理士にご確認ください。
          </p>
        </section>

        {/* 掲載サービスの記載状況 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">掲載サービスの公式サイト記載（法人対応・データ消去）</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            当サイトに掲載しているサービスについて、公式サイトで確認できた記載をそのまま掲載しています。確認できなかった項目は「公式では確認できず」と表示しており、対応していないことを意味するものではありません。法人対応の可否・必要書類・証明書の発行条件は、各社に直接ご確認ください。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <thead>
                <tr>
                  <th className="w-36 md:w-48">サービス</th>
                  <th>法人対応の記載</th>
                  <th>データ消去の記載</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((c) => (
                  <tr key={c.slug}>
                    <th>
                      <Link href={`/kaitori/${c.slug}/`} className="text-vermilion underline underline-offset-4">
                        {c.name}
                      </Link>
                    </th>
                    <td>{fmt(c.houjin)}</td>
                    <td>{fmt(c.data_erase)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 各社公式サイトの記載を一次確認したものです（確認日は各社ページに記載）。条件は変更されることがあるため、申込前に公式サイトで最新の内容をご確認ください。
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">データ消去証明書に関するよくある質問</h2>
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
              <Link href="/situation/houjin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">法人のPC・スマホの一括処分・買取</span>
                <span className="mt-1 block text-xs text-steel-500">法人の端末処分の全体像</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/houjin/lease-shisan-chui/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">リース品・資産計上した端末を手放す際の注意点</span>
                <span className="mt-1 block text-xs text-steel-500">所有権・残債・社内手続きの確認順</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/houjin/jugyoin-tanmatsu-kaishu/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">従業員の業務端末を回収する際の進め方</span>
                <span className="mt-1 block text-xs text-steel-500">回収漏れ・私物混在・MDM解除</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/data-shokyo/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売る前のデータ消去の手順</span>
                <span className="mt-1 block text-xs text-steel-500">iPhone・Android・Windows・Macの初期化</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/activation-lock/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">アクティベーションロックと「探す」の解除</span>
                <span className="mt-1 block text-xs text-steel-500">解除しないと買取不可になる理由</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/honnin-kakunin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取の本人確認</span>
                <span className="mt-1 block text-xs text-steel-500">古物営業法に基づく確認の基礎知識</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">掲載サービスの統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">データ消去の扱いを同じ基準で比較</span>
              </Link>
            </li>
            <li>
              <Link href="/pc/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Windows PC・ノートPCの買取</span>
                <span className="mt-1 block text-xs text-steel-500">ストレージのデータ消去が要点</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/pc-storage-shokyo/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">PCを売る前のストレージの扱い</span>
                <span className="mt-1 block text-xs text-steel-500">回復キーの確認・ドライブのクリーニング・取り外して売る場合</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
