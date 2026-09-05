import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { OPERATOR, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "運営者情報",
  description: `${SITE_NAME}の運営者情報です。運営: ${OPERATOR.name}（${OPERATOR.address}）。サイトの目的・編集方針・お問い合わせについてご案内します。`,
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "運営者情報", path: "/about/" },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <p className="kicker mb-3">ABOUT</p>
        <h1 className="font-display text-2xl text-steel-900 md:text-4xl">運営者情報</h1>

        <div className="mt-8 overflow-x-auto border border-chalk-line">
          <table className="spec-table">
            <tbody>
              <tr>
                <th className="w-36">サイト名</th>
                <td>{SITE_NAME}</td>
              </tr>
              <tr>
                <th>URL</th>
                <td>{SITE_URL}</td>
              </tr>
              <tr>
                <th>運営会社</th>
                <td>{OPERATOR.name}</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>{OPERATOR.address}</td>
              </tr>
              <tr>
                <th>事業内容</th>
                <td>Webメディアの企画・運営</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="section-title mt-12">サイトの目的</h2>
        <p className="mt-4 text-sm leading-loose text-steel-700">
          {SITE_NAME}は、「売る前の5分で読む、中立のPC・スマホ買取ナビ」をコンセプトに、iPhone・Android・Mac・PC・タブレットの買取サービスの条件（送料・梱包キット・返送料・査定日数・入金・キャンセル規定・データ消去の扱い・故障品の受付・運営会社情報）を各社公式サイトで一次確認し、確認日つきで整理して提供する情報サイトです。あわせて、売る前のデータ消去やアクティベーションロック解除の手順を一般知識として解説します。特定の業者への申し込みを強制するものではなく、売却の判断材料を提供することを目的としています。
        </p>

        <h2 className="section-title mt-12">編集方針</h2>
        <p className="mt-4 text-sm leading-loose text-steel-700">
          掲載情報の確認方法・広告掲載の考え方・やらないこと（口コミの創作・架空の実績掲載など）は、
          <Link href="/content-policy/" className="text-vermilion underline underline-offset-4">
            コンテンツ制作ポリシー
          </Link>
          に明文化しています。
        </p>

        <h2 className="section-title mt-12">お問い合わせ</h2>
        <p className="mt-4 text-sm leading-loose text-steel-700">
          掲載内容の誤り・修正のご依頼（掲載業者様を含む）は、運営会社宛ての書面にてご連絡ください。事実確認のうえ、速やかに対応します。
        </p>
      </div>
    </>
  );
}
