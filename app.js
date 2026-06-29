const platforms = [
  {
    name: "Fansly",
    regions: ["us-global"],
    model: { en: "Creator subscriptions", ja: "クリエイター購読" },
    summary: {
      en: "Creator platform with documented age, identity, and consent responsibilities for anyone appearing in content.",
      ja: "出演者全員の年齢・本人性・同意確認について公式案内があるクリエイタープラットフォーム。",
    },
    facts: {
      en: ["18+ creator onboarding", "80% creator revenue stated in official guide", "KYC and consent workflow required"],
      ja: ["18歳以上の登録", "公式案内ではクリエイター取り分80%", "KYC・同意確認が必要"],
    },
    source: "https://help.fansly.com/en/articles/12315241-getting-started-on-fansly",
  },
  {
    name: "Patreon Adult/18+",
    regions: ["us-global"],
    model: { en: "Membership", ja: "メンバーシップ" },
    summary: {
      en: "Membership option with a specific Adult/18+ category, mandatory identity and age verification, and feature limits.",
      ja: "成人向け専用カテゴリがあり、本人・年齢確認が必須。一部機能に制限があるメンバーシップ型。",
    },
    facts: {
      en: ["ID and age verification required", "Native video unavailable to Adult/18+", "Review current feature matrix"],
      ja: ["本人・年齢確認が必須", "成人向けはネイティブ動画対象外", "最新機能表の確認が必要"],
    },
    source: "https://support.patreon.com/hc/en-us/articles/31714988741645-Access-to-Patreon-s-features-and-products-for-Adult-18-creators",
  },
  {
    name: "OnlyFans",
    regions: ["us-global"],
    model: { en: "Creator subscriptions", ja: "クリエイター購読" },
    summary: {
      en: "Large subscription platform. Treat its terms, acceptable-use rules, verification, and payout availability as pre-launch checks.",
      ja: "大規模な購読型プラットフォーム。利用規約、許容コンテンツ、本人確認、受取可否を開始前に確認。",
    },
    facts: {
      en: ["Terms change over time", "Identity checks apply", "Do not rely on third-party fee summaries"],
      ja: ["規約変更に注意", "本人確認あり", "第三者サイトの手数料情報だけで判断しない"],
    },
    source: "https://onlyfans.com/terms",
  },
  {
    name: "FANZA / DMM Affiliate",
    regions: ["japan", "affiliate"],
    model: { en: "Affiliate referrals", ja: "アフィリエイト送客" },
    summary: {
      en: "Officially accepts registrations from adult-oriented sites, subject to public-site review and program rules.",
      ja: "成人向けサイトの登録に公式対応。公開サイトの審査と参加規約への適合が必要。",
    },
    facts: {
      en: ["Japan-focused", "Site review required", "Label every commissionable link"],
      ja: ["日本向け", "サイト審査あり", "成果報酬リンクを明示"],
    },
    source: "https://support.dmm.co.jp/affiliate/article/44522",
  },
]

