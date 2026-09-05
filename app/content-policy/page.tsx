import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CHECKED_LABEL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "コンテンツ制作ポリシー",
  description: `${SITE_NAME}のコンテンツ制作ポリシーです。公式サイトの一次確認・確認日の明記・口コミ非創作・AggregateRating非使用・PR表記など、当サイトが守る編集ルールを明文化しています。`,
  alternates: { canonical: "/content-policy/" },
};

const sections: { t: string; body: string[] }[] = [
  {
    t: "1. 一次確認の方針",
    body: [
      "掲載する買取サービスの条件（査定料・送料・梱包キット・返送料・査定日数・入金タイミング・キャンセル規定・本人確認・データ消去の扱い・故障品の受付・法人対応・運営会社・古物商許可番号）は、すべて各社の公式サイトおよび運営会社ページを当サイトが直接確認して記載します。第三者のまとめ記事・口コミサイトを情報源にしません。",
      "公式サイトで確認できなかった項目は、推測で補完せず「公式では確認できず」と表示します。これは当該サービスが存在しないという意味ではなく、確認日時点で公式サイト上に記載を発見できなかったことを意味します。",
    ],
  },
  {
    t: "2. 確認日の運用",
    body: [
      `各業者ページ・比較表には確認日を明記します（現行の確認日: ${CHECKED_LABEL}）。条件は変更される場合があるため、再確認を行った際は確認日を更新します。確認日から時間が経過している情報は、その日付時点の情報としてお読みください。`,
    ],
  },
  {
    t: "3. 口コミ・体験談を創作しない",
    body: [
      "当サイトは、利用者の口コミ・体験談・レビューを一切創作しません。実際に収集していない「利用者の声」を掲載することはありません。口コミに依存せず、公式サイトで確認できる条件の事実比較によって判断材料を提供します。",
    ],
  },
  {
    t: "4. 評価の構造化データ（AggregateRating）を使わない",
    body: [
      "当サイトは自前の星評価・点数評価を行わず、AggregateRating等の評価系構造化データを使用しません。使用する構造化データはFAQPage・BreadcrumbList・Article（ガイド記事）のみです。",
    ],
  },
  {
    t: "5. 広告掲載とPR表記",
    body: [
      "当サイトはアフィリエイトプログラムによる収益で運営されており、全ページに「本サイトはプロモーション(PR)を含みます」と表示しています。アフィリエイトリンクには rel=\"sponsored nofollow\" を付与します。",
      "広告掲載の有無・報酬額が、条件の事実記載（送料・返送料・入金・キャンセル規定など）を変えることはありません。",
    ],
  },
  {
    t: "6. 金額・実績の表現",
    body: [
      "当サイトは、独自に検証していない具体的な買取金額・相場額・買取実績を掲載しません。中古端末の買取価格は日々変動するため、価格そのものは各社公式サイトの最新表示を確認する導線を置き、当サイトでは条件の比較に絞ります。金額に関する記載は、各社公式サイトの表示（送料の条件など）を出典つきで引用する場合に限ります。",
      "「最高額」「どこよりも高く」といった最上級・優良誤認のおそれのある表現は使用しません（景品表示法への配慮）。",
    ],
  },
  {
    t: "7. 訂正への対応",
    body: [
      "掲載内容に誤りを発見された場合（掲載業者様を含む）は、運営者情報ページ記載の方法でご連絡ください。事実確認のうえ、速やかに訂正します。",
    ],
  },
];

export default function ContentPolicyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "コンテンツ制作ポリシー", path: "/content-policy/" },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <p className="kicker mb-3">EDITORIAL POLICY</p>
        <h1 className="font-display text-2xl text-steel-900 md:text-4xl">
          コンテンツ制作ポリシー
        </h1>
        <p className="mt-5 text-sm leading-loose text-steel-600">
          {SITE_NAME}が情報を作るときに守るルールを明文化したものです。このポリシーに反する記載を発見された場合は、ご指摘ください。
        </p>
        <div className="mt-8 space-y-8">
          {sections.map((s) => (
            <section key={s.t}>
              <h2 className="font-display text-lg text-steel-900">{s.t}</h2>
              {s.body.map((p) => (
                <p key={p} className="mt-3 text-sm leading-loose text-steel-700">
                  {p}
                </p>
              ))}
            </section>
          ))}
          <p className="text-xs text-steel-500">制定日: 2026年8月7日</p>
        </div>
      </div>
    </>
  );
}
