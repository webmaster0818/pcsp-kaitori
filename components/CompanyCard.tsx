import Link from "next/link";
import { Company, ctaFor, fmt, serviceTypeOf } from "@/lib/companies";

/** カテゴリハブ・TOPで使うサービス比較カード（companies.jsonのみが情報源） */
export default function CompanyCard({ company }: { company: Company }) {
  const cta = ctaFor(company);
  const rows: { label: string; value: string }[] =
    company.kind === "platform"
      ? [
          { label: "サービス形態", value: serviceTypeOf(company) },
          { label: "対象", value: fmt(company.target) },
          { label: "利用料", value: fmt(company.hiyou.satei) },
          { label: "流れ", value: fmt(company.methods) },
          { label: "対応エリア", value: fmt(company.area) },
        ]
      : [
          { label: "サービス形態", value: serviceTypeOf(company) },
          { label: "対象", value: fmt(company.target) },
          { label: "送料・キット", value: `${fmt(company.hiyou.souryou)} ／ ${fmt(company.hiyou.kit)}` },
          { label: "返送料", value: fmt(company.hiyou.hensou) },
          { label: "入金", value: fmt(company.nyukin) },
          { label: "故障品", value: fmt(company.broken) },
        ];
  return (
    <article className="border border-chalk-line bg-chalk-card">
      <div className="flex items-center justify-between gap-3 border-b border-chalk-line bg-steel-800 px-4 py-3">
        <h3 className="font-display text-lg tracking-wider text-chalk">
          {company.name}
        </h3>
        <span className="text-[11px] text-steel-300">
          {company.confirmed_date} 公式確認
        </span>
      </div>
      <dl className="divide-y divide-chalk-line text-[13px] leading-relaxed">
        {rows.map((r) => (
          <div key={r.label} className="flex gap-3 px-4 py-2.5">
            <dt className="w-24 shrink-0 font-bold text-steel-500">{r.label}</dt>
            <dd className="text-steel-800">{r.value}</dd>
          </div>
        ))}
      </dl>
      <ul className="flex flex-wrap gap-1.5 px-4 pt-3">
        {company.features.slice(0, 3).map((f) => (
          <li
            key={f}
            className="border border-vermilion/40 bg-vermilion-faint px-2 py-0.5 text-[11px] text-vermilion-dark"
          >
            {f}
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-2 p-4 sm:flex-row">
        <a
          href={cta.href}
          rel={cta.rel}
          target="_blank"
          className="btn-primary flex-1 text-sm"
        >
          公式サイトを見る
        </a>
        <Link
          href={`/kaitori/${company.slug}/`}
          className="btn-ghost flex-1 text-sm"
        >
          一次確認の詳細
        </Link>
      </div>
    </article>
  );
}
