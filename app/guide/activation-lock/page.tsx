import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR, PUBLISHED_DATE } from "@/lib/site";

const TITLE = "アクティベーションロックと「探す」の解除｜iPhone・iPad・Mac売却前の手順";
const DESC =
  "アクティベーションロックはAppleの「探す」に紐づく盗難防止機能で、解除せずに送付すると、一般に減額や買取不可となります。iPhone・iPad・Mac・Apple Watchで「探す」をオフにする手順、iCloud.comからの削除、ロックが残る場合の対処、AndroidのFRPとの違いを整理しています。";
const PATH = "/guide/activation-lock/";

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

export default function ActivationLockGuidePage() {
  const conclusions = [
    "アクティベーションロックは、Apple の「探す」をオンにすると自動で有効になる盗難防止機能です。初期化しても元の Apple ID を入力しないと端末が使えないため、解除しないまま送付すると買取業者は再販できず、一般に減額や買取不可の扱いとなります。",
    "解除の方法は、「設定 → 自分の名前 → 探す → オフ」の操作を行ったうえで、Apple ID からサインアウトすることです。パスワードが必要なため、忘れている場合は先にリセットしておきます。",
    "すでに発送した端末や、画面が割れて操作できない端末は、別の端末のブラウザから iCloud.com にサインインし、「探す」のデバイス一覧から「アカウントから削除」すれば遠隔で解除できるのが一般的です。",
    "Android にも同じ目的の機能（端末保護機能：FRP）があり、Google アカウントを端末から削除してから初期化しないと、次の持ち主がセットアップできません。仕組みは異なりますが、アカウントを外してから初期化するという手順は共通です。",
  ];

  const whyRows = [
    { label: "何に紐づく機能か", value: "Apple ID（Apple アカウント）と端末の組み合わせです。「探す」をオンにすると、Apple のサーバーに「この端末はこの Apple ID のもの」と登録され、初期化後の初期設定でその Apple ID のパスワード入力を求められます。" },
    { label: "何のためにあるか", value: "盗難・紛失時に、拾った人や盗んだ人が初期化して使う・売ることを防ぐためです。持ち主にとって有用な機能ですが、売却時には持ち主自身が解除する必要があります。" },
    { label: "対象の端末", value: "iPhone・iPad・iPod touch・Apple Watch・Mac（T2 チップまたは Apple silicon 搭載機で、macOS Catalina 以降が一般的）・AirPods（「探す」に登録した場合）など。Mac は古い Intel 機では対象外のことがあります。" },
    { label: "初期化との関係", value: "端末を初期化してもロックは消えません。「探す」をオフにする、または Apple ID からサインアウトする操作を初期化の前に行うことで、はじめて解除されます。順番を誤った場合は、iCloud.com からの削除で対処します。" },
    { label: "買取での扱い", value: "ロックが残った端末は業者側で解除できないため再販できず、一般に減額、または買取不可・返送の扱いになります。返送料が自己負担となる業者もあるため、発送前の確認が重要です。" },
  ];

  const offSteps = [
    {
      t: "iPhone・iPad：設定アプリから「探す」をオフにする",
      d: "設定 → 最上部の自分の名前 → 「探す」→「iPhone を探す」（iPad は「iPad を探す」）をタップしてオフにします。Apple ID のパスワード入力を求められます。続けて自分の名前の画面の一番下にある「サインアウト」をタップして、Apple ID からサインアウトします。この際に iCloud のデータを端末に残すかどうかを確認されますが、後で初期化するため残す必要はありません。OS バージョンにより表記が一部異なります。",
    },
    {
      t: "Mac：システム設定から「Mac を探す」をオフにしてサインアウトする",
      d: "システム設定（古い macOS では「システム環境設定」）→ 自分の名前 → 「iCloud」→「Mac を探す」をオフにします。その後、自分の名前の画面で「サインアウト」します。Apple silicon または T2 搭載の Mac で macOS Monterey 以降の場合は、「一般」→「転送またはリセット」→「すべてのコンテンツと設定を消去」を実行すると、この工程がまとめて処理されます。",
    },
    {
      t: "Apple Watch：iPhone の Watch アプリからペアリングを解除する",
      d: "iPhone の Watch アプリ → 「マイウォッチ」タブ → 上部の Watch 名の横の情報ボタン → 「Apple Watch とのペアリングを解除」の順に操作します。この操作でアクティベーションロックが外れ、Watch 側のデータも消去されます。Apple ID のパスワードが求められます。iPhone を先に初期化すると Watch 側に紐付けが残ることがあるため、Watch を先に解除します。",
    },
    {
      t: "AirPods・その他のアクセサリ：「探す」アプリからデバイスを削除する",
      d: "「探す」アプリの「デバイス」タブで該当のアクセサリを選び、「このデバイスを削除」を実行します。AirPods は iPhone とペアリングした状態で「探す」に登録されているため、iPhone を手放す前に一緒に処理しておきます。",
    },
    {
      t: "オフになったことを確認してから初期化する",
      d: "設定の「探す」の項目がオフ表示になり、Apple ID の画面から自分の名前が表示されなくなっていれば準備は完了です。その後に「すべてのコンテンツと設定を消去」を実行します。初期化後、言語選択の初期設定画面が表示されていれば、解除は完了しています。",
    },
  ];

  const remoteSteps = [
    {
      t: "別の端末のブラウザで iCloud.com にサインインする",
      d: "PC・別のスマホなどのブラウザで iCloud.com を開き、売却する端末に登録していた Apple ID でサインインします。2 ファクタ認証のコードが「別の Apple 端末」に届く設定になっている場合、手元に他の Apple 端末がないと受け取れないことがあります。その場合は電話番号宛の SMS で受け取る選択肢を使います。",
    },
    {
      t: "「探す」を開き、デバイス一覧から該当端末を選ぶ",
      d: "iCloud.com の「探す」（または「デバイスを探す」）を開くと、Apple ID に紐づいた端末が一覧で表示されます。名前が似ている端末が複数ある場合は、機種名や位置情報の最終更新日時で判別します。",
    },
    {
      t: "オンラインの端末なら「このデバイスを消去」を先に実行する",
      d: "端末がインターネットに接続されている（手元にある・電源が入る）場合は、まず「このデバイスを消去」で遠隔初期化します。オフラインの端末は「次にオンラインになったときに消去」として予約される扱いが一般的です。すでに初期化済みの端末や、完全に故障して起動しない端末は、この工程を省略して問題ありません。",
    },
    {
      t: "「アカウントから削除」を実行する",
      d: "消去のあと（またはオフラインのまま）、「アカウントから削除」を選ぶとアクティベーションロックが解除されます。この操作は端末側の通信を必要としないため、電源が入らない端末でも実行できます。削除後、デバイス一覧からその端末が消えていれば完了です。",
    },
    {
      t: "業者への発送後に解除した場合の連絡",
      d: "すでに発送済みの端末を遠隔で解除した場合、業者側で再確認してもらう必要があります。多くの業者は査定時にロック状態を確認するため、解除した旨をメールや問い合わせ窓口で伝えておくと、減額・返送の判断の前に対応してもらえる可能性があります。",
    },
  ];

  const remainCases = [
    {
      t: "サインアウトせずに「すべてのコンテンツと設定を消去」だけ実行した",
      d: "最も多い事例です。初期化の直前にサインアウトを求められる場合もありますが、古い OS ではサインアウトせずに初期化できる仕様でした。初期設定を進めると「アクティベーションロック」の画面で Apple ID の入力を求められます。対処は iCloud.com からの「アカウントから削除」です。",
    },
    {
      t: "「探す」はオフにしたが、別の Apple ID でもサインインしていた",
      d: "家族の Apple ID や、以前使っていた Apple ID でサインインした履歴が残っている場合、そちらの Apple ID にロックが紐づいていることがあります。心当たりのあるすべての Apple ID で iCloud.com の「探す」を確認し、該当端末が残っていれば削除します。",
    },
    {
      t: "中古で購入した端末で、前の持ち主のロックが残っていた",
      d: "ご自身の Apple ID でサインアウトしても、前の持ち主の Apple ID が残っている端末は解除できません。前の持ち主に連絡して iCloud.com から削除してもらう以外に、一般的な解除方法はありません。購入時の販売店に相談するのも選択肢です。",
    },
    {
      t: "パスワードを忘れて「探す」をオフにできない",
      d: "「探す」のオフとサインアウトには Apple ID のパスワードが必要です。忘れた場合は、Apple ID のパスワードリセット（iforgot.apple.com や設定アプリからの手順）を先に行います。信頼できる電話番号や 2 ファクタ認証の設定が有効であれば、その場でリセットできるのが一般的です。",
    },
    {
      t: "会社支給・学校配布の端末で、管理者のロック（MDM）がかかっている",
      d: "アクティベーションロックとは別に、組織の管理プロファイル（MDM）が残っている端末は、初期化しても管理者の登録に戻ります。これは個人では解除できず、組織側の管理者に登録解除を依頼する必要があります。個人所有かどうかを確認してから売却してください。",
    },
  ];

  const androidRows = [
    {
      t: "Android の「端末保護機能（FRP：Factory Reset Protection）」とは",
      d: "Google アカウントを登録した Android 端末を、アカウントを削除せずに初期化すると、初期設定の途中で「以前この端末で使用していた Google アカウントでログインしてください」という画面が表示され、先に進めなくなります。これが FRP で、iPhone のアクティベーションロックと同じ目的の盗難対策です。Android 5.1 以降で一般的に有効になっています。",
    },
    {
      t: "解除は Google アカウントを端末から削除してから初期化します",
      d: "設定 → 「パスワードとアカウント」または「アカウント」→ 登録している Google アカウントをタップ → 「アカウントを削除」。複数のアカウントを登録している場合はすべて削除します。あわせて画面ロック（PIN・パターン・生体認証）を「なし」にしておくと、FRP が残る条件をより確実に解消できます。その後に「すべてのデータを消去（出荷時リセット）」を実行します。メニュー名は機種・OS バージョンにより異なります。",
    },
    {
      t: "遠隔で対処する場合：Google の「デバイスを探す」とアカウント設定",
      d: "手元にない端末は、別の端末で Google アカウントにサインインし、「デバイスを探す」から「デバイスをリセット」で遠隔初期化できます。加えて、Google アカウントの「セキュリティ」→「お使いのデバイス」から該当端末を「ログアウト」しておきます。ただし FRP は端末側の状態で決まるため、アカウント削除を経ずに初期化した端末では、初期設定で元のアカウントのログインを求められることがあります。その場合は元のアカウントでログインし、アカウントを削除してから再度初期化します。",
    },
    {
      t: "Samsung（Galaxy）：Samsung アカウントと「端末リモート追跡」",
      d: "Galaxy は Google アカウントに加えて Samsung アカウントも端末に紐づき、「端末リモート追跡（Find My Mobile / SmartThings Find）」機能で同様の保護がかかります。設定 → 「アカウントとバックアップ」→ Samsung アカウントからサインアウトし、Google アカウントも削除してから初期化します。Samsung アカウントのサイトからも遠隔で端末を削除できます。",
    },
    {
      t: "その他のメーカー（ソニー・シャープ・シャオミ・OPPO など）",
      d: "メーカー独自のアカウント（Mi アカウント・HeyTap アカウントなど）を登録している機種は、そのアカウントにも端末保護機能があることがあります。Google アカウントと合わせて、設定の「アカウント」欄に登録されているものをすべてサインアウト・削除してから初期化してください。キャリア版の端末では、キャリアの ID を登録している場合もあります。",
    },
  ];

  const checkRows = [
    { label: "iPhone・iPad", value: "設定 → 自分の名前 → 「探す」がオフになっている。設定の最上部に自分の名前が表示されていない（サインアウト済み）。初期化後、初期設定で Apple ID の入力を求められない。" },
    { label: "Mac", value: "システム設定 → 自分の名前 → 「iCloud」の「Mac を探す」がオフ、またはサインアウト済みである。「すべてのコンテンツと設定を消去」で処理した場合は、設定アシスタントの言語選択画面が表示されている。" },
    { label: "Apple Watch", value: "iPhone の Watch アプリからペアリングを解除済み。Watch 単体で言語選択画面が表示されている。" },
    { label: "手元にない Apple 端末", value: "iCloud.com の「探す」のデバイス一覧から該当端末が消えている（「アカウントから削除」済み）。心当たりのあるすべての Apple ID で確認済み。" },
    { label: "Android", value: "設定の「アカウント」欄に Google アカウント・メーカーアカウントが 1 つも残っていない。画面ロックを解除済み。初期化後、Wi-Fi 接続時に「以前のアカウントでログイン」画面が表示されない。" },
    { label: "共通", value: "業者の受け入れ条件（ロック残りの端末の扱い・返送料）を公式サイトで確認済み。バックアップとデータ消去の手順は別ページのチェックリストで確認済み。" },
  ];

  const faqs = [
    {
      q: "アクティベーションロックがかかったまま送ってしまいました。どうなりますか？",
      a: "業者側では解除できないため、一般に減額、または買取不可として返送される扱いになります。ただし、気づいた時点で iCloud.com の「探す」から「アカウントから削除」を実行すれば、端末が手元になくても遠隔で解除できるのが一般的です。解除したあと、業者の問い合わせ窓口に「ロックを解除した」旨を伝えて再確認を依頼してください。返送料の負担条件は業者ごとに異なるため、公式サイトの案内をご確認ください。",
    },
    {
      q: "「探す」をオフにするだけでよいのですか？サインアウトも必要ですか？",
      a: "「探す」をオフにした時点でアクティベーションロックは解除されるのが一般的ですが、確実を期すなら Apple ID からのサインアウトまで行い、そのうえで初期化することをおすすめします。サインアウトすると iCloud 上のデータと端末の紐づけがすべて外れるため、次の持ち主に個人情報が渡るリスクも軽減できます。「すべてのコンテンツと設定を消去」を実行すると、この一連の流れをまとめて促されることもあります。",
    },
    {
      q: "Apple ID のパスワードを忘れました。解除できますか？",
      a: "「探す」のオフとサインアウトにはパスワードが必要なため、先に Apple ID のパスワードをリセットします。設定アプリの自分の名前 → 「サインインとセキュリティ」→「パスワードの変更」や、iforgot.apple.com からの手順が一般的で、信頼できる電話番号や別の Apple 端末があればその場でリセットできる場合が多くあります。リセットできない場合は Apple のサポートに相談するのが基本で、パスワードなしでロックを外す一般的な方法はありません。",
    },
    {
      q: "初期化したあとに「iPhone がアクティベーションロックされています」と表示されました。",
      a: "サインアウトせずに初期化した場合によく見られる状態です。表示されている Apple ID（メールアドレスの一部が表示されます）がご自身のものであれば、その場でパスワードを入力して進み、設定 → 自分の名前 → 「探す」をオフ → サインアウト → 再度初期化の順でやり直します。別の端末のブラウザから iCloud.com の「探す」でその端末を「アカウントから削除」しても解除できます。表示されている Apple ID に心当たりがない場合は、中古購入時の前の持ち主のロックの可能性があります。",
    },
    {
      q: "Android にもアクティベーションロックはありますか？",
      a: "名称は異なりますが、同じ目的の「端末保護機能（FRP）」があります。Google アカウントを端末から削除せずに初期化すると、初期設定で元のアカウントのログインを求められ、次の持ち主が使えません。売却前に、設定のアカウント欄から Google アカウント（Galaxy なら Samsung アカウントも）をすべて削除し、画面ロックを外してから初期化してください。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "アクティベーションロックと「探す」の解除", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">ACTIVATION LOCK GUIDE</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          アクティベーションロックと「探す」の解除｜iPhone・iPad・Mac売却前の手順
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          iPhone・iPad・Mac を買取に出す際、初期化とあわせて必ず求められるのがアクティベーションロックの解除です。これは Apple の「探す」に紐付く盗難防止機能で、解除せずに送付すると業者が端末を再利用できず、一般に減額や買取不可の扱いとなります。本ページでは、ロックの仕組み、端末ごとの「探す」のオフ手順、発送済みの端末や故障した端末を遠隔で解除する方法、初期化後もロックが残る場合の対処、Android の同等機能（端末保護機能）までを、一般的な知識として整理しています。機種・OS バージョンにより名称や手順が異なります。
        </p>

        {/* 結論先出し */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">アクティベーションロックの仕組みと解除方法の要点</h2>
          <ul className="mt-4 space-y-3">
            {conclusions.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* 仕組み */}
        <section className="mt-14">
          <h2 className="section-title mb-2">アクティベーションロックとは何か</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            アクティベーションロックは、Apple の「探す」（旧「iPhone を探す」）をオンにすると自動的に有効になる機能です。端末と Apple ID の組み合わせが Apple のサーバー側に記録され、初期化後の初期設定でその Apple ID のパスワードを入力しない限り、端末を使い始めることができません。盗難対策として有効な一方で、持ち主自身が解除しない限り、ほかの誰も解除できない機能でもあります。
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
            ※ 対象機種・OS の条件は一般的な整理です。お持ちの端末が対象かどうかは、Apple のサポートページでご確認ください。
          </p>
        </section>

        {/* 買取で受け付けられない理由 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">ロックが残った端末を買取業者が受け付けにくい理由</h2>
          <div className="space-y-4 max-w-3xl text-sm leading-loose text-steel-600">
            <p>
              買取業者が端末を買い取る目的は、整備して再販することです。アクティベーションロックが残った端末は、初期化しても元の持ち主の Apple ID がないと初期設定を終えられないため、次の利用者に渡せません。業者側で解除する正規の手段もないため、商品として成立しない状態になります。
            </p>
            <p>
              このため、多くの業者はロックが残っている端末について、一般に減額のうえで部品取りとして扱うか、買取不可として返送する運用をとっています。返送時の送料を売り手負担とする業者もあります。発送後の減額や、返送により送料のみがかかる事態を避けるためにも、発送前の解除が欠かせません。具体的な扱いは業者ごとに異なるため、当サイトの比較表や各社の公式サイトで受け入れ条件をご確認ください。
            </p>
            <p>
              なお、ロックの解除は「探す」をオフにする操作で完了し、数分で終わります。手順は複雑ではないため、以下の端末別の手順に沿って進めてください。
            </p>
          </div>
        </section>

        {/* 「探す」オフ手順 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">iPhone・iPad・Mac 別の「探す」のオフと Apple ID からのサインアウト手順</h2>
          <div className="space-y-5">
            {offSteps.map((s, i) => (
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
            バックアップから初期化、SIM カードの取り出しまでを含めた全体の流れは、
            <Link href="/guide/data-shokyo/" className="text-vermilion underline underline-offset-4">売る前のデータ消去の手順</Link>
            で OS 別に整理しています。
          </p>
        </section>

        {/* 遠隔解除 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">手元にない端末・操作できない端末の iCloud.com からの解除</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            すでに業者に発送した端末、画面が割れて操作できない端末、電源が入らない端末であっても、Apple ID がわかればブラウザから遠隔でロックを解除できるのが一般的です。
          </p>
          <div className="space-y-5">
            {remoteSteps.map((s, i) => (
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

        {/* ロックが残るケース */}
        <section className="mt-14">
          <h2 className="section-title mb-6">初期化後もロックが残る場合の対処</h2>
          <div className="space-y-4">
            {remainCases.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Android */}
        <section className="mt-14">
          <h2 className="section-title mb-6">Android の場合：端末保護機能（FRP）と Google アカウントの削除</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            アクティベーションロックは Apple の名称ですが、Android にも同じ目的の仕組みがあります。買取に出す前に行うことは共通で、アカウントを端末から外してから初期化することです。
          </p>
          <div className="space-y-4">
            {androidRows.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* チェック表 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">送る前の確認表</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            お持ちの端末の行を確認し、すべての項目を満たしていれば発送して問題ありません。一つでも当てはまらない項目がある場合は、該当する手順に戻ってください。
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
            ※ 機種・OS バージョンにより名称や手順が異なります。業者ごとの受け入れ条件は各社の公式サイトでご確認ください。
          </p>
        </section>

        {/* 業者選び */}
        <section className="mt-14">
          <h2 className="section-title mb-2">ロックを解除できない端末の売却方法</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            前の持ち主のロックが残っている場合や、Apple ID を利用できなくなった場合など、解除できない端末は通常の買取では受け付けられないのが一般的です。故障品やジャンク品として受け入れる業者があるかどうかを、条件を含めて比較表でご確認ください。売却方法に迷う場合は、質問に回答して適した売却方法を判定する売り方診断もご利用いただけます。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">掲載業者の受け入れ条件を比較表で見る</Link>
            <Link href="/shindan/" className="btn-ghost">売り方診断で確認する</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">アクティベーションロックでよくある質問</h2>
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
                <span className="font-display text-steel-900">売る前のデータ消去の手順</span>
                <span className="mt-1 block text-xs text-steel-500">バックアップから初期化・SIM 取り出しまで OS 別に整理</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/kowareta/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">壊れた・起動しないスマホやPCの売却</span>
                <span className="mt-1 block text-xs text-steel-500">操作できない端末の遠隔解除と売却方法</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/takuhai-nagare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">宅配買取の流れと梱包方法</span>
                <span className="mt-1 block text-xs text-steel-500">申込から梱包・発送・入金までの一般的な手順</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/honnin-kakunin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取で本人確認が必要な理由</span>
                <span className="mt-1 block text-xs text-steel-500">必要な書類と提出方法の基礎知識</span>
              </Link>
            </li>
            <li>
              <Link href="/iphone/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">iPhone の買取</span>
                <span className="mt-1 block text-xs text-steel-500">対応業者の条件と売却前の要点</span>
              </Link>
            </li>
            <li>
              <Link href="/tablet/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">iPad・タブレットの買取</span>
                <span className="mt-1 block text-xs text-steel-500">Wi-Fi・セルラーモデルの違いと注意点</span>
              </Link>
            </li>
            <li>
              <Link href="/mac/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Mac・MacBook の買取</span>
                <span className="mt-1 block text-xs text-steel-500">Mac 専門業者の条件と初期化の要点</span>
              </Link>
            </li>
            <li>
              <Link href="/android/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Android スマホの買取</span>
                <span className="mt-1 block text-xs text-steel-500">端末保護機能の解除とメーカー別の注意点</span>
              </Link>
            </li>
            <li>
              <Link href="/pc/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Windows PC・ノート PC の買取</span>
                <span className="mt-1 block text-xs text-steel-500">データ消去の重要性が特に高い製品</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">掲載業者の比較表</span>
                <span className="mt-1 block text-xs text-steel-500">受け入れ条件・送料・入金を同じ基準で比較</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/google-account-android/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">Android売却前のGoogleアカウント削除手順</span>
                <span className="mt-1 block text-xs text-steel-500">初期化しても残る紐付けを手放す前に確認</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/pc-storage-shokyo/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">PCを売る前のストレージの扱い</span>
                <span className="mt-1 block text-xs text-steel-500">回復キーの控え・ドライブのクリーニング・取り外して売る場合</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
