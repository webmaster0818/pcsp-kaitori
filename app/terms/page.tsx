import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { OPERATOR, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "利用規約",
  description: `${SITE_NAME}の利用規約です。本サイトの情報の性質、免責事項、広告・アフィリエイトの扱い、著作権についてご確認ください。`,
  alternates: { canonical: "/terms/" },
};

const sections: { t: string; body: string[] }[] = [
  {
    t: "第1条（本規約の適用）",
    body: [
      `本規約は、${OPERATOR.name}（以下「当社」）が運営する「${SITE_NAME}」（以下「本サイト」）の利用条件を定めるものです。利用者は、本サイトを利用した時点で本規約に同意したものとみなします。`,
    ],
  },
  {
    t: "第2条（情報の性質）",
    body: [
      "本サイトに掲載する買取サービス・一括査定サービスの条件は、各社公式サイトの記載を確認日時点で確認し要約したものであり、その後変更されている可能性があります。最新かつ正式な条件は、必ず各社公式サイトおよび契約書面でご確認ください。",
      "本サイトは情報提供を目的とするものであり、特定の業者との契約を勧誘・保証するものではありません。売却契約は利用者と各業者との間で直接締結されるものであり、当社はその当事者になりません。",
    ],
  },
  {
    t: "第3条（免責事項)",
    body: [
      "当社は、掲載情報の正確性・完全性・最新性の確保に努めますが、これを保証するものではありません。本サイトの情報を利用したことにより利用者に生じた損害について、当社は故意または重過失による場合を除き、責任を負いません。",
      "本サイトからリンクする外部サイトの内容について、当社は責任を負いません。",
    ],
  },
  {
    t: "第4条（広告・アフィリエイトプログラム）",
    body: [
      "本サイトは、アフィリエイトプログラムによる収益で運営されており、プロモーション（PR）を含みます。広告掲載の有無が掲載情報の事実記載（条件・規定など）を変えることはありません。詳細はコンテンツ制作ポリシーに定めます。",
    ],
  },
  {
    t: "第5条（禁止事項）",
    body: [
      "本サイトのコンテンツの無断転載・複製、本サイトの運営を妨害する行為、その他法令または公序良俗に反する行為を禁止します。",
    ],
  },
  {
    t: "第6条（著作権）",
    body: [
      "本サイトに掲載する文章・画像等のコンテンツの著作権は、当社または正当な権利者に帰属します。",
    ],
  },
  {
    t: "第7条（規約の変更）",
    body: [
      "当社は、必要と判断した場合、利用者への事前通知なく本規約を変更できるものとします。変更後の規約は、本サイトに掲載した時点から効力を生じます。",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "利用規約", path: "/terms/" },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <p className="kicker mb-3">TERMS</p>
        <h1 className="font-display text-2xl text-steel-900 md:text-4xl">利用規約</h1>
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
