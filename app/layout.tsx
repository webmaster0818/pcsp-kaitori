import type { Metadata } from "next";
import { Shippori_Antique, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";

const display = Shippori_Antique({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  preload: false,
});

const sans = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME}｜${SITE_TAGLINE}`,
    template: `%s｜${SITE_NAME}`,
  },
  description:
    "iPhone・Android・Mac・PC・タブレットの買取サービスの条件（送料・返送料・入金・キャンセル規定・データ消去・古物商許可）を公式サイトで一次確認し、確認日つきで比較。売る前のデータ消去手順も中立の視点で整理します。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${display.variable} ${sans.variable}`}>
      <body>
        <div
          style={{
            background: "#f4f4f4",
            borderBottom: "1px solid #e2e2e2",
            fontSize: "11px",
            lineHeight: 1.6,
            color: "#666",
            textAlign: "center",
            padding: "3px 8px",
          }}
        >
          本サイトはプロモーション(PR)を含みます。
        </div>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
