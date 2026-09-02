# Codex 任務：主站 7 張改為 Voxel Isometric 3D

專案：`C:\Users\USER\fde_html_learning-main\fde_html_learning-main`。
全站示意圖統一改成 voxel isometric 3D 風格。你只負責生圖；轉檔與頁面由 Claude 接手。

## 步驟

1. 讀 `design/VOXEL_STYLE_GUIDE.md`（風格規範，**§2 的共用前綴必須逐字放在每個 prompt 開頭**）。
2. 讀 `design/VISUAL_BRIEF_VOXEL.md`，逐張生成並存檔（1536×1024 PNG）：

```
assets/img/src/voxel/hero.png
assets/img/src/voxel/cases/frozen-food.png
assets/img/src/voxel/cases/marital-property.png
assets/img/src/voxel/cases/trip-pricing.png
assets/img/src/voxel/cases/nutrition-liff.png
assets/img/src/voxel/cases/label-compliance.png
assets/img/src/voxel/cases/video-production.png
```

3. **一致性把關**：先生 `hero.png` 並自己檢查它符合風格指南 §4（方塊感、等角視角、漂浮底座、純暖白背景、品牌藍主色、無文字）。
   通過後，其餘 6 張都以同樣的視角、底座大小、光影方向生成；每生一張就跟 hero 比對，不一致（視角變了、出現透視、沒有底座、平滑 3D、出現文字）就重生那一張。

規則：每張生完立刻存檔；不要跑 Python；不要改 HTML/CSS。

## 回報
列出 7 張路徑、哪張重生過、重生原因。
