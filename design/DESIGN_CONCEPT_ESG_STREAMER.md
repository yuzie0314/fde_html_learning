# ESG × Streamer AI｜可直接實作的設計概念規格

> 文件性質：視覺與介面實作規格。適用 `demos/esg`、`demos/streamer_ai`。本文件不改變既有功能、文案語意與資料流程。
>
> 設計基準：沿用 `assets/portfolio-theme.css`；新增頁面色彩只取文青色盤 `#9db49a / #cdb59b / #9fb4c7 / #d3a6a6 / #b4a9cb / #c9c2b2`。禁止漸層、霓虹與發光效果。

## 0. 兩頁共用基準

### 0.1 Token 使用原則

- 頁面、卡片與文字：`--surface-page`、`--surface-card`、`--surface-raised`、`--ink-primary`、`--ink-secondary`、`--ink-muted`。
- 分隔與描邊：一般用 `--gridline` 或 `--border`；選取、鍵盤焦點與重要元件用 `--border-strong` 或 `--accent`。
- 主要動作：`--accent`；文字連結與小標：`--accent-ink`；柔和選取底：`--accent-soft`。
- 成功／提醒：只在語意成立時使用 `--good`、`--good-soft`、`--warn`、`--warn-soft`，不可拿來純裝飾。
- 陰影：全頁最多一個主展示容器使用 `--shadow-card`；內層卡片原則上無陰影。
- 間距只用 `--space-1` 至 `--space-7`（8 / 16 / 24 / 32 / 48 / 64 / 96px）；12px、20px 僅可作元件內部微調。
- 圓角：操作元件 `--radius-sm` 4px；一般卡片 `--radius-md` 8px；產品 mockup 外框可例外 12px。膠囊只保留給狀態／分類標籤，不作為所有按鈕的預設造型。
- 文青色盤是「區塊識別色」，不是新品牌色：鼠尾草 `#9db49a`、奶茶 `#cdb59b`、霧藍 `#9fb4c7`、灰粉 `#d3a6a6`、灰紫 `#b4a9cb`、暖灰褐 `#c9c2b2`。大面積使用時與 `--surface-card` 以 18–28% 混色；實作若不採 `color-mix()`，使用設計工具取等效淺色固定值。文字仍使用 ink token，避免直接以色盤原色承載小字。

### 0.2 字體層級

| 層級 | 字體 | 桌機 | 手機 | 其他 |
|---|---|---:|---:|---|
| Display / H1 | `--font-serif`，600 | `clamp(36px, 4.6vw, 46px)` | 30–34px | line-height 1.22–1.28，letter-spacing .01em |
| H2 | `--font-serif`，600 | 28–30px | 24–26px | line-height 1.35 |
| H3 / 卡名 | `--font-sans`，700 | 16–18px | 16px | line-height 1.45 |
| Lede | `--font-sans`，400 | 17–18px | 16px | line-height 1.75，`--ink-secondary` |
| Body | `--font-sans`，400 | 15–16px | 15–16px | line-height 1.7 |
| Eyebrow | `--font-sans`，600 | 13px | 12–13px | .06–.08em tracking、`--accent-ink` |
| Meta / Caption | `--font-sans`，400–600 | 12–13px | 12px | `--ink-muted`；數字加 `.num` |

### 0.3 共用互動狀態

- 所有可操作項目以原生 `button` / `a` / `input` 實作，最小點擊範圍 44×44px。
- `hover`：只允許邊框轉 `--accent`、背景轉 `--accent-soft` 或位移 `translateY(-1px)`；不可發光。
- `active`：取消位移，背景加深一階；不可用縮放造成跳動。
- `focus-visible`：2px `--accent` 外框、2px offset，不能只靠顏色或移除 outline。
- `selected / aria-pressed="true"`：`--accent-soft` 底、`--accent` 2px 邊、主文字 `--accent-ink`；另加勾選圖示或文字，不只改色。
- `disabled`：opacity .45、cursor `not-allowed`，不保留 hover 位移。
- 深色主題一律讓共用 token 接管表面與文字；文青色只作小面積識別條／色塊，禁止硬編碼整片深藍或純白字。
- 動畫 150–200ms ease；尊重 `prefers-reduced-motion`。生成圖不做漂浮、呼吸或視差動畫。

