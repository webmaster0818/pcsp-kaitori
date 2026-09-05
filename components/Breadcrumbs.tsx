import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export interface Crumb {
  name: string;
  path: string; // 末尾スラッシュ付き相対パス（例: "/compare/"）
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
  return (
    <nav aria-label="パンくずリスト" className="mx-auto max-w-site px-4 pt-4">
      <JsonLd data={ld} />
      <ol className="flex flex-wrap items-center gap-1 text-xs text-steel-500">
        {items.map((c, i) => (
          <li key={c.path} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden="true" className="text-steel-300">/</span>}
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-steel-700">
                {c.name}
              </span>
            ) : (
              <Link href={c.path} className="hover:text-vermilion">
                {c.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
