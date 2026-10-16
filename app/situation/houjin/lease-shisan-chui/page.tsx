import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";

const TITLE = "リース品・資産計上した端末を手放す際の注意点｜所有権・残債・社内手続き";
const DESC =
  "法人が業務用のPC・スマホを手放す際、売却できる端末かどうかを判断する基準は所有権です。リース・レンタル・割賦・補助金で取得した機器の区分方法、残債の確認、固定資産台帳からの除却と社内決裁の順序をご説明します。扱いは契約内容・会計方針により異なります。";
const PATH = "/situation/houjin/lease-shisan-chui/";
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

export default function HoujinLeaseShisanChuiPage() {
  const conclusions = [
    "端末を手放せるかどうかは、所有権によって決まります。自社で使用していても、所有者が自社でない端末は売却の対象になりません。買取の相談をする前に、対象の端末を所有権によって区分します。",
    "リース・レンタル・割賦・補助金で取得した機器は、それぞれ扱いが異なります。ただし、いずれの区分でも最終的な条件は契約内容によります。契約書の記載内容が優先されるため、推測で進めず、契約書の原本をご確認ください。",
    "リース満了後にどうなるか（返却・再リース・買い取り）は契約により異なります。買い取って所有権が自社に移ったのであれば売却の対象になりますが、その前提が成り立つかどうかはリース会社にご確認ください。",
    "固定資産として計上されている端末は、売却しても台帳から自動的には消えません。除却・売却の会計処理と、台帳の更新を同じタイミングで進める必要があります。処理の方法は会計方針により異なるため、経理部門や顧問税理士にご確認ください。",
    "社内の手順は、棚卸による対象の洗い出し、所有権による区分、決裁の取得、データ消去と引き渡し、記録の保管と台帳の更新、の順に進めるのが一般的です。買取の見積は、所有権の区分が完了してから取得すると手戻りを防げます。",
  ];

  const ownershipRows = [
    {
      label: "自社で購入した端末",
      value:
        "代金の支払いが完了し、所有権が自社にある端末です。売却・廃棄のいずれも自社の判断で決められます。固定資産や備品として台帳に載っている場合は、処分に合わせて台帳側の処理が必要になります。",
    },
    {
      label: "リース契約の端末",
      value:
        "使用しているのは自社でも、所有権はリース会社にあるのが一般的です。自社の判断で売却することはできません。満了時にどうするか（返却・再リース・買い取り）は契約により定められているため、契約書とリース会社の案内でご確認ください。",
    },
    {
      label: "レンタル契約の端末",
      value:
        "所有権はレンタル会社にあり、返却が前提になります。期間や返却の条件は契約によります。短期利用や繁忙期の増員時に導入され、契約の存在が社内で把握されていない端末が含まれていることがあるため、棚卸の段階で確認します。",
    },
    {
      label: "割賦・分割払いで購入した端末",
      value:
        "支払いが完了しているかどうかで扱いが変わります。残債がある場合、契約上どのような制約があるかは契約内容によります。携帯電話会社の法人契約に付随して購入した端末も同様で、契約書と請求の状況をご確認ください。",
    },
    {
      label: "補助金・助成金で取得した機器",
      value:
        "取得の経緯によっては、処分の際に交付元への手続きが必要になる場合があるとされています。該当する可能性のある機器がある場合は、交付決定の書類や交付元の規程を確認し、手続きの要否を交付元に問い合わせてください。",
    },
    {
      label: "従業員の私物（BYOD）",
      value:
        "会社の資産ではないため、会社が処分することはできません。業務に利用していた私物端末が回収対象に含まれることがあるため、貸与台帳と照合して区分します。回収時の扱いは別ページでご説明しています。",
    },
  ];

  const leaseNotes = [
    {
      t: "契約書の確認箇所",
      d: "所有権の所在、契約期間と満了日、満了時の取り扱い（返却・再リース・買い取りの可否）、中途解約の条件、返却時の状態に関する取り決め、データ消去についての定めの6点を確認します。これらが明らかになれば、売却の対象になるかどうかを判断できます。契約書の表現は会社ごとに異なるため、判断できない場合はリース会社に直接ご確認ください。",
    },
    {
      t: "満了前に入れ替える場合",
      d: "契約期間の途中で端末を入れ替えたい場合の条件は契約によります。中途解約に伴う取り扱いや、入れ替えを前提とした契約かどうかで扱いが変わるため、入れ替えの計画が決まった時点でリース会社にご相談ください。先に買取の見積を取得してから契約を確認すると、対象外の端末が見積に含まれることになります。",
    },
    {
      t: "満了後に買い取る場合",
      d: "契約によっては、満了時に端末を買い取って所有権を自社に移せる場合があります。所有権が移った後であれば、自社の資産として売却を検討できます。買い取った端末の会計処理は会計方針によるため、経理部門や顧問税理士にご確認ください。",
    },
    {
      t: "返却時のデータ消去",
      d: "返却する端末にも業務データが保存されています。返却前にデータを消去する必要があるか、消去はどちら側が行うのか、記録が必要かは契約や運用によって異なります。リース会社の案内を確認したうえで、社内で事前に初期化する運用とすることをおすすめします。初期化の手順は売却時と同じです。",
    },
    {
      t: "契約の存在の社内での把握",
      d: "実務上の課題となりやすいのは、担当者の異動により契約の存在自体が引き継がれていない場合です。端末に貼られた管理シールや資産番号、経理側の支払い記録から契約をたどれることがあります。棚卸のタイミングで、購入かリースかの区分を台帳に明記しておくと、次回以降の確認が容易になります。",
    },
  ];

  const accountingRows = [
    {
      label: "固定資産台帳との関係",
      value:
        "一定の金額以上で取得した端末は固定資産として台帳に登録されていることがあります。現物を手放しても台帳は自動では更新されないため、処分の事実を台帳に反映する作業が別途必要です。どの端末が台帳に登録されているかは、経理部門にご確認ください。",
    },
    {
      label: "取得価額による扱いの違い",
      value:
        "取得価額の水準によって、資産として計上するのか、取得した期に費用として処理しているのかが異なります。どの扱いになっているかは自社の会計方針と取得時の処理によるため、当サイトでは判断できません。経理部門にご確認ください。",
    },
    {
      label: "除却と売却の違い",
      value:
        "廃棄する場合と売却する場合では会計上の処理が異なります。売却では代金が発生するため、その扱いも含めて処理が必要になります。具体的な仕訳や処理の時期は会計方針によるため、経理部門・顧問税理士にご確認ください。",
    },
    {
      label: "処理時期の統一",
      value:
        "現物を引き渡した日、査定結果が確定した日、入金があった日はそれぞれ異なるため、どの時点で処理するかを経理部門と事前に調整しておくと、期末をまたぐ場合の混乱を防げます。台数の多い処分では特に重要です。",
    },
  ];

  const flowSteps = [
    {
      t: "棚卸による対象端末の洗い出し",
      d: "入れ替えや拠点の整理で不要になる端末を、現物と台帳の両方から洗い出します。この時点では売却の可否を判断せず、対象となりうるものをすべて一覧にします。従業員が持っている端末も含めるため、貸与台帳との照合も行います。",
    },
    {
      t: "所有権による区分",
      d: "購入・リース・レンタル・割賦・補助金取得・私物の区分に分けます。区分が明確でない端末は「保留」とし、契約書や経理の記録を確認してから振り分けます。この段階で区分しておかないと、後の見積と引き渡しで手戻りが生じます。",
    },
    {
      t: "契約先への確認",
      d: "リース・レンタル・割賦に該当する端末は、それぞれの契約先に扱いを確認します。返却の手続き、期日、返却前のデータ消去の要否を確認します。補助金で取得した機器がある場合は、交付元の規程で手続きの要否を確認します。",
    },
    {
      t: "売却できる端末の決裁",
      d: "自社所有と確認できた端末について、処分の方針（売却か廃棄か）を決めて決裁を取ります。承認者がわかる記録を残しておくと、後から経緯を説明できます。データ消去証明書が必要かどうかも、この段階までに決めておきます。",
    },
    {
      t: "データ消去と引き渡し",
      d: "組織アカウントやMDMの登録解除を管理者が済ませたうえで、社内で初期化してから引き渡します。返却する端末と売却する端末を取り違えないよう、梱包の段階でも区分がわかる状態にしておきます。",
    },
    {
      t: "記録の保管と台帳の更新",
      d: "受領書、査定結果、買取明細、必要であればデータ消去証明書を受け取り、管理番号と照合します。照合が完了したら台帳の該当行を更新し、経理部門と会計処理を進めます。書類の保管場所も決めておきます。",
    },
  ];

  const pitfalls = [
    {
      t: "リース品が売却の見積に含まれる",
      d: "端末の外観では、購入品かリース品かを判別できません。管理シールや資産番号で区別していない会社では、まとめて見積に出した後で気づくことがあります。事前に区分を済ませることが有効な対策です。",
    },
    {
      t: "残債の有無を確認しないまま進める",
      d: "分割払いで購入した端末や、携帯電話会社の法人契約に付随して購入した端末は、支払いが続いていることがあります。契約上どのような制約があるかは契約内容によるため、支払いの状況を経理部門で確認したうえで、契約先にもご確認ください。",
    },
    {
      t: "台帳の更新を後回しにする",
      d: "現物を引き渡した時点で作業が完了したと誤認しやすい工程です。台帳が更新されないまま次の棚卸を迎えると、現物のない資産が残り続けます。引き渡しと台帳更新を同じ担当者の業務として連続させることで、漏れを防ぎやすくなります。",
    },
    {
      t: "返却する端末のデータ消去を忘れる",
      d: "売却する端末の消去には注意を払っていても、返却する端末の消去が漏れることがあります。返却も第三者に端末を渡す行為である点は同じです。契約上の定めを確認したうえで、社内で初期化してから返却する運用とすることをおすすめします。",
    },
    {
      t: "会計処理の時期を決めずに引き渡す",
      d: "期末が近い時期の処分では、どの時点で処理するかによって帳簿への反映が変わります。引き渡しの前に経理部門と時期を調整しておくと、後から遡って修正する手間を防げます。処理の考え方は会計方針によるため、経理部門にご確認ください。",
    },
  ];

  const faqs = [
    {
      q: "リース中の端末を買取に出すことはできますか。",
      a: "リース契約の端末は所有権がリース会社にあるのが一般的で、自社の判断で売却することはできません。ただし、契約の内容によって満了時や途中での取り扱いは異なります。まず契約書を確認し、判断できない場合はリース会社に直接ご確認ください。当サイトでは個別の契約について可否を判断することはできません。",
    },
    {
      q: "リースが満了した端末は自由に売れますか。",
      a: "満了後の扱いは契約によって異なります。返却が前提の契約であれば返却します。買い取りにより所有権が自社に移る契約であれば、移転後は自社の資産として扱えます。どちらに該当するかは契約内容によるため、リース会社にご確認ください。",
    },
    {
      q: "減価償却が終わっていない端末でも売却できますか。",
      a: "所有権が自社にあるのであれば、売却すること自体は可能です。ただし、帳簿に残っている価額と売却の金額をどう処理するかという会計上の手続きが伴います。処理の方法は会計方針によって異なるため、売却の前に経理部門や顧問税理士にご確認ください。",
    },
    {
      q: "分割払いが残っている社用スマホはどう扱えばよいですか。",
      a: "支払いが完了していない端末について、契約上どのような制約があるかは契約内容によります。携帯電話会社の法人契約に付随して購入した端末も同様です。まず経理部門で支払いの状況を確認し、そのうえで契約先に扱いをご確認ください。",
    },
    {
      q: "補助金で買ったPCを売ってもよいですか。",
      a: "補助金で取得した機器には、処分に関する手続きが定められている場合があるとされています。該当するかどうかは交付の条件によるため、交付決定の書類と交付元の規程を確認し、必要に応じて交付元にお問い合わせください。当サイトでは可否を判断することはできません。",
    },
    {
      q: "売却した代金はどう処理すればよいですか。",
      a: "処理の方法は自社の会計方針と、その端末が帳簿上どう扱われていたかによって変わります。当サイトでは具体的な処理方法を示すことはできません。経理部門または顧問税理士にご確認ください。振込先は法人名義の口座を求められるのが一般的です。",
    },
    {
      q: "掲載されている買取サービスは法人からの依頼を受け付けていますか。",
      a: "当サイトでは各社の公式サイトで確認できた記載の範囲でのみ掲載しており、確認できなかった項目は「公式では確認できず」と表示しています。法人対応の可否や必要書類は、各社に直接ご確認ください。各社の条件は比較表に掲載しています。",
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
          { name: "リース品・資産計上した端末を手放す際の注意点", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">FOR BUSINESS</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          リース品・資産計上した端末を手放す際の注意点｜所有権・残債・社内手続き
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          機器の入れ替えで不要になった業務用のPCやスマホには、一般に、購入品、リース品、分割払いが残っているもの、従業員の私物が混在しています。このうち買取に出せるのは、所有権が自社にある端末のみです。本ページでは、手放す前の所有権による区分方法、リース・レンタル・割賦・補助金で取得した機器の確認事項、資産計上されている端末に必要な社内手続きを、一般知識としてご説明します。契約内容や会計方針によって扱いが変わるため、判断はリース会社・経理部門・顧問税理士へのご確認を前提としてください。
        </p>
        <p className="mt-4 max-w-3xl text-xs leading-loose text-steel-500">
          公開日: {PUBLISHED_LABEL}／本ページは一般的な情報の提供を目的としており、個別の契約の解釈、法務・会計・税務上の判断を示すものではありません。契約の内容と会計上の扱いは個別に異なります。
        </p>

        {/* 冒頭の要点 */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">所有権の区分と社内手続きの要点</h2>
          <ul className="mt-4 space-y-3">
            {conclusions.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* 所有権で仕分ける */}
        <section className="mt-14">
          <h2 className="section-title mb-2">所有権による区分</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            端末の外観だけでは、購入品かリース品かを判別できません。最初にこの区分を明確にしておかないと、見積に出した後で対象外であることが判明し、手戻りが生じます。区分ごとの一般的な考え方を以下に掲載します。いずれの区分でも、最終的な条件は契約書に書かれている内容によります。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {ownershipRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 区分ごとの扱いは契約内容により異なります。契約書の内容が優先されるため、個別の判断は契約先にご確認ください。
          </p>
        </section>

        {/* リース契約 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">リース・レンタル契約の確認事項</h2>
          <div className="space-y-4">
            {leaseNotes.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/guide/data-shokyo/" className="btn-primary">返却前の初期化手順を見る</Link>
            <Link href="/situation/houjin/" className="btn-ghost">法人の端末処分の全体像に戻る</Link>
          </div>
        </section>

        {/* 資産計上 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">資産計上された端末の社内手続き</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            所有権が自社にあることを確認できても、台帳に登録されている端末は、現物を手放すだけでは処理が完了しません。会計上の扱いは自社の会計方針によって異なるため、ここでは経理部門と相談すべき項目を掲載します。具体的な処理方法は経理部門・顧問税理士にご確認ください。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {accountingRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 会計処理・税務上の扱いは会計方針により異なります。当サイトは具体的な処理方法を示すものではありません。経理部門・顧問税理士にご確認ください。
          </p>
        </section>

        {/* 進め方 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">手放すまでの手順</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            正しい順序で進めれば、手戻りはほとんど生じません。要点は、「所有権の区分を買取の相談より前に済ませる」ことと、「引き渡しと台帳更新を連続して行う」ことの2点です。
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
            <Link href="/situation/houjin/data-shokyo-shomeisho/" className="btn-primary">データ消去証明書の確認事項を見る</Link>
            <Link href="/guide/takuhai-nagare/" className="btn-ghost">宅配買取の基本の流れを見る</Link>
          </div>
        </section>

        {/* つまずき */}
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

        {/* 買取に出す前に */}
        <section className="mt-14">
          <h2 className="section-title mb-2">見積の取得時期（売却対象の確定後）</h2>
          <div className="max-w-3xl space-y-4 text-sm leading-loose text-steel-600">
            <p>
              買取の相談は、所有権の区分が完了し、決裁を取得した段階で行います。この順序を入れ替えると、見積に対象外の端末が含まれたり、引き渡し直前に一部を除外したりすることになり、査定のやり直しが発生します。台数が多いほど影響が大きくなります。
            </p>
            <p>
              買取に出す端末が確定したら、機種・型番・識別番号・状態・付属品の有無を一覧にして相談します。金額の水準は台数・機種・状態によって異なり、当サイトで具体的な金額を示すことはできません。条件面で比較できるのは、送料や返送料の扱い、査定から入金までの流れ、キャンセル時の条件、データ消去の対応といった項目です。掲載サービスについては
              <Link href="/compare/" className="text-vermilion underline underline-offset-4">統一比較表</Link>
              で同じ基準により比較しています。法人対応の可否と必要書類は、公式サイトの記載を確認したうえで各社に直接お問い合わせください。
            </p>
            <p>
              カテゴリごとの注意点は、
              <Link href="/pc/" className="text-vermilion underline underline-offset-4">Windows PC・ノートPCの買取</Link>
              、
              <Link href="/mac/" className="text-vermilion underline underline-offset-4">Mac・MacBookの買取</Link>
              、
              <Link href="/iphone/" className="text-vermilion underline underline-offset-4">iPhoneの買取</Link>
              、
              <Link href="/android/" className="text-vermilion underline underline-offset-4">Androidスマホの買取</Link>
              、
              <Link href="/tablet/" className="text-vermilion underline underline-offset-4">iPad・タブレットの買取</Link>
              の各ページでご説明しています。故障して起動しない端末が含まれる場合は
              <Link href="/situation/kowareta/" className="text-vermilion underline underline-offset-4">壊れた端末の売り方</Link>
              もご参照ください。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">リース・資産計上に関するよくある質問</h2>
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
              <Link href="/situation/houjin/jugyoin-tanmatsu-kaishu/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">従業員の業務端末を回収する際の進め方</span>
                <span className="mt-1 block text-xs text-steel-500">回収漏れ・私物混在・MDM解除</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/data-shokyo/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売る前のデータ消去の手順</span>
                <span className="mt-1 block text-xs text-steel-500">返却・売却どちらでも共通の初期化</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/honnin-kakunin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取の本人確認</span>
                <span className="mt-1 block text-xs text-steel-500">法人取引で求められる書類の基礎知識</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">掲載サービスの統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">条件を同じ基準で比較</span>
              </Link>
            </li>
            <li>
              <Link href="/pc/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Windows PC・ノートPCの買取</span>
                <span className="mt-1 block text-xs text-steel-500">業務用PCの確認事項</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/kowareta/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">壊れた・起動しない端末の売り方</span>
                <span className="mt-1 block text-xs text-steel-500">初期化できない端末が含まれる場合</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
