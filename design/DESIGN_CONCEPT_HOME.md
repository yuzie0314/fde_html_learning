# 首頁改版規格：把混亂變成路徑

> 文件目的：提供可直接套入 `index.html`、`assets/portfolio-theme.css`、`assets/works-data.js` 與少量原生 JS 的首頁改版規格。本文件只定義首頁；案例內頁與 Demo 內頁不改。視覺唯一依據仍為 `design/VOXEL_STYLE_GUIDE.md`。

## 1. 三句診斷

1. 首屏目前是「標題＋單張圖＋兩個按鈕」的平均構圖，標題、圖與證據彼此等重，缺少一眼能讀到的成果數字、職能定位與往下探索的視覺懸念。
2. 六個案例與六個 Demo 都使用等尺寸、等密度卡片，桌機缺乏主次節奏，手機更形成十二張近似卡片的長列表，使用者無法快速判斷「先看哪一個最能證明能力」。
3. 流程、聯絡與 footer 都是靜態資訊塊，沒有把「模糊需求 → 找出真正問題 → 可驗收成果」串成連續故事，也沒有在每一段落結尾提供明確 next action。

## 2. 概念名稱與敘事

### 概念名稱：把混亂變成路徑（From Tangle to Trail）

首頁不是專案目錄，而是一條由左至右、由亂至清楚的解題路徑。Hero 的 voxel 場景先呈現一團墨灰線路，品牌藍的「門／路徑」把它轉成整齊交付物；往下捲時，藍色路徑在案例、流程與 Demo 間以細線、編號和方向箭頭反覆出現。敘事順序固定為：**我處理什麼 → 我曾交付什麼成果 → 我如何做 → 你可以親手驗證 → 下一步與我談。**

採用 Dribbble 常見且適合此站的手法，但不照搬其高彩或玻璃質感：大型 editorial display 字體、不對稱 hero、bento 主次層級、低調 scroll reveal、數字證據、每屏單一主 CTA。文青灰調、Noto Serif TC 與 voxel diorama 是辨識核心。

## 3. 全域規格

### 3.1 版心、格線與斷點

- 桌機版心：`max-width: 1200px`；左右 padding `32px`；12 欄，欄距 `24px`。
- 平板 `641–980px`：左右 padding `24px`；6 欄，欄距 `20px`。
- 手機 `≤640px`：左右 padding `18px`；4 欄，欄距 `12px`。
- 區塊垂直距離：桌機 `120px`、平板 `88px`、手機 `72px`。區塊內標題至內容：桌機 `40px`、手機 `28px`。
- 卡片圓角統一 `16px`，小元件 `8px`，pill `999px`；最小點擊區 `44×44px`。

### 3.2 字體階層

- Display / H1：Noto Serif TC 600，`clamp(44px, 6.2vw, 80px)`，行高 `1.12`，字距 `-0.02em`，桌機最多 `9.5ch`；手機 `40–48px`、最多 `10ch`。
- 區塊 H2：Noto Serif TC 600，`clamp(30px, 3.6vw, 48px)`，行高 `1.2`。
- 精選案例 H3：Noto Serif TC 600，`28–34px`；一般卡片標題維持 Noto Sans TC 700，`18–20px`。
- 導言：Noto Sans TC 400，桌機 `18px/1.75`，手機 `16px/1.7`，最多 `34ch`。
- Eyebrow / label：`12px/1.4`，600，字距 `0.08em`；數字使用 tabular nums。
- 每段正文最大 `58ch`；不得用縮小字級塞入更多資訊。

### 3.3 Token

沿用現有色彩語意，新增／調整以下首頁 token：

```css
:root {
  --container-home: 1200px;
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
  --amber: #EDA100;
  --radius-card: 16px;
  --shadow-rest: 0 1px 2px rgba(11,11,11,.04), 0 10px 30px rgba(11,11,11,.055);
  --shadow-hover: 0 2px 6px rgba(11,11,11,.06), 0 18px 42px rgba(11,11,11,.11);
  --ease-out: cubic-bezier(.22,1,.36,1);
}
```

