# Codex 任務：AI 客服像素貓頭像

專案：`C:\Users\USER\fde_html_learning-main\fde_html_learning-main`。
Claude 已把 `demos/ai-service/index.html` 改成讀取 `demos/ai-service/img/cat-<n>.png`，缺圖時退回 emoji。你只負責生圖。

## 唯一步驟：生圖

讀 `design/CATS_IMAGE_BRIEF.md`，用你的圖片生成能力逐張生成，存 PNG：

```
assets/img/src/cats/cat-1.png   1024x1024
assets/img/src/cats/cat-2.png
assets/img/src/cats/cat-3.png
assets/img/src/cats/cat-4.png
assets/img/src/cats/cat-5.png
assets/img/src/cats/cat-6.png
```

規則：
- 每張生完立刻存檔，再生下一張。
- 生完自己看一遍：不是方塊像素風、有漸層陰影、有文字、背景不是純色 → 重生。
- **不要**跑 Python 轉檔，**不要**改任何 HTML/CSS。縮圖、減色與頁面檢查由 Claude 接手。

## 回報

列出每張路徑、哪張重生過、哪張沒過 checklist。
