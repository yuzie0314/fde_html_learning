# Codex 任務：掃碼點餐 Demo 像素圖示 + 像素廚師

專案：`C:\Users\USER\fde_html_learning-main\fde_html_learning-main`。
Claude 已把 `demos/order/index.html` 與 `display.html` 改成讀取 `demos/order/img/*.png`，缺圖時退回 emoji。你只負責生圖。

## 唯一步驟：生圖

讀 `design/ORDER_IMAGE_BRIEF.md`，用你的圖片生成能力逐張生成，存 PNG：

```
assets/img/src/order/bento.png      1024x1024
assets/img/src/order/bag.png
assets/img/src/order/plate.png
assets/img/src/order/rice.png
assets/img/src/order/norice.png
assets/img/src/order/chicken.png
assets/img/src/order/fish.png
assets/img/src/order/pig.png
assets/img/src/order/chili.png
assets/img/src/order/cow.png
assets/img/src/order/veggie.png
assets/img/src/order/check.png
assets/img/src/order/chef-strip.png  1536x1024（三格橫向動作條）
```

規則：
- 每張生完立刻存檔，再生下一張。
- 生完自己看一遍：不是方塊像素風、有漸層陰影、有文字、背景不是純色 → 重生。廚師動作條若三格大小或位置不一致 → 重生。
- **不要**跑 Python，**不要**改任何 HTML/CSS。縮圖、GIF 合成與頁面檢查由 Claude 接手。

## 回報

列出每張路徑、哪張重生過、哪張沒過 checklist。
