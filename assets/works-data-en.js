/* ============================================================
   Zorya Portfolio — English strings (EN site under /en/)
   Same shape as works-data.js; images point to the origami set
   (assets/img/en/...) with the zh voxel set as fallback.
   ============================================================ */
(function (global) {
  "use strict";

  var CASES = [
    {
      slug: "frozen-food", code: "A", type: "Diagnosis",
      title: "Frozen-Food Ledger Diagnosis",
      hook: "Three slips never matched — where was the money leaking?",
      stat: "NT$796K/yr recoverable",
      alt: "Origami delivery van and three mismatched paper slips under a magnifier",
      tldr: {
        said: "“Sales slips never match what accounting collects.”",
        real: "Pickup, delivery and payment slips shared no common key.",
        made: "Three-source merge + quantified anomalies + ROI model."
      },
      stats: [
        { label: "Company size", value: "38 staff", sub: "6 driver-reps, ~210 retail stops" },
        { label: "Rows merged", value: "~1,800", sub: "3 sources over 107 days" },
        { label: "Recoverable anomalies", value: "NT$796,157/yr", sub: "conservative estimate", headline: true }
      ],
      caps: [
        "As-is: three teams, three slips — nothing reconciles.",
        "Delivered: one merged ledger with anomalies surfaced and priced."
      ]
    },
    {
      slug: "marital-property", code: "B", type: "Classification & Tracing",
      title: "Marital Asset Tracing",
      hook: "Ten years of statements, split at the wedding day.",
      stat: "NT$2.78M net marital assets",
      alt: "A pleated paper timeline cut in two colours ending at a balance scale",
      tldr: {
        said: "“Two lawyers said statements alone can’t decide this.”",
        real: "Three sources had never been put on one timeline.",
        made: "Bank + fund + dividend merge, semantic tagging, court-ready report."
      },
      stats: [
        { label: "Time span", value: "10 years", sub: "wedding date mid-period" },
        { label: "Transactions", value: "3,296", sub: "bank 2,136 · fund 200 · dividends 960" },
        { label: "Net marital assets", value: "NT$2,778,968", sub: "base scenario + sensitivity range", headline: true }
      ],
      caps: [
        "As-is: three piles of statements with no shared timeline.",
        "Delivered: one timeline split at the wedding date — court-ready."
      ]
    },
    {
      slug: "trip-pricing", code: "C", type: "Prototype Convergence",
      title: "Trip-Pricing Prototype",
      hook: "The client’s own spec hid seven gaps.",
      stat: "13/13 acceptance passed",
      alt: "A folded paper spec with missing puzzle panels beside an origami map",
      tldr: {
        said: "“The spec is done — just build it.”",
        real: "Seven gaps the client had never noticed.",
        made: "Working pricing prototype + gap list + 13 acceptance criteria."
      },
      stats: [
        { label: "Hidden gaps", value: "G1–G7", sub: "none mentioned in the spec" },
        { label: "Anomalies priced", value: "NT$1,195,310", sub: "pricing drift + duplicate vendors" },
        { label: "Acceptance criteria", value: "13 / 13", sub: "who / when / action / result", headline: true }
      ],
      caps: [
        "As-is: a thick spec whose spreadsheet had empty cells.",
        "Delivered: a working prototype, the seven gaps, thirteen checks."
      ]
    },
    {
      slug: "nutrition-liff", code: "D", type: "Requirement Discovery",
      title: "Diet-Log LIFF for Nutritionists",
      hook: "From one sentence to a full requirement.",
      stat: "32.1% valid-day rate",
      alt: "An origami smartphone and folded calendar with blue check marks",
      tldr: {
        said: "“I want a diet-logging system.”",
        real: "What she actually lacked was a signal of client adherence.",
        made: "LINE LIFF logger + core metric + an explicit not-doing list."
      },
      stats: [
        { label: "Clients", value: "30", sub: "1–6 month plans" },
        { label: "Plan-days analysed", value: "2,820", sub: "photos, text logs, notes" },
        { label: "Valid-day rate", value: "32.1%", sub: "the honest number — not 49.2%", headline: true }
      ],
      caps: [
        "As-is: the whole requirement was one sticky note.",
        "Delivered: a logger, an adherence metric, and a deliberate boundary."
      ]
    },
    {
      slug: "label-compliance", code: "E", type: "Reframing",
      title: "Label Compliance Overhaul",
      hook: "A design gig? It was a compliance case.",
      stat: "NT$28K–45K quoted",
      alt: "An origami food pouch under a magnifier turning into a checklist",
      tldr: {
        said: "“NT$4,000 for a layout touch-up.”",
        real: "The recipe changed, the labels didn’t — rejects cost far more than design.",
        made: "Compliance checklist + revised labels + loss-anchored pricing."
      },
      stats: [
        { label: "Checks run", value: "51 rows", sub: "three-state verdicts, gaps disclosed" },
        { label: "Last incident cost", value: "NT$492,025", sub: "scrapped stock + lost sales" },
        { label: "Service quoted", value: "NT$28K–45K", sub: "anchored to real losses", headline: true }
      ],
      caps: [
        "As-is: recipe changed, labels lagged, the returned pallet was real.",
        "Delivered: the checklist nobody ran last time — plus honest pricing."
      ]
    },
    {
      slug: "video-production", code: "F", type: "Capacity Scaling",
      title: "Multi-Store Video Pipeline",
      hook: "He didn’t need an editor — he needed a pipeline.",
      stat: "True cost NT$555/video",
      alt: "Seven origami storefronts feeding a pleated conveyor ribbon",
      tldr: {
        said: "“NT$150–300 per video, hiring an editor.”",
        real: "Seven stores, 10+ events a day — a throughput problem, not a rate problem.",
        made: "Pipeline design + true-cost model + scaled scheduling."
      },
      stats: [
        { label: "Scale", value: "7 stores", sub: "~21,910 events/yr projected" },
        { label: "Sample delivered", value: "638 videos", sub: "in 92 days, 44.7% on time" },
        { label: "True unit cost", value: "NT$555", sub: "client believed NT$150–300", headline: true }
      ],
      caps: [
        "As-is: seven stores dumping footage on one exhausted editor.",
        "Delivered: a four-station line where cost per video is knowable."
      ]
    }
  ];

  var DEMOS = [
    { slug: "bakery",      code: "D1", type: "Landing Page",   title: "Bakery Pre-Order Page",        hook: "Menu, countdown, pre-orders." },
    { slug: "esg",         code: "D2", type: "Multilingual",   title: "Migrant DEI Training Platform", hook: "Micro-courses to e-certificates in five languages." },
    { slug: "ai-service",  code: "D3", type: "Chat UI",        title: "E-Commerce AI Support",         hook: "Instant answers on orders and returns." },
    { slug: "order",       code: "D4", type: "Interactive Flow", title: "QR Table Ordering",           hook: "From order to kitchen board, live." },
    { slug: "roulette",    code: "D5", type: "Widget",         title: "Referral Lucky Wheel",          hook: "Referrals earn spins." },
    { slug: "streamer_ai", code: "D6", type: "Chat UI",        title: "Streamer AI Assistant",         hook: "Voice toggle and quick replies." }
  ];

  var CAPABILITIES = [
    { text: "Clarify requirements", href: "cases/nutrition-liff.html",  aria: "Case: Diet-Log LIFF for Nutritionists" },
    { text: "Reconcile messy data", href: "cases/frozen-food.html",     aria: "Case: Frozen-Food Ledger Diagnosis" },
    { text: "Build rule prototypes", href: "cases/trip-pricing.html",   aria: "Case: Trip-Pricing Prototype" },
    { text: "Audit compliance risk", href: "cases/label-compliance.html", aria: "Case: Label Compliance Overhaul" },
    { text: "Design ops pipelines", href: "cases/video-production.html", aria: "Case: Multi-Store Video Pipeline" },
    { text: "Ship web & AI tools",  href: "../demos/ai-service/index.html", aria: "Open demo: E-Commerce AI Support" }
  ];

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  global.ZoryaWorksEN = { CASES: CASES, DEMOS: DEMOS, CAPABILITIES: CAPABILITIES, esc: esc };
})(window);
