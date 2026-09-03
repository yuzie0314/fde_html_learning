# EN Site — Origami 3D 統一風格規範

> 英文版（/en/）專屬視覺。中文版維持 voxel；兩套共用同一色盤與「漂浮底座」構圖語言，
> 所以放在一起仍像同一個作品集。所有英文版生圖 prompt 都必須以 §2 前綴開頭並通過 §4 驗收。

## 1. 風格定義

- **Origami paper craft**：一切物件由摺紙構成——平整紙面、俐落硬摺痕、乾淨的幾何面；看得出是「紙摺出來的」，不是低多邊形 3D。
- **視角**：柔和的 3/4 攝影棚角度（約 25° 俯角），全套固定同一角度。
- **底座**：每張圖的場景都放在**一張漂浮的方形厚紙墊**上（暖白或淺牛皮紙色），邊緣可見紙的厚度與輕微翹角；底下一片柔和淺影——呼應中文版 voxel 的漂浮方形底座。
- **光線**：柔和攝影棚光，主光左上；紙面有細膩的明暗面轉折，但**無強烈陰影、無反光材質**。
- **背景**：純色平塗暖白 **#F4F3EE**。
- **色盤**（每張最多 5 色相）：紙白 #F4F3EE／淺牛皮 #E2D9C8（底座、配角）、墨灰 #2B2925（細節）、**品牌藍 #2A78D6**（主角摺紙）＋淺藍 #D6E4F7（面）、琥珀 #EDA100（極少量，每張最多一個小摺紙件）。
- **不要**：文字、字母、數字、logo、人臉細節（小摺紙人偶可以）、寫實材質、玻璃金屬、霓虹、漸層背景。

## 2. 共用前綴（每個 prompt 逐字開頭）

```
Origami paper craft 3D scene, everything folded from clean matte paper with crisp fold lines and flat facets,
soft studio lighting from the upper left with gentle shading on the paper faces, no glossy materials.
The whole scene sits on ONE floating thick square paper mat (warm white or light kraft) with slightly lifted
corners and a soft light shadow beneath it. Fixed gentle three-quarter camera angle (about 25 degrees elevation),
same angle across the whole series. Plain solid warm off-white background (#F4F3EE), nothing outside the mat.
Limited palette: paper white #F4F3EE, light kraft #E2D9C8, ink grey #2B2925, brand blue #2A78D6 and pale blue
#D6E4F7 for the main subject, at most one tiny amber #EDA100 folded piece. No text, no letters, no numbers,
no logos, no faces. Subject centered with 10% margin on all sides.
```

## 3. 版面規格

| 用途 | 生成 | 輸出 |
|---|---|---|
| EN 首頁 hero | 1536×1024 | `assets/img/en/hero.webp` 1536×1024 ≤220KB |
| EN 案例封面 ×6 | 1536×1024 | `assets/img/en/cases/<slug>.webp` 1200×800 ≤150KB |
| EN Demo 封面 ×6 | 1536×1024 | `assets/img/en/demos/<slug>.webp` 1200×800 ≤150KB |

原始檔存 `assets/img/src/origami/`（hero.png、cases/<slug>.png、demos/<slug>.png）。

## 4. 驗收 checklist

- [ ] 看得出是摺紙（摺痕、紙面、紙厚），不是平滑 3D 或插畫
- [ ] 同一 3/4 視角、同一張漂浮紙墊、同一光向
- [ ] 背景純暖白；品牌藍主角；琥珀最多一小件
- [ ] 無文字／字母／數字／logo
- [ ] 全系列並排像同一位紙藝家的展櫃

## 5. 場景（接在前綴後）

### hero.png
```
On the paper mat: on the left a crumpled ball of ink-grey paper with loose crumpled scraps around it; in the
middle a brand-blue folded paper archway; passing through it, the paper transforms into a perfect origami crane
in brand blue, standing at the right beside a neat stack of crisply folded pale-blue paper documents. One tiny
amber folded square sits inside the crumpled pile. Calm, airy composition, subject slightly right of center.
```

### cases/frozen-food.png
```
On the paper mat: an origami delivery van folded from brand-blue paper with a white folded snowflake on its side,
two pale-blue folded boxes, and three fanned-out folded paper slips that do not line up; an origami magnifying
glass (ink-grey folded frame) rests over the gap between slips with one tiny amber folded square beneath it.
```

### cases/marital-property.png
```
On the paper mat: a long pleated paper timeline ribbon folded like an accordion running left to right, first
half pale blue and second half white, cut in the middle by a standing brand-blue folded divider; small folded
paper coins and documents along the ribbon; at the right end an origami balance scale, level. One tiny amber
folded piece just after the divider.
```

### cases/trip-pricing.png
```
On the paper mat: a large pale-blue folded paper document assembled like a puzzle of seven creased panels with
three panels missing (mat visible through the gaps); beside it an origami folded map with a dotted route and two
brand-blue folded pin flags, and a blank white folded price tag. One missing gap edged with a thin amber fold.
```

### cases/nutrition-liff.png
```
On the paper mat: a standing origami smartphone (ink-grey folded frame, pale-blue screen with a folded bowl
shape), an accordion-folded desk calendar with small brand-blue folded check marks on some cells, and a
pale-blue folded speech bubble floating above on a hidden support. One amber folded check among the blue ones.
```

### cases/label-compliance.png
```
On the paper mat: an origami food pouch folded from pale-blue paper with a white label panel of embossed fold
lines (no text); an origami magnifying glass over the label; beside it a white folded checklist card with
brand-blue folded ticks, one box edged in amber.
```

### cases/video-production.png
```
On the paper mat: seven tiny identical origami storefronts in a back row, each with a small pale-blue folded
film-clip card; a long brand-blue pleated conveyor ribbon carries the clips toward a white folded output box
with a brand-blue folded play triangle. One amber clip in the middle of the ribbon.
```

### demos/bakery.png
```
On the paper mat: an origami bakery stall with a pale-blue and white striped folded awning, four golden-kraft
folded bread loaves on the counter, a small folded paper bag, and a tiny folded calendar with one brand-blue
marked square.
```

### demos/esg.png
```
On the paper mat: five small faceless origami figures in different muted paper colours standing in a half
circle around a tall white folded certificate card with a brand-blue folded ribbon rosette; behind them a small
folded screen with simple pale-blue bar shapes.
```

### demos/ai-service.png
```
On the paper mat: a large upright folded chat window with three pale-blue and brand-blue folded speech-bubble
cards; a small origami cat sits on its top edge; a tiny folded parcel box and an origami delivery truck at its
foot.
```

### demos/order.png
```
On the paper mat: a small origami restaurant table with a standing folded card showing an abstract folded
square pattern, an origami phone lying flat with pale-blue menu strips on screen, and at the back a white
folded kitchen board with three folded ticket cards in a row, one with a tiny amber corner.
```

### demos/roulette.png
```
On the paper mat: an origami prize wheel with pleated pale-blue, white and brand-blue segments on a folded
stand, a tiny folded pointer on top, a small origami lucky cat beside it with one paw raised, and a few folded
kraft coin discs. Amber only on the pointer tip.
```

### demos/streamer_ai.png
```
On the paper mat: an origami streaming desk with a folded ring light on a stand, a small folded microphone, an
origami laptop, and a tall folded phone showing pale-blue chat strips; two small brand-blue folded hearts float
above on hidden supports.
```