藍色只用於路徑、主 CTA、數字證據與互動狀態；琥珀只用於「被找到的問題」且每個 viewport 同時最多一處。不得加入新的彩色漸層、glassmorphism 或霓虹。

### 3.4 動效總則

- 限 CSS 與原生 JS；不加入 animation library、canvas、WebGL 或輪播套件。
- 原生 `IntersectionObserver` 在元素進入 viewport `15%` 時加入 `.is-visible`；只播放一次。預設 `opacity:0; transform:translateY(20px)`，進場 `600ms var(--ease-out)`。
- 同組卡片 stagger 只以 CSS custom property `--i` 計算，每張相差 `70ms`，總延遲不得超過 `350ms`。
- hover 僅限可互動物件：卡片 `translateY(-6px)`、圖 `scale(1.025)`、箭頭 `translateX(5px)`，`220–500ms`。不讓頁面內容持續漂浮。
- Hero 唯一環境動效：藍色路徑由 `scaleX(0)` 畫至 `1`（`900ms`），琥珀問題方塊淡入一次；圖片本體不做無限循環。
- 捲動故事只切換 class、`aria-current` 與 CSS 變數；scroll listener 必須用 `requestAnimationFrame` 節流，不逐幀改大量 DOM。
- `prefers-reduced-motion: reduce`：移除 transform、stagger、路徑繪製與 smooth scroll；所有內容初始即顯示，hover 只改 border/color，故事線改為靜態完整線段。功能與資訊不得減少。

### 3.5 深色模式

- 沿用系統偏好＋手動切換；深色值：page `#0D0D0D`、card `#1A1A19`、raised `#201F1E`、primary `#FFF`、secondary `#C3C2B7`、gridline `#2C2C2A`、accent `#3987E5`、accent-ink `#9EC5F4`。
- Voxel 圖不得套 invert、mix-blend-mode 或色相濾鏡；維持暖白攝影棚背景，作為深色頁面的「展台燈箱」。燈箱邊界用 `rgba(255,255,255,.12)`，避免純白刺眼可加單層 `rgba(13,13,13,.08)` overlay，但不可改圖中色彩。
- 深色卡片不用更重黑影，改用邊框＋`0 16px 36px rgba(0,0,0,.32)`；正文對比至少 4.5:1，muted 文字不可承載關鍵成果。

## 4. 逐區塊規格

### A. Hero：先看見「亂 → 清楚」

**版面**

- 桌機首屏扣除 disclaimer/header 後 `min-height: min(760px, calc(100svh - 92px))`，12 欄：文案 7 欄、圖像 5 欄。圖像略向右溢出版心 `48px`，形成不對稱張力。
- H1 攬成三行節奏：「把講不清楚的問題，／變成能決策、能驗收的／交付物。」最後一行或「能驗收」用 accent-ink，不使用整段藍字。
- Eyebrow 下新增一行 availability pill：「FDE × Data Scientist｜可承接需求釐清、原型、分析交付」。
- 導言後放主 CTA「看 3 個代表案例 ↓」與文字連結「直接談需求 →」。主 CTA 指向 `#featured-works`；次 CTA 指向 `#contact`。
- CTA 下加一列 3 個 proof chips：`6 個案例`、`13/13 驗收通過`、`最高釐清 NT$2.78M 爭議`。數字 22px Serif，說明 12px Sans；若數字無法由資料證明就不顯示。
- Hero 底部左側放 scroll cue：「SCROLL TO TRACE THE PATH」＋ 48px 藍色細線；桌機可見，手機改「往下看案例 ↓」。
- 手機順序必須為 eyebrow → H1 → 導言 → CTA → proof chips（橫向可換行）→ 圖；不可像現況把圖放在標題前。Hero 圖 3:2 全寬，首屏底部露出圖的上緣約 `48–80px`，製造續捲暗示。

**動效**

