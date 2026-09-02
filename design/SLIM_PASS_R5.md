# 首頁去蕪存菁執行清單（R5）

範圍：僅精簡文案與既有版式；不改版面結構、不刪除區塊、不調整色彩 token。以下共 25 項，P1 先做，P2 視首輪實作後的實機觀感補做。

## A）文案刪冗

1. **P1｜Hero 副標**：`從訪談、資料與流程找出真正卡點，交付可重算的分析、可操作的原型與可追蹤的系統。` → `從混亂資訊找出卡點，交付可驗收的成果。`
2. **P2｜能力帶標籤**：`我能做什麼` → `能力`
3. **P1｜Hero 狀態**：`可承接專案合作` → `可合作`
4. **P1｜Hero 主 CTA**：`看代表案例 ↓` → `看案例 ↓`
5. **P2｜Hero 次 CTA**：`帶著問題來聊 →` → `直接聯絡 →`
6. **P1｜案例區標題**：`先看成果，再看怎麼做到` → `先看成果`
7. **P1｜案例區導讀**：`每一案都從「客戶講不清楚的一句話」開始，收在可以重算、可以驗收的數字。` → `刪除整句（成果卡已同時呈現問題、數字與案例入口）。`
8. **P1｜流程區導讀**：`不先急著做東西——先把「說的需求」換成「該解的問題」。` → `把需求換成可解的問題。`
9. **P2｜流程銜接連結**：`看我如何把流程做成可操作 Demo ↓` → `看可操作 Demo ↓`
10. **P1｜Demo 區標題**：`不只提案，也把它做成能操作的東西` → `能操作的 Demo`
11. **P1｜Demo 區導讀**：`挑一個，30 秒內開始操作。` → `刪除整句（卡片上的「打開 Demo」已提供明確下一步）。`
12. **P1｜聯絡區副標**：`描述你的卡點就好，不用先整理成需求。` → `描述卡點即可。`
13. **P2｜聯絡備選路徑**：`還沒準備聯絡？先看最完整案例 →` → `先看完整案例 →`
14. **P1｜Footer 品牌說明**：`把講不清楚的問題，變成講得清楚的交付物。` → `刪除整句（與 Hero 主張、頁尾橋接句重複）。`
15. **P1｜Footer 橋接句**：`交付物的價值，是讓下一個決定變清楚。` → `讓下一個決定更清楚。`

## B）版式收斂

16. **P1｜`.home section`：`padding: 120px 0` → `96px 0`**；桌機各段減少 48px 總高度，仍保留清楚分段。
17. **P1｜`@media (max-width: 980px) .home section`：`padding: 88px 0` → `72px 0`**。
18. **P1｜`@media (max-width: 640px) .home section`：`padding: 72px 0` → `52px 0`**；手機全頁優先去除段落間過量空白。
19. **P1｜`.home .section-row`：`margin-bottom: 40px` → `24px`**；`@media (max-width: 640px)`：`28px` → `20px`。
20. **P1｜`.sec-lede`：`font-size: 16px; margin: -28px 0 40px` → `font-size: 15px; margin: -14px 0 28px`**；`@media (max-width: 640px)`：`margin: -16px 0 28px` → `margin: -10px 0 20px`（僅供仍保留導讀的區段）。
21. **P1｜`.capability`：`min-height: 44px; padding: 9px 12px; font-size: 14px` → `min-height: 40px; padding: 7px 10px; font-size: 13px`**；`@media (max-width: 820px)` 的 `padding: 8px 10px` → `7px 10px`。
22. **P1｜`.proof`／`.proof .p`／`.proof b`：`gap: 10px; margin-top: 24px` → `gap: 8px; margin-top: 18px`；`padding: 10px 16px` → `8px 12px`；`font-size: 22px` → `20px`**。
23. **P2｜`.feat .body`／`.demo3 .body`：`padding: 24px 26px 26px` → `20px 22px 22px`；`padding: 20px 22px` → `16px 18px`**；同時 `.feat .hook`：`15px` → `14px`、`.demo3 .hook`：`14px` → `13px`。
24. **P1｜`.act`：`min-height: 42vh; padding-left: 64px` → `min-height: 30vh; padding-left: 56px`**；`.act .n`：`40px × 40px; font-size: 16px` → `36px × 36px; font-size: 15px`，並將定位 `top: calc(50% - 20px)` → `calc(50% - 18px)`；`.acts::before left`：`19px` → `17px`。
25. **P1｜`.cta-stage`／`.foot3-line`／`.foot3-base`／`@media (max-width: 820px) .home footer`：`padding: 56px; min-height: 360px` → `padding: 40px; min-height: 280px`；`margin-bottom: 40px` → `24px`；`margin-top: 40px; padding-top: 20px` → `margin-top: 28px; padding-top: 16px`；`padding: 48px 0` → `36px 0`**。聯絡區與 Footer 仍各自存在，但不再形成兩段連續的大留白。
