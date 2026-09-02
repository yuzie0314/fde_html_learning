# 第 3 輪全站一致性 Polish Punch List

> 範圍：首頁、案例索引、Demo 索引，以及案例內頁（以冷凍食品頁為代表）。本輪只校正既有設計語言，不新增概念或版面。優先級依觀感影響排序；「裁量」表示是否納入由 Claude 最終決定。

1. **P1｜全站共用版心與左右留白**
   - 頁面與元素：首頁、案例索引、Demo 索引、案例內頁的 `.wrap`／`.header-inner`。
   - 現況：共用 CSS 仍以 `--container: 1080px`、24px padding 為基準；首頁另設 1200px 與手機 18px，兩個索引頁手機又覆寫成 16px，案例內頁維持舊版 1080px。跨頁切換時內容邊線與寬度明顯跳動。
   - 應改為：依規格統一桌機 `max-width: 1200px`、左右 32px；641–980px 為 24px；≤640px 為 18px。header、main、footer 使用同一版心基準。

2. **P1｜設計 token 單一來源，移除頁面級漂移**
   - 頁面與元素：`assets/portfolio-theme.css` 與各頁 inline style（尤其案例內頁整份內嵌 token）。
   - 現況：共用層仍是 `--radius-md: 8px`、`--shadow-card` 舊值，首頁另宣告 `--radius-card`／`--shadow-rest`；案例內頁又複製一套舊系統，造成同名元件在不同頁不一致。
   - 應改為：以共用 CSS 的規格 token 為唯一來源：卡片 16px、小元件 8px、pill 999px，並統一 `--shadow-rest`、`--shadow-hover`、`--ease-out`；頁面 inline CSS 只保留結構差異，不重複定義全域 token。

3. **P1｜案例內頁頁首品牌區與全站身份一致**
   - 頁面與元素：案例內頁 sticky header 左側品牌。
   - 現況：首頁／索引顯示「Zorya　FDE & Data Scientist」，冷凍食品內頁改成長案例名＋「案例研究」，導致 header 高度、視覺重心與返站識別均不一致。
   - 應改為：左側固定使用全站品牌「Zorya　FDE & Data Scientist」；案例名稱留在頁面 hero，header 導覽維持案例章節錨點即可。

4. **P1｜Header 控制項達到 44×44px 並統一高度**
   - 頁面與元素：全站 `.theme-toggle`、手機 `.nav-toggle`、header 內距。
   - 現況：切換按鈕固定 34×34px，低於規格最小點擊區；案例內頁與新版頁面因各自樣式來源，header 視覺高度亦可能不同。
   - 應改為：兩種控制項皆至少 44×44px，使用 8px 小元件圓角；header 內距與總高全站共用，且圖示在深淺模式下維持相同對齊。

5. **P1｜案例內頁字級階層回到新版 editorial scale**
   - 頁面與元素：案例內頁 hero H1、section H2、eyebrow／label。
   - 現況：案例內頁 H1 為 `clamp(28px, 4.4vw, 44px)`、H2 為 `22–30px`；首頁 H1 與索引 H1 明顯更大，附圖中內頁層級顯得像舊站。
   - 應改為：在不改版面的前提下，把案例 H1 提升至與全站 display 系統相容的尺度，section H2 對齊 `clamp(30px, 3.6vw, 48px)`；eyebrow 統一 12px/1.4、600、0.08em。

6. **P1｜卡片圓角全站統一為 16px**
   - 頁面與元素：首頁 hero 燈箱／案例與 Demo 卡、索引列圖片、案例內頁 stat／source／scope／chart 卡。
   - 現況：同層級容器同時使用 8、12、14、16px；例如首頁 `.hero-visual` 舊規則 14px、案例索引 cover 12px、內頁多數卡 8px。
   - 應改為：主要卡片與圖片燈箱一律 16px；內部控制、標籤、小卡才用 8px；只有 pill 使用 999px。

