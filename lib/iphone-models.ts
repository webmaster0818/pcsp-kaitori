/**
 * iPhone世代別ページのレジストリ。
 *
 * 掲載する機種名は、当サイト掲載社の公式サイトで実際に買取対象として
 * 掲載されていることを確認したものだけを登録しています（2026-09-12 確認）。
 * 確認元:
 *  - ゲオの買取（スマホ・タブレット） https://buymobile.geo-online.co.jp/iPhone/
 *  - ネットオフ スマホ買取 https://www.netoff.co.jp/mobilebuy/
 *  - にこスマ買取 https://www.nicosuma.com/sell
 *  - 大黒屋 携帯買取館 https://kaitori.e-daikoku.com/mobile/
 * 複数社の公式ページに共通して掲載されている表記のみを採用しています。
 * 容量・発売年・搭載チップなどの仕様は当サイトでは扱いません。
 */
export interface IphoneModel {
  /** URLスラッグ（/iphone/<slug>/） */
  slug: string;
  /** 世代名（見出し・パンくず用） */
  name: string;
  /** 末尾スラッシュ付きパス */
  path: string;
  /** 一覧カード用の短い説明 */
  summary: string;
  /** 公式サイトで確認できたラインナップ表記 */
  lineup: string[];
}

export const iphoneModels: IphoneModel[] = [
  {
    slug: "iphone-16",
    name: "iPhone 16",
    path: "/iphone/iphone-16/",
    summary: "16 / 16 Plus / 16 Pro / 16 Pro Max に加えて「16e」が別建て。取り違えと分割残債の確認が要点。",
    lineup: ["iPhone 16", "iPhone 16 Plus", "iPhone 16 Pro", "iPhone 16 Pro Max", "iPhone 16e"],
  },
  {
    slug: "iphone-15",
    name: "iPhone 15",
    path: "/iphone/iphone-15/",
    summary: "15 / 15 Plus / 15 Pro / 15 Pro Max の4区分。無印とPlusの申告違いが起こりやすい世代。",
    lineup: ["iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max"],
  },
  {
    slug: "iphone-14",
    name: "iPhone 14",
    path: "/iphone/iphone-14/",
    summary: "14 / 14 Plus / 14 Pro / 14 Pro Max。掲載各社の一覧に「14 mini」は見当たりません。",
    lineup: ["iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max"],
  },
  {
    slug: "iphone-13",
    name: "iPhone 13",
    path: "/iphone/iphone-13/",
    summary: "13 / 13 mini / 13 Pro / 13 Pro Max。miniを含む世代で、バッテリー状態の確認が効いてきます。",
    lineup: ["iPhone 13", "iPhone 13 mini", "iPhone 13 Pro", "iPhone 13 Pro Max"],
  },
  {
    slug: "iphone-12",
    name: "iPhone 12",
    path: "/iphone/iphone-12/",
    summary: "12 / 12 mini / 12 Pro / 12 Pro Max。画面割れ・バッテリー膨張の受け皿が社ごとに大きく違います。",
    lineup: ["iPhone 12", "iPhone 12 mini", "iPhone 12 Pro", "iPhone 12 Pro Max"],
  },
  {
    slug: "iphone-se",
    name: "iPhone SE",
    path: "/iphone/iphone-se/",
    summary: "掲載各社は「第2世代」「第3世代」を分けて扱っています。世代の特定が最初の関門。",
    lineup: ["iPhone SE（第2世代）", "iPhone SE（第3世代）"],
  },
];

export function getIphoneModel(slug: string): IphoneModel {
  const m = iphoneModels.find((x) => x.slug === slug);
  if (!m) throw new Error(`iphone model not found: ${slug}`);
  return m;
}

export function otherIphoneModels(slug: string): IphoneModel[] {
  return iphoneModels.filter((m) => m.slug !== slug);
}
