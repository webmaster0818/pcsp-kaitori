import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";

const TITLE = "下取りの申し込みから完了までの流れ｜店頭とオンライン（郵送）の違い・期限・送ったあとの扱い";
const DESC =
  "キャリアの下取りは、店頭に持ち込む場合とオンライン（郵送）で送る場合で流れも期限も変わります。申し込み前に済ませる準備（初期化・各種ロック解除・電子証明書の失効・付属品やカードの取り外し）、店頭とオンラインそれぞれの手順、送付キットの受け取りと返送の期限、送ったあとに査定結果が申し込み時と異なった場合の扱いまで、各社の公式サイトに記載のある範囲で整理します。金額は扱いません。";
const PATH = "/guide/shitadori-nagare/";
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

export default function ShitadoriNagareGuidePage() {
  const conclusions = [
    "下取りの流れは「店頭に持ち込む」か「オンラインで申し込んで送る」かで大きく変わります。店頭は新しい端末の購入手続きと同じ場でその日のうちに端末を引き渡す形が中心、オンラインは申し込み後に届く送付キットへ端末を入れて返送し、到着後に査定される形が中心です。",
    "どちらの方法でも、端末を手放す前の準備（バックアップ・初期化・各種ロックの解除）は利用者自身が行うものとして案内されています。初期化されていない、ロックが解除されていない端末は受付不可・下取り不可とする記載が各社の公式サイトにあります。",
    "オンライン（郵送）で一番見落としやすいのが期限です。送付キットの受け取りや返送には日数の定めがある会社があり、期限を過ぎると申し込みが取り消し扱いになる、または価格の判定が変わる場合があると公式に記載されています。申し込んだ日に、返送の締切をカレンダーに入れておくのが確実です。",
    "送ったあとに申告と実際の状態が違っていた場合の扱い（減額の判定、返却の可否、返却物の保管期間）は会社ごとに違います。本ページは各社公式サイトの記載を整理したもので、金額や個別の判定結果は扱いません。申し込み前に必ず公式サイトで最新の条件を確認してください。",
  ];

  const methodRows = [
    {
      label: "申し込みの場所",
      value:
        "店頭は、ショップや取扱店の窓口で新しい端末の購入手続きと同時に申し込む形が基本です。オンラインは、各社のオンラインショップや会員向けページの購入手続きの中で下取りを選びます。申し込み内容によっては会員ページからは申し込めず、店頭での申し込みが必要とされるケースも公式に記載されています。",
    },
    {
      label: "端末を渡すタイミング",
      value:
        "店頭は、購入手続きの場で端末をそのまま預ける形が中心です。オンラインは、申し込み後に届く送付キットに端末を入れて返送し、指定の受付先に到着してから査定に入ります。申し込みの時点ではまだ端末が手元にあるため、返送までの間に準備を済ませることになります。",
    },
    {
      label: "本人確認",
      value:
        "店頭は、その場で本人確認書類を提示する形が一般的です。オンラインは、購入手続きの中での本人確認に加えて、送付キット自体を受取人の本人確認を伴う配達方法で届けるとしている会社があります。受け取りに書類が必要になる場合があるため、受け取れる日を考えて申し込むと安心です。",
    },
    {
      label: "期限の有無",
      value:
        "店頭でその場で引き渡す場合、返送の期限は基本的に発生しません（購入と別の日に持ち込む「後日下取り」を受け付ける会社では、持ち込みの期限が定められています）。オンライン（郵送）は、送付キットの受け取りや返送・到着について日数の定めを設けている会社があります。",
    },
    {
      label: "査定結果が分かるタイミング",
      value:
        "店頭は窓口で端末の状態を確認したうえで手続きが進むため、その場で結果が分かる形が中心です。オンラインは、受付先に到着してから査定が行われるため、結果の連絡や特典の付与までに日数がかかります。急いでいるかどうかが、方法を選ぶときの判断材料になります。",
    },
    {
      label: "受け取り方",
      value:
        "還元の形（購入代金からの割引か、ポイント等での還元か）は会社や申し込み内容で異なり、同じ会社でも店頭とオンラインで違う場合があります。ポイントでの還元には会員プログラムやアカウントの登録が必要とされることがあり、登録がないと受け取れない・一定期間で権利が失効するという記載もあります。当サイトでは金額・還元額は扱いません。",
    },
  ];

  const prep = [
    {
      t: "バックアップを取る",
      d: "写真・連絡先・アプリのデータなど、引き継ぎたいものを先に退避します。各社とも、下取りに出した端末のデータは復元・閲覧できないとしており、送付後や引き渡し後に取り戻すことはできません。店頭で手続きする場合も、来店前のバックアップが案内されています。",
    },
    {
      t: "各種ロックを解除する",
      d: "画面ロック（暗証番号）、アクティベーションロック（「探す」）、おサイフケータイなどのロックは、端末を渡す前に解除しておく必要があります。解除されていない端末は受付不可・下取り不可、またはキャンセルのうえ返却と公式に記載されています。",
    },
    {
      t: "初期化（データ消去）する",
      d: "初期化されていない端末は受付不可とする記載が複数の会社の公式サイトにあります。ただし、初期化より前に済ませておかないとできなくなる手続きがあるため、順番に注意してください（次項）。",
    },
    {
      t: "初期化の前に済ませる手続きを確認する",
      d: "スマートフォン用の電子証明書を利用している場合は、端末を送る前に自分で失効の手続きが必要で、初期化してしまうと失効手続きができなくなる、と公式に案内している会社があります。eSIMのプロファイルの削除、ウェアラブル端末の通信サービスの登録情報の消去、ペアリングの解除なども初期化の前に行うよう案内されています。どれが当てはまるかは、契約している会社の公式ページで確認してください。",
    },
    {
      t: "補償サービスなどの契約を確認する",
      d: "下取りに出す端末で補償サービスを契約している場合は、解約の手続きを案内している会社があります。端末を手放したあとも契約が残らないよう、申し込み前に契約状況を確認し、手続きの要否は契約先に問い合わせてください。",
    },
    {
      t: "SIM・メモリーカード・付属品を外す",
      d: "メモリーカードやストラップなどのアクセサリー・付属品は、すべて自分で外すよう案内している会社があります。同梱された付属品は処分される、対象外の物品は所有権を放棄したものとみなす、といった記載もあるため抜き忘れに注意してください。一方で、購入時に本体に同梱されていて装着しないと正常に動作しない部品は、本体と合わせて返却が必要とする記載もあります。同梱してよいものの範囲は公式の案内で確認してください。",
    },
    {
      t: "残債と利用制限の状況を確認する",
      d: "分割払いの残高がある端末について、「下取りに出しても引き続き支払う」旨を明記している会社があります。また、ネットワーク利用制限の対象になっている端末は下取りできないとする記載もあります。支払い状況や制限の状態は契約している会社で確認でき、迷う場合は自己判断せずに問い合わせてください。",
    },
    {
      t: "充電しておく",
      d: "査定時に状態を確認できるよう、十分に充電した状態で送るよう案内している会社があります。電源が入らない端末は下取りできないとする記載が複数の会社にあるため、バッテリーが空のまま送るのは避けてください。",
    },
  ];

  const storeSteps = [
    {
      t: "来店の前に準備を済ませる",
      d: "バックアップ、各種ロックの解除、初期化前に必要な手続きの確認までを自宅で終えておきます。来店前のバックアップを勧める案内が公式に出ています。窓口で慌てて作業すると、手続きの順番を間違えて必要な失効手続きができなくなることもあります。",
    },
    {
      t: "必要なものを持って窓口へ行く",
      d: "本人確認書類と、下取りに出す端末を持参します。契約者が未成年の場合は保護者・親権者の同伴または同意書が必要とする記載もあります。購入と別の日に持ち込む「後日下取り」を受け付ける会社では、申込書の控えなど持参物が追加で指定されていることがあります。持ち物は来店前に公式ページで確認してください。",
    },
    {
      t: "新しい端末の購入手続きと同時に下取りを申し込む",
      d: "店頭の下取りは、新しい端末の購入と同時に申し込むよう案内されているのが一般的で、指定の機種を購入することが適用条件として提供条件書に書かれている会社もあります。購入と切り離して端末だけを手放したい場合は、下取りではなく買取店の利用が選択肢になります。",
    },
    {
      t: "窓口で端末の状態を確認してもらう",
      d: "窓口で端末の状態が確認され、条件に当てはまるかが判断されます。画面や筐体の破損、カメラやボタンの動作、電源が入るかどうかなどが確認の対象として公式に挙げられています。この段階で条件から外れると分かれば、別の手段を検討することもできます。",
    },
    {
      t: "端末を引き渡して完了",
      d: "端末を預けたあとの流れ（購入代金への充当か、ポイント等での還元か）は、会社と申し込み内容によって異なります。なお、一部の取扱店では、条件によって店頭での預かりができず郵送での手続きになる場合があると案内されています。店頭で完結する前提で予定を組まず、余裕を持って来店してください。",
    },
  ];

  const onlineSteps = [
    {
      t: "購入手続きの中で下取りを申し込む",
      d: "オンラインショップでの購入手続きの中に下取りの申し込みが組み込まれている形が一般的で、本人確認の方法を複数から選べる会社もあります。なお、ウェアラブル端末など一部のカテゴリはオンラインでの受付対象外と明記している会社があるため、対象かを先に確認してください。",
    },
    {
      t: "送付キットを受け取る",
      d: "申し込み後、案内書類・申込書・返送用の封筒や伝票・梱包材などが入った送付キットが届きます。受け取りに本人確認を伴う配達方法が使われる場合があり、受け取れないままだと自動的にキャンセルになると案内している会社もあります。申し込みから受け取りまでの日数に定めを置く会社もあるため、受け取れる時期を見て申し込んでください。",
    },
    {
      t: "端末の準備を仕上げる",
      d: "返送の直前に、初期化と各種ロックの解除が終わっているか、メモリーカードや付属品を外したか、充電は十分かを最終確認します。ここで抜けがあると、到着後に受付不可・返却となって時間だけが過ぎます。詳細は前章のチェック項目を参照してください。",
    },
    {
      t: "申込書に記入してキットを返送する",
      d: "同梱の申込書に必要事項を記入し、指定の方法で返送します。書類の不備や同梱物の不足があった場合は、条件を満たさないものとして返送すると明記している会社があります。記入漏れがないか、対象の端末以外を入れていないかを、封をする前に確認してください。",
    },
    {
      t: "受付先に到着し、査定される",
      d: "指定の受付先に端末が到着してから査定が行われます。到着時点の状態で判定するとしている会社があり、申告と実際の状態が違えば判定が変わります。輸送中の破損も到着時点の状態として扱われるため、梱包材は同梱されたものを使い、隙間なく詰めるのが基本です。",
    },
    {
      t: "査定完了後に還元を受ける",
      d: "査定の完了後に、会社ごとの方法で還元されます。到着から還元までに一定の期間がかかるとする案内があり、ポイントでの還元には会員プログラムやアカウントの登録が前提とされている場合があります。登録がないと受け取れない、一定期間で権利が失効するといった記載もあるため、申し込み時に自分のアカウントの状態も確認しておきましょう。",
    },
  ];

  const deadlineRows = [
    {
      label: "NTTドコモ 下取りプログラム",
      value:
        "オンライン（郵送）の返送期限について、日数を明記した記載は公式ページ上では確認できませんでした。送付キットについては「お受け取りいただけない場合は自動的にキャンセルとなります」との記載があります。なお、還元までの期間については「下取り機種の到着からポイント進呈までに2~3週間いただきます」と記載されています。（出典: https://www.docomo.ne.jp/campaign_event/shitadori/ ／2026年9月23日確認）",
    },
    {
      label: "au（KDDI）下取りプログラム",
      value:
        "郵送の場合「回収キットをお届けしますので、到着後8日以内にご返送ください。」と記載されています。また、店頭で申し込んで後日持ち込む「後日下取り」（機種変更時のみ受付）については「機種変更翌月末までに下取りが必要です。」と記載されています。（出典: https://www.au.com/mobile/trade-in/ ／https://www.au.com/mobile/trade-in/yusou/ ／2026年9月23日確認）",
    },
    {
      label: "ソフトバンク 下取りプログラム",
      value:
        "提供条件書に、申し込み（先に送付キットの送付依頼を行う場合はその依頼の時点）から14日以内に送付キットを受領しない場合、および送付キットの受領後14日以内に指定の場所へ対象機種が到達しない場合は、申し込みが取り消されたものとみなす旨が記載されています。店頭での申し込みについても「店頭でのお申し込みから14日以内に弊社での下取り機種の受け取りが確認できない場合、お申し込みはキャンセルしたものとみなされる場合があります。」との記載があります。（出典: https://www.softbank.jp/mobile/campaigns/list/trade-in/ ／提供条件書PDF（更新日2026年8月5日）／2026年9月23日確認）",
    },
    {
      label: "楽天モバイル スマホ下取りサービス",
      value:
        "「引取り日時を予約し、下取り申し込み日から14日以内にお持ちの製品を配達員に渡す」とされ、「14日以内に弊社に到着しなかった場合は、申し込み時の下取り価格より変更となること、あるいは下取り不可としてご返却させていただくことがございます」と記載されています。なお同サービスは、自宅への集荷で端末を引き渡す方式が案内されており、店頭での受付に関する記載は公式では確認できませんでした。（出典: https://network.mobile.rakuten.co.jp/service/tradein/ ／2026年9月23日確認）",
    },
  ];

  const afterSending = [
    {
      t: "申告と実際の状態が違うと判定が変わる",
      d: "申告ではなく、受付先に到着した時点の状態で判定するとしている会社があります。たとえば郵送の下取りについて、受付センターへの到着時点で画面が割れていた場合は破損品の区分が適用されると明記している例があります。査定の区分（良品・画面割れ品・機能不良品といった段階分け）を公開している会社もあり、どの区分に当たるかは会社側が判断するとされています。",
    },
    {
      t: "条件から外れると返却されることがある",
      d: "下取りできない状態と判断された場合や、書類・同梱物に不備があって条件を満たさない場合は、端末を返送すると記載している会社があります。一方で、良品でないと査定された場合でもキャンセルや返却はできないとしたうえで、申し込み時に減額基準に該当したときの返却を申し出ていれば返却する、と提供条件書に定めている会社もあります。返却の前提は会社ごとに違うため、申し込み前の確認が必要です。",
    },
    {
      t: "返却物には受け取りの期限がある",
      d: "返却された端末について、一定期間（たとえば3か月）以内に受け取りがない場合は処分すると記載している会社があります。返送の連絡が来たら受け取りを後回しにしないでください。登録住所と現住所が違うと受け取れない原因になるため、申し込み前に登録情報も確認しておくと安心です。",
    },
    {
      t: "対象外の物を入れてしまったとき",
      d: "対象の端末以外の物が送られた場合は、所有権が放棄されたものとみなして処分する、という趣旨の記載があります。SIMやカード類は同梱せず本体のみを渡すよう明記している会社もあります。入れてしまうと取り戻せないため、封をする前に必ず中身を確認してください。",
    },
    {
      t: "元の契約やプログラムへの影響",
      d: "端末の購入時に加入していたプログラムによっては、下取りに出すとそのプログラムの特典を受けられなくなる、あるいはその端末はサービスの対象外になる、といった記載があります。こうした契約上の取り扱いは個々の契約内容によって変わるため、このページで可否は判断できません。自分の契約がどれに当たるかは、契約している会社の公式ページか窓口で確認してください。",
    },
  ];

  const takuhaiDiff = [
    {
      t: "申し込みの前提",
      d: "キャリアの下取りは、新しい端末の購入とセットで申し込む形が基本です（購入のみでも申し込める条件を提供条件書に定めている会社もあります）。買取店の宅配買取は、機種変更や新しい端末の購入とは無関係に、端末だけを送って売ることができます。",
    },
    {
      t: "査定に納得できなかったとき",
      d: "宅配買取では、査定額に納得できなければ承諾せずにキャンセルし、返送してもらう流れが一般的です（返送料の負担は業者によって異なります）。下取りでは、キャンセルや返却の可否が公式の条件で細かく決められており、良品でないと査定された場合でも返却はできないとする会社もあります。「送ったあとに考え直せるか」が実務上の大きな違いです。",
    },
    {
      t: "期限の性格",
      d: "下取りの期限は「この日までに送らないと申し込み自体が取り消される」という性格のもので、利用者側の予定に合わせて延ばせるものではありません。宅配買取にも査定承諾の期限はありますが、申し込みのやり直しがしやすい点が異なります。",
    },
    {
      t: "受け取りの形",
      d: "下取りは購入代金への充当やポイント等での還元、宅配買取は振込などの形が一般的です。どちらが向くかは、下取りと買取の比較ページで整理しています。",
    },
  ];

  const faqs = [
    {
      q: "下取りは店頭とオンライン（郵送）のどちらが早いですか？",
      a: "店頭は購入手続きと同じ場で端末を引き渡すため、手続き自体はその日のうちに終わります。オンラインは、送付キットの受け取り、返送、到着後の査定という段階を踏むため日数がかかります。急ぐかどうか、来店の時間を取れるかどうかで選ぶのが現実的です。",
    },
    {
      q: "送付キットを受け取れないまま日が経つとどうなりますか？",
      a: "自動的にキャンセルになると案内している会社や、申し込みから一定日数以内に受領しない場合は申し込みが取り消されたものとみなすと提供条件書に定めている会社があります。受け取れない事情が分かった時点で、契約している会社の窓口に相談してください。",
    },
    {
      q: "返送の期限を過ぎてしまったら、もう一度申し込めますか？",
      a: "期限を過ぎた場合の扱い（申し込みの取り消し、価格判定の変更、返却など）は会社によって記載が異なり、再度申し込めるかどうかも当サイトでは判断できません。期限の定めは公式サイトや提供条件書に書かれているため、該当箇所を確認したうえで契約先に問い合わせてください。",
    },
    {
      q: "初期化とロック解除は、店頭で手続きするなら店員にやってもらえますか？",
      a: "データの消去・移行と各種ロックの解除は利用者自身の責任で実施するよう案内している会社があります。来店前のバックアップを勧める記載もあるため、自分で済ませてから行くのが基本です。操作が分からない場合の対応は店舗や会社によって異なるため、来店前に問い合わせておくと確実です。",
    },
    {
      q: "初期化とスマートフォン用電子証明書の失効は、どちらを先にやるべきですか？",
      a: "電子証明書の失効手続きを先に行うよう案内している会社があります。初期化してしまうと失効手続きができなくなる、という趣旨の記載が公式に出ているためです。eSIMのプロファイルの削除やウェアラブル端末の通信サービスの登録情報の消去も、初期化の前に行うよう案内されています。自分の端末に当てはまる手続きは、設定アプリの機種名表示を確認したうえで、契約している会社の公式ページで調べてください。",
    },
    {
      q: "送ったあとに「思っていた区分と違う」と連絡が来たらどうなりますか？",
      a: "到着時点の状態で判定するとしている会社があり、申告と違えば区分が変わります。そのあとキャンセルできるか、返却してもらえるかは会社ごとに条件が異なり、返却できないと明記している例もあります。申し込み前に、減額時と返却時の扱いを公式の条件で確認しておくのが対策です。",
    },
    {
      q: "下取りに出さず、買取店に売る場合の流れは同じですか？",
      a: "似ている部分もありますが、申し込みの前提、キャンセルのしやすさ、期限の性格が違います。買取店の宅配買取の具体的な手順（梱包、発送、査定後の承諾・キャンセル、入金まで）は、当サイトの宅配買取の流れのページで解説しています。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "下取りの申し込みから完了までの流れ", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">TRADE-IN PROCESS</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          下取りの申し込みから完了までの流れ｜店頭とオンライン（郵送）の違い・期限・送ったあとの扱い
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          キャリアの下取りは、「店頭に持ち込む」場合と「オンラインで申し込んで送る」場合とで、手続きの順番も気をつけるべき期限も変わります。特にオンラインは、申し込んでから端末が受付先に届くまでに自分で動く場面が多く、準備の抜けや期限切れでつまずきやすい方法です。このページでは、申し込み前の準備、店頭とオンラインそれぞれの流れ、送付キットの受け取りと返送の期限、送ったあとに起きうることを、各社の公式サイトに記載のある範囲で整理します。金額・下取り価格は扱いません。
        </p>
        <p className="mt-3 text-xs text-steel-500">
          本ページは{PAGE_DATE_LABEL}時点で各社の公式サイト（および公開されている提供条件書）を確認して作成しています。条件・期限・還元方法は変更されることがあるため、手続き前に必ず公式サイトで最新の内容を確認してください。
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

        {/* 店頭とオンラインの違い */}
        <section className="mt-14">
          <h2 className="section-title mb-2">店頭とオンライン（郵送）で何が違うのか</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            まず、2つの方法で何が変わるのかを押さえておきます。ここを理解しておくと、自分がどちらで申し込むべきか、どこで手が止まりやすいかが分かります。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {methodRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 申し込み方法・受付の可否・還元の形は会社や申し込み内容によって異なります。どの方法が使えるかは、契約している会社の公式ページで確認してください。
          </p>
        </section>

        {/* 事前準備 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">申し込みの前に済ませておく準備</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            店頭でもオンラインでも、端末側の準備は利用者自身が行うものとして案内されています。順番を間違えるとやり直せない手続きがあるため、次の順で進めるのが安全です。
          </p>
          <div className="space-y-4">
            {prep.map((c, i) => (
              <div key={c.t} className="border border-chalk-line bg-chalk-card p-5">
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
          <div className="mt-6 border-l-2 border-vermilion bg-chalk-card p-5">
            <h3 className="font-display text-base text-steel-900">手順そのものは専用ページへ</h3>
            <p className="mt-2 text-[13px] leading-loose text-steel-700">
              OS別の初期化（データ消去）の具体的な手順は
              <Link href="/guide/data-shokyo/" className="text-vermilion underline underline-offset-4">売る前のデータ消去・初期化</Link>
              に、アクティベーションロック（「探す」）の解除手順は
              <Link href="/guide/activation-lock/" className="text-vermilion underline underline-offset-4">アクティベーションロックの解除</Link>
              にまとめています。このページでは手順は繰り返さず、下取りの流れの中でいつ行うかに絞って説明します。
            </p>
          </div>
        </section>

        {/* 店頭の流れ */}
        <section className="mt-14">
          <h2 className="section-title mb-2">店頭に持ち込む場合の流れ</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            窓口で新しい端末の購入手続きと同時に申し込み、その場で端末を引き渡す形が基本です。
          </p>
          <div className="space-y-4">
            {storeSteps.map((s, i) => (
              <div key={s.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">
                    STEP {i + 1}
                  </span>
                  {s.t}
                </h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* オンラインの流れ */}
        <section className="mt-14">
          <h2 className="section-title mb-2">オンライン（郵送）で送る場合の流れ</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            申し込みから端末の到着までに、自分で動く場面がいくつもあります。どこで止まりやすいかを意識しながら進めてください。
          </p>
          <div className="space-y-4">
            {onlineSteps.map((s, i) => (
              <div key={s.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">
                    STEP {i + 1}
                  </span>
                  {s.t}
                </h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 期限 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">期限の管理（各社公式サイトの記載）</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            オンライン（郵送）で最も見落とされやすいのが期限です。各社が公式サイトや提供条件書に記載している内容を{PAGE_DATE_LABEL}時点で確認できた範囲でそのまま整理します。日数の数え方や起算点は各社の定めによるため、判断に迷う場合は契約している会社に確認してください。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {deadlineRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 上表は各社公式サイトの記載を{PAGE_DATE_LABEL}に確認して整理したものです。金額・下取り価格・還元額は掲載していません。条件は変更されることがあるため、手続き前に必ず公式サイトで最新の内容を確認してください。
          </p>
          <div className="mt-6 border-l-2 border-vermilion bg-chalk-card p-5">
            <h3 className="font-display text-base text-steel-900">期限を落とさないための実務</h3>
            <p className="mt-2 text-[13px] leading-loose text-steel-700">
              申し込んだその日に、「送付キットが届く見込みの時期」と「返送の締切」をカレンダーに入れておきます。旅行や出張で自宅を空ける時期は送付キットの受け取り自体ができないことがあるため、申し込み時期をずらす判断も必要です。返送したら追跡番号を控えておきましょう。
            </p>
          </div>
        </section>

        {/* 送ったあと */}
        <section className="mt-14">
          <h2 className="section-title mb-6">送ったあと・渡したあとに起きうること</h2>
          <div className="space-y-4">
            {afterSending.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-steel-500">
            ※ 本章の記載は、各社公式サイトおよび公開されている提供条件書に書かれている内容を{PAGE_DATE_LABEL}に確認して整理したものです。個別の判定結果や契約上の可否は当サイトでは判断できません。該当する会社の窓口に確認してください。
          </p>
        </section>

        {/* 宅配買取との違い */}
        <section className="mt-14">
          <h2 className="section-title mb-2">買取店の宅配買取とは流れが違う</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            「端末を送って査定してもらう」という点だけを見ると下取りと宅配買取は似ていますが、前提と引き返しやすさが違います。宅配買取そのものの手順は
            <Link href="/guide/takuhai-nagare/" className="text-vermilion underline underline-offset-4">宅配買取の流れと梱包方法</Link>
            で解説しているため、ここでは下取りとの違いだけを整理します。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {takuhaiDiff.map((r) => (
                  <tr key={r.t}>
                    <th className="w-40 md:w-56">{r.t}</th>
                    <td>{r.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 border border-chalk-line bg-chalk-card p-5">
            <h3 className="font-display text-base text-steel-900">下取りにするか、買取にするかで迷っているなら</h3>
            <p className="mt-2 text-[13px] leading-loose text-steel-700">
              還元の形や向き・不向きは
              <Link href="/guide/shitadori-hikaku/" className="text-vermilion underline underline-offset-4">下取りと買取の比較</Link>
              にまとめています。買取店を使う場合の条件（査定日数・返送料・キャンセルの扱い・本人確認など）は
              <Link href="/compare/" className="text-vermilion underline underline-offset-4">統一比較表</Link>
              で並べて確認できます。どちらに向くか分からないときは
              <Link href="/shindan/" className="text-vermilion underline underline-offset-4">売り方診断</Link>
              から確認してください。
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/guide/takuhai-nagare/" className="btn-primary">宅配買取の流れを見る</Link>
            <Link href="/guide/shitadori-hikaku/" className="btn-ghost">下取りと買取の違いを見る</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">下取りの流れでよくある質問</h2>
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
          <h2 className="section-title mb-4">参照した公式情報</h2>
          <ul className="space-y-2 text-xs leading-loose text-steel-500">
            <li>・NTTドコモ「下取りプログラム」公式サイト（https://www.docomo.ne.jp/campaign_event/shitadori/）を{PAGE_DATE_LABEL}に確認。</li>
            <li>・au（KDDI）「下取りプログラム」公式サイト（https://www.au.com/mobile/trade-in/ ／https://www.au.com/mobile/trade-in/yusou/）を{PAGE_DATE_LABEL}に確認。</li>
            <li>・ソフトバンク「下取りプログラム」公式サイト（https://www.softbank.jp/mobile/campaigns/list/trade-in/）および提供条件書PDF（更新日2026年8月5日）を{PAGE_DATE_LABEL}に確認。</li>
            <li>・楽天モバイル「スマホ下取りサービス」公式サイト（https://network.mobile.rakuten.co.jp/service/tradein/）を{PAGE_DATE_LABEL}に確認。</li>
            <li>・本ページでは金額・下取り価格・還元額・相場は扱っていません。公式に確認できなかった事項は「公式では確認できず」と記載しています。</li>
          </ul>
        </section>

        {/* 関連リンク */}
        <section className="mt-14">
          <h2 className="section-title mb-6">関連ページ</h2>
          <ul className="grid gap-3 text-sm md:grid-cols-2">
            <li>
              <Link href="/guide/shitadori-hikaku/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">下取りと買取どっちが得？</span>
                <span className="mt-1 block text-xs text-steel-500">還元の形の違いと、向き・不向きの判断材料</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/takuhai-nagare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">宅配買取の流れと梱包方法</span>
                <span className="mt-1 block text-xs text-steel-500">買取店に送る場合の申込から入金までの手順</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/data-shokyo/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売る前のデータ消去・初期化</span>
                <span className="mt-1 block text-xs text-steel-500">OS別の初期化手順はこちらが本体</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/activation-lock/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">アクティベーションロックの解除</span>
                <span className="mt-1 block text-xs text-steel-500">解除されていないと受付不可になる</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/honnin-kakunin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">本人確認が必要な理由</span>
                <span className="mt-1 block text-xs text-steel-500">古物営業法にもとづく確認と必要書類</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/kowareta/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">壊れた・起動しない端末</span>
                <span className="mt-1 block text-xs text-steel-500">下取りの条件から外れたときの選択肢</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取業者の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">査定日数・返送料・キャンセルの扱いを横並びで</span>
              </Link>
            </li>
            <li>
              <Link href="/shindan/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売り方診断</span>
                <span className="mt-1 block text-xs text-steel-500">端末の状態と希望から確認先を案内</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
