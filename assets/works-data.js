/* ============================================================
   Zorya Portfolio — single source of truth for works
   ------------------------------------------------------------
   要新增一件作品：在 CASES（案例研究）或 DEMOS（Demo）陣列
   加一個物件即可，首頁 / 列表頁 / 案例頁上一篇下一篇 都會自動更新。

   圖片規格（見 design/VISUAL_BRIEF.md）：
     cover : assets/img/cases/<slug>.webp   1200×800（3:2）≤150KB
     hero  : assets/img/hero.webp            1536×1024（3:2）≤220KB
   找不到圖片時，卡片會自動退回「字母＋漸層」的替代封面，不會破版。
   ============================================================ */
(function (global) {
  "use strict";

  var CASES = [
    {
      slug: "frozen-food",
      figs: [
        { after: "#background", file: "1", cap: "現況：倉管、業務、會計各自產生單據，三張單子對不起來。", alt: "三張分開的桌子與三種不同形狀的單據" },
        { after: "#results", file: "2", cap: "交付物：三表整併成一張對得起來的帳，異常直接被標出來。", alt: "整併後的帳冊與放大鏡標出的異常" },
      ],

      code: "A",
      type: "診斷",
      title: "冷凍食品經銷沖帳診斷",
      hook: "三張單子對不起來，錢到底漏在哪？",
      stat: "年可回收異常 NT$796K",
      alt: "冷凍配送車與三張對不起來的單據，經整併後成為一份對得起來的帳",
      tldr: {
        said: "「業務單子跟會計收的錢兜不起來。」",
        real: "提貨／下貨／收款三張單各自產生，沒有共同的對帳鍵。",
        made: "三來源整併＋異常金額量化＋ROI 試算報告。"
      }
    },
    {
      slug: "marital-property",
      figs: [
        { after: "#background", file: "1", cap: "現況：銀行、基金、配息三疊明細散在不同地方，沒有共同的時間軸。", alt: "三疊散落的對帳單" },
        { after: "#results", file: "2", cap: "交付物：十年交易排上同一條時間軸，結婚日一刀切開，末端是可呈庭的報表。", alt: "時間軸、切分點與天平" },
      ],

      code: "B",
      type: "分類與追溯",
      title: "婚後財產交易追溯",
      hook: "十年帳目，切出婚前與婚後。",
      stat: "婚後淨額 NT$2.78M",
      alt: "一條十年的交易時間軸，在結婚日被切成兩段顏色，末端是一座天平",
      tldr: {
        said: "「律師說單憑交易明細判斷不出來。」",
        real: "不是判斷不出來，是三來源沒被放在同一條時間軸上。",
        made: "銀行＋基金＋配息整併、語意分類、可呈庭報表。"
      }
    },
    {
      slug: "trip-pricing",
      figs: [
        { after: "#background", file: "1", cap: "現況：客戶自己寫了 15 章規格，試算表裡卻有幾格是空的。", alt: "厚厚的規格書與有缺格的試算表" },
        { after: "#acceptance", file: "2", cap: "交付物：可操作的估價原型、7 個缺口清單、13 條驗收條件。", alt: "估價原型畫面、七塊拼圖與十三個打勾" },
      ],

      code: "C",
      type: "原型收斂",
      title: "旅遊行程估價原型",
      hook: "客戶自己的規格書，藏了 7 個缺口。",
      stat: "驗收條件 13/13 通過",
      alt: "一張旅遊路線圖與一份缺了幾塊拼圖的規格文件",
      tldr: {
        said: "「規格我都寫好了，照做就好。」",
        real: "規格裡有 7 個連客戶自己都沒發現的缺口。",
        made: "可操作估價原型＋缺口清單＋13 條驗收條件。"
      }
    },
    {
      slug: "nutrition-liff",
      figs: [
        { after: "#background", file: "1", cap: "現況：需求只有一張便利貼——「飲食紀錄系統」。", alt: "營養師的桌子與一張空白便利貼" },
        { after: "#metric", file: "2", cap: "交付物：LIFF 紀錄工具、核心指標，以及一條「刻意不做」的界線。", alt: "手機紀錄畫面、日曆打勾與界線圍籬" },
      ],

      code: "D",
      type: "需求釐清",
      title: "營養諮詢飲食紀錄 LIFF",
      hook: "從一句話，問出完整需求。",
      stat: "有效紀錄率 32.1%",
      alt: "手機畫面上的一碗餐點與打勾的日曆，旁邊是營養師的對話泡泡",
      tldr: {
        said: "「我要一個飲食紀錄系統。」",
        real: "營養師真正缺的是「個案有沒有持續記錄」的訊號。",
        made: "LINE LIFF 紀錄工具＋核心指標＋明確的不做清單。"
      }
    },
    {
      slug: "label-compliance",
      figs: [
        { after: "#background", file: "1", cap: "現況：配方改了、標示沒跟上，退件的箱子已經回來了。", alt: "貨架、設計桌與被退回的箱子" },
        { after: "#pricing", file: "2", cap: "交付物：合規查核表、改版後的標示，以及損失與報價的對照。", alt: "查核表、新包裝、兩根長條與價格牌" },
      ],

      code: "E",
      type: "重新定義",
      title: "包裝標示合規改版",
      hook: "美編案？其實是合規案。",
      stat: "建議報價 NT$28K–45K",
      alt: "一張食品包裝標籤，放大鏡下是逐項打勾的查核表",
      tldr: {
        said: "「NT$4,000 找美編改版面。」",
        real: "配方變了，標示沒跟上；退件與打樣損失遠大於設計費。",
        made: "合規查核表＋改版標示＋損失試算與合理報價。"
      }
    },
    {
      slug: "video-production",
      figs: [
        { after: "#background", file: "1", cap: "現況：七間門市的素材全部堆到一位剪輯師桌上。", alt: "七間店面與被素材淹沒的剪輯桌" },
        { after: "#metrics", file: "2", cap: "交付物：一條四站式產線，素材等距進、影片等距出，單支成本算得出來。", alt: "四站式輸送帶與輸出盒" },
      ],

      code: "F",
      type: "產能規模化",
      title: "多門市影片產線",
      hook: "他要的不是剪輯師，是一條產線。",
      stat: "單支真實成本 NT$555",
      alt: "七間小店的素材沿著輸送帶匯入同一條影片產線",
      tldr: {
        said: "「一支 150–300 元找剪輯師。」",
        real: "七門市每天 10+ 場，問題是產能與流程，不是單價。",
        made: "產線設計＋單支真實成本模型＋規模化排程。"
      }
    }
  ];

  var DEMOS = [
    { slug: "bakery",      code: "D1", type: "行銷頁面", title: "手作烘焙預購頁",     hook: "菜單、倒數、預購表單。",     alt: "voxel 風格的小烘焙店櫃台與麵包" },
    { slug: "esg",         code: "D2", type: "多語系平台", title: "移工 DEI 認證平台", hook: "五語微課程到電子證書。",     alt: "voxel 風格的五位小人與一張證書" },
    { slug: "ai-service",  code: "D3", type: "對話介面", title: "電商 AI 客服",       hook: "訂單、退換貨即時回覆。",     alt: "voxel 風格的聊天視窗與一隻小貓" },
    { slug: "order",       code: "D4", type: "互動流程", title: "掃碼點餐系統",       hook: "點餐到廚房看板同步。",       alt: "voxel 風格的餐桌、手機與廚房看板" },
    { slug: "roulette",    code: "D5", type: "互動元件", title: "推薦幸運輪盤",       hook: "推薦成交、抽獎輪盤。",       alt: "voxel 風格的抽獎轉盤與招財貓" },
    { slug: "streamer_ai", code: "D6", type: "對話介面", title: "直播主 AI 小助手",   hook: "語音開關與快速選項。",       alt: "voxel 風格的直播桌與聊天面板" }
  ];

  // ---------- helpers ----------
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function join(root, path) {
    root = root || ".";
    return root.replace(/\/+$/, "") + "/" + path.replace(/^\/+/, "");
  }
  function coverPath(root, slug) { return join(root, "assets/img/cases/" + slug + ".webp"); }

  function caseCard(c, root) {
    return (
      '<a class="work-card reveal" href="' + join(root, "cases/" + c.slug + "/index.html") + '" aria-label="' + esc(c.title) + '">' +
        '<div class="work-cover" data-code="' + esc(c.code) + '">' +
          '<img src="' + coverPath(root, c.slug) + '" alt="' + esc(c.alt || c.title) + '" width="1200" height="800" loading="lazy" decoding="async" onerror="this.classList.add(\'is-missing\')">' +
        '</div>' +
        '<div class="work-body">' +
          '<span class="work-kicker">' + esc(c.type) + ' · ' + esc(c.code) + '</span>' +
          '<h3>' + esc(c.title) + '</h3>' +
          '<p class="work-hook">' + esc(c.hook) + '</p>' +
          '<p class="work-stat">' + esc(c.stat) + ' <span class="work-arrow" aria-hidden="true">→</span></p>' +
        '</div>' +
      '</a>'
    );
  }

  function demoCard(d, root) {
    return (
      '<a class="work-card demo reveal" href="' + join(root, "demos/" + d.slug + "/index.html") + '" aria-label="' + esc(d.title) + '">' +
        '<div class="work-cover" data-code="' + esc(d.code || "D") + '">' +
          '<img src="' + join(root, "assets/img/demos/" + d.slug + ".webp") + '" alt="' + esc(d.alt || d.title) + '" width="1200" height="800" loading="lazy" decoding="async" onerror="this.classList.add(\'is-missing\')">' +
        '</div>' +
        '<div class="work-body">' +
          '<span class="work-kicker">' + esc(d.type) + '</span>' +
          '<h3>' + esc(d.title) + '</h3>' +
          '<p class="work-hook">' + esc(d.hook) + '</p>' +
          '<p class="work-stat">打開 Demo <span class="work-arrow" aria-hidden="true">→</span></p>' +
        '</div>' +
      '</a>'
    );
  }

  function renderInto(selector, html) {
    var els = document.querySelectorAll(selector);
    for (var i = 0; i < els.length; i++) els[i].innerHTML = html;
    return els.length;
  }

  function renderAll() {
    var grids = document.querySelectorAll("[data-works]");
    for (var i = 0; i < grids.length; i++) {
      var g = grids[i];
      var root = g.getAttribute("data-root") || ".";
      var kind = g.getAttribute("data-works");
      var list = kind === "demos" ? DEMOS : CASES;
      var limit = parseInt(g.getAttribute("data-limit") || "0", 10) || list.length;
      var html = "";
      for (var j = 0; j < Math.min(limit, list.length); j++) {
        html += kind === "demos" ? demoCard(list[j], root) : caseCard(list[j], root);
      }
      g.innerHTML = html;
    }
    var counts = document.querySelectorAll("[data-count]");
    for (var k = 0; k < counts.length; k++) {
      counts[k].textContent = counts[k].getAttribute("data-count") === "demos" ? DEMOS.length : CASES.length;
    }
  }

  global.ZoryaWorks = {
    CASES: CASES,
    DEMOS: DEMOS,
    coverPath: coverPath,
    caseCard: caseCard,
    demoCard: demoCard,
    renderAll: renderAll,
    esc: esc,
    join: join
  };

  // Render immediately (script is placed after the grids, before portfolio-theme.js
  // so the reveal observer can see the cards), and again on DOMContentLoaded as a fallback.
  renderAll();
})(window);
