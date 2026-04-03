/**
 * War Inc Rising - 首頁全資料數據庫 (繁、簡、英三語版)
 */
const INDEX_DATABASE = {
  "ui": {
    "zh": {
      "hero_title": "歡迎來到 War Inc Rising <span class='not-official'>非</span>官方資料站",
      "recruit_title": "✨ [萌新軍本部] 招募中",
      "recruit_intro": "我們是一群熱衷於<strong>《War Inc Rising》</strong>的中文玩家社群，致力於打造一個兼具實力與交流的遊戲環境。透過 <strong>Discord</strong>，你可以隨時參與即時技術交流、戰術討論，並與夥伴並肩作戰，享受合作與成長的樂趣。",
      "guild_list_title": "🌟 公會體系介紹",
      "manifesto": "萌新公會現正積極招募高度活躍、願意參與公會活動的玩家，我們重視的是上線率、參與度與團隊配合，而不是分數或是否課金，只要你夠活躍、願意一起投入戰鬥與成長，無論是否課金，在這裡都一定有你的位置。",
      "btn_apply": "🌐 公會申請教學 (附圖)",
      "btn_discord": "💬 加入 Discord 討論區",
      "nav_title": "🚀 快速導覽",
      "nav_subtitle": "點擊下方卡片，查看詳細遊戲資料。",
      "card_building_t": "建築", "card_building_d": "建築物基本介紹",
      "card_unit_t": "士兵介紹", "card_unit_d": "單位基本介紹",
      "card_mode_t": "遊戲模式", "card_mode_d": "模式基本介紹",
      "card_guide_t": "綜合攻略", "card_guide_d": "持續更新中",
      "back_to_top": "▲",
      "update_info": "© 版權所有，請勿盜用 | 內容更新：2026/04/02"
    },
    "cn": {
      "hero_title": "欢迎来到 War Inc Rising <span class='not-official'>非</span>官方资料站",
      "recruit_title": "✨ [萌新军本部] 招募中",
      "recruit_intro": "我们是一群热衷于<strong>《War Inc Rising》</strong>的中文玩家社群，致力于打造一个兼具实力与交流的游戏环境。通过 <strong>Discord</strong>，你可以随时参与即时技术交流、战术讨论，并与伙伴并肩作战，享受合作与成长的乐趣。",
      "guild_list_title": "🌟 公会体系介绍",
      "manifesto": "萌新公会现正积极招募高度活跃、愿意参与公会活动的玩家，我们重视的是上线率、参与度与团队配合，而不是分数或是否氪金，只要你够活跃、愿意一起投入战斗与成长，无论是否氪金，在这里都一定有你的位置。",
      "btn_apply": "🌐 公会申请教学 (附图)",
      "btn_discord": "💬 加入 Discord 讨论区",
      "nav_title": "🚀 快速导览",
      "nav_subtitle": "点击下方卡片，查看详细游戏资料。",
      "card_building_t": "建筑", "card_building_d": "建筑物基本介绍",
      "card_unit_t": "士兵介绍", "card_unit_d": "单位基本介绍",
      "card_mode_t": "游戏模式", "card_mode_d": "模式基本介绍",
      "card_guide_t": "综合攻略", "card_guide_d": "持续更新中",
      "back_to_top": "▲",
      "update_info": "© 版权所有，请勿盗用 | 内容更新：2026/04/02"
    },
    "en": {
      "hero_title": "Welcome to War Inc Rising <span class='not-official'>Unofficial</span> Wiki",
      "recruit_title": "✨ [萌新軍本部] Recruitment",
      "recruit_intro": "We are a dedicated community of <strong>War Inc Rising</strong> players committed to building a competitive yet supportive environment. Through <strong>Discord</strong>, you can engage in real-time tactical discussions, share advanced techniques, and fight alongside comrades for mutual growth.",
      "guild_list_title": "🌟 Our Guild System",
      "manifesto": "萌新軍本部 is actively looking for highly active players who want to participate in guild activities. We prioritize online consistency, participation, and teamwork over high scores or spending. As long as you are active and willing to grow with us, there is a place for you here, regardless of your F2P/P2W status.",
      "btn_apply": "🌐 Application Guide (Images)",
      "btn_discord": "💬 Join Discord Server",
      "nav_title": "🚀 Quick Navigation",
      "nav_subtitle": "Click the cards below to explore detailed game data.",
      "card_building_t": "Buildings", "card_building_d": "Basic facility overviews",
      "card_unit_t": "Troops", "card_unit_d": "Unit compendium and stats",
      "card_mode_t": "Game Modes", "card_mode_d": "PVE & PVP mechanics",
      "card_guide_t": "Advanced Guides", "card_guide_d": "Continuously updated",
      "back_to_top": "Top",
      "update_info": "© All Rights Reserved | Updated: 2026/04/02"
    }
  },
  "guilds": [
    /* 專有名稱維持繁體不翻譯 */
    { 
      "zh": "🏆 萌新軍本部 ｜ 高戰力   × 高活躍（需加入 Discord）", 
      "cn": "🏆 萌新军本部 ｜ 高战力   × 高活跃（需加入 Discord）", 
      "en": "🏆 萌新軍本部 | High Power × High Activity (Discord Required)" 
    },
    { 
      "zh": "🌙 新月軍新月 ｜ 中戰力   × 高活躍（需加入 Discord）", 
      "cn": "🌙 新月军新月 ｜ 中战力   × 高活跃（需加入 Discord）", 
      "en": "🌙 新月軍新月 | Mid Power × High Activity (Discord Required)" 
    },
    { 
      "zh": "⚔️ 萌新軍破曉 ｜ 戰力不拘 × 高活躍（需加入 Discord）", 
      "cn": "⚔️ 萌新军破晓 ｜ 战力不拘 × 高活跃（需加入 Discord）", 
      "en": "⚔️ 萌新軍破曉 | All Power × High Activity (Discord Required)" 
    },
    { 
      "zh": "🔥 萌新軍星火 ｜ 半養老   × 無公會戰", 
      "cn": "🔥 萌新军星火 ｜ 半养老   × 无公会战", 
      "en": "🔥 萌新軍星火 | Semi-casual × No Guild War" 
    },
    { 
      "zh": "🌿 萌新小鎮   ｜ 輕鬆養老，休閒遊玩 × 無公會戰", 
      "cn": "🌿 萌新小镇   ｜ 轻松养老，休闲游玩 × 无公会战", 
      "en": "🌿 萌新小鎮 | Casual & Relaxed × No Guild War" 
    }
  ]
};