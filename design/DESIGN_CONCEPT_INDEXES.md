# 案例／Demo 索引頁改版規格：從卡片牆變成可選擇的路徑

> 文件目的：提供可直接套入 `cases/index.html`、`demos/index.html`、`assets/portfolio-theme.css`、`assets/works-data.js` 與少量原生 JS 的索引頁改版規格。視覺與互動承接 `design/DESIGN_CONCEPT_HOME.md`；所有圖像仍以 `design/VOXEL_STYLE_GUIDE.md` 為唯一準則。本輪不改首頁與任何案例／Demo 內頁。

## 1. 現況診斷

### 1.1 案例列表頁：三句診斷

1. 六張同尺寸卡片把診斷、追溯、原型、釐清、合規與產能設計壓成同一權重，讀者先看到「六個專案」，卻看不到 A→F 逐步把模糊問題轉成可驗收成果的能力光譜。
2. 卡片把最有說服力的真問題與成果數字塞在相同的小區塊裡，桌機需要逐張掃描、手機則要連續滑過六張大圖，資訊比較成本過高。
3. 頁首只負責命名、頁尾只剩一行「回作品集首頁」，既未說明如何選案例，也沒有把讀完索引後的下一步接回首頁敘事、Demo 驗證或聯絡入口。

### 1.2 Demo 列表頁：三句診斷

1. 六張等權重卡片像一般作品 gallery，沒有沿用首頁已建立的 `demo3`「圖像＋可做的事＋打開入口」語言，視覺上像回到改版前。
2. 每張卡的類型、標題與一句功能描述都同等密度，缺少主作品、次作品與快速掃讀節奏；手機六張 3:2 大圖尤其拖長，操作入口被推到很後面。
3. 「非正式上線產品」聲明在頂部與 footer 重複，卻沒有清楚告訴使用者 Demo 可直接操作、如何返回首頁、如何轉去看有成果證據的案例。

## 2. 共通概念與資訊架構

### 2.1 概念名稱：路徑索引（The Path Index）

兩頁都不是倉庫式作品牆，而是首頁「把混亂變成路徑」的兩個分支：案例頁回答「你曾怎麼解題」，Demo 頁回答「我現在可以操作什麼」。採用 Dribbble 高評價 index／收藏頁常見的編輯手法：強烈頁首、少量導讀、大小交錯、清楚編號、整列可點、留白分段；不引入 Dribbble 常見的高彩漸層、玻璃卡或過度動態。

共同閱讀順序固定：

`首頁脈絡／返回入口 → 頁面定位 → 如何選 → 作品清單 → 相鄰分支 → 聯絡／回首頁`

### 2.2 共通頁首

- 保留現有 disclaimer strip，但視覺降級為 `12px/1.5`、單行優先、上下 padding `7px`；內容不得在 footer 原句重複。
- sticky header 與首頁同高、同品牌區、同主題切換。桌機導覽固定為「首頁／案例研究／Demo／聯絡」，當頁加 `aria-current="page"`；手機選單亦同，不因版寬刪除跨頁入口。
- header 下新增 breadcrumb／返回入口：`← 首頁 / CASE INDEX` 或 `← 首頁 / DEMO INDEX`，置於 hero eyebrow 上方，整個文字連回首頁；不再把回首頁藏在 footer。
- Hero 不放大型 voxel 圖。索引本身就是內容，首屏留給名稱、導讀、數量與選擇提示，避免與首頁 hero 搶角色。
- Hero 桌機 12 欄：標題與導言佔 7 欄；右側 4 欄放「如何選」短註記，空 1 欄形成 editorial 留白。手機依序為 breadcrumb → eyebrow → H1 → 導言 → 選擇提示。

### 2.3 共通版心、格線與斷點

- 沿用首頁 `max-width: 1200px`；桌機左右 padding `32px`、12 欄、gap `24px`。
- 平板 `641–980px`：左右 padding `24px`、6 欄、gap `20px`。
- 手機 `≤640px`：左右 padding `16px`（可沿用全站 `18px`，但兩頁必須一致）、4 欄、gap `12px`。
- Hero：桌機上／下 padding `88px / 64px`；平板 `72px / 48px`；手機 `48px / 36px`。
- Hero 至列表只以 `1px` gridline 分隔，不另包大卡。列表底至交叉導覽：桌機 `96px`、手機 `64px`。
- 最小點擊區 `44×44px`；整列／整卡皆可點，內部不再嵌套第二個可點連結。

