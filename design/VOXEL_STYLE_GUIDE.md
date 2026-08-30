# Zorya 作品集 — Voxel Isometric 3D 統一風格規範

> 這是全站示意圖的唯一風格來源。**任何**要給 Codex 生的圖（首頁 hero、案例封面、案例頁示意圖）
> 都必須套用本文件的「共用前綴」，並通過 §4 的驗收。目的：讓 20+ 張圖看起來出自同一個 voxel 場景系統。

## 1. 風格定義（參考：網路上 "voxel art: apple" 這類作品）

- **Voxel art**：世界由小方塊堆成，像 MagicaVoxel 渲染出來的作品；邊緣是方的，沒有圓角、沒有平滑曲面。
- **Isometric 等角視角**：固定從**左前上方**看，約 30° 俯角、45° 水平旋轉，正交投影（無透視收縮）。
- **迷你立體模型（diorama）感**：每張圖的場景都放在**一塊漂浮的方形 voxel 底座**上（像一片小島／桌面），底座是暖白色或淺木色，這是讓全站一致的關鍵元素。
- **光線**：柔和攝影棚光，主光從左上，淡淡的環境光遮蔽（AO），底座下方一片柔和淺灰影子。**沒有**強烈鏡面反光、沒有霓虹、沒有戲劇性打光。
- **背景**：**純色平塗暖白 #F4F3EE**，沒有漸層、沒有地平線、沒有場景外的東西。
- **色盤**（每張最多 5 個色相）：
  - 紙白 #F4F3EE／淺灰白 #E6E3DC（底座、牆面、紙張）
  - 墨灰 #2B2925（線條細節、螢幕邊框、文字的替身方塊）
  - **品牌藍 #2A78D6**（主角物件／主要強調）＋ 淺藍 #D6E4F7（面）
  - 琥珀 #EDA100（**極少量**，只標「異常／被找到的東西」，每張最多一個小物件）
  - 淺木色 #C9A978（家具、桌面），可搭配一點鼠尾草 #9DB49A 當植物或配角
- **不要**：寫實質感、人臉特寫（小 voxel 人物可以，但不要有五官細節）、文字、任何字母數字、logo、螢幕上的 UI 文字（螢幕用色塊表示內容）。

## 2. 共用前綴（每一個 prompt 的第一段，逐字貼上）

```
Voxel art, isometric 3D diorama in the style of MagicaVoxel renders: everything built from small cubes with crisp
blocky edges, no smooth curves. Fixed isometric camera from the upper-left front (about 30 degree elevation,
45 degree rotation), orthographic, no perspective distortion. The whole scene sits on ONE floating square voxel
base tile (warm white or light wood) with a soft light-grey shadow beneath it. Soft studio lighting from the
upper left, gentle ambient occlusion, matte surfaces, no glossy reflections, no neon. Plain solid warm off-white
background (#F4F3EE), nothing outside the base tile. Limited palette: paper white #F4F3EE, light grey #E6E3DC,
ink grey #2B2925, brand blue #2A78D6 and pale blue #D6E4F7 for the main subject, light wood #C9A978 for furniture,
and at most one tiny amber #EDA100 accent. No text, no letters, no numbers, no logos, no UI text on screens
(screens show only colored blocks). Subject centered with 10% margin on all sides.
```

## 3. 版面規格

| 用途 | 生成尺寸 | 輸出（腳本自動） | 備註 |
|---|---|---|---|
| 首頁 hero | 1536×1024（3:2） | `assets/img/hero.webp` 1536×1024 ≤220KB | 場景可略寬 |
| 案例封面 ×6 | 1536×1024（3:2） | `assets/img/cases/<slug>.webp` 1200×800 ≤150KB | 一張圖一個隱喻 |
| 案例頁示意圖 | 1536×1024（3:2） | `assets/img/cases/<slug>/<n>.webp` 1200×800 ≤150KB | 每案 2 張：現況 / 交付物 |
| OG 分享圖 | 由 hero 重裁 1200×630 | `assets/img/og-home.jpg` | — |

## 4. 驗收 checklist（每張都對）

- [ ] 看得出是方塊堆的（voxel），不是平滑 3D、不是插畫
- [ ] 視角是固定的左前上方等角，沒有透視
- [ ] 有一塊漂浮的方形底座＋柔影；背景純暖白
- [ ] 主色是品牌藍，琥珀最多一個小物件
- [ ] 沒有任何文字／字母／數字／logo
- [ ] 放在其他已通過的圖旁邊，像同一個世界

## 5. 已定案的隱喻（給 Codex 的「接在前綴後」段落）

見 `VISUAL_BRIEF_VOXEL.md`（主站 7 張）與 `CASE_DIAGRAMS_BRIEF.md`（案例頁示意圖）。