const translations = {
  en: {
    navCompare: "Compare", navAutomation: "Automation", navShipping: "Shipping", navConsult: "Consult",
    eyebrow: "18+ BUSINESS OPERATIONS · NO EXPLICIT MEDIA",
    heroTitle: "Run a safer creator business without turning your back office into a second job.",
    heroCopy: "Independent comparisons, privacy-aware workflows, and small automations for verified adult creators and lawful businesses serving the US and Japan.",
    heroCompare: "Compare platforms", heroConsult: "Request an automation review",
    trustOne: "No explicit content hosted", trustTwo: "No credentials collected", trustThree: "Human approval before sending",
    boundaryKicker: "OUR BOUNDARY", boundaryTitle: "Operations guidance, not adult-content hosting.",
    boundaryCopy: "This site does not publish explicit media, accept uploads, facilitate encounters, verify performers, or process adult-content payments. Every external platform has its own current rules and onboarding checks.",
    compareKicker: "PLATFORM MAP", compareTitle: "Start with the operating model, not the logo.",
    compareCopy: "These summaries are for initial screening. Policies, availability, fees, and payout methods change; verify the official source before opening an account.",
    filterAll: "All", filterGlobal: "US / Global", filterJapan: "Japan", filterAffiliate: "Affiliate", reviewed: "Sources reviewed:",
    automationKicker: "HUMAN-REVIEWED AUTOMATION", automationTitle: "Automate the repetitive parts, not consent or judgment.",
    automationCopy: "Local-first Python workflows use sample data, keep an audit trail, and stop for human review when a decision is sensitive.",
    serviceOneTitle: "Inbox & inquiry triage", serviceOneCopy: "Classify support requests, flag urgent cases, and draft neutral replies. A person approves every message.", serviceOnePrice: "US$39 fixed starter",
    serviceTwoTitle: "Catalog & CSV cleanup", serviceTwoCopy: "Normalize titles, tags, dates, and product metadata without copying protected media or storing account credentials.", serviceTwoPrice: "US$39 fixed starter",
    serviceThreeTitle: "Creator operations dashboard", serviceThreeCopy: "Track deliverables, renewals, permissions, and review queues with synthetic setup data and a documented handoff.", serviceThreePrice: "US$499 / ¥70,000",
    shippingKicker: "DISCREET SHIPPING", shippingTitle: "Discreet to the customer does not mean anonymous to the carrier.",
    shippingCopy: "Use truthful sender information where required, neutral packaging, minimal internal access to addresses, and carrier-approved goods. Never mislabel contents or evade customs rules.",
    shipOneTitle: "Packaging", shipOneCopy: "No explicit exterior artwork; protect products and follow carrier packaging rules.",
    shipTwoTitle: "Data access", shipTwoCopy: "Limit address access, define retention, and delete exports after fulfillment.",
    shipThreeTitle: "Returns", shipThreeCopy: "Publish a clear policy for hygiene-sensitive and unopened goods.",
    shipFourTitle: "Cross-border", shipFourCopy: "Confirm destination-country restrictions before accepting the order.",
    revenueKicker: "REVENUE MODEL", revenueTitle: "Three revenue lines, with referrals clearly labeled.",
    revenueOneTitle: "Fixed-scope automation", revenueOneCopy: "The fastest path: paid setup and delivery with human review.",
    revenueTwoTitle: "Approved affiliate links", revenueTwoCopy: "Add only after program approval. Every commissionable link is labeled beside the link.",
    revenueThreeTitle: "Sponsored listings later", revenueThreeCopy: "Separate paid placements from editorial rankings and disclose the relationship.",
    sourcesKicker: "PRIMARY SOURCES", sourcesTitle: "Policies first. Opinions second.",
    consultKicker: "15-MINUTE FIT CHECK", consultTitle: "Bring one repetitive workflow. Leave with a safe automation boundary.",
    consultCopy: "Do not send passwords, identity documents, customer addresses, explicit media, or real customer exports. A synthetic sample is enough for the first review.",
    consultButton: "View the fixed-price service", consultPublic: "Request a public fit check", consultAudit: "Open the 15-minute audit", consultNote: "Use synthetic examples only. Payment and private messages stay on Freelancer.",
    footerCopy: "Independent operational information. No explicit content is hosted.", footerLegal: "Legal & safety", footerPrivacy: "Privacy", footerSources: "Sources",
    sourceLabel: "Official source", factLabel: "Key checks",
  },
  ja: {
    navCompare: "比較", navAutomation: "自動化", navShipping: "匿名配送", navConsult: "相談",
    eyebrow: "18歳以上の事業運営向け・露骨なコンテンツ掲載なし",
    heroTitle: "バックオフィスを第二の仕事にせず、安全なクリエイター事業を運営する。",
    heroCopy: "米国・日本の認証済み成人クリエイターと合法事業者向けに、独立比較、プライバシー配慮型フロー、小規模自動化を提供します。",
    heroCompare: "プラットフォームを比較", heroConsult: "自動化診断を依頼",
    trustOne: "露骨なコンテンツを掲載しない", trustTwo: "認証情報を収集しない", trustThree: "送信前に人間が確認",
    boundaryKicker: "対応範囲", boundaryTitle: "成人コンテンツの掲載ではなく、業務運営を支援。",
    boundaryCopy: "露骨な画像・動画の掲載、アップロード受付、出会いの仲介、出演者確認、成人向け決済処理は行いません。外部サービスごとに最新規約と登録審査があります。",
    compareKicker: "プラットフォームマップ", compareTitle: "ロゴではなく、運営モデルから選ぶ。",
    compareCopy: "以下は一次選定用です。規約、提供地域、手数料、受取方法は変わるため、登録前に必ず公式情報を確認してください。",
    filterAll: "すべて", filterGlobal: "米国・グローバル", filterJapan: "日本", filterAffiliate: "アフィリエイト", reviewed: "情報確認日:",
    automationKicker: "人間確認付き自動化", automationTitle: "反復作業を自動化し、同意や判断は自動化しない。",
    automationCopy: "ローカル中心のPython処理をサンプルデータで構築し、監査ログを残し、慎重な判断は人間確認で止めます。",
    serviceOneTitle: "問い合わせ整理", serviceOneCopy: "問い合わせ分類、緊急案件の検出、中立的な返信下書きを作成。送信は人間が承認します。", serviceOnePrice: "US$39 固定スターター",
    serviceTwoTitle: "カタログ・CSV整理", serviceTwoCopy: "保護対象メディアを複製せず、認証情報も保存せずに、商品名・タグ・日付・メタデータを整形。", serviceTwoPrice: "US$39 固定スターター",
    serviceThreeTitle: "運営ダッシュボード", serviceThreeCopy: "納品、更新、許諾、確認待ちを架空データで構築し、運用手順付きで納品。", serviceThreePrice: "US$499 / 70,000円",
    shippingKicker: "匿名・配慮配送", shippingTitle: "購入者への配慮と、配送業者への匿名は別物です。",
    shippingCopy: "必要な差出人情報は正しく記載し、外装を中立化し、住所への社内アクセスを最小化し、配送可能な商品のみ扱います。虚偽品名や税関回避は禁止です。",
    shipOneTitle: "梱包", shipOneCopy: "外装に露骨な図柄を使わず、商品を保護し、配送業者の梱包規則に従う。",
    shipTwoTitle: "住所データ", shipTwoCopy: "アクセス権と保存期間を決め、出荷後に不要なエクスポートを削除する。",
    shipThreeTitle: "返品", shipThreeCopy: "衛生商品と未開封商品について、明確な返品条件を掲載する。",
    shipFourTitle: "越境配送", shipFourCopy: "注文受付前に配送先国の規制を確認する。",
    revenueKicker: "収益モデル", revenueTitle: "紹介報酬を明示した3本の収益導線。",
    revenueOneTitle: "小規模自動化受託", revenueOneCopy: "最短の収益導線。人間確認付きで設定・納品する。",
    revenueTwoTitle: "承認済みアフィリエイト", revenueTwoCopy: "提携審査後のみ追加し、成果報酬リンクの隣に明示する。",
    revenueThreeTitle: "将来のスポンサー枠", revenueThreeCopy: "有料掲載と編集ランキングを分離し、関係性を開示する。",
    sourcesKicker: "一次情報", sourcesTitle: "意見より先に、規約を確認。",
    consultKicker: "15分の適合診断", consultTitle: "反復業務を1つ持ち込み、安全な自動化範囲を持ち帰る。",
    consultCopy: "パスワード、本人確認書類、顧客住所、露骨なメディア、実顧客データは送らないでください。初回は架空サンプルで十分です。",
    consultButton: "固定価格サービスを見る", consultPublic: "公開の適合診断を依頼", consultAudit: "15分診断を開く", consultNote: "架空サンプルのみ使用してください。支払いと非公開連絡はFreelancer上で行います。",
    footerCopy: "独立した業務情報サイト。露骨なコンテンツは掲載しません。", footerLegal: "法務・安全", footerPrivacy: "プライバシー", footerSources: "出典",
    sourceLabel: "公式情報", factLabel: "確認事項",
  },
}

