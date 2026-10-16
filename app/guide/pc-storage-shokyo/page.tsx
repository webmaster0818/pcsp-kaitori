import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { getCompany } from "@/lib/companies";
import { SITE_NAME, SITE_URL, OPERATOR, jaDate } from "@/lib/site";

const TITLE = "PCを売る前のストレージの扱い｜回復キーの確認・ドライブのクリーニング・取り外して売る場合";
const DESC =
  "PCを買取に出す前に、ストレージに関して判断すべき事項をご説明します。暗号化の回復キーを初期化前に確認する考え方、「ファイルの削除」と「ドライブのクリーニング」の選び方、ストレージを取り外して売る場合、消去証明書が必要な場合、自作PC・パーツ単体の扱いまでを、公式サイトの一次確認にもとづき扱います。";
const PATH = "/guide/pc-storage-shokyo/";
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

/**
 * 掲載社の記載は data/companies.json（公式サイトの一次確認）からのみ引用する。
 * quote は同ファイルの記述をそのまま／要約して転記したもので、創作は含めない。
 */
type SourceRow = {
  slug: string;
  field: string;
  quote: string;
};

const storageRows: SourceRow[] = [
  {
    slug: "janpara",
    field: "買取対象商品／買取不可の条件",
    quote:
      "買取対象商品に「その他メーカー・BTO・自作本体」「CPU/メモリ/HDD等のPCパーツ」が含まれる一方、公式FAQでは「基本的に通常正常動作品のみ買取対象となります」とされ、起動しないなど動作検証やデータ消去ができない状態のものは買取不可とされています。",
  },
  {
    slug: "pc-koubou",
    field: "買取対象商品／取扱不可の条件",
    quote:
      "買取対象に「自作パソコン（部品買取）」がある一方、「HDD・SSD（M.2 NVMeを除く）等の記録媒体の単品買取は行っておりません」と明記しています。また「正常動作しないもの」「電気または電池で動作する製品で、電源が入らないもの」は一切取扱不可とされています。",
  },
  {
    slug: "pcwrap",
    field: "買取対象外／査定時の申告",
    quote:
      "「CRT（ブラウン管）モニタ、プリンター、ルーター、その他パーツ類（マザーボードやメモリ、ストレージ等）の買取は行っておりません」と明記しています。一方で故障したパソコンについては「もちろん買取いたします。査定ご依頼時にCPU、HDD、メモリ等詳細なスペックをお知らせください」とされています。",
  },
  {
    slug: "pasokai",
    field: "買取できる状態",
    quote:
      "故障したパソコンも買取対象として掲載され、「状態も問いません：新品から、故障まで（起動しない、画面が表示しない、フリーズする、電源が入らないなど）」と記載しています。当サイトの一次確認では、内部パーツ（CPU・HDD・メモリ・ドライブ等）が揃っていない場合でも買取可能とされています。",
  },
  {
    slug: "takakuureru",
    field: "古いPC・パーツ単位の相談",
    quote:
      "公式FAQに「10年前の古いPCや、自作PCのパーツ単位での売却についても、まずは無料査定でお気軽にご相談ください」と記載しています。動作不良の場合は「金額がつかない可能性もありますが、希少なパーツが含まれていれば買取をおこなえるケースもございます」とされています。",
  },
  {
    slug: "tsukumo-kaitori",
    field: "買取できない場合",
    quote:
      "当サイトの一次確認では、BIOSやログインパスワードを解除できない場合、リカバリ作業が未完了の場合は買取できないことがあるとされ、動作検証で動作不具合がある場合も買取できないことがあるとされています。",
  },
  {
    slug: "dospara-kaitori",
    field: "買取対象外の条件",
    quote:
      "パソコンは正常起動しない商品（電源が入らない・映像が出ない・ブルースクリーン等）、セキュリティロックやBIOSパスワードがかかった商品は買取対象外とされています。",
  },
  {
    slug: "hardoff",
    field: "宅配と店頭で異なる基準",
    quote:
      "宅配買取ではパソコンについて「情報の完全消去がされていないもの」を取り扱わないとされ、動作不良品も対象外とされています。一方、店頭では付属品なし、自作・BTOパソコン、年式の古いパソコンも売れる場合があると案内されています。",
  },
];