### 2.4 共通字級

- Breadcrumb：Noto Sans TC 600，`12px/1.4`，字距 `.06em`，accent-ink。
- Eyebrow：Noto Sans TC 700，`12px/1.4`，字距 `.10em`，英文大寫。
- 索引 H1：Noto Serif TC 600，桌機 `clamp(48px, 5.5vw, 72px)/1.12`，手機 `38–44px/1.18`，最多 11 個中文字寬。
- Hero 導言：Noto Sans TC 400，桌機 `18px/1.75`、手機 `16px/1.7`，最大 `38ch`。
- 列表標題：案例桌機 `clamp(25px, 2.4vw, 34px)/1.3`，手機 `21px/1.4`，Noto Serif TC 600；Demo 維持首頁語言，Noto Sans TC 700，桌機 `20–24px/1.35`、手機 `18px/1.4`。
- 真問題／功能句：桌機 `15–16px/1.65`，手機 `14–15px/1.6`，ink-secondary。
- 成果數字：Noto Serif TC 600，桌機 `22–28px/1.25`、手機 `17–20px/1.3`，accent-ink，`font-variant-numeric: tabular-nums`。
- Label／代碼：`11–12px/1.4`，600–700，字距 `.06em`；關鍵資訊不得只以 muted 色呈現。

### 2.5 共通 token

不建立另一套色彩；直接沿用首頁與 `portfolio-theme.css` 語意 token，只補索引專用尺寸：

```css
:root {
  --container-index: 1200px;
  --surface-page: #F9F9F7;
  --surface-card: #FCFCFB;
  --surface-stage: #F4F3EE;
  --ink-primary: #0B0B0B;
  --ink-secondary: #52514E;
  --ink-muted: #898781;
  --gridline: #E1E0D9;
  --accent: #2A78D6;
  --accent-ink: #184F95;
  --accent-soft: rgba(42,120,214,.10);
  --radius-index: 16px;
  --index-thumb-w: 264px;
  --index-row-min: 210px;
  --shadow-rest: 0 1px 2px rgba(11,11,11,.04), 0 10px 30px rgba(11,11,11,.055);
  --shadow-hover: 0 2px 6px rgba(11,11,11,.06), 0 18px 42px rgba(11,11,11,.11);
  --ease-out: cubic-bezier(.22,1,.36,1);
}
```

品牌藍只用於目前路徑、成果、LIVE 狀態、箭頭與 focus；琥珀不在索引 UI 另加裝飾，僅可出現在既有 voxel 圖中的單一異常物件。

## 3. 案例列表頁規格：A→F 編輯型長列

### 3.1 Hero 文案與選擇提示

- Eyebrow：`CASE INDEX · A—F`。
- H1：`六種任務，／同一條清楚路徑`；桌機允許兩行，手機不可硬縮成單行。
- 導言：`從帳務診斷到產能設計，每一案都從一句不完整的需求開始，最後留下可驗收的交付物。`
- 右側「如何選」不做卡片，使用左側 `2px` 藍線：`想看數字證據：A／B；想看原型與需求收斂：C／D；想看重新定義與規模化：E／F。`
- Hero 底部加 path legend：`A 診斷 → B 追溯 → C 收斂 → D 釐清 → E 重定義 → F 規模化`。桌機單列；手機改為可換行的兩列文字，不做橫向捲動 carousel。

### 3.2 桌機長列

