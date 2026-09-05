import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR, PUBLISHED_DATE } from "@/lib/site";

const TITLE = "壊れた・起動しないスマホやPCは売れる？｜画面割れ・水没・バッテリー劣化の売り方";
const DESC =
  "画面割れ・バッテリー劣化・水没・起動しない・ボタン不良・背面割れなど、壊れたスマホやPCが買取でどう見られるかを一般知識として整理。売る前にできるデータ消去と「探す」解除、起動しない端末の遠隔削除、買取不可のときの処分先、故障品を受け付ける業者を選ぶときの確認点をまとめました。";
const PATH = "/situation/kowareta/";

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

export default function KowaretaSituationPage() {
  const conclusions = [
    "「壊れている」は一つの状態ではありません。画面割れ・バッテリー劣化・水没・起動不可・ボタン不良・背面割れは、査定での見られ方がそれぞれ異なります。",
    "起動しない端末でも、部品取りや再生（リファービッシュ）の用途で買取対象になる場合があるとされています。まずは故障品の受け付けを明記している業者かどうかを確認しましょう。",
    "起動する端末は、送る前に必ずデータ消去と「探す」（アクティベーションロック）の解除を済ませます。起動しない端末は、iCloud.comやGoogleアカウントの管理画面など、別の端末から遠隔で削除・解除する方法があります。",
    "買取不可と判断された場合でも、自治体の小型家電回収やメーカー・キャリアの回収など、処分の受け皿となる制度が一般に用意されています。",
  ];

  const kindRows = [
    {
      label: "画面割れ",
      value:
        "ガラスのひび・タッチ操作の可否・表示の欠けや液漏れの有無で区別されるのが一般的です。表示とタッチが正常なら軽微な傷として扱われ、表示不良を伴うと修理前提の扱いになりやすいとされています。",
    },
    {
      label: "バッテリー劣化",
      value:
        "電池の最大容量や膨張の有無が見られます。膨張している端末は安全面から受け付けを制限する業者もあるため、事前に受付条件の確認が必要です。",
    },
    {
      label: "水没",
      value:
        "端末内部の液体侵入インジケータで判定されることが多く、今は動いていても「水没歴あり」として扱われるのが一般的です。時間が経ってから不具合が出ることがあるため、査定では慎重に見られます。",
    },
    {
      label: "起動しない",
      value:
        "電源が入らない・ロゴで止まる・充電に反応しないなど原因は様々です。動作確認ができないため、部品取り・再生用途として受け付けるかどうかは業者の方針次第です。",
    },
    {
      label: "ボタン不良・端子不良",
      value:
        "電源ボタン・音量ボタン・ホームボタン・充電端子・イヤホン端子などの不具合です。主要機能への影響度で判断されるのが一般的で、基本動作に支障がなければ軽微な減点にとどまることもあるとされています。",
    },
    {
      label: "背面割れ・筐体の変形",
      value:
        "背面ガラスの割れ、フレームの歪み、ヒンジの破損（ノートPC）など外装の損傷です。内部の動作に問題がなければ外装ランクの扱いになることが多いものの、変形が大きい場合は内部への影響も疑われます。",
    },
  ];

  const beforeSteps = [
    {
      t: "起動するならデータ消去と「探す」解除を必ず行う",
      d: "画面割れやバッテリー劣化で「壊れている」端末でも、起動する限りは通常の端末と同じくデータの初期化とアクティベーションロック（iPhoneの「探す」、Androidのデバイス保護）の解除が必要です。ロックが残ったままだと、業者側で再利用できず買取不可や減額の原因になるとされています。手順はデータ消去ガイドとアクティベーションロックの解説ページで整理しています。",
    },
    {
      t: "画面が映らない・タッチが効かないときの代替操作",
      d: "画面が割れてタッチできない場合でも、PCに接続して初期化する方法や、外部キーボード・マウスを接続して操作する方法が用意されています。iPhoneはPC上のiTunesやFinderから、AndroidはメーカーのPC向けツールやリカバリーモードから初期化できる場合があります。機種ごとの手順はメーカーの公式サポート情報を確認してください。",
    },
    {
      t: "起動しない端末はアカウント側から遠隔で削除する",
      d: "電源が入らない端末は本体から初期化できません。その場合は、別の端末やPCからiCloud.comの「探す」（デバイスを探す）にサインインし、対象端末を「消去」し「アカウントから削除」する方法が一般に案内されています。Androidは「デバイスを探す」からのリモート消去とアカウントからの削除、Windows PCはMicrosoftアカウントのデバイス一覧からの削除が相当します。オフラインの端末は次にネットに接続した時点で消去が実行される扱いです。",
    },
    {
      t: "SIMカード・SDカードを抜く",
      d: "壊れた端末ほど付属品の確認を忘れがちです。SIMカードやmicroSDカードは本体と別に管理し、送付前に必ず抜き取ります。SDカードに写真や連絡先のバックアップが残っていることも多いため、抜き忘れは情報の持ち出しにつながります。",
    },
    {
      t: "故障の状況を正直に申告する",
      d: "水没歴や起動しない状態を申告せずに送ると、査定後に条件が変わったり、返送の手間が発生したりします。申込フォームに故障内容の記入欄がある業者では、症状・発生時期・修理歴を書いておくと、査定と受け付けの可否が早く決まります。",
    },
  ];

  const dataRisk = [
    {
      t: "「起動しない＝データが読めない」ではない",
      d: "電源が入らない原因が画面やバッテリー、基板の一部にある場合、ストレージ自体は無事なことがあります。修理や部品交換で起動すればデータはそのまま読める状態のため、起動しない端末でも「データが入っている端末」として扱う考え方が一般的です。",
    },
    {
      t: "暗号化の有無で考える",
      d: "近年のiPhoneやAndroidはストレージが標準で暗号化されており、パスコードなしで内容を取り出すことは難しいとされています。一方、古いWindows PCなどでBitLockerや同等の暗号化を有効にしていない場合、ストレージを取り出して別のPCに接続すれば読める可能性があります。PCの場合は特に、遠隔削除ができない点も含めて慎重に判断が必要です。",
    },
    {
      t: "業者のデータ消去ポリシーを読む",
      d: "起動しない端末を受け付ける業者は、受け入れ後に物理破壊やソフトウェア消去を行うと案内していることが一般的です。ただし方法や証明の有無は業者ごとに異なります。「消去します」の一文だけでなく、方式・タイミング・証明書の発行可否まで記載があるかを確認しましょう。",
    },
    {
      t: "リスクが許容できなければストレージを抜く・処分を選ぶ",
      d: "ノートPCやデスクトップPCの場合、ストレージ（SSD・HDD）を自分で取り外して手元に残し、本体だけを売却・処分する選択肢もあります。取り外した状態で受け付けるかどうかは業者によるため、事前に確認が必要です。どうしても不安な場合は、売却ではなく自分で物理破壊してから処分する方法もあります。",
    },
  ];

  const disposal = [
    {
      t: "自治体の小型家電回収",
      d: "小型家電リサイクル法に基づき、多くの自治体が公共施設やスーパーなどに回収ボックスを設置しています。対象品目や投入口のサイズは自治体ごとに決められているため、お住まいの自治体の案内を確認してください。回収に出す前にデータ消去が必要なのは買取に出すときと同じです。",
    },
    {
      t: "携帯電話会社（キャリア）ショップの回収",
      d: "携帯電話会社の店舗では、メーカーや契約先を問わず使用済み携帯電話・スマホを回収する取り組みが一般に行われています。店頭で端末に穴を開けるなどの破壊処理をしてから回収するケースもあるとされており、データの心配がある場合の選択肢の一つです。",
    },
    {
      t: "メーカーの回収・リサイクルプログラム",
      d: "PCについては、メーカーが自社製品の回収を受け付ける制度（PCリサイクル）があります。PCリサイクルマークが付いている家庭向けPCは、メーカーへの申し込みで回収される仕組みが一般的です。マークがない古いPCは費用がかかる場合があります。スマホやタブレットもメーカーが独自の回収プログラムを設けていることがあります。",
    },
    {
      t: "ジャンク品として受け付ける業者",
      d: "動作しない端末を「ジャンク」として一律の条件で受け付ける業者もあります。金額は動作品と比べて限定的になるのが通例ですが、処分費用をかけずに手放せる点が利点です。受付条件（機種の範囲・付属品・台数）は業者の案内で確認してください。",
    },
  ];

  const selectPoints = [
    {
      t: "故障品・起動不可の受け付けが明記されているか",
      d: "「どんな状態でも」といった表現ではなく、画面割れ・水没・起動不可・バッテリー膨張のそれぞれについて受け付け可否が書かれているかを見ます。膨張バッテリーは輸送上の理由で受け付けない業者もあります。当サイトの比較表では各社の公式サイトで確認できた「画面割れ・故障・起動不可の扱い」を並べています。",
    },
    {
      t: "査定後にキャンセルしたときの返送料",
      d: "壊れた端末は査定額が想定と違うことが起きやすく、キャンセルの可能性が動作品より高くなります。キャンセル時の返送料が無料か有料か、買取不可と判断された端末が返送されるのか処分されるのかを、申込前に規約で確認しておきましょう。",
    },
    {
      t: "データ消去ポリシーと証明の有無",
      d: "起動しない端末は自分で消去を完了できないため、業者側のデータ消去の方式が判断材料になります。消去方法の記載、消去証明書や消去完了通知の有無、消去までの期間などが公式サイトで確認できるかを見てください。",
    },
    {
      t: "宅配買取の梱包と輸送の条件",
      d: "画面が割れた端末はガラス片が散る可能性があるため、袋に入れてから緩衝材で包むなどの配慮が必要です。バッテリーが膨張した端末は航空輸送に制限があるとされており、業者が指定する発送方法に従う必要があります。梱包キットの有無や指定の配送方法も確認項目です。",
    },
  ];

  const checklist = [
    "故障の種類（画面割れ・バッテリー・水没・起動不可・ボタン・背面）を把握し、症状をメモした",
    "起動する端末はバックアップを取り、初期化と「探す」（アクティベーションロック）解除を完了した",
    "起動しない端末は別の端末からiCloud.com等にサインインし、遠隔消去とアカウントからの削除を実行した",
    "SIMカード・SDカードを抜き取り、手元に保管した",
    "PCの場合、ストレージの暗号化状態を確認し、必要ならストレージを取り外す判断をした",
    "業者の公式サイトで故障品の受付条件・返送料・データ消去ポリシーを読んだ",
    "申込フォームに故障内容・水没歴・修理歴を正直に記入した",
    "本人確認書類（運転免許証など）の準備をした",
    "梱包はガラス片対策と緩衝材を用意し、膨張バッテリーは業者指定の方法で発送する",
    "買取不可の場合の処分先（自治体回収・キャリア回収・メーカー回収）を候補として把握した",
  ];

  const faqs = [
    {
      q: "画面が割れているスマホでも買い取ってもらえますか？",
      a: "表示とタッチ操作が正常であれば、外装の傷として扱われ買取対象になるのが一般的です。表示不良やタッチ不良を伴う場合は修理前提の扱いになり、受け付け可否や条件が業者ごとに分かれます。故障品の受け付けを明記している業者に、症状を正直に申告して査定を依頼してください。",
    },
    {
      q: "電源が入らないPCやスマホは売れますか？",
      a: "動作確認ができないため通常の査定とは別枠になりますが、部品取りや再生の用途で受け付ける業者はあるとされています。ただし業者の方針次第で、買取不可となる場合もあります。送る前に、別の端末からアカウント側で遠隔消去・アカウントからの削除を済ませ、PCはストレージの暗号化状態を確認したうえで判断してください。",
    },
    {
      q: "起動しない端末の「探す」（アクティベーションロック）はどう解除しますか？",
      a: "別の端末やPCからiCloud.comにサインインし、「探す」（デバイスを探す）で対象端末を選んで消去と「アカウントから削除」を行う方法が一般に案内されています。Androidの場合はGoogleアカウントの「デバイスを探す」からリモート消去とアカウントからの削除を行います。オフラインの端末は次回ネット接続時に処理される扱いです。詳細はアクティベーションロックの解説ページを参照してください。",
    },
    {
      q: "水没したけれど今は普通に動いています。申告は必要ですか？",
      a: "申告するのが原則です。端末内部の液体侵入インジケータで水没歴は判定されることが多く、申告がないまま査定で判明すると条件の変更や返送につながります。今は動いていても後から不具合が出ることがあるため、査定側は慎重に扱います。",
    },
    {
      q: "買取不可と言われた端末はどう処分すればよいですか？",
      a: "自治体の小型家電回収ボックス、携帯電話会社の店頭回収、メーカーのPCリサイクル制度など、処分の受け皿となる制度が一般に用意されています。対象品目や手続きはそれぞれの案内で確認してください。いずれの場合もデータ消去は売却時と同様に必要です。",
    },
    {
      q: "バッテリーが膨らんでいる端末は宅配で送れますか？",
      a: "膨張したバッテリーは輸送上の制限があるとされており、受け付けない業者や、指定の梱包・配送方法を求める業者があります。無理に送らず、事前に業者へ症状を伝えて指示を受けるか、店頭持ち込みや自治体・キャリアの回収など別の手段を検討してください。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "壊れた・起動しないスマホやPCの売り方", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">BROKEN DEVICES</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          壊れた・起動しないスマホやPCは売れる？｜画面割れ・水没・バッテリー劣化の売り方
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          画面が割れた、電池がすぐ切れる、水に落とした、電源が入らない。ひとくちに「壊れた」と言っても状態は様々で、買取での見られ方も違います。このページでは、故障の種類ごとに査定で一般にどう扱われるか、売る前にやっておくべきデータ消去と「探す」解除、起動しない端末のデータリスクの考え方、買取不可のときの処分先、故障品を受け付ける業者を選ぶときの確認点を、一般知識として整理します。
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

        {/* 故障の種類 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">「壊れた」の種類と査定での一般的な見られ方</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            買取の査定では「動作」「外装」「付属品」を分けて見るのが一般的です。同じ「壊れた」でも、動作に影響するかどうかで扱いが大きく変わります。故障の種類ごとに、一般にどのような観点で見られるかを整理しました。金額の目安は業者・機種・時期で異なるため、ここでは扱いません。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {kindRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 上記は一般的な査定観点の整理です。個別の端末の扱いは各業者の受付条件・査定基準に従います。部品取り・再生用途で受け付けるかどうかは業者の方針によって異なります。
          </p>
        </section>

        {/* 売る前にできること */}
        <section className="mt-14">
          <h2 className="section-title mb-6">売る前にできること（データ消去と「探す」解除）</h2>
          <div className="space-y-5">
            {beforeSteps.map((s, i) => (
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
            <Link href="/guide/data-shokyo/" className="btn-primary">データ消去の手順を見る</Link>
            <Link href="/guide/activation-lock/" className="btn-ghost">「探す」解除の手順を見る</Link>
          </div>
        </section>

        {/* データリスク */}
        <section className="mt-14">
          <h2 className="section-title mb-6">起動しない端末のデータリスクの考え方</h2>
          <div className="space-y-4">
            {dataRisk.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 処分先 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">ジャンク扱い・買取不可のときの処分先</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            買取に出しても値が付かない、あるいは受け付け自体を断られた場合でも、端末を捨てる方法は一般ごみだけではありません。処分の受け皿として一般に用意されている制度を整理します。いずれもデータ消去は自分で済ませてから出すのが原則です。
          </p>
          <div className="space-y-5">
            {disposal.map((s, i) => (
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
            ※ 回収制度の対象品目・費用・手続きは自治体・事業者ごとに異なります。利用前に各案内で最新の条件を確認してください。
          </p>
        </section>

        {/* 業者選び */}
        <section className="mt-14">
          <h2 className="section-title mb-2">故障品を売るときの業者選びで確認する条件</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            壊れた端末は、動作品よりも「受け付けてもらえるか」「キャンセル時にどうなるか」「データはどう扱われるか」の三点が重要になります。公式サイトで確認しておきたい項目を整理しました。
          </p>
          <div className="space-y-4">
            {selectPoints.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">故障品の扱いを比較表で見る</Link>
            <Link href="/shindan/" className="btn-ghost">売り方診断で確認する</Link>
          </div>
        </section>

        {/* チェックリスト */}
        <section className="mt-14">
          <h2 className="section-title mb-6">壊れた端末を売る前のチェックリスト</h2>
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
          <h2 className="section-title mb-6">壊れた端末の買取でよくある質問</h2>
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
                <span className="mt-1 block text-xs text-steel-500">起動しない端末の遠隔解除も含めて整理</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/houjin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">法人のPC・スマホをまとめて処分・買取に出すには</span>
                <span className="mt-1 block text-xs text-steel-500">データ消去証明と台数対応の確認点</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取業者の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">故障品の扱い・返送料・データ消去を同じ物差しで</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/takuhai-nagare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">宅配買取の流れ</span>
                <span className="mt-1 block text-xs text-steel-500">申込から入金までの一般的な手順</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/honnin-kakunin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取の本人確認について</span>
                <span className="mt-1 block text-xs text-steel-500">古物営業法に基づく確認の一般知識</span>
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
              <Link href="/mac/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Mac・MacBookの買取</span>
                <span className="mt-1 block text-xs text-steel-500">Mac専門業者と初期化の要点</span>
              </Link>
            </li>
            <li>
              <Link href="/pc/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Windows PC・ノートPCの買取</span>
                <span className="mt-1 block text-xs text-steel-500">ストレージのデータ消去が要点</span>
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