7. **P1｜全站鍵盤 focus 不可只靠 hover 樣式**
   - 頁面與元素：首頁 `.feat`、`.demo3`、文字 CTA、header／footer links；索引 row／Demo 卡；案例內頁 nav、卡片連結、表格 summary、聯絡 CTA。
   - 現況：索引頁有 2px focus ring，但首頁卡片的 `:focus-visible` 會 `outline:none` 且沒有等價外框；多數文字連結及案例內頁互動只定義 hover。
   - 應改為：所有可聚焦元素統一 `2px solid var(--accent)`、`outline-offset: 3–4px`，不得被 overflow 裁掉；hover 的位移／陰影不作為唯一 focus 表示。

8. **P1｜深色模式卡片陰影遵守規格**
   - 頁面與元素：全站卡片、hero 燈箱、CTA stage、案例內頁圖表卡。
   - 現況：深色 `--shadow-card` 仍疊兩層偏重黑影，首頁 hover 又寫死淺色 rgba；各頁邊框與陰影分層不一致。
   - 應改為：深色卡片以 1px 邊框為主，陰影統一為 `0 16px 36px rgba(0,0,0,.32)`；hover 陰影改用 token，不在元件內硬編碼淺色陰影。

9. **P1｜Voxel 燈箱的深色模式處理一致**
   - 頁面與元素：首頁 hero／案例卡／Demo 卡、兩個索引、案例內頁 hero 與示意圖。
   - 現況：圖面背景多處硬編碼 `#f4f3ee`，但邊框仍直接用一般 `--gridline`；深色頁面未見統一的燈箱邊界／降刺眼 overlay 規則。
   - 應改為：圖片不 invert、不濾色；深色下統一使用 `rgba(255,255,255,.12)` 燈箱邊界，必要時只加一層 `rgba(13,13,13,.08)` overlay，所有頁一致。

10. **P1｜手機斷點與頁面左右 padding 不一致**
    - 頁面與元素：首頁與兩個索引的 ≤640px、header 選單的 ≤780px、內容重排的 ≤820px／980px，以及案例內頁。
    - 現況：同一視窗寬度會同時落入多套 520／640／780／820／900／980px 規則；索引手機 padding 16px、首頁 18px，平板卡片與導覽也在不同點跳版。
    - 應改為：內容格線以 640／980px 為主；導覽若保留 780px 特例，需明確只控制 nav，不影響版心。逐頁驗收 360、375、390、768、980、1024、1440px 無水平位移或溢位。

11. **P1｜案例索引缺圖 fallback 不得留大片空白**
    - 頁面與元素：案例索引 E、F cover（附圖為純空白暖白卡）。
    - 現況：圖片不存在時只剩空白 stage，視覺上像未完成內容，也讓 A–D 與 E–F 的資訊完整度不一致。
    - 應改為：沿用規格的 `--surface-card`＋細格線／品牌藍小方塊 fallback；不可用巨大 E／F 字母、漸層或新增插畫語言。

12. **P1｜首頁 Demo 卡缺圖狀態與 Demo 索引不一致**
    - 頁面與元素：首頁四張 `.demo3` 與 Demo 索引六張 `.demo3`。
    - 現況：附圖首頁四張均呈大面積空白圖區；程式 fallback 只有 28px 藍方塊，與索引的完整 voxel cover 落差很大，會像載入失敗。
    - 應改為：確認首頁與索引引用同一份已存在的 voxel 資產與一致裁切；真正載入失敗時才顯示品牌藍小方塊＋細格線 fallback，並保持 3:2／手機正方形規格。

13. **P2｜Disclaimer 尺寸與措辭密度統一**
    - 頁面與元素：案例索引、Demo 索引、案例內頁頂部 disclaimer strip。
    - 現況：共用樣式桌機 13px、8px padding；規格要求 12px/1.5、上下 7px。案例內頁句子更長，頂部視覺重量也較高。
    - 應改為：統一 12px/1.5、上下 7px、單行優先；各頁只保留該頁必要聲明，footer 不再逐字重複。