- 不使用 `.works-grid`。六案依資料順序 A→F 垂直排列為 `.case-index-list`，不可依成果金額重新排序。
- 每列為整張 `<a>`，12 欄配置：封面 3 欄；代碼 1 欄；標題＋真問題 4 欄；成果 3 欄；箭頭 1 欄。最小高 `210px`，上下 padding `24px`，列與列以 `1px solid var(--gridline)` 分隔。
- 封面固定 `264×176px`、3:2、`object-fit: cover`、圓角 `12px`，暖白燈箱；不得裁成正方形。A、C、E 圖靠左對齊，B、D、F 圖在其 3 欄內向右縮排 `24px`，形成低調鋸齒節奏，但文字欄線保持一致。
- 代碼使用大型 Noto Serif TC：`A—F`、`40px`、ink-muted；目前 hover／focus 列變 accent-ink。代碼下方以小字顯示 `01/06` 至 `06/06`。
- 內容固定順序：`類型 label → 標題 → 真問題一句`。真問題直接沿用 `hook`，前綴可見文字 `真正要解的：`，不可換成空泛摘要。
- 成果欄上方標 `OUTCOME`，下方直接沿用 `stat`；數字與單位可在實作時切成兩層，但不得改寫或誇大原資料。
- 最右為 `44×44px` 圓形箭頭區。預設透明＋gridline，hover／focus 列時邊框與箭頭轉藍、箭頭右移 `5px`。
- A 列可加一個小型 `START HERE` label，僅表示敘事起點，不代表其餘案例較差；不可做跨兩列巨卡，以免破壞 A→F 的連續閱讀。
- 整列 hover 背景只變 `surface-card`，圖片 `scale(1.025)`，整列不得上浮超過 `2px`；長清單的節奏來自線、縮排與編號，不靠六張浮卡。

### 3.3 平板與手機

- 平板改為 6 欄：封面 2 欄；文字 3 欄；成果＋箭頭 1 欄。代碼移入文字欄 label：`A · 診斷`，列最小高 `180px`。
- 手機每案仍是「長列」而非回到完整大圖卡：上列為代碼／類型與 `01/06`，中段為 `120×80px` 封面＋標題／真問題，下列為成果＋箭頭。
- 手機 grid 建議 `120px minmax(0,1fr)`，gap `14px`；每列上下 padding `22px`，封面固定 3:2。小於 `360px` 時封面降至 `104×70px`，不可隱藏。
- 成果列橫跨兩欄，上方 `1px dashed var(--gridline)`，padding-top `12px`；成果左對齊、箭頭靠右。六案總長目標約 `4.5–5.5` 個 390×844 viewport，較現況六張大圖卡至少縮短 25%。
- A→F legend 在 hero 已完整顯示；列表中不使用 sticky 進度條，避免佔用手機垂直空間。

### 3.4 路徑感與無障礙

- 桌機列表左側可用一條 `1px` gridline 串起六個代碼；每列進入 viewport 時該段由灰轉藍。這是輔助敘事，不得成為理解順序的唯一方法。
- DOM 必須是有序清單 `<ol>`；每個 `<li>` 內只有一個主要連結。螢幕閱讀器的 link label 包含代碼、標題與成果，例如：`案例 A，冷凍食品經銷沖帳診斷，年可回收異常 NT$796K`。
- 圖片 alt 沿用 `works-data.js`；裝飾性箭頭 `aria-hidden="true"`。focus-visible 使用 `2px solid var(--accent)`、offset `4px`，不可只靠背景色。

## 4. Demo 列表頁規格：首頁 demo3 語言的收藏頁版本

### 4.1 Hero 文案與快速分類

- Eyebrow：`LIVE DEMO COLLECTION · D1—D6`。
- H1：`六個可以直接／打開的作品`。
- 導言：`不是概念圖；每一件都能進入操作，看看介面如何把任務變短。`
- 右側「挑一個開始」：`要看轉換：D1／D5；要看平台流程：D2／D4；要看 AI 對話：D3／D6。`
- 非正式產品聲明留在 disclaimer strip 一次即可；Hero 只補一句 `建議從 D1 或 D3 開始，30 秒內可進入主要操作。`，不重複法律式語氣。

### 4.2 桌機收藏頁節奏

- 完整沿用首頁 `.demo3` 的構成與語言：暖白 voxel cover、狀態點＋`LIVE DEMO`、類型、標題、一句可做的事、`打開 Demo ↗`。列表頁可抽成共用 component/class，避免首頁與索引逐漸分叉。
- 12 欄、兩欄基礎網格，採 `6 + 6` 欄；用尺寸交錯而非任意 masonry：
  1. D1 主卡佔 7 欄、D2 佔 5 欄。
  2. D3 佔 5 欄、D4 主卡佔 7 欄。
  3. D5 與 D6 各佔 6 欄。
