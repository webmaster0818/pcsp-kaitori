import type { Company } from "@/lib/companies";

/** 公式が告知しているサービス停止などの状況（companies.json の notice）。full=業者ページ冒頭、short=比較表・カード・診断 */
export default function ServiceNotice({ company, variant = "short" }: { company: Company; variant?: "full" | "short" }) {
  const n = company.notice;
  if (!n) return null;
  if (variant === "short") {
    return (
      <p className="mt-2 border-l-2 border-vermilion bg-vermilion-faint px-2 py-1 text-[11px] leading-relaxed text-vermilion-dark">
        {n.short}
      </p>
    );
  }
  return (
    <section className="mt-6 max-w-3xl border-2 border-vermilion bg-vermilion-faint p-5 md:p-6" role="note">
      <h2 className="font-display text-base text-vermilion-dark md:text-lg">{n.heading}</h2>
      <ul className="mt-3 space-y-1.5">
        {n.points.map((p) => (
          <li key={p} className="flex gap-2 text-[13px] leading-loose text-steel-800">
            <span aria-hidden="true" className="text-vermilion">■</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs leading-relaxed text-steel-500">
        出典：
        {n.sources.map((src, i) => (
          <span key={src.url}>
            {i > 0 && "／"}
            <a href={src.url} rel="nofollow noopener" target="_blank" className="text-vermilion underline underline-offset-4">
              {src.label}
            </a>
          </span>
        ))}
      </p>
    </section>
  );
}
