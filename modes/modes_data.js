/**
 * War Inc Rising - 遊戲模式全資料數據庫 (100% 原文無損轉移)
 */
const MODE_DATABASE = {
  "ui": {
    "zh": {
      "title": "🕹️ 遊戲模式",
      "subtitle": "各類型 PVE 與 PVP 玩法機制與獎勵全解析",
      "breadcrumb_home": "🏠 首頁",
      "breadcrumb_current": "遊戲模式",
      "back_to_top": "▲",
      "update_info": "© 萌新軍本部 製作 | 內容更新時間：2026/04/02",
      "table_feature": "特色",
      "table_desc": "說明"
    },
    "en": {
      "title": "🕹️ Game Modes",
      "subtitle": "Full analysis of PVE & PVP mechanics and rewards",
      "breadcrumb_home": "🏠 Home",
      "breadcrumb_current": "Modes",
      "back_to_top": "Top",
      "update_info": "Produced by 萌新軍本部 | Updated: 2026/04/02",
      "table_feature": "Feature",
      "table_desc": "Description"
    }
  },
  "modes": [
    {
      "id": "coop",
      "name_zh": "🤝 協作模式",
      "name_en": "🤝 Co-op",
      "intro_zh": "協作模式為遊戲內建的合作塔防玩法，直接套用玩家已培養的士兵等級，因此士兵等級是影響通關難度的關鍵因素。等級越高，不僅能大幅提升容錯率，也能有效提高挑戰更高波次的成功率。",
      "intro_en": "Co-op Mode is a built-in collaborative tower defense. It directly uses your trained unit levels, making unit strength the primary factor in difficulty. Higher levels significantly increase the room for error and the success rate of reaching higher waves.",
      "stats": [
        { "f_zh": "對戰形式", "f_en": "Format", "d_zh": "塔防合作", "d_en": "Co-op Tower Defense" },
        { "f_zh": "目標", "f_en": "Objective", "d_zh": "盡可能通關最高波次", "d_en": "Reach the highest wave possible" }
      ],
      "mechanics_title_zh": "獨特機制",
      "mechanics_title_en": "Unique Mechanics",
      "mechanics_zh": "模式中設有多種隨機機制，包括「轉盤」與「骰子大富翁」，兩種玩法會交替輪換；此外，還內建獨特的「天使／惡魔選擇系統」。若雙方玩家皆選擇正確選項，將可獲得額外的士兵單位。為確保效益最大化，建議在開局前先行協調選擇策略。",
      "mechanics_en": "The mode features random mechanics such as 'Wheel' and 'Dice Monopoly' that rotate periodically. Additionally, it includes an 'Angel/Devil' selection system. If both players pick the correct options, extra units are rewarded. For maximum efficiency, coordinate your selection strategy before starting.",
      "season_title_zh": "賽季與獎勵",
      "season_title_en": "Season & Rewards",
      "season_zh": "通關不同難度等級皆可獲得對應獎勵。值得一提的是，此模式能提供大量木材資源，當指揮所升級面臨木材短缺時，是快速累積資源的有效途徑。",
      "season_en": "Rewards are granted based on the difficulty cleared. Notably, this mode provides massive amounts of Wood, making it an efficient way to accumulate resources when upgrading the Command Post."
    },
    {
      "id": "infinite",
      "name_zh": "♾️ 無限",
      "name_en": "♾️ Infinite War",
      "intro_zh": "無限模式要求玩家建立穩固的陣型，以應對持續重生並不斷湧入的敵人。每個無限賽季為期 7 天，期間將依序登場 7 組不同類型的特定敵人，考驗玩家的應變與配置能力。",
      "intro_en": "Infinite Mode challenges players to build stable formations against waves of respawning enemies. Each 7-day season features 7 unique enemy compositions, testing tactical adaptability and unit synergy.",
      "stats": [
        { "f_zh": "對戰形式", "f_en": "Format", "d_zh": "PVE", "d_en": "PVE" },
        { "f_zh": "主要目標", "f_en": "Objective", "d_zh": "盡可能殺傷敵人", "d_en": "Inflict maximum damage" }
      ],
      "mechanics_title_zh": "分組與獎勵",
      "mechanics_title_en": "Ranking & Rewards",
      "mechanics_zh": "隨著隊伍累積總傷害提升，玩家將由第 1 小組逐步晉升至第 9 小組。此模式最核心的獎勵為「鍛造石」，士兵升至 7 等以上皆需仰賴其支撐。當成功進入高等小組後，每日累積總傷害達到 5.6M 與 14M 時，可額外獲得 50 與 100 鍛造石；同時依據排名亦可獲得鑽石，對中小課玩家而言是不小的收益。",
      "mechanics_en": "As cumulative damage increases, players progress from Group 1 to Group 9. The core reward is 'Forge Stones', essential for upgrading units to Level 7+. In high-tier groups, reaching 5.6M and 14M daily damage grants an extra 50 and 100 Forge Stones respectively, along with diamond rewards based on daily ranking.",
      "note_zh": "💡 戰略目標：達成每日總傷害 14M 以上是每個進階玩家的必經考驗。此外，每日總傷害達到 20M 以上還可額外獲得一個傳奇寶箱，長期累積將帶來巨大的成長收益。",
      "note_en": "💡 Strategy: Reaching 14M+ daily damage is a benchmark for advanced players. Hitting 20M+ damage rewards an additional Legendary Chest, providing massive long-term growth benefits."
    },
    {
      "id": "hunting",
      "name_zh": "🎯 狩獵",
      "name_en": "🎯 Hunting",
      "intro_zh": "狩獵模式要求玩家佈置陣型，以對抗強大的 Boss 單位。現行版本 Boss 分為「魔花」與「雙頭龍」，兩者具有不同的弱點機制與佈陣策略。",
      "intro_en": "Hunting Mode requires specific formations to counter powerful Boss units. Current bosses include the 'Evil Ivy' and 'Twin-Dragon,' each with unique weakness mechanics and deployment strategies.",
      "stats": [
        { "f_zh": "對戰形式", "f_en": "Format", "d_zh": "PVE", "d_en": "PVE" },
        { "f_zh": "主要目標", "f_en": "Objective", "d_zh": "盡可能殺傷敵人", "d_en": "Inflict maximum damage" }
      ],
      "mechanics_title_zh": "賽季獎勵",
      "mechanics_title_en": "Season Rewards",
      "mechanics_zh": "多數玩家的通關目標是穩定獲取每個狩獵賽季的獎勵。當進入第9小組時，於賽季總傷害達到 10M、30M 和 70M 時，玩家將分別獲取 100、150 及 200 鍛造石。",
      "mechanics_en": "The goal for most is to secure seasonal rewards. Upon reaching Group 9, total damage milestones of 10M, 30M, and 70M grant 100, 150, and 200 Forge Stones respectively."
    },
    {
      "id": "sandbox",
      "name_zh": "🗂️ 沙盤演兵",
      "name_en": "🗂️ Battle Drills",
      "intro_zh": "布置部隊通關。",
      "intro_en": "Deploy troops to complete various stages.",
      "stats": [
        { "f_zh": "對戰形式", "f_en": "Format", "d_zh": "排兵布陣", "d_en": "Formation Strategy" },
        { "f_zh": "主要目標", "f_en": "Objective", "d_zh": "自由調整隊形，進行戰術模擬", "d_en": "Simulate tactics with free formation adjustments" }
      ],
      "note_zh": "⚠️ 筆者觀點：在當前版本中，沙盤兵演的實用性較低，被認為是一個尚待開發或優化的設計。",
      "note_en": "⚠️ Note: In the current version, Sandbox Training has low utility and is considered a feature awaiting further development or optimization."
    },
    {
      "id": "Clan_Hunt",
      "name_zh": "🐺 公會狩獵",
      "name_en": "🐺 Guild Hunting",
      "intro_zh": "公會狩獵為一種由玩家自行編排陣容，並對 NPC 目標進行攻擊的玩法模式。",
      "intro_en": "A mode where players organize their own lineups to attack specific NPC targets within guild territory.",
      "stats": [
        { "f_zh": "對戰形式", "f_en": "Format", "d_zh": "PVE", "d_en": "PVE" },
        { "f_zh": "主要目標", "f_en": "Objective", "d_zh": "在活動時間內，對領地敵人造成傷害", "d_en": "Damage territory enemies during the event" }
      ],
      "mechanics_title_zh": "玩法與獎勵",
      "mechanics_title_en": "Gameplay & Rewards",
      "mechanics_zh": "敵人類型包含龍騎士、納迦劍聖與毒液甲蟲三種，難度依序分為「簡單」、「普通」、「困難」與「瘋狂」。此模式分為個人總傷害競賽與公會玩家總傷害競賽，主要獎勵為鑽石。",
      "mechanics_en": "Enemies include Dragon Knight, Naga Blademaster, and Venom Beetle. Difficulty levels range from Easy to Insane. The mode features both individual and guild total damage rankings, with Diamonds as the primary reward."
    },
    {
      "id": "Clan_War",
      "name_zh": "⚔️ 公會戰爭",
      "name_en": "⚔️ Guild War",
      "intro_zh": "公會戰爭為遊戲中公會互動的核心 PVP 玩法。參戰公會將被分配至數個特定的沙盤地圖中，展開類似國戰模式的策略性對抗。",
      "intro_en": "The core PVP interaction mode. Participating guilds are assigned to specific sandbox maps for strategic, kingdom-war style confrontations.",
      "stats": [
        { "f_zh": "對戰形式", "f_en": "Format", "d_zh": "PVP", "d_en": "PVP" },
        { "f_zh": "主要目標", "f_en": "Objective", "d_zh": "獲取積分，提升公會排名", "d_en": "Gain points to improve guild ranking" }
      ],
      "mechanics_title_zh": "積分獲取與團隊合作",
      "mechanics_title_en": "Point Gain & Teamwork",
      "mechanics_zh": "積分可透過攻擊敵方玩家、佔領領地及擊敗 Boss 來獲獲取。此模式勝負不僅取決於士兵強度，玩家活跃度亦有高度影響。成員間的緊密合作與完善策略至關重要。",
      "mechanics_en": "Points are earned via player combat, territory occupation, and Boss kills. Victory depends on both unit strength and player activity. Close cooperation and sound strategy are vital for success."
    }
  ]
};