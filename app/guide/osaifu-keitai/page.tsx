import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";

const TITLE = "おサイフケータイ・電子マネーは端末を手放す前に移す｜初期化前に済ませる順番";
const DESC =
  "スマホを下取り・買取に出す前に、おサイフケータイや電子マネー、交通系ICを移しておく考え方を整理しています。初期化後では取り出しにくい理由、サービス側の手続き→端末側の設定削除→初期化という順序、iPhoneのウォレットとの違い、壊れた端末の相談先、買取店は解除を代行しないことまでをまとめました。";
const PATH = "/guide/osaifu-keitai/";
const PAGE_DATE = "2026-09-23";
const PAGE_DATE_LABEL = "2026年9月23日";

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
  datePublished: PAGE_DATE,
  dateModified: PAGE_DATE,
  mainEntityOfPage: `${SITE_URL}${PATH}`,
  author: { "@type": "Organization", name: OPERATOR.name },
  publisher: { "@type": "Organization", name: SITE_NAME },
};

export default function OsaifuKeitaiGuidePage() {
  const conclusions = [
    "順番は「各サービス側の手続き → 端末側の設定・アプリの削除 → 初期化」です。初期化を先に済ませてしまうと、端末に記録されたまま残ったものの扱いについて、あとから各サービスへ問い合わせる必要が出てくることがあります。",
    "何がどこに保存されているかはサービスごとに異なります。サービス側（サーバー）で預かる仕組みのものと、端末側に記録が残る仕組みのものがあり、後者は端末を手放したあとでは利用者が操作できません。そのため、端末が手元にあり操作できるうちに済ませる必要があります。",
    "iPhoneのウォレットとAndroidのおサイフケータイでは、考え方の出発点が異なります。iPhoneは端末とアカウントの結びつきを解く考え方、Androidはサービスごとに手続きをしてから端末側の記録を確認する考え方になりやすいと整理すると、判断しやすくなります。",
    "個々のサービスの画面操作は更新が早いため、このページでは個別の手順は掲載しません。代わりに、「サービス名＋手続き名で公式の案内を探す」という、変更の影響を受けにくい確認方法をご説明します。残高やポイントの扱いは、必ず各サービスの公式案内に従ってください。",
    "機種変更先の端末がない場合や、電源が入らない・画面が反応しないなどで操作できない場合は、自己判断で進めず各サービスの問い合わせ窓口に相談してください。買取店はサービスの解約・移行を代行しません。",
  ];

  const whereRows = [
    {
      label: "サービス側（サーバー）で管理されるもの",
      value:
        "アカウントにひもづけて管理される仕組みのサービスでは、別の端末でサインインし直すと引き続き利用できる形になっていることがあります。ただし、そのために利用者側で所定の手続きが必要かどうかはサービスによって異なります。アカウントがあれば問題ないと判断せず、各サービスの公式案内で、端末を変えるときに何が必要とされているかを確認してください。",
    },
    {
      label: "端末側に記録が残るもの",
      value:
        "非接触ICの仕組みを使うサービスには、端末内のICチップ側に情報が記録されるものがあります。この場合、端末を手放したあとで利用者自身で取り出す操作はできません。手放す前に、各サービスが案内している手続きを済ませておく必要があります。どのサービスがこれに当たるかは公式の案内で確認してください。",
    },
    {
      label: "端末と本人確認が結びついているもの",
      value:
        "決済や認証に使うアプリには、「この端末を本人のものとして登録する」形で動いているものがあります。端末側だけを初期化しても、サービス側の登録が自動で消えるとは限りません。新しい端末での利用を続けるのか、利用をやめるのかを決めたうえで、各サービスの案内に従って手続きしてください。",
    },
  ];

  const steps = [
    {
      t: "手放す端末に何が入っているかを書き出す",
      d: "最初に行うのは、操作ではなく利用サービスの棚卸しです。決済・交通系IC・ポイント・社員証や会員証の代わりになるもの・認証アプリまで、その端末でしか使っていないものがないかを紙かメモに書き出します。普段使っているものは思い出せますが、数年前に一度だけ登録したものは忘れやすいものです。手がかりの探し方は次の章にまとめています。",
    },
    {
      t: "サービスごとに、公式案内の手続きを済ませる",
      d: "書き出したサービスを一つずつ、公式の案内に沿って処理します。新しい端末に移すのか、いったん利用を終えるのかで手続きが変わるサービスもあります。この工程が作業の中心で、最も時間がかかります。手続きの名前や場所はサービスによって異なるため、次章の探し方で公式ページを開いてから進めてください。",
    },
    {
      t: "端末側の設定とアプリを整理し、記録が残っていないか確認する",
      d: "サービス側の手続きが終わったら、端末側の設定やアプリで、まだ情報が残っていないかを確認します。Androidでは非接触ICの管理に使うアプリから、端末内の状態を確認できるようになっていることがあります。iPhoneでは、支払い用のカード類を扱う標準アプリの一覧を見て、残っているものがないかを確認します。ここで残っているものが見つかったら、初期化を止めて先にその処理をします。",
    },
    {
      t: "最後に初期化し、カード類を抜く",
      d: "ここまで終えてから初期化します。初期化そのものの手順は、OSごとに当サイトの別ページで整理しています。SIMカードやSDカードの取り出しも、初期化と同じタイミングで行います。初期化を済ませてから残っていたサービスに気づいても、対応できることが限られるため、この順番は崩さないでください。",
    },
  ];

  const findRows = [
    {
      label: "支払い・非接触ICに関する設定の画面",
      value:
        "設定アプリの中に、支払いや非接触通信（NFC）に関する項目が用意されていることがあります。そこに登録済みのサービスが並んでいれば、棚卸しの出発点になります。項目名は機種やOSのバージョンで異なるため、設定アプリの検索欄に「支払い」「NFC」などと入力して探すと見つけやすくなります。",
    },
    {
      label: "アプリの一覧を順に確認する",
      value:
        "ホーム画面ではなく、設定アプリの「アプリ」一覧やアプリストアの購入・インストール履歴を見ると、普段は開いていないアプリも含めて確認できます。決済・交通・ポイント・会員証・認証の各カテゴリに当てはまるものがないか、一覧を上から順に見ていくのが確実です。",
    },
    {
      label: "メールとカード明細をさかのぼる",
      value:
        "登録時の確認メールや、チャージ・購入の通知メールが残っていることがあります。メールアプリで「登録」「チャージ」「ご利用」などの語で検索すると、忘れていたサービスに気づけることがあります。クレジットカードの利用明細に見覚えのないアプリ名があれば、それも棚卸しの対象です。",
    },
    {
      label: "家族や会社から渡されたものを確認する",
      value:
        "家族の共有アカウントで登録したもの、勤務先から利用を求められているもの（入退室や業務用の認証など）が入っていることがあります。ご自身の判断だけで解約・移行してよいかわからない場合は、先に持ち主や管理部門に確認してください。法人で貸与された端末の扱いは、当サイトの法人向けページも参考になります。",
    },
  ];

  const howToFindOfficial = [
    {
      t: "「サービス名＋機種変更」で公式の案内を探す",
      d: "多くのサービスは、端末を変えるときの案内を専用のページにまとめています。検索するときは、サービスの正式名称と「機種変更」を並べて入力し、検索結果の中から公式サイト（サービス提供元のドメイン）のページを開きます。まとめサイトや個人の解説記事は、古い画面のまま残っていることがあるため、最終的な判断は公式の案内で行ってください。",
    },
    {
      t: "「サービス名＋退会」「サービス名＋残高」でも探す",
      d: "新しい端末に移さず利用をやめる場合は「退会」「解約」、残っている残高やポイントの扱いを知りたい場合は「残高」「払いもどし」といった語を足すと、目的のページにたどり着きやすくなります。表現はサービスによって異なるため、一語で見つからない場合は言い換えて検索してください。",
    },
    {
      t: "ヘルプの中の「よくある質問」から入る",
      d: "公式サイトのヘルプやサポートのページには、端末の変更・故障・紛失に関する質問がまとめられていることが多くあります。手続きのページを直接探すより、ヘルプの目次から入ったほうが、ご自身の状況に近い案内を見つけやすい場合があります。",
    },
    {
      t: "アプリ内の案内を優先する",
      d: "アプリを開ける状態なら、アプリ内のヘルプやお知らせに最新の案内が掲載されている場合が多くあります。画面の名称が変わっていても、アプリ内の導線をたどれば現在の手続きに行き着きます。アプリが開けない状態であれば、次章の相談先に進んでください。",
    },
    {
      t: "更新日と対象を確かめる",
      d: "公式のページでも、OSや端末の種類によって案内が分かれていることがあります。ページ上部や下部の更新日、対象の端末・OSの記載を確認し、ご自身の状況に当てはまる案内かどうかを確認してから進めてください。当サイトでは各サービスの手続き内容そのものは扱っていません。",
    },
  ];

  const platformRows = [
    {
      label: "iPhone（ウォレット）の考え方",
      value:
        "iPhoneでは、支払いに使うカード類を標準のアプリで一括して扱う形になっており、端末とアカウントの結びつきが土台にあります。そのため「端末からカード類を外す」「アカウントからサインアウトする」という流れで考えることになります。あわせて、手放す端末が「探す」の対象のままだと、下取りでも買取でも手続きが進まないのが一般的です。アクティベーションロックの解除は当サイトの別ページで整理しています。なお、交通系ICのように同じカードを複数の端末に同時に入れられない仕組みのサービスもあるため、新しい端末側の状態も含めて各サービスの案内で確認してください。",
    },
    {
      label: "Android（おサイフケータイ）の考え方",
      value:
        "Androidでは、非接触ICを使うサービスがそれぞれ独立して動いており、まずサービスごとに公式案内の手続きを行い、そのうえで端末側に記録が残っていないかを確認する、という二段構えになりやすい点が特徴です。サービスの数だけ手続きがあると考え、棚卸しの段階で漏れがないようにしておくことが、そのまま作業量の見通しになります。端末側の確認に使うアプリの名称や画面は機種によって異なるため、設定アプリの機種名表示を確認したうえで、メーカーのサポートページでお使いの機種の表記を確認してください。",
    },
    {
      label: "共通して言えること",
      value:
        "どちらの場合も、「新しい端末で使えるようになったこと」と「古い端末から消えたこと」は別の確認です。移行できたつもりでも古い端末側に残っていることがあるため、手放す端末の側で残っていないかを必ず見てください。そして、この確認は初期化の前に行います。",
    },
  ];

  const troubles = [
    {
      t: "新しい端末をまだ決めていない・機種変更先がない",
      d: "移す先の端末がない場合の扱いは、サービスによって異なります。いったん預ける形にできるもの、利用終了の手続きが必要なもの、別の方法が案内されているものがあり、当サイトでは一律の答えを示せません。サービス名と「機種変更」「退会」で公式の案内を開き、移行先がない場合の記載を探してください。見つからない場合は、各サービスの問い合わせ窓口に状況を伝えて相談するのが確実です。",
    },
    {
      t: "電源が入らない・画面が反応せず操作できない",
      d: "端末側で操作できない状態では、利用者自身で手続きを完了できないことがあります。この場合も対応はサービスごとに異なるため、まず各サービスの問い合わせ窓口に、端末が操作できないことを伝えて相談してください。修理や交換を検討している場合は、メーカーやキャリアの窓口にも、サービスの扱いについて確認しておくと、手続きの重複を避けやすくなります。故障した端末の売却そのものについては、当サイトの別ページで整理しています。",
    },
    {
      t: "アプリが起動しない・開けない",
      d: "アプリが開かない原因は、通信環境、OSやアプリの状態、サービス側の状況など複数が考えられ、当サイトでは原因を特定できません。公式に記載のない内容を推測で進めると状況が複雑になるため、サービス名と症状で公式ヘルプを探すか、問い合わせ窓口に相談してください。買取や下取りの期限が迫っている場合は、先に相談を始めておくと、手続きが間に合わないまま初期化する事態を避けやすくなります。",
    },
    {
      t: "すでに初期化してしまった",
      d: "初期化したあとにできることは、サービス側の仕組みによって変わります。アカウント側で管理されているものは新しい端末から続けられる場合があり、端末側に記録が残る仕組みのものは、利用者の操作では対応できないことがあります。いずれも自己判断せず、各サービスの問い合わせ窓口に、いつ・どの端末を初期化したかを伝えて相談してください。",
    },
    {
      t: "端末をすでに渡してしまった",
      d: "下取りや買取で端末を渡したあとに気づいた場合は、まず各サービスの窓口に相談してください。あわせて、渡した先に連絡が必要かどうかも確認します。手続きが可能かどうかはここでは断定できません。今後端末を手放す際は、渡す前の確認を一つの手順として組み込んでおくことをおすすめします。",
    },
  ];

  const companyNotes = [
    {
      name: "ドスパラ中古買取",
      field: "broken",
      date: "2026年9月22日",
      value:
        "「ICアプリ登録データが残った商品」は買取対象外と整理されています（あわせてパスワードロックが残った商品、SIMカードが挿さったままの商品も対象外と記載）。",
    },
    {
      name: "エコリング",
      field: "broken",
      date: "2026年9月22日",
      value:
        "Androidについて、おサイフケータイ等のICアプリが残っていると買取を断る場合があると記載されています。",
    },
    {
      name: "トレジャーファクトリー（トレファク）",
      field: "data_erase",
      date: "2026年9月22日",
      value:
        "売却前の作業として、端末の初期化やデータのバックアップとあわせて、ICアプリの初期化・削除、SIM・SDカードの取り外し、Apple ID等のログアウト、画面ロックの解除を求めています。",
    },
    {
      name: "ブックオフ スマホ・タブレット買取",
      field: "data_erase",
      date: "2026年9月12日",
      value:
        "売る前に利用者自身でのデータ消去・ICアプリの初期化・暗証番号の初期設定番号への変更・遠隔ロック解除が必要と案内されています。",
    },
    {
      name: "携帯市場 買取",
      field: "broken",
      date: "2026年9月12日",
      value:
        "おサイフケータイ（生活アプリ）の利用履歴が残っている機種は、買取金額が大きく下がる要因のひとつとして挙げられています。",
    },
  ];

  const cautions = [
    {
      t: "買取店・下取り窓口は、サービスの解除を代行しません",
      d: "掲載各社の公式サイトを確認した範囲では、ICアプリの初期化や削除は利用者側で済ませておくものとして案内されています。残っていた場合の扱いは減額、買取不可、あるいは返送と社ごとに異なり、店側が代わりに手続きするという記載は確認できませんでした。手続きは利用者自身が行う前提で準備してください。",
    },
    {
      t: "残高やポイントの扱いは各サービスの案内に従う",
      d: "移行できるのか、払いもどしの仕組みがあるのか、有効期限があるのかはサービスによって異なります。当サイトでは金額や条件を扱っておらず、一般論にもとづく推測で判断することも避けてください。必ず、そのサービスの公式案内に書かれている内容で判断します。",
    },
    {
      t: "手続きには日数がかかることがある",
      d: "問い合わせ窓口への相談が必要になる場合、回答や対応までに日数がかかることがあります。下取りや宅配買取には返送・到着の期限が設定されていることがあるため、申し込みの前に相談を始めておくと、期限に追われながら初期化する事態を避けられます。宅配買取の一般的な流れは当サイトの別ページで整理しています。",
    },
    {
      t: "契約・税務・法的な判断はここでは示しません",
      d: "解約の可否、名義が本人ではない端末の扱い、勤務先から貸与された端末の処分可否などは、契約内容や社内規程によって変わります。このページは一般的な進め方の整理であり、個別の判断は示しません。キャリア、メーカー、各サービス、買取店、勤務先の管理部門など、該当する確認先にそれぞれ問い合わせてください。",
    },
    {
      t: "端末を複数まとめて処分する場合は台数分の棚卸しを行う",
      d: "長期間使用していない古い端末をまとめて手放す場合ほど、何が入っていたかがわからなくなりやすいものです。1台ずつ電源を入れて棚卸しをし、操作できない端末は別にして、各サービスへの相談が必要かどうかを判断してください。",
    },
  ];

  const faqs = [
    {
      q: "初期化の前に必ず済ませる必要がありますか？",
      a: "端末側に記録が残る仕組みのサービスがある以上、手放す前に済ませておくのが安全な進め方です。初期化したあとに気づいた場合、できることはサービスの仕組みによって変わり、利用者の操作では対応できないこともあります。順番としては、各サービスの手続き、端末側の確認、そのあとに初期化です。",
    },
    {
      q: "どのサービスが対象になるか、どのように調べればよいですか？",
      a: "設定アプリの支払いや非接触通信（NFC）に関する項目、アプリの一覧、アプリストアのインストール履歴、登録時の確認メールなどをたどるのが一般的です。そのうえで、見つかったサービスごとに、正式名称と「機種変更」などの語で公式の案内を探してください。サービスごとの手続き内容は当サイトでは扱っていません。",
    },
    {
      q: "アプリが起動しないまま端末を手放すことになりそうです。",
      a: "原因の特定は当サイトではできません。サービス名と症状で公式ヘルプを探し、それでも解決しなければ各サービスの問い合わせ窓口に相談してください。端末が操作できない状態であることを最初に伝えると、案内が早くなることがあります。下取りや買取の期限がある場合は、先に相談を始めておくのが安全です。",
    },
    {
      q: "iPhoneとAndroidで準備は違いますか？",
      a: "考え方の出発点が異なります。iPhoneは支払い用のカード類を標準アプリでまとめて扱い、端末とアカウントの結びつきを解く流れになりやすく、Androidは非接触ICを使うサービスごとに手続きをしてから端末側の記録を確認する流れになりやすい、という整理です。実際の操作は機種やOSのバージョンで異なるため、設定アプリの機種名表示を確認したうえで、メーカーのサポートページでお使いの機種の表記を確認してください。",
    },
    {
      q: "買取店がサービスの解除まで行いますか？",
      a: "掲載各社の公式サイトを確認した範囲では、ICアプリの初期化や削除は利用者側で行うものとして案内されており、代行するという記載は確認できませんでした。残っていた場合は減額や買取不可の要因として扱われることがあります。詳しくは当ページの掲載社の記載欄をご覧ください。",
    },
    {
      q: "残高が残ったまま送ってしまったらどうなりますか？",
      a: "扱いは買取店とサービスの双方の条件によって変わるため、当サイトでは断定できません。掲載社の中には、ICアプリの利用履歴が残っている端末を減額や買取不可の要因として挙げているところがあります。気づいた時点で、各サービスの窓口と、端末を送った先の双方に相談してください。",
    },
    {
      q: "データ消去や初期化の手順そのものはどこで確認できますか？",
      a: "OS別の初期化手順は、当サイトのデータ消去ガイドにまとめています。このページは、その初期化より前に済ませておくサービス側の準備を扱っています。iPhoneの「探す」の解除については、アクティベーションロックのページで整理しています。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "おサイフケータイ・電子マネーを手放す前に移す", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">BEFORE YOU RESET</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          おサイフケータイ・電子マネーは端末を手放す前に移す｜初期化前に済ませる順番
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          スマホを下取りや買取に出す準備で、写真の移行やデータ消去は意識していても、見落とされやすいのが決済・交通系IC・ポイントなどのサービスです。これらの中には、端末側に情報が記録される仕組みのものがあり、初期化して手放したあとでは利用者自身で取り出せなくなることがあります。このページでは、個々のサービスの画面操作ではなく、「何を・どの順番で・どこに確認するか」という、変更の影響を受けにくい確認方法を整理します。サービスごとの手続きは更新が早いため、最終的な判断は必ず各サービスの公式案内で行ってください。
        </p>
        <p className="mt-4 max-w-3xl text-xs leading-loose text-steel-500">
          公開日: {PAGE_DATE_LABEL}／このページは一般的な進め方の整理であり、個別のサービスの手続き内容や、契約・税務・法的な判断を示すものではありません。手続きの可否は、キャリア・メーカー・各サービス・買取店・自治体など、該当する窓口にご確認ください。
        </p>

        {/* 結論先出し */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">おサイフケータイ・電子マネーを初期化前に移す手順の要点</h2>
          <ul className="mt-4 space-y-3">
            {conclusions.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* なぜ先にやるのか */}
        <section className="mt-14">
          <h2 className="section-title mb-2">初期化の前に済ませる理由</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            情報がどこに保存されているかが、サービスによって異なるためです。端末の外で管理されているものは、別の端末でサインインし直せば済むことがあります。一方、端末の中に記録が残る仕組みのものは、端末が手元を離れた時点で利用者にできることが大きく減ります。この違いを把握しないまま、初期化すればすべて消去されると考えて進めてしまうことが、最も起こりやすい誤りです。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {whereRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ ご利用中のサービスがどれに当たるかは、当サイトでは判断できません。各サービスの公式案内でご確認ください。
          </p>
        </section>

        {/* 全体の順番 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">全体の順番｜棚卸し → サービス側の手続き → 端末側の確認 → 初期化</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            作業を始める前に、全体の流れを決めておきます。個々の操作はサービスごとに異なりますが、この順番自体は変わりません。
          </p>
          <div className="space-y-4">
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
          <p className="mt-4 max-w-3xl text-[13px] leading-loose text-steel-600">
            初期化そのものの手順（iPhone・Android・Windows・Mac）は、
            <Link href="/guide/data-shokyo/" className="text-vermilion underline underline-offset-4">売る前のデータ消去・初期化ガイド</Link>
            にまとめています。このページは、その一つ手前の準備を扱っています。
          </p>
        </section>

        {/* 棚卸しの手がかり */}
        <section className="mt-14">
          <h2 className="section-title mb-2">利用中のサービスを確認する手がかり</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            棚卸しは記憶に頼らず、端末の中から探します。次の4か所を順に見ていくと、忘れていたサービスにも気づきやすくなります。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {findRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 設定アプリの項目名や画面構成は、機種やOSのバージョンによって異なります。見つからないときは、設定アプリの検索欄を使うか、メーカーのサポートページでお使いの機種の表記を確認してください。
          </p>
        </section>

        {/* 公式案内の探し方 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">公式の手続き案内を確認する方法</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            サービスごとの画面や手続き名は更新されるため、手順を覚えるよりも、最新の案内にたどり着く方法を把握しておくほうが確実です。当サイトでは個別サービスの手続き内容は扱わず、次の確認方法のみをご案内します。
          </p>
          <div className="space-y-4">
            {howToFindOfficial.map((h, i) => (
              <div key={h.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {h.t}
                </h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{h.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* iPhoneとAndroid */}
        <section className="mt-14">
          <h2 className="section-title mb-2">iPhoneのウォレットとAndroidのおサイフケータイ｜考え方の違い</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            どちらも手放す前に移す点は同じですが、作業の進め方が異なります。操作の詳細ではなく、考え方の出発点の違いとしてご確認ください。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {platformRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-3xl text-[13px] leading-loose text-steel-600">
            iPhoneの「探す」（アクティベーションロック）の解除は、
            <Link href="/guide/activation-lock/" className="text-vermilion underline underline-offset-4">アクティベーションロックの解除ガイド</Link>
            で解説しています。端末カテゴリ別の注意点は
            <Link href="/iphone/" className="text-vermilion underline underline-offset-4">iPhoneの買取</Link>
            ・
            <Link href="/android/" className="text-vermilion underline underline-offset-4">Androidスマホの買取</Link>
            にまとめています。
          </p>
        </section>

        {/* 困ったとき */}
        <section className="mt-14">
          <h2 className="section-title mb-6">移せない・間に合わないときの相談先</h2>
          <div className="space-y-4">
            {troubles.map((t) => (
              <div key={t.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{t.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{t.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 max-w-3xl text-[13px] leading-loose text-steel-600">
            電源が入らない・画面が反応しないなど、状態に不安がある端末の売却については
            <Link href="/situation/kowareta/" className="text-vermilion underline underline-offset-4">画面割れ・故障した端末を売る</Link>
            を、勤務先から貸与された端末の扱いについては
            <Link href="/situation/houjin/jugyoin-tanmatsu-kaishu/" className="text-vermilion underline underline-offset-4">従業員端末の回収</Link>
            をあわせてご覧ください。
          </p>
        </section>

        {/* 掲載社の記載 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">掲載社の公式サイトで確認できた記載</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            買取店側がサービスの解除を代行するという記載は、当サイトが確認した範囲では見つかりませんでした。各社とも、利用者側で済ませておくものとして案内しており、残っていた場合の扱いは社によって異なります。以下は、当サイトが各社の公式サイトで確認した内容の要旨です。条件は変更されることがあるため、申し込み前に必ず各社の公式サイトで最新の案内をご確認ください。
          </p>
          <div className="space-y-4">
            {companyNotes.map((c) => (
              <div key={c.name} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.name}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.value}</p>
                <p className="mt-2 text-xs text-steel-500">
                  出典: 各社公式サイト（当サイト確認日 {c.date}／掲載データの「{c.field}」欄）
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">掲載各社の条件を比較表で見る</Link>
            <Link href="/shindan/" className="btn-ghost">売り方診断で確認する</Link>
          </div>
        </section>

        {/* 注意点 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">進めるうえで気をつけたいこと</h2>
          <div className="space-y-4">
            {cautions.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">よくある質問</h2>
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
                <span className="mt-1 block text-xs text-steel-500">iPhone・Android・Windows・Mac別の手順</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/activation-lock/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">アクティベーションロック（「探す」）の解除</span>
                <span className="mt-1 block text-xs text-steel-500">解除されていないと下取りも買取も進まない</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/shitadori-hikaku/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">下取りと買取はどちらが得か</span>
                <span className="mt-1 block text-xs text-steel-500">手放し方の違いと判断のチェックリスト</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/takuhai-nagare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">宅配買取の流れと梱包方法</span>
                <span className="mt-1 block text-xs text-steel-500">申込から入金までの日数の目安を確認する</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/kowareta/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">画面割れ・故障した端末を売る</span>
                <span className="mt-1 block text-xs text-steel-500">操作できない端末を手放すときの考え方</span>
              </Link>
            </li>
            <li>
              <Link href="/android/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Androidスマホの買取</span>
                <span className="mt-1 block text-xs text-steel-500">おサイフケータイの扱いを含む準備のまとめ</span>
              </Link>
            </li>
            <li>
              <Link href="/iphone/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">iPhoneの買取</span>
                <span className="mt-1 block text-xs text-steel-500">ウォレット・「探す」まわりの準備を確認する</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/houjin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">法人の端末処分</span>
                <span className="mt-1 block text-xs text-steel-500">貸与端末を一括で回収する際の進め方</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/google-account-android/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">AndroidのGoogleアカウントの外し方</span>
                <span className="mt-1 block text-xs text-steel-500">初期化しても残る紐づけを手放す前に確認</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