---

## 1. `demos/esg`：多語學習護照（Multilingual Learning Passport）

### 1.1 概念說明

把「選語言 → 微課程 → 測驗 → 發證 → 企業進度」設計成一張可展開的學習護照。視覺結合高評價 SaaS landing 的大量留白、bento grid 的資訊分組，以及證書／票券的輕量 skeuomorphic 暗示：保留紙張邊線、章印與打孔／序號感，但全部收斂為平塗、細線與低飽和色。核心印象應是可信、國際化、有作品集編輯感，而非通用 LMS 後台。

### 1.2 全頁骨架

**桌機（≥821px）**

- 使用 `.wrap`，最大寬 `--container` 1080px，左右 `--space-3`。
- Hero：12 欄 grid，文字 5 欄、視覺 7 欄，gap `--space-5`；上下 `--space-6 / --space-5`。
- 互動區：標題後為 12 欄 bento；主要學習面板佔 8 欄，右側流程／狀態卡佔 4 欄。切到戰情室時改為 KPI 4+4+4、下方圖表 8+4。
- 區塊以 `--space-7` 垂直分段，區間只用 `1px solid --gridline`，不以不同滿版背景切割。

**手機（≤820px）**

- 所有 `.wrap` 必須保留左右 `--space-3`；禁止 `.hero` shorthand 覆蓋水平 padding。
- Hero 單欄：文案在前、主圖在後，gap `--space-4`；上下 `--space-5 / --space-4`。
- Bento 全部單欄；導覽 tab 可保持雙項，但每項 min-height 44px、等寬。
- 內容順序：頁面敘事 → 生成圖 → 立即體驗標題 → 模式切換 → 主要任務 → 輔助狀態。避免使用者先看 KPI 才找到操作。

### 1.3 Hero：作品敘事＋voxel 主圖

**結構**

- 左欄依序：eyebrow「練習 DEMO ・ 多語系平台」、H1、2–3 行 lede、context line。
- H1 控制在桌機 2 行、手機 3 行內；`max-width: 15ch`。
- context line 改為三個短詞組，以細點 `·` 分隔；左側保留 2px `--border-strong`，padding-left `--space-2`。
- 右欄為 3:2 產品展示框：`--surface-card`、1px `--gridline`、12px 圓角、`--shadow-card`；圖片滿版但四周保留 8px 內框，呈現 curated mockup，而非裝飾 banner。

**手機**

- 文案與主圖間距 `--space-4`；展示框寬 100%、aspect-ratio 3/2。
- context line 若超過三行，改成垂直三列，列距 6px，不縮小至 13px 以下。

**生成圖規格**

- 檔名：`assets/img/demos/esg/hero-voxel.webp`。
- 生成母檔：1536×1024（3:2）；輸出 WebP 1536×1024、≤220KB。
- 嚴格遵守 `design/VOXEL_STYLE_GUIDE.md`：左前上等角正交視角、單一漂浮方形底座、純暖白 `#F4F3EE` 背景、方塊造型、無文字／字母／數字／logo／UI 文案、無漸層與霓虹。
- 場景：五位簡化 voxel 學員圍著培訓螢幕；螢幕只用五個無字色塊表示多語；旁置證書紙、抽象 QR 方格、企業圖表螢幕。品牌藍為主，家具淺木色，可有少量鼠尾草，唯一琥珀物件為認證印章。
- 圖片 alt 描述場景功能，不描述純裝飾色彩；載入失敗 fallback 為 `--surface-card`＋細格線，不使用任何漸層。

### 1.4 「立即體驗」區頭與模式切換

- section head 寬 68ch；kicker 13px、H2 28–30px、說明 16px；下方留 `--space-4`。
- 「培訓認證／企業戰情室」使用 segmented control，不使用兩顆漂浮小按鈕。外框 1px `--border-strong`、4px 圓角、padding 4px、底 `--surface-card`；按鈕 min-height 44px、padding 0 `--space-2`。
- 未選：透明、`--ink-secondary`；選取：`--accent-soft`、`--accent-ink`，內框 1px `--accent`。模式切換需有 `aria-selected` 或 `aria-pressed`。
- 手機寬 100%，兩項各 1fr；控制與主要面板間距 `--space-3`。

