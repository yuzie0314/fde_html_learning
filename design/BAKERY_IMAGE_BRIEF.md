# 烘焙 Demo — 麵包照片 Brief（demos/bakery）

> 目的：把頁面上的 emoji 換成「真實質感」的麵包照片。11 張要像同一位攝影師、同一天、同一張桌子拍的。

## 0. 硬性規格

| 項目 | 規定 |
|---|---|
| 菜單 10 張 | 生成 **1536 × 1024（3:2 橫式）**，存 `assets/img/src/bakery/<id>.png` |
| Hero 1 張 | 生成 **1024 × 1024（正方形）**，存 `assets/img/src/bakery/hero.png`（會被裁成圓形，主體置中、四邊留 15%） |
| 文字 | **完全不得出現文字、標籤、價格牌、logo、浮水印** |
| 背景 | 淺色暖白亞麻布或淺色木桌，色調接近 **#F4F3EE**；不要深色背景 |
| 光線 | 柔和自然側光（窗光），淺陰影；不要閃光燈、不要強烈暗角 |
| 視角 | 菜單圖 45° 俯角；hero 圖正俯視（top-down） |
| 構圖 | 單一主體置中、佔畫面 60–70%，四邊留 10% 安全區（卡片會裁切）；可有極少量配料點綴（1–2 樣），不要多 |
| 風格 | 寫實食物攝影，淺景深，暖色調，麵包表皮紋理清楚；**不要插畫、不要 3D、不要人手** |
| 一致性 | 同一張桌面、同一方向光源、同一色溫；系列放在一起要像同一組菜單照 |

**共用前綴（每個 prompt 開頭貼上）：**
```
Photorealistic artisan bakery product photo, single loaf centered, shot at 45-degree angle,
soft natural window light from the left, shallow depth of field, warm neutral tones,
plain light warm-white linen cloth background (close to #F4F3EE), minimal styling with at most
one or two small garnish props, crisp crust texture, no text, no labels, no price tags, no logo,
no watermark, no hands, no people. 3:2 landscape, 1536x1024.
```

## 1. 菜單 10 張（`assets/img/src/bakery/<id>.png`）

| id | 品項 | 主體描述（接在前綴後） |
|---|---|---|
| `country` | 原味鄉村麵包 Country Sourdough | a round rustic country sourdough boule with a deep scored ear and blistered golden-brown crust, dusted with flour |
| `longan-walnut` | 桂圓核桃酸種 | an oval sourdough loaf cut open to show walnuts and dark dried longan pieces in the crumb, a few walnut halves beside it |
| `fig-cheese` | 無花果乳酪酸種 | a sliced sourdough loaf revealing halved dried figs and pockets of melted cheese in the crumb, one fresh fig cut in half beside it |
| `sesame-honey` | 黑芝麻蜂蜜吐司 | a tall square pullman toast loaf with two slices cut, crust coated in black sesame seeds, a small honey dipper beside it |
| `earl-grey-orange` | 伯爵柑橘吐司 | a soft toast loaf with two slices showing flecks of earl grey tea leaves and candied orange peel, a thin dried orange slice beside it |
| `matcha-redbean` | 抹茶紅豆圓麵包 | three soft round matcha buns with pale green crumb, one torn open to show sweet red bean paste filling |
| `cacao-hazelnut` | 可可榛果鄉村 | a dark cocoa country loaf with cracked crust, one slice showing whole hazelnuts in the dark crumb, a few hazelnuts beside it |
| `potato-focaccia` | 馬鈴薯佛卡夏 | a rectangular golden focaccia with dimpled surface, thin potato slices and flaky salt on top, glossy with olive oil |
| `rosemary-olive` | 迷迭香橄欖佛卡夏 | a square focaccia topped with kalamata olives and fresh rosemary sprigs, dimpled golden surface glistening with olive oil |
| `fruit-danish` | 季節水果丹麥 | two flaky laminated danish pastries topped with fresh peach slices and a few blueberries, glossy apricot glaze |

## 2. Hero（`assets/img/src/bakery/hero.png`，1024×1024）

```
Photorealistic top-down (flat lay) photo of one round rustic sourdough boule with a scored ear and
blistered golden crust, centered on a plain light warm-white linen cloth (close to #F4F3EE),
soft natural window light from the left, shallow depth of field, warm neutral tones, a light dusting
of flour, no other props, no text, no labels, no logo, no watermark, no hands.
Subject occupies the central 65% of the frame with generous even margin on all sides. 1:1 square, 1024x1024.
```

## 3. 驗收 checklist

- [ ] 沒有任何文字、價格牌、logo
- [ ] 背景是淺色暖白，不是深色木桌
- [ ] 光源都在左側、色溫一致
- [ ] 主體置中、四邊有留白（會被卡片裁切）
- [ ] 11 張排在一起像同一組菜單照
- [ ] 檔名與位置正確