const eraseRows: SourceRow[] = [
  {
    slug: "janpara",
    field: "事前の消去を求める記載",
    quote:
      "「設定やデータを保存する記録媒体を持つお品物はリカバリー、リセット、などのDATAの消去、及びパスワードやアカウントの登録解除も含め、事前にお客様の元でお願いいたします」と記載されています。",
  },
  {
    slug: "dospara-kaitori",
    field: "買取後の消去工程についての記載",
    quote:
      "公式FAQに「JEITA（電子情報技術産業協会）の方針に基づき、お客様の責任での初期化・データ削除をお願いしております。買取後にも消去工程を設けておりますが、完全な復元防止は保証できません」と記載されています。",
  },
  {
    slug: "pc-koubou",
    field: "送付前の状態についての前提",
    quote:
      "「送付いただいた対象機器は、記憶装置（ハードディスク等）に記憶されたデータ・プログラム並びに設定内容が存在しないもの（バックアップ・初期化済み）として扱わせていただくことをご承知いただいた上で、お申込みください」と記載されています。",
  },
  {
    slug: "rakuuru-sofmap",
    field: "ロック解除／消去証明書の扱い",
    quote:
      "事前にパスワード等の解除が必要とされ、「パスワードの解除ができない場合は返送させていただく場合があります」と記載しています。有料オプションとして「パソコン・スマホ データ消去証明書発行サービス」（発行手数料100円。査定金額から差し引き）があり、対象はWindowsノートパソコン（Windows8/10/11）・iPhone・iPad・Androidと記載されています。",
  },
  {
    slug: "pasokai",
    field: "消去証明書の扱い",
    quote:
      "データ消去作業証明書は有料（2,100円／1台、作業終了後約1週間で発送）とされ、希望しない場合は無料の消去完了通知メール（メールで買取査定依頼をした人が対象）が案内されています。",
  },
  {
    slug: "janpara",
    field: "法人買取での消去証明書",
    quote:
      "法人様向け大量買取では、希望に応じてデータ消去証明書（PDF・メール送付）を無料発行するとされています。",
  },
];

