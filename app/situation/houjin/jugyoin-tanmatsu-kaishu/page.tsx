import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";

const TITLE = "従業員の業務端末を回収する際の進め方｜回収漏れ・私物混在・MDM解除";
const DESC =
  "退職や機種の入れ替えに伴い、従業員から業務用のPC・スマホを回収する際の進め方を、一般知識としてご説明します。貸与台帳の整備、回収の連絡と期限、回収漏れへの対処、私物と会社資産の区分、MDMや組織アカウントの解除、受領記録の保管までを掲載しています。";
const PATH = "/situation/houjin/jugyoin-tanmatsu-kaishu/";
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

export default function HoujinJugyoinTanmatsuKaishuPage() {
  const conclusions = [
    "回収が滞る原因は、主に次の3点です。誰がどの端末を所持しているか把握できていない（台帳の不備）、私物と会社資産が混在している、管理用のアカウントが端末に残っている。これらを事前に解消しておくことで、回収は通常の事務作業として進められます。",
    "台帳は、「誰に」「いつ」「どの端末を」貸与したかを1台ごとに確認できる状態にしておくことが前提です。貸与時に記録を取る運用がない場合は、回収の前に棚卸を行い、現状を把握することから始めます。",
    "私物の端末を業務に使っていた場合、その端末は会社の資産ではないため回収の対象になりません。一方で業務データが残っている可能性はあります。扱いは社内規程と本人との取り決めによるため、人事・法務担当とご相談ください。",
    "MDMや組織アカウントの登録解除は、回収した後に管理者が行う工程です。順番を誤ると端末の初期化がやり直しになるため、回収・解除・初期化の順番を決めてから作業を進めます。各サービスの操作は提供元の公式ドキュメントに従ってください。",
    "回収後は受領の記録を残し、台帳を更新して完了とします。ここまで対応することで、売却や返却といった次の工程にそのまま引き継げる状態になります。",
  ];

  const difficultyRows = [
    {
      label: "回収漏れ",
      value:
        "貸与の記録がない、複数台を貸していたことを忘れている、周辺機器や予備機が数えられていない、といった理由で発生します。退職の手続きが始まってから台帳を確認しても間に合わないため、日常的な貸与記録が実質的な対策となります。",
    },
    {
      label: "私物との混在",
      value:
        "私物端末を業務に使っていた場合と、会社貸与の端末に個人のアカウントやデータが入っている場合の二方向があります。いずれも区分の基準を社内で定めておかないと、現場の判断に差が生じます。",
    },
    {
      label: "管理アカウントの残存",
      value:
        "MDMの登録、組織のアカウントとの紐づけ、端末を探す機能の有効化などが残っていると、初期化しても次の利用者が使えない状態になります。売却に出した際に差し戻される主な原因です。",
    },
    {
      label: "退職者との連絡の難しさ",
      value:
        "退職後に気づいた不足分や、解除に本人の操作が必要な設定については、連絡が取れないと対応が進みません。在籍中に済ませられる工程は在籍中に済ませる手順とすることが、最も有効です。",
    },
    {
      label: "拠点や在宅勤務による分散",
      value:
        "在宅勤務者や遠隔地の拠点から回収する場合、配送の手配と受領確認が加わります。誰がいつ発送し、誰が受け取ったかを記録する仕組みを定めておかないと、途中で所在がわからなくなります。",
    },
  ];

  const prepSteps = [
    {
      t: "貸与台帳の更新",
      d: "対象者ごとに、貸与している端末を1台ずつ記載します。本体だけでなく、電源アダプタ、外付けディスプレイ、キーボード、SIMカード、社内用のセキュリティキーや社員証といった付随品も同じ行に記載しておくと、受け取り時の確認が一度で済みます。台帳がない場合は、購入記録と配布時の記録から確認します。",
    },
    {
      t: "所有区分の確認",
      d: "会社が購入した端末なのか、リース品なのか、従業員の私物なのかを台帳上で区別します。区分によって回収後の行き先（売却・返却・本人に返す）が変わります。リース品や資産計上された端末の扱いは、別ページでご説明しています。",
    },
    {
      t: "回収後の行き先の決定",
      d: "回収した端末を再配布するのか、売却するのか、廃棄するのかを先に決めます。行き先が決まっていると、必要な消去の方法と記録の残し方も決まります。売却する場合に消去の記録が必要かどうかも、この段階で確認しておきます。",
    },
    {
      t: "本人に依頼する作業の洗い出し",
      d: "本人のアカウントで有効になっている設定の解除や、業務データの引き渡し、私物データの退避など、本人にしかできない作業を一覧にします。これらを在籍中の依頼としてまとめておくと、後から改めて連絡を取る事態を避けられます。",
    },
    {
      t: "回収の期限と方法の通知",
      d: "返却の期限、返却先、返却方法を書面で通知します。出社して手渡しとするか配送とするか、配送の場合は送料と梱包材の扱いまで決めておきます。在宅勤務者が多い場合は、この手順の整備が回収率に直結します。",
    },
  ];

  const byodRows = [
    {
      label: "私物端末を業務に使っていた場合",
      value:
        "端末そのものは会社の資産ではないため、回収することはできません。業務データやアカウントの取り扱いについては、社内規程や本人との取り決めの範囲で対応することになります。対応の範囲は規程の内容によるため、人事・法務担当にご確認ください。",
    },
    {
      label: "会社貸与の端末に個人データが入っている場合",
      value:
        "写真、個人のアカウント、私的なファイルが入っていることがあります。回収の連絡の時点で、「個人のデータは事前に退避すること」「回収後は初期化すること」を伝えておくと、後からデータの返還を求められる事態を避けられます。退避の期限もあわせて示します。",
    },
    {
      label: "個人名義のアカウントで有効になっている設定",
      value:
        "端末を探す機能や個人のアカウントでのサインインが残っていると、解除に本人の操作が必要になることがあります。在籍中にサインアウトを済ませる手順を、回収の依頼に含めておくことをおすすめします。手順はOS別のデータ消去ガイドと同じ操作になります。",
    },
    {
      label: "私物のSIMカード・SDカード",
      value:
        "本人が挿入したまま返却することがあります。取り出して本人に返却するのが基本で、そのまま次の工程に回すと返却できなくなります。受け取り時の確認項目に含めてください。",
    },
    {
      label: "決済・認証アプリの移行",
      value:
        "本人が個人の決済サービスや認証アプリを入れていた場合、初期化前に本人側での移行が必要になることがあります。これも在籍中の依頼としてまとめておきます。具体的な移行の考え方は、データ消去ガイドでご説明しています。",
    },
  ];

  const mdmSteps = [
    {
      t: "回収した端末の一覧との照合",
      d: "受け取った現物と台帳を照合し、不足がないかを確認します。ここで不足が判明した場合、本人に連絡が取れるうちに確認します。付属品の不足も、売却に出す場合は条件に影響することがあるため記録しておきます。",
    },
    {
      t: "本人のアカウントの残存確認",
      d: "個人のアカウントでサインインしたままになっていないかを確認します。残っている場合、管理者側で解除できないことがあり、本人に操作を依頼する必要が出ます。連絡が取れるうちに処理することが原則です。",
    },
    {
      t: "管理コンソールからの端末の登録解除",
      d: "MDMや端末管理の仕組みを使っている場合、管理コンソールで対象の端末の登録を解除します。登録が残ったままだと、初期化しても再び管理下に戻る設定になっていることがあり、次の利用者が使えません。操作の名称と手順は、提供元の公式ドキュメントでご確認ください。",
    },
    {
      t: "組織のアカウントとの紐づけの解除",
      d: "組織で端末をまとめて管理する仕組みを使っている場合、その管理から端末を除外する操作が必要になることがあります。取り消せない操作が含まれることがあるため、台帳と照合し、対象を間違えていないことを確認してから実行します。",
    },
    {
      t: "端末を探す機能・端末保護の解除",
      d: "Apple製品の「探す」やAndroidの端末保護の機能が有効なままだと、初期化後に元のアカウントの入力を求められる状態になります。売却時に買取不可や差し戻しの原因になるため、解除の確認まで行います。仕組みと対処は解説ページでご説明しています。",
    },
    {
      t: "初期化と次の工程への引き渡し",
      d: "解除が済んだ状態で初期化します。再配布する場合は社内の設定を再適用し、売却や廃棄に回す場合は記録を添えて次の工程に引き渡します。初期設定の画面が表示されていれば、解除と初期化が正しく完了したことの目安となります。",
    },
  ];

  const missingRows = [
    {
      label: "在籍中に気づいた場合",
      value:
        "台帳と現物を照合して不足を特定し、本人に確認します。自宅や別拠点に置いたままになっている場合が多く、期限を定めて返却を依頼することで解決します。",
    },
    {
      label: "退職後に気づいた場合",
      value:
        "連絡が取りにくくなるため、まず社内の記録から貸与の事実を確認します。記録が不明確な場合、本人の記憶のみに頼ると対応が進みません。対応の方針は社内規程と就業規則の定めによるため、人事・法務担当にご相談ください。",
    },
    {
      label: "遠隔での対処ができる範囲",
      value:
        "端末管理の仕組みを導入している場合、遠隔でロックやデータの消去を実行できることがあります。ただし、端末がネットワークに接続されていなければ実行されず、機能の範囲も導入しているサービスによって異なります。実行の可否と手順は、提供元の公式ドキュメントでご確認ください。",
    },
    {
      label: "再発防止",
      value:
        "回収漏れの多くは、貸与の記録が残っていないことに起因します。貸与時に台帳へ記録すること、退職手続きの確認項目に端末の返却を含めることの2点で、大半は防止できます。回収のたびに手順を見直すことで、精度が向上します。",
    },
  ];

  const recordList = [
    "回収した日、受け取った担当者、対象者の氏名を記録した",
    "台帳の管理番号と現物の識別番号を1台ごとに照合した",
    "本体以外の付属品（電源アダプタ・SIMカード・セキュリティキーなど）の有無を記録した",
    "本人の個人データの退避が完了していることを確認した",
    "本人のアカウントからのサインアウトが済んでいることを確認した",
    "管理コンソールから端末の登録を解除した",
    "端末を探す機能・端末保護の状態を確認し、解除した",
    "初期化を実行し、初期設定の画面で止まることを確認した",
    "回収後の行き先（再配布・売却・返却・廃棄）を台帳に記載した",
    "売却や廃棄に回す場合、必要な記録の有無を確認した",
    "私物のSIMカード・SDカードを本人に返した",
    "台帳の該当行を更新し、回収を完了とした",
  ];

  const faqs = [
    {
      q: "退職者の端末に個人のアカウントが残っていて解除できません。",
      a: "本人のアカウントでの操作が必要な設定は、管理者側では解除できないことがあります。まず本人に連絡が取れるかを確認し、操作を依頼することが基本です。連絡が取れない場合の対応は、導入している管理サービスの仕組みと社内規程によって変わるため、提供元のサポートに確認したうえで、社内の担当部署と対応をご検討ください。在籍中に解除を済ませる手順を整備しておくことが、最も確実な予防策です。",
    },
    {
      q: "回収した端末はすぐに初期化してよいですか。",
      a: "作業には順番があります。管理コンソールからの登録解除や、組織の管理からの切り離しを先に済ませないと、初期化しても管理下に戻る設定になっていることがあります。また、本人の個人データの退避が済んでいない状態で初期化すると、後から相談を受けることになります。解除と退避を確認してから初期化してください。",
    },
    {
      q: "従業員の私物スマホで業務をしていた場合、回収できますか。",
      a: "私物の端末は会社の資産ではないため、回収の対象にはなりません。業務データやアカウントの取り扱いについては、社内規程や本人との取り決めの範囲で対応することになります。対応の範囲は規程の内容によるため、人事・法務担当にご確認ください。",
    },
    {
      q: "回収した端末をそのまま買取に出してもよいですか。",
      a: "管理の解除と初期化が済んでいて、所有権が自社にあると確認できていれば、売却を検討できます。ただし、その前にリース品や分割払いが残っている端末が含まれていないかをご確認ください。所有権による区分は、リース・資産計上のページでご説明しています。掲載サービスの法人対応の可否は、公式サイトの記載を確認したうえで各社に直接お問い合わせください。",
    },
    {
      q: "端末に業務データが残っているか確認する必要はありますか。",
      a: "回収後に初期化する前提であれば、端末内のデータは初期化で処理されます。ただし、業務上引き継ぐ必要のあるファイルが本人の端末にのみ保存されている場合、初期化後には復元できません。回収の前に、引き継ぎが必要なデータを共有先へ移す作業を依頼しておく必要があります。",
    },
    {
      q: "在宅勤務者からの回収はどう進めればよいですか。",
      a: "配送での返却が現実的です。発送の期限、送り先、梱包材と送料の扱いを明文で伝え、追跡可能な方法で発送を依頼すると、所在を把握できます。受領側で開封と内容の確認を行い、その場で台帳と照合する運用とすることで、行き違いを防げます。",
    },
    {
      q: "回収時に記録を残す必要はありますか。",
      a: "法令で一律に定められているわけではありませんが、誰から何を受け取ったかの記録がないと、後から不足の有無を確認できません。台帳の更新と受領の記録は、売却や廃棄といった次の工程でも土台になります。記録の範囲は社内規程の定めによるため、担当部署とご検討ください。",
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
          { name: "従業員の業務端末を回収する際の進め方", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">FOR BUSINESS</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          従業員の業務端末を回収する際の進め方｜回収漏れ・私物混在・MDM解除
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          退職、異動、機種の入れ替えなどの際には、従業員に貸与していたPCやスマホを回収する作業が発生します。回収は本来定型的な事務作業ですが、実際には「誰がどの端末を所持しているか把握できていない」「私物と混在している」「管理用のアカウントが端末に残っていて初期化できない」といった理由で滞ることがあります。本ページでは、回収前の準備事項、本人に依頼すべき作業、回収後に管理者が行う解除の順番、記録の保管方法を、一般知識としてご説明します。管理サービスの具体的な操作は提供元の公式ドキュメントに従ってください。
        </p>
        <p className="mt-4 max-w-3xl text-xs leading-loose text-steel-500">
          公開日: {PUBLISHED_LABEL}／本ページは一般的な情報の提供を目的としており、個別の労務・法務上の判断や、特定の管理サービスの操作手順を示すものではありません。社内規程に関わる判断は、人事・法務担当にご確認ください。
        </p>

        {/* 冒頭の要点 */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">業務端末の回収を円滑に進めるための要点</h2>
          <ul className="mt-4 space-y-3">
            {conclusions.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* 回収が滞る要因 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">回収が滞りやすい要因</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            回収が難航する原因は、端末そのものではなく事前の準備にあります。滞りやすい要因をあらかじめ把握しておくことで、準備の優先順位が明確になります。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {difficultyRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 事前準備 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">回収前の準備事項</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            回収の連絡を出す前に、次の5点を済ませておくと当日の作業時間を短縮できます。特に、本人にしかできない作業を在籍中に洗い出しておくかどうかで、後の手間が大きく変わります。
          </p>
          <div className="space-y-5">
            {prepSteps.map((s, i) => (
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
            <Link href="/situation/houjin/lease-shisan-chui/" className="btn-primary">所有権による区分方法を見る</Link>
            <Link href="/situation/houjin/" className="btn-ghost">法人の端末処分の全体像に戻る</Link>
          </div>
        </section>

        {/* 私物混在 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">私物と会社資産の区分</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            現場で判断が分かれやすい部分です。基準を社内で定めておかないと、担当者ごとに対応が異なることになります。社内規程に関わる判断は、人事・法務担当にご確認ください。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {byodRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-loose text-steel-600">
            本人に依頼する作業の内容は、個人がスマホを売る際の準備とほぼ同じです。バックアップ、アカウントのサインアウト、決済や認証アプリの移行といった項目は
            <Link href="/guide/data-shokyo/" className="text-vermilion underline underline-offset-4">売る前のデータ消去の手順</Link>
            でご説明していますので、依頼文を作成する際にご参照ください。
          </p>
        </section>

        {/* MDM解除の順番 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">回収後に管理者が行う解除の順番</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            順番を誤ると、初期化のやり直しが発生します。管理の解除を済ませてから初期化するという原則を守ることが重要です。各サービスの操作の名称と手順は、提供元の公式ドキュメントでご確認ください。
          </p>
          <div className="space-y-5">
            {mdmSteps.map((s, i) => (
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
            ※ Apple製品の「探す」が残ったまま送ってしまった場合の対処は<Link href="/guide/activation-lock/" className="text-vermilion underline underline-offset-4">アクティベーションロックの解説ページ</Link>でご説明しています。
          </p>
        </section>

        {/* 回収漏れ */}
        <section className="mt-14">
          <h2 className="section-title mb-2">回収漏れが発生した場合の対応</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            判明した時期によって、取り得る手段が変わります。在籍中であれば確認と返却の依頼で済みますが、退職後は対応が大幅に難しくなります。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {missingRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 未返却への対応方針は社内規程・就業規則の定めや個別の事情によって異なります。人事・法務担当にご相談ください。
          </p>
        </section>

        {/* チェックリスト */}
        <section className="mt-14">
          <h2 className="section-title mb-2">回収から次工程までのチェックリスト</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            上から順に確認すると、そのまま作業の順番になります。売却に回す端末は、この状態まで整えてから相談すると、手続きが円滑に進みます。
          </p>
          <div className="border border-chalk-line bg-chalk-card p-5">
            <ul className="space-y-3">
              {recordList.map((c) => (
                <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                  <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 次工程 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">回収後の端末の扱い</h2>
          <div className="max-w-3xl space-y-4 text-sm leading-loose text-steel-600">
            <p>
              解除と初期化まで終わった端末は、社内で再配布する、売却する、廃棄するのいずれかに進みます。売却を選ぶ場合、所有権が自社にあることの確認が前提になるため、リース品や分割払いの残っている端末が含まれていないかを
              <Link href="/situation/houjin/lease-shisan-chui/" className="text-vermilion underline underline-offset-4">リース品・資産計上した端末を手放す際の注意点</Link>
              でご確認ください。消去の記録を残す必要があるかどうかは
              <Link href="/situation/houjin/data-shokyo-shomeisho/" className="text-vermilion underline underline-offset-4">データ消去証明書のページ</Link>
              でご説明しています。
            </p>
            <p>
              買取に出す際の条件は、送料や返送料の扱い、査定から入金までの流れ、キャンセル時の条件、データ消去の対応といった項目で比較できます。金額の水準は台数・機種・状態によって異なるため、当サイトで具体的な金額を示すことはできません。掲載サービスの条件は
              <Link href="/compare/" className="text-vermilion underline underline-offset-4">統一比較表</Link>
              で同じ基準により比較しています。法人からの依頼の受付可否と必要書類は、公式サイトの記載を確認したうえで各社に直接お問い合わせください。取引にあたって求められる確認書類の一般知識は
              <Link href="/guide/honnin-kakunin/" className="text-vermilion underline underline-offset-4">買取の本人確認</Link>
              でご説明しています。
            </p>
            <p>
              回収した端末に、画面が割れているものや電源が入らないものが含まれることもあります。操作できない端末は社内での初期化ができないため、扱いが変わります。遠隔での消去の考え方と、そうした端末の売り方は
              <Link href="/situation/kowareta/" className="text-vermilion underline underline-offset-4">壊れた・起動しない端末の売り方</Link>
              をご参照ください。引き渡しの流れは
              <Link href="/guide/takuhai-nagare/" className="text-vermilion underline underline-offset-4">宅配買取の流れ</Link>
              と共通しています。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">端末の回収に関するよくある質問</h2>
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
              <Link href="/situation/houjin/data-shokyo-shomeisho/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">法人の端末処分とデータ消去証明書</span>
                <span className="mt-1 block text-xs text-steel-500">求められる理由と確認事項</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/houjin/lease-shisan-chui/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">リース品・資産計上した端末を手放す際の注意点</span>
                <span className="mt-1 block text-xs text-steel-500">所有権・残債・社内手続き</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/data-shokyo/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売る前のデータ消去の手順</span>
                <span className="mt-1 block text-xs text-steel-500">本人に依頼する作業の参照元</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/activation-lock/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">アクティベーションロックと「探す」の解除</span>
                <span className="mt-1 block text-xs text-steel-500">解除しないと買取不可になる理由</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/takuhai-nagare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">宅配買取の流れ</span>
                <span className="mt-1 block text-xs text-steel-500">申込から入金までの一般的な手順</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">掲載サービスの統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">条件を同じ基準で比較</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/kowareta/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">壊れた・起動しない端末の売り方</span>
                <span className="mt-1 block text-xs text-steel-500">操作できない端末が含まれる場合</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
