# Zorya 作品集 — 視覺 Brief（給 Codex / 任何生圖工具）

> 目的：為首頁與 6 個案例產生「示意插圖」。圖是配角，用來讓手機上一眼分辨案例，
> **不是**用來塞資訊。所以：不放文字、不放數字、一張圖只講一個隱喻。

## 0. 硬性規格（每張都要遵守）

| 項目 | 規定 |
|---|---|
| 生成尺寸 | **1536 × 1024 px（3:2 橫式）**，所有圖統一 |
| 輸出格式 | PNG，存到 `assets/img/src/`（原檔），之後由 `tools/optimize_images.py` 轉成 WebP |
| 網頁實際使用尺寸 | 案例封面 1200×800 ≤150KB；首頁 hero 1536×1024 ≤220KB（腳本自動處理） |
| 安全區 | 主體置中，四邊各留 **10% 邊界**不放重要元素（卡片上會被裁切 / 圓角） |
| 文字 | **完全不得出現任何文字、字母、數字、logo**（AI 文字會亂碼，且中英混排會失真） |
| 背景 | 純色暖白 **#F4F3EE**（與網站 `--surface-page` 接近；深色模式下圖片會像一張「紙卡」，可接受） |
| 色盤（最多 4 色） | 墨黑 #0B0B0B（線條/主體）、品牌藍 #2A78D6（唯一強調色）、淡藍 #D6E4F7（面）、琥珀 #EDA100（**極少量**，只用來標「異常/被發現的東西」） |
| 風格 | 扁平、極簡、編輯插畫（editorial flat illustration）；2px 等寬墨線＋大面積色塊；**無漸層、無陰影、無 3D、無寫實照片、無人臉** |
| 構圖 | 單一中央隱喻物件，留白多（至少 40% 是空白背景）；手機上縮到 360px 寬仍看得出是什麼 |
| 一致性 | 6 張案例圖 + 1 張 hero 必須看起來是同一位插畫家的同一套系列（同線寬、同色盤、同視角：微俯視 15°） |

**共用風格前綴（每一個 prompt 開頭都貼上）：**

```
Minimal flat editorial illustration, single centered object metaphor, lots of negative space,
plain warm off-white background (#F4F3EE), 2px uniform black ink outlines (#0B0B0B),
flat color fills only in brand blue (#2A78D6) and pale blue (#D6E4F7), one tiny amber (#EDA100) accent at most,
slight 15-degree top-down view, no gradients, no shadows, no 3D, no photo realism, no people, no faces,
ABSOLUTELY NO TEXT, no letters, no numbers, no logos, no watermark.
Subject occupies the middle 80% of the frame with a 10% safe margin on all sides. 3:2 landscape, 1536x1024.
```

## 1. 首頁 Hero（`assets/img/src/hero.png`）

隱喻：**一團打結的線，穿過一個方框後變成整齊的表格線** ——「講不清楚 → 講得清楚」。

```
[共用前綴] +
A tangled messy knot of thin black lines on the left flows through a single rounded rectangular frame in the center
and comes out on the right as clean, evenly spaced parallel grid lines forming a tidy document/table shape.
The frame is brand blue. One small amber dot sits inside the tangle, marking the "real problem" being found.
Calm, confident, airy composition.
```

## 2. 六張案例封面（`assets/img/src/cases/<slug>.png`）

| 檔名 | 案例 | 隱喻（一句話） |
|---|---|---|
| `frozen-food.png` | A 冷凍食品經銷沖帳診斷 | 三張對不齊的單據，被一把放大鏡找到缺口 |
| `marital-property.png` | B 婚後財產交易追溯 | 一條長時間軸在中點被切成兩色，末端是天平 |
| `trip-pricing.png` | C 旅遊行程估價原型 | 一份規格書拼圖缺了幾塊，旁邊是路線圖 |
| `nutrition-liff.png` | D 營養諮詢飲食紀錄 LIFF | 手機上一碗餐與打勾的日曆格 |
| `label-compliance.png` | E 包裝標示合規改版 | 食品包裝的標籤在放大鏡下變成查核表 |
| `video-production.png` | F 多門市影片產線 | 七間小店的膠卷匯入一條輸送帶 |

### A `frozen-food.png`
```
[共用前綴] +
Three paper receipts/slips fanned out and slightly misaligned on a table, next to a small frozen-goods
delivery van icon and a stack of two frozen boxes with a snowflake symbol (symbol only, no text).
A large round magnifying glass hovers over the gap between the slips; inside the lens one small amber
square marks the mismatch. Pale blue fills for the slips, brand blue for the van.
```

### B `marital-property.png`
```
[共用前綴] +
A long horizontal timeline ribbon running left to right, cut at the center by a single vertical brand-blue line.
Left half of the ribbon is pale blue, right half is white with blue outline. Small coin and document icons sit
along the ribbon (no text). At the right end, a simple balance scale with two pans, perfectly level.
One tiny amber dot on the ribbon just right of the cut.
```

### C `trip-pricing.png`
```
[共用前綴] +
A single sheet of paper drawn as a jigsaw puzzle with seven pieces, three of the pieces missing so the
warm background shows through the holes. Beside it, a small folded map with a dotted travel route and
two location pins in brand blue. A price-tag shape (blank, no text) hangs from one pin. One amber outline
around one missing puzzle hole.
```

### D `nutrition-liff.png`
```
[共用前綴] +
A smartphone standing upright showing a simple bowl-and-chopsticks icon on screen, next to a small
month calendar grid where most cells are empty and a few cells have brand-blue check marks.
A rounded chat bubble (empty, no text) floats above the phone, pale blue. One amber check mark among the blue ones.
```

### E `label-compliance.png`
```
[共用前綴] +
A food pouch/package shape seen from the front with a blank rectangular label area (no text, just ruled lines
suggesting a nutrition panel). A magnifying glass over the label; inside the lens the ruled lines turn into a
checklist of blank boxes with brand-blue check marks. One box has an amber outline (the non-compliant line).
```

### F `video-production.png`
```
[共用前綴] +
Seven tiny identical storefront icons in a row at the top, each dropping a small film-strip/clip icon onto a
single horizontal conveyor belt below. The belt carries the clips rightward into one rounded output box
with a play-triangle symbol. Brand blue for the belt and play triangle, pale blue for the clips.
One amber clip in the middle of the belt.
```

## 3. 選配（有餘裕再做）

- `assets/img/src/og-home.png` — 首頁分享圖 1200×630：直接用 hero 圖重裁即可（腳本支援）。
- Demo 小圖示 6 張 1024×1024：目前 Demo 卡片刻意不放圖，維持輕量；先不做。

## 4. 驗收 checklist（生完每張圖對一次）

- [ ] 沒有任何文字 / 數字 / 字母
- [ ] 背景是平的暖白，不是漸層或紙紋
- [ ] 只有黑、藍、淡藍、（極少）琥珀 四色
- [ ] 主體在中央 80% 內，縮到手機寬度仍認得出
- [ ] 6 張放在一起像同一套系列
- [ ] 檔案放對位置與檔名（`assets/img/src/hero.png`、`assets/img/src/cases/<slug>.png`）
