# Codex 任務：案例頁 12 張 Voxel 示意圖

專案：`C:\Users\USER\fde_html_learning-main\fde_html_learning-main`。你只負責生圖；轉檔與頁面由 Claude 接手。

## 步驟

1. 讀 `design/VOXEL_STYLE_GUIDE.md`（§2 共用前綴必須逐字放在每個 prompt 開頭）。
2. **先看** `assets/img/src/voxel/hero.png` 與 `assets/img/src/voxel/cases/*.png`（已通過驗收的主站 7 張）——新圖必須跟它們同一個視角、同樣的底座、同樣的光影。
3. 讀 `design/CASE_DIAGRAMS_BRIEF.md`，逐張生成並存檔（1536×1024 PNG）：

```
assets/img/src/voxel/diagrams/frozen-food-1.png        frozen-food-2.png
assets/img/src/voxel/diagrams/marital-property-1.png   marital-property-2.png
assets/img/src/voxel/diagrams/trip-pricing-1.png       trip-pricing-2.png
assets/img/src/voxel/diagrams/nutrition-liff-1.png     nutrition-liff-2.png
assets/img/src/voxel/diagrams/label-compliance-1.png   label-compliance-2.png
assets/img/src/voxel/diagrams/video-production-1.png   video-production-2.png
```

4. 每生一張就跟 hero 比對：視角變了、出現透視、沒有底座、平滑 3D、出現文字或螢幕 UI 文字 → 重生那一張。

規則：每張生完立刻存檔；不要跑 Python；不要改 HTML/CSS。

## 回報
列出 12 張路徑、哪張重生過、重生原因。
