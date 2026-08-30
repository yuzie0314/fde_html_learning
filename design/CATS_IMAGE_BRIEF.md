# AI 客服 Demo — 像素貓頭像 Brief（demos/ai-service）

> 目的：把客服頭像的 🤖 換成「微胖、可愛、有手感」的像素風貓咪。6 隻花色與姿勢都不同，
> 但像同一位像素畫家畫的同一套。要有手繪像素感，不要 AI 渲染感。

## 0. 硬性規格

| 項目 | 規定 |
|---|---|
| 生成尺寸 | **1024 × 1024（正方形）**，存 `assets/img/src/cats/cat-<n>.png`（n = 1–6） |
| 網頁實際尺寸 | 會被縮到 **64×64 真像素格**（Claude 用腳本縮圖＋減色），所以**造型要簡單、輪廓粗**，細節在 64 格內要認得出 |
| 構圖 | 貓佔畫面 70–80%、**置中**、四邊留 10%；頭像會裁成**圓形**，四角不放東西 |
| 背景 | **純色平塗** 暖白 **#F4F3EE**，不要漸層、不要地板、不要陰影、不要場景 |
| 風格 | 復古 16-bit 像素畫（像 Game Boy Advance / 早期 RPG 的角色頭像）；**大顆方形像素、清楚的深色描邊、平塗色塊、最多 8–12 色**；不要抗鋸齒、不要柔邊、不要 3D、不要漸層光影、不要寫實毛髮 |
| 貓的體型 | **微胖**：圓臉、圓身、短腿、肚子有點鼓；表情放鬆可愛（瞇眼、小嘴），不要大眼閃亮的「AI 萌」 |
| 文字 | **完全不得出現文字、字母、數字、logo、浮水印** |
| 一致性 | 6 隻同樣的像素密度、同樣的描邊粗細、同樣的眼睛畫法 |

**共用前綴（每個 prompt 開頭貼上）：**
```
Retro 16-bit pixel art character portrait of one chubby round cat, centered, large square pixels,
crisp dark outline, flat solid color fills, limited palette of about 10 colors, no anti-aliasing,
no gradients, no shading blur, no 3D rendering, hand-drawn game sprite feel like an early RPG portrait,
plain solid warm off-white background (#F4F3EE) with nothing else in the scene, no floor, no shadow,
no text, no letters, no logo, no watermark. Cat fills about 75% of the frame with even margin. 1:1 square, 1024x1024.
```

## 1. 六隻貓（`assets/img/src/cats/cat-<n>.png`）

| 檔名 | 花色 | 姿勢 | 接在前綴後的描述 |
|---|---|---|---|
| `cat-1` | 橘虎斑 | 端坐正面 | an orange tabby cat with darker orange stripes and a cream belly, sitting upright facing front, tail curled around its feet, relaxed half-closed eyes |
| `cat-2` | 賓士貓（黑白） | 麵包坐姿（loaf） | a black-and-white tuxedo cat with a white chest and white paws, in a loaf position with paws tucked under, content sleepy expression |
| `cat-3` | 三花 | 舉一隻手打招呼 | a calico cat with white, orange and black patches, sitting and raising one front paw as if waving hello, small open mouth |
| `cat-4` | 灰藍（俄羅斯藍） | 側躺露肚 | a solid grey-blue cat lying on its side showing its round belly, one paw stretched up, eyes closed and smiling |
| `cat-5` | 白貓（帶一點奶茶斑） | 抱著毛線球 | a white cat with light tan ears and a tan spot on its back, hugging a small ball of yarn against its round belly, looking down at it |
| `cat-6` | 暹羅／重點色 | 伸懶腰 | a cream siamese cat with dark brown face, ears, paws and tail, doing a stretch with front legs extended forward and rump up, eyes squinted |

## 2. 驗收 checklist

- [ ] 沒有文字／logo
- [ ] 背景是純平塗暖白，沒有地板或影子
- [ ] 真的是「方塊像素」風格，不是柔邊插畫或 3D
- [ ] 貓是圓的、微胖的，表情放鬆
- [ ] 6 隻花色、姿勢都不同，但像同一套
- [ ] 檔名與位置正確