### 1.5 培訓模式 Bento

**桌機結構**

- 主卡（8 欄）：語言選擇／課程／測驗依狀態替換；padding `--space-4`，8px 圓角，1px `--gridline`，唯一可使用 `--shadow-card` 的互動主容器。
- 側卡（4 欄）：固定顯示 4 階段流程「選語言、學習、測驗、發證」；每列 44px，左側 24px 方形編號，列間 1px `--gridline`。已完成用 `--good-soft`，目前階段用 `--accent-soft`，未完成用 `--surface-card`。
- 主卡標籤「AI-Bridge・多語生成」改為小型矩形章：12px、600、4px 圓角、鼠尾草 22% 淺底、墨灰字；不使用純藍膠囊。

**語言選擇器**

- 桌機 2 欄、gap `--space-2`；每項 min-height 72px，padding `--space-2`，4px 圓角、1px `--gridline`，無陰影。
- 手機改單欄，避免 Bahasa Indonesia／Tiếng Việt 折行造成不等高；若 ≥430px 可兩欄，但卡片 min-height 88px 且名稱最多兩行。
- 語言代碼方塊 36×36px、4px 圓角、墨灰字；五語依序使用鼠尾草、霧藍、奶茶、灰粉、灰紫的 35–45% 淺底。不得使用國旗紅／飽和藍。
- 名稱 16px/700，英文別名 12px `--ink-muted`。整張必須是 button；selected 狀態依共用規格並在右上顯示 16px check。

**課程／測驗狀態**

- 課程標題與語音控制桌機同列、手機上下排列；語音按鈕 44px 高，圖示＋「朗讀」，`aria-pressed` 表示播放狀態。
- 選項採 1px 分隔列，不再每個都做浮卡；每列 min-height 52px、padding 12px `--space-2`。正確為 `--good-soft`＋`--good` 左條，錯誤為灰粉 22% 底＋`--ink-primary` 左條；不能只以紅綠辨識，需附「正確／再試一次」。
- 主要 CTA 使用 `--accent` 平塗、4px 圓角、min-height 44px；次要 CTA 為 `--surface-card`＋`--border-strong`。

### 1.6 電子證書：平塗票券

- 定位為 bento 中的「完成成果」，桌機寬 100%、max-width 680px；手機滿寬。
- 背景固定 `--surface-raised` 或奶茶 12–18% 淺底，禁止米金漸層；1px `--border-strong` 外框＋內縮 8px 的 1px `--gridline`，8px 圓角。
- 上下邊可用 8px 間距的短虛線／圓孔暗示票券，但不得使用仿真紙紋、金箔、厚陰影。
- 標題 `--font-serif` 26px（手機 22px）；姓名／課程 16px；編號與日期 12px `.num`、`--ink-muted`。
- 認證章為 48px 平塗圓章：`--warn-soft` 底、`--warn` 1px 外圈、墨灰簡化 check；全證書唯一琥珀重點。QR 使用 CSS／SVG 黑灰方格，不生成可誤掃的真 QR。
- 完成動畫只允許 160ms opacity＋translateY(4px→0)，不使用閃光、粒子或 glow。

**完成回饋像素圖（可選，若實作空間足夠才加入）**

- 檔名：`assets/img/demos/esg/completion-pixel.png`。
- 生成母檔 1024×1024；交付保留母檔，另輸出 128×128 PNG（網頁顯示 64–96px，`image-rendering: pixelated`）。
- 規格沿用 `design/CATS_IMAGE_BRIEF.md` 的像素硬性條件：復古 16-bit、大顆方形像素、深色清楚描邊、平塗、約 8–12 色、無抗鋸齒／柔邊／3D／漸層／文字／logo；純暖白 `#F4F3EE` 背景、主體置中且四邊留 10%。
- 主體改為簡化證書＋小印章，或戴安全帽的圓潤學員；不可同時塞多個細節。證書內不得出現可辨識字元。

### 1.7 企業戰情室 Bento

