# 幸運輪盤 Demo — 像素風「復古遊藝場」輪盤 Brief（demos/roulette）

> 方向：**不是**哥德黑金，是「古董抽獎機／復古遊藝場」——黃銅雕花、小寶石、圓章，但色調是文青灰調，
> 所有元素都是 16-bit 像素風，與 AI 客服的貓、點餐的廚師同一家。

## 0. 硬性規格

| 項目 | 規定 |
|---|---|
| 單張元件 | **1024 × 1024**，存 `assets/img/src/roulette/<id>.png` |
| 動作條 | **1536 × 1024（橫式）**，等分左中右三格、同一角色同大小同位置 |
| 背景 | **純色平塗暖白 #F4F3EE**，會被去背成透明 → 無漸層、無地板、無陰影、無場景 |
| 風格 | 復古 16-bit 像素畫：大顆方形像素、清楚深色描邊、平塗、最多 12 色；無抗鋸齒、無柔邊、無 3D |
| 色調 | 主體用**霧面黃銅／古銅**（#b89a5e、#8c7040 之類的暗金），點綴少量**乾燥玫瑰 #d3a6a6、鼠尾草 #9db49a、霧藍 #9fb4c7** 的小寶石；**不要亮金、不要黑底、不要螢光色** |
| 文字 | **完全不得出現文字、字母、數字、logo、浮水印** |
| 一致性 | 6 張同樣像素密度與描邊粗細 |

**共用前綴（每個 prompt 開頭貼上）：**
```
Retro 16-bit pixel art, large square pixels, crisp dark outline, flat solid color fills, limited palette of
about 12 colors, no anti-aliasing, no gradients, no shading blur, no 3D, vintage fairground / antique prize-wheel
feel, matte antique brass tones (#b89a5e, #8c7040) with small dusty-rose, sage and misty-blue gem accents,
plain solid warm off-white background (#F4F3EE) with nothing else in the scene, no floor, no shadow,
no text, no letters, no numbers, no logo, no watermark.
```

## 1. 四個單張元件（`assets/img/src/roulette/<id>.png`，1024×1024）

| id | 用途 | 接在前綴後的描述 |
|---|---|---|
| `rim` | 輪盤外框（套在轉盤外圍） | an ornate circular antique brass RING frame, like the rim of a vintage prize wheel: scalloped outer edge, small round gems evenly spaced around it, subtle engraved scroll pattern; the ring is thick (about 12% of the diameter) and the ENTIRE INSIDE of the ring is empty plain background; ring centered and filling about 92% of the frame |
| `hub` | 轉盤中心圓章 | a round antique brass medallion / centre cap of a prize wheel, engraved with a simple eight-point star and a small dusty-rose gem in the middle, centered, filling about 70% of the frame |
| `pointer` | 頂端指針 | a small ornate antique brass pointer / arrow pointing DOWN, teardrop shape with a tiny sage gem at the top, centered, filling about 60% of the frame, plenty of empty margin |
| `ticket` | 銘謝惠顧圖示 | a small torn paper raffle ticket stub in cream and dusty rose with a perforated edge, slightly tilted, cute and simple, centered, filling about 65% of the frame |

## 2. 兩條動作條（1536×1024，三格）

### `cat-strip.png` — 招財貓揮手（吉祥物）
```
[共用前綴] +
Sprite sheet of ONE cute chubby round pixel-art maneki-neko lucky cat, cream white fur with a few muted orange
patches, red collar with a tiny brass bell, holding a small brass coin in its left paw, shown three times side by
side in three equal columns (left, middle, right), same size and same position in each column.
Column 1: right paw down by its chest. Column 2: right paw raised halfway. Column 3: right paw raised high in a
beckoning wave. Happy closed-eye smile. 3:2 landscape, 1536x1024.
```

### `confetti-strip.png` — 中獎彩帶（三格爆開）
```
[共用前綴] +
Sprite sheet of a pixel-art burst of confetti and small brass coins, shown in three equal columns (left, middle,
right), same center position in each column. Column 1: a small tight cluster of confetti just starting to burst
from the center. Column 2: the confetti spread halfway out. Column 3: the confetti fully spread wide with pieces
near the edges of the column. Confetti pieces are small squares and thin strips in dusty rose, sage, misty blue,
milk tea and brass. No characters, no text. 3:2 landscape, 1536x1024.
```

## 3. 驗收 checklist

- [ ] 沒有文字／數字／logo
- [ ] 背景純平塗暖白（`rim` 的圓環內部也是純背景色）
- [ ] 真的是方塊像素，不是柔邊插畫
- [ ] 銅色是霧面暗金，不是亮金；沒有黑底
- [ ] 兩條動作條三格同大小同位置
- [ ] 檔名與位置正確