export default function PcStorageShokyoGuidePage() {
  const conclusions = [
    "PCを手放す際に事前に決めておくべき事項は、暗号化の回復キーの所在、初期化で選ぶ消去方法、ストレージを取り外すかどうかの3点です。いずれも作業に着手した後では変更が難しくなります。",
    "暗号化が有効な環境では、回復キーの控えがどこにあるのかを、初期化を始める前にご確認ください。作業が正常に進まなかった場合や、ドライブを別のPCに接続した場合に、回復キーを求められることがあるためです。勤務先から貸与された端末や組織が管理している端末は、ご自身で判断せず、管理担当者にご確認ください。",
    "初期化の際に選ぶ「ファイルの削除」と「ドライブのクリーニング」は、所要時間と安全性のどちらを優先するかの選択です。クリーニングは時間がかかり、途中で電源が落ちると起動しない状態になる可能性があります。買取店の多くは正常動作を条件としているため、発送や持ち込みの直前に始めることは避けてください。",
    "ストレージを取り外して売れるかどうかは、店によって異なります。正常動作を条件とする店では受け付けられないことがあり、パーツ欠品でも受け付けると記載している店もあります。取り外した記録媒体の単品買取を明確に断っている店もあります。申し込む前に、その店の公式記載をご確認ください。",
    "データが復元されるかどうかを当サイトで断定することはできません。掲載社の中にも、買取後の消去工程について「完全な復元防止は保証できません」と明記している例があります。消去方法、ストレージを取り外すかどうか、証明書の要否をご自身で判断する際の材料としてご活用ください。",
  ];

  const recoveryPoints = [
    {
      t: "暗号化の有無の確認",
      d: "PCはスマートフォンと違い、暗号化が有効になっている機種とそうでない機種が混在します。暗号化が有効かどうかによって、初期化後のデータ保護の程度も、途中で回復キーを求められる可能性も変わります。まず、お使いのPCがどちらにあたるかをご確認ください。確認の画面はOSのバージョンによって名称が異なるため、メーカーまたはOS提供元の公式案内を参照するのが確実です。",
    },
    {
      t: "回復キーの保管場所の確認",
      d: "回復キーは、サインインに使っているアカウントに預けられている場合、印刷や書き出しで手元に控えてある場合、勤務先や学校の管理システムに保管されている場合などがあります。保管場所がわからないまま作業を始めると、回復キーを求められた時点で作業が止まります。初期化の前に、少なくとも控えの保管場所をご確認ください。",
    },
    {
      t: "回復キーが必要になる場面",
      d: "回復キーは、初期化がうまく進まないとき、起動の途中で止まったとき、ドライブを取り外して別のPCにつないだときなどに必要になることがあります。本体を売却し、ストレージを取り外して手元に残す場合は、取り外した後で中身を確認・消去する段階で必要になる可能性があります。取り外す予定がある場合は、特に早い段階で控えをご確認ください。",
    },
    {
      t: "会社・学校から貸与された端末の扱い",
      d: "組織が管理している端末は、暗号化の設定も回復キーの保管も管理側にあるのが一般的で、売却や処分の可否自体が規程で決まっていることもあります。ご自身で初期化や売却を進めず、情報システム担当や管理部門にご確認ください。",
    },
    {
      t: "回復キーの控えの同梱防止",
      d: "回復キーを印刷した紙を本体に挟んだまま発送してしまう誤りが起こる可能性があります。控えは端末と分けて保管し、発送前の梱包時に同梱物を確認してください。",
    },
  ];

  const cleaningPoints = [
    {
      t: "2つの選択肢の違い（所要時間と安全性）",
      d: "PCの初期化では、データの消し方として短時間で終わる方法と、ドライブ側への処理を伴うためまとまった時間がかかる方法のどちらかを選ぶ画面が出るのが一般的です（表示される文言はOSのバージョンで異なります）。前者は短時間で終わる一方、消去後の状態に不安が残るという意見があります。後者は時間がかかる一方、手放すことを前提とした処理としてはより徹底した内容になります。どちらを選ぶかは、作業にあてられる時間とデータ保護の必要性を比較してご判断ください。",
    },
    {
      t: "暗号化の有無と消去方法の選択",
      d: "暗号化が有効だった場合と、そうでなかった場合とでは、初期化の意味合いが変わります。一般に、暗号化が有効な環境のほうがデータ保護の面では有利とされますが、当サイトでは「有効なら復元されない」とは断定しません。暗号化が無効だった場合や、有効かどうかわからない場合は、時間のかかる方法を選ぶことをおすすめします。",
    },
    {
      t: "所要時間について",
      d: "どれくらい時間がかかるかは、ストレージの種類や容量、機種の世代によって差があります。当サイトでは「何時間で終わる」といった目安を示しません。始める前に、当日の予定に余裕があるか、翌日以降に持ち越しても問題がないかをご確認ください。",
    },
    {
      t: "中断による買取条件への影響",
      d: "時間のかかる消去は、途中で電源が落ちたり強制終了したりすると、起動しない状態になる可能性があります。PCの買取では正常に起動することを条件としている店が少なくないため、中断が原因で受け付けられなくなる可能性があります。電源に接続した状態で、時間に余裕のある日に実行してください。集荷当日や来店の直前に始めると、作業が終わらずに中断せざるを得なくなる場合があります。",
    },
    {
      t: "消去結果の確認の難しさ",
      d: "消去が意図どおりに行われたかを利用者側で検証するのは簡単ではありません。業務データを扱っていたなど、不安が残る用途の端末であれば、ストレージを取り外す、消去証明書を発行する窓口を選ぶといった別の選択肢もご検討ください。",
    },
  ];

  const removalPoints = [
    {
      t: "取り外した場合の動作確認への影響",
      d: "ストレージを取り外したPCは、OSが起動しないのが一般的です。買取店は査定にあたって電源の投入と動作の確認を行うことが多く、この工程が成立しなくなります。店側が買取後に行うデータ消去の工程も、対象の記録媒体がない前提となります。安全のためにストレージを取り外すと、店の標準的な査定の流れから外れることになります。",
    },
    {
      t: "店による受付可否の違い",
      d: "正常動作品のみを買取対象とする店では、ストレージなしのPCは受け付けられない可能性があります。一方で、故障品やパーツ欠品でも買取可能と公式に案内している店もあります。申し込む予定の店の公式記載でご確認ください。当サイトで一次確認した記載は、本ページ後半の表に掲載しています。",
    },
    {
      t: "申し込み時の「ストレージなし」の伝え方",
      d: "査定の申し込みでは構成の申告を求められることがあります。取り外した状態であることを伝えずに送ると、到着後に条件が異なるとして減額や返送となることがあります。該当する入力欄がない場合は、備考欄に記載するか、申し込み前に問い合わせて扱いをご確認ください。",
    },
    {
      t: "取り外したストレージ単体の売却",
      d: "本体とは別に、取り外したストレージも売却したい場合、記録媒体の単品買取を行っていないと明記している店があります。一方、PCパーツを買取対象商品として掲げている店もあります。方針は店ごとに異なるため、取り外す前に「本体のみ売る」「パーツも売る」のどちらにするかを決めておくと、手続きの重複を避けられます。",
    },
    {
      t: "取り外したストレージの扱い",
      d: "手元に保管する、別の機器で使用する、処分するといった選択肢があります。記録媒体単体の消去は本体の初期化機能に頼れないため扱いが異なります。処分する場合、自治体で回収しているか、メーカーや販売店の回収窓口があるかは地域と製品によって違います。お住まいの自治体やメーカーの案内をご確認ください。当サイトでは可否の判断は控えます。",
    },
    {
      t: "取り外し作業について",
      d: "機種によっては分解に工具や手順の知識が必要で、保証や本体の状態に影響することがあります。外装に傷が残れば、それが査定に影響する可能性もあります。当サイトでは具体的な分解手順や道具の推奨は行いません。取り外しを前提としていない機種であれば、初期化で対応する判断も妥当です。",
    },
  ];

  const jisakuPoints = [
    {
      t: "OSの初期化機能を使えない構成",
      d: "自作PCやOSを入れ替えた環境、OSの入っていない本体などでは、メーカー製PCのような初期化の導線が使えないことがあります。この場合、記録媒体の扱いが実質的な判断事項となります。具体的な消去の進め方は、当サイトのデータ消去ガイドの該当部分をご覧ください。",
    },
    {
      t: "自作・BTO本体とパーツ単体の受付条件",
      d: "自作やBTOの本体を買取対象商品として明記している店、部品としての買取を案内している店、店頭でなら相談できると案内している店があります。パーツ単体はさらに分かれ、PCパーツを買取対象として掲げている店がある一方、パーツ類は扱わないと明記している店、記録媒体の単品買取だけを除外している店もあります。本体とパーツで売却先が異なる場合があることも想定しておくことをおすすめします。",
    },
    {
      t: "付属品の有無と受付条件",
      d: "ノートPCでは純正のACアダプターの同梱を条件としている店があり、欠品時は買取できない場合があると案内されています。ストレージを取り外すかどうかの判断とは別に、付属品が揃っているかも発送前にご確認ください。",
    },
    {
      t: "ライセンスやOSの扱い",
      d: "OSやソフトウェアのライセンスを、本体と一緒に譲渡できるかどうかは、購入形態や提供元の規定によって異なります。当サイトでは可否の判断は控えます。判断に迷う場合は、購入元・販売店・提供元の公式窓口にご確認ください。",
    },
  ];

  const checklist = [
    {
      t: "暗号化の状態と回復キーの控えを確認したか",
      d: "初期化を始める前に確認します。組織管理の端末であれば、この時点で管理担当者に相談します。",
    },
    {
      t: "消去にあてる日を決めたか",
      d: "時間のかかる方法を選ぶ場合は、集荷日や来店予定から逆算して別の日にあてます。電源に接続した状態で実行します。",
    },
    {
      t: "ストレージを取り外すかどうかを決めたか",
      d: "取り外す場合は、申し込み先が受け付けるかを先に確認します。取り外さない場合は、消去方法を選択します。",
    },
    {
      t: "取り外したストレージの扱いを決めたか",
      d: "保管・別売り・処分のいずれかを決めます。別売りの場合は、その店が記録媒体を買取対象にしているかを確認します。",
    },
    {
      t: "消去証明書が必要かを確認したか",
      d: "業務で使っていた端末など、記録が求められる場合は、証明書の発行に対応している窓口かどうかを申し込み前に確認します。",
    },
    {
      t: "付属品と同梱物を確認したか",
      d: "ACアダプターなどの付属品の有無、回復キーの控えや外部メディアが紛れ込んでいないかを、梱包の前に確認します。",
    },
  ];

  const faqs = [
    {
      q: "暗号化の回復キーは、初期化の前に確認しておいたほうがいいですか？",
      a: "事前に確認しておくことをおすすめします。初期化がうまく進まないとき、起動の途中で止まったとき、ドライブを取り外して別のPCにつないだときなどに回復キーを求められる場面があり得るためです。控えがアカウントに預けられているのか、手元にあるのか、組織が管理しているのかを把握しておいてください。勤務先から貸与された端末の場合は、ご自身で進めず管理担当者にご確認ください。",
    },
    {
      q: "初期化のときに「ファイルの削除」と「ドライブのクリーニング」のどちらを選べばいいですか？",
      a: "所要時間と安全性のどちらを優先するかでご判断ください。短時間で終わる方法は早く済む一方で不安が残るという意見があり、ドライブ側への処理を伴う方法は時間がかかる一方で、手放すことを前提とした処理としてはより徹底した内容になります。所要時間はストレージの種類や容量によって差があるため、当サイトでは目安を示していません。また、どちらを選んでもデータが復元されるかどうかは断定できません。時間に余裕があり、暗号化が有効かどうかわからない場合は、時間のかかる方法を選ぶことをおすすめします。",
    },
    {
      q: "消去が途中で止まってしまったらどうなりますか？",
      a: "起動しない状態になる可能性があります。PCの買取では正常に起動することを条件としている店が少なくないため、その状態のまま送ると受け付けられないことがあります。電源に接続した状態で、時間に余裕のある日に実行し、発送や来店の直前には始めないことをおすすめします。うまく起動しなくなった場合の売り方は、故障・起動不良の端末を扱うページを参照してください。",
    },
    {
      q: "ストレージを抜いて本体だけ売ることはできますか？",
      a: "店によって異なります。正常動作品のみを買取対象としている店では受け付けられない可能性があり、故障品やパーツ欠品でも買取可能と公式に案内している店もあります。受付可否や条件は店ごとに異なるため、申し込む前にその店の公式記載をご確認のうえ、必要に応じてお問い合わせください。当サイトが一次確認した各社の記載は、本ページの表に掲載しています。",
    },
    {
      q: "抜いたSSDやHDDだけを売ることはできますか？",
      a: "こちらも店によって異なります。PCパーツを買取対象商品として掲げている店がある一方、記録媒体の単品買取は行っていないと明記している店、パーツ類全般を取り扱っていないと明記している店もあります。本体とパーツで申し込み先が異なる場合もあるため、取り外す前に売却方法を決めておくことをおすすめします。",
    },
    {
      q: "業者がデータ消去をしてくれるなら、自分で消さなくてもいいですか？",
      a: "掲載社の多くは、送る前に利用者自身で初期化やロック解除を済ませることを求めています。買取後の消去工程について「完全な復元防止は保証できません」と明記している例もあります。事前の消去はご自身で行うものとお考えください。OS別の具体的な手順は、当サイトのデータ消去ガイドで解説しています。",
    },
    {
      q: "個人でもデータ消去証明書はもらえますか？",
      a: "対応している窓口はあります。当サイトの一次確認では、有料オプションとして証明書を発行しているサービスや、法人向けの窓口で無料発行しているサービスの記載を確認しています（本ページの表に出典と確認日を記載）。ただし、対象となる機種や状態が限られている場合があるため、申し込み前に条件をご確認ください。証明書の記載項目や社内での扱いについては、法人向けのページでご説明しています。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "PCを売る前のストレージの扱い", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">PC STORAGE</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          PCを売る前のストレージの扱い｜回復キーの確認・ドライブのクリーニング・取り外して売る場合
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          PCを買取に出す際は、スマートフォンと異なり、どこまで対応するかをご自身で判断する場面があります。暗号化が有効かどうか、初期化でどちらの消去方法を選ぶか、ストレージを取り外して本体のみを売るかといった点です。これらを決めずに作業を始めると、途中で作業が止まったり、売却の段階で条件が合わなかったりすることがあります。本ページでは、操作手順ではなく、作業前に決めておくべきPC特有の判断事項をご説明します。掲載社の条件は公式サイトの一次確認にもとづき、確認日を記載して引用しています。
        </p>
        <p className="mt-3 text-xs text-steel-500">
          公開日：{PAGE_DATE_LABEL}／掲載社の条件は各項に記載した確認日時点の公式サイトの記載です。当サイトでは買取価格・相場は扱いません。
        </p>

        {/* 冒頭の要点 */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">PCを手放す前に決めておく3つの事項</h2>
          <ul className="mt-4 space-y-3">
            {conclusions.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* 役割分担 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">本ページで扱う内容</h2>
          <p className="max-w-3xl text-sm leading-loose text-steel-600">
            OS別の初期化の進め方、メニューの場所、SIM・SDカードの取り出しといった実際の操作は
            <Link href="/guide/data-shokyo/" className="text-vermilion underline underline-offset-4">
              売る前のデータ消去・初期化
            </Link>
            に掲載しています。本ページでは、その手順の前後に必要となる判断を扱います。具体的には、回復キーの控えを確認する時期、消去方法の選択、ストレージを取り外すかどうか、証明書の要否、自作PCやパーツ単体の扱いです。いずれも操作を始める前に決めておくことで、やり直しを防ぐことができます。
          </p>
        </section>

        {/* 回復キー */}
        <section className="mt-14">
          <h2 className="section-title mb-2">判断1：初期化前の暗号化「回復キー」の確認</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            PCは、暗号化が有効な機種とそうでない機種が混在しています。暗号化が有効な環境では回復キーという控えが発行されているのが一般的で、これが必要になる場面は初期化の最中に限りません。作業を始める前に、控えの保管場所をご確認ください。
          </p>
          <div className="space-y-4">
            {recoveryPoints.map((p, i) => (
              <div key={p.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {p.t}
                </h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{p.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-steel-500">
            ※ 暗号化の状態を確認する画面の名称や場所はOSのバージョンによって異なります。当サイトでは特定の操作手順やツールの推奨は行いません。設定アプリの表示や、メーカー・OS提供元の公式案内でご確認ください。組織としての端末処分の進め方は
            <Link href="/situation/houjin/data-shokyo-shomeisho/" className="text-vermilion underline underline-offset-4">
              法人向けページ
            </Link>
            でご説明しています。
          </p>
        </section>

        {/* 消去方法の選択 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">判断2：「ファイルの削除」と「ドライブのクリーニング」のどちらを選ぶか</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            PCの初期化では消去の方法を選ぶ画面が出ます。この選択は、処理内容の違いに加え、売却までのスケジュールとデータ保護の必要性を比較して判断する事項です。
          </p>
          <div className="space-y-4">
            {cleaningPoints.map((p, i) => (
              <div key={p.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {p.t}
                </h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 border-l-2 border-vermilion bg-chalk-card p-5">
            <h3 className="font-display text-base text-steel-900">復元の可否は断定できません</h3>
            <p className="mt-2 text-[13px] leading-loose text-steel-700">
              当サイトでは、どの消去方法を選べばデータが復元されないのかを断定しません。掲載社の公式記載にも、買取後の消去工程について「完全な復元防止は保証できません」とするものがあります（出典・確認日は下の表に記載）。最終的な判断はご自身の用途と不安の度合いに合わせて行ってください。実際の操作手順は
              <Link href="/guide/data-shokyo/" className="text-vermilion underline underline-offset-4">
                データ消去ガイド
              </Link>
              をご覧ください。
            </p>
          </div>
        </section>

        {/* ストレージの取り外し */}
        <section className="mt-14">
          <h2 className="section-title mb-2">判断3：ストレージを取り外して売る場合の影響</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            データが入ったまま送ることに不安があり、ストレージを取り外して本体のみを売りたいという場合があります。データ保護の面ではわかりやすい選択ですが、買取の手続きには影響があります。取り外す前に、次の点をご確認ください。
          </p>
          <div className="space-y-4">
            {removalPoints.map((p, i) => (
              <div key={p.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {p.t}
                </h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 一次確認表：ストレージ・パーツ・動作条件 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">掲載社の公式記載（ストレージ・パーツ・動作の条件）</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            当サイトが公式サイトで確認できた記載のみを、確認日を添えて掲載しています。条件は変更されることがあるため、申し込み前に各社の公式サイトで最新の内容をご確認ください。査定額への影響は扱っていません。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {storageRows.map((r) => {
                  const c = getCompany(r.slug);
                  return (
                    <tr key={`${r.slug}-${r.field}`}>
                      <th className="w-40 md:w-56">
                        <Link href={`/kaitori/${c.slug}/`} className="text-vermilion underline underline-offset-4">
                          {c.name}
                        </Link>
                        <span className="mt-1 block text-[11px] font-normal text-steel-500">{r.field}</span>
                      </th>
                      <td>
                        {r.quote}
                        <span className="mt-2 block text-[11px] text-steel-500">
                          出典：
                          <a
                            href={c.official_url}
                            rel="nofollow noopener"
                            target="_blank"
                            className="underline underline-offset-4"
                          >
                            {c.official_url}
                          </a>
                          （{jaDate(c.confirmed_date)}確認）
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 上の表は、ストレージ・パーツ・動作条件に関係する記載を抜き出したものです。各社の送料・返送料・入金・本人確認などを含む条件全体は
            <Link href="/compare/" className="text-vermilion underline underline-offset-4">
              統一比較表
            </Link>
            と
            <Link href="/pc/" className="text-vermilion underline underline-offset-4">
              Windows PC・ノートPCの買取
            </Link>
            でご説明しています。
          </p>
        </section>

        {/* 消去証明書 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">判断4：消去証明書の要否</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            業務で使っていたPCや、処分の記録を組織として残す必要があるPCでは、データ消去証明書の発行を求められることがあります。証明書の記載項目、依頼前に確認すること、社内での記録の残し方は
            <Link href="/situation/houjin/data-shokyo-shomeisho/" className="text-vermilion underline underline-offset-4">
              法人の端末処分とデータ消去証明書
            </Link>
            でご説明していますので、必要な方はそちらをご覧ください。ここでは、個人でPCを売る場合に関係する範囲のみを扱います。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {eraseRows.map((r) => {
                  const c = getCompany(r.slug);
                  return (
                    <tr key={`${r.slug}-${r.field}`}>
                      <th className="w-40 md:w-56">
                        <Link href={`/kaitori/${c.slug}/`} className="text-vermilion underline underline-offset-4">
                          {c.name}
                        </Link>
                        <span className="mt-1 block text-[11px] font-normal text-steel-500">{r.field}</span>
                      </th>
                      <td>
                        {r.quote}
                        <span className="mt-2 block text-[11px] text-steel-500">
                          出典：
                          <a
                            href={c.official_url}
                            rel="nofollow noopener"
                            target="_blank"
                            className="underline underline-offset-4"
                          >
                            {c.official_url}
                          </a>
                          （{jaDate(c.confirmed_date)}確認）
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 表中の発行手数料は、確認日時点で各社の公式サイトに明記されていた金額をそのまま引用したもので、当サイトが算出した目安ではありません。対象となる機種・状態や送付方法は各社で異なり、条件は変更されることがあるため、申し込み前に公式サイトでご確認ください。
          </p>
          <div className="mt-6 border-l-2 border-vermilion bg-chalk-card p-5">
            <h3 className="font-display text-base text-steel-900">証明書の要否の確認</h3>
            <p className="mt-2 text-[13px] leading-loose text-steel-700">
              証明書が必要かどうかは、勤務先の規程や取引先との取り決め、扱っていた情報の性質によって変わります。当サイトでは、どの場合に必要かという判断は控えます。会社の端末であれば情報システム担当や管理部門に、預かりものやリースの端末であれば契約先にご確認ください。リース・資産計上された端末の注意点は
              <Link href="/situation/houjin/lease-shisan-chui/" className="text-vermilion underline underline-offset-4">
                リース・資産計上端末の注意点
              </Link>
              でご説明しています。
            </p>
          </div>
        </section>

        {/* 自作PC・パーツ */}
        <section className="mt-14">
          <h2 className="section-title mb-2">判断5：自作PC・パーツ単体の扱い</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            ご自身で組み立てたPCや、パーツのみが手元にある場合は、メーカー製のPCとは前提が異なります。初期化の導線が使えないことがあり、受付条件も店によって差が大きくなります。
          </p>
          <div className="space-y-4">
            {jisakuPoints.map((p, i) => (
              <div key={p.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {p.t}
                </h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{p.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-steel-500">
            ※ Mac（MacBook・iMac・Mac miniなど）は本体側の構成がWindows PCと異なり、ストレージを取り外す前提ではない機種があります。Macを売る場合の対応サービスは
            <Link href="/mac/" className="text-vermilion underline underline-offset-4">
              Mac・MacBookの買取
            </Link>
            をご覧ください。
          </p>
        </section>

        {/* チェックリスト */}
        <section className="mt-14">
          <h2 className="section-title mb-2">発送・持ち込みの前に確認する6項目</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            ストレージまわりに限った項目です。バックアップやサインアウトを含む全体のチェックリストは
            <Link href="/guide/data-shokyo/" className="text-vermilion underline underline-offset-4">
              データ消去ガイド
            </Link>
            に掲載しています。
          </p>
          <div className="space-y-4">
            {checklist.map((c, i) => (
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
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/pc/" className="btn-primary">PC買取の対応業者を見る</Link>
            <Link href="/compare/" className="btn-ghost">条件を比較表で確認する</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">PCのストレージの扱いに関するよくある質問</h2>
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
                <span className="mt-1 block text-xs text-steel-500">iPhone・Android・Windows・Mac別の操作手順</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/houjin/data-shokyo-shomeisho/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">法人の端末処分とデータ消去証明書</span>
                <span className="mt-1 block text-xs text-steel-500">証明書の記載項目と依頼前の確認事項</span>
              </Link>
            </li>
            <li>
              <Link href="/pc/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Windows PC・ノートPCの買取</span>
                <span className="mt-1 block text-xs text-steel-500">PCに対応している掲載社の条件一覧</span>
              </Link>
            </li>
            <li>
              <Link href="/mac/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Mac・MacBookの買取</span>
                <span className="mt-1 block text-xs text-steel-500">Macを売る場合の対応サービスと注意点</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/kowareta/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">画面割れ・故障した端末を売る</span>
                <span className="mt-1 block text-xs text-steel-500">起動しなくなった端末の受付条件の考え方</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/takuhai-nagare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">宅配買取の流れと梱包方法</span>
                <span className="mt-1 block text-xs text-steel-500">同梱物の確認と発送までの段取り</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/houjin/lease-shisan-chui/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">リース・資産計上端末の注意点</span>
                <span className="mt-1 block text-xs text-steel-500">手放してよい端末かどうかの確認</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">掲載社の条件を同じ項目で比較</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