- 首次載入：eyebrow、H1、導言、actions 依序淡入（每項 `80ms`）；圖片在 `160ms` 後由 `translateY(12px) scale(.985)` 歸位。
- 圖內若另有 HTML overlay，只讓藍色路徑線畫入一次。圖片本身不可跟隨游標傾斜，以免破壞正交視角。

**深色**：圖保持暖白燈箱；proof chips 使用透明背景＋亮色細框，不使用大面積藍底。

### B. 案例：一主兩輔的成果 Bento

**版面**

- 標題列改為 eyebrow「SELECTED OUTCOMES」、H2「先看成果，再看怎麼做到」、右側「查看全部 6 件 →」。標題下加一句 48ch 內導讀。
- 首屏只精選 3 案，固定以可量化成果最強的三案為優先：A 冷凍食品經銷沖帳診斷、B 婚後財產交易追溯、C 旅遊行程估價原型。其餘三案由「查看全部」進案例索引，不在首頁完整展開。
- 12 欄 bento：主案例 A 佔 7 欄、跨 2 列；B、C 各佔 5 欄、1 列。主卡圖文比例約 60/40；輔卡桌機採圖左文右或較扁的 5:3 圖。
- 每張卡固定資訊順序：類型＋代碼 → 標題 → 一句真問題 → 成果數字 → CTA「讀案例，約 4 分鐘 →」。主卡加「FEATURED」標記，但不加星星或火焰圖示。
- 成果數字用 Serif `32–44px`；資料來源直接沿用 `works-data.js` 的 `stat`。卡片整張可點，仍需保留可見 focus ring。
- 手機改為 1 欄：主案例完整卡；B、C 變緊湊橫卡（縮圖 112×112、文案在右），整個案例區在約 2.2 個手機 viewport 內結束。

**動效**

- bento 依閱讀順序 reveal；桌機 hover 時只提升卡片、圖片放大與箭頭位移。
- 主卡可用 CSS `::after` 畫一條從「真問題」到成果數字的藍色 1px 路徑；進入 viewport 後畫入。手機與 reduced motion 顯示完整靜態線。

**深色**：卡片以邊框分層，圖片仍為暖白；成果數字使用 accent-ink，不使用發光。

### C. 流程：黏住的三幕 Scroll Story

**版面**

- 桌機改為兩欄：左 5 欄為 `position: sticky; top: 140px` 的標題與一句承諾；右 7 欄垂直排列三幕，每幕 `min-height: 42vh`。
- 三幕文案固定：`01 先聽原話`／保留客戶不清楚的描述；`02 找真正問題`／指出決策、資料或流程阻塞；`03 交可驗收成果`／列明規格、原型、數字或操作入口。
- 每幕包含：40px Serif 編號、20px 標題、最多兩行說明、1 個「輸出物」pill。右側以一條 2px 灰線串接，active 段變藍。
- 第三幕下方放 next action「看我如何把流程做成可操作 Demo ↓」。
- 手機取消 sticky，變成三張無陰影 timeline row；間距 `24px`，整段不得超過一個半 viewport。

**動效**

- IntersectionObserver 以每幕中心進入 viewport 時切換 `.is-active` 與 `aria-current="step"`；active 僅改線色、編號底色與內容 opacity，不做水平位移。
- reduced motion 顯示全部 active 樣式，不做狀態切換。

**深色**：非 active 線 `#2C2C2A`，active `#3987E5`；卡面避免比頁底亮超過一級。

### D. Demo：能立即操作的證明

**版面**

