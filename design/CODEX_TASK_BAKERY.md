# Codex 任務：烘焙 Demo 麵包照片

專案：`C:\Users\USER\fde_html_learning-main\fde_html_learning-main`。
Claude 已把 `demos/bakery/index.html` 改成「有圖用圖、缺圖退回 emoji」，你只負責生圖。

## 唯一步驟：生圖

讀 `design/BAKERY_IMAGE_BRIEF.md`，用你的圖片生成能力逐張生成，存 PNG：

```
assets/img/src/bakery/hero.png              1024x1024
assets/img/src/bakery/country.png           1536x1024
assets/img/src/bakery/longan-walnut.png
assets/img/src/bakery/fig-cheese.png
assets/img/src/bakery/sesame-honey.png
assets/img/src/bakery/earl-grey-orange.png
assets/img/src/bakery/matcha-redbean.png
assets/img/src/bakery/cacao-hazelnut.png
assets/img/src/bakery/potato-focaccia.png
assets/img/src/bakery/rosemary-olive.png
assets/img/src/bakery/fruit-danish.png
```

規則：
- 每張生完立刻存檔，再生下一張。
- 生完自己看一遍：有文字／深色背景／光源方向不一致就重生。
- **不要**跑 Python 轉檔（你的沙箱沒有 Pillow），**不要**改任何 HTML/CSS。轉檔與頁面檢查由 Claude 接手。

## 回報

列出每張檔案路徑與尺寸、哪張重生過、哪張沒過 checklist。