- 桌機首列 3 張 KPI（各 4 欄），次列「合規進度」8 欄＋「語言分布／待辦」4 欄；gap `--space-2`。
- KPI 卡 padding `--space-3`、8px 圓角、1px `--gridline`、無陰影；頂部各用 4px 色條區分：鼠尾草／霧藍／奶茶。數字 28px serif/700，label 13px muted。
- 圖表背景透明或 `--surface-card`；bar 軌 `--gridline` 35%，fill 用鼠尾草或 `--accent`，不得五顏六色。標籤不可固定 96px；採 grid `minmax(88px, 0.35fr) 1fr auto`。
- 手機所有卡單欄，KPI 可 2+1 排列但 360px 以下必須單欄；長語言名稱可換行，數值不可被壓縮。
- 空狀態才顯示小型 voxel 圖，不和 KPI 同時搶焦點。

**戰情室空狀態生成圖**

- 檔名：`assets/img/demos/esg/dashboard-empty-voxel.webp`。
- 生成母檔 1536×1024；輸出 1200×800 WebP、≤150KB；網頁 max-width 420px。
- 遵守 `VOXEL_STYLE_GUIDE.md` 全部限制。場景為單一底座上的辦公桌、抽象柱狀圖螢幕與五個學員方塊；無字、無 logo；琥珀最多一個待辦標記。

### 1.8 ESG 明確刪除清單

- 刪除 `.cert` 的所有 `linear-gradient`；取代為 `--surface-raised`／奶茶淺底＋雙層細線。
- 刪除語言代碼的 `#d33`、`#2563eb`、`#e11`、`#c00`、`#1e40af`；取代為六色文青色盤的低比例淺底＋墨灰字。
- 刪除純藍大膠囊 badge；取代為 4px 圓角小章、鼠尾草淺底。
- 刪除內層語言卡、選項、KPI、bar 的重複 `--shadow-card`；只保留主互動容器一次陰影，其他用留白、色條與細線分組。
- 刪除任何新增的 glow、霓虹色、金箔、紙紋與高光；取代為平塗、1px 邊線、單一琥珀章印。

---

## 2. `demos/streamer_ai`：靜音直播桌（The Quiet Broadcast Desk）

### 2.1 概念說明

把原本的霓虹電競聊天框，重新詮釋為「直播主工作桌上的 AI 聯絡卡」。頁面採大量留白的 SaaS landing：左側是作品敘事與能力摘要，右側是一個帶瀏覽器／裝置暗示的產品 mockup；內部採 soft flat UI，像文具、便箋與控制台的混合體。直播感由 `LIVE` 小章、狀態點與快捷問題保留，不靠黑色空腔、青紫漸層或光暈。

### 2.2 全頁骨架

**桌機（≥901px）**

- `.wrap` 12 欄 grid；左側敘事 4 欄，右側 mockup 8 欄，gap `--space-6`，align-items center。
- 主區上下 `--space-6`；mockup 可視高度 560–620px，禁止以 `86vh` 或 780px 固定製造空白。
- 左側依序：eyebrow、H1、lede、3 項能力列表、狀態說明。H1 必須存在，不再只有一行 demo 說明。

**平板／手機（≤900px）**

- 單欄；敘事在前、mockup 在後。左右 `--space-3`；區塊間 `--space-4`。
- 手機 mockup 不模擬整支長手機，改為寬版 app sheet；高度 `clamp(500px, 68svh, 620px)`，並設定 max-height，避免輸入框落到首屏很下方。
- 頁面只由 body 捲動；對話尚未超量時 `.chat` 不產生內捲。超量後才在 chat 使用 `overflow-y:auto` 並以 `overscroll-behavior: contain` 降低雙重捲動。

### 2.3 左側作品敘事

- eyebrow「DEMO・對話介面」；H1 建議「直播主官方 AI 小助手」；lede 保留現有意圖但縮成 2–3 行。
- 能力列表做 3 張無陰影 mini bento：每張 1px `--gridline`、8px 圓角、padding `--space-2`；色條依序鼠尾草／奶茶／霧藍 4px。
- 卡名 15px/700，說明 13px muted；桌機單欄，平板可 3 欄，360px 手機單欄。
- 不另放大型裝飾背景。整區使用 `--surface-page` 和留白建立層次。

### 2.4 產品 Mockup 展示框

**外框**

