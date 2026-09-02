# Codex 任務：esg 與 streamer_ai 的 6 張生成圖

專案：`C:\Users\USER\fde_html_learning-main\fde_html_learning-main`。你只負責生圖；轉檔與頁面由 Claude 依 `design/DESIGN_CONCEPT_ESG_STREAMER.md` 實作。

## 生成清單（場景描述以 DESIGN_CONCEPT_ESG_STREAMER.md 對應章節為準）

**Voxel（遵守 design/VOXEL_STYLE_GUIDE.md §2 前綴與 §4 驗收；參考 assets/img/src/voxel/hero.png 的視角、底座、光影）**
```
assets/img/src/voxel/demos/esg-hero.png            1536x1024  §1.3：五位 voxel 學員圍培訓螢幕（五個無字色塊）＋證書＋抽象QR方格＋儀表板螢幕；琥珀＝認證印章
assets/img/src/voxel/demos/esg-dashboard-empty.png 1536x1024  §1.7：辦公桌＋抽象柱狀圖螢幕＋五個學員方塊；琥珀最多一個待辦標記
assets/img/src/voxel/demos/streamer-desk.png       1536x1024  §2.8：直播桌＋麥克風＋攝影機＋色塊螢幕＋小型立方 AI 助手；鼠尾草僅耳機/植物；琥珀＝錄製提示
```

**像素（遵守 design/CATS_IMAGE_BRIEF.md §0 硬性規格：16-bit 方塊像素、深色描邊、8–12 色、平塗、無文字、純 #F4F3EE 背景）**
```
assets/img/src/pixel/streamer-avatar.png   1024x1024  §2.5：簡化主播角色——墨灰短髮、鼠尾草耳機、奶茶上衣、放鬆表情、無寫實五官
assets/img/src/pixel/streamer-empty.png    1024x1024  §2.6：單一小麥克風（或方形小機器人），墨灰描邊、鼠尾草與霧藍平塗
assets/img/src/pixel/esg-completion.png    1024x1024  §1.6：簡化證書＋小印章（或戴安全帽的圓潤學員），證書上不得有可辨識字元
```

規則：每張生完立刻存檔；voxel 逐張與 hero.png 比對視角/底座/光影；不要跑 Python；不要改 HTML/CSS。

## 回報
列出 6 張路徑、哪張重生過、原因。
