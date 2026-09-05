import Link from "next/link";
import { companies, categories } from "@/lib/companies";
import { SITE_NAME, SITE_TAGLINE, OPERATOR } from "@/lib/site";

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="mb-3 font-display text-sm tracking-widest text-chalk">{title}</p>
      <ul className="space-y-2 text-[13px]">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-steel-300 transition-colors hover:text-chalk"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="mt-20 bg-steel-900 text-steel-200">
      <div className="mx-auto max-w-site px-4 py-14">
        <div className="mb-10 flex items-center gap-2">
          <span aria-hidden="true" className="inline-block h-4 w-4 bg-vermilion" />
          <p className="font-display text-lg tracking-widest text-chalk">{SITE_NAME}</p>
          <p className="ml-3 hidden text-xs text-steel-400 sm:block">{SITE_TAGLINE}</p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <FooterCol
            title="カテゴリで探す"
            links={[
              ...categories.map((c) => ({ href: c.path, label: c.name })),
              { href: "/compare/", label: "掲載サービスの比較表" },
              { href: "/shindan/", label: "売り方診断（4問）" },
            ]}
          />
          <FooterCol
            title="サービス情報（一次確認）"
            links={companies.map((c) => ({
              href: `/kaitori/${c.slug}/`,
              label: c.name,
            }))}
          />
          <FooterCol
            title="状況別・ガイド"
            links={[
              { href: "/guide/data-shokyo/", label: "売る前のデータ消去 完全手順" },
              { href: "/guide/activation-lock/", label: "アクティベーションロックの解除" },
              { href: "/guide/honnin-kakunin/", label: "買取の本人確認はなぜ必要か" },
              { href: "/guide/shitadori-hikaku/", label: "下取りと買取はどっちが得？" },
              { href: "/guide/takuhai-nagare/", label: "宅配買取の流れと梱包" },
              { href: "/situation/kowareta/", label: "壊れた・起動しない端末を売る" },
              { href: "/situation/houjin/", label: "法人のPC・スマホをまとめて処分" },
            ]}
          />
          <FooterCol
            title="サイトについて"
            links={[
              { href: "/about/", label: "運営者情報" },
              { href: "/content-policy/", label: "コンテンツ制作ポリシー" },
              { href: "/terms/", label: "利用規約" },
              { href: "/privacy/", label: "プライバシーポリシー" },
            ]}
          />
          <div>
            <p className="mb-3 font-display text-sm tracking-widest text-chalk">運営</p>
            <p className="text-[13px] leading-relaxed text-steel-300">
              {OPERATOR.name}
              <br />
              {OPERATOR.address}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-steel-400">
              掲載するサービス情報はすべて各社公式サイトを一次確認し、確認日を明記しています。口コミ・体験談の創作は行いません。
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-steel-700 pt-6 text-xs text-steel-400">
          <p>
            本サイトはプロモーション（PR）を含みます。掲載内容は確認日時点の各社公式サイトの記載に基づくもので、買取価格や条件は変動します。最新の条件は各社公式サイトでご確認ください。
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} {OPERATOR.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
