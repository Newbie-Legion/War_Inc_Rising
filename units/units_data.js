/**
 * War Inc Rising - 士兵全資料數據庫 (100% 原文無損轉移版)
 */
const UNIT_DATABASE = {
  "ui": {
    "zh": {
      "title": "⚔️ 士兵介紹 - 作戰單位圖鑑",
      "subtitle": "單位圖鑑，內容按稀有度劃分，所有單位說明為筆者獨立整理，僅供新手參考。",
      "breadcrumb_home": "🏠 首頁",
      "breadcrumb_current": "士兵介紹",
      "nav_mythic": "🌟 神話",
      "nav_legendary": "🔥 傳奇",
      "nav_epic": "🟣 史詩",
      "nav_rare": "💧 稀有",
      "nav_common": "🟢 普通",
      "position_label": "定位：",
      "back_to_top": "▲",
      "update_info": "© 萌新軍本部 製作 | 內容更新時間：2026/04/02"
    },
    "en": {
      "title": "⚔️ Troop Encyclopedia",
      "subtitle": "Unit guidebook categorized by rarity. All descriptions are independently compiled for reference.",
      "breadcrumb_home": "🏠 Home",
      "breadcrumb_current": "Troops",
      "nav_mythic": "🌟 Mythic",
      "nav_legendary": "🔥 Legendary",
      "nav_epic": "🟣 Epic",
      "nav_rare": "💧 Rare",
      "nav_common": "🟢 Common",
      "position_label": "Position: ",
      "back_to_top": "Top",
      "update_info": "Produced by 萌新軍本部 | Last Updated: 2026/04/02"
    }
  },
  "units": [
    /* 🌟 神話 - 常駐召喚 */
    {
      "rarity": "mythic", "group": "常駐召喚", "group_en": "Standard Summon",
      "name_zh": "騎士之王", "name_en": "The Knight King",
      "pos_zh": "前排、承受傷害", "pos_en": "Frontline, Damage Sponge",
      "desc_zh": "日常即可取得，是平民玩家的首選坦克，擁有極高的生命值與防禦力；相較於焰火劍客，更擅長在 PVP 中穩定維持戰線。",
      "desc_en": "Obtainable through daily play, this is the top-tier tank choice for F2P players. It possesses extremely high HP and DEF; compared to Flame Duelist, it is more adept at stabilizing battle lines in PVP.",
      "img": "images/mythic/knight_king_icon.png"
    },

    {
      "rarity": "mythic", "group": "常駐召喚", "group_en": "Standard Summon",
      "name_zh": "焰火劍客", "name_en": "Flame Duelist",
      "pos_zh": "前排、承受傷害", "pos_en": "Frontline, Damage Sponge",
      "desc_zh": "日常即可取得，是平民玩家的首選坦克；其二技能具備機率回血效果，大幅提升續戰力。相較於騎士之王，更擅長應對 PVE 的長時間戰鬥，同時也是協作模式中的核心輸出之一。",
      "desc_en": "Available through daily gameplay, it's a premier tank for F2P players. Its second skill provides a chance to heal, significantly boosting durability. It excels more in long PVE battles compared to The Knight King and serves as a core DPS in Co-op mode.",
      "img": "images/mythic/blaze_swordsman_icon.png"
    },
    {
      "rarity": "mythic", "group": "常駐召喚", "group_en": "Standard Summon",
      "name_zh": "狂怒炮手", "name_en": "Fury Cannoneer",
      "pos_zh": "後排、範圍傷害", "pos_en": "Backline, AOE Damage",
      "desc_zh": "基礎神話單位，設計相對落後，爆發不足且缺乏明確戰術價值。但日常即可取得，對無課玩家來說仍具備基本過渡價值。",
      "desc_en": "A basic Mythic unit with a relatively outdated design. It lacks burst and clear tactical value. However, being easily obtainable, it provides fundamental transition value for F2P players.",
      "img": "images/mythic/furious_artilleryman_icon.png"
    },
    {
      "rarity": "mythic", "group": "常駐召喚", "group_en": "Standard Summon",
      "name_zh": "地脈術士", "name_en": "Geomancer",
      "pos_zh": "中排、範圍傷害", "pos_en": "Midline, AOE Damage",
      "desc_zh": "玻璃大砲，開場需長達16秒充能，在PVP節奏中運氣成分高，設計相對落後，爆發不足且缺乏明確戰術價值。但日常即可取得，對無課玩家來說仍具備基本過渡價值。",
      "desc_en": "A glass cannon requiring a 16-second initial charge. Its performance in fast-paced PVP relies heavily on luck. Like other basic units, its design is somewhat dated, but it remains a viable transition unit for F2P players.",
      "img": "images/mythic/earth_mage_icon.png"
    },
    {
      "rarity": "mythic", "group": "常駐召喚", "group_en": "Standard Summon",
      "name_zh": "獅鷲騎士", "name_en": "Gryphon Knight",
      "pos_zh": "前排、範圍傷害、控制", "pos_en": "Frontline, AOE, CC",
      "desc_zh": "定位副坦兼控制，技能採攻擊充能。因站位前排難以獲得攻速增益，導致釋放頻率偏低。建議放置於側翼提升戰場續航力，日常即可取得，對無課玩家來說仍具備基本過渡價值。",
      "desc_en": "Positioned as a sub-tank with crowd control, using attack-based charging. Its frontline position makes it difficult to receive attack speed buffs, leading to lower skill frequency. Recommended for the flanks; a standard transition unit for F2P players.",
      "img": "images/mythic/griffon_knight_icon.png"
    },
    {
      "rarity": "mythic", "group": "常駐召喚", "group_en": "Standard Summon",
      "name_zh": "風暴聖女", "name_en": "Storm Maiden",
      "pos_zh": "中排、範圍傷害、控制", "pos_en": "Midline, AOE, CC",
      "desc_zh": "基礎神話單位，設計相對落後，爆發不足且缺乏明確戰術價值。但日常即可取得，對無課玩家來說仍具備基本過渡價值。",
      "desc_en": "A basic Mythic unit with an outdated design and insufficient burst. Lacks clear tactical utility, but easy access makes it a fundamental transition unit for F2P players.",
      "img": "images/mythic/storm_maiden_icon.png"
    },
    {
      "rarity": "mythic", "group": "常駐召喚", "group_en": "Standard Summon",
      "name_zh": "星輝使徒", "name_en": "Starlight Apostle",
      "pos_zh": "中排、控制、增益", "pos_en": "Midline, CC, Buff",
      "desc_zh": "基礎神話單位，當角色達到 6 等時，其技能效果可彼此疊加（例如一隻 5 等與一隻 6 等，在重疊範圍內可累計 50% + 50%＝100% 的增益）。建議搭配水靈巫師作為輔助，可大幅提升戰場支援的覆蓋率與穩定性。",
      "desc_en": "A foundational Mythic. At Level 6, its skill effects can stack (e.g., a Lv.5 and Lv.6 unit providing 100% total buff in overlapping areas). Pairing with Ripple Wizard as support significantly enhances coverage and stability of battlefield support.",
      "img": "images/mythic/star_apostle_icon.png"
    },

    /* 🌟 神話 - 限定召喚 */
    {
      "rarity": "mythic", "group": "限定召喚", "group_en": "Limited Summon",
      "name_zh": "九尾妖狐", "name_en": "Nine-Tailed Fox",
      "pos_zh": "後排、單體傷害、增益", "pos_en": "Backline, Single DPS, Buff",
      "desc_zh": "曾是輸出型神話中單體傷害的天花板，憑藉時間充能機制確保技能循環穩定，在協作模式與狩獵魔花中長期佔據絕對主力地位；然而隨著亡骨槍手登場，低等級的九尾逐漸被其取代，地位明顯下滑。",
      "desc_en": "Once the pinnacle of single-target DPS Mythics. Its time-charge mechanic ensures stable skill cycles, securing its role in Co-op and Hunting. However, with the arrival of Bone Marksman, lower-level foxes are being phased out, leading to a decline in status.",
      "img": "images/mythic/nine_tailed_fox_icon.png"
    },
    {
      "rarity": "mythic", "group": "限定召喚", "group_en": "Limited Summon",
      "name_zh": "毒菇刺客", "name_en": "Venospore Killer",
      "pos_zh": "中排、單體傷害", "pos_en": "Midline, Single DPS",
      "desc_zh": "技能可閃現至敵方法師身旁，造成高額傷害並附加沉默效果；雖然在 PVP 中出場率偏低，但在協作模式中地位無可取代，是核心輸出之一。",
      "desc_en": "Skills allow blinking to enemy mages, dealing high damage with silence. While its PVP appearance rate is low, its position in Co-op mode is irreplaceable as a core damage dealer.",
      "img": "images/mythic/poison_assassin_icon.png"
    },
    {
      "rarity": "mythic", "group": "限定召喚", "group_en": "Limited Summon",
      "name_zh": "叢林遊俠", "name_en": "Jungle Ranger",
      "pos_zh": "後排、範圍傷害", "pos_en": "Backline, AOE Damage",
      "desc_zh": "曾是最泛用的輸出型神話之一，與旋律、水靈巫師相性極佳，長期擔任後排輸出的中流砥柱；然而隨著迷霧射手與亡骨槍手的出現，其定位逐漸被取代，整體存在價值明顯下滑。",
      "desc_en": "Formerly one of the most versatile DPS Mythics. Synergizes perfectly with Melody Weaver and Ripple Wizard as a backline mainstay. Its role is now being challenged by Mist Archer and Bone Marksman.",
      "img": "images/mythic/jungle_ranger_icon.png"
    },
    {
      "rarity": "mythic", "group": "限定召喚", "group_en": "Limited Summon",
      "name_zh": "旋律編織者", "name_en": "Melody Weaver",
      "pos_zh": "中排、增益", "pos_en": "Midline, Buff",
      "desc_zh": "百搭型核心輔助。提供大範圍攻速增益，6級後的常駐被動使其成為老玩家不可或缺的戰術選擇。",
      "desc_en": "A highly versatile core support. Provides wide-range attack speed buffs. The permanent passive at Lv.6 makes it an indispensable tactical choice for veteran players.",
      "img": "images/mythic/melody_weaver_icon.png"
    },
    {
      "rarity": "mythic", "group": "限定召喚", "group_en": "Limited Summon",
      "name_zh": "水靈巫師", "name_en": "Ripple Wizard",
      "pos_zh": "中排、增益、控制", "pos_en": "Midline, Buff, CC",
      "desc_zh": "具備大範圍充能支援能力；雖然在 PVP 中出場率不高，但在 PVE 場景中表現關鍵。無論是搭配冰雪提升傷害輸出、配合星輝強化攻擊增益，或結合戰爭女神發展護盾戰術，6 等水靈皆為不可或缺的核心支援。",
      "desc_en": "Features wide-range energy support. Crucial in PVE despite lower PVP usage. Whether boosting Ice Queen's damage or Star Apostle's buffs, a Lv.6 Aqua Wizard is an essential core support.",
      "img": "images/mythic/aqua_wizard_icon.png"
    },

    /* 🌟 神話 - 轉盤/特殊 */
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_en": "Wheel / Special",
      "name_zh": "蠻族暴君", "name_en": "Barbarian Tyrant",
      "pos_zh": "前排、範圍傷害、承受傷害", "pos_en": "Frontline, AOE, Tank",
      "desc_zh": "技能可跳入敵方後排，進行嘲諷並吸引火力，同時提供防禦增益；在高等級條件下，暴君與高等血刃的搭配能展現出極具壓制力的戰術組合。",
      "desc_en": "Skills allow jumping into the enemy backline to taunt and draw fire while providing a defense buff. At high levels, the combination of Tyrant and high-level Red Blade creates an extremely oppressive tactical setup.",
      "img": "images/mythic/barbarian_tyrant_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_en": "Wheel / Special",
      "name_zh": "霧影射手", "name_en": "Mist Archer",
      "pos_zh": "後排、範圍傷害", "pos_en": "Backline, AOE Damage",
      "desc_zh": "曾是版本答案之一，擁有高射速輸出，但極度依賴機率觸發技能；在運氣良好時可發揮近乎神級的戰力，兼具單體與群體輸出能力。目前仍需配置複數 6 等迷霧射手，與亡骨槍手搭配以觸發其二技能效果。",
      "desc_en": "Once the definitive meta pick. Features high-speed DPS but is heavily dependent on RNG for skill procs. With good luck, it delivers god-tier combat power. Multiple Lv.6 copies are still needed to trigger Bone Marksman's secondary effects.",
      "img": "images/mythic/misty_archer_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_en": "Wheel / Special",
      "name_zh": "冰雪女王", "name_en": "Frost Queen",
      "pos_zh": "中排、範圍傷害、控制", "pos_en": "Midline, AOE, CC",
      "desc_zh": "曾為版本答案之一；然而隨著光輝戰士登場並逐漸普及，單一或少量冰雪的傷害已不再足夠。但若對手光輝覆蓋率不足，或冰雪本身的等級與數量達標，仍有機會在開場造成可觀壓制。",
      "desc_en": "Formerly a meta mainstay. However, as Radiant Warrior becomes common, the damage from single or few queens is often insufficient. If the opponent lacks shield coverage or your queen's level is high enough, she can still provide massive opening pressure.",
      "img": "images/mythic/ice_queen_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_en": "Wheel / Special",
      "name_zh": "戰爭女神", "name_en": "Goddess of War",
      "pos_zh": "前排、增益", "pos_en": "Frontline, Buff",
      "desc_zh": "在 PVE 活動中堪稱版本答案，雙 6 等以上女神搭配 6 等水靈，幾乎適用於大多數關卡，大幅提升戰場生存能力；在 PVP 中，亦有高端玩家將其與血刃、光輝搭配，形成高強度的菜刀隊體系。",
      "desc_en": "The definitive PVE meta choice. Two Lv.6+ Goddesses paired with Lv.6 Ripple Wizard can sustain through almost any stage. In PVP, high-end players pair her with Red Blade and Radiant Warrior for a high-strength physical offense system.",
      "img": "images/mythic/war_goddess_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_en": "Wheel / Special",
      "name_zh": "重砲先鋒", "name_en": "Firepower Vanguard",
      "pos_zh": "後排、傷害", "pos_en": "Backline, Damage",
      "desc_zh": "自推出以來定位不明、實用性有限，整體作用不大，出場率極低，目前不建議投入資源培養。",
      "desc_en": "Lacks a clear role and offers limited utility since launch. Overall impact is minimal with a very low appearance rate; resource investment is currently not recommended.",
      "img": "images/mythic/heavy_artillery_vanguard_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_en": "Wheel / Special",
      "name_zh": "暗月女皇", "name_en": "Darkmoon Queen",
      "pos_zh": "後排、控制", "pos_en": "Backline, CC",
      "desc_zh": "技能可有效限制敵方後排輸出，具備強大的戰局逆轉能力；隨著後續改版，複數女皇不再會鎖定相同目標，使整體控制表現略有提升，戰場穩定性有所改善。",
      "desc_en": "Effectively restricts enemy backline output with strong comeback potential. Updates improved the logic so multiple empresses don't lock the same target, enhancing overall control stability.",
      "img": "images/mythic/dark_moon_empress_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_en": "Wheel / Special",
      "name_zh": "烈焰主宰", "name_en": "Blazeking",
      "pos_zh": "中排、範圍傷害、增益", "pos_en": "Midline, AOE, Buff",
      "desc_zh": "6 等級技能可提供周圍一格的傷害增益，在 PVE 中具備極高價值；但於 PVP 場景下，技能常在開局即作用於坦克，導致效益受限，整體 PVP 實用性相對較低。",
      "desc_en": "Lv.6 skill provides damage buffs to surrounding units, making it invaluable in PVE. In PVP, its skill often targets tanks early on, limiting its strategic impact and overall utility.",
      "img": "images/mythic/flame_sovereign_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_en": "Wheel / Special",
      "name_zh": "潮汐領主", "name_en": "Tide Lord",
      "pos_zh": "中排、控制、增益", "pos_en": "Midline, CC, Buff",
      "desc_zh": "6 等級技能可為周圍一格提供攻速增益，並具備鎖定後排的傷害特性，使其在 PVP 中擁有極高價值；然而在 PVE 場景下，整體實用性略遜於烈焰主宰。",
      "desc_en": "Lv.6 skill offers attack speed buffs and targets the enemy backline, making it highly valuable in PVP. However, its PVE performance is generally considered secondary to Blazeking.",
      "img": "images/mythic/tidal_lord_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_en": "Wheel / Special",
      "name_zh": "光輝戰士", "name_en": "Radiant Warrior",
      "pos_zh": "前排、坦克", "pos_en": "Frontline, Tank",
      "desc_zh": "技能可在開局立即為周圍一格單位施放護盾，護盾值相當於目標最大生命值的 50%。其設計核心在於反制開局爆發型角色，為隊伍配置中極為關鍵的防禦單位；高端玩家通常至少會配置 4 隻以上以確保穩定性。",
      "desc_en": "Deploys an immediate shield at start for surrounding units, equal to 50% of max HP. Designed to counter opening burst units, it is a critical defensive mainstay. Top players typically deploy 4+ copies for consistency.",
      "img": "images/mythic/Radiant_Warrior_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_en": "Wheel / Special",
      "name_zh": "木靈守衛", "name_en": "Woodland Guardian",
      "pos_zh": "前排、治療", "pos_en": "Frontline, Healer",
      "desc_zh": "唯一具備治療能力的坦克角色，在 PVE 中表現極為出色；但於 PVP 快節奏環境下相對脆弱，需謹慎佈陣，避免過早成為集火目標。",
      "desc_en": "The only tank with healing abilities, performing exceptionally well in PVE. In the fast-paced PVP environment, it remains relatively fragile and requires precise positioning to avoid being bursted.",
      "img": "images/mythic/Wood_Spirit_Guard_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_en": "Wheel / Special",
      "name_zh": "血刃", "name_en": "Red Blade",
      "pos_zh": "後排、範圍傷害", "pos_en": "Backline, AOE Damage",
      "desc_zh": "技能可在開局 6 秒內閃現至敵方射手或法師身旁，施放高額持續性傷害；搭配蠻族暴君與戰爭女神時，可組成特殊的近戰菜刀隊體系。不過，此角色需複數配置且達高等級，才具備足夠的威懾與擊殺能力，整體培養成本較高。",
      "desc_en": "Blinks to enemy shooters/mages within the first 6s, dealing heavy continuous damage. Can form a potent melee-centric system with Barbarian Tyrant and War Goddess, but requires high levels and multiple copies to be effective.",
      "img": "images/mythic/Red Blade_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_en": "Wheel / Special",
      "name_zh": "亡骨槍手", "name_en": "Bone Marksman",
      "pos_zh": "後排、範圍傷害", "pos_en": "Backline, AOE Damage",
      "desc_zh": "作為 v0.8.8 版本答案，擁有極高的前期成長曲線，可有效取代等級不足的輸出單位；同時為唯一在 4 等即可解鎖二技能的角色，堪稱中低課玩家的輸出首選。",
      "desc_en": "The meta answer for v0.8.8. Features a superb early growth curve, effectively replacing under-leveled DPS. It's the only unit that unlocks its secondary skill at Lv.4, making it the top choice for low-to-mid spenders.",
      "img": "images/mythic/Bone marksman_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_en": "Wheel / Special",
      "name_zh": "熾天使", "name_en": "Seraph",
      "pos_zh": "前排、範圍傷害、控制", "pos_en": "Frontline, AOE, CC",
      "desc_zh": "競技場前20名專屬神話。", "desc_en": "Exclusive Mythic for Arena Top 20 ranking players.",
      "img": "images/mythic/Seraph_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_en": "Wheel / Special",
      "name_zh": "暗夜伯爵", "name_en": "Night Scion",
      "pos_zh": "前排、範圍傷害", "pos_en": "Frontline, AOE Damage",
      "desc_zh": "公會戰排名專屬神話。", "desc_en": "Exclusive Mythic awarded for Clan War rankings.",
      "img": "images/mythic/Night scion_icon.png"
    },

    /* 🔥 傳奇 */
    {
      "rarity": "legendary", "group": "傳奇單位", "group_en": "Legendary Units",
      "name_zh": "櫻花浪人", "name_en": "Sakura Ronin",
      "pos_zh": "前排、承受傷害", "pos_en": "Frontline, Tank",
      "desc_zh": "作為傳奇階段中最堅實的前排之一，在神話坦克尚未成長完成前，是極佳的過渡與替代選擇。",
      "desc_en": "One of the sturdiest frontliners in the Legendary stage. A perfect transition unit before your Mythic tanks reach full power.",
      "img": "images/legendary/cherry_ronin_icon.png"
    },
    {
      "rarity": "legendary", "group": "傳奇單位", "group_en": "Legendary Units",
      "name_zh": "幽靈刺客", "name_en": "Ghost Assassin",
      "pos_zh": "前排、範圍傷害", "pos_en": "Frontline, AOE",
      "desc_zh": "具備擾亂敵方節奏能力的高風險單位，可於開場閃現至敵方後排施壓；但需嚴格控制部署數量，否則容易因過度突進而淪為「送頭」。",
      "desc_en": "A high-risk unit capable of disrupting enemy tempo by blinking to the backline at the start. Deployment numbers must be strictly controlled to avoid unnecessary feeding.",
      "img": "images/legendary/ghost_assassin_icon.png"
    },
    {
      "rarity": "legendary", "group": "傳奇單位", "group_en": "Legendary Units",
      "name_zh": "熊靈勇士", "name_en": "Ursa Champion",
      "pos_zh": "中排、控制", "pos_en": "Midline, CC",
      "desc_zh": "具備強力的爆發型群體傷害能力，是筆者認為傳奇單位中最值得優先升級至 7 等的角色。",
      "desc_en": "Possesses strong explosive AOE damage. In my opinion, the most worthy Legendary unit to prioritize for Lv.7 upgrade.",
      "img": "images/legendary/bear_warrior_icon.png"
    },
    {
      "rarity": "legendary", "group": "傳奇單位", "group_en": "Legendary Units",
      "name_zh": "精靈箭手", "name_en": "Elven Archer",
      "pos_zh": "後排、單體傷害、削弱對手", "pos_en": "Backline, Debuff",
      "desc_zh": "在遊戲早期具備極高培養價值的傳奇角色，但隨著版本更新，已有更優秀的替代選擇。",
      "desc_en": "A legendary character with high development value in the early stages of the game, but as the game has been updated, more superior alternatives are now available.",
      "img": "images/legendary/Elven Archer_icon.png"
    },
    {
      "rarity": "legendary", "group": "傳奇單位", "group_en": "Legendary Units",
      "name_zh": "灰燼法師", "name_en": "Ashen Arcenist",
      "pos_zh": "中排、範圍傷害", "pos_en": "Midline, AOE Damage",
      "desc_zh": "純粹的範圍輸出單位，面板數值與風語者相近，但缺乏控制能力，整體實用性較低。",
      "desc_en": "A pure AOE output unit. Stats are similar to Wind Speaker but lacks CC, resulting in lower overall utility.",
      "img": "images/legendary/ash_mage_icon.png"
    },
    {
      "rarity": "legendary", "group": "傳奇單位", "group_en": "Legendary Units",
      "name_zh": "風語者", "name_en": "Wind Apostle",
      "pos_zh": "中排、範圍傷害、控制", "pos_en": "Midline, AOE, CC",
      "desc_zh": "整體表現優於灰燼法師，技能具備聚怪效果，能有效集中敵人並最大化範圍傷害輸出；但由於後期存在更優選擇，出場率相對偏低。",
      "desc_en": "Superior to Ash Mage due to skill-based enemy clustering, maximizing AOE efficiency. However, with better late-game options, its appearance rate is relatively low.",
      "img": "images/legendary/wind_speaker_icon.png"
    },
    {
      "rarity": "legendary", "group": "傳奇單位", "group_en": "Legendary Units",
      "name_zh": "爆破矮人", "name_en": "Blast Dwarf",
      "pos_zh": "後排、單體傷害", "pos_en": "Backline, Single DPS",
      "desc_zh": "可視為弱化版狂怒炮手，整體表現平庸，不建議投入資源培養。",
      "desc_en": "Essentially a weaker version of Fury Cannoneer. Mediocre performance; resource investment is not recommended.",
      "img": "images/legendary/explosion_dwarf_icon.png"
    },
    {
      "rarity": "legendary", "group": "傳奇單位", "group_en": "Legendary Units",
      "name_zh": "御風統領", "name_en": "Windlord",
      "pos_zh": "後排、單體傷害、削弱對手", "pos_en": "Backline, Debuff",
      "desc_zh": "單體風屬性輸出單位，在新手前期若單體傷害不足時可作為過渡補充；但隨著後期出現更優解，整體出場率相對偏低。",
      "desc_en": "A single-target Wind DPS unit useful as a filler for early-game players. Usage drops significantly once better units are acquired.",
      "img": "images/legendary/Windlord_icon.png"
    },
    {
      "rarity": "legendary", "group": "傳奇單位", "group_en": "Legendary Units",
      "name_zh": "鐵壁者", "name_en": "Iron Bulwark",
      "pos_zh": "前排、承受傷害、控制", "pos_en": "Frontline, Tank, CC",
      "desc_zh": "技能在單位死亡後，會對隨機輔助單位施加傷害並降低攻速；若目標為【低攻速】屬性，則以該目標為中心再釋放中範圍廣域傷害並附帶攻速削減。隨著亡骨槍手推出，其實用性略有提升。",
      "desc_en": "Triggers a debuff on random supports upon death, reducing ATK speed. If the target has 'Low ATK Speed', it triggers a secondary AOE explosion. Utility increased slightly with the Bone Marksman meta.",
      "img": "images/legendary/Iron_Bulwark_icon.png"
    },

    /* 🟣 史詩 */
    {
      "rarity": "epic", "group": "史詩單位", "group_en": "Epic Units",
      "name_zh": "岩石投擲者", "name_en": "Rock Thrower",
      "pos_zh": "前排、控制、承受傷害", "pos_en": "Frontline, CC, Tank",
      "desc_zh": "在遊戲前中期表現極為優秀的過渡型坦克，但隨著神話坦克逐漸成長，其重要性也會隨之下降。",
      "desc_en": "An exceptional transition tank during the early-to-mid game. Its importance naturally fades as Mythic tanks mature.",
      "img": "images/epic/rock_thrower_icon.png"
    },
    {
      "rarity": "epic", "group": "史詩單位", "group_en": "Epic Units",
      "name_zh": "火焰法師", "name_en": "Flame Mage",
      "pos_zh": "中排、單體傷害", "pos_en": "Midline, Single DPS",
      "desc_zh": "專精於對單體單位造成強力輸出，雖然生存能力較低、容易陣亡，但在戰線穩定後可提供極為可觀的火力，主要應用於 PVE 場景。",
      "desc_en": "Specializes in high single-target output. Fragile and easily killed, but provides massive firepower behind a stable frontline. Best for PVE.",
      "img": "images/epic/flame_mage_icon.png"
    },
    {
      "rarity": "epic", "group": "史詩單位", "group_en": "Epic Units",
      "name_zh": "雪人戰士", "name_en": "Snowman Warrior",
      "pos_zh": "中排、控制", "pos_en": "Midline, CC",
      "desc_zh": "定位較為模糊，整體表現不夠突出，在實戰中多半會被選擇性忽略。",
      "desc_en": "Vague role and uninspiring performance. Frequently ignored in competitive setups.",
      "img": "images/epic/snowman_warrior_icon.png"
    },
    {
      "rarity": "epic", "group": "史詩單位", "group_en": "Epic Units",
      "name_zh": "毒藥大師", "name_en": "Poison Master",
      "pos_zh": "中排、範圍傷害", "pos_en": "Midline, AOE Damage",
      "desc_zh": "在新手進行無限戰爭模式時為必備戰力，具備極高的戰術價值，強烈建議優先升級至 6 等。",
      "desc_en": "Essential for new players tackling Infinite mode. High tactical value; reaching Lv.6 is strongly recommended.",
      "img": "images/epic/poison_master_icon.png"
    },
    {
      "rarity": "epic", "group": "史詩單位", "group_en": "Epic Units",
      "name_zh": "神諭者", "name_en": "Oracle",
      "pos_zh": "中排、增益", "pos_en": "Midline, Buff",
      "desc_zh": "無論 PVP 或 PVE 皆為必備單位；雖然疊加次數上限已調整為 20 次，但仍是團隊輔助體系中的核心角色。",
      "desc_en": "An absolute must-have for both PVP and PVE. Despite the stack limit being capped at 20, it remains the core of team support systems.",
      "img": "images/epic/oracle_icon.png"
    },
    {
      "rarity": "epic", "group": "史詩單位", "group_en": "Epic Units",
      "name_zh": "皇家弓箭手", "name_en": "Royal Archer",
      "pos_zh": "後排、單體傷害", "pos_en": "Backline, Single DPS",
      "desc_zh": "為轉盤／課金活動限定單位，具備長攻擊距離與後排站位優勢，使其生存率高於火焰法師；在 PVE 場景中具備極高的實戰價值。",
      "desc_en": "Wheel/Event limited unit. Its long range and backline position offer better survival than Flame Mage, making it highly valuable in PVE Boss fights.",
      "img": "images/epic/royal_archer_icon.png"
    },
    {
      "rarity": "epic", "group": "史詩單位", "group_en": "Epic Units",
      "name_zh": "木頭巫師", "name_en": "Wooden Wizard",
      "pos_zh": "中排、群體治療", "pos_en": "Midline, AOE Heal",
      "desc_zh": "作為治癒型單位的首選，後期 PVP 隊伍通常會配置至少一名 7 等級的木頭巫師；同時在 PVE 場景中亦具備良好的發揮空間。",
      "desc_en": "The premier healer. High-end PVP teams usually run at least one Lv.7 copy. Also performs excellently in varied PVE scenarios.",
      "img": "images/epic/wood_wizard_icon.png"
    },
    {
      "rarity": "epic", "group": "史詩單位", "group_en": "Epic Units",
      "name_zh": "南瓜守衛", "name_en": "Pumpkin Guard",
      "pos_zh": "前排、承受傷害", "pos_en": "Frontline, Tank",
      "desc_zh": "作為櫻花浪人的優秀替代選擇，取得容易且升級快速，是過渡期極佳的前排替代角色。",
      "desc_en": "A great alternative to Cherry Ronin. Easy to obtain and quick to upgrade, serving as an excellent transition frontliner.",
      "img": "images/epic/pumpkin_guard_icon.png"
    },
    {
      "rarity": "epic", "group": "史詩單位", "group_en": "Epic Units",
      "name_zh": "矮人狂戰士", "name_en": "Dwarf Berserker",
      "pos_zh": "前排、範圍傷害、增益", "pos_en": "Frontline, AOE, Buff",
      "desc_zh": "轉盤活動限定單位。", "desc_en": "Exclusive unit from Wheel events.",
      "img": "images/epic/dwarf_berserker_icon.png"
    },

    /* 💧 稀有 */
    {
      "rarity": "rare", "group": "稀有單位", "group_en": "Rare Units",
      "name_zh": "重錘衛士", "name_en": "Flail Warden",
      "pos_zh": "前排、範圍傷害", "pos_en": "Frontline, AOE",
      "desc_zh": "低消耗的過渡型單位，在前中期可作為暫時替代，但進入中後期後，通常不再被納入主力隊伍。",
      "desc_en": "Low-cost transition unit for early play. Generally phased out once the team matures into mid-to-late game.",
      "img": "images/rare/heavy_sledgehammer_guard_icon.png"
    },
    {
      "rarity": "rare", "group": "稀有單位", "group_en": "Rare Units",
      "name_zh": "哥布林戰士", "name_en": "Goblin Warrior",
      "pos_zh": "前排、單體傷害", "pos_en": "Frontline, Single DPS",
      "desc_zh": "低消耗的過渡型單位，在前中期可作為暫時替代，但進入中後期後，通常不再被納入主力隊伍。",
      "desc_en": "Low-cost transition unit for early play. Replaced as better units are acquired.",
      "img": "images/rare/goblin_warrior_icon.png"
    },
    {
      "rarity": "rare", "group": "稀有單位", "group_en": "Rare Units",
      "name_zh": "林地斥候", "name_en": "Forest Scout",
      "pos_zh": "後排、單體傷害", "pos_en": "Backline, Single DPS",
      "desc_zh": "低消耗的過渡型單位，在前中期可作為暫時替代；不過在稀有等級升級所需的鍛造石大幅降低後，8～9 等斥侯的強度已可取代低等級的火焰法師。",
      "desc_en": "Transition unit. With reduced Forge Stone costs for Rare tiers, a Lv.8-9 Scout can effectively replace a low-level Flame Mage.",
      "img": "images/rare/forest_scout_icon.png"
    },
    {
      "rarity": "rare", "group": "稀有單位", "group_en": "Rare Units",
      "name_zh": "見習法師", "name_en": "Apprentice Mage",
      "pos_zh": "後排、傷害", "pos_en": "Backline, Damage",
      "desc_zh": "低消耗的過渡型單位，在前中期可作為暫時替代，但進入中後期後，通常不再被納入主力隊伍。",
      "desc_en": "Standard transition unit for the early game. Rarely used in endgame team compositions.",
      "img": "images/rare/apprentice_mage_icon.png"
    },
    {
      "rarity": "rare", "group": "稀有單位", "group_en": "Rare Units",
      "name_zh": "狂戰士", "name_en": "Berserker",
      "pos_zh": "前排、範圍傷害", "pos_en": "Frontline, AOE",
      "desc_zh": "低消耗的過渡型單位，在前中期可作為暫時替代，但進入中後期後，通常不再被納入主力隊伍。",
      "desc_en": "Early game transition unit with limited late-game viability.",
      "img": "images/rare/berserker_icon.png"
    },
    {
      "rarity": "rare", "group": "稀有單位", "group_en": "Rare Units",
      "name_zh": "炸彈兵", "name_en": "Bomber",
      "pos_zh": "前排、範圍傷害、控制", "pos_en": "Frontline, AOE, CC",
      "desc_zh": "作為炸彈隊戰術的核心單位之一，專精於 PVP 體系；但隨著光輝戰士的出現，其實用價值大幅下降。",
      "desc_en": "Core of the Bomber-comp for PVP. Its value has plummeted since the introduction of Radiant Warrior's shields.",
      "img": "images/rare/bomber_icon.png"
    },
    {
      "rarity": "rare", "group": "稀有單位", "group_en": "Rare Units",
      "name_zh": "哥布林薩滿", "name_en": "Goblin Shaman",
      "pos_zh": "中排、治療", "pos_en": "Midline, Heal",
      "desc_zh": "少數具備治癒能力的單位，但生存能力較低，容易被範圍攻擊秒殺，實戰中出場機會較少。",
      "desc_en": "A rare healer tier unit, but extremely fragile and easily killed by AOE. Limited practical usage.",
      "img": "images/rare/goblin_shaman_icon.png"
    },
    {
      "rarity": "rare", "group": "稀有單位", "group_en": "Rare Units",
      "name_zh": "哥布林大廚", "name_en": "Goblin Chef",
      "pos_zh": "前排、控制、承受傷害", "pos_en": "Frontline, CC, Tank",
      "desc_zh": "在 4 水費單位中擁有最高的單體生命值，是一名稱職的副坦角色；多數情況下僅在剩餘 4 點水費時作為臨時補位使用。",
      "desc_en": "Has the highest single HP among 4-cost units. Acts as a competent sub-tank, mostly used to fill gaps in 4-cost deployments.",
      "img": "images/rare/goblin_chef_icon.png"
    },
    {
      "rarity": "rare", "group": "稀有單位", "group_en": "Rare Units",
      "name_zh": "疾風狼", "name_en": "Gale Wolf",
      "pos_zh": "前排、單體傷害", "pos_en": "Frontline, Single DPS",
      "desc_zh": "技能觸發條件嚴苛，導致實戰表現不佳，在實際對戰中幾乎不會上場。",
      "desc_en": "Strict skill conditions lead to poor combat performance. Almost never used in serious rosters.",
      "img": "images/rare/gale_wolf_icon.png"
    },
    {
      "rarity": "rare", "group": "稀有單位", "group_en": "Rare Units",
      "name_zh": "神盾士兵", "name_en": "Paladin",
      "pos_zh": "前排、承受傷害", "pos_en": "Frontline, Tank",
      "desc_zh": "僅需 3 水費即可提供優秀防禦，性價比極高；同時隨著稀有等級升級所需的鍛造石大幅降低，8～9 等神盾士兵亦可作為補位選擇。",
      "desc_en": "High efficiency 3-cost tank. Excellent cost-performance ratio, especially with reduced Forge Stone costs for high-level Rares.",
      "img": "images/rare/aegis_soldier_icon.png"
    },
    {
      "rarity": "rare", "group": "稀有單位", "group_en": "Rare Units",
      "name_zh": "冰霜骷髏", "name_en": "Frost Skeleton",
      "pos_zh": "前排、控制", "pos_en": "Frontline, CC",
      "desc_zh": "技能於死亡後釋放廣域減速效果，通常用於側翼或後排突襲，開局即可主動犧牲，為亡骨槍手創造觸發二技能的條件。",
      "desc_en": "Releases an AOE slow upon death. Best used for flanks to trigger Bone Marksman's secondary skill requirements early.",
      "img": "images/rare/Frost Skeleton_icon.png"
    },
    {
      "rarity": "rare", "group": "稀有單位", "group_en": "Rare Units",
      "name_zh": "加農戰車", "name_en": "Canon Chariot",
      "pos_zh": "後排、範圍傷害", "pos_en": "Backline, AOE Damage",
      "desc_zh": "尚未實裝", "desc_en": "Not Yet Implemented",
      "img": "images/rare/canon_chariot_icon.png"
    },

    /* 🟢 普通 */
    {
      "rarity": "common", "group": "普通單位", "group_en": "Common Units",
      "name_zh": "火槍手", "name_en": "Gunner",
      "pos_zh": "後排、單體傷害", "pos_en": "Backline, Single DPS",
      "desc_zh": "新手階段過渡單位。", "desc_en": "Starter transition unit.",
      "img": "images/common/flintlock_shooter_icon.png"
    },
    {
      "rarity": "common", "group": "普通單位", "group_en": "Common Units",
      "name_zh": "弓箭手", "name_en": "Archer",
      "pos_zh": "後排、單體傷害", "pos_en": "Backline, Single DPS",
      "desc_zh": "新手階段過渡單位。", "desc_en": "Starter transition unit.",
      "img": "images/common/archer_icon.png"
    },
    {
      "rarity": "common", "group": "普通單位", "group_en": "Common Units",
      "name_zh": "雪球投擲手", "name_en": "Snowball Thrower",
      "pos_zh": "後排、控制", "pos_en": "Backline, CC",
      "desc_zh": "新手階段過渡單位。", "desc_en": "Starter transition unit.",
      "img": "images/common/snowball_thrower_icon.png"
    },
    {
      "rarity": "common", "group": "普通單位", "group_en": "Common Units",
      "name_zh": "劍士", "name_en": "Swordsman",
      "pos_zh": "前排、範圍傷害", "pos_en": "Frontline, AOE",
      "desc_zh": "新手階段過渡單位。", "desc_en": "Starter transition unit.",
      "img": "images/common/swordsman_icon.png"
    },
    {
      "rarity": "common", "group": "普通單位", "group_en": "Common Units",
      "name_zh": "炸彈客", "name_en": "Demoman",
      "pos_zh": "前排、控制", "pos_en": "Frontline, CC",
      "desc_zh": "新手階段過渡單位。", "desc_en": "Starter transition unit.",
      "img": "images/common/bomber_icon.png"
    },
    {
      "rarity": "common", "group": "普通單位", "group_en": "Common Units",
      "name_zh": "木盾衛士", "name_en": "Woodshield Guard",
      "pos_zh": "前排、承受傷害", "pos_en": "Frontline, Tank",
      "desc_zh": "新手階段過渡單位。", "desc_en": "Starter transition unit.",
      "img": "images/common/wooden_shield_guard_icon.png"
    }
  ]
};