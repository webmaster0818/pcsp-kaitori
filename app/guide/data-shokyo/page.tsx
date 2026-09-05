import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR, PUBLISHED_DATE } from "@/lib/site";

const TITLE = "スマホ・PCを売る前のデータ消去 完全手順｜iPhone・Android・Windows・Mac別";
const DESC =
  "スマホ・PCを買取に出す前のデータ消去手順をOS別に整理。バックアップ、iPhoneの「探す」オフとApple IDサインアウト、AndroidのGoogleアカウント削除、Windowsの「ドライブのクリーニング」、Macの「すべてのコンテンツと設定を消去」、SIM・SDカードの取り出し、おサイフケータイや認証アプリの移行までをチェックリスト付きで解説します。";
const PATH = "/guide/data-shokyo/";

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

export default function DataShokyoGuidePage() {
  const conclusions = [
    "順番は「バックアップ → アカウントのサインアウト（iPhoneは「探す」オフ） → 初期化 → SIM・SDカードを抜く」です。初期化を先にやるとアカウントの紐づけが残り、次の持ち主が使えない状態になることがあります。",
    "現在のiPhone・Android・Mac・Windows（暗号化が有効な場合）は、初期化の際に暗号化キーが破棄される仕組みが一般的で、正しい手順で初期化すれば実用上のデータ復元は困難と考えられています。ただし暗号化が無効な古いPCは「ドライブのクリーニング」など上書き消去を選ぶのが安全側です。",
    "おサイフケータイ（Suica・iD・QUICPayなど）や2段階認証アプリは、初期化してから気づくと取り戻しに手間がかかります。初期化の前に機種変更手続き・移行を済ませてください。",
    "機種・OSバージョンにより名称や手順が異なります。このページは一般的な流れの整理です。迷ったら各メーカーのサポートページで自分の機種の手順を確認してください。",
  ];

  const backupRows = [
    { label: "iPhone・iPad", value: "iCloudバックアップ、またはPC（Mac の Finder / Windows の iTunes・Apple Devices アプリ）へのバックアップ。写真が多い場合はiCloudの容量が足りるか事前に確認します。" },
    { label: "Androidスマホ", value: "Googleアカウントのバックアップ（設定の「システム」や「Google」メニューにあることが多い）に加え、写真はGoogleフォト、LINEなどのアプリは各アプリ内の引き継ぎ設定を使います。メーカー独自のバックアップ機能（Samsung・ソニー・シャープなど）がある機種もあります。" },
    { label: "Windows PC", value: "外付けSSD・HDDやクラウド（OneDrive など）にドキュメント・写真・デスクトップをコピー。ブラウザのブックマークやパスワードはブラウザの同期機能かエクスポート機能で退避します。ライセンスが端末に紐づくソフトは、先に「ライセンス認証の解除」をしておくと再インストール時に困りません。" },
    { label: "Mac", value: "Time Machine で外付けドライブにバックアップするのが基本です。新しいMacに引き継ぐ場合は「移行アシスタント」で丸ごと移せます。iCloud Drive を使っていても、ローカルにしかないファイルがないか確認しましょう。" },
  ];

  const iphoneSteps = [
    {
      t: "バックアップを取り、新しい端末への移行を済ませる",
      d: "iCloudバックアップまたはPCでバックアップを作成します。新しいiPhoneに乗り換える場合は「クイックスタート」で直接転送するのが確実です。LINEなどアプリ独自の引き継ぎもここで済ませます。",
    },
    {
      t: "Apple Watch をペアリング解除する（使っている場合）",
      d: "Watch アプリからペアリングを解除すると、Apple Watch 側のアクティベーションロックも解除されます。iPhone を先に初期化すると Watch 側の処理が残るため、Watch から先に外しておくのが安全です。",
    },
    {
      t: "「探す」をオフにして Apple ID（Apple アカウント）からサインアウトする",
      d: "設定アプリの最上部にある自分の名前をタップし、「探す」→「iPhoneを探す」をオフにします（Apple ID のパスワード入力が求められます）。続けて画面下部の「サインアウト」を実行します。これがアクティベーションロック解除の要で、買取業者が最も重視する工程です。詳しくは別ページで解説しています。",
    },
    {
      t: "「すべてのコンテンツと設定を消去」を実行する",
      d: "設定 → 一般 → 「転送またはiPhoneをリセット」→「すべてのコンテンツと設定を消去」の順に進みます（OSバージョンによりメニュー名が異なります）。この工程で端末内の暗号化キーが破棄され、データにアクセスできなくなる仕組みです。最近のバージョンでは、この画面から「探す」のオフとサインアウトをまとめて促されることもあります。",
    },
    {
      t: "SIM カードを抜き、eSIM の扱いを確認する",
      d: "物理 SIM は側面のトレイから取り出します。eSIM を使っている場合は、初期化時に「eSIM を消去」するかどうか選択肢が出るのが一般的です。乗り換え先で再発行手続きが必要になることがあるため、キャリアの案内を確認してから消去してください。",
    },
    {
      t: "初期化後に「こんにちは」の初期設定画面で止まっていることを確認する",
      d: "初期化が完了すると言語選択の初期設定画面になります。ここで Apple ID の入力を求める画面（アクティベーションロック画面）が出る場合は、サインアウトが完了していません。iCloud.com の「探す」からデバイスを削除する必要があります。",
    },
  ];

  const androidSteps = [
    {
      t: "バックアップと各アプリの引き継ぎを済ませる",
      d: "Googleアカウントのバックアップをオンにし、最新のバックアップが作成されているか確認します。写真はGoogleフォト、LINE などは各アプリの引き継ぎ設定を使います。SD カードに保存している写真・動画は、カードを抜けばそのまま手元に残ります。",
    },
    {
      t: "おサイフケータイ・決済アプリの機種変更手続きをする",
      d: "モバイル Suica・iD・QUICPay・楽天 Edy・nanaco・WAON などは、アプリ側で「機種変更」の手続きを先に行い、残高をサーバーに預ける形にします。この手続きをしないまま初期化すると残高の取り戻しに時間がかかることがあります。詳細は後述します。",
    },
    {
      t: "画面ロック（PIN・パターン・指紋・顔）を解除しておく",
      d: "Googleアカウントの削除やリセットにはロック解除が求められます。また、画面ロックが残ったまま初期化しても Google の端末保護機能（FRP）が有効なままになることがあるため、先に設定 → セキュリティから画面ロックを「なし」にしておくと安全です。",
    },
    {
      t: "Googleアカウントを端末から削除する",
      d: "設定 → 「パスワードとアカウント」または「アカウント」→ 対象の Google アカウント → 「アカウントを削除」。複数のアカウントを登録している場合はすべて削除します。この工程が Android の端末保護機能（FRP）を残さないための要で、iPhone の「探す」オフに相当します。Samsung アカウントなど、メーカー独自のアカウントを登録している場合はそれも削除します。",
    },
    {
      t: "端末をリセット（初期化）する",
      d: "設定 → 「システム」→「リセット オプション」→「すべてのデータを消去（出荷時リセット）」が Pixel などの標準的な位置ですが、Galaxy・Xperia・AQUOS・arrows などメーカーによって「一般管理」「端末情報」の下にあるなど、メニュー名も階層も異なります。設定アプリの検索欄に「リセット」や「初期化」と入力するとたどり着きやすいです。",
    },
    {
      t: "SIM カード・SD カードを抜き、初期設定画面で止まっていることを確認する",
      d: "初期化が終わったら SIM と SD カードを取り出します。再起動後に言語選択の初期設定画面が表示されればほぼ完了です。Wi-Fi に接続した段階で「この端末は以前リセットされました」「以前使用していた Google アカウントでログインしてください」といった画面が出る場合は、アカウント削除が済んでいなかったサインです。",
    },
  ];

  const windowsSteps = [
    {
      t: "バックアップと、ライセンス・サブスクリプションの解除",
      d: "ファイルを外付けドライブやクラウドに退避したら、端末に紐づくソフトのライセンス認証を解除しておきます。Microsoft 365 やクラウドサービスのサインイン端末上限に数えられているものは、初期化後に別の端末からでも解除できるものが多いですが、先にやっておくほうが確実です。",
    },
    {
      t: "BitLocker の状態を確認し、回復キーを控える",
      d: "設定 → 「プライバシーとセキュリティ」→「デバイスの暗号化」（Pro 版は「BitLocker ドライブ暗号化」）で状態を確認します。暗号化が有効なら、初期化時に暗号化キーが破棄されるためデータ保護の面では有利です。Microsoft アカウントに回復キーが保存されている場合、そのままでも初期化はできますが、万一初期化の途中で回復キーを求められた場合に備えて、事前に回復キーを控えておくと安心です。暗号化が無効の古い PC は、次の工程で必ず「ドライブのクリーニング」を選びます。",
    },
    {
      t: "「このPCを初期状態に戻す」→「すべて削除」→「ドライブのクリーニング」",
      d: "設定 → 「システム」→「回復」→「このPCを初期状態に戻す」→「すべて削除」の順に進みます。Windows の再インストール方法を選んだあとの「追加の設定」で「設定の変更」を開き、「データのクリーニングを実行しますか？」を「はい」にします。単なる「ファイルの削除」は復元される可能性が残るため、手放す前提では「ドライブのクリーニング」を選ぶのが一般的です。所要時間は数時間になることもあるので、電源に接続した状態で実行してください。Windows 10 と 11 で文言が多少異なります。",
    },
    {
      t: "Microsoft アカウントの「デバイス」から端末を削除する",
      d: "初期化後、別の端末のブラウザから Microsoft アカウントにサインインし、「デバイス」の一覧から売却する PC を削除します。「デバイスを探す」機能を有効にしていた場合も、ここで紐づけが外れます。",
    },
    {
      t: "初期化後の状態を確認する",
      d: "電源を入れて地域・言語を選ぶ初期設定画面（OOBE）で止まっていれば完了です。ここまで来たら電源を切り、付属品と一緒に梱包します。初期化ができない（起動しない・ログインできない）PC の扱いは、壊れた端末のページを参照してください。",
    },
  ];

  const macSteps = [
    {
      t: "バックアップ（Time Machine）と、ライセンスの解除",
      d: "Time Machine でバックアップを取ります。Adobe や Microsoft 365 など端末数に上限のあるソフトはサインアウト（ライセンス認証の解除）をしておきます。",
    },
    {
      t: "iCloud・Apple ID・iMessage からサインアウトする",
      d: "システム設定 → 自分の名前 → 「サインアウト」で Apple ID から抜けます。このとき「Macを探す」もオフになります。古い macOS では「メッセージ」アプリからも別途サインアウトが必要でした。Bluetooth 機器（Magic Mouse・キーボードなど）を一緒に売らない場合はペアリングも解除しておきます。",
    },
    {
      t: "Apple silicon / T2 搭載 Mac：「すべてのコンテンツと設定を消去」",
      d: "Apple silicon（M1 以降）または T2 セキュリティチップ搭載の Mac で、macOS Monterey 以降なら、システム設定 → 「一般」→「転送またはリセット」→「すべてのコンテンツと設定を消去」で、iPhone と同じ感覚で初期化できます。「探す」のオフ・サインアウト・データ消去が一連の流れで進み、暗号化キーも破棄されます。この方法が使えるなら最も手順が少なく、推奨される消去方法です。",
    },
    {
      t: "Intel Mac（T2 なし）や古い macOS：復旧モードのディスクユーティリティで消去",
      d: "上の項目が表示されない Mac では、再起動時に Command + R を押し続けて macOS 復旧（リカバリ）モードに入り、「ディスクユーティリティ」で起動ディスク（Macintosh HD）を消去したうえで、「macOSを再インストール」を実行します。FileVault（ディスク暗号化）を有効にしていた Mac なら消去で暗号化キーが破棄されますが、無効だった古い Mac のうち HDD 搭載機は「セキュリティオプション」で上書き回数を選べる場合があります。SSD ではこのオプションが表示されないのが一般的です。",
    },
    {
      t: "初期化後、「こんにちは」の設定アシスタント画面で止まっていることを確認する",
      d: "macOS の再インストールが終わり、言語選択の設定アシスタントで止まっていれば完了です。ここで電源を切って梱包します。Apple ID の入力を求めるアクティベーションロック画面が出る場合は、iCloud.com の「探す」からデバイスを削除してください。",
    },
  ];

  const cardRows = [
    { label: "物理 SIM カード", value: "契約者情報と電話番号に紐づく大切なカードです。必ず取り出し、乗り換え先の端末に挿すか、解約時にキャリアへ返却します。買取業者に送るのは端末本体のみです。SIM トレイは失くしやすいので、トレイ自体は本体に戻しておきます。" },
    { label: "eSIM", value: "初期化時に消去する選択肢が出るのが一般的です。乗り換え先で使うには再発行（プロファイルの再ダウンロード）の手続きが必要になることが多いため、消去の前にキャリアの案内を確認してください。キャリアによっては再発行に手数料や本人確認が必要な場合があります。" },
    { label: "SD カード（microSD）", value: "写真・動画・音楽が保存されている可能性が高いカードです。端末の初期化では SD カード内のデータは消えないのが一般的なので、必ず抜き取ってください。付けたまま送ってしまうと、業者側の処理で戻ってこない可能性があります。" },
    { label: "ケース・フィルム", value: "データとは関係ありませんが、ケースは外して本体の状態が分かるようにして送るのが一般的です。フィルムは剥がすかどうか業者の案内に従います。" },
  ];

  const serviceRows = [
    {
      t: "おサイフケータイ・Apple Pay（Suica・PASMO・iD・QUICPay など）",
      d: "iPhone の場合、Apple Pay に登録したカード類は初期化時に自動で端末から削除され、新しい iPhone でウォレットから再追加できるのが一般的です。ただし Suica・PASMO などの交通系 IC カードは「1 枚のカードは 1 台の端末にしか入れられない」ため、新しい端末に移す操作を先に行い、古い端末から確実に消えたことを確認してください。Android のおサイフケータイは、モバイル Suica・iD・楽天 Edy・nanaco・WAON などサービスごとに「機種変更手続き（残高の預け入れ）」を行い、その後に「おサイフケータイ」アプリでメモリ内のデータを確認します。手続きをせずに初期化すると、残高が端末側の IC チップに残ったままになり、取り戻すには各サービスへの問い合わせが必要になることがあります。",
    },
    {
      t: "キャリア決済・キャリアメール・キャリアのアプリ",
      d: "キャリアメール（docomo・au・SoftBank など）を新端末で使う場合は、乗り換え先でプロファイルやアプリの再設定が必要です。キャリアの ID（d アカウント・au ID・My SoftBank など）は端末ではなくアカウントに紐づくため初期化で消えることはありませんが、生体認証やパスキーを端末に登録している場合は、新端末で登録し直します。",
    },
    {
      t: "2 段階認証アプリ（Google 認証システム・Microsoft Authenticator など）",
      d: "認証アプリの「ワンタイムコード」は端末内に生成の鍵があるため、初期化すると新端末でコードを出せなくなります。Google 認証システムはアカウント同期または「アカウントを移行」機能で、Microsoft Authenticator はクラウドバックアップで、それぞれ新端末に移せます。同期に対応しない認証アプリを使っている場合は、各サービス（銀行・仮想通貨取引所・SNS など）で先に 2 段階認証を新端末に登録し直す必要があります。移行を忘れると、ログインできなくなり復旧に数日かかるサービスもあります。バックアップコードをどこかに保管してあるか、この機会に確認しておきましょう。",
    },
    {
      t: "銀行・証券・暗号資産アプリ、マイナンバーカード関連",
      d: "スマートフォン認証を端末に登録しているネットバンキングや証券アプリは、アプリ内の「機種変更」「端末認証の解除」を先に済ませます。マイナンバーカードの電子証明書をスマホに搭載している場合（スマホ用電子証明書）は、初期化前に「失効」または「移行」の手続きが必要です。手順は各サービス・自治体の案内に従ってください。",
    },
    {
      t: "LINE・メッセージアプリ",
      d: "LINE はアカウント引き継ぎ設定と、必要なら「トーク履歴のバックアップ」を新端末で復元してから古い端末を初期化します。iPhone と Android をまたいで乗り換える場合はトーク履歴の引き継ぎに制限があるため、事前に公式の案内を確認してください。",
    },
  ];

  const checklist = [
    { item: "バックアップを取った（iCloud / Google / 外付け / Time Machine）", os: "共通" },
    { item: "写真・動画・書類が新端末またはバックアップ先で開けることを確認した", os: "共通" },
    { item: "おサイフケータイ・Apple Pay の交通系 IC・決済カードを移した", os: "共通" },
    { item: "2 段階認証アプリと銀行・証券アプリの端末認証を移した", os: "共通" },
    { item: "LINE などアプリ独自の引き継ぎを完了した", os: "スマホ" },
    { item: "Apple Watch のペアリングを解除した", os: "iPhone" },
    { item: "「探す」をオフにして Apple ID からサインアウトした", os: "iPhone・iPad・Mac" },
    { item: "Google アカウント（メーカーアカウントも）を端末から削除した", os: "Android" },
    { item: "画面ロックを解除した", os: "Android" },
    { item: "BitLocker の状態確認・回復キーの控え", os: "Windows" },
    { item: "ライセンス認証の解除（Microsoft 365・Adobe など）", os: "PC・Mac" },
    { item: "初期化を実行した（Windows は「ドライブのクリーニング」あり）", os: "共通" },
    { item: "SIM カード・SD カードを取り出した", os: "スマホ・タブレット" },
    { item: "Microsoft アカウント・iCloud のデバイス一覧から端末を削除した", os: "PC・Mac・iPhone" },
    { item: "初期設定画面（こんにちは / 言語選択）で止まっていることを確認した", os: "共通" },
  ];

  const faqs = [
    {
      q: "初期化しただけでデータは本当に消えますか？復元されることはありませんか？",
      a: "現在の iPhone・Android・Mac・暗号化が有効な Windows は、端末内のデータを常に暗号化して保存し、初期化時にその暗号化キーを破棄する仕組みが一般的です。キーが失われたデータは実用上復元できないと考えられています。一方、暗号化が無効の古い Windows PC や外付け HDD は、単純な削除では復元ソフトで読み出せる可能性が残るため、「ドライブのクリーニング」など上書きを伴う消去を選んでください。それでも不安がある場合は、買取業者がデータ消去の対応を公式に案内しているか、比較表の「データ消去の扱い」項目で確認する方法もあります。",
    },
    {
      q: "初期化を先にしてしまいました。アカウントの解除は後からできますか？",
      a: "iPhone・iPad・Mac の場合は、別の端末のブラウザから iCloud.com にサインインし、「探す」のデバイス一覧から該当端末を削除すればアクティベーションロックを外せるのが一般的です。Android の場合は、Google アカウントの「セキュリティ」→「お使いのデバイス」から該当端末をログアウト・削除します。ただし Android の端末保護機能（FRP）は、初期化前にアカウントを削除しなかった場合に端末側で残ることがあり、その場合は再度端末にサインインしてからアカウントを削除し、もう一度初期化する必要があります。",
    },
    {
      q: "画面が割れて操作できない、電源が入らない端末はどうすればいいですか？",
      a: "操作できない端末は端末側から初期化できないため、別の端末から遠隔で処理します。iPhone・iPad・Mac は iCloud.com の「探す」から「このデバイスを消去」と「アカウントから削除」を、Android は Google の「デバイスを探す」から「デバイスをリセット」を実行できるのが一般的です。ネットに接続されていない端末は、次に接続されたときに消去が実行される扱いになります。それでも消去できない場合は、業者側でのデータ消去対応を確認したうえで送るか、処分の選択肢を検討します。詳しくは壊れた端末のページで解説しています。",
    },
    {
      q: "SIM カードや SD カードは付けたまま送っていいですか？",
      a: "どちらも取り出してから送るのが基本です。SIM カードは電話番号と契約に紐づく大切なカードで、買取の対象ではありません。SD カードは端末の初期化では中身が消えないのが一般的で、写真などが残ったまま第三者に渡るリスクがあります。取り出したあと、SIM トレイ自体は本体に戻しておいてください。",
    },
    {
      q: "買取業者がデータを消してくれるなら、自分でやらなくてもいいですか？",
      a: "業者側のデータ消去を公式に案内している会社もありますが、輸送中の紛失や、業者に届く前の段階のリスクは自分の初期化でしか防げません。また「探す」や Google アカウントの解除は本人のパスワードが必要で、業者側では原則として行えません。業者の消去対応は「二重の安全策」と考え、自分で初期化してから送るのが基本です。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "売る前のデータ消去 完全手順", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">DATA ERASE GUIDE</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          スマホ・PCを売る前のデータ消去 完全手順｜iPhone・Android・Windows・Mac別
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          スマホや PC を買取に出すとき、査定額よりも先に気にしたいのがデータの扱いです。写真・連絡先・決済情報・パスワードが入った端末を第三者に渡す以上、「初期化した」だけでは足りない工程がいくつかあります。このページでは、バックアップからアカウントの解除、OS 別の初期化、SIM・SD カードの取り出し、おサイフケータイや認証アプリの移行までを、一般的な手順として順番に整理します。機種・OS バージョンにより名称や手順が異なるため、迷った箇所は各メーカーのサポートページで自分の機種の表記を確認してください。
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

        {/* 初期化と暗号化の関係 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">「初期化」だけでは足りない理由｜暗号化とアカウントの紐づけ</h2>
          <div className="space-y-4 max-w-3xl text-sm leading-loose text-steel-600">
            <p>
              現在のスマートフォンや Mac、暗号化が有効な Windows PC は、端末内のデータを常に暗号化した状態で保存しています。初期化（工場出荷状態に戻す操作）を実行すると、この暗号化を解くためのキーが破棄される仕組みが一般的で、キーを失ったデータは実用上読み出せなくなります。つまり、正しく初期化さえすれば、データそのものは十分に保護されると考えられています。
            </p>
            <p>
              問題は「初期化しても消えないもの」があることです。一つは Apple ID や Google アカウントとの紐づけです。iPhone の「探す」、Android の端末保護機能（FRP）は、盗難された端末を初期化しても元の持ち主以外が使えないようにする仕組みなので、サインアウトせずに初期化すると、次の持ち主が使えない端末になります。買取業者がこの状態の端末を再販できないため、一般に買取不可や減額の扱いになります。
            </p>
            <p>
              もう一つは、端末の外にあるデータです。SD カードの中身、おサイフケータイの残高（IC チップ側に記録されるものがあります）、そして各サービスに「この端末は本人のもの」と登録された認証情報は、初期化では処理されません。だからこそ、初期化の前後に「アカウントの解除」「カード類の取り出し」「サービス側の移行手続き」が必要になります。以下では、この 3 点を含めた順番を OS 別に整理します。
            </p>
          </div>
        </section>

        {/* バックアップ */}
        <section className="mt-14">
          <h2 className="section-title mb-2">手順 0：バックアップを取る</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            初期化後にデータを取り戻す手段はありません。「新しい端末に移した」と思っていても、写真の一部がローカルにしかなかった、というのはよくあるケースです。バックアップを取ったあと、新端末やバックアップ先で実際にファイルが開けることまで確認してから次に進みます。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {backupRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* iPhone */}
        <section className="mt-14">
          <h2 className="section-title mb-2">iPhone・iPad の消去手順</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            iPhone・iPad で最も重要なのは「探す」のオフと Apple ID のサインアウトです。これを飛ばして初期化するとアクティベーションロックが残ります。iPad も基本的に同じ手順です。
          </p>
          <div className="space-y-5">
            {iphoneSteps.map((s, i) => (
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
          <p className="mt-4 text-sm leading-loose text-steel-600">
            アクティベーションロックの仕組みと、初期化後にロックが残ってしまった場合の対処は、
            <Link href="/guide/activation-lock/" className="text-vermilion underline underline-offset-4">アクティベーションロックと「探す」の解除</Link>
            のページで詳しく解説しています。
          </p>
        </section>

        {/* Android */}
        <section className="mt-14">
          <h2 className="section-title mb-2">Android スマホ・タブレットの消去手順</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            Android はメーカーごとに設定メニューの名称と階層が異なります。以下は一般的な流れで、Galaxy・Xperia・AQUOS・Pixel・arrows などでは表記が違うことがあります。設定アプリの検索機能を使うと目的の項目にたどり着きやすくなります。
          </p>
          <div className="space-y-5">
            {androidSteps.map((s, i) => (
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
        </section>

        {/* Windows */}
        <section className="mt-14">
          <h2 className="section-title mb-2">Windows PC の消去手順</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            PC はスマホと違い、暗号化が有効になっていない端末がまだ多く存在します。そのため Windows では「ドライブのクリーニング」オプションを選ぶかどうかが、データ保護の観点で最も重要な分かれ目になります。
          </p>
          <div className="space-y-5">
            {windowsSteps.map((s, i) => (
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
          <div className="mt-6 border-l-2 border-vermilion bg-chalk-card p-5">
            <h3 className="font-display text-base text-steel-900">自作 PC・ストレージ単体・外付け HDD を売る場合</h3>
            <p className="mt-2 text-[13px] leading-loose text-steel-700">
              OS の初期化機能が使えないストレージ単体や外付けドライブは、別の PC に接続して消去ツールで上書き消去するか、メーカーが提供する消去ツール（SSD の Secure Erase など）を使うのが一般的です。ドライブを取り外して手元に残し、本体だけを売る方法もあります。買取業者の中にはストレージなしの PC を受け付けない場合もあるため、事前に条件を確認してください。
            </p>
          </div>
        </section>

        {/* Mac */}
        <section className="mt-14">
          <h2 className="section-title mb-2">Mac（MacBook・iMac・Mac mini）の消去手順</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            Mac は搭載チップと macOS のバージョンによって、iPhone のように簡単に消去できる機種と、復旧モードでの操作が必要な機種に分かれます。自分の Mac がどちらか分からない場合は、アップルメニュー →「この Mac について」でチップ名を確認します。
          </p>
          <div className="space-y-5">
            {macSteps.map((s, i) => (
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
        </section>

        {/* SIM・SD */}
        <section className="mt-14">
          <h2 className="section-title mb-2">SIM カード・SD カードは必ず取り出す</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            初期化はあくまで端末内蔵のストレージに対する処理です。差し込み式のカードは初期化の対象外なので、送る前に必ず取り出します。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {cardRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 決済・認証 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">初期化の「前」に済ませるサービス側の手続き</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            ここで挙げるものは、初期化してから気づくと取り戻しに時間と手間がかかる項目です。買取の申込前にひととおり確認しておくと安心です。
          </p>
          <div className="space-y-4">
            {serviceRows.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* チェックリスト */}
        <section className="mt-14">
          <h2 className="section-title mb-2">送る前の最終チェックリスト</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            上から順に確認していけば、そのまま作業の順番になります。「対象」列で自分の端末に関係する項目だけ拾ってください。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <thead>
                <tr>
                  <th className="w-10">No.</th>
                  <th>確認項目</th>
                  <th className="w-32 md:w-40">対象</th>
                </tr>
              </thead>
              <tbody>
                {checklist.map((c, i) => (
                  <tr key={c.item}>
                    <th>{i + 1}</th>
                    <td>{c.item}</td>
                    <td>{c.os}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 機種・OS バージョンにより名称や手順が異なります。個別の操作方法は各メーカーのサポートページ、業者ごとの受け入れ条件は各社の公式サイトでご確認ください。
          </p>
        </section>

        {/* 業者選び */}
        <section className="mt-14">
          <h2 className="section-title mb-2">データ消去の扱いを業者選びの軸に加える</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            自分で初期化するのが基本ですが、業者側でデータ消去を行う旨を公式サイトに記載している会社と、記載が確認できない会社があります。当サイトの比較表では「データ消去の扱い」を項目として並べ、公式で確認できなかったものはその旨を表示しています。送料・返送料・入金までの日数と合わせて、同じ物差しで確認してください。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">データ消去の扱いを比較表で見る</Link>
            <Link href="/shindan/" className="btn-ghost">売り方診断で自分に合う売り方を確認する</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">データ消去でよくある質問</h2>
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
              <Link href="/guide/activation-lock/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">アクティベーションロックと「探す」の解除</span>
                <span className="mt-1 block text-xs text-steel-500">iPhone・iPad・Mac を売る前の必須工程</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/takuhai-nagare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">宅配買取の流れ</span>
                <span className="mt-1 block text-xs text-steel-500">申込から梱包・発送・入金までの一般的な手順</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/honnin-kakunin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取の本人確認</span>
                <span className="mt-1 block text-xs text-steel-500">必要な書類と提出方法の基礎知識</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/kowareta/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">壊れた端末を売る</span>
                <span className="mt-1 block text-xs text-steel-500">初期化できない端末の遠隔消去と売り方</span>
              </Link>
            </li>
            <li>
              <Link href="/iphone/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">iPhone の買取</span>
                <span className="mt-1 block text-xs text-steel-500">対応業者の条件と売る前の要点</span>
              </Link>
            </li>
            <li>
              <Link href="/android/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Android スマホの買取</span>
                <span className="mt-1 block text-xs text-steel-500">メーカー別の注意点と対応業者</span>
              </Link>
            </li>
            <li>
              <Link href="/pc/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Windows PC・ノート PC の買取</span>
                <span className="mt-1 block text-xs text-steel-500">データ消去の責任が最も重いカテゴリ</span>
              </Link>
            </li>
            <li>
              <Link href="/mac/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Mac・MacBook の買取</span>
                <span className="mt-1 block text-xs text-steel-500">Mac 専門業者の条件と初期化の要点</span>
              </Link>
            </li>
            <li>
              <Link href="/tablet/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">iPad・タブレットの買取</span>
                <span className="mt-1 block text-xs text-steel-500">Wi-Fi・セルラーモデルの違いと注意点</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">掲載業者の比較表</span>
                <span className="mt-1 block text-xs text-steel-500">データ消去の扱い・送料・入金を同じ物差しで比較</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
