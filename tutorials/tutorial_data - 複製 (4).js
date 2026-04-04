/**
 * War Inc Rising - 綜合攻略數據庫 (100% 原文無損轉移 + 三語翻譯 + 金額換算)
 */
const TUTORIAL_DATABASE = {
  "ui": {
    "zh": {
      "title": "📖綜合攻略圖鑑", "subtitle": "遊戲課金、隊伍養成方向", "breadcrumb_home": "🏠 首頁", "breadcrumb_current": "綜合攻略與教學", "back_to_top": "▲", "footer": "© 萌新軍本部 製作 | 內容更新時間：2026/04/02",
      "table_head_type": "類型", "table_head_unit": "推薦作戰單位"
    },
    "cn": {
      "title": "📖综合攻略图鉴", "subtitle": "游戏氪金、队伍养成方向", "breadcrumb_home": "🏠 首页", "breadcrumb_current": "综合攻略与教学", "back_to_top": "▲", "footer": "© 萌新军本部 制作 | 内容更新时间：2026/04/02",
      "table_head_type": "类型", "table_head_unit": "推荐作战单位"
    },
    "en": {
      "title": "📖 Advanced Guide Compendium", "subtitle": "Monetization & Team Development Strategies", "breadcrumb_home": "🏠 Home", "breadcrumb_current": "Advanced Guides", "back_to_top": "Top", "footer": "Produced by Recruit Army HQ | Updated: 2026/04/02",
      "table_head_type": "Type", "table_head_unit": "Recommended Units"
    }
  },
  "content": {
    /* 區塊 1: 遊戲機制 */
    "payment": {
      "title_zh": "📖 遊戲機制與付費認知", "title_cn": "📖 游戏机制与付费认知", "title_en": "📖 Game Mechanics & Payment Awareness",
      "p1_zh": "《War Inc Rising》基本上沒有強制性廣告，每日僅提供一個可自行選擇觀看的 30 秒史詩寶箱廣告，另有少量內建的 5 秒短廣告。無課玩家也能輕鬆體驗遊戲內容；不過若條件允許，仍建議購買「戰鬥通行證」，可明顯提升整體遊玩體驗。",
      "p1_cn": "《War Inc Rising》基本上没有强制性广告，每日仅提供一个可自行选择观看的 30 秒史诗宝箱广告，另有少量内置的 5 秒短广告。无氪玩家也能轻松体验游戏内容；不过若条件允许，仍建议购买“战斗通行证”，可明显提升整体游玩体验。",
      "p1_en": "\"War Inc Rising\" essentially has no forced advertisements. It only offers one optional 30-second ad for an Epic Chest daily, along with a few 5-second built-in ads. F2P players can easily enjoy the game; however, purchasing the 'Battle Pass' is highly recommended as it significantly improves the overall experience.",
      "p2_zh": "然而，本作的核心機制仍偏向 Pay to Win。投入越多資源，玩家就越能加速進度並獲得更高的成就感，這點難以避免。因此建議以平常心遊玩，依自身能力適度消費，避免過度投入。",
      "p2_cn": "然而，本作的核心机制仍偏向 Pay to Win。投入越多资源，玩家就越能加速进度并获得更高的成就感，这点难以避免。因此建议以平常心游玩，依自身能力适度消费，避免过度投入。",
      "p2_en": "However, the core mechanic remains Pay to Win. The more resources invested, the faster you progress and gain achievements. It is recommended to play with a balanced mindset and spend according to your means.",
      "p3_zh": "遊戲中多數強勢單位幾乎都需透過付費管道才能快速取得，例如角色禮包、內建召喚、轉盤，以及卡牌大師等不定期推出的特殊活動。透過直接購買或使用鑽石加速抽取，課金玩家可在短時間內將主力單位提升至 6 等。",
      "p3_cn": "游戏中多数强势单位几乎都需透过付费渠道才能快速取得，例如角色礼包、内置召唤、转盘，以及卡牌大师等不定期推出的特殊活动。通过直接购买或使用钻石加速抽取，氪金玩家可在短时间内将主力单位提升至 6 等。",
      "p3_en": "Most powerful units must be acquired through paid channels such as Character Bundles, Premium Summons, the Wheel, and 'Card Master' events. Paying players can reach Level 6 for core units in a short time.",
      "p4_zh": "相較之下，無課或小課玩家較難在短期內培養出 6 等神話單位。即便取得，多半也來自一般召喚，其強度與限定或轉盤單位相比，仍存在明顯差距。",
      "p4_cn": "相较之下，无氪或小氪玩家较难在短期内培养出 6 等神话单位。即便取得，多半也来自一般召唤，其强度与限定或转盘单位相比，仍存在明显差距。",
      "p4_en": "In contrast, F2P or low-spending players find it difficult to develop Lv.6 Mythic units quickly. Even when obtained via standard summons, there is a noticeable power gap compared to Limited or Wheel units."
    },
    /* 區塊 2: 招募策略 */
    "recruitment": {
      "title_zh": "⚔️ 隊伍養成與招募策略", "title_cn": "⚔️ 队伍养成与招募策略", "title_en": "⚔️ Team Development & Recruitment Strategy",
      "p1_zh": "筆者並非高消費玩家，以下內容皆為個人經驗整理，未必完全準確，僅供參考。建議依自身情況彈性調整遊玩節奏與養成方向。",
      "p1_cn": "笔者并非高消费玩家，以下内容皆为个人经验整理，未必完全准确，仅供参考。建议依自身情况弹性调整游玩节奏与养成方向。",
      "p1_en": "As a non-high-spending player, the following is compiled from personal experience and is for reference only. Adjust your playstyle based on your own situation.",
      "h1_zh": "一、遊戲模式概覽", "h1_cn": "一、游戏模式概览", "h1_en": "I. Game Modes Overview",
      "pve_list_zh": "協作模式 / 狩獵 / 無限戰爭<br>公會狩獵 / 沙盤演兵", "pve_list_cn": "协作模式 / 狩猎 / 无限战争<br>公会狩猎 / 沙盘演兵", "pve_list_en": "Co-op / Hunting / Infinite War<br>Clan Hunt / Battle Drills",
      "pvp_list_zh": "競技場 / 公會戰爭", "pvp_list_cn": "竞技场 / 公会战争", "pvp_list_en": "Arena / Clan War",
      
      "h2_zh": "二、士兵稀有度與取得方式", "h2_cn": "二、士兵稀有度与取得方式", "h2_en": "II. Troop Rarity & Acquisition",
      "rarity_zh": "士兵等級：普通(白) → 稀有(藍) → 史詩(紫) → 傳奇(金) → 神話(彩)", "rarity_cn": "士兵等级：普通(白) → 稀有(蓝) → 史诗(紫) → 传奇(金) → 神话(彩)", "rarity_en": "Tiers: Common(White) → Rare(Blue) → Epic(Purple) → Legendary(Gold) → Mythic(Rainbow)",
      
      "table1_th_zh": ["招募階段", "開放等級", "價格", "史詩機率", "士兵等級"],
      "table1_th_cn": ["招募阶段", "开放等级", "价格", "史诗机率", "士兵等级"],
      "table1_th_en": ["Summon Stage", "Unlock Level", "Cost", "Epic Rate", "Unit Level"],
      "table1_rows_zh": [
        ["初始", "1", "24,000", "3%", "1 等"],
        ["階段二", "10", "48,000", "6%", "2 等"],
        ["階段三", "15", "96,000", "12%", "3 等"]
      ],
      "table1_rows_cn": [
        ["初始", "1", "24,000", "3%", "1 等"],
        ["阶段二", "10", "48,000", "6%", "2 等"],
        ["阶段三", "15", "96,000", "12%", "3 等"]
      ],
      "table1_rows_en": [
        ["Initial", "1", "24,000", "3%", "Lv. 1"],
        ["Stage 2", "10", "48,000", "6%", "Lv. 2"],
        ["Stage 3", "15", "96,000", "12%", "Lv. 3"]
      ],

      "h3_zh": "三、神話單位分類", "h3_cn": "三、神话单位分类", "h3_en": "III. Mythic Unit Categories",
      "mythic_types_zh": [
        "<strong>1. 一般神話：</strong> 獅鷲騎士、騎士之王、焰火劍客、地脈術士、風暴聖女、星輝使徒、狂怒砲手。",
        "<strong>2. 限定神話：</strong> 九尾妖狐、旋律編織者、叢林遊俠、毒菇刺客、水靈巫師。",
        "<strong>3. 轉盤 & 卡牌：</strong> 蠻族暴君、迷霧射手、冰雪女王、戰爭女神、重砲先鋒、暗月女皇、烈焰主宰、潮汐領主、光輝戰士、木靈守衛、血刃、亡骨槍手。"
      ],
      "mythic_types_cn": [
        "<strong>1. 一般神话：</strong> 狮鹫骑士、骑士之王、焰火剑客、地脉术士、风暴圣女、星辉使徒、狂怒炮手。",
        "<strong>2. 限定神话：</strong> 九尾妖狐、旋律编织者、丛林游侠、毒菇刺客、水灵巫师。",
        "<strong>3. 转盘 & 卡牌：</strong> 蛮族暴君、迷雾射手、冰雪女王、战争女神、重炮先锋、暗月女皇、烈焰主宰、潮汐领主、光辉战士、木灵守卫、血刃、亡骨枪手。"
      ],
      "mythic_types_en": [
        "<strong>1. Standard Mythics:</strong> Gryphon Knight, The Knight King, Flame Duelist, Geomancer, Storm Maiden, Starlight Apostle, Fury Cannoneer.",
        "<strong>2. Limited Mythics:</strong> Nine-Tailed Fox, Melody Weaver, Jungle Ranger, Venospore Killer, Ripple Wizard.",
        "<strong>3. Wheel & Card Master:</strong> Barbarian Tyrant, Mist Archer, Frost Queen, Goddess of War, Firepower Vanguard, Darkmoon Queen, Blazeking, Tide Lord, Radiant Warrior, Woodland Guardian, Red Blade, Bone Marksman."
      ],

      "h4_zh": "四、競技場隊伍組合 (推薦名單)", "h4_cn": "四、竞技场队伍组合 (推荐名单)", "h4_en": "IV. Arena Team Compositions",
      "arena_table_zh": [
        ["坦克", "初階：南瓜守衛、岩石投擲者、神盾兵士<br>中階：騎士之王、焰火劍客、獅鷲騎士、櫻花浪人<br>高階：戰爭女神、蠻族暴君、光輝戰士"],
        ["單體傷害", "初階：林地斥侯、見習法師、火焰法師<br>中階：精靈箭手、御風統領<br>高階：精靈箭手(高等)、九尾妖狐、叢林遊俠、霧影射手、亡骨槍手"],
        ["群體傷害", "初階：林地斥侯、毒藥大師<br>中階：風語者、灰燼法師、熊靈勇士、地脈術士、風暴聖女、狂怒砲手<br>高階：熊靈勇士(高等)、叢林遊俠、亡骨槍手、血刃"],
        ["特殊功能", "破陣：冰雪女王、炸彈兵<br>增益：神諭者、旋律編織者、星輝使徒、水靈巫師、潮汐領主、烈焰主宰<br>減益：鐵壁者、岩石投擲者、冰霜骷髏<br>治癒：木頭巫師、木靈守衛（兼副坦）<br>控制：暗月女皇、潮汐領主"]
      ],
      "arena_table_cn": [
        ["坦克", "初阶：南瓜守卫、岩石投掷者、神盾士兵<br>中阶：骑士之王、焰火剑客、狮鹫骑士、樱花浪人<br>高阶：战争女神、蛮族暴君、光辉战士"],
        ["单体伤害", "初阶：林地斥候、见习法师、火焰法师<br>中阶：精灵箭手、御风统领<br>高阶：精灵箭手(高等)、九尾妖狐、丛林游侠、雾影射手、亡骨枪手"],
        ["群体伤害", "初阶：林地斥候、毒药大师<br>中阶：风语者、灰烬法师、熊灵勇士、地脉术士、风暴圣女、狂怒炮手<br>高阶：熊灵勇士(高等)、丛林游侠、亡骨枪手、血刃"],
        ["特殊功能", "破阵：冰雪女王、炸弹兵<br>增益：神谕者、旋律编织者、星辉使徒、水灵巫师、潮汐领主、烈焰主宰<br>减益：铁壁者、岩石投掷者、冰霜骷髅<br>治愈：木头巫师、木灵守卫（兼副坦）<br>控制：暗月女皇、潮汐领主"]
      ],
      "arena_table_en": [
        ["Tank", "Basic: Pumpkin Guard, Rock Thrower, Paladin<br>Mid: The Knight King, Flame Duelist, Gryphon Knight, Sakura Ronin<br>High: Goddess of War, Barbarian Tyrant, Radiant Warrior"],
        ["Single DPS", "Basic: Forest Scout, Apprentice Mage, Flame Mage<br>Mid: Elven Archer, Windlord<br>High: Elven Archer (High Lvl), Nine-Tailed Fox, Jungle Ranger, Mist Archer, Bone Marksman"],
        ["AOE DPS", "Basic: Forest Scout, Poison Master<br>Mid: Wind Apostle, Ashen Arcenist, Ursa Champion, Geomancer, Storm Maiden, Fury Cannoneer<br>High: Ursa Champion (High Lvl), Jungle Ranger, Bone Marksman, Red Blade"],
        ["Special", "Breaker: Frost Queen, Bomber<br>Buff: Oracle, Melody Weaver, Starlight Apostle, Ripple Wizard, Tide Lord, Blazeking<br>Debuff: Iron Bulwark, Rock Thrower, Frost Skeleton<br>Heal: Wooden Wizard, Woodland Guardian<br>CC: Darkmoon Queen, Tide Lord"]
      ]
    },
    /* 區塊 3: 鍛造石 */
    "forge": {
      "title_zh": "💎 鍛造石花費與必備角色", "title_cn": "💎 锻造石花费与必备角色", "title_en": "💎 Forge Stone Spending",
      "p1_zh": "鍛造石是遊戲中獲取門檻最高的資源之一，新手建議先保留，待對遊戲機制有更深入理解後，再進行規劃與分配。",
      "p1_cn": "锻造石是游戏中获取门槛最高的资源之一，新手建议先保留，待对游戏机制有更深入理解后，再进行规划与分配。",
      "p1_en": "Forge Stones are the hardest resources to obtain. Save them until you fully understand the mechanics.",
      "note_zh": "<strong>💡 提示：建議鍛造石平時盡量留存，並等待官方不定期推出的「鍛造石折扣限時活動」再投入。</strong> 依稀有等級不同，活動期間通常可享有約 10%～40% 的折扣。由於資源極為珍貴，建議把握折扣時機再行使用。",
      "note_cn": "<strong>💡 提示：建议锻造石平时尽量留存，并等待官方不定期推出的「锻造石折扣限时活动」再投入。</strong> 依稀有等级不同，活动期间通常可享有约 10%～40% 的折扣。由于资源极为珍贵，建议把握折扣时机再行使用。",
      "note_en": "<strong>💡 Tip: Save Forge Stones for 'Discount Events'.</strong> Depending on rarity, you can get a 10%-40% discount during events.",
      "h1_zh": "✅ 建議優先投入", "h1_cn": "✅ 建议优先投入", "h1_en": "✅ Priority Investment",
      "p2_zh": "<strong>神諭者：</strong>屬於必備的輔助單位，建議配置 4 名 7 等單位。將鍛造石投入於此類核心增益角色，通常不會有太大損失，且能有效提升整體戰力。",
      "p2_cn": "<strong>神谕者：</strong>属于必备的辅助单位，建议配置 4 名 7 等单位。将锻造石投入于此类核心增益角色，通常不会有太大损失，且能有效提升整体战力。",
      "p2_en": "<strong>Oracle:</strong> Essential support. Recommended to have four Lv.7 Oracles. Investing Forge Stones here is highly reliable.",
      "table_h_zh": "📊 鍛造石升級需求表", "table_h_cn": "📊 锻造石升级需求表", "table_h_en": "📊 Upgrade Requirements",
      "table_th_zh": ["稀有度", "6 ➔ 7 需求", "7 ➔ 8 需求", "8 ➔ 9 需求"],
      "table_th_cn": ["稀有度", "6 ➔ 7 需求", "7 ➔ 8 需求", "8 ➔ 9 需求"],
      "table_th_en": ["Rarity", "6 ➔ 7", "7 ➔ 8", "8 ➔ 9"],
      "table_zh": [
        ["普通 (白)", "32", "80", "240"], ["稀有 (藍)", "64", "160", "480"], ["史詩 (紫)", "960", "2,220", "3,640"], ["傳奇 (金)", "1,920", "4,440", "7,120"], ["神話 (彩)", "2,560", "5,920", "9,600"]
      ],
      "table_cn": [
        ["普通 (白)", "32", "80", "240"], ["稀有 (蓝)", "64", "160", "480"], ["史诗 (紫)", "960", "2,220", "3,640"], ["传奇 (金)", "1,920", "4,440", "7,120"], ["神话 (彩)", "2,560", "5,920", "9,600"]
      ],
      "table_en": [
        ["Common", "32", "80", "240"], ["Rare", "64", "160", "480"], ["Epic", "960", "2,220", "3,640"], ["Legendary", "1,920", "4,440", "7,120"], ["Mythic", "2,560", "5,920", "9,600"]
      ]
    },
    /* 區塊 4: 課金與養成 */
    "spending": {
      "title_zh": "💎 課金等級與隊伍的關係", "title_cn": "💎 氪金等级与队伍的关系", "title_en": "💎 Spending Levels & Synergy",
      "p1_zh": "課金額度直接決定隊伍強度。以下提供每月資源規劃參考數據。", "p1_cn": "氪金额度直接决定队伍强度。以下提供每月资源规划参考数据。", "p1_en": "Spending limits determine team strength. Below are monthly estimates.",
      "income_h_zh": "🔹 鑽石收入分析", "income_h_cn": "🔹 钻石收入分析", "income_h_en": "🔹 Diamond Income Analysis",
      "inc_th_zh": ["來源", "頻率", "預估數量"], "inc_th_cn": ["来源", "频率", "预估数量"], "inc_th_en": ["Source", "Frequency", "Estimate"],
      
      /* 🚀 修正 1：移除原本以陣列形式處理的合計行，改為直接在 HTML 中用獨立行處理，確保跨欄位不出錯 */
      "income_zh": [
        ["每日任務 (賽季/日/週)", "週期", "6,400"],
        ["指揮所產出 (Lv.5)", "週期", "7,200"],
        ["免費通行證", "週期", "1,020"],
        ["活動/公會獎勵組合", "週期", "10,000 ~ 15,000"],
        ["戰鬥通行證 (付費)", "週期", "3,800"],
        ["鑽石通行證 (付費)", "30天", "15,200"]
      ],
      "income_cn": [
        ["每日任务 (赛季/日/周)", "周期", "6,400"],
        ["指挥所产出 (Lv.5)", "周期", "7,200"],
        ["免费通行证", "周期", "1,020"],
        ["活动/公会奖励组合", "周期", "10,000 ~ 15,000"],
        ["战斗通行证 (付费)", "周期", "3,800"],
        ["钻石通行证 (付费)", "30天", "15,200"]
      ],
      "income_en": [
        ["Daily/Season Quests", "Cycle", "6,400"],
        ["Command Center (Lv.5)", "Cycle", "7,200"],
        ["Free Pass", "Cycle", "1,020"],
        ["Events/Guild Rewards", "Cycle", "10,000 ~ 15,000"],
        ["Battle Pass (Paid)", "Cycle", "3,800"],
        ["Diamond Pass (Paid)", "30 Days", "15,200"]
      ],
      "income_total_zh": "約 25,000 ~ 50,000 鑽",
      "income_total_cn": "约 25,000 ~ 50,000 钻",
      "income_total_en": "~ 25,000 - 50,000 Diamonds",
      
      "direction_h_zh": "💳 課金方向建議", "direction_h_cn": "💳 氪金方向建议", "direction_h_en": "💳 Spending Directions",
      "direction_list_zh": [
        "<strong>戰鬥通行證：</strong> 有條件必買，性價比極高。",
        "<strong>鑽石通行證：</strong> 每月額外 15200 鑽，性價比高。",
        "<strong>基礎補給禮包 / 進階補給禮包：</strong> 鑽石的重要來源之一，整體收益高，具備良好的性價比。",
        "<strong>成長加速禮包：</strong> 快速提升心儀角色，對九尾妖狐、叢林遊俠、旋律編織者尤其重要。",
        "<strong>成長基金：</strong> 需長期遊玩才能發揮最大效益。"
      ],
      "direction_list_cn": [
        "<strong>战斗通行证：</strong> 有条件必买，性价比极高。",
        "<strong>钻石通行证：</strong> 每月额外 15200 钻，性价比高。",
        "<strong>基础补给礼包 / 进阶补给礼包：</strong> 钻石的重要来源之一，整体收益高，具备良好的性价比。",
        "<strong>成长加速礼包：</strong> 快速提升心仪角色，对九尾妖狐、丛林游侠、旋律编织者尤其重要。",
        "<strong>成长基金：</strong> 需长期游玩才能发挥最大效益。"
      ],
      "direction_list_en": [
        "<strong>Battle Pass:</strong> Highly recommended; extreme cost-efficiency.",
        "<strong>Diamond Pass:</strong> Extra 15,200 Diamonds monthly; great value.",
        "<strong>Basic / Advanced Supply:</strong> High return on investment, solid source of Diamonds.",
        "<strong>Growth Acceleration Offer:</strong> Vital for fast-tracking Nine-Tailed Fox, Jungle Ranger, and Melody Weaver.",
        "<strong>Growth Fund:</strong> Requires long-term commitment for max value."
      ],

      "tiers_h_zh": "🏷️ 課金等級建議 (台幣)", "tiers_h_cn": "🏷️ 氪金等级建议 (台币)", "tiers_h_en": "🏷️ Spending Tiers (USD Est.)",
      "tier_th_zh": ["等級", "說明", "預估金額"], "tier_th_cn": ["等级", "说明", "预估金额"], "tier_th_en": ["Tier", "Description", "Est. USD"],
      "tiers_zh": [
        ["無課", "完全無花費", "0"],
        ["微課", "只課戰鬥通行證", "330"],
        ["小課", "戰鬥通行證 + 雙鑽石通行證", "1,000"],
        ["中小課", "前述 + 成長加速禮包 1-2 次", "1,600 ~ 2,600"],
        ["中課", "前述 + 基礎補給禮包/進階補給禮包", "4,000 ~ 9,000"],
        ["大課", "前述 + 不定額永恆石禮包、成長加速、各式禮包", "無上限"]
      ],
      "tiers_cn": [
        ["无氪", "完全无花费", "0"],
        ["微氪", "只氪战斗通行证", "330"],
        ["小氪", "战斗通行证 + 双钻石通行证", "1,000"],
        ["中小氪", "前述 + 成长加速礼包 1-2 次", "1,600 ~ 2,600"],
        ["中氪", "前述 + 基础补给礼包/进阶补给礼包", "4,000 ~ 9,000"],
        ["大氪", "前述 + 不定额永恒石礼包、成长加速、各式礼包", "无上限"]
      ],
      "tiers_en": [
        ["F2P", "No spending", "$0"],
        ["Low", "Battle Pass only", "~$10"],
        ["Casual", "Battle Pass + Diamond Pass", "~$30"],
        ["Dolphin", "Above + Growth Acceleration x1-2", "~$50 ~ $80"],
        ["High", "Above + Basic/Advanced Supplies", "~$125 ~ $280"],
        ["Whale", "Above + Eternity Stones & Various Offers", "Limitless"]
      ],

      "strategy_h_zh": "🏗️ 課金養成策略概要", "strategy_h_cn": "🏗️ 氪金养成策略概要", "strategy_h_en": "🏗️ Dev Strategy Overview",
      "s1_t_zh": "微課 / 小課", "s1_t_cn": "微氪 / 小氪", "s1_t_en": "Low / Casual Spenders",
      "s1_c_zh": "建議選定一隻限定神話作為主要培養目標，持續集中資源抽取，目標達到 6 等。鑽石應優先投入於轉盤前 50～100 抽，以獲取最高性價比，依此培養節奏，約 3～4 個月內，隊伍可培養出 2～3 隻具備戰力的強勢轉盤神話；v0.8.8 版本期間限定，亡骨槍手具備優異的前期成長曲線，建議優先抽取培養。",
      "s1_c_cn": "建议选定一只限定神话作为主要培养目标，持续集中资源抽取，目标达到 6 等。钻石应优先投入于转盘前 50～100 抽，以获取最高性价比，依此培养节奏，约 3～4 个月内，队伍可培养出 2～3 只具备战力的强势转盘神话；v0.8.8 版本期間限定，亡骨枪手具备优异的前期成长曲线，建议优先抽取培养。",
      "s1_c_en": "Focus on a single Limited Mythic and aim for Lv.6. Spend Diamonds primarily on the first 50-100 Wheel pulls for max ROI. In 3-4 months, you'll have 2-3 strong Wheel Mythics. Prioritize Bone Marksman in v0.8.8 for its early growth.",
      
      "s2_t_zh": "中小課 / 中課", "s2_t_cn": "中小氪 / 中氪", "s2_t_en": "Mid / High Spenders",
      "s2_c_zh": "轉盤能固定抽取 100 抽，遇到心儀神話可以更多，隊伍養成更加自由，特殊神話可更快培養至 6 等，甚至有機會達成雙 6 等或 7 等配置，整體戰力顯著提升。九尾、叢林、旋律等限定神話，約可在 2～3 個月內培養至 6 等。整體而言，隊伍在此期間可累積約 5～6 隻 6 等轉盤神話，逐步建立穩定戰力。此外，v0.8.8 版本期間限定的亡骨槍手具備優異的前期成長曲線，建議優先抽取與培養，以加速前期發展。",
      "s2_c_cn": "转盘能固定抽取 100 抽，遇到心仪神话可以更多，队伍养成更加自由，特殊神话可更快培养至 6 等，甚至有机会达成双 6 等或 7 等配置，整体战力显著提升。九尾、丛林、旋律等限定神话，约可在 2～3 个月内培养至 6 等。整体而言，队伍在此期间可积累约 5～6 只 6 等转盘神话，逐步建立稳定战力。此外，v0.8.8 版本期間限定的亡骨枪手具备优异的前期成长曲线，建议优先抽取与培养，以加速前期发展。",
      "s2_c_en": "Consistently perform 100+ Wheel pulls. Special Mythics reach Lv.6 faster, allowing dual Lv.6 or Lv.7 setups. Nine-Tailed Fox, Jungle Ranger, and Melody Weaver can reach Lv.6 in 2-3 months. Accumulate 5-6 Lv.6 Wheel Mythics to establish a solid roster. Prioritize Bone Marksman for early development.",
      
      /* 🚀 修正 2：確保總結文字的存在，並精準翻譯 */
      "final_note_zh": "<strong>✅ 總結建議：</strong> 專注培養心儀單位，建立後期強力隊伍。神話 6 級是分水嶺。",
      "final_note_cn": "<strong>✅ 总结建议：</strong> 专注培养心仪单位，建立后期强力队伍。神话 6 级是分水岭。",
      "final_note_en": "<strong>✅ Summary:</strong> Focus on desired units to build a strong late-game team. Mythic Lv.6 is the turning point."
    }
  }
};