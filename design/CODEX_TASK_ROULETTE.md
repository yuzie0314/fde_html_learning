# Codex 任務：幸運輪盤 Demo 像素元件

專案：`C:\Users\USER\fde_html_learning-main\fde_html_learning-main`。
Claude 已把 `demos/roulette/index.html` 改成讀取 `demos/roulette/img/*`，缺圖時退回 CSS 版本。你只負責生圖。

## 唯一步驟：生圖

讀 `design/ROULETTE_IMAGE_BRIEF.md`，用你的圖片生成能力逐張生成，存 PNG：

```
assets/img/src/roulette/rim.png             1024x1024
assets/img/src/roulette/hub.png             1024x1024
assets/img/src/roulette/pointer.png         1024x1024
assets/img/src/roulette/ticket.png          1024x1024
assets/img/src/roulette/cat-strip.png       1536x1024（三格）
assets/img/src/roulette/confetti-strip.png  1536x1024（三格）
```

規則：
- 每張生完立刻存檔，再生下一張。
- 生完自己看一遍：不是方塊像素風、有漸層陰影、有文字、背景不是純色、亮金或黑底 → 重生。`rim` 的圓環內部必須是空的純背景。動作條三格大小或位置不一致 → 重生。
- **不要**跑 Python，**不要**改任何 HTML/CSS。

## 回報

列出每張路徑、哪張重生過、哪張沒過 checklist。
