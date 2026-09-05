import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ShindanClient from "@/components/ShindanClient";

export const metadata: Metadata = {
  title: "売り方診断（4問）｜端末の種類・状態からルールベースで判定",
  description:
    "端末の種類・状態・売り方・個人か法人かの4問に答えると、ルールベースで合うガイドとカテゴリ、掲載サービスを提示します。判定ロジックは全て開示し、該当がない場合は「該当なし」と正直に表示します。",
  alternates: { canonical: "/shindan/" },
};

export default function ShindanPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "売り方診断", path: "/shindan/" },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <p className="kicker mb-3">DIAGNOSIS</p>
        <h1 className="font-display text-2xl leading-relaxed text-steel-900 md:text-4xl md:leading-relaxed">
          売り方診断｜4問でカテゴリを判定
        </h1>
        <p className="mt-5 text-sm leading-loose text-steel-600">
          端末の種類・状態・売り方・個人か法人かの4問に答えると、あなたに合うガイドとカテゴリ、掲載サービスをルールベースで提示します。判定ロジックはページ下部で全て開示しており、当てはまるサービスがない場合は「該当なし」と正直に表示します。診断結果はサービスの優劣評価ではありません。
        </p>
        <div className="mt-10">
          <ShindanClient />
        </div>
      </div>
    </>
  );
}
