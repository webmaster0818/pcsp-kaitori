import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";

const TITLE = "Androidを手放す前のGoogleアカウントの外し方｜初期化しても残る紐づけ";
const DESC =
  "Androidスマホ・タブレットは、Googleアカウントを端末から外さないまま初期化すると、次の初期設定で以前のアカウント情報を求められる場合があります。iPhoneのアクティベーションロックに相当する端末保護機能の考え方、外す順番、手放したあとに遠隔でできること・できないこと、メーカーやキャリア独自のアカウントの存在、初期化できないときの相談先を整理します。";
const PATH = "/guide/google-account-android/";
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

export default function GoogleAccountAndroidGuidePage() {
  const conclusions = [
    "Androidにも、iPhoneのアクティベーションロックに相当する「端末保護機能」があります。盗まれた端末を初期化しただけでは使えないようにする仕組みで、初期化のあとの初期設定画面で、その端末に以前ログインしていたGoogleアカウントの情報を求められる場合があります。",
    "だから順番が大切です。「Googleアカウントを端末から削除する → 初期化する」の順で進めます。逆にしてしまうと、次に使う人が初期設定を完了できず、買取店では受け付けられない状態になることがあります。",
    "紐づいているアカウントはGoogleアカウントだけとは限りません。端末メーカー独自のアカウント、キャリアのID、決済や電子マネー系のアプリ、勤務先が管理する端末の管理設定など、別の紐づけが残っていることがあります。心当たりのあるものは、初期化の前に一つずつ外しておきます。",
    "手放したあとにできることは限られます。アカウント側の一覧から端末のログイン情報を消す操作は、端末が手元になくても行えるのが一般的ですが、すでに他人の手に渡った端末に対して遠隔で何でもできるわけではありません。渡す前に済ませるのが原則です。",
    "画面が割れて操作できない、パスワードが分からない、初期化の途中で止まってしまう——こうした場合は無理に進めず、端末メーカーの窓口・契約中のキャリア・買取店に、その端末を受け付けてもらえるかを先に相談してください。",
  ];

  const whyRows = [
    {
      label: "どんな機能か",
      value:
        "Androidには、端末を初期化したあとの初期設定で、以前その端末で使っていたGoogleアカウントのログイン情報を求める保護機能があります。端末保護機能、あるいはFactory Reset Protection（FRP）と呼ばれることがあります。盗難・紛失時に、拾った人や盗んだ人が初期化して使ったり売ったりすることを防ぐための仕組みです。",
    },
    {
      label: "何に紐づくのか",
      value:
        "端末と、その端末にログインしていたGoogleアカウントの組み合わせです。端末の中のデータとは別のところに記録が残るため、端末側のデータを消す操作（初期化）をしただけでは、この紐づけが外れるとは限りません。",
    },
    {
      label: "いつ困るのか",
      value:
        "困るのは自分ではなく「次に使う人」です。初期化した端末の電源を入れ、初期設定で通信に接続した段階で、以前のアカウント情報を求める画面が出ることがあります。前の持ち主しかそのパスワードを知らないため、その先に進めません。",
    },
    {
      label: "iPhoneとの対応関係",
      value:
        "目的はiPhoneのアクティベーションロック（「探す」に紐づく機能）とほぼ同じです。名称も仕組みも別物ですが、売る側がやることは共通で「アカウントを端末から外してから初期化する」に尽きます。iPhone・iPad・Mac側の手順は当サイトの別ページで解説しています。",
    },
    {
      label: "買取での扱い",
      value:
        "買取店は、次の持ち主が初期設定を完了できない端末を再販できません。そのため、初期化されていない端末やアカウントのロックが残った端末を受け付けていない会社があります（後述の掲載各社の記載をご覧ください）。送ってから返送、という二度手間を避けるためにも発送前の確認が重要です。",
    },
  ];

  const orderSteps = [
    {
      t: "バックアップを取る",
      d: "写真・連絡先・各アプリのデータのうち、残したいものを先に退避します。アカウントを削除したあとでは同期からの復元ができなくなるものもあるため、必ず最初に行います。具体的なバックアップ先と手順は、当サイトのデータ消去ガイドで整理しています。",
    },
    {
      t: "各アプリ側の引き継ぎ・移行を済ませる",
      d: "メッセージアプリの引き継ぎ設定、2段階認証アプリの移行、決済系アプリの扱いなど、「サービス側で先に手続きが必要なもの」をここで片付けます。初期化してしまうと、サービスによっては復旧に時間がかかることがあります。",
    },
    {
      t: "画面ロックの扱いを確認する",
      d: "画面ロック（暗証番号・パターン・生体認証）が設定されていると、アカウントの削除や初期化の操作でロック解除を求められるのが一般的です。ロック解除の方法が分からない状態のまま先に進まないでください。暗証番号が分からない端末は、この時点で相談先を検討したほうが早いことがあります。",
    },
    {
      t: "Googleアカウントを端末から削除する",
      d: "端末の設定アプリを開き、上部の検索窓に「アカウント」と入力すると、アカウントの一覧にあたる項目が見つかることが多いはずです。そこから対象のGoogleアカウントを選び、端末から削除します。複数のアカウントを登録している場合は、心当たりのあるものをすべて確認します。設定画面の名称や階層は、端末やOSのバージョンによって異なります。表示が見当たらない場合は、端末メーカーのサポートページで自分の端末の表記を確認してください。",
    },
    {
      t: "メーカー独自・キャリア独自のアカウントも確認する",
      d: "同じ「アカウント」の一覧に、端末メーカーが提供するアカウントや、通信会社のIDが並んでいることがあります。これらは別の紐づけなので、Googleアカウントを消しただけでは残ります。詳しくは次の章で整理します。",
    },
    {
      t: "初期化（データの初期化・リセット）を行う",
      d: "アカウントを外し終えてから初期化します。設定アプリの検索窓に「リセット」または「初期化」と入力すると該当の項目にたどり着けることが多い作りになっています。実行前に、削除される対象の説明を必ず読んでください。なお、OS別の初期化手順そのものは当サイトのデータ消去ガイドが本体です。",
    },
    {
      t: "SIMカード・SDカードを取り出し、初期設定画面まで確認する",
      d: "初期化が終わったらSIMカードとSDカードを抜きます。そのうえで再度電源を入れ、言語選択から始まる初期設定画面が出るところまで確認しておくと安心です。ここで以前のアカウント情報を求める画面が出るようなら、アカウントの削除が済んでいなかったサインです。",
    },
  ];

  const otherAccounts = [
    {
      t: "端末メーカー独自のアカウント",
      d: "Android端末には、Googleのアカウントとは別に、端末メーカーが独自に用意しているアカウントを登録できるものがあります。クラウドバックアップや端末を探す機能などに使われるもので、Googleアカウントを削除しただけでは残ります。メーカー独自の「端末を探す」機能を有効にしている場合は解除が必要になることがあります。該当するものがあるかは、設定アプリの検索窓に「アカウント」と入力して一覧を見るのが確実です。対応の要否はメーカーごとに異なるため、迷う場合はそのメーカーのサポート窓口で確認してください。",
    },
    {
      t: "通信会社（キャリア）のID・サービス",
      d: "キャリアが提供するIDは端末ではなく契約に紐づくのが一般的で、端末を初期化しても契約そのものが消えるわけではありません。一方で、キャリアの遠隔ロックや端末を探す系のサービスを申し込んでいる場合、その設定が端末側に効いていることがあります。買取の受け入れ条件として、遠隔ロック系のサービスが有効な端末を対象外としている会社もあります。解約や設定解除の要否は契約内容によって変わるため、契約中のキャリアに確認するのが確実です。",
    },
    {
      t: "電子マネー・決済系（おサイフケータイ等）",
      d: "非接触決済に対応した端末では、残高や利用情報が端末側の部品に記録される種類のサービスがあります。この種のデータは端末の初期化だけでは想定どおりに処理されないことがあり、各サービスが案内する移行などの手続きが別途必要になる場合があります。買取店側でも、この種のアプリの利用履歴が残っている端末を減額や買取不可の対象としている例があります（後述）。必要な手続きは利用中のサービスの公式案内で確認してください。",
    },
    {
      t: "勤務先が管理している端末（業務用端末）",
      d: "会社から貸与された端末や、会社のアカウントを登録した端末には、管理者側から設定を配布・制限する仕組みが入っていることがあります。この場合、個人の判断で初期化や売却を進められる端末とは限りません。所有者が誰かを含め、社内の管理部門に確認してください。",
    },
    {
      t: "2段階認証・パスキーなどの認証情報",
      d: "2段階認証アプリのコード生成や、端末に保存したパスキーは、端末内に鍵があるため初期化すると使えなくなります。各種サービスのログインに使っている場合、先に新しい端末へ移すか、各サービス側で登録をやり直しておかないと、あとからログインできなくなることがあります。移行方法は各サービスの案内に従ってください。",
    },
    {
      t: "SIMカード・SDカード",
      d: "SIMカードとSDカードは端末とは別物で、初期化の対象になりません。抜き忘れたまま発送すると、中身ごと手元を離れます。買取店の中には、SIMカードやSDカードを買取の対象外としている会社もあります。発送前に必ず取り出してください。",
    },
  ];

  const remoteRows = [
    {
      label: "できることの例：アカウント側から端末のログインを解除する",
      value:
        "別の端末やパソコンのブラウザからGoogleアカウントにログインし、セキュリティ関連の画面にある端末一覧から、該当端末のログイン情報を削除する操作は、端末が手元になくても行えるのが一般的です。",
    },
    {
      label: "できることの例：遠隔でのデータ消去",
      value:
        "Googleが提供する端末を探す仕組みから、遠隔でのデータ消去を指示できるのが一般的です。ただし端末が通信に接続されていない場合は、次に接続されたときに実行される扱いになるとされており、すぐに実行されるとは限りません。電源が入らない端末には期待できません。",
    },
    {
      label: "できないことの例：渡したあとの完全な取り消し",
      value:
        "一度他人の手に渡った端末について、遠隔ですべてを元に戻すことはできません。輸送中や到着前のリスクは、渡す前にデータを消してアカウントを外しておくことでしか下げられません。",
    },
    {
      label: "できないことの例：他人のアカウントの解除",
      value:
        "中古で入手した端末に前の持ち主のアカウントが残っている場合、その解除には前の持ち主のパスワードが必要になるのが一般的です。購入した端末で以前のアカウント情報を求められた場合は、購入元に相談してください。",
    },
    {
      label: "注意：初期化を先にしてしまった場合",
      value:
        "初期化を先にしてしまい、端末側に保護機能が残った状態では、アカウント側の操作だけでは解決しないことがあります。この場合、端末に再度そのGoogleアカウントでログインしたうえでアカウントを削除し、もう一度初期化する、という流れが必要になることがあります。端末が手元にあるうちに確認してください。",
    },
  ];

  const stuck = [
    {
      t: "画面が割れている・操作できない",
      d: "画面が映らない、タッチが効かないといった理由で端末を操作できない場合、端末側からアカウントを削除することはできません。遠隔でのデータ消去を試す余地はありますが、通信に接続できない端末では実行されません。この状態の端末を受け付けているかは会社によって大きく異なるため、送る前に買取店へ状況を伝えて確認してください。",
    },
    {
      t: "画面ロックの暗証番号やパターンが分からない",
      d: "ロックを解除できないと、アカウントの削除も初期化も進められないのが一般的です。解除の方法があるかどうかは端末や設定によって異なるため、端末メーカーのサポート窓口に、その端末での対応可否を確認してください。買取店側でも、暗証番号が分からない端末を減額や買取不可の対象としている例があります。",
    },
    {
      t: "登録していたGoogleアカウントの情報が分からない",
      d: "どのアカウントでログインしていたか分からない、パスワードを忘れた、という場合は、まずアカウントの復旧手続きを試すことになります。それでも分からない場合、端末側に保護機能が残る可能性が高く、通常の買取では受け付けられないことがあります。分からないまま発送すると返送になり手間が増えるため、事前に相談するほうが早く済みます。",
    },
    {
      t: "初期化の途中で止まる・エラーが出る",
      d: "初期化が完了しない端末は、データが残ったままの可能性があります。無理に繰り返さず、端末メーカーのサポートに症状を伝えて確認してください。データの扱いが心配な場合は、買取店のデータ消去の方針（自社で消去するのか、証明書の発行があるのか）を確認したうえで判断する方法もあります。",
    },
    {
      t: "売らずに処分したい場合",
      d: "買取の対象にならない端末は、自治体の回収やメーカー・販売店の回収の対象になることがあります。取り扱いは地域や事業者によって異なるため、お住まいの自治体や該当の事業者の案内を確認してください。処分する場合も、可能な範囲でデータの消去とアカウントの解除を済ませておくのが安全です。",
    },
  ];

  const companyRows = [
    {
      name: "イオシス買取",
      url: "https://k-tai-iosys.com/",
      slug: "iosys-kaitori",
      date: "2026年9月22日",
      value:
        "買取不可の条件として「本体機能で初期化できないもの」「iCloudやGoogleアカウント等のロックが設定されたもの」を挙げています。画面割れ・破損品自体は難ありランクとして買取対象としている一方で、アカウントのロックは別の扱いです。",
    },
    {
      name: "ネットオフ スマホ買取",
      url: "https://www.netoff.co.jp/mobilebuy/",
      slug: "netoff",
      date: "2026年9月5日",
      value:
        "「初期化されていないもの」「各種アカウント・パスワードロックが設定されているもの」を買取不可としています。あわせて、利用者自身での初期化が必須と案内しています。",
    },
    {
      name: "古本市場（ふるいち）スマホ買取",
      url: "https://furumoba.jp/",
      slug: "furuichi",
      date: "2026年9月5日",
      value:
        "事前に利用者自身での初期化が必須と案内し、「初期化できない端末」「ロックがかかっている端末」を買取不可としています。SIMカード・SDカードは買取の対象外です。",
    },
    {
      name: "モバイル一番",
      url: "https://www.mobile-ichiban.com/",
      slug: "mobile-ichiban",
      date: "2026年9月22日",
      value:
        "利用者側でGoogleアカウント（およびApple ID・iCloud）のサインアウトと端末本体のリセットを行うよう求めています。初期化忘れ等で不測の事態が起きても責任を負いかねる旨を記載しています。",
    },
    {
      name: "じゃんぱら",
      url: "https://www.janpara.co.jp/buy/",
      slug: "janpara",
      date: "2026年9月11日",
      value:
        "記録媒体を持つ品物について、データの消去に加えて「パスワードやアカウントの登録解除も含め、事前にお客様の元でお願いいたします」と案内しています。",
    },
    {
      name: "エコリング",
      url: "https://www.eco-ring.com/",
      slug: "eco-ring",
      date: "2026年9月22日",
      value:
        "Androidについて、おサイフケータイ等のICアプリが残っていると買取を断る場合があると記載しています。iPhone・Androidとも電源が入る状態が必須で、ネットワーク利用制限中の端末は買取不可としています。",
    },
    {
      name: "携帯市場 買取",
      url: "https://kaitori.keitaiichiba.co.jp/",
      slug: "keitai-ichiba",
      date: "2026年9月12日",
      value:
        "暗証番号不明、またはおサイフケータイ（生活アプリ）の利用履歴がある機種は買取金額が大きく下がるとしています。また、不正契約や不正入手の可能性があるおまかせロック・遠隔ロックサービスがかかっている端末は買取不可としています。",
    },
    {
      name: "Apple Trade In",
      url: "https://www.apple.com/jp/shop/trade-in",
      slug: "apple-trade-in",
      date: "2026年9月22日",
      value:
        "Androidについて、アカウントからサインアウトしないと下取りできなくなる場合があると案内しています（Apple製品以外も下取り対象に含む公式プログラムのため、Android端末にも言及があります）。",
    },
  ];

  const checkRows = [
    { label: "バックアップ", value: "残したい写真・連絡先・アプリのデータを退避した。アカウント削除後では取り出せなくなるものがないか確認した。" },
    { label: "Googleアカウント", value: "設定アプリから、端末に登録されているGoogleアカウントを削除した。複数ある場合はすべて確認した。" },
    { label: "メーカー独自のアカウント", value: "端末メーカーのアカウントを登録していた場合、それも削除した。メーカー独自の「端末を探す」系の機能を使っていた場合は解除した。" },
    { label: "キャリアのサービス", value: "遠隔ロックや端末を探す系のサービスを申し込んでいないか確認した。不明な点は契約中のキャリアに確認した。" },
    { label: "決済・電子マネー", value: "非接触決済や電子マネーを使っていた場合、各サービスの案内に沿った手続きを済ませた。" },
    { label: "認証アプリ・パスキー", value: "2段階認証アプリやパスキーを新しい端末へ移した、または各サービスで登録をやり直した。" },
    { label: "初期化", value: "アカウントを外したあとに初期化を実行し、完了まで進んだ。" },
    { label: "SIM・SDカード", value: "SIMカードとSDカードを取り出した。" },
    { label: "最終確認", value: "電源を入れ直し、初期設定画面で以前のアカウント情報を求められないことを確認した。" },
  ];

  const faqs = [
    {
      q: "Androidにも、iPhoneのアクティベーションロックのような仕組みはありますか？",
      a: "呼び方と仕組みは異なりますが、目的の近い機能があります。Androidでは、初期化したあとの初期設定で、以前その端末で使っていたGoogleアカウントの情報を求められる場合があります。端末保護機能、あるいはFactory Reset Protection（FRP）と呼ばれることがあります。売る側の対応は共通で、初期化の前にアカウントを端末から削除しておくことです。",
    },
    {
      q: "初期化を先にしてしまいました。どうすればよいですか？",
      a: "端末が手元にあるうちに確認してください。初期設定画面で以前のアカウント情報を求められる場合、そのGoogleアカウントで端末にログインし直してからアカウントを削除し、もう一度初期化する流れが必要になることがあります。アカウント側の端末一覧から削除する操作だけでは、端末側の保護状態が解消しないことがあります。",
    },
    {
      q: "Googleアカウントを消せば、紐づけはすべて外れますか？",
      a: "そうとは限りません。端末メーカー独自のアカウント、キャリアが提供する遠隔ロック系のサービス、非接触決済のアプリなど、別に紐づいているものが残っている場合があります。設定アプリの検索窓に「アカウント」と入力して一覧を確認し、心当たりのあるものを個別に処理してください。必要な手続きはメーカー・キャリア・サービスごとに異なるため、それぞれの案内で確認するのが確実です。",
    },
    {
      q: "手放したあとに、遠隔でアカウントを外すことはできますか？",
      a: "アカウント側の端末一覧からログイン情報を削除する操作は、端末が手元になくても行えるのが一般的です。ただし、端末側に保護機能が残っている場合はそれだけで解決しないことがあり、また他人の手に渡った端末について遠隔ですべてを元に戻せるわけではありません。渡す前に済ませるのが原則です。",
    },
    {
      q: "画面が割れていて操作できない端末はどうすればよいですか？",
      a: "端末側からアカウントを削除できないため、通常の買取では受け付けられないことがあります。通信に接続できる状態なら遠隔でのデータ消去を試す余地はありますが、電源が入らない端末では実行されません。無理に進めず、買取店に状況を伝えて受け入れの可否を確認してください。壊れた端末の売り方は当サイトの専用ページでも整理しています。",
    },
    {
      q: "アカウントのロックが残ったまま送るとどうなりますか？",
      a: "掲載社の中には、初期化されていない端末やアカウントのロックが設定された端末を買取不可としている会社があります（イオシス買取・ネットオフ・古本市場、いずれも公式サイトで確認。確認日は各社の記載のとおりです）。この場合は返送などの対応になり、返送料の負担も会社によって異なります。発送前に外しておくのが確実です。",
    },
    {
      q: "iPhoneの場合の手順はどこで確認できますか？",
      a: "iPhone・iPad・Macのアクティベーションロックと「探す」の解除は、当サイトの専用ページで解説しています。OS別の初期化・データ消去の手順そのものは、データ消去のガイドにまとめています。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "Androidを手放す前のGoogleアカウントの外し方", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">ANDROID ACCOUNT</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          Androidを手放す前のGoogleアカウントの外し方｜初期化しても残る紐づけ
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          Androidスマホやタブレットを売る・譲る・下取りに出すときに、いちばん見落とされやすいのが「初期化しただけでは外れない紐づけ」です。iPhoneのアクティベーションロックはよく知られていますが、Androidにも同じ目的の端末保護機能があり、アカウントを外さずに初期化すると、次に使う人が初期設定を完了できなくなることがあります。このページでは、なぜ初期化の前にアカウントを削除する必要があるのか、Googleアカウント以外にどんな紐づけが残りうるのか、手放したあとに遠隔でできること・できないこと、そして初期化できないときの相談先を整理します。設定画面の名称や階層は端末やOSのバージョンによって変わるため、ここでは変わりにくい探し方を中心に説明します。
        </p>
        <p className="mt-3 text-xs text-steel-500">
          このページの内容は{PAGE_DATE_LABEL}時点の一般的な情報です。掲載社の条件は各社公式サイトで確認した内容を、確認日とともに引用しています。
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

        {/* 端末保護機能とは */}
        <section className="mt-14">
          <h2 className="section-title mb-2">初期化しても残る紐づけ｜Androidの端末保護機能</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            「初期化すればまっさらになる」という感覚は、半分は正しく、半分は足りません。端末の中のデータを消す操作と、端末とアカウントの結びつきを解く操作は別のものだからです。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {whyRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 保護機能の有無や挙動は、端末・OSのバージョン・設定によって異なります。自分の端末での動作は、端末メーカーのサポート情報で確認してください。
          </p>
          <div className="mt-6 border border-chalk-line bg-chalk-card p-5">
            <h3 className="font-display text-base text-steel-900">iPhone・iPadを手放す場合は別ページへ</h3>
            <p className="mt-2 text-[13px] leading-loose text-steel-700">
              Apple製品の「探す」とアクティベーションロックの解除は、
              <Link href="/guide/activation-lock/" className="text-vermilion underline underline-offset-4">
                アクティベーションロックと「探す」の解除
              </Link>
              で解説しています。OS別の初期化・データ消去の手順そのものは
              <Link href="/guide/data-shokyo/" className="text-vermilion underline underline-offset-4">
                売る前のデータ消去・初期化
              </Link>
              が本体です。このページは、Android側の「アカウントの紐づけ」に絞って掘り下げます。
            </p>
          </div>
        </section>

        {/* 順番 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">外す順番｜アカウントの削除が先、初期化があと</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            順番を間違えると、あとから戻す手間が増えます。以下は一般的な進め方で、細かな画面名は端末によって異なります。設定アプリには検索窓があるのが一般的なので、階層をたどるより、探したい言葉を入力するほうが確実です。
          </p>
          <div className="space-y-4">
            {orderSteps.map((s, i) => (
              <div key={s.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.t}
                </h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{s.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 設定アプリの項目名・階層は端末やOSのバージョンによって異なります。断定的な手順として受け取らず、自分の端末の表記で読み替えてください。
          </p>
        </section>

        {/* 他の紐づけ */}
        <section className="mt-14">
          <h2 className="section-title mb-2">Googleアカウント以外に残りうる紐づけ</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            Androidは端末メーカーが多く、Googleアカウントに加えて、メーカーやキャリアが独自のアカウント・サービスを重ねている場合があります。「Googleアカウントを消したから大丈夫」と考えていると、別の紐づけが残ったままになることがあります。
          </p>
          <div className="space-y-4">
            {otherAccounts.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 border border-chalk-line bg-chalk-card p-5">
            <p className="text-[13px] leading-loose text-steel-700">
              業務用端末の回収や管理設定の解除については、
              <Link href="/situation/houjin/jugyoin-tanmatsu-kaishu/" className="text-vermilion underline underline-offset-4">
                従業員の業務端末を回収するときの進め方
              </Link>
              、所有権の確認については
              <Link href="/situation/houjin/lease-shisan-chui/" className="text-vermilion underline underline-offset-4">
                リース品・資産計上した端末を手放すときの注意
              </Link>
              で扱っています。
            </p>
          </div>
        </section>

        {/* 遠隔 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">手放したあとに遠隔でできること・できないこと</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            「送ってしまったけれど、あとから何とかなるのでは」と考えたくなりますが、できることには限りがあります。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {remoteRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 遠隔操作の可否は、端末の電源・通信状態・設定によって変わります。実行できるかどうかを前提に予定を立てないでください。
          </p>
        </section>

        {/* 進められないとき */}
        <section className="mt-14">
          <h2 className="section-title mb-6">初期化できない・アカウント情報が分からないとき</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            うまく進まないときに、力技で何度も操作を繰り返すのはおすすめできません。状況ごとに、どこに相談すると話が早いかを整理します。手続きの可否はここでは判断できないため、確認先の案内にとどめます。
          </p>
          <div className="space-y-4">
            {stuck.map((c) => (
              <div key={c.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/situation/kowareta/" className="btn-ghost">壊れた端末の売り方を見る</Link>
            <Link href="/compare/" className="btn-primary">受け入れ条件を比較表で確認する</Link>
          </div>
        </section>

        {/* 掲載社の記載 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">掲載社の公式サイトで確認できた「アカウント・初期化」の条件</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            以下は、当サイトが各社の公式サイトで確認できた記載のうち、アカウントの解除や初期化に関する部分です。条件は変更されることがあるため、申し込み前に必ず各社の公式サイトで最新の内容を確認してください。金額に関する記載はここでは扱いません。
          </p>
          <div className="space-y-4">
            {companyRows.map((c) => (
              <div key={c.slug} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">
                  <Link href={`/kaitori/${c.slug}/`} className="hover:text-vermilion">
                    {c.name}
                  </Link>
                </h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.value}</p>
                <p className="mt-2 text-xs text-steel-500">
                  出典：
                  <a
                    href={c.url}
                    rel="nofollow noopener"
                    target="_blank"
                    className="underline underline-offset-4 hover:text-vermilion"
                  >
                    {c.name}公式サイト
                  </a>
                  （確認日：{c.date}）
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 掲載社ごとの条件の全体像は
            <Link href="/compare/" className="text-vermilion underline underline-offset-4">統一比較表</Link>
            で並べて確認できます。Androidスマホに対応する会社の一覧は
            <Link href="/android/" className="text-vermilion underline underline-offset-4">Androidスマホの買取</Link>
            、タブレットは
            <Link href="/tablet/" className="text-vermilion underline underline-offset-4">タブレットの買取</Link>
            をご覧ください。
          </p>
        </section>

        {/* チェック表 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">発送・持ち込みの前に確認する表</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            すべてに「はい」と答えられれば、アカウント面の準備はおおむね整っています。ひとつでも引っかかる項目があれば、該当する章に戻ってください。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {checkRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 会社によって求められる状態は異なります。申し込み前に各社の公式サイトで受け入れ条件を確認してください。宅配で送る場合の全体の流れは
            <Link href="/guide/takuhai-nagare/" className="text-vermilion underline underline-offset-4">宅配買取の流れ</Link>
            、必要な書類は
            <Link href="/guide/honnin-kakunin/" className="text-vermilion underline underline-offset-4">本人確認</Link>
            のページで解説しています。
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">AndroidのGoogleアカウントでよくある質問</h2>
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
                <span className="mt-1 block text-xs text-steel-500">OS別の手順とバックアップのチェックリスト</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/activation-lock/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">アクティベーションロックと「探す」の解除</span>
                <span className="mt-1 block text-xs text-steel-500">iPhone・iPad・Mac側の解除手順</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/kowareta/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">壊れた・起動しない端末を売る</span>
                <span className="mt-1 block text-xs text-steel-500">操作できずアカウントを外せない端末の扱い</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/shitadori-hikaku/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">下取りと買取の違い</span>
                <span className="mt-1 block text-xs text-steel-500">キャリア下取り・Apple Trade In・買取店の比較</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/takuhai-nagare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">宅配買取の流れと梱包方法</span>
                <span className="mt-1 block text-xs text-steel-500">申込から入金までの手順と注意点</span>
              </Link>
            </li>
            <li>
              <Link href="/android/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Androidスマホの買取</span>
                <span className="mt-1 block text-xs text-steel-500">対応する掲載社と条件の一覧</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/houjin/jugyoin-tanmatsu-kaishu/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">業務端末の回収の進め方</span>
                <span className="mt-1 block text-xs text-steel-500">管理設定が入った端末を手放す前に</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">掲載社の受け入れ条件を同じ物差しで比較</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