- 標題：「不只提案，也把它做成能操作的東西」；副文「挑一個，30 秒內開始操作。」右側保留「全部 6 個 Demo →」。
- 首頁顯示 4 個，不再顯示 6 張大圖卡：D1、D2、D3、D6 優先，覆蓋預購、平台、AI 客服、直播 AI 四種能力。其餘由索引承接。
- 12 欄 bento：D1、D3 各 6 欄主卡；D2、D6 各 6 欄緊湊卡。每卡包含真實 voxel 圖、類型、名稱、單句可做的事、主動詞 CTA「打開 Demo ↗」。
- 卡片右上角放狀態點＋「LIVE DEMO」，不要再用巨大的 D1–D6 字母當主視覺；代碼只留在小 label。
- 手機全部改為 `grid-template-columns: 112px 1fr` 的橫卡，圖片正方形裁切；四張約 1.5–2 個 viewport。載入失敗 fallback 使用品牌藍小方塊圖樣，不顯示 72px 字母。

**動效**

- hover/focus：狀態點由灰轉藍、CTA 箭頭位移、圖 `scale(1.025)`；禁止自動播放 demo 預覽。
- 卡片進場 stagger 上限 `210ms`；reduced motion 立即顯示。

**深色**：LIVE 狀態仍用藍，不引入螢光綠；暖白圖面與深色卡身之間保留 1px border。

### E. 聯絡：把 next action 說清楚

**版面**

- 改成全寬 12 欄 CTA stage，桌機 `min-height: 360px`。左 8 欄：eyebrow「NEXT CLEAR STEP」、H2「有個說不清楚、但必須推進的問題？」、一句回覆預期；右 4 欄為主 CTA。
- 主 CTA 文案「寄信描述你的卡點 →」，次行保留 email；旁邊提供「複製 Email」button。若不能可靠偵測剪貼簿，只保留 `mailto:`。
- 加 3 個低調信任點：`先釐清，不急著賣方案`、`可從一次 30 分鐘討論開始`、`通常 2 個工作日內回覆`。最後一點必須符合真實承諾，否則刪除。
- 主 CTA 後提供備用 next action：「還沒準備聯絡？先看最完整案例 →」。
- 手機順序：標題 → 信任點 → email CTA → 備用連結；CTA 全寬。

**動效**

- 進入 viewport 時，一條藍色路徑從左側標題連到 CTA；按下 copy 後文字切為「已複製」2 秒，使用 `aria-live="polite"`，不使用 toast 套件。
- reduced motion 路徑靜態顯示；copy 回饋仍保留。

**深色**：stage 使用 `#1A1A19`，主 CTA 使用 `#3987E5`；不把整個區塊改成藍底。

### F. Footer：快速收尾，不再重講一次

**版面**

- 移除目前的大段定位文與重複聲明。桌機三欄：品牌／角色、頁內導覽、法律與 Demo 聲明；底列為 `© 年份 Zorya`、所在地／時區（若願意公開）、回到頂端。
- Footer 上緣保留一句 Serif 收束語：「交付物的價值，是讓下一個決定變清楚。」字級 `24–30px`，但不再加 CTA。
- 聲明濃縮為最多 2 段、每段 2 行；手機改 accordion 不是必要，直接順排更穩定。
- 手機上下 padding `48px`，總高度控制在一個 viewport 內。

**動效**：只有「回到頂端」箭頭 hover 位移；reduced motion 使用瞬間跳轉。

**深色**：與 page 同底色，以 top border 分隔；避免另一張大卡造成假結尾。

## 5. 新生成圖檔與場景

所有新圖都必須逐字套用 `VOXEL_STYLE_GUIDE.md` §2 共用前綴，並通過 §4 checklist：固定左前上方等角正交視角、單一漂浮方形底座、純暖白 `#F4F3EE` 背景、霧面方塊、品牌藍為主、琥珀最多一個、無文字／字母／數字／logo／UI 字樣。