- 7 欄主卡採圖上文下，cover 比例 `16:9`，文字區 padding `28px`；5／6 欄卡採首頁橫卡 `5fr 6fr`，最小高 `240px`。同一列卡片底線對齊。
- 只有 D1 與 D4 使用較大版面，理由分別是「最直覺的轉換流程」與「端到端同步流程」；不可根據圖片好不好看臨時換主卡。
- 每卡右上狀態固定為藍點＋`LIVE DEMO`；代碼放在類型旁：`行銷頁面 · D1`。不得再用 D1–D6 巨大字母作封面或 fallback。
- 卡片整張可點；CTA 文案統一 `打開 Demo ↗`，箭頭使用 `↗` 表示進入獨立體驗，但若實際仍為同站同分頁，不強制 `target="_blank"`。
- 區塊間只用 `24px` gap，不加分類標題打斷六件作品；分類已在 hero「挑一個開始」完成。

### 4.3 平板與手機

- 平板 `641–980px`：全部回到兩欄等寬，但 D1、D4 可跨兩欄；跨欄卡使用橫向圖文，其餘採圖上文下。
- 手機取消大小交錯，全部使用首頁規格的緊湊橫卡：`112px minmax(0,1fr)`；圖片 1:1 裁切但保留主體，卡片最小高 `154px`，gap `14px`。
- 手機資訊順序：`LIVE DEMO＋代碼 → 標題 → hook → 打開 Demo ↗`。類型若空間不足可與代碼合併成一行，但不可隱藏 hook 或 CTA。
- 手機卡片 padding `16px`，文字區 gap `5px`；六卡總長目標約 `2–2.5` 個 390×844 viewport，不再出現六張接近一個 viewport 寬的大型圖片。
- 圖片載入失敗時沿用首頁藍色小方塊 fallback：暖白底中央 `28×28px` 品牌藍 voxel 方塊；不得顯示 72px 的 `D6` 或任何巨大字母。

### 4.4 狀態與無障礙

- `LIVE DEMO` 的藍點旁必須有文字，不可以顏色單獨表意。若日後某 Demo 暫停，狀態改為灰點＋`PREVIEW ONLY`，CTA 同步改文案，不假裝可操作。
- 每卡 link label：`打開 D1 手作烘焙預購頁 Demo`。圖片 alt 沿用 `works-data.js`，狀態點以 CSS 產生並 `aria-hidden`。
- 所有卡的 keyboard focus 與 hover 同等清楚；不可用自動播放、hover 才出現 CTA，或讓手機必須點兩次。

## 5. 動效與 reduced-motion

### 5.1 一般模式

- 只用 CSS 與現有原生 JS／`IntersectionObserver`，不新增 animation library、masonry 套件或 scroll framework。
- Hero：breadcrumb、eyebrow、H1、導言、選擇提示依序淡入，間隔 `70ms`；總時長不超過 `600ms`。
- 案例列：`opacity: 0; transform: translateY(14px)` 至原位，`520ms var(--ease-out)`；每列 stagger `55ms`、總延遲上限 `275ms`。左側路徑段以 `scaleY(0→1)` 畫入一次。
- Demo 卡：沿用首頁 reveal，`translateY(18px)`、`560ms`；同列兩卡相差 `70ms`，全區總延遲不超過 `280ms`。
- Hover／focus：圖片 `scale(1.025)`（`500ms`）、箭頭位移 `5px`（`220ms`）、border 轉 accent；案例長列最多 `translateY(-2px)`，Demo 卡最多 `translateY(-6px)`。
- 所有 reveal 只播放一次；不做 parallax、無限浮動、游標跟隨、卡片傾斜、自動輪播或影片預覽。

### 5.2 `prefers-reduced-motion: reduce`

- 所有內容初始 `opacity: 1; transform: none`；取消 stagger、路徑畫入、圖片縮放、箭頭位移與 smooth scroll。
- 案例 A→F 連線直接完整顯示；不可因取消 observer 而只亮 A 或隱藏後續段落。
- Hover／focus 只改 border、背景與文字顏色，transition 設為 `none` 或不超過 `80ms`。
- 功能、排序、狀態文字、CTA 與 focus ring 完整保留。

