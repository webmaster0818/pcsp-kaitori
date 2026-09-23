import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";

const TITLE = "下取りのメリット・デメリット｜手間・受け取り方・期限・データ消去の責任で整理";
const DESC =
  "スマホの下取りは何が便利で、どこが不便なのか。手続きの手間、還元の受け取り方（現金か・ポイントか・割引か）、下取り額の決まり方、返送期限やキャンセルの可否、データ消去の責任の所在を、キャリア各社の公式サイト記載（2026年9月23日確認）にもとづいてメリット側・デメリット側に分けて整理します。金額は扱いません。";
const PATH = "/guide/shitadori-merit-demerit/";
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

export default function ShitadoriMeritDemeritPage() {
  const conclusions = [
    "下取りの最大のメリットは「端末を渡す先を自分で探さなくてよい」ことです。新しい端末を買う手続きの中に組み込まれているため、業者選び・申込・発送先の調整といった工程がそのぶん減ります。",
    "最大のデメリットは「受け取るものを選べないことが多い」点です。各社の公式サイトでは、還元はポイントや機種代金からの還元というかたちで案内されています（各社公式サイト、2026年9月23日確認）。現金が必要な場合は、この一点だけで候補から外れることがあります。",
    "下取り額は自己申告ではなく、各社の査定区分で決まります。ドコモは「良品」「画面割れ品」「機能不良品」の3段階、auは条件に当てはまると「破損品（画面割れなど）価格」を適用、楽天モバイルは2024年9月2日から査定価格の段階を4段階から3段階へ見直したと記載しています（各社公式サイト、2026年9月23日確認）。",
    "郵送での下取りには期限があります。auは「回収キットをお届けしますので、到着後8日以内にご返送ください」、ソフトバンクは送付キット受領から14日以内に到達しない場合は申込みが取り消されたものとみなす、楽天モバイルは申込日から14日以内、と公式に記載があります。ドコモは返送期限の日数の明記が公式サイト上で確認できませんでした（2026年9月23日確認）。",
    "データ消去と各種ロック解除は、下取りでも自分の責任で行うのが各社共通の前提です。「どちらが得か」という損得の比較そのものは別ページで扱っていますので、このページは判断材料の整理に絞ります。",
  ];

  const meritRows = [
    {
      label: "業者を探さなくてよい",
      value:
        "買取店に売る場合は、どこに出すかを自分で決めるところから始まります。下取りは新しい端末を買う会社がそのまま引き取り先になるため、比較・選定の工程がありません。ドコモ・au・ソフトバンクはいずれも公式サイトで、機種購入と同時の申し込みを前提とした流れを案内しています（各社公式サイト、2026年9月23日確認）。手放し方を決めること自体に時間をかけたくない人には、この一体化が実利になります。",
    },
    {
      label: "店頭なら当日その場で完結しやすい",
      value:
        "ドコモは店頭について「スマートフォンなどの購入と同時に下取りをお申込みください」とし、店頭では「下取り価格が機種購入代金から割引されます」と記載しています。auも「店頭またはau Online Shopでお申し込み」→「店頭または郵送で下取り」という流れを示しています（各社公式サイト、2026年9月23日確認）。発送・到着・査定の待ち時間をはさまずに済ませたい場合、店頭という選択肢があること自体がメリットです。",
    },
    {
      label: "梱包・発送の負担が小さい",
      value:
        "郵送の場合も、各社が送付キット（回収キット）を用意しています。ドコモは「お申込み後お届けする送付キットをお受け取りください」「必要事項を記入してキットを返送してください」、auは回収キットの内容として案内書類・郵送下取り申込書・返送用レターパック・梱包材を挙げています。楽天モバイルは自宅への集荷方式で「下取り希望製品の引取りは無料となります」と記載しています（各社公式サイト、2026年9月23日確認）。自分で箱を用意する必要がない点は、宅配買取と比べたときの負担の差になります。",
    },
    {
      label: "条件を満たすかどうかを先に確認できる",
      value:
        "各社は申し込みの前提条件を公式サイトに明記しています。ドコモは「下取りは1度のお申込みにつき1台までとなります（複数台の同時受付不可）」、auは「au携帯電話購入1台につき、下取りする対象機種は1台に限ります」、ソフトバンクは「新しい機種の購入1台につき、下取りの対象機種は1台までとなります」と記載しています（各社公式サイト、2026年9月23日確認）。書かれている条件が明確なぶん、自分が当てはまるかを手続き前に読んで確かめられます。",
    },
    {
      label: "対象外だったときの取り扱いが決まっている",
      value:
        "送った端末が条件に合わなかった場合の扱いも公式に書かれています。ドコモは「利用申込書や同梱物に不備がある、または下取り条件を満たさない場合はご契約者住所へ返送いたします」、auは「下取り対象機種以外の場合や、故障や水濡れ反応が見受けられた場合、電話機を郵送にて返却いたします」、楽天モバイルは下取り不可に該当する場合「査定価格は0円、下取り不成立とし、ご送付いただいた製品は返送いたします」としています（各社公式サイト、2026年9月23日確認）。",
    },
    {
      label: "購入手続きと窓口が同じ",
      value:
        "疑問が出たときの問い合わせ先が、新しい端末を買った先と同じになります。買取店に売る場合は購入元と売却先が別になるため、残債の確認と査定の質問で窓口が分かれます。聞く相手を増やしたくない場合には、この一体感が効きます。",
    },
  ];

  const demeritRows = [
    {
      label: "受け取るものを選びにくい",
      value:
        "各社の公式記載では、還元はポイントまたは機種代金からの還元というかたちが中心です。ソフトバンクは提供条件書で「PayPayポイント特典（個人）」「ソフトバンクポイント特典（法人）」「機種代金の割引特典（個人／法人）※2026年8月18日をもって、お申し込みの受付を終了します」と記載し、特典は対象機種1台につきいずれか1つを選択するとしています（ソフトバンク公式、2026年9月23日確認）。受け取るものの種類が限られる点は、現金化を目的にしている人にとっては明確なデメリットです。",
    },
    {
      label: "受け取りまでに時間がかかることがある",
      value:
        "ドコモは「下取り機種の到着からポイント進呈までに2~3週間いただきます」、ソフトバンクは「PayPayポイントは、対象機種の査定完了後2週間程度で付与します」、楽天モバイルは「楽天ペイ残高は、下取り価格確定後、約1カ月程度でチャージされます」と記載しています（各社公式サイト、2026年9月23日確認）。店頭で購入代金から割引されるかたちなら即時ですが、郵送ではこうした待ち時間が生じます。",
    },
    {
      label: "受け取りに追加の登録・加入が必要な場合がある",
      value:
        "ドコモは「ポイントの受け取りには、dポイントクラブ/ドコモビジネスメンバーズへの加入が必要です」、ソフトバンクは「PayPayポイントを受け取るためには、当社指定の方法により、PayPayアカウントを登録することが必要です」とし、さらに「PayPayポイントの付与日を1日目として180日目までに、お客さまがPayPayアカウントを登録しなかった場合は、お客さまのPayPayポイントを受ける権利は失効します」と記載しています。楽天モバイルは利用条件として「楽天IDを保有する楽天会員であること」を挙げています（各社公式サイト、2026年9月23日確認）。端末を渡して終わりではなく、受け取り側の手続きが残る点は見落としやすいところです。",
    },
    {
      label: "下取り額は自分では決められない",
      value:
        "査定の区分は各社が定めています。ドコモは「ドコモ側で査定し、「良品」「画面割れ品」「機能不良品」の3段階に分けられます」とし、下取り可否と進呈ポイント数は同社で判断すると記載しています。auは画面割れ・背面や側面の明確な割れ・カメラレンズ割れなどに該当する場合「破損品（画面割れなど）価格を適用いたします」、ソフトバンクは「対象機種の状態（破損の有無等）により、減額判定に係る査定基準に該当すると当社が判断する場合は、お客さまに付与される特典の額が減額されます」としています（各社公式サイト、2026年9月23日確認）。",
    },
    {
      label: "期限を過ぎると申し込みが無効になることがある",
      value:
        "郵送には期限があります。auは「回収キットをお届けしますので、到着後8日以内にご返送ください」、ソフトバンクは提供条件書で、申し込み（または送付キットの送付依頼）から14日以内にキットを受領しない場合、およびキット受領後14日以内に指定の場所へ到達しない場合は申込みが取り消されたものとみなすと記載しています。楽天モバイルは「14日以内に弊社に到着しなかった場合は、申し込み時の下取り価格より変更となること、あるいは下取り不可としてご返却させていただくことがございます」としています（各社公式サイト、2026年9月23日確認）。",
    },
    {
      label: "途中でやめられるとは限らない",
      value:
        "ソフトバンクは「良品でないと査定された場合も下取りのキャンセル・下取り機種の返却はできません」と記載し、申し込み時に減額基準に該当した場合の返却を申し出ていた場合は返却するとしています。またドコモは、返送した端末が「不達、または3か月以内に受け取りがない場合は下取り申込機種を処分させていただきます」、ソフトバンクは返却から3ヵ月以内に受け取りがない場合は処分すると記載しています（各社公式サイト、2026年9月23日確認）。送る前に、取り消しの条件まで読んでおく必要があります。",
    },
  ];

  const payoutRows = [
    {
      label: "ドコモ",
      value:
        "店頭は「下取り価格が機種購入代金から割引されます」。オンライン（郵送）はdポイントの進呈で、「ポイントの受け取りには、dポイントクラブ/ドコモビジネスメンバーズへの加入が必要です」「下取り機種の到着からポイント進呈までに2~3週間いただきます」と記載。オンライン受付では申込内容により進呈ポイントの判定基準日が異なるとしています。",
    },
    {
      label: "au（KDDI）",
      value:
        "「機種変更の場合：Pontaポイント還元 ※ 1ポイント＝1円相当でご利用できます。（法人のお客さま：auポイントを還元します）」。UQ mobileからの番号移行・他社からの乗りかえの場合は「機種代金から還元」とされ、購入代金にのみ充当できるポイントを付与する方式で、「機種代金が還元額を下回る場合、還元額は機種代金が上限となります」と記載されています。",
    },
    {
      label: "ソフトバンク",
      value:
        "提供条件書の特典の種類は「PayPayポイント特典（個人）」「ソフトバンクポイント特典（法人）」「機種代金の割引特典（個人／法人）」で、機種代金の割引特典は2026年8月18日をもって申し込み受付を終了と記載。「PayPayポイントの譲渡・出金はできません」ともあります。",
    },
    {
      label: "楽天モバイル",
      value:
        "「下取り価格は楽天ペイ残高で受け取ることができます」「楽天ポイントと同様にお買い物でご利用可能です」と記載。楽天モバイルのスマホ下取りサービスは、公式の利用条件に機種購入の必須記載がなく、「日本国内にて楽天モバイル以外でご購入された製品でも、下取り対象製品であればお申し込み可能です」とされている点が他社と異なります。",
    },
  ];

  const eraseRows = [
    {
      label: "ドコモ",
      value:
        "「下取り申込機種に残っているデータの消去・移行、およびアクティベーションロックなど各種ロック解除は、お客さまご自身の責任で実施してください。機種送付後、データの復元・閲覧はできません」。受付不可品の例として「初期化されていない」「各種ロックが解除されていない」を挙げています。補償サービスに加入している場合は解約手続きの案内もあります。",
    },
    {
      label: "au（KDDI）",
      value:
        "「下取り対象機種内のデータは、あらかじめバックアップおよびデータの初期化をお客さまご自身で実施ください」。「暗証番号ロック解除とオールリセット」が実施されていない端末は下取りできないとされ、初期化前にマイナポータルアプリから電子証明書の手続きを行うよう案内があります。アクティベーションロック解除の明示表記は、この案内ページ上では確認できませんでした。",
    },
    {
      label: "ソフトバンク",
      value:
        "提供条件書に「対象機種内のパーソナルデータを含む全てのデータは、お客さま自身で初期化を実施し、削除してください。なお、eSIMのプロファイルを対象機種に設定している場合は、初期化する前に、対象機種からeSIMのプロファイルの削除が必要となります」と記載。電子証明書を利用している場合は「初期化する前に必要な手続を行ってください」ともあります。",
    },
    {
      label: "楽天モバイル",
      value:
        "「事前にお客様にて製品の初期化（データ消去）・おサイフケータイなど各種ロックの解除とバックアップの実施が必要です」。各種ロックの解除および初期化は「お客様ご自身の責任において実施」するよう求め、充分に充電した状態での送付を案内しています。「アクティベーション・各種ロックの解除がされていない場合、キャンセルとなり製品をご返却させていただきます」とも記載されています。",
    },
  ];

  const attachRows = [
    {
      label: "ドコモ",
      value:
        "「下取り申込機種を送付する際、ストラップなどのアクセサリー類は送付しないようご注意ください。同梱されたアクセサリー類はドコモ側で処分させていただきます」。一方で、装着しないと操作できない付属品は本体と合わせて返却が必要で、返却がない場合は機能不良品扱いになるとしています。SIM・SDカードの取り扱いの明記は公式ページ上で確認できませんでした。",
    },
    {
      label: "au（KDDI）",
      value:
        "「下取り受付時にはメモリーカード、ストラップなどのアクセサリー・付属品などはすべてお客さまご自身で外してください。下取り受付後は、アクセサリー・付属品などはすべて廃棄します」と記載。SIMカードの取り扱いの明記は確認できませんでした。",
    },
    {
      label: "ソフトバンク",
      value:
        "下取りできない条件のひとつに「SIMカードが取り出しできないこと」が挙げられています。また「対象機種以外の物品（混入物）が当社に送付された場合、当社は、混入物の所有権は放棄されたものとみなし」処分等を行うと記載。SDカードの個別記載は確認できませんでした。",
    },
    {
      label: "楽天モバイル",
      value:
        "「SIMは同梱せず、下取り希望の製品本体のみ配達員へお渡しください。SIMやSDカード等の下取り製品以外のものをご送付された場合、当社で破棄させていただきます」「箱・付属品は不要です」と記載。また「付属品は下取りしておりません。なお付属品の有無は、下取り価格に影響しません」ともあります。",
    },
  ];

  const vsKaitori = [
    {
      t: "返送料とキャンセルの条件は買取店のほうがばらつく",
      d: "下取りは各社の条件が1つに決まっているのに対し、買取店は会社ごとに扱いが違います。当サイトの掲載データでは、査定額に納得できずキャンセルする場合の返送料について「宅配買取のキャンセル時の返送料は無料です」と記載する会社がある一方、「査定後の買取キャンセル時は、送料着払いにて商品を返送いたします」と利用者負担を明記する会社もあります（companies.json の hiyou.hensou、確認日2026年9月11日）。条件が一つに決まっているほうが安心なら下取り、条件を選びたいなら買取店、という見方ができます。",
    },
    {
      t: "「送ったあとは戻せない」タイプは下取りにも買取にもある",
      d: "ソフトバンクの提供条件書は「良品でないと査定された場合も下取りのキャンセル・下取り機種の返却はできません」としています（ソフトバンク公式、2026年9月23日確認）。買取店側にも、申込時に自動承諾を選ぶと査定完了時点で売買契約が成立し発送後のキャンセル・返却はできないと定める会社があります（companies.json の cancel、確認日2026年9月22日）。下取りか買取かという区分よりも、「どの申し込み方法を選んだか」で戻せるかどうかが決まる場合があります。",
    },
    {
      t: "データ消去の責任はどちらも利用者側が起点",
      d: "下取り各社は初期化とロック解除を利用者の責任としています。買取店側も同様に事前の初期化を求めたうえで、自社でも消去を行うと記載する会社が複数あります。ただし「データについて保証の責任を負わない」と明記する会社もあり、扱いは一律ではありません（companies.json の data_erase、確認日2026年9月11日〜9月22日）。いずれにせよ、渡す前に自分で消すという前提は変わりません。",
    },
    {
      t: "消去の記録が必要なら、発行の有無と費用を先に確認する",
      d: "データ消去証明書の扱いは会社ごとに異なります。当サイトの掲載データでは、希望者に無料で発行すると記載する会社のほか、「パソコン・スマホ データ消去証明書発行サービス」を発行手数料100円（査定金額から差し引き）と案内する会社、データ消去作業証明書を2,100円／1台（作業終了後約1週間で発送）と案内する会社があります（companies.json の data_erase、確認日2026年9月5日〜9月11日）。キャリアの下取りページでは、証明書発行に関する記載は確認できませんでした（各社公式サイト、2026年9月23日確認）。",
    },
  ];

  const judge = [
    {
      t: "受け取るものが用途に合っているか",
      d: "ポイントや機種代金からの還元でも困らないか、それとも用途を選ばないかたちで受け取りたいかを先に決めます。ここが決まると、残りの比較は短く済みます。受け取りまでの日数（各社の記載は前述のとおり）も、急いでいるかどうかで重みが変わります。",
    },
    {
      t: "手続きを1回にまとめたいか、条件を選びたいか",
      d: "下取りは新しい端末を買う手続きの中に入っているため、工程は少なくなります。一方、返送料やキャンセルの条件を自分で選びたい場合は、条件がばらつく買取店側のほうが選択の余地があります。どちらが優れているというより、何を減らしたいかの違いです。",
    },
    {
      t: "端末の状態が査定区分のどこに当たりそうか",
      d: "各社の査定区分と減額の条件は公式サイトに書かれています。画面や筐体の状態、カメラ部分の割れ、付属部品の欠品などが該当するかどうかを、渡す前に自分で読んで確認しておくと、後から想定と違うということが減ります。状態に不安がある端末の扱いは別ページにまとめています。",
    },
    {
      t: "期限に間に合う段取りが組めるか",
      d: "郵送での下取りには前述のとおり期限があります。データの移行や各種解約の手続きに日数がかかりそうなら、キットが届いてから慌てないよう、先に済ませておける作業を洗い出しておくのが安全です。",
    },
    {
      t: "損得そのものを比べたいとき",
      d: "どちらが得かという比較は、このページではなく比較ハブにまとめています。仕組みの違い、向く人・向かない人、残債や返却プログラムといった前提条件の確認まで含めて整理していますので、判断の順序を知りたい場合はそちらを参照してください。",
    },
  ];

  const faqs = [
    {
      q: "下取りのメリットを一言でいうと何ですか？",
      a: "新しい端末を買う手続きの中で端末の引き取りまで終わること、そのために業者選びや梱包資材の用意といった工程が減ることです。各社とも送付キット（回収キット）を用意しており、楽天モバイルは自宅集荷方式で「下取り希望製品の引取りは無料となります」と記載しています（各社公式サイト、2026年9月23日確認）。",
    },
    {
      q: "下取りで現金は受け取れますか？",
      a: "各社の公式記載では、還元はポイント、または機種代金・購入代金からの還元というかたちで案内されています。ドコモはオンライン受付でdポイントの進呈、auは機種変更の場合にPontaポイント還元、ソフトバンクは個人にPayPayポイント特典、楽天モバイルは楽天ペイ残高としています（各社公式サイト、2026年9月23日確認）。現金での受け取りに関する記載は、これらの下取りページ上では確認できませんでした。",
    },
    {
      q: "下取り額はどうやって決まるのですか？",
      a: "各社が定める査定区分にもとづいて決まります。ドコモは「良品」「画面割れ品」「機能不良品」の3段階に分けると記載し、下取り可否と進呈ポイント数は同社で判断するとしています。auは所定の条件に該当すると破損品（画面割れなど）価格を適用、ソフトバンクは減額判定に係る査定基準への該当を同社が判断すると記載しています（各社公式サイト、2026年9月23日確認）。当サイトでは金額は扱っていません。",
    },
    {
      q: "申し込んだあとでキャンセルできますか？",
      a: "一律ではありません。ソフトバンクは「良品でないと査定された場合も下取りのキャンセル・下取り機種の返却はできません」とし、申し込み時に減額基準該当時の返却を申し出ていた場合は返却するとしています。auは下取り対象機種以外の場合や故障・水濡れ反応が見受けられた場合に郵送で返却、楽天モバイルは下取り不成立の場合に返送と記載しています（各社公式サイト、2026年9月23日確認）。個別の可否は申し込み先に確認してください。",
    },
    {
      q: "返送期限はどれくらいですか？",
      a: "auは回収キット到着後8日以内、ソフトバンクは送付キット受領から14日以内に指定の場所へ到達しない場合は申込みが取り消されたものとみなす、楽天モバイルは申込日から14日以内と記載しています。ドコモは送付キットについて受け取れない場合は自動的にキャンセルとなるとの記載はあるものの、返送期限の日数の明記は公式サイト上で確認できませんでした（2026年9月23日確認）。",
    },
    {
      q: "下取りならデータ消去はしてもらえますか？",
      a: "各社とも、初期化と各種ロック解除は利用者自身の責任で行うことを前提としています。ドコモは「お客さまご自身の責任で実施してください」、auは「あらかじめバックアップおよびデータの初期化をお客さまご自身で実施ください」、ソフトバンクは提供条件書で「お客さま自身で初期化を実施し、削除してください」、楽天モバイルは「お客様ご自身の責任において実施」と記載しています（各社公式サイト、2026年9月23日確認）。OSごとの具体的な手順は当サイトのデータ消去ガイドで解説しています。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "下取りのメリット・デメリット", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">TRADE-IN PROS &amp; CONS</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          下取りのメリット・デメリット｜手間・受け取り方・期限・データ消去の責任で整理
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          下取りは「便利そうだが、実際に何が楽で、どこが不便なのか」が分かりにくい仕組みです。このページでは、手続きの手間、還元の受け取り方、下取り額の決まり方、返送期限、キャンセルの可否、データ消去の責任の所在という6つの観点で、メリット側とデメリット側に分けて整理します。根拠には携帯電話会社4社の公式サイト記載（{PAGE_DATE_LABEL}確認）を使い、金額や機種別の下取り価格は扱いません。どちらが得かという損得の比較そのものは
          <Link href="/guide/shitadori-hikaku/" className="text-vermilion underline underline-offset-4">下取りと買取の比較ページ</Link>
          にまとめていますので、このページは判断材料の提示に徹します。
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

        {/* メリット */}
        <section className="mt-14">
          <h2 className="section-title mb-2">下取りのメリットを分解する</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            「手軽」という一語でまとめられがちですが、実際にはいくつかの異なる利点が重なっています。どれが自分に効くのかを切り分けると、下取りを選ぶ理由がはっきりします。
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
          <p className="mt-3 text-xs text-steel-500">
            ※ 出典：NTTドコモ「下取りプログラム」、au（KDDI）「下取りプログラム」、ソフトバンク「下取りプログラム」（提供条件書を含む）、楽天モバイル「スマホ下取りサービス」の各公式サイト。確認日{PAGE_DATE_LABEL}。条件・対象・還元方法は変更される場合があるため、手続き前に各社の公式サイトで最新の記載を確認してください。
          </p>
        </section>

        {/* デメリット */}
        <section className="mt-14">
          <h2 className="section-title mb-2">下取りのデメリットを分解する</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            デメリットは「損をする」という話ではなく、多くが「選べない」「決まっている」ことから生じます。あらかじめ知っていれば避けられるものと、仕組み上どうにもならないものが混ざっています。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {demeritRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 出典・確認日は前掲と同じ（各社公式サイト、{PAGE_DATE_LABEL}確認）。個別の適用可否は申し込み先の携帯電話会社に確認してください。
          </p>
        </section>

        {/* 受け取り方 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">受け取り方は会社によって違う</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            下取りで何を受け取るのかは、メリット・デメリットの分かれ目になりやすい点です。各社の公式サイトに記載されている還元のかたちを、そのまま並べます。金額は扱いません。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {payoutRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-32 md:w-44">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 各社公式サイト、{PAGE_DATE_LABEL}確認。ソフトバンクの提供条件書は更新日2026年8月5日版を参照しています。
          </p>
        </section>

        {/* データ消去の責任 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">データ消去の責任は誰にあるか</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            「会社に渡すのだから消してもらえる」と考えると、受付不可や返送につながります。各社とも、初期化とロック解除は利用者側の作業として案内しています。OSごとの具体的な操作手順は
            <Link href="/guide/data-shokyo/" className="text-vermilion underline underline-offset-4">データ消去・初期化のページ</Link>
            で扱っていますので、ここでは責任の所在の記載だけを並べます。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {eraseRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-32 md:w-44">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 各社公式サイト、{PAGE_DATE_LABEL}確認。端末の「探す」機能（アクティベーションロック）の解除については
            <Link href="/guide/activation-lock/" className="text-vermilion underline underline-offset-4">専用のページ</Link>
            で解説しています。電子証明書など各種サービスの手続きの可否は、初期化前にキャリアや提供元へ確認してください。
          </p>
        </section>

        {/* 付属品・SIM */}
        <section className="mt-14">
          <h2 className="section-title mb-2">付属品・SIM・メモリーカードの扱い</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            渡したあとで取り返せないものがあるため、同梱するもの・外すものの記載は事前に確認しておく価値があります。ここも会社ごとに書かれていることが違います。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {attachRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-32 md:w-44">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 各社公式サイト、{PAGE_DATE_LABEL}確認。「確認できませんでした」と書いた項目は、公式サイト上で該当する記載を見つけられなかったという意味です。取り扱いが不明な場合は、申し込み先に直接確認してください。
          </p>
        </section>

        {/* 買取店との差 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">買取店と比べたとき、差が出るのはどこか</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            下取りのメリット・デメリットは、比べる相手があって初めて意味を持ちます。ここでは当サイトが掲載各社の公式サイトで確認した記載をもとに、差が出やすい4点だけを挙げます。どちらが得かという結論は出しません。
          </p>
          <div className="space-y-4">
            {vsKaitori.map((c, i) => (
              <div key={c.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {c.t}
                </h3>
                <p className="mt-3 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 買取店側の記載は当サイトの掲載社データ（data/companies.json）にもとづきます。各社の確認日は2026年9月5日〜9月22日で、引用した項目の確認日は本文中に記載しました。条件は変更される場合があるため、申し込み前に各社の公式サイトで最新の記載を確認してください。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">掲載社の条件を比較表で見る</Link>
            <Link href="/guide/shitadori-hikaku/" className="btn-ghost">下取りと買取の比較ページへ</Link>
          </div>
        </section>

        {/* 判断材料 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">どちらが向くかを決めるための材料</h2>
          <div className="space-y-4">
            {judge.map((c, i) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
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

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">下取りのメリット・デメリットについてよくある質問</h2>
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
              <Link href="/guide/shitadori-hikaku/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">下取りと買取はどちらが得か</span>
                <span className="mt-1 block text-xs text-steel-500">損得の比較・向く人の整理はこちらが本体</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/data-shokyo/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売る前のデータ消去・初期化</span>
                <span className="mt-1 block text-xs text-steel-500">OS別の具体的な操作手順</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/activation-lock/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">アクティベーションロックの解除</span>
                <span className="mt-1 block text-xs text-steel-500">解除されていないと受付不可になる理由</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/takuhai-nagare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">宅配買取の流れと梱包方法</span>
                <span className="mt-1 block text-xs text-steel-500">下取りの郵送手続きと比べたいとき</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/honnin-kakunin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取で本人確認が必要な理由</span>
                <span className="mt-1 block text-xs text-steel-500">古物営業法にもとづく確認の基礎知識</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/kowareta/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">画面割れ・故障した端末を売る</span>
                <span className="mt-1 block text-xs text-steel-500">査定区分で減額対象になりやすい端末の選択肢</span>
              </Link>
            </li>
            <li>
              <Link href="/kaitori/apple-trade-in/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Apple Trade Inの条件</span>
                <span className="mt-1 block text-xs text-steel-500">メーカーが実施する下取りの公式記載</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">掲載社の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">送料・返送料・キャンセル条件を横並びで確認</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