- 背景 `--surface-card`，1px `--border-strong`，12px 圓角，單一 `--shadow-card`；禁止厚黑手機外殼。
- 頂部加 40px mockup rail：左側三個 8px 平塗圓點（暖灰褐／奶茶／鼠尾草），中間顯示「AI Assistant Demo」meta，右側顯示線上狀態；圓點不模仿紅黃綠交通燈。
- 內部 chat shell 與外框之間 padding 8px；內層 8px 圓角、1px `--gridline`，背景以鼠尾草 10–14% 淺底或 `--surface-page`。

**尺寸**

- 桌機 mockup width 100%、max-width 700px、height `clamp(560px, 66vh, 620px)`。
- 手機 width 100%、min-width 0、height `clamp(500px, 68svh, 600px)`；下方加入 `padding-bottom: env(safe-area-inset-bottom)`。

### 2.5 Chat Header

- 高度桌機 80px、手機自適應最小 88px；padding `--space-2`。
- avatar 48×48px（手機 44px），4px 圓角，不裁圓；旁邊名稱 17px/700，狀態 12px `--ink-muted`。狀態點 8px，使用 `--good`，不可 glow。
- `LIVE` 為 avatar 右上小矩形章：11px/700、灰粉 `#d3a6a6` 平塗底、墨灰字、4px 圓角；無螢光紅、無陰影。
- 語音按鈕放最右，min 44×44px，霧藍 18% 淺底＋`--border-strong`；手機若名稱折行仍不得壓縮。按鈕顯示 icon＋「語音」，`aria-pressed` 反映狀態。

**像素主播頭像**

- 檔名：`assets/img/demos/streamer_ai/avatar-drchen-pixel.png`。
- 生成母檔 1024×1024；另輸出 64×64 PNG 作網頁檔，`image-rendering: pixelated`。
- 嚴格沿用 `design/CATS_IMAGE_BRIEF.md` 的像素製作規格：復古 16-bit、大方形像素、深色粗輪廓、約 8–12 色、平塗、無抗鋸齒／柔邊／3D／漸層／文字／logo／浮水印；純暖白 `#F4F3EE` 背景、主體佔 70–80%、置中、四邊 10%。
- 主體改為簡化主播角色：墨灰短髮、鼠尾草耳機、奶茶上衣，放鬆表情，不做寫實五官與 AI 大眼；圓頭肩像輪廓在 64×64 仍可辨識。

### 2.6 對話區與快捷問題

- `.chat` 以 flex column；padding `--space-2`（桌機 `--space-3`），訊息間距 10–12px。內容由上往下自然排列，不以固定高度把中段撐成空腔。
- Bot 訊息：`--surface-raised`、1px `--gridline`、4px 圓角，max-width 72%，文字 `--ink-primary`。
- User 訊息：霧藍 20–25% 淺底、1px 霧藍邊、4px 圓角，靠右，max-width 72%。禁止青紫漸層。
- 手機 max-width 88%，padding 10px 12px，避免中文每行過短；文字 15px/1.65，時間 11px muted。
- 快捷問題置於第一則歡迎訊息之後，使用 2 欄 mini bento，不使用紫色膠囊：`--surface-card`、1px `--border-strong`、4px 圓角、min-height 44px、padding 8px 12px。手機 360px 以下單欄。
- hover／selected 依共用規格；點擊後應有 pressed 狀態，不能只有 hover。

**空狀態像素圖（可選）**

- 檔名：`assets/img/demos/streamer_ai/chat-empty-pixel.png`。
- 生成母檔 1024×1024，另輸出 128×128 PNG；網頁顯示 72–96px。
- 同樣遵守 `CATS_IMAGE_BRIEF.md` 的像素硬規格；主體為單一小麥克風或方形 AI 機器人，墨灰描邊、鼠尾草與霧藍平塗；無陰影、場景、文字與 logo。開始對話後移除，不長駐於訊息之間。

### 2.7 輸入列

- 固定在 mockup 內部底部，而非 viewport；背景 `--surface-raised`、頂部分隔 1px `--gridline`、padding 12px `--space-2` 加 safe-area。
- input 高 48px、4px 圓角、`--surface-card`、1px `--border-strong`；focus 2px `--accent`，placeholder `--ink-muted`。
- send 為 48×48px 方形圓角按鈕（4px 或 8px），`--accent` 平塗白色圖示；禁止圓形漸層與 glow。必須有 `aria-label="送出訊息"`。
- disabled 時使用 `--gray-status-soft` 與 muted icon；輸入有值才轉主要色。送出 loading 用靜態三點或小型 spinner，不能閃爍霓虹。

