# Codex 任務：補生案例示意圖（剩餘 3 張 + 1 張重生）

專案：`C:\Users\USER\fde_html_learning-main\fde_html_learning-main`。上一輪已完成 9 張，撞到流量上限。你只負責生圖。

## 步驟

1. 讀 `design/VOXEL_STYLE_GUIDE.md`（§2 共用前綴逐字放在每個 prompt 開頭）。
2. 參考已通過的圖：`assets/img/src/voxel/hero.png`、`assets/img/src/voxel/diagrams/frozen-food-1.png`、`frozen-food-2.png`——視角、底座、光影要一致。
3. 讀 `design/CASE_DIAGRAMS_BRIEF.md`，只生成以下項目：

```
assets/img/src/voxel/diagrams/label-compliance-2.png     （E 交付物）
assets/img/src/voxel/diagrams/video-production-1.png     （F 現況）
assets/img/src/voxel/diagrams/video-production-2.png     （F 交付物）
assets/img/src/voxel/diagrams/nutrition-liff-1.png       （D 現況，重生：上一版人物有五官與髮型細節，請改成像 frozen-food-1 那種只有深色方塊頭、無五官的小 voxel 人偶）
```

4. 每生一張就存檔並與 hero 比對；出現透視、沒有底座、平滑 3D、文字、人物五官 → 重生那一張。

規則：不要跑 Python；不要改 HTML/CSS。

## 回報
列出生成的路徑、哪張重生過、重生原因。

---

## 第 2 部分：Demo 封面 6 張（接著做）

讀 `design/DEMO_COVERS_BRIEF.md`，同樣以 §2 共用前綴開頭，逐張生成並存到：

```
assets/img/src/voxel/demos/bakery.png
assets/img/src/voxel/demos/esg.png
assets/img/src/voxel/demos/ai-service.png
assets/img/src/voxel/demos/order.png
assets/img/src/voxel/demos/roulette.png
assets/img/src/voxel/demos/streamer_ai.png
```
每張與 hero 比對視角、底座、光影；不合就重生。回報時一併列出。
