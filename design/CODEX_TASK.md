# Codex 任務：作品集示意圖生成 + 美術微調

你在 `C:\Users\USER\fde_html_learning-main\fde_html_learning-main`（純靜態 HTML/CSS/JS 作品集，無建置工具）。
Claude 已完成版面重構（首頁、列表頁、案例頁的人性化元件），**圖片插槽已就位、缺圖時會自動顯示替代封面**。
你的工作是把圖補上，並在不破壞結構的前提下做美術微調。

## 第 1 步：生圖（主要任務）

讀 `design/VISUAL_BRIEF.md`。用你的圖片生成能力，**逐張**依 brief 的 prompt 生成，並存成 PNG：

```
assets/img/src/hero.png
assets/img/src/cases/frozen-food.png
assets/img/src/cases/marital-property.png
assets/img/src/cases/trip-pricing.png
assets/img/src/cases/nutrition-liff.png
assets/img/src/cases/label-compliance.png
assets/img/src/cases/video-production.png
```

規則（brief 有寫，這裡再強調）：
- 1536×1024、3:2、無任何文字、背景 #F4F3EE、四色以內、同一套風格。
- 生成後**自己看一遍**：有文字或超出色盤就重生。
- 每生完一張就先存檔，不要等全部完成才存（避免流量中斷全部遺失）。

## 第 2 步：轉檔

```
python tools/optimize_images.py
```
會產生 `assets/img/hero.webp` 與 `assets/img/cases/*.webp`。看輸出的 KB 是否在上限內。

## 第 3 步：檢查頁面

用瀏覽器（或 `python -m http.server 8080` 後開 http://localhost:8080/）看：
- `index.html`：hero 右側有圖、六張案例卡有封面。
- `cases/index.html`：六張封面。
- `cases/frozen-food/`：hero 右側封面、下方「30 秒看懂」、頁尾上一個/下一個案例縮圖。
- 手機寬度（375px）：圖在文字上方、單欄、字可讀。

## 第 4 步（選配）：美術微調

允許的範圍：`assets/portfolio-theme.css`、`assets/case-extras.css` 內的顏色／間距／圓角／hover 細節。
**不要**：改 `assets/works-data.js` 的結構、把卡片改回手寫 HTML、加入外部框架、把文字加長。

## 回報

結束時列出：生成了哪些圖、各檔 KB、有哪張沒過 checklist、CSS 動了哪幾行。

---
### （給 Claude 的備忘）喚醒指令
```
"C:\Users\USER\AppData\Local\OpenAI\Codex\bin\110b3d66a02d864e\codex.exe" exec \
  -C "C:\Users\USER\fde_html_learning-main\fde_html_learning-main" --skip-git-repo-check \
  -s workspace-write -o design/codex-last-message.md \
  "請讀 design/CODEX_TASK.md 並依序執行其中的步驟。"
```