### 2.8 桌機情境 voxel 圖（選配，不與大 mockup 並列競爭）

- 僅用於左側敘事下方，或 mockup 後的「運作情境」小節；若首屏已擁擠則不放。
- 檔名：`assets/img/demos/streamer_ai/broadcast-desk-voxel.webp`。
- 生成母檔 1536×1024；輸出 1200×800 WebP、≤150KB；展示比例 3:2、max-width 520px。
- 遵守 `design/VOXEL_STYLE_GUIDE.md`：單一漂浮方形底座、左前上等角正交視角、純暖白背景、方塊邊緣、柔和左上光、無霓虹／漸層／文字／字母／數字／logo。
- 場景：直播桌、麥克風、攝影機、顯示色塊的螢幕，以及一個小型立方 AI 助手；主色品牌藍與紙白，家具淺木色，鼠尾草只作耳機／植物，最多一個琥珀錄製提示。

### 2.9 Streamer AI 明確刪除清單

- 刪除 `--cyan:#25e0e6`、`--mag:#b14dff` 與其他高飽和青紫；取代為共用 token，文青色盤只作低比例平塗識別。
- 刪除 `.demo-stage` 的所有 `radial-gradient`、`.phone`／`.top`／`.av`／`.me`／`.send` 的 `linear-gradient`；取代為純色 surface＋1px 邊線。
- 刪除 avatar、LIVE、訊息、send 的 box-shadow glow；取代為無陰影或全頁唯一 `--shadow-card`。
- 刪除永久深藍／黑色聊天背景與硬編碼淺字；取代為 `--surface-*`／`--ink-*`，讓深淺主題自動切換。
- 刪除 24px phone、20px chip、22px input 等過度膨脹圓角；取代為 4px／8px，mockup 外框最多 12px。
- 刪除 `height:min(780px,86vh)` 與內容上方集中、下方大片空黑；取代為 560–620px clamp、高度由 chat flex 吸收。
- 刪除 `DC` 漸層字母 avatar；取代為指定像素主播圖。
- 刪除純圖示且無名稱的 send／語音狀態；取代為 `aria-label`、`aria-pressed` 與可見狀態文字。

---

## 3. 實作驗收清單

### 3.1 視覺

- [ ] 兩頁無 CSS 漸層、無 glow、無霓虹色；圖像本身也符合相同限制。
- [ ] 每頁最多一個主要容器使用 `--shadow-card`；其餘靠留白、細線、淡色面與字級分層。
- [ ] ESG 一眼可辨識「學習護照／認證流程」；Streamer 一眼可辨識「作品集中的 AI 產品 mockup」。
- [ ] 文青色盤用於識別而非彩虹裝飾，文字對比符合 WCAG AA。
- [ ] 深色主題沒有殘留硬編碼白底、深藍底或不可讀的文青色文字。

### 3.2 響應式與操作

- [ ] 360、375、768、1024、1440px 檢查無水平溢位。
- [ ] ESG 手機 hero 左右各 24px；長語言名稱不造成不等高破版。
- [ ] Streamer 手機輸入列可見、鍵盤開啟後不被裁切；沒有不必要的頁面／聊天雙重捲動。
- [ ] 所有互動 target ≥44×44px，鍵盤 focus 清楚，selected／pressed 不只靠顏色。
- [ ] `prefers-reduced-motion` 下轉場近乎即時；無裝飾性循環動畫。

### 3.3 圖像資產

- [ ] Voxel 圖逐張通過 `design/VOXEL_STYLE_GUIDE.md` §4 checklist。
- [ ] 像素圖逐張通過 `design/CATS_IMAGE_BRIEF.md` 的硬性規格與對應驗收項目。
- [ ] 所有圖無文字、字母、數字、logo、浮水印；尺寸、檔名、壓縮上限與本文件一致。
- [ ] 生成圖只出現在本文件指定位置；語言選單與聊天訊息中不堆疊多張裝飾圖。
