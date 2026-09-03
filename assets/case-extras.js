/* ============================================================
   Zorya Portfolio — case-page extras
   Requires: <body data-case="<slug>"> and assets/works-data.js loaded first.
   Injects: reading progress, hero cover, TL;DR, voxel figures, prev/next pager,
   back-to-top. Also "condenses" long prose blocks into collapsed <details>
   so a page reads short by default but nothing is deleted.
   ============================================================ */
(function () {
  "use strict";
  var W = window.ZoryaWorks;
  if (!W) return;
  var slug = document.body.getAttribute("data-case");
  var ROOT = "../..";
  var idx = -1;
  for (var i = 0; i < W.CASES.length; i++) if (W.CASES[i].slug === slug) idx = i;
  var me = idx >= 0 ? W.CASES[idx] : null;

  // 0) language switch to the EN brief
  if (!document.querySelector(".lang-sw")) {
    var slotEl = document.querySelector(".header-inner > div");
    if (slotEl) {
      var sw = document.createElement("a");
      sw.className = "lang-sw";
      sw.href = "/en/cases/" + slug + ".html";
      sw.lang = "en"; sw.title = "Switch to English"; sw.textContent = "EN";
      slotEl.insertBefore(sw, slotEl.firstChild);
    }
  }

  // 1) reading progress bar + back-to-top
  var bar = document.createElement("div");
  bar.className = "read-progress";
  bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);
  var top = document.createElement("button");
  top.className = "to-top";
  top.type = "button";
  top.setAttribute("aria-label", "回到頂端");
  top.textContent = "↑";
  top.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  document.body.appendChild(top);
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0) + "%";
    top.classList.toggle("show", h.scrollTop > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // 2) condense: wrap long prose blocks in collapsed <details> (content is kept, just folded)
  function fold(el, label, cls) {
    if (!el || el.closest("details")) return;
    var d = document.createElement("details");
    d.className = "fold " + (cls || "");
    var s = document.createElement("summary");
    s.textContent = label;
    d.appendChild(s);
    el.parentNode.insertBefore(d, el);
    d.appendChild(el);
  }
  function textLen(el) { return (el.textContent || "").replace(/\s+/g, "").length; }

  var ctx = document.querySelector(".hero .context-line");
  if (ctx) fold(ctx, "客戶原話", "fold-quote");
  document.querySelectorAll(".callout").forEach(function (el) {
    if (textLen(el) < 90) return;
    var b = el.querySelector("b");
    var label = b ? b.textContent.split(/[：:。]/)[0].slice(0, 22) : "補充說明";
    fold(el, label, "fold-callout");
  });
  document.querySelectorAll(".case-card .impact, .impact").forEach(function (el) {
    if (textLen(el) < 60) return;
    fold(el, "影響與判讀", "fold-impact");
  });
  document.querySelectorAll(".gap-card .evidence, .evidence").forEach(function (el) {
    if (textLen(el) < 40) return;
    fold(el, "實證", "fold-evidence");
  });
  document.querySelectorAll(".boundary-text > span").forEach(function (el) {
    if (textLen(el) < 40) return;
    fold(el, "為什麼不做", "fold-why");
  });
  document.querySelectorAll(".ac-why").forEach(function (el) {
    if (textLen(el) < 40) return;
    fold(el, "為什麼可驗收", "fold-why");
  });
  document.querySelectorAll(".trap-text").forEach(function (el) {
    if (textLen(el) < 90) return;
    var b = el.querySelector("b");
    fold(el, b ? b.textContent.replace(/[：:]\s*$/, "") : "說明", "fold-callout");
  });
  document.querySelectorAll(".pricing-note").forEach(function (el) {
    if (textLen(el) < 60) return;
    fold(el, "報價說明", "fold-note");
  });
  document.querySelectorAll(".source-card .issue").forEach(function (el) {
    if (textLen(el) < 30) return;
    fold(el, "資料問題", "fold-issue");
  });
  document.querySelectorAll("dl.info-list").forEach(function (el) {
    fold(el, "案件資料", "fold-info");
  });
  document.querySelectorAll(".premise-note").forEach(function (el) {
    if (textLen(el) < 60) return;
    fold(el, "附註", "fold-note");
  });

  if (!me) return;

  // 3) hero cover + TL;DR
  var hero = document.querySelector(".hero");
  if (hero) {
    var fig = document.createElement("figure");
    fig.className = "hero-cover";
    var img = document.createElement("img");
    img.src = W.coverPath(ROOT, me.slug);
    img.alt = me.alt || me.title;
    img.width = 1200; img.height = 800;
    img.decoding = "async";
    img.addEventListener("error", function () { fig.classList.add("is-missing"); hero.classList.remove("has-cover"); });
    fig.appendChild(img);
    var lede = hero.querySelector(".lede");
    if (lede && lede.nextSibling) hero.insertBefore(fig, lede.nextSibling); else hero.appendChild(fig);
    hero.classList.add("has-cover");

    if (me.tldr) {
      var dl = document.createElement("dl");
      dl.className = "tldr";
      dl.innerHTML =
        '<div class="tldr-title">30 秒看懂</div>' +
        "<dt>客戶說</dt><dd>" + W.esc(me.tldr.said) + "</dd>" +
        "<dt>真正的問題</dt><dd>" + W.esc(me.tldr.real) + "</dd>" +
        "<dt>交付了什麼</dt><dd>" + W.esc(me.tldr.made) + "</dd>";
      var stat = hero.querySelector(".stat-row");
      if (stat) hero.insertBefore(dl, stat); else hero.appendChild(dl);
      dl.style.gridColumn = "1 / -1";
    }
  }

  // 4) voxel figures (scene illustrations) — declared per case in works-data.js as
  //    figs: [{ after: "#background", file: "1", cap: "..." }, ...]
  (me.figs || []).forEach(function (f, fi) {
    var sec = document.querySelector(f.after);
    if (!sec) return;
    var figure = document.createElement("figure");
    figure.className = "case-fig reveal";
    var im = document.createElement("img");
    im.src = W.join(ROOT, "assets/img/cases/" + me.slug + "/" + f.file + ".webp");
    im.alt = f.alt || f.cap || "";
    im.width = 1200; im.height = 800; im.loading = fi === 0 ? "eager" : "lazy"; im.decoding = "async";
    im.addEventListener("error", function () { figure.remove(); });
    figure.appendChild(im);
    if (f.cap) {
      var cap = document.createElement("figcaption");
      cap.textContent = f.cap;
      figure.appendChild(cap);
    }
    var head = sec.querySelector(".section-head");
    if (head && head.nextSibling) sec.insertBefore(figure, head.nextSibling); else sec.appendChild(figure);
    figure.classList.add("is-visible");
  });

  // 5) prev / next pager (wraps around so the last case leads back to the first)
  var n = W.CASES.length;
  var prev = W.CASES[(idx - 1 + n) % n];
  var next = W.CASES[(idx + 1) % n];
  function pagerLink(c, cls, label) {
    return (
      '<a class="' + cls + '" href="' + W.join(ROOT, "cases/" + c.slug + "/index.html") + '">' +
        '<span class="thumb">' + W.esc(c.code) +
          '<img src="' + W.coverPath(ROOT, c.slug) + '" alt="" loading="lazy" onerror="this.classList.add(\'is-missing\')">' +
        "</span>" +
        "<span><span class=\"pager-label\">" + label + "</span><span class=\"pager-title\">" + W.esc(c.title) + "</span></span>" +
      "</a>"
    );
  }
  var nav = document.createElement("nav");
  nav.className = "case-pager";
  nav.setAttribute("aria-label", "其他案例");
  nav.innerHTML =
    pagerLink(prev, "prev", "← 上一個案例") +
    pagerLink(next, "next", "下一個案例 →") +
    '<a class="pager-all" href="' + W.join(ROOT, "cases/index.html") + '">看全部 ' + n + " 個案例</a>";
  var footer = document.querySelector("footer");
  if (footer) footer.parentNode.insertBefore(nav, footer); else document.body.appendChild(nav);
})();
