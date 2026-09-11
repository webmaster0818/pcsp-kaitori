import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";

const TITLE = "従業員の業務端末を回収するときの進め方｜回収漏れ・私物混在・MDM解除";
const DESC =
  "退職や機種の入れ替えで従業員から業務用のPC・スマホを回収するときの進め方を一般知識として整理。貸与台帳の整備、回収の連絡と期限の決め方、回収漏れが起きたときの対処、私物と会社資産の切り分け、MDMや組織アカウントの解除、受領記録の残し方までをまとめました。管理サービスの操作手順は提供元の公式ドキュメントを前提としています。";
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
    "回収でつまずく原因はほぼ三つに絞られます。そもそも誰が何を持っているか分からない（台帳の不備）、私物と会社資産が混ざっている、管理用のアカウントが端末に残っている。この三つを先に潰しておくと、回収そのものは事務作業で済みます。",
    "台帳は「誰に」「いつ」「どの端末を」貸与したかが1台ごとにたどれる状態が出発点です。貸与時に記録を取る運用がなければ、回収の前に棚卸をして現状をそろえるところから始めます。",
    "私物の端末を業務に使っていた場合、その端末は会社の資産ではないため回収の対象になりません。一方で業務データが残っている可能性はあります。どう扱うかは社内規程と本人との取り決めによるため、人事・法務担当と相談してください。",
    "MDMや組織アカウントの登録解除は、回収した後に管理者が行う工程です。順番を誤ると端末の初期化がやり直しになるため、回収・解除・初期化の順番を決めてから動きます。各サービスの操作は提供元の公式ドキュメントに従ってください。",
    "回収して終わりにせず、受領した記録を残して台帳を閉じます。ここまでやると、売却や返却といった次の工程にそのまま渡せる状態になります。",
  ];

  const difficultyRows = [
    {
      label: "回収漏れ",
      value:
        "貸与の記録がない、複数台を貸していたことを忘れている、周辺機器や予備機が数えられていない、といった理由で発生します。退職の手続きが動き出してから台帳を探すと間に合わないため、日ごろの貸与記録が実質的な対策になります。",
    },
    {
      label: "私物との混在",
      value:
        "私物端末を業務に使っていた場合と、会社貸与の端末に個人のアカウントやデータが入っている場合の二方向があります。どちらも切り分けの基準を社内で決めておかないと、現場の判断がばらつきます。",
    },
    {
      label: "管理アカウントの残り",
      value:
        "MDMの登録、組織のアカウントとの紐づけ、端末を探す機能の有効化などが残っていると、初期化しても次の利用者が使えない状態になります。売却に出したときに差し戻される主な原因です。",
    },
    {
      label: "退職者への連絡が取りにくくなる",
      value:
        "退職後に気づいた不足分や、解除に本人の操作が必要な設定については、連絡が取れないと手が止まります。在籍中に済ませられる工程は在籍中に済ませる、という設計が最も効きます。",
    },
    {
      label: "拠点や在宅勤務による分散",
      value:
        "在宅勤務者や遠隔地の拠点から回収する場合、配送の手配と受領確認が加わります。誰がいつ発送し、誰が受け取ったかを記録する仕組みを決めておかないと、途中で所在が分からなくなります。",
    },
  ];

  const prepSteps = [
    {
      t: "貸与台帳を最新にする",
      d: "対象者ごとに、貸与している端末を1台ごとに書き出します。本体だけでなく、電源アダプタ、外付けディスプレイ、キーボード、SIMカード、社内用のセキュリティキーや社員証といった付随するものも同じ行に並べておくと、受け取り時の確認が一度で済みます。台帳がない場合は、購入記録と配布時のやり取りからたどります。",
    },
    {
      t: "所有区分を確認する",
      d: "会社が購入した端末なのか、リース品なのか、従業員の私物なのかを台帳上で区別します。区分によって回収後の行き先（売却・返却・本人に返す）が変わります。リース品や資産計上された端末の扱いは別ページで整理しています。",
    },
    {
      t: "回収後の行き先を決めておく",
      d: "回収した端末を再配布するのか、売却するのか、廃棄するのかを先に決めます。行き先が決まっていると、必要な消去の方法と記録の残し方も決まります。売却する場合に消去の記録が必要かどうかも、この段階で確認しておきます。",
    },
    {
      t: "本人に依頼する作業を洗い出す",
      d: "本人のアカウントで有効になっている設定の解除や、業務データの引き渡し、私物データの退避など、本人にしかできない作業を並べます。これを在籍中の依頼としてまとめておくと、後から連絡を取り直す事態を避けられます。",
    },
    {
      t: "回収の期限と方法を伝える",
      d: "いつまでに、どこへ、どの方法で返してもらうかを明文で伝えます。出社して手渡しなのか、配送なのか、配送なら送料と梱包材をどうするのかまで決めておきます。在宅勤務者が多い場合は、この手順の整備が回収率に直結します。",
    },
  ];

  const byodRows = [
    {
      label: "私物端末を業務に使っていた場合",
      value:
        "端末そのものは会社の資産ではないため、回収することはできません。業務データやアカウントの取り扱いについては、社内規程や本人との取り決めの範囲で対応することになります。どこまで求められるかは規程の内容によるため、人事・法務担当に確認してください。",
    },
    {
      label: "会社貸与の端末に個人データが入っている場合",
      value:
        "写真、個人のアカウント、私的なファイルが入っていることがあります。回収の連絡をする時点で「個人のデータは事前に退避しておくこと」「回収後は初期化すること」を伝えておくと、後から返してほしいという相談を避けられます。退避の期限も合わせて示します。",
    },
    {
      label: "個人名義のアカウントで有効になっている設定",
      value:
        "端末を探す機能や個人のアカウントでのサインインが残っていると、解除に本人の操作が必要になることがあります。在籍中にサインアウトしてもらう手順を回収の依頼に含めておくのが確実です。手順はOS別のデータ消去ガイドと同じ操作になります。",
    },
    {
      label: "私物のSIMカード・SDカード",
      value:
        "本人が差したまま返してくることがあります。抜き取って本人に返すのが基本で、そのまま次工程に流すと戻らなくなります。受け取り時のチェック項目に入れておいてください。",
    },
    {
      label: "決済・認証アプリの移行",
      value:
        "本人が個人の決済サービスや認証アプリを入れていた場合、初期化前に本人側での移行が必要になることがあります。これも在籍中の依頼としてまとめておきます。具体的な移行の考え方はデータ消去ガイドで整理しています。",
    },
  ];

  const mdmSteps = [
    {
      t: "回収した端末を一覧で突き合わせる",
      d: "受け取った現物と台帳を照合し、不足がないかを確認します。ここで不足が判明した場合、本人に連絡が取れるうちに確認します。付属品の不足も、売却に出す場合は条件に影響することがあるため記録しておきます。",
    },
    {
      t: "本人のアカウントが残っていないか確認する",
      d: "個人のアカウントでサインインしたままになっていないかを確認します。残っている場合、管理者側で解除できないことがあり、本人に操作を依頼する必要が出ます。連絡が取れるうちに処理するのが鉄則です。",
    },
    {
      t: "管理コンソールから端末の登録を解除する",
      d: "MDMや端末管理の仕組みを使っている場合、管理コンソールで対象の端末を登録から外します。登録が残ったままだと、初期化しても再び管理下に戻る設定になっていることがあり、次の利用者が使えません。操作の名称と手順は提供元の公式ドキュメントを確認してください。",
    },
    {
      t: "組織のアカウントとの紐づけを外す",
      d: "組織で端末をまとめて管理する仕組みを使っている場合、その管理から端末を外す操作が必要になることがあります。取り消せない操作が含まれることがあるため、台帳と照合し、対象を間違えていないことを確認してから実行します。",
    },
    {
      t: "端末を探す機能や端末保護の状態を解除する",
      d: "Apple製品の「探す」やAndroidの端末保護の機能が有効なままだと、初期化後に元のアカウントの入力を求められる状態になります。売却時に買取不可や差し戻しの原因になるため、解除の確認まで行います。仕組みと対処は解説ページにまとめています。",
    },
    {
      t: "初期化して、次の行き先に渡す",
      d: "解除が済んだ状態で初期化します。再配布するなら社内の設定に載せ直し、売却や廃棄に回すなら記録を添えて次工程に渡します。初期設定の画面で止まっていれば、解除と初期化が正しく終わったことの目安になります。",
    },
  ];

  const missingRows = [
    {
      label: "在籍中に気づいた場合",
      value:
        "台帳と現物を照合して不足を特定し、本人に確認します。自宅や別拠点に置いたままになっているだけのことが多く、期限を切って返却してもらえば解決します。",
    },
    {
      label: "退職後に気づいた場合",
      value:
        "連絡が取りにくくなるため、まず社内の記録から本当に貸与されていたのかを確認します。記録が曖昧な場合、本人の記憶だけに頼ると話が進みません。対応の方針は社内規程と就業規則の定めによるため、人事・法務担当に相談してください。",
    },
    {
      label: "遠隔での対処ができる範囲",
      value:
        "端末管理の仕組みを導入している場合、遠隔でロックやデータの消去を実行できることがあります。ただし端末がネットワークにつながっていなければ実行されず、機能の範囲も導入しているサービスによって異なります。実行の可否と手順は提供元の公式ドキュメントで確認してください。",
    },
    {
      label: "再発を防ぐ",
      value:
        "回収漏れの多くは、貸与の記録が残っていないことに起因します。貸与時に台帳へ記録する、退職手続きのチェック項目に端末の返却を入れる、という二つで大半は防げます。回収のたびに手順を見直しておくと精度が上がります。",
    },
  ];

  const recordList = [
    "回収した日、受け取った担当者、対象者の氏名を記録した",
    "台帳の管理番号と現物の識別番号を1台ごとに突き合わせた",
    "本体以外の付属品（電源アダプタ・SIMカード・セキュリティキーなど）の有無を記録した",
    "本人の個人データの退避が完了していることを確認した",
    "本人のアカウントからのサインアウトが済んでいることを確認した",
    "管理コンソールから端末の登録を解除した",
    "端末を探す機能・端末保護の状態を確認し、解除した",
    "初期化を実行し、初期設定の画面で止まることを確認した",
    "回収後の行き先（再配布・売却・返却・廃棄）を台帳に記載した",
    "売却や廃棄に回す場合、必要な記録の有無を確認した",
    "私物のSIMカード・SDカードを本人に返した",
    "台帳の該当行を更新し、回収を完了として閉じた",
  ];

  const faqs = [
    {
      q: "退職者の端末に個人のアカウントが残っていて解除できません。",
      a: "本人のアカウントでの操作が必要な設定は、管理者側では解除できないことがあります。まず本人に連絡が取れるかを確認し、操作を依頼するのが基本です。連絡が取れない場合の対応は、導入している管理サービスの仕組みと社内規程によって変わるため、提供元のサポートに確認したうえで、社内の担当部署と対応を決めてください。在籍中に解除を済ませる手順を整備しておくのが最も確実な予防策です。",
    },
    {
      q: "回収した端末はすぐに初期化してよいですか。",
      a: "順番があります。管理コンソールからの登録解除や、組織の管理からの切り離しを先に済ませないと、初期化しても管理下に戻る設定になっていることがあります。また、本人の個人データの退避が済んでいない状態で初期化すると、後から相談を受けることになります。解除と退避を確認してから初期化してください。",
    },
    {
      q: "従業員の私物スマホで業務をしていた場合、回収できますか。",
      a: "私物の端末は会社の資産ではないため、回収の対象にはなりません。業務データやアカウントの取り扱いについては、社内規程や本人との取り決めの範囲で対応することになります。どこまで求められるかは規程の内容によるため、人事・法務担当に確認してください。",
    },
    {
      q: "回収した端末をそのまま買取に出してもよいですか。",
      a: "管理の解除と初期化が済んでいて、所有権が自社にあると確認できていれば、売却を検討できます。ただし、リース品や分割払いが残っている端末が混ざっていないかの確認が先です。所有権の仕分けはリース・資産計上のページで整理しています。掲載サービスの法人対応の可否は、公式サイトの記載を確認したうえで各社に直接問い合わせてください。",
    },
    {
      q: "端末に業務データが残っているか確認する必要はありますか。",
      a: "回収後に初期化する前提であれば、端末内のデータは初期化で処理されます。ただし、業務上引き継ぐ必要のあるファイルが本人の手元にしかない状態だと、初期化後に取り戻せません。回収の前に、引き継ぎが必要なデータを共有先へ移す作業を依頼しておくのが順序です。",
    },
    {
      q: "在宅勤務者からの回収はどう進めればよいですか。",
      a: "配送での返却が現実的です。発送の期限、送り先、梱包材と送料の扱いを明文で伝え、追跡できる方法で送ってもらうと所在が分かります。受け取った側で開封と内容の確認を行い、その場で台帳と突き合わせる運用にしておくと、行き違いを防げます。",
    },
    {
      q: "回収時に記録を残す必要はありますか。",
      a: "法令で一律に定められているわけではありませんが、誰から何を受け取ったかの記録がないと、後から不足の有無を確認できません。台帳の更新と受領の記録は、売却や廃棄といった次の工程でも土台になります。どこまで残すかは社内規程の定めによるため、担当部署と決めてください。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "法人のPC・スマホをまとめて処分・買取に出すには", path: "/situation/houjin/" },
          { name: "従業員の業務端末を回収するときの進め方", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">FOR BUSINESS</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          従業員の業務端末を回収するときの進め方｜回収漏れ・私物混在・MDM解除
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          退職、異動、機種の入れ替え。どの場面でも、従業員に貸与していたPCやスマホを回収する作業が発生します。回収そのものは単純な事務作業のはずが、実際には「誰が何を持っているか分からない」「私物と混ざっている」「管理用のアカウントが端末に残っていて初期化できない」といった理由で止まります。このページでは、回収の前にそろえておくこと、本人に依頼すべきこと、回収後に管理者が行う解除の順番、記録の残し方を、一般知識として整理します。管理サービスの具体的な操作は提供元の公式ドキュメントに従ってください。
        </p>
        <p className="mt-4 max-w-3xl text-xs leading-loose text-steel-500">
          公開日: {PUBLISHED_LABEL}／このページは一般的な整理であり、個別の労務・法務上の判断や、特定の管理サービスの操作手順を示すものではありません。社内規程に関わる判断は人事・法務担当に確認してください。
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

        {/* 三つの難所 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">回収でつまずくのはどこか</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            回収が難航する原因は、端末そのものではなく手前の準備にあります。どこで止まりやすいかを先に知っておくと、準備の優先順位がはっきりします。
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
          <h2 className="section-title mb-2">回収の前にそろえること</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            回収の連絡を出す前に、この五つを済ませておくと当日の作業が短くなります。特に「本人にしかできない作業」を在籍中に洗い出しておくかどうかで、後の手間が大きく変わります。
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
            <Link href="/situation/houjin/lease-shisan-chui/" className="btn-primary">所有権の仕分け方を見る</Link>
            <Link href="/situation/houjin/" className="btn-ghost">法人の端末処分の全体像に戻る</Link>
          </div>
        </section>

        {/* 私物混在 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">私物と会社資産を切り分ける</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            現場で判断が分かれやすいのがこの部分です。基準を社内で決めておかないと、担当者ごとに対応が変わってしまいます。社内規程に関わる判断は人事・法務担当に確認してください。
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
            本人に依頼する作業の内容は、個人がスマホを売るときの準備とほぼ同じです。バックアップ、アカウントのサインアウト、決済や認証アプリの移行といった項目は
            <Link href="/guide/data-shokyo/" className="text-vermilion underline underline-offset-4">売る前のデータ消去 完全手順</Link>
            に整理しているため、依頼の文面を作るときに参照してください。
          </p>
        </section>

        {/* MDM解除の順番 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">回収後に管理者が行う解除の順番</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            順番を誤ると、初期化のやり直しが発生します。管理の解除を済ませてから初期化する、という原則さえ守れば大きく外れません。各サービスの操作の名称と手順は提供元の公式ドキュメントを確認してください。
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
            ※ Apple製品の「探す」が残ったまま送ってしまった場合の対処は<Link href="/guide/activation-lock/" className="text-vermilion underline underline-offset-4">アクティベーションロックの解説ページ</Link>で整理しています。
          </p>
        </section>

        {/* 回収漏れ */}
        <section className="mt-14">
          <h2 className="section-title mb-2">回収漏れが起きたときの考え方</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            気づいた時期によって取れる手段が変わります。在籍中であれば確認して返してもらえば済む話が、退職後になると一気に難しくなります。
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
            ※ 未返却への対応方針は社内規程・就業規則の定めや個別の事情によって異なります。人事・法務担当に相談してください。
          </p>
        </section>

        {/* チェックリスト */}
        <section className="mt-14">
          <h2 className="section-title mb-2">回収から次工程までのチェックリスト</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            上から順に確認していけば、そのまま作業の順番になります。売却に回す端末は、この状態まで整えてから相談すると話が早く進みます。
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
          <h2 className="section-title mb-2">回収した端末を次にどうするか</h2>
          <div className="max-w-3xl space-y-4 text-sm leading-loose text-steel-600">
            <p>
              解除と初期化まで終わった端末は、社内で再配布する、売却する、廃棄するのいずれかに進みます。売却を選ぶ場合、所有権が自社にあることの確認が前提になるため、リース品や分割払いの残っている端末が混ざっていないかを
              <Link href="/situation/houjin/lease-shisan-chui/" className="text-vermilion underline underline-offset-4">リース品・資産計上した端末を手放すときの注意</Link>
              で確認してください。消去の記録を残す必要があるかどうかは
              <Link href="/situation/houjin/data-shokyo-shomeisho/" className="text-vermilion underline underline-offset-4">データ消去証明書のページ</Link>
              で整理しています。
            </p>
            <p>
              買取に出すときの条件は、送料や返送料の扱い、査定から入金までの流れ、キャンセル時の条件、データ消去の対応といった項目で比べられます。金額の水準は台数・機種・状態によって異なるため、当サイトで具体的な金額を示すことはできません。掲載サービスの条件は
              <Link href="/compare/" className="text-vermilion underline underline-offset-4">統一比較表</Link>
              に同じ物差しで並べています。法人からの依頼を受け付けているかどうか、必要書類は何かは公式サイトの記載を確認したうえで各社に直接問い合わせてください。取引にあたって求められる確認書類の一般知識は
              <Link href="/guide/honnin-kakunin/" className="text-vermilion underline underline-offset-4">買取の本人確認</Link>
              にまとめています。
            </p>
            <p>
              回収した端末に、画面が割れているものや電源が入らないものが混ざることもあります。操作できない端末は社内での初期化ができないため、扱いが変わります。遠隔での消去の考え方と、そうした端末の売り方は
              <Link href="/situation/kowareta/" className="text-vermilion underline underline-offset-4">壊れた・起動しない端末の売り方</Link>
              を参照してください。引き渡しの流れそのものは
              <Link href="/guide/takuhai-nagare/" className="text-vermilion underline underline-offset-4">宅配買取の流れ</Link>
              と共通します。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">端末の回収についてよくある質問</h2>
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
                <span className="font-display text-steel-900">法人のPC・スマホをまとめて処分・買取に出すには</span>
                <span className="mt-1 block text-xs text-steel-500">法人の端末処分の全体像</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/houjin/data-shokyo-shomeisho/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">法人の端末処分とデータ消去証明書</span>
                <span className="mt-1 block text-xs text-steel-500">何を求め、何を確認するか</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/houjin/lease-shisan-chui/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">リース品・資産計上した端末を手放すときの注意</span>
                <span className="mt-1 block text-xs text-steel-500">所有権・残債・社内手続き</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/data-shokyo/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売る前のデータ消去 完全手順</span>
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
                <span className="mt-1 block text-xs text-steel-500">条件を同じ物差しで並べる</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/kowareta/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">壊れた・起動しない端末の売り方</span>
                <span className="mt-1 block text-xs text-steel-500">操作できない端末が混ざるとき</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