14. **P2｜英文 eyebrow／label 大小寫與標點規則統一**
    - 頁面與元素：首頁 `SELECTED OUTCOMES`／`LIVE DEMOS`／`NEXT CLEAR STEP`，索引 `CASE INDEX · A—F`／`LIVE DEMO COLLECTION · D1—D6`，卡片 `OUTCOME`／`LIVE DEMO`。
    - 現況：有些文字由 CSS `text-transform: uppercase`，有些直接大寫；中文 label 也混用 `·`、`・`、`／`，字距從 .05em 到 .10em。
    - 應改為：英文 label 內容採一致大寫、12px/1.4、600、0.08em；範圍連字號統一用 `A—F`、`D1—D6`，中英分隔符依同一規則處理。

15. **P2｜Hover 動效時長與位移統一，且只套互動物件**
    - 頁面與元素：首頁／索引卡片、cover 圖、箭頭、header／footer links。
    - 現況：卡片位移有 -2、-4、-6px，transition 有 150、180、200、220、500ms；focus 有時也觸發整卡位移。
    - 應改為：主要卡片統一 `translateY(-6px)`、圖片 `scale(1.025)`、箭頭 `translateX(5px)`，使用 `220–500ms var(--ease-out)`；文字連結只改色／底線，focus ring 不依賴位移。

16. **P2｜Reduced motion 規則補齊 transform 與靜態狀態**
    - 頁面與元素：首頁 reveal／story／CTA path、兩個索引 reveal、全站 hover；案例內頁 reveal 與 smooth scroll。
    - 現況：全域只把 animation／transition 壓到 0.001ms，部分頁再局部補丁；transform、stagger 與 hover 位移沒有以同一規則完整移除，首頁故事只把編號設 active。
    - 應改為：`prefers-reduced-motion` 下所有內容初始可見、移除 transform／stagger／路徑繪製，timeline 顯示完整靜態線；hover 僅改 border／color，smooth scroll 改瞬間跳轉。

17. **P2｜CTA 與小按鈕圓角語意一致（裁量）**
    - 頁面與元素：首頁主 CTA、索引 bridge CTA、案例內頁聯絡 CTA、copy button。
    - 現況：`.btn` 使用 999px pill，首頁 copy button 與案例內頁 CTA 多為 8px；相同層級的主要行動呈現兩種形狀語言。
    - 應改為：若保留主 CTA pill，則全站主要 CTA 均採 pill、工具型 button 採 8px；或依規格將非 pill 主按鈕統一 8px。不要在同一層級混用。

18. **P2｜Footer 結構與收尾語跨頁對齊（裁量）**
    - 頁面與元素：首頁、兩個索引、案例內頁 footer。
    - 現況：首頁有 24–30px Serif 收束語＋三欄＋底列；索引只有三欄＋底列；案例內頁仍是舊版長篇定位文、聲明與單行 meta，附圖觀感明顯不同世代。
    - 應改為：至少統一三欄資訊階層、13px 正文、12px 欄名、top border、上下留白與底列；案例內頁長篇定位文縮為 24–30px 的單句收束語，聲明最多兩段、每段兩行。

19. **P2｜內頁圖片與圖表卡避免使用舊版 8px＋重陰影組合（裁量）**
    - 頁面與元素：案例內頁大示意圖、`.chart-block`、stat tiles、source cards。
    - 現況：大面積 stage 與多張資訊卡沿用 8px 圓角；圖表卡每張均使用 `--shadow-card`，比新版索引依靠細線與留白的語言更厚重。
    - 應改為：主要 stage／圖表外框 16px，內部資訊小卡 8px；同一區僅主要容器保留一次休止陰影，其餘改 1px `--gridline` 分層。

20. **P2｜深色模式 muted 關鍵資訊對比檢查**
    - 頁面與元素：索引 outcome sub、首頁 proof 說明／信任點、案例內頁 KPI sub／圖表 caption／聲明。
    - 現況：深色 `--ink-muted` 仍為 `#898781`，而成果說明與操作提示多處直接使用 muted；部分關鍵資訊可能低於 4.5:1，且被視覺降級。
    - 應改為：逐項檢查 WCAG AA；關鍵成果、操作與承諾改用 `--ink-secondary`，`--ink-muted` 只承載非必要 meta。不得只靠調大陰影或發光補可讀性。