## 6. 深色模式

- 沿用首頁手動切換＋系統偏好：page `#0D0D0D`、card `#1A1A19`、raised `#201F1E`、primary `#FFF`、secondary `#C3C2B7`、gridline `#2C2C2A`、accent `#3987E5`、accent-ink `#9EC5F4`。
- 所有 voxel 封面保持原暖白 `#F4F3EE`，不得 invert、hue-rotate、mix-blend-mode；以 `1px rgba(255,255,255,.12)` 邊界呈現燈箱。必要時只可加 `rgba(13,13,13,.06–.08)` 單層 overlay 降低刺眼。
- 案例長列預設不做深色卡片塊，維持 page 底＋gridline；hover 才使用 `#1A1A19`，以免六列變成另一堵卡片牆。
- Demo 卡使用 `#1A1A19`、border 分層與 `0 16px 36px rgba(0,0,0,.32)`；不用更濃黑影、藍色外光或玻璃模糊。
- 成果數字、LIVE 狀態與 focus 使用 accent-ink／accent；muted 不承載成果、可操作狀態或必要聲明。正文對比至少 4.5:1。

## 7. 與首頁、內頁的動線銜接

### 7.1 Header 與 breadcrumb

- 兩頁 header 都提供首頁、另一個索引與聯絡入口；當頁使用 `aria-current="page"`。
- breadcrumb 是頁首第一個內容連結，文案固定 `← 回首頁看完整路徑`；桌機與手機都顯示，不因已有品牌 logo 而省略。
- 若使用者從首頁 hash 區塊進入，返回連結仍回 `../index.html` 頁首；頁尾另提供精確入口 `首頁的案例精選`（`../index.html#featured-works`）或 `首頁的 Demo 精選`（`../index.html#demos`）。

### 7.2 清單進內頁

- 案例整列進既有 `cases/<slug>/index.html`；代碼、標題、hook、stat 全部來自同一份 `works-data.js`，索引不得另寫一份重複資料。
- Demo 整卡進既有 `demos/<slug>/index.html`；索引與首頁共用 demo3 renderer／markup 語言，僅由 layout modifier 決定主卡或緊湊卡。
- 內頁既有上一篇／下一篇順序應維持資料陣列順序，使案例 A→F、Demo D1→D6 在索引與內頁一致；若目前不一致，列為後續實作檢查，不在本輪文件外修改。

### 7.3 清單之後的 next action

- 案例頁清單後放雙向 bridge stage：主文 `看完怎麼解題，接著看它如何被做成可操作介面。`；主 CTA `看 6 個 Demo →`，次連結 `回首頁看完整方法`。
- Demo 頁清單後放對應 bridge：主文 `想看的不只是介面？案例裡有真問題、判斷與成果數字。`；主 CTA `看 6 個案例 →`，次連結 `回首頁看完整方法`。
- bridge 下方加小型聯絡入口：`有相似任務？直接談需求 →`，連至 `../index.html#contact`；不可在索引頁另複製完整聯絡表單。
- Footer 沿用首頁三欄結構與收束語，至少含首頁／案例／Demo／聯絡／回到頂端。刪除目前孤立的 footer 小字返回連結，因為返回與跨頁動線已在 header、breadcrumb、bridge 三處清楚提供。

## 8. 圖像資產決策

### 8.1 不需新生成

本輪索引改版**不需要新生成圖檔**。理由：

- 六張案例封面已完整存在於 `assets/img/cases/<slug>.webp`，檔名與 `works-data.js` 一致，可直接用於編輯型長列。
- 六張 Demo 封面已完整存在於 `assets/img/demos/<slug>.webp`，且首頁已使用同一套 demo3 視覺語言；索引應沿用以建立一致性，不應為列表頁另造收藏封面。
- 大小交錯由 CSS 版面與既有 3:2 圖的裁切完成；不為 7 欄／5 欄卡建立重複圖片版本，避免維護與下載成本。

### 8.2 沿用檔名