let currentLanguage = "en"
let currentFilter = "all"

function renderPlatforms() {
  const grid = document.querySelector("#platform-grid")
  const t = translations[currentLanguage]
  const visible = platforms.filter((platform) => currentFilter === "all" || platform.regions.includes(currentFilter))
  grid.innerHTML = visible.map((platform) => `
    <article class="platform-card">
      <div class="card-meta">
        ${platform.regions.map((region) => `<span class="tag">${region === "us-global" ? "US / Global" : region === "japan" ? "Japan" : "Affiliate"}</span>`).join("")}
      </div>
      <h3>${platform.name}</h3>
      <strong>${platform.model[currentLanguage]}</strong>
      <p>${platform.summary[currentLanguage]}</p>
      <div class="card-facts" aria-label="${t.factLabel}">
        ${platform.facts[currentLanguage].map((fact) => `<span>• ${fact}</span>`).join("")}
      </div>
      <a class="source-link" href="${platform.source}" target="_blank" rel="noopener">${t.sourceLabel} ↗</a>
    </article>
  `).join("")
}

function setLanguage(language) {
  currentLanguage = language
  document.documentElement.lang = language
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n
    if (translations[language][key]) element.textContent = translations[language][key]
  })
  document.querySelectorAll(".lang-button").forEach((button) => button.classList.toggle("is-active", button.dataset.lang === language))
  renderPlatforms()
}

document.querySelectorAll(".lang-button").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)))
document.querySelectorAll(".filter-button").forEach((button) => button.addEventListener("click", () => {
  currentFilter = button.dataset.filter
  document.querySelectorAll(".filter-button").forEach((item) => item.classList.toggle("is-active", item === button))
  renderPlatforms()
}))

document.querySelector("#year").textContent = new Date().getFullYear()
setLanguage("en")
