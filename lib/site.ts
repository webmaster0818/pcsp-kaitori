export const SITE_URL = "https://sell-device.com"; // 本番ドメイン（2026-09-05確定）
export const SITE_NAME = "PC・スマホ買取ナビ";
export const SITE_TAGLINE = "売る前の5分で読む、中立のPC・スマホ買取ナビ";
export const CHECKED_DATE = "2026-09-05";
export const CHECKED_LABEL = "2026年9月5日";
/** 掲載社全体の確認期間（各社の確認日は data/companies.json の confirmed_date） */
export const CHECKED_RANGE_LABEL = "2026年9月5日〜9月22日";

/** "2026-09-22" → "2026年9月" */
export function jaMonth(iso: string): string {
  const [y, m] = iso.split("-").map(Number);
  return `${y}年${m}月`;
}

/** "2026-09-22" → "2026年9月22日" */
export function jaDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${y}年${m}月${d}日`;
}
export const PUBLISHED_DATE = "2026-09-05";

export const OPERATOR = {
  name: "株式会社MediaX",
  address: "東京都渋谷区東一丁目27番10号",
} as const;