1. `assets/img/hero-path.webp`，1536×1024、3:2、≤220KB：左側是一團墨灰 voxel 線纜與散落紙塊，中間是一個品牌藍方塊門框／分流閘門，穿過後變成三條整齊藍色軌道，連到右側堆疊整齊的文件、資料表與小型可操作面板；只有一顆琥珀方塊標記被找到的真正問題。主體略偏右，左下保留約 22% 安全空間供構圖呼吸，不在圖片內放文字。
2. `assets/img/demos/bakery.webp`，1200×800、3:2、≤150KB：藍白烘焙預購台，一側是產品方塊、一側是訂單托盤，藍色路徑連接選品到取貨；無品牌與價目文字。
3. `assets/img/demos/esg.webp`，1200×800、3:2、≤150KB：三座不同高度的藍灰資料柱與一個平衡平台，方塊節點匯入中央報表面板；不得使用人物性別符號或文字。
4. `assets/img/demos/ai-service.webp`，1200×800、3:2、≤150KB：訊息方塊由左側佇列進入中央藍色處理閘門，右側分流成回覆卡與需人工處理的一顆琥珀方塊；不可畫聊天文字。
5. `assets/img/demos/streamer_ai.webp`，1200×800、3:2、≤150KB：小型直播桌、藍色螢幕色塊、訊息方塊與輔助提示面板，所有螢幕只顯示抽象色塊；不要麥克風 logo 或平台標誌。

現有 `assets/img/cases/<slug>.webp` 六張案例封面若已通過規範則全部沿用，不重生。Hero 改版驗收後以 `hero-path.webp` 取代頁面使用的 `hero.webp`；若要避免改引用，可於實作階段轉存成既有 `hero.webp`，但來源與最終檔名只能保留一套，避免重複下載。

## 6. 刪除／保留清單

### 刪除或降級

- 刪除首頁一次展開 6 案例＋6 Demo 的做法；首頁改為 3 案例＋4 Demo，其餘走索引。
- 刪除 Demo 缺圖時以巨大 `D1–D6` 當主視覺的 fallback。
- 刪除 Hero 圖在手機排到標題前面的規則。
- 刪除案例卡全部等尺寸、等權重的 3×2 棋盤格。
- 刪除 footer 重複的大段定位宣言；聲明濃縮，避免聯絡卡後又出現第二個主敘事。
- 刪除沒有資訊目的的持續漂浮、parallax、游標傾斜、發光與彩色漸層構想。
- disclaimer strip 若非法律必要，移至 footer；若必要則保留但限一行、可讀字級至少 12px，不佔用首屏注意力。

### 保留並強化

- 保留「把講不清楚的問題，變成講得清楚的交付物」核心定位，改寫為更短、更可掃讀的三行 display 節奏。
- 保留 Noto Serif TC 標題、Noto Sans TC 正文、文青灰調與單一品牌藍。
- 保留所有既有案例資料、可證明的成果數字、案例／Demo 索引頁與卡片整張可點行為。
- 保留 voxel isometric diorama 語言、暖白燈箱與深色模式下圖片不反相原則。
- 保留 sticky header、主題切換、鍵盤 focus、`IntersectionObserver` reveal 與 `prefers-reduced-motion` 支援；改成更有節奏但不增加依賴。
- 保留 `mailto:` 作為零依賴、可靠的主要聯絡方式。

## 7. 實作驗收指標

- 1440px 桌機首屏同時看得到完整 H1、主 CTA、3 個成果證據，以及 hero 圖的主要隱喻。
- 390×844 手機首屏先讀到定位與 CTA，且下緣露出 hero 圖或 scroll cue；不可先看到大圖再找定位。
- 使用鍵盤可依合理順序到達導覽、Hero CTA、3 個案例、4 個 Demo、聯絡 CTA；所有 focus 清楚可見。
- 關閉 JS 時核心內容與連結仍可見；圖片 fallback 不顯示巨大代碼。
- reduced motion 下沒有元素先隱藏、沒有平滑捲動、沒有必要資訊依賴動畫狀態。
- 深色模式正文／背景至少 4.5:1；暖白 voxel 圖不反相、不染色。
- LCP 優先載入 hero，其他圖 `loading="lazy"`；首屏不新增第三方 JS，所有互動只用 CSS／原生 JS。
- 首頁長度較現況手機版至少縮短約 30%，但仍保有完整的定位、證據、方法、可操作能力與聯絡路徑。

