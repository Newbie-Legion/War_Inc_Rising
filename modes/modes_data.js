/**
 * War Inc Rising - 遊戲模式全資料數據庫 (繁、簡、英三語 100% 無損修復版)
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
    "cn": {
      "title": "🕹️ 游戏模式",
      "subtitle": "各类型 PVE 与 PVP 玩法机制与奖励全解析",
      "breadcrumb_home": "🏠 首页",
      "breadcrumb_current": "游戏模式",
      "back_to_top": "▲",
      "update_info": "© 萌新军本部 制作 | 内容更新时间：2026/04/02",
      "table_feature": "特色",
      "table_desc": "说明"
    },
    "en": {
      "title": "🕹️ Game Modes",
      "subtitle": "Comprehensive analysis of PVE & PVP mechanics and rewards",
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
      "name_zh": "🤝 協作模式",
      "name_cn": "🤝 协作模式",
      "name_en": "🤝 Co-op",
      "intro_zh": "協作模式為遊戲內建的合作塔防玩法，直接套用玩家已培養的士兵等級，因此士兵等級是影響通關難度的關鍵因素。等級越高，不僅能大幅提升容錯率，也能有效提高挑戰更高波次的成功率。",
      "intro_cn": "协作模式为游戏内置的合作塔防玩法，直接套用玩家已培养的士兵等级，因此士兵等级是影响通关难度的关键因素。等级越高，不仅能大幅提升容错率，也能有效提高挑战更高波次的成功率。",
      "intro_en": "Co-op Mode is a built-in collaborative tower defense. It uses your actual unit levels, making strength the primary factor. Higher levels significantly increase the room for error and the success rate of reaching higher waves.",
      "stats": [
        { "f_zh": "對戰形式", "f_cn": "对战形式", "f_en": "Format", "d_zh": "塔防合作", "d_cn": "塔防合作", "d_en": "Co-op Tower Defense" },
        { "f_zh": "目標", "f_cn": "目标", "f_en": "Objective", "d_zh": "盡可能通關最高波次", "d_cn": "尽可能通关最高波次", "d_en": "Reach the highest wave possible" }
      ],
      "sections": [
        {
          "t_zh": "獨特機制", "t_cn": "独特机制", "t_en": "Unique Mechanics",
          "c_zh": "模式中設有多種隨機機制，包括「轉盤」與「骰子大富翁」，兩種玩法會交替輪換；此外，還內建獨特的「天使／惡魔選擇系統」。若雙方玩家皆選擇正確選項，將可獲得額外的士兵單位。為確保效益最大化，建議在開局前先行協調選擇策略。",
          "c_cn": "模式中设有多种随机机制，包括“转盘”与“骰子大富翁”，两种玩法会交替轮换；此外，还内置独特的“天使／恶魔选择系统”。若双方玩家皆选择正确选项，将可获得额外的士兵单位。为确保效益最大化，建议在开局前先行协调选择策略。",
          "c_en": "Features rotating random mechanics like the 'Wheel' and 'Dice Monopoly'. It also includes the 'Angel/Devil' selection system. If both players coordinate correctly, additional units are rewarded. Coordination before the match starts is highly recommended for maximum efficiency."
        },
        {
          "t_zh": "賽記與獎勵", "t_cn": "赛季与奖励", "t_en": "Season & Rewards",
          "c_zh": "通關不同難度等級皆可獲得對應獎勵。值得一提的是，此模式能提供大量木材資源，當指揮所升級面臨木材短缺時，是快速累積資源的有效途徑。",
          "c_cn": "通关不同难度等级皆可获得对应奖励。值得一提的是，此模式能提供大量木材资源，当指挥所升级面临木材短缺时，是快速累积资源的有效途径。",
          "c_en": "Clear different difficulties to earn rewards. This mode is a primary source of Wood resources, making it the most efficient way to gather materials when upgrading your Command Post."
        }
      ]
    },
    {
      "name_zh": "♾️ 無限",
      "name_cn": "♾️ 无限",
      "name_en": "♾️ Infinite War",
      "intro_zh": "無限模式要求玩家建立穩固的陣型，以應對持續重生並不斷湧入的敵人。每個無限賽季為期 7 天，期間將依序登場 7 組不同類型的特定敵人，考驗玩家的應變與配置能力。",
      "intro_cn": "无限模式要求玩家建立稳固的阵型，以应对持续重生并不断涌入的敌人。每个无限赛季为期 7 天，期间将依序登場 7 组不同类型的特定敌人，考验玩家的应变与配置能力。",
      "intro_en": "Infinite War Mode requires a stable formation to withstand endless waves of respawning enemies. Each 7-day season features 7 unique enemy compositions, testing your strategic adaptability.",
      "stats": [
        { "f_zh": "對戰形式", "f_cn": "对战形式", "f_en": "Format", "d_zh": "PVE", "d_cn": "PVE", "d_en": "PVE" },
        { "f_zh": "主要目標", "f_cn": "主要目标", "f_en": "Objective", "d_zh": "盡可能殺傷敵人", "d_cn": "尽可能杀伤敌人", "d_en": "Inflict maximum damage" }
      ],
      "sections": [
        {
          "t_zh": "分組與獎勵", "t_cn": "分组与奖励", "t_en": "Ranking & Rewards",
          "c_zh": "隨著隊伍累積總傷害提升，玩家將由第 1 小組逐步晉升至第 9 小組，對應的每日排名獎勵也會隨之提高。此模式最核心的獎勵為「鍛造石」，士兵升至 7 等以上皆需仰賴其支撐。當成功進入高等小組後，每日累積總傷害達到 5.6M 與 14M 時，可額外獲得 50 與 100 鍛造石；同時依據排名亦可獲得鑽石。",
          "c_cn": "随着队伍累积总伤害提升，玩家将由第 1 小组逐步晋升至第 9 小组，对应的每日排名奖励也会随之提高。此模式最核心的奖励为“锻造石”，士兵升至 7 等以上皆需仰赖其支撑。当成功进入高等小组后，每日累积总伤害达到 5.6M 与 14M 时，可额外获得 50 与 100 锻造石；同时依据排名亦可获得钻石。",
          "c_en": "Progress from Group 1 to Group 9 based on total damage. Daily rewards scale with your rank. The most critical reward is 'Forge Stones,' essential for reaching Unit Lv.7+. In higher groups, hitting 5.6M and 14M damage milestones grants extra 50 and 100 Forge Stones respectively, alongside Diamond rewards."
        }
      ],
      "note_zh": "💡 戰略目標：達成每日總傷害 14M 以上是每個進階玩家的必經考驗。此外，每日總傷害達到 20M 以上還可額外獲得一個傳奇寶箱，長期累積將帶來巨大的成長收益。",
      "note_cn": "💡 战略目标：达成每日总伤害 14M 以上是每个进阶玩家的必经考验。此外，每日总伤害达到 20M 以上还可额外获得一个传奇宝箱，长期累积将带来巨大的成长收益。",
      "note_en": "💡 Strategic Goal: Reaching 14M+ daily damage is a benchmark for advanced players. Hitting 20M+ damage rewards an extra Legendary Chest, providing massive long-term growth benefits."
    },
    {
      "name_zh": "🎯 狩獵",
      "name_cn": "🎯 狩猎",
      "name_en": "🎯 Hunting",
      "intro_zh": "狩獵模式要求玩家佈置陣型，以對抗強大的 Boss 單位。現行版本 Boss 分為「魔花」與「雙頭龍」，兩者具有不同的弱點機制與佈陣策略。",
      "intro_cn": "狩猎模式要求玩家布置阵型，以对抗强大的 Boss 单位。现行版本 Boss 分为“魔花”与“双头龙”，两者具有不同的弱點机制与布阵策略。",
      "intro_en": "Hunting Mode requires formations designed to counter massive Boss units. Current bosses include 'Evil Ivy' and 'Twin-Dragon,' each with unique weaknesses and strategic requirements.",
      "stats": [
        { "f_zh": "對戰形式", "f_cn": "对战形式", "f_en": "Format", "d_zh": "PVE", "d_cn": "PVE", "d_en": "PVE" },
        { "f_zh": "主要目標", "f_cn": "主要目标", "f_en": "Objective", "d_zh": "盡可能殺傷敵人", "d_cn": "尽可能杀伤敌人", "d_en": "Inflict maximum damage" }
      ],
      "sections": [
        {
          "t_zh": "賽季獎勵", "t_cn": "赛季奖励", "t_en": "Season Rewards",
          "c_zh": "除了少數頂端玩家，大多數玩家的通關目標是穩定獲取每個狩獵賽季的賽季獎勵。當進入第 9 小組時，於賽季總傷害達到 10M、30M 和 70M 時，玩家將分別獲取 100、150 及 200 鍛造石。",
          "c_cn": "除了少数顶端玩家，大多数玩家的通关目标是稳定获取每个狩猎赛季的赛季奖励。当进入第 9 小组时，于赛季总伤害达到 10M、30M 和 70M 时，玩家将分别获取 100, 150 及 200 锻造石。",
          "c_en": "For most, the goal is to consistently secure seasonal rewards. In Group 9, damage milestones of 10M, 30M, and 70M grant 100, 150, and 200 Forge Stones respectively."
        }
      ]
    },
    {
      "name_zh": "🗂️ 沙盤演兵",
      "name_cn": "🗂️ 沙盘演兵",
      "name_en": "🗂️ Battle Drills",
      "intro_zh": "布置部隊通關。",
      "intro_cn": "布置部队通关。",
      "intro_en": "Deploy troops to complete challenges.",
      "stats": [
        { "f_zh": "對戰形式", "f_cn": "对战形式", "f_en": "Format", "d_zh": "排兵布陣", "d_cn": "排兵布阵", "d_en": "Tactical Formation" },
        { "f_zh": "主要目標", "f_cn": "主要目标", "f_en": "Objective", "d_zh": "自由調整隊形，進行戰術模擬", "d_cn": "自由调整队形，进行战术模拟", "d_en": "Free formation adjustment for tactical simulation" }
      ],
      "note_zh": "⚠️ 筆者觀點：在當前版本中，沙盤兵演的實用性較低，被認為是一個尚待開發或優化的設計。",
      "note_cn": "⚠️ 笔者观点：在当前版本中，沙盘兵演的实用性较低，被认为是一个尚待开发或优化的设计。",
      "note_en": "⚠️ Note: In the current version, Battle Drills have low utility and are considered a feature awaiting further refinement or overhaul."
    },
    {
      "name_zh": "🐺 公會狩獵",
      "name_cn": "🐺 公会狩猎",
      "name_en": "🐺 Clan Hunt",
      "intro_zh": "公會狩獵為一種由玩家自行編排陣容，並對 NPC 目標進行攻擊的玩法模式。",
      "intro_cn": "公会狩猎为一种由玩家自行编排阵容，并对 NPC 目标进行攻击的玩法模式。",
      "intro_en": "Clan Hunt is a mode where players organize their own lineups to attack specific NPC targets within the clan territory.",
      "stats": [
        { "f_zh": "對戰形式", "f_cn": "对战形式", "f_en": "Format", "d_zh": "PVE", "d_cn": "PVE", "d_en": "PVE" },
        { "f_zh": "主要目標", "f_cn": "主要目标", "f_en": "Objective", "d_zh": "在活動時間內，對領地敵人造成傷害", "d_cn": "在活动时间内，对领地敌人造成伤害", "d_en": "Damage territory enemies during the event" }
      ],
      "sections": [
        {
          "t_zh": "玩法與獎勵", "t_cn": "玩法与奖励", "t_en": "Gameplay & Rewards",
          "c_zh": "敵人類型包含龍騎士、納迦劍聖與毒液甲蟲三種，難度依序分為「簡單」、「普通」、「困難」與「瘋狂」，需完成前一難度後方可挑戰更高層級。此模式分為個人總傷害競賽與公會總傷害競賽，主要獎勵為鑽石。",
          "c_cn": "敌人类型包含龙骑士、纳迦剑圣与毒液甲虫三种，难度依序分为“简单”、“普通”、“困难”与“疯狂”，需完成前一难度后方可挑战更高层级。此模式分为个人总伤害竞赛与公会总伤害竞赛，主要奖励为钻石。",
          "c_en": "Enemies include Dragon Knight, Naga Blademaster, and Venom Beetle. Difficulty tiers range from Easy to Insane. The mode features both individual and clan-wide damage rankings, with Diamonds as the primary reward."
        }
      ]
    },
    {
      "name_zh": "⚔️ 公會戰爭",
      "name_cn": "⚔️ 公会战争",
      "name_en": "⚔️ Clan War",
      "intro_zh": "公會戰爭為遊戲中公會互動的核心 PVP 玩法。參戰公會將被分配至數個特定的沙盤地圖中，展開類似國戰模式的策略性對抗。",
      "intro_cn": "公会战争为游戏中公会互动的核心 PVP 玩法。参战公会将被分配至数个特定的沙盘地图中，展开类似国战模式的策略性对抗。",
      "intro_en": "The core PVP system for clan interaction. Participating clans are assigned to specific sandbox maps for strategic, kingdom-war style confrontations.",
      "stats": [
        { "f_zh": "對戰形式", "f_cn": "对战形式", "f_en": "Format", "d_zh": "PVP", "d_cn": "PVP", "d_en": "PVP" },
        { "f_zh": "主要目標", "f_cn": "主要目标", "f_en": "Objective", "d_zh": "獲取積分，提升公會排名", "d_cn": "获取积分，提升公会排名", "d_en": "Gain points to improve clan ranking" }
      ],
      "sections": [
        {
          "t_zh": "積分獲取與團隊合作", "t_cn": "积分获取与团队合作", "t_en": "Points & Teamwork",
          "c_zh": "獎勵分為個人積分與公會積分兩部分，積分可透過攻擊敵方玩家、佔領領地及擊敗地圖中的 Boss 來獲取。此模式的勝負不僅取決於隊伍的士兵強度，玩家的活躍程度亦具有高度影響。",
          "c_cn": "奖励分为个人积分与公会积分两部分，积分可通过攻击敌方玩家、占领领地及击败地图中的 Boss 来获取。此模式的胜负不仅取决于队伍的士兵强度，玩家的活跃程度亦具有高度影响。",
          "c_en": "Rewards consist of individual and clan points. Points are earned by attacking enemy players, occupying territory, and defeating map bosses. Victory depends on both unit strength and player activity."
        }
      ]
    }
  ]
};