import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR, PUBLISHED_DATE } from "@/lib/site";

const TITLE = "法人のPC・スマホをまとめて処分・買取に出すには｜データ消去証明と台数対応の確認点";
const DESC =
  "法人が業務用のPC・スマホ・タブレットをまとめて処分・買取に出すときに個人と異なる点を一般知識として整理。資産管理と会計担当への確認、データ消去方式と消去証明書、MDMやActivation Lockの組織アカウント解除、リース・レンタル品の扱い、法人買取の一般的な流れ、古物営業法上の本人確認、確認チェックリストをまとめました。";
const PATH = "/situation/houjin/";

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

export default function HoujinSituationPage() {
  const conclusions = [
    "法人の端末処分は「情報漏えい対策」「資産管理・会計処理」「台数のさばき方」の三つが個人と大きく異なります。売却前に会計担当・情報システム担当と方針をそろえるのが出発点です。",
    "データ消去は、ソフトウェア消去か物理破壊かの方式と、消去証明書（消去報告書）を発行してもらえるかを確認します。監査や取引先への説明に証明書が必要になる場合があります。",
    "MDM（モバイルデバイス管理）の登録解除、Apple Business ManagerやGoogleの組織アカウントからの端末の登録解除、Activation Lockの解除は、法人でつまずきやすい工程です。管理者権限を持つ担当者が事前に行います。",
    "リース品・レンタル品は所有権が法人にないため売却できません。契約書で所有権と返却条件を確認し、返却・買い取りの手続きを先に済ませます。",
    "古物営業法に基づく本人確認は法人取引でも必要とされており、法人の登記情報に加えて担当者の本人確認書類や在籍を示す書類が求められるのが一般的です。",
  ];

  const diffRows = [
    {
      label: "資産管理・会計処理",
      value:
        "業務用端末は固定資産や備品として台帳に登録されていることが一般的です。減価償却が済んでいるか、除却・売却の仕訳をどう処理するか、売却代金の扱いは会計担当・顧問税理士と確認します。台帳から外す手続きと売却の時期を合わせておくと後の説明が楽になります。",
    },
    {
      label: "データ消去証明書",
      value:
        "個人では自分で初期化すれば済みますが、法人では第三者の証明として消去証明書（消去報告書）が求められることがあります。情報セキュリティ方針や取引先との契約、監査対応で必要かどうかを先に確認し、発行できる業者を選びます。",
    },
    {
      label: "台数・出張対応",
      value:
        "数十台から数百台になると、宅配での個別送付は現実的ではありません。まとめて集荷する出張回収、リストによる一括見積、拠点ごとの集荷に対応できるかどうかが業者選びの条件になります。",
    },
    {
      label: "組織アカウントによる管理",
      value:
        "MDMや組織のApple ID・Googleアカウントで管理されている端末は、管理者側で登録解除しないと次の利用者が使えません。個人端末のように本体だけの初期化では不十分な場合があります。",
    },
    {
      label: "契約関係の確認",
      value:
        "リース・レンタルのほか、携帯電話会社の法人契約に付随する端末、補助金で購入した機器など、処分に制約がかかる場合があります。所有権と処分条件を契約書で確認する工程が個人にはない手間です。",
    },
    {
      label: "本人確認と書類",
      value:
        "古物営業法上の本人確認は法人取引でも必要とされ、法人の登記事項証明書などに加え、担当者の本人確認書類や在籍・権限を示す書類が求められるのが一般的です。見積書・請求書・振込先の名義も法人名義でそろえます。",
    },
  ];

  const eraseMethods = [
    {
      t: "ソフトウェア消去（データ消去ソフトによる上書き）",
      d: "ストレージ全体に無意味なデータを書き込み、元のデータを復元できない状態にする方式です。SSDについては上書きに加えて機器のコマンドによる消去（Secure Eraseなど）を用いる方法が一般に案内されています。端末を再利用（再販）できるため、買取と組み合わせやすい方式です。消去ソフトの名称・方式・ログの有無を業者に確認します。",
    },
    {
      t: "物理破壊（穴あけ・破砕・磁気消去）",
      d: "ストレージに穴を開ける、破砕する、HDDに強い磁気をかけて読み取り不能にする方式です。再利用はできませんが、消去の確実性を重視する場合に選ばれます。ストレージだけ破壊して本体を売却するという組み合わせを受け付ける業者もあります。磁気消去はSSDには効かないとされている点に注意が必要です。",
    },
    {
      t: "消去証明書（消去報告書）の発行可否",
      d: "消去した端末のシリアル番号・消去方式・実施日・実施者などを記載した証明書を発行できるかどうかは、業者ごとに対応が異なります。発行の有無、費用の有無、記載項目、発行までの期間を事前に確認してください。台帳と突き合わせるため、シリアル番号単位での記載があるかどうかも確認したい点です。",
    },
    {
      t: "消去のタイミングと保管",
      d: "端末を引き渡してから消去されるまでの間、どこに保管され、誰がアクセスできるのかも情報漏えい対策の観点では重要です。集荷から消去までの流れと保管方法が公式サイトや契約書で説明されているかを見ます。社内で先に初期化してから引き渡す運用にすれば、輸送中のリスクを下げられます。",
    },
  ];

  const orgAccount = [
    {
      t: "MDMからの登録解除",
      d: "MDM（モバイルデバイス管理）で管理されている端末は、管理コンソールから該当端末を「登録解除」または「削除」してから初期化します。登録が残ったままだと、初期化後に再びMDMの管理下に戻る（自動登録される）設定になっていることがあり、買取業者側で再利用できません。",
    },
    {
      t: "Apple Business Manager・自動デバイス登録",
      d: "Apple Business Manager（ABM）に登録されたiPhone・iPad・Macは、初期化しても組織に紐づいた状態で再登録される仕組みです。売却前にABMの管理者が端末を組織から「リリース」する必要があるとされています。リリースは取り消せない操作のため、台帳と照合してから実行します。",
    },
    {
      t: "Activation Lock（「探す」）の組織アカウント解除",
      d: "個人のApple IDではなく、管理対象Apple IDや業務用のアカウントで「探す」が有効になっている場合、そのアカウントの持ち主か管理者が解除する必要があります。退職者のアカウントで有効になっている端末は解除が難しくなるため、退職時のオフボーディング手順に「探す」の無効化を含めておくと後で困りません。",
    },
    {
      t: "Android・Windowsの組織アカウント",
      d: "Android Enterprise（管理対象デバイス）やGoogle Workspaceで管理されている端末はデバイス保護（FRP）の解除と管理からの削除を、Windows PCはAzure AD（Entra ID）やIntuneからの登録解除とBitLockerの回復キーの管理を、それぞれ管理者が行います。組織アカウントが残った端末は次の利用者がセットアップできないため、買取業者から差し戻される原因になります。",
    },
  ];

  const leaseNotes = [
    {
      t: "リース品は所有権がリース会社にある",
      d: "リース契約の端末は、使用しているのが自社であっても所有権はリース会社にあります。売却するとリース会社の資産を無断で処分することになるため、契約満了時の返却または再リース、買い取りの手続きを契約書で確認します。買い取りが可能な契約であれば、所有権が移ってから買取に出せます。",
    },
    {
      t: "レンタル品・携帯電話会社の法人契約端末",
      d: "レンタル品も同様に返却が原則です。携帯電話会社の法人契約に付随して支給・割賦購入した端末は、支払い完了前だと売却に制約がかかる場合があります。契約内容と残債の有無を確認してください。",
    },
    {
      t: "補助金・助成金で購入した機器",
      d: "補助金で取得した機器には、一定期間の処分制限（財産処分の制限）が付されることがあるとされています。対象の機器を売却する場合は、交付元の規程で処分の手続きが必要かどうかを確認します。",
    },
  ];

  const flowSteps = [
    {
      t: "問い合わせ・概算見積",
      d: "端末の種類・台数・おおよその年式・状態・所在地を伝えて、対応可否と概算を確認します。法人向けの窓口やフォームを用意している業者では、この段階で消去証明書の発行や出張回収の可否も質問しておきます。",
    },
    {
      t: "端末リストの提出",
      d: "機種名・型番・シリアル番号・状態・付属品を一覧にして提出します。資産台帳から書き出せる場合は、台帳の番号も添えておくと後の消去証明書との突き合わせが楽になります。この時点で概算が精査されます。",
    },
    {
      t: "集荷・引き渡し",
      d: "台数が多い場合は出張での集荷、少ない場合は宅配での送付が一般的です。引き渡し時に台数と内容を双方で確認し、受領書や預り証を受け取ります。輸送中の事故に備えて、事前に社内で初期化しておく運用が望ましいとされています。",
    },
    {
      t: "査定・結果の通知",
      d: "端末ごとの査定結果が一覧で通知されます。リストと突き合わせて、買取対象外となった端末の扱い（返送か処分か、処分費用の有無）を確認します。納得できない場合のキャンセル条件と返送費用の負担も、この段階までに把握しておきます。",
    },
    {
      t: "請求書・振込・消去証明書の受領",
      d: "法人取引では、買取金額の明細と請求書（または買取明細書）、振込による入金が一般的です。消去証明書は消去完了後に発行されるため、受領時期を確認しておきます。振込先は法人名義の口座が原則で、個人口座への振込は断られるのが通例です。",
    },
  ];

  const honninPoints = [
    {
      t: "法人でも本人確認は必要",
      d: "古物営業法では、買取業者は相手方の確認を行うことが求められており、これは相手が法人の場合も同様とされています。法人の名称・所在地を確認する書類と、実際に取引にあたる担当者の本人確認書類の両方が求められるのが一般的です。",
    },
    {
      t: "求められやすい書類",
      d: "法人側は登記事項証明書（履歴事項全部証明書など）や法人番号がわかる書類、担当者側は運転免許証などの本人確認書類、担当者が法人を代表して取引する権限を示す書類（委任状・社員証・名刺など、業者の求めに応じたもの）が求められることがあります。業者ごとに必要書類が異なるため、事前に一覧を確認してください。",
    },
    {
      t: "非対面（宅配）取引の場合",
      d: "宅配買取のような非対面取引では、法令で定められた方法での本人確認が必要とされており、書類のコピーの送付だけでは足りない場合があります。法人取引でどの方法に対応しているかは業者の案内で確認します。詳細は本人確認のガイドページで整理しています。",
    },
  ];

  const checklist = [
    "処分対象の端末を資産台帳と照合し、減価償却・除却・売却の処理方針を会計担当・顧問税理士と確認した",
    "リース・レンタル・割賦・補助金取得の端末を除外し、契約書で所有権と処分条件を確認した",
    "情報セキュリティ方針に照らし、消去方式（ソフトウェア消去・物理破壊）と消去証明書の要否を決めた",
    "MDM・Apple Business Manager・Android Enterprise・Intuneなどの管理コンソールから対象端末を登録解除した",
    "Activation Lock（「探す」）とデバイス保護（FRP）を、管理者または該当アカウントの持ち主が解除した",
    "退職者アカウントで有効なロックが残っていないか確認した",
    "社内で初期化を実施し、SIMカード・SDカード・セキュリティキーなどを抜き取った",
    "機種・型番・シリアル番号・状態を記載した端末リストを作成した",
    "法人の登記事項証明書と担当者の本人確認書類・権限を示す書類を準備した",
    "業者の公式サイトで、法人対応・出張回収・消去証明書の発行・買取不可端末の処分条件・返送費用を確認した",
    "見積書・請求書・振込先が法人名義でそろっている",
    "消去証明書の受領後、シリアル番号を台帳と突き合わせて記録を保管する",
  ];

  const faqs = [
    {
      q: "法人のPCやスマホは個人と同じ買取サービスに出せますか？",
      a: "業者によって異なります。個人向けの宅配買取をそのまま法人にも開放している業者もあれば、法人専用の窓口や出張回収を設けている業者、法人取引は受け付けない業者もあります。台数・消去証明書の要否・出張の有無で条件が変わるため、公式サイトの法人対応の記載を確認したうえで問い合わせてください。当サイトの比較表では各社の公式で確認できた「法人対応」を並べています。",
    },
    {
      q: "データ消去証明書は必ず必要ですか？",
      a: "法令で一律に義務付けられているものではなく、社内の情報セキュリティ方針、取引先との契約、監査対応などで必要になるかどうかが決まります。個人情報や機密情報を扱った端末については、第三者による消去の記録として証明書を残しておく運用が一般に推奨されています。要否は情報システム担当・法務担当と確認してください。",
    },
    {
      q: "減価償却が終わっていない端末を売却しても問題ありませんか？",
      a: "売却自体は可能ですが、帳簿価額と売却額の差を固定資産売却損益として処理するなど、会計上の手続きが必要になります。処理の方法は法人の会計方針によるため、売却前に会計担当や顧問税理士に確認してください。除却して処分する場合と売却する場合で処理が異なる点も相談の対象です。",
    },
    {
      q: "MDMの登録を解除しないまま送ってしまうとどうなりますか？",
      a: "初期化後も端末が組織の管理下に戻る設定になっていることがあり、買取業者側で再利用できないため、買取不可や差し戻し、減額の原因になるとされています。Apple Business Managerに登録されたApple製品は、管理者が組織から端末をリリースしないと同様の状態が続きます。送付前に管理コンソールで登録解除を済ませてください。",
    },
    {
      q: "リースが満了した端末は売却できますか？",
      a: "リース満了後の扱いは契約によります。返却が原則の契約であればリース会社に返却し、再リースや買い取り（所有権の移転）が可能な契約であれば、所有権が自社に移った後に売却できます。契約書とリース会社の案内で確認してください。",
    },
    {
      q: "担当者個人の本人確認書類も必要ですか？",
      a: "古物営業法に基づく確認は法人取引でも必要とされており、法人の登記情報に加え、取引にあたる担当者の本人確認書類や、法人を代表して取引する権限を示す書類が求められるのが一般的です。必要書類は業者ごとに異なるため、申込前に一覧を確認してください。",
    },
    {
      q: "買取不可と判断された端末はどうなりますか？",
      a: "返送されるか、業者側で処分（廃棄・リサイクル）されるかは業者の規定によります。処分の場合は費用の有無や消去証明書の対象に含まれるかどうかも確認が必要です。台数が多い法人取引では、買取対象外端末の処分条件を見積段階で確認しておくと後の手戻りを防げます。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "法人のPC・スマホをまとめて処分・買取に出すには", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">FOR BUSINESS</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          法人のPC・スマホをまとめて処分・買取に出すには｜データ消去証明と台数対応の確認点
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          入れ替えで不要になった業務用のノートPC、社用スマホ、タブレットをまとめて手放すとき、個人の売却とは別の確認事項が加わります。資産台帳と会計処理、情報漏えい対策としてのデータ消去と証明書、MDMや組織アカウントの解除、リース品の扱い、古物営業法上の本人確認。このページでは、法人の端末処分・買取で一般に必要になる確認点と流れを整理します。個別の会計・法務の判断は、担当部署や専門家への確認を前提にしてください。
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

        {/* 個人との違い */}
        <section className="mt-14">
          <h2 className="section-title mb-2">法人の端末処分で個人と違う点</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            端末を初期化して送る、という基本は個人と同じです。違いは「会社の資産として記録がある」「会社の情報が入っている」「台数が多い」「担当者が代理で取引する」という四点から生じます。項目ごとに整理しました。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {diffRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 会計処理・税務上の扱いは法人ごとの会計方針によります。会計担当・顧問税理士に確認してください。
          </p>
        </section>

        {/* データ消去 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">情報漏えい対策としてのデータ消去と証明書</h2>
          <div className="space-y-5">
            {eraseMethods.map((s, i) => (
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
            <Link href="/compare/" className="btn-ghost">データ消去の扱いを比較表で見る</Link>
          </div>
        </section>

        {/* 組織アカウント */}
        <section className="mt-14">
          <h2 className="section-title mb-6">MDM・組織アカウント・Activation Lockの解除</h2>
          <div className="space-y-4">
            {orgAccount.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 各管理サービスの操作手順は提供元の公式ドキュメントに従ってください。「探す」の個人向け解除手順は<Link href="/guide/activation-lock/" className="text-vermilion underline underline-offset-4">アクティベーションロックの解説ページ</Link>で整理しています。
          </p>
        </section>

        {/* リース・レンタル */}
        <section className="mt-14">
          <h2 className="section-title mb-6">リース品・レンタル品は売却できない</h2>
          <div className="space-y-4">
            {leaseNotes.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 流れ */}
        <section className="mt-14">
          <h2 className="section-title mb-2">法人買取の一般的な流れ</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            法人向けの買取は、個人の宅配買取に「リスト提出」「請求書」「消去証明書」が加わった流れになるのが一般的です。業者によって順序や名称は異なります。
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
            <Link href="/guide/takuhai-nagare/" className="btn-primary">宅配買取の基本の流れを見る</Link>
            <Link href="/shindan/" className="btn-ghost">売り方診断で確認する</Link>
          </div>
        </section>

        {/* 本人確認 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">古物営業法上の本人確認は法人でも必要</h2>
          <div className="space-y-4">
            {honninPoints.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* チェックリスト */}
        <section className="mt-14">
          <h2 className="section-title mb-6">法人の端末処分・買取の確認チェックリスト</h2>
          <div className="border border-chalk-line bg-chalk-card p-5">
            <ul className="space-y-3">
              {checklist.map((c) => (
                <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                  <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">法人の端末買取でよくある質問</h2>
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
                <span className="font-display text-steel-900">売る前のデータ消去ガイド</span>
                <span className="mt-1 block text-xs text-steel-500">iPhone・Android・Mac・Windowsの初期化手順</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/activation-lock/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">アクティベーションロック（「探す」）の解除</span>
                <span className="mt-1 block text-xs text-steel-500">解除しないと買取不可になる理由と手順</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/honnin-kakunin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取の本人確認について</span>
                <span className="mt-1 block text-xs text-steel-500">古物営業法に基づく確認の一般知識</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/takuhai-nagare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">宅配買取の流れ</span>
                <span className="mt-1 block text-xs text-steel-500">申込から入金までの一般的な手順</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/kowareta/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">壊れた・起動しないスマホやPCの売り方</span>
                <span className="mt-1 block text-xs text-steel-500">故障端末の扱いと処分先の一般知識</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取業者の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">法人対応・データ消去の扱いを同じ物差しで</span>
              </Link>
            </li>
            <li>
              <Link href="/pc/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Windows PC・ノートPCの買取</span>
                <span className="mt-1 block text-xs text-steel-500">ストレージのデータ消去が要点</span>
              </Link>
            </li>
            <li>
              <Link href="/mac/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Mac・MacBookの買取</span>
                <span className="mt-1 block text-xs text-steel-500">Mac専門業者と初期化の要点</span>
              </Link>
            </li>
            <li>
              <Link href="/iphone/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">iPhoneの買取</span>
                <span className="mt-1 block text-xs text-steel-500">機種別の売り方と対応業者</span>
              </Link>
            </li>
            <li>
              <Link href="/android/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Androidスマホの買取</span>
                <span className="mt-1 block text-xs text-steel-500">メーカー別の注意点と対応業者</span>
              </Link>
            </li>
            <li>
              <Link href="/tablet/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">iPad・タブレットの買取</span>
                <span className="mt-1 block text-xs text-steel-500">Wi-Fi・セルラーの違いと注意点</span>
              </Link>
            </li>
            <li>
              <Link href="/shindan/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売り方診断</span>
                <span className="mt-1 block text-xs text-steel-500">状況に合うカテゴリをルールベースで判定</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
