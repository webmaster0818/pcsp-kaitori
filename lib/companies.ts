import raw from "@/data/companies.json";

export interface Operator {
  name: string;
  address: string;
  kobutsu: string | null;
  source: string;
}

/** 費用まわり（宅配買取の実務項目） */
export interface Hiyou {
  satei?: string | null; // 査定料
  souryou?: string | null; // 送料（業者宛）
  kit?: string | null; // 梱包キット
  hensou?: string | null; // 返送料（キャンセル時）
}

export interface Company {
  slug: string;
  name: string;
  official_url: string;
  affiliateUrl?: string | null;
  /** kaitori=買取業者 / platform=一括査定・価格比較サービス */
  kind: "kaitori" | "platform";
  operator: Operator;
  service_type?: string | null;
  target?: string | null;
  methods?: string | null; // 宅配・店頭・出張
  area?: string | null;
  hiyou: Hiyou;
  satei_days?: string | null; // 査定日数
  nyukin?: string | null;
  cancel?: string | null;
  honnin?: string | null; // 本人確認書類
  data_erase?: string | null; // データ消去の扱い
  broken?: string | null; // 画面割れ・故障・起動不可の扱い
  houjin?: string | null; // 法人対応
  features: string[];
  confirmed_date: string;
  note?: string | null;
}

export const companies = raw as unknown as Company[];
export const kaitoriCompanies = companies.filter((c) => c.kind === "kaitori");
export const platformCompanies = companies.filter((c) => c.kind === "platform");

export const NA = "公式では確認できず";

/** null/未確認項目は正直に「公式では確認できず」を返す */
export function fmt(v: string | null | undefined): string {
  return v && v.trim() !== "" ? v : NA;
}

export function isNA(v: string | null | undefined): boolean {
  return !v || v.trim() === "";
}

export function getCompany(slug: string): Company {
  const c = companies.find((x) => x.slug === slug);
  if (!c) throw new Error(`company not found: ${slug}`);
  return c;
}

export function serviceTypeOf(c: Company): string {
  return fmt(c.service_type);
}

/** 査定料・送料のまとめ表示 */
export function feeSummary(c: Company): string {
  return `査定: ${fmt(c.hiyou.satei)} ／ 送料: ${fmt(c.hiyou.souryou)}`;
}

/** 梱包キット・返送料のまとめ表示 */
export function kitSummary(c: Company): string {
  return `梱包キット: ${fmt(c.hiyou.kit)} ／ 返送料: ${fmt(c.hiyou.hensou)}`;
}

/** CTAリンク: affiliateUrlがあれば優先(sponsored)・なければ公式(nofollow) */
export function ctaFor(c: Company): { href: string; rel: string } {
  if (c.affiliateUrl) {
    return { href: c.affiliateUrl, rel: "sponsored nofollow noopener" };
  }
  return { href: c.official_url, rel: "nofollow noopener" };
}

export interface Category {
  slug: string;
  path: string;
  name: string;
  short: string;
  lead: string;
  companySlugs: string[];
}

export const categories: Category[] = [
  {
    slug: "iphone",
    path: "/iphone/",
    name: "iPhoneの買取",
    short: "iPhone",
    lead: "iPhoneは機種・容量・状態で条件が細かく分かれます。宅配買取を中心に、送料・返送料・入金・データ消去の扱いを一次確認で整理しました。",
    companySlugs: ["furuichi", "netoff", "mac-kaitori-net", "geo-kaitori", "nicosuma-kaitori", "bookoff-mobile", "keitai-ichiba", "daikoku-mobile", "recommerce"],
  },
  {
    slug: "android",
    path: "/android/",
    name: "Androidスマホの買取",
    short: "Android",
    lead: "Galaxy・Xperia・AQUOS・Pixelなど。メーカーが多く条件確認が煩雑になりがちなAndroid端末の売り方と、対応業者の条件をまとめました。",
    companySlugs: ["furuichi", "netoff", "geo-kaitori", "nicosuma-kaitori", "bookoff-mobile", "keitai-ichiba", "daikoku-mobile", "recommerce"],
  },
  {
    slug: "mac",
    path: "/mac/",
    name: "Mac・MacBookの買取",
    short: "Mac",
    lead: "MacBook・iMac・Mac miniはMac専門の買取サービスという選択肢があります。専門業者の条件と、売る前の初期化・「探す」解除の要点を整理しました。",
    companySlugs: ["mac-kaitori-net"],
  },
  {
    slug: "pc",
    path: "/pc/",
    name: "Windows PC・ノートPCの買取",
    short: "PC",
    lead: "ノートPC・デスクトップ・自作PC。データ消去の責任が最も重いカテゴリです。売る前の消去手順と、一括査定・価格比較型サービスの使い方を整理しました。",
    companySlugs: ["janpara", "pc-koubou", "rakuuru-sofmap", "takakuureru", "pcwrap", "pasokai", "recommerce"],
  },
  {
    slug: "tablet",
    path: "/tablet/",
    name: "iPad・タブレットの買取",
    short: "タブレット",
    lead: "iPad・Androidタブレット。Wi-Fiモデルとセルラーモデルの違い、アクティベーションロック解除など、タブレット特有の注意点と対応業者をまとめました。",
    companySlugs: ["furuichi", "netoff", "mac-kaitori-net", "geo-kaitori", "nicosuma-kaitori", "bookoff-mobile", "keitai-ichiba", "daikoku-mobile"],
  },
];

export function getCategory(slug: string): Category {
  const c = categories.find((x) => x.slug === slug);
  if (!c) throw new Error(`category not found: ${slug}`);
  return c;
}

export function categoriesOf(company: Company): Category[] {
  return categories.filter((cat) => cat.companySlugs.includes(company.slug));
}

/** 業者詳細ページ用FAQ（データからのみ生成・創作なし） */
export function companyFaq(c: Company): { q: string; a: string }[] {
  const naAnswer = (item: string) =>
    `${item}については、公式サイトでは確認できませんでした（${c.confirmed_date}時点の当サイト調査）。申込前に${c.name}へ直接確認することをおすすめします。`;
  return [
    {
      q: `${c.name}の送料・梱包キットは無料ですか？`,
      a: isNA(c.hiyou.souryou)
        ? naAnswer("送料")
        : `公式サイトの記載では、送料は「${c.hiyou.souryou}」、梱包キットは「${fmt(c.hiyou.kit)}」です（${c.confirmed_date}確認）。`,
    },
    {
      q: `${c.name}の入金はいつですか？`,
      a: isNA(c.nyukin)
        ? naAnswer("入金タイミング")
        : `公式サイトの記載では「${c.nyukin}」とされています（${c.confirmed_date}確認）。`,
    },
    {
      q: `${c.name}は査定額に納得できなかったらキャンセルできますか？返送料は？`,
      a: isNA(c.cancel)
        ? naAnswer("キャンセル規定・返送料")
        : `公式サイトの記載では「${c.cancel}」、返送料は「${fmt(c.hiyou.hensou)}」とされています（${c.confirmed_date}確認）。実際の条件は必ず申込時の規約で確認してください。`,
    },
    {
      q: `${c.name}に送った端末のデータはどうなりますか？`,
      a: isNA(c.data_erase)
        ? naAnswer("データ消去の取り扱い")
        : `公式サイトの記載では「${c.data_erase}」とされています（${c.confirmed_date}確認）。いずれの業者でも、送る前に自分で初期化・「探す」解除を済ませるのが基本です。`,
    },
  ];
}
