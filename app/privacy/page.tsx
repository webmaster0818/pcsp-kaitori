import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { OPERATOR, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${SITE_NAME}のプライバシーポリシーです。アクセス解析・Cookie・広告配信における情報の取り扱いについてご案内します。`,
  alternates: { canonical: "/privacy/" },
};

const sections: { t: string; body: string[] }[] = [
  {
    t: "1. 基本方針",
    body: [
      `${OPERATOR.name}（以下「当社」）は、「${SITE_NAME}」（以下「本サイト」）の運営において、個人情報保護の重要性を認識し、個人情報の保護に関する法律および関連法令を遵守して、利用者の情報を適切に取り扱います。`,
    ],
  },
  {
    t: "2. 取得する情報",
    body: [
      "本サイトは、会員登録や査定申し込みのフォームを設置しておらず、氏名・住所等の個人情報を直接取得しません。アクセス解析等のために、Cookieや閲覧履歴などの情報が自動的に収集される場合があります。",
    ],
  },
  {
    t: "3. アクセス解析ツール",
    body: [
      "本サイトは、サイト改善のためにアクセス解析ツールを利用する場合があります。アクセス解析ツールはCookieを使用してトラフィックデータを収集しますが、このデータは匿名で収集されており、個人を特定するものではありません。Cookieの利用は、ブラウザの設定により無効にできます。",
    ],
  },
  {
    t: "4. 広告・アフィリエイトについて",
    body: [
      "本サイトは、アフィリエイトプログラムに参加しています。リンク先の各社サービスへの申し込みにあたって利用者が入力する情報は、各社のプライバシーポリシーに基づいて取り扱われます。リンク先での情報の取り扱いについて、当社は責任を負いません。",
    ],
  },
  {
    t: "5. 第三者提供",
    body: [
      "当社は、法令に基づく場合を除き、取得した情報を本人の同意なく第三者に提供しません。",
    ],
  },
  {
    t: "6. ポリシーの変更",
    body: [
      "本ポリシーの内容は、法令の変更や運営上の必要に応じて、予告なく変更されることがあります。変更後の内容は本ページに掲載した時点から適用されます。",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "プライバシーポリシー", path: "/privacy/" },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <p className="kicker mb-3">PRIVACY</p>
        <h1 className="font-display text-2xl text-steel-900 md:text-4xl">
          プライバシーポリシー
        </h1>
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
