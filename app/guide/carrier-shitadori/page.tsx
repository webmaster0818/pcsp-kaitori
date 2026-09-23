import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";

const TITLE =
  "キャリアの下取りプログラムの仕組みと条件｜ドコモ・au・ソフトバンク・楽天モバイルを同じ項目で整理";
const DESC =
  "携帯4社の下取りプログラムを、利用条件・申し込み方法・受け取り方・下取りができない条件・減額の条件・必要な準備・期限という同じ項目で整理しました。各社の公式サイトで確認できた記載のみを使い、確認できなかった項目は「公式では確認できず」と明記しています。機種別の下取り価格は扱いません。";
const PATH = "/guide/carrier-shitadori/";
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

type Row = { label: string; value: string };

export default function CarrierShitadoriGuidePage() {
  const conclusions = [
    "ドコモ・au・ソフトバンクは新しい機種の購入が前提で、端末だけを手放すための仕組みではありません。楽天モバイルのスマホ下取りサービスだけは、公式に挙げられた条件が楽天会員であること・18歳以上であること・対象製品であることで、機種購入が条件に入っていません。",
    "還元は現金ではありません。ドコモは購入代金からの割引またはdポイント、auはPontaポイントまたは機種代金からの還元、ソフトバンクはPayPayポイント（法人はソフトバンクポイント）、楽天モバイルは楽天ペイ残高です。",
    "下取りができない条件は4社で共通点が多く、初期化されていない・各種ロックが解除されていない・ネットワーク利用制限の対象・改造されている、といった状態は各社が不可または対象外としています。",
    "期限は社ごとに違います。auは回収キット到着後8日以内、ソフトバンクは申し込みから14日以内の受領とその後14日以内の到達、楽天モバイルは申し込み日から14日以内。ドコモの郵送返送期限の日数は公式では確認できませんでした。",
    "このページでは機種別の下取り価格は扱いません。価格は機種・状態・時期で変わるため、金額は各社の公式サイトでご確認ください。",
  ];

  const eligibilityRows: Row[] = [
    {
      label: "NTTドコモ",
      value:
        "機種の購入と同時に申し込む仕組みです。ドコモ発売機種は自回線の機種購入履歴に登録され、その購入に不備・不正・未払いがないことが条件。他社発売機種は新規契約（MNPを含む）と同時の申し込みが条件です。申し込めるのは公式の対象機種一覧にある機種のみで、1度の申し込みにつき1台まで（複数台の同時受付は不可）。可否はドコモ側が判断するとされています。",
    },
    {
      label: "au（KDDI）",
      value:
        "機種変更（3ヵ月＝91日目以上の利用）、UQ mobileからauへの番号移行、他社からの乗りかえの際に利用します。対象機種が故障や水濡れなどなく正常に動作すること、au携帯電話の購入1台につき下取りは1台まで、契約者が未成年なら保護者・親権者の同伴または同意書が必要です。スマホトクするプログラム＋／スマホトクするプログラムで購入した機種を下取りに出すと、加入中のプログラムの特典は受けられなくなります。",
    },
    {
      label: "ソフトバンク",
      value:
        "ソフトバンクで新しい指定機種を購入し、回収・査定を完了することが必要です。提供条件書では、対象回線契約と同時に指定機種を購入する適用条件Aと、回線契約を伴わず指定機種を購入する適用条件B（法人は原則対象外）に分かれます。あわせて古物営業法にもとづく本人確認を受けること、ネットワーク利用制限の対象でないこと、査定完了まで同社への債務の支払いを怠っていないことが条件です。購入1台につき下取りは1台まで。見守り用やプリペイドなどは対象外で、新トクするサポート系の各プログラムとは併用できません。",
    },
    {
      label: "楽天モバイル",
      value:
        "公式に挙げられた条件は、楽天IDを保有する楽天会員であること、18歳以上であること、下取り対象製品を下取りに出すことの3点で、機種購入は含まれていません。国内で楽天モバイル以外から購入した製品でも対象製品なら申し込め、「Rakuten 認定中古」で購入した製品も利用できます。対象製品一覧にない製品は申し込めません。楽天モバイル買い替え超トクプログラム加入中の製品は対象外です。",
    },
  ];

  const methodRows: Row[] = [
    {
      label: "NTTドコモ",
      value:
        "店頭またはオンラインショップで申し込みます。店頭は機種購入と同時に申し込んでその場で預け、オンラインは購入手続きの中で申し込み、後日届く送付キットに必要事項を記入して返送します。本人確認はオンラインショップでの確認と本人限定受取郵便から選べます。オンラインではスマートウォッチ類は受付対象外です。",
    },
    {
      label: "au（KDDI）",
      value:
        "店頭またはau Online Shopで申し込み、店頭または郵送で下取りを受けます。au Online Shopからの申し込みは郵送のみです。店頭申し込みの「後日下取り」は機種変更時のみ受付で、対象機種・機種変更（端末増設）申込書のお客様控え・本人確認書類を、機種変更した店舗へ持参します。郵送では回収キット（案内書類、郵送下取り申込書、返送用レターパック、梱包材）が届きます。",
    },
    {
      label: "ソフトバンク",
      value:
        "ソフトバンクショップ、オンラインショップ、My SoftBankで申し込めます。機種のみを購入する場合はMy SoftBankから申し込めず、ショップでの申し込みが必要です。ショップでは店頭で送付キットを受け取る方法と指定先住所で受け取る方法があり、店頭下取りサービスは実施店舗のみです。オンラインショップでは申し込みから1週間前後で送付キットが届きます。提供条件書にある「取扱店で査定を受ける方法」は2026年8月18日で終了。キットの受け取りには本人確認書類が必要です。",
    },
    {
      label: "楽天モバイル",
      value:
        "Webで申し込み、自宅への集荷で引き渡します。製品の詳細と引取り日時を入力すると下取り見積もりが提示され、あわせて本人確認書類をアップロードします。予約した日時に配達員が訪問するので製品を渡します。引取り先は本人確認書類に記載の住所のみで、引取り自体は無料です。店頭での下取り受付があるかどうかは、公式では確認できませんでした。",
    },
  ];

  const payoutRows: Row[] = [
    {
      label: "NTTドコモ",
      value:
        "店頭は下取り価格が機種購入代金から割引されます。オンライン（郵送）は、送付内容などに不備がなければdポイントが一括で進呈され、受け取りにはdポイントクラブまたはドコモビジネスメンバーズへの加入が必要です。機種の到着からポイント進呈までは2〜3週間。オンライン受付では進呈ポイントの判定基準日が申し込み内容によって異なるとされています。",
    },
    {
      label: "au（KDDI）",
      value:
        "機種変更はPontaポイント（法人はauポイント）での還元です。UQ mobileからの番号移行や他社からの乗りかえは「機種代金から還元」で、購入代金にのみ充当できるポイントを付与する形になります。このとき機種代金が還元額を下回る場合、還元額は機種代金が上限です。郵送では下取り完了後にPontaポイントが還元され、SMSで知らせが届きます。",
    },
    {
      label: "ソフトバンク",
      value:
        "提供条件書の特典は、個人向けのPayPayポイント特典、法人向けのソフトバンクポイント特典、機種代金の割引特典の3種類で、対象機種1台につき1つを選択します。このうち機種代金の割引特典は2026年8月18日で申し込みの受付を終了。PayPayポイントは査定完了後2週間程度で付与され、受け取りには指定の方法でPayPayアカウントの登録が必要で、付与日を1日目として180日目までに登録しないと受け取る権利が失効します。",
    },
    {
      label: "楽天モバイル",
      value:
        "楽天ペイ残高で受け取ります。下取り価格の確定後、約1カ月程度でチャージされると案内されており、FAQでは1カ月〜1カ月半程度と記載されています。楽天ペイ残高は楽天ポイントと同様に買い物で使えます。",
    },
  ];

  const ngRows: Row[] = [
    {
      label: "NTTドコモ",
      value:
        "受付不可品の例は、初期化されていない、各種ロックが解除されていない、メーカー保証が対象外（改造など）、ネットワーク利用制限がかかっている、基板が断裂している。申込書や同梱物に不備がある場合や条件を満たさない場合は契約者住所へ返送されます。水濡れの明示的な査定基準は、公式では確認できませんでした。",
    },
    {
      label: "au（KDDI）",
      value:
        "下取りできない例は、電源が入らない、暗証番号ロック解除とオールリセットが未実施、水濡れシールに水濡れ反応がある（メーカー指定箇所を確認）、基盤が見えている状態（基盤が見えていなくても液晶面全体が蜘蛛の巣状に割れている状態を含む）。他社からの乗りかえではさらに、契約者が所有権を有さない端末、ネットワーク利用制限されている端末も対象外です。対象機種以外や故障・水濡れ反応が見受けられた場合は返却されます。",
    },
    {
      label: "ソフトバンク",
      value:
        "申し込みができない症状として、電源が入らない（スリープボタンが正常に機能しない）、アクティベーションロックその他の各種ロックが解除されていない、初期化されていない、製造番号（IMEIなど）が確認できない、改造等されているまたはメーカー保証の対象外、SIMカードが取り出しできない、が挙げられています。適用条件としてネットワーク利用制限の対象でないことも必要です。下取りできない場合は返却されますが、良品でないと査定された場合はキャンセル・返却ができないとされています。水濡れの明示的な基準は、公式では確認できませんでした。",
    },
    {
      label: "楽天モバイル",
      value:
        "下取り不可製品として、下取り対象外の製品、各種ロック（スクリーン、アクティベーション、おサイフケータイを含む）の解除が行われていない製品、刻印がある製品、改造品、盗難紛失品、ネットワーク利用制限該当品などが挙げられています。該当する場合は下取り不成立となり返送されます。「電源が入らない」場合の明示的な取り扱いは、公式では確認できませんでした。",
    },
  ];

  const genkakuRows: Row[] = [
    {
      label: "NTTドコモ",
      value:
        "ドコモ側で査定し「良品」「画面割れ品」「機能不良品」の3段階に分けられます。機能不良品の例は、筐体が破損している、電源が入らない、液晶表示が異常またはタッチパネルが動作不良、液晶に液漏れや焼き付きがある、縦線・横線がある、カメラ・音声・各種ボタンが正常に作動しない、SIMトレイが不足または損傷している、などです。",
    },
    {
      label: "au（KDDI）",
      value:
        "破損品（画面割れなど）価格が適用されるのは、画面割れがあるもの、背面・側面に明確な溝・割れ・欠けがあるもの、カメラレンズ割れ（レンズ真上のガラス線キズを含む）です。iPhoneはDランクの価格が適用されます。郵送では、受付センターに到着した時点で画面が割れていた場合に申し込み時点の破損品価格が適用され、本体価格からの還元のみ利用できます。",
    },
    {
      label: "ソフトバンク",
      value:
        "状態により減額判定に係る査定基準に該当すると同社が判断する場合、付与される特典の額が減額されます。基準の例は、ガラス・筐体が破損している、ガラス部分や筐体にヒビ割れがある、カメラまたはボタン部分に破損・欠陥がある。ウェアラブル端末では、本体の破損でバンドが正常に着脱できない場合や、購入時のバンドが破損・紛失している場合も基準に含まれます。",
    },
    {
      label: "楽天モバイル",
      value:
        "2024年9月2日より査定の段階を4段階から3段階に見直し、「外装損傷・機能不具合品」の基準を「画面損傷品」と同等にしたと案内されています。区分の対象は、画面の割れ・焼け・劣化・ドット抜け・液漏れ、背面ガラスの割れ、カメラレンズの傷や割れ、筐体の歪曲・割れ・欠け・ヒビ・変色、本体付属の部品（SIMトレイなど）の破損・欠損などです。",
    },
  ];

  const prepRows: Row[] = [
    {
      label: "NTTドコモ",
      value:
        "データの消去・移行と、アクティベーションロックなど各種ロックの解除は、利用者自身の責任で実施します。送付後はデータの復元・閲覧ができません。下取りする機種で補償サービスを契約している場合は解約手続きが必要です。ストラップなどのアクセサリー類は同梱しないよう案内されています。SIMカード・SDカードの具体的な取り扱いは、公式では確認できませんでした。",
    },
    {
      label: "au（KDDI）",
      value:
        "あらかじめバックアップとデータの初期化を自分で実施します。暗証番号ロック解除とオールリセットが未実施のものは下取りできません。初期化の前に、マイナポータルアプリのマイページからスマホ用電子証明書の手続きを行う必要があります。受付時にはメモリーカードやストラップなどの付属品をすべて自分で外します。アクティベーションロック解除の明示表記とSIMカードの取り扱いは、このページ上では確認できませんでした。",
    },
    {
      label: "ソフトバンク",
      value:
        "下取り前にバックアップと初期化を必ず実施します。eSIMのプロファイルを設定している場合は初期化前に削除が必要です。ウェアラブル端末のモバイル通信サービスに加入している場合も、初期化前に登録情報の消去が必要です。スマホ用電子証明書を利用している場合は送付前に失効手続きが必要で、先に初期化すると手続きができなくなるため初期化前に行います。各種ロックの解除と、SIMカードが取り出せる状態であることも必要です。",
    },
    {
      label: "楽天モバイル",
      value:
        "事前に初期化（データ消去）、おサイフケータイなど各種ロックの解除、バックアップが必要です。アクティベーション（例：「iPhoneを探す」）の解除も自身の責任で行い、十分に充電した状態で送付します。ウェアラブル端末はペアリングを解除してから初期化します。SIMは同梱せず本体のみを配達員に渡します。スマホ用電子証明書は、初期化する前に失効手続きを行います。",
    },
  ];

  const deadlineRows: Row[] = [
    {
      label: "NTTドコモ",
      value:
        "郵送での返送期限の日数の明記は、公式では確認できませんでした。送付キットについては、受け取りができない場合は自動的にキャンセルとなる旨の記載があります。",
    },
    {
      label: "au（KDDI）",
      value:
        "郵送は「回収キットをお届けしますので、到着後8日以内にご返送ください」と明記されています。店頭で申し込む後日下取り（機種変更時のみ受付）は、機種変更の翌月末までに下取りが必要です。",
    },
    {
      label: "ソフトバンク",
      value:
        "提供条件書では、申し込み（先に送付キットの送付依頼を行う場合はその依頼時点）から14日以内に送付キットを受領しない場合、および受領後14日以内に指定の場所へ対象機種が到達しない場合は、申し込みが取り消されたものとみなすと定められています。店頭での申し込みから14日以内に受け取りが確認できない場合も、キャンセルとみなされる場合があります。",
    },
    {
      label: "楽天モバイル",
      value:
        "引取り日時を予約したうえで、下取り申し込み日から14日以内に製品を配達員に渡す必要があります。14日以内に到着しなかった場合は、申し込み時の下取り価格から変更となること、あるいは下取り不可として返却されることがあります。",
    },
  ];

  const cautions = [
    {
      t: "購入サポート系プログラムとの関係を見落とさない",
      d: "auはスマホトクするプログラム＋／スマホトクするプログラムで購入した機種を下取りに出すと加入中の特典を受けられなくなるとし、ソフトバンクは新トクするサポート系と併用できないとしています。楽天モバイルは買い替え超トクプログラム加入中の製品を対象外としています。ドコモについては、購入サポート系プログラムとの関係に関する記載を今回の確認範囲では確認できませんでした。自分の端末をどのプログラムで購入したかを先に確認してください。",
    },
    {
      t: "初期化とロック解除は「順番」に注意",
      d: "4社とも初期化と各種ロックの解除は利用者側の作業です。ソフトバンクはeSIMのプロファイル削除や電子証明書の失効を初期化の前に、auはマイナポータルでの手続きを初期化前に行うよう案内しています。順番を間違えると手続きができなくなる項目があるため、作業を始める前に各社の案内を読んでから進めてください。",
    },
    {
      t: "期限を過ぎると取り消し、条件も変更される",
      d: "auは回収キット到着後8日以内、ソフトバンクは受領と到達それぞれに14日以内、楽天モバイルは申し込み日から14日以内という期限が示されています。過ぎると申し込みの取り消しや条件の変更、返却となる場合があります。またソフトバンクのように一部の受付方法や特典が終了した例もあり、auも条件や対象機種が変更・終了する場合があるとしています。手続きの直前に公式で最新の条件を確認してください。",
    },
  ];

  const faqs = [
    {
      q: "キャリアの下取りは、新しい機種を買わなくても使えますか？",
      a: "ドコモ・au・ソフトバンクは、いずれも新しい機種の購入を前提とした仕組みとして説明されています。楽天モバイルのスマホ下取りサービスは、公式に挙げられた条件が楽天IDを保有する楽天会員であること・18歳以上であること・下取り対象製品を下取りに出すことの3点で、機種購入は含まれていません。他社で購入した製品でも、対象製品であれば申し込み可能と記載されています。（各社公式サイト／2026年9月23日確認）",
    },
    {
      q: "下取りの還元は現金で受け取れますか？",
      a: "4社とも現金ではありません。ドコモは店頭なら購入代金からの割引、郵送ならdポイント。auは機種変更ならPontaポイント、番号移行や乗りかえなら機種代金からの還元。ソフトバンクは個人がPayPayポイント、法人がソフトバンクポイント。楽天モバイルは楽天ペイ残高です。現金で受け取りたい場合は買取店という選択肢になり、損得の考え方は下取りと買取の比較ページで整理しています。",
    },
    {
      q: "画面が割れていても下取りに出せますか？",
      a: "各社とも画面割れは「不可」ではなく減額の査定区分として扱われています。ドコモは「画面割れ品」という区分、auは破損品（画面割れなど）価格の適用、楽天モバイルは画面損傷の区分、ソフトバンクはガラス部分や筐体のヒビ割れを減額の査定基準としています。ただしauは、基盤が見えている状態や液晶面全体が蜘蛛の巣状に割れている状態を下取りできない例としているため、破損の程度によっては不可になります。（各社公式サイト／2026年9月23日確認）",
    },
    {
      q: "初期化やロック解除はどこまで自分でやる必要がありますか？",
      a: "4社とも、バックアップと初期化、アクティベーションロックを含む各種ロックの解除は利用者自身が行うものとしています。初期化やロック解除がされていない端末は、ドコモでは受付不可品、ソフトバンクでは申し込みができない症状、楽天モバイルでは下取り不可製品とされ、auでは暗証番号ロック解除とオールリセットが未実施のものは下取りできないとされています。OS別の具体的な手順は当サイトのデータ消去ガイドをご覧ください。",
    },
    {
      q: "分割払いの残りがある端末でも下取りに出せますか？",
      a: "ドコモは「下取り申込機種などに分割払いの未払い残高がある場合は、継続してお支払いいただきます」、auは「下取り対象機種に分割支払いの残高がある場合は引き続きお支払いいただきます」と記載しており、残高があること自体を不可とする明記は確認できませんでした。ソフトバンクは査定完了まで同社への債務の支払いを怠っていないことを適用条件としています。楽天モバイルは、残債に関する条件を公式では確認できませんでした。個別の可否は契約内容によって変わるため、契約中のキャリアにご確認ください。",
    },
    {
      q: "端末を渡した後でキャンセルできますか？",
      a: "記載は各社で同じではありません。ソフトバンクは、良品でないと査定された場合でもキャンセルや返却はできず、申し込み時に減額基準に該当した場合の返却を申し出たときのみ返却するとしています。ドコモは不備がある場合や条件を満たさない場合に返送、auは対象機種以外や故障・水濡れ反応が見受けられた場合に返却、楽天モバイルは下取り不成立の場合に返送と記載しています。詳細は各社の窓口にご確認ください。",
    },
  ];

  const axes: { id: string; title: string; lead: string; rows: Row[] }[] = [
    {
      id: "eligibility",
      title: "1. 利用条件｜誰が、どのタイミングで使えるか",
      lead: "最初の分かれ目はここです。3社は新しい機種の購入が前提、1社は機種購入が条件に入っていません。",
      rows: eligibilityRows,
    },
    {
      id: "method",
      title: "2. 申し込み方法｜どこで申し込み、どう端末を渡すか",
      lead: "店頭で渡すのか、キットが届いてから送るのか、集荷に来てもらうのかで、必要な日数と手間が変わります。",
      rows: methodRows,
    },
    {
      id: "payout",
      title: "3. 受け取り方｜何で、いつ還元されるか",
      lead: "4社とも現金ではありません。還元の形と、受け取りに必要なアカウント・会員登録もあわせて確認しておきましょう。",
      rows: payoutRows,
    },
    {
      id: "ng",
      title: "4. 下取りができない条件",
      lead: "各社が「不可」「対象外」「申し込みできない」と明記している状態です。準備不足で止まるケースはここに集中します。",
      rows: ngRows,
    },
    {
      id: "genkaku",
      title: "5. 減額の対象になる条件",
      lead: "不可ではないものの評価が下がる状態です。各社とも査定の区分や基準として公式に公開しています。",
      rows: genkakuRows,
    },
    {
      id: "prep",
      title: "6. 利用者側で必要な準備",
      lead: "どの社でも初期化とロック解除は利用者の作業です。加えて、初期化の前に済ませておく手続きが社ごとにあります。",
      rows: prepRows,
    },
    {
      id: "deadline",
      title: "7. 期限｜いつまでに渡す必要があるか",
      lead: "郵送や集荷を使う場合に効いてきます。過ぎると申し込みの取り消しや条件の変更につながります。",
      rows: deadlineRows,
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "キャリアの下取りプログラムの仕組みと条件", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">CARRIER TRADE-IN PROGRAM</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          キャリアの下取りプログラムの仕組みと条件｜ドコモ・au・ソフトバンク・楽天モバイルを同じ項目で整理
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          「スマホ下取り」でまず知りたいのは、自分が使えるのか、何をもらえるのか、何を準備すればいいのか、いつまでに渡せばいいのか、という全体像だと思います。ところが各社の公式ページは説明の並べ方も用語も違うため、横に並べて読むのが意外と大変です。このページでは、NTTドコモ・au（KDDI）・ソフトバンク・楽天モバイルの4社を、同じ7つの項目に並べ替えて整理しました。記載はすべて各社の公式サイトで確認できた内容にもとづき、確認できなかった項目は「公式では確認できず」とそのまま表示しています。
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-loose text-steel-600">
          なお、<strong className="font-display text-steel-900">このページでは機種別の下取り価格は扱いません</strong>。下取り価格は機種・状態・時期によって変わり、各社が公式の対象機種一覧で個別に公開しているためです。ここで整理するのは、価格を見る前に押さえておきたい仕組みと条件です。
        </p>
        <p className="mt-4 text-xs text-steel-500">
          確認日：{PAGE_DATE_LABEL}（各社公式サイトの記載にもとづく）
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

        {/* 7つの軸 */}
        {axes.map((ax) => (
          <section key={ax.id} className="mt-14">
            <h2 className="section-title mb-2">{ax.title}</h2>
            <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">{ax.lead}</p>
            <div className="overflow-x-auto border border-chalk-line">
              <table className="spec-table">
                <tbody>
                  {ax.rows.map((r) => (
                    <tr key={r.label}>
                      <th className="w-32 md:w-40">{r.label}</th>
                      <td>{r.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        <p className="mt-4 text-xs leading-loose text-steel-500">
          ※ 上記7項目はすべて各社公式サイトの記載にもとづくもので、{PAGE_DATE_LABEL}に確認しました。「公式では確認できず」は、確認範囲の公式ページで該当する記載を見つけられなかったという意味です。記載がないことと条件が存在しないことは同じではありません。判断に迷う項目は各社の窓口にご確認ください。
        </p>

        {/* 注意点 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">申し込み前に見落としやすいこと</h2>
          <div className="space-y-4">
            {cautions.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 買取と比べたいとき */}
        <section className="mt-14">
          <h2 className="section-title mb-2">下取りにするか、買取店に売るかで迷ったら</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            このページはキャリアの下取りプログラムの仕組みと条件を整理したものです。下取りと買取のどちらが自分に向くかという損得の考え方や、端末を渡す前のデータ消去の手順は、役割を分けて別のページで扱っています。
          </p>
          <div className="border border-chalk-line bg-chalk-card p-5">
            <h3 className="font-display text-base text-steel-900">目的別の読み進め方</h3>
            <p className="mt-2 text-[13px] leading-loose text-steel-700">
              還元のかたちの違いや、どちらが向くかの判断材料は
              <Link href="/guide/shitadori-hikaku/" className="text-vermilion underline underline-offset-4">下取りと買取の比較</Link>
              へ。初期化・データ消去のOS別の手順は
              <Link href="/guide/data-shokyo/" className="text-vermilion underline underline-offset-4">売る前のデータ消去・初期化</Link>
              、ロックの解除は
              <Link href="/guide/activation-lock/" className="text-vermilion underline underline-offset-4">アクティベーションロックの解除</Link>
              で解説しています。買取店を使う場合の条件は
              <Link href="/compare/" className="text-vermilion underline underline-offset-4">統一比較表</Link>
              で並べて確認できます。
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/guide/shitadori-hikaku/" className="btn-primary">下取りと買取の違いを確認する</Link>
            <Link href="/compare/" className="btn-ghost">買取業者の条件を比較表で見る</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">キャリアの下取りでよくある質問</h2>
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

        {/* 出典 */}
        <section className="mt-14">
          <h2 className="section-title mb-4">確認した公式ページ</h2>
          <p className="mb-4 max-w-3xl text-sm leading-loose text-steel-600">
            このページの各社の記載は、次の公式ページを{PAGE_DATE_LABEL}に確認したものです。条件は変更される場合があるため、申し込みの前に各社の公式ページで最新の内容をご確認ください。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                <tr>
                  <th className="w-32 md:w-40">NTTドコモ</th>
                  <td>下取りプログラム（www.docomo.ne.jp の下取りプログラム案内ページおよび対象機種ページ）</td>
                </tr>
                <tr>
                  <th className="w-32 md:w-40">au（KDDI）</th>
                  <td>下取りプログラム（www.au.com の下取りプログラム案内ページおよび郵送での下取りページ）</td>
                </tr>
                <tr>
                  <th className="w-32 md:w-40">ソフトバンク</th>
                  <td>下取りプログラム（www.softbank.jp のキャンペーン案内ページ、サポートFAQ、提供条件書PDF・更新日2026年8月5日）</td>
                </tr>
                <tr>
                  <th className="w-32 md:w-40">楽天モバイル</th>
                  <td>スマホ下取りサービス（network.mobile.rakuten.co.jp のサービス案内ページおよびFAQ）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 関連リンク */}
        <section className="mt-14">
          <h2 className="section-title mb-6">関連ページ</h2>
          <ul className="grid gap-3 text-sm md:grid-cols-2">
            <li>
              <Link href="/guide/shitadori-hikaku/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">スマホは下取りと買取どっちが得？</span>
                <span className="mt-1 block text-xs text-steel-500">還元のかたちの違いと、どちらが向くかの判断材料</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/data-shokyo/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売る前のデータ消去・初期化</span>
                <span className="mt-1 block text-xs text-steel-500">OS別の手順。下取りでも必要になる端末側の準備</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/activation-lock/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">アクティベーションロックの解除</span>
                <span className="mt-1 block text-xs text-steel-500">解除されていないと各社とも手続きが進まない</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/takuhai-nagare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">宅配買取の流れと梱包方法</span>
                <span className="mt-1 block text-xs text-steel-500">買取店に送る場合の申込から入金までの手順</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/honnin-kakunin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取で本人確認が必要な理由</span>
                <span className="mt-1 block text-xs text-steel-500">古物営業法にもとづく本人確認の考え方</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/kowareta/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">画面割れ・故障した端末を売る</span>
                <span className="mt-1 block text-xs text-steel-500">下取りの条件から外れる端末の手放し方</span>
              </Link>
            </li>
            <li>
              <Link href="/iphone/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">iPhoneの買取</span>
                <span className="mt-1 block text-xs text-steel-500">下取りと比べたいときの対応業者</span>
              </Link>
            </li>
            <li>
              <Link href="/android/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Androidスマホの買取</span>
                <span className="mt-1 block text-xs text-steel-500">キャリア下取りと比べたいときの対応業者</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
