# 掃碼點餐 Demo — 像素圖示 + 像素廚師 Brief（demos/order）

> 目的：把點餐頁與廚房看板上的 emoji 全部換成「可愛像素風」圖示，並在主畫面放一位揮手歡迎的像素廚師。
> 風格要和 AI 客服的像素貓同一家：復古 16-bit、方塊像素、粗描邊、平塗、微胖圓潤。

## 0. 硬性規格（與 CATS_IMAGE_BRIEF 相同）

| 項目 | 規定 |
|---|---|
| 圖示生成尺寸 | **1024 × 1024**，存 `assets/img/src/order/<id>.png`（會被縮到 128 格真像素） |
| 廚師動作條 | **1536 × 1024（橫式）**，存 `assets/img/src/order/chef-strip.png`；畫面**等分成左中右三格**，同一位廚師三個連續動作（見 §2） |
| 構圖 | 主體置中、佔 70–80%、四邊留 10%；**簡單、輪廓粗**，縮到 128 格仍認得出 |
| 背景 | **純色平塗暖白 #F4F3EE**，無漸層、無地板、無陰影、無場景 |
| 風格 | 復古 16-bit 像素畫，大顆方形像素、清楚深色描邊、平塗色塊、最多 10–12 色；**無抗鋸齒、無柔邊、無 3D、無寫實** |
| 氣質 | 可愛、圓潤、微胖、放鬆；食材用「動物本尊」代表（雞腿→一隻雞） |
| 文字 | **完全不得出現文字、字母、數字、logo、浮水印** |
| 一致性 | 所有圖同樣像素密度、同樣描邊粗細、同樣配色氣質 |

**共用前綴（每個 prompt 開頭貼上）：**
```
Retro 16-bit pixel art icon, single subject centered, large square pixels, crisp dark outline,
flat solid color fills, limited palette of about 10 colors, no anti-aliasing, no gradients, no shading blur,
no 3D, cute chubby rounded hand-drawn game sprite feel, plain solid warm off-white background (#F4F3EE)
with nothing else in the scene, no floor, no shadow, no text, no letters, no logo, no watermark.
Subject fills about 75% of the frame with even margin. 1:1 square, 1024x1024.
```

## 1. 十二個圖示（`assets/img/src/order/<id>.png`）

| id | 取代的 emoji | 用途 | 接在前綴後的描述 |
|---|---|---|---|
| `bento` | 🍱 | 餐廳標題 | a Japanese bento lunch box seen from a slight top angle, lid off, with rice, a piece of chicken and green vegetables in compartments |
| `bag` | 🛍️ | 外帶 | a paper takeout bag with two handles, slightly bulging, kraft brown color |
| `plate` | 🍽️ | 內用 | a round white plate with a fork on the left and a knife on the right, seen from above |
| `rice` | 🍚 | 要飯 | a small ceramic bowl filled with a rounded mound of white rice, a few steam puffs above |
| `norice` | 🚫 | 不要飯 | an empty small ceramic bowl seen from the side, nothing inside, tilted slightly |
| `chicken` | 🍗 | 招牌雞腿 | a cute chubby round chicken sitting, orange-yellow feathers, red comb, tiny wings, relaxed eyes |
| `fish` | 🐟 | 香煎鯖魚 | a cute chubby round mackerel fish with blue-green striped back and silver belly, small smile |
| `pig` | 🍖 | 糖醋排骨 | a cute chubby round pink pig sitting, round snout, little ears, relaxed eyes |
| `chili` | 🌶️ | 麻婆豆腐 | a white block of tofu with a small red chili pepper leaning on it |
| `cow` | 🥩 | 蔥爆牛肉 | a cute chubby round black-and-white spotted cow sitting, pink nose, small horns |
| `veggie` | 🥬 | 素食滷味 | a round head of green cabbage with a few layered leaves and a tiny leaf on top |
| `check` | ✅ | 訂單送出 | a round green badge with a thick white check mark inside, slightly bouncy cute shape |

## 2. 像素廚師動作條（`assets/img/src/order/chef-strip.png`，1536×1024）

同一位廚師的三格連續動作，**左→右**排列，每格等寬（512px）、廚師在每格內位置相同、大小相同：

```
Retro 16-bit pixel art sprite sheet of ONE cute chubby round chef character, shown three times side by side
in three equal columns (left, middle, right), same size and same position in each column, large square pixels,
crisp dark outline, flat solid color fills, about 10 colors, no anti-aliasing, no gradients, no 3D.
The chef: round body, tall white chef hat, white double-breasted jacket, rosy cheeks, friendly closed-eye smile,
holding a wooden spoon in the left hand. Column 1: right arm down at the side. Column 2: right arm raised
halfway, waving. Column 3: right arm raised high, open palm waving hello. Plain solid warm off-white background
(#F4F3EE), no floor, no shadow, no text, no letters, no numbers, no logo, no watermark. 3:2 landscape, 1536x1024.
```

## 3. 驗收 checklist

- [ ] 沒有文字／logo
- [ ] 背景純平塗暖白
- [ ] 真的是方塊像素，不是柔邊插畫
- [ ] 12 個圖示氣質一致、可愛圓潤
- [ ] 廚師三格：同一人、同大小、只有右手動作不同
- [ ] 檔名與位置正確
