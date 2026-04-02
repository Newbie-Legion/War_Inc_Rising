/**
 * War Inc Rising - 公會申請教學數據庫 (繁中原文無損 + 專業英文)
 */
const GUILD_APP_DATABASE = {
  "ui": {
    "zh": {
      "title": "🔍️ 公會申請教學 - 遊戲內步驟",
      "subtitle": "歡迎您考慮加入 <strong>萌新軍本部</strong>！以下是詳細圖片教學：",
      "breadcrumb_home": "🏠 首頁",
      "breadcrumb_current": "公會申請教學",
      "step": "步驟",
      "btn_discord": "📢 點擊加入 Discord 討論區",
      "note_title": "⚠️ 重要提醒 (名額協調)：",
      "note_content": "由於公會名額有限，且遊戲內建招募系統不完善，導致大量人員申請而無法篩選，如遇滿額或申請無回應時，建議優先加入 Discord 討論，在申請條件均符合的情況下，能透過 Discord 活躍交流的申請者將被優先考慮。",
      "back_to_top": "▲",
      "footer": "© 萌新軍本部 製作 | 內容更新時間：2026/04/02"
    },
    "en": {
      "title": "🔍️ Guild Application Guide - In-Game Steps",
      "subtitle": "Thank you for considering joining the <strong>Newbie Legion</strong>! Below is the detailed visual guide:",
      "breadcrumb_home": "🏠 Home",
      "breadcrumb_current": "Application Guide",
      "step": "STEP",
      "btn_discord": "📢 Click to Join Discord Server",
      "note_title": "⚠️ Important Note (Slot Coordination):",
      "note_content": "Due to limited guild slots and the unoptimized in-game recruitment system, we receive a high volume of applications. If the guild is full or your application is pending, we highly recommend joining our Discord. Applicants who are active in Discord discussions will be prioritized if they meet the requirements.",
      "back_to_top": "Top",
      "footer": "Produced by Newbie Legion | Updated: 2026/04/02"
    }
  },
  "steps": [
    {
      "id": 1,
      "title_zh": "步驟 1: 點選主畫面城堡圖示",
      "title_en": "Step 1: Click the Castle Icon on Main Screen",
      "desc_zh": "進入遊戲主畫面後，請點選螢幕上方中央的「城堡」圖示（如圖所示）。",
      "desc_en": "From the game's main lobby, click the 'Castle' icon located at the top center of the screen (as shown in the image).",
      "img": "images/step1_castle.png",
      "img_class": "step-1-img"
    },
    {
      "id": 2,
      "title_zh": "步驟 2: 輸入公會 ID 並加入",
      "title_en": "Step 2: Enter Guild ID and Apply",
      "desc_zh": "搜尋公會名稱或輸入公會ID：",
      "desc_en": "Search for the Guild Name or enter the Guild ID:",
      "guild_list": [
        { "name": "🏆 萌新軍本部", "id": "38779" },
        { "name": "🌙 新月軍新月", "id": "1202849" },
        { "name": "⚔️ 萌新軍破曉", "id": "1984705" },
        { "name": "🔥 萌新軍星火", "id": "1809328" },
        { "name": "🌿 萌新小鎮", "id": "1601718" }
      ],
      "desc_footer_zh": "後按下顯示的<strong>「加入」按鈕</strong>，即可申請加入主公會或分公會。",
      "desc_footer_en": "Then press the <strong>'Join' button</strong> to submit your application for the main or sub-guild.",
      "img": "images/join.png",
      "img_class": ""
    },
    {
      "id": 3,
      "title_zh": "步驟 3: 審核",
      "title_en": "Step 3: Verification",
      "desc_zh": "完成遊戲內申請後，請務必點擊連結加入我們的 Discord 伺服器，並在 #招募專區# 頻道提供您的遊戲 ID。",
      "desc_en": "After submitting your in-game application, please join our Discord server and provide your In-Game ID (IGN) in the #Recruitment# channel."
    }
  ]
};