- 案例：`frozen-food.webp`、`marital-property.webp`、`trip-pricing.webp`、`nutrition-liff.webp`、`label-compliance.webp`、`video-production.webp`。
- Demo：`bakery.webp`、`esg.webp`、`ai-service.webp`、`order.webp`、`roulette.webp`、`streamer_ai.webp`。
- 所有圖仍須符合 `VOXEL_STYLE_GUIDE.md`：左前上方等角正交視角、單一漂浮方形底座、純暖白背景、霧面 voxel、品牌藍為主、琥珀最多一個、無文字／字母／數字／logo／UI 字樣。
- 若未來某張需重生，必須覆蓋相同檔名與尺寸規格 `1200×800`、3:2、WebP `≤150KB`；不得新增 `*-index.webp` 或 `*-mobile.webp` 分支。

## 9. 刪除／保留清單

### 9.1 刪除或降級

- 刪除兩頁共用的 `3×2` 等尺寸 `.works-grid` 表現；資料來源保留，layout 分開。
- 刪除案例頁六張獨立浮卡、相同陰影與相同圖片高度；改為有序長列與 A→F 路徑。
- 刪除 Demo 頁與首頁不一致的通用 `work-card` 呈現；改用首頁 demo3 component 語言。
- 刪除缺圖時的大型字母／代碼＋漸層 fallback；改為暖白底＋品牌藍小方塊。
- 刪除 footer 唯一且微小的「回作品集首頁」動線；由 breadcrumb、完整 footer 與 bridge 取代。
- 刪除 Demo 聲明在頂部與 footer 的逐字重複；必要聲明只出現一次，footer 可放較短補充。
- 刪除整列／整卡內重複的第二個 `<a>`；CTA 文字只是主連結的視覺提示。
- 刪除 hover 才顯示的重要資訊、自動輪播、masonry JS、parallax、傾斜、發光、彩色漸層與持續漂浮。
- 不在索引頁新增篩選器、搜尋框或分類 tabs；目前各六件，額外控制只會增加選擇成本。作品達 12 件以上再評估。

### 9.2 保留並強化

- 保留文青灰調、Noto Serif TC 標題、Noto Sans TC 正文、單一品牌藍與暖白 voxel 燈箱。
- 保留六案例 A→F、六 Demo D1→D6 的資料順序、全部既有標題、hook、成果數字與連結。
- 保留卡片／整列可點、圖片 alt、鍵盤 focus、sticky header、主題切換與 `mailto:` 聯絡路徑。
- 保留 `works-data.js` 作為唯一作品資料來源；必要時只擴充 renderer 或 layout modifier，不在 HTML 複製資料。
- 保留 `IntersectionObserver` reveal，但降低移動距離、限制 stagger，並完整支援 `prefers-reduced-motion` 與無 JS 顯示。
- 保留深色模式下 voxel 圖不反相的原則，使用邊框而非重陰影維持層次。
- 保留首頁精選、索引全覽、內頁細讀三層資訊架構，並讓每層都有前進、跨分支與回首頁入口。

## 10. 實作驗收

- 1440px：案例首屏可看見 hero 與 A 列上緣；六案清楚讀成 A→F，不像六張同權卡片。Demo 首屏可看見 hero 與第一列 7/5 欄交錯。
- 390×844：breadcrumb、H1、導言與選擇提示先於作品；案例每列保留封面、真問題、成果與箭頭，Demo 六卡在約 2–2.5 個 viewport 內完成。
- 案例 `stat`、Demo `hook` 與所有連結皆由 `works-data.js` 產生；不可在兩個索引 HTML 手動複製六份資料。
- 鍵盤順序為 header → breadcrumb → 作品 1–6 → bridge → footer；每個 focus 清楚可見，整卡不產生巢狀連結。
- 關閉 JS 時清單內容與連結仍可見；缺圖不顯示巨大字母。reduced motion 下沒有初始隱藏、stagger、smooth scroll 或狀態資訊缺失。
- 深色模式正文對比至少 4.5:1；所有 voxel 圖維持暖白原色，不反相、不染色。
- 圖片皆標示 width／height、非首屏圖片 `loading="lazy"`、`decoding="async"`；不新增第三方 JS 或新圖資下載。
- 手機、桌機皆至少在 header／breadcrumb／清單後 bridge 三個階段提供明確跨頁路徑；footer 不再是唯一回首頁方式。
