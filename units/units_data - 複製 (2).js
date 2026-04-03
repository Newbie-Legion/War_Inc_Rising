/**
 * War Inc Rising - 士兵全資料數據庫 (繁、簡、英三語無損版)
 */
const UNIT_DATABASE = {
  "ui": {
    "zh": {
      "title": "⚔️ 士兵介紹 - 作戰單位圖鑑",
      "subtitle": "單位圖鑑，內容按稀有度劃分，所有單位說明為筆者獨立整理，僅供新手參考。",
      "breadcrumb_home": "🏠 首頁", "breadcrumb_current": "士兵介紹",
      "nav_mythic": "🌟 神話", "nav_legendary": "🔥 傳奇", "nav_epic": "🟣 史詩", "nav_rare": "💧 稀有", "nav_common": "🟢 普通",
      "position_label": "定位：", "back_to_top": "▲",
      "update_info": "© 萌新軍本部 製作 | 內容更新時間：2026/04/02"
    },
    "cn": {
      "title": "⚔️ 士兵介绍 - 作战单位图鉴",
      "subtitle": "单位图鉴，内容按稀有度划分，所有单位说明为笔者独立整理，仅供新手参考。",
      "breadcrumb_home": "🏠 首页", "breadcrumb_current": "士兵介绍",
      "nav_mythic": "🌟 神话", "nav_legendary": "🔥 传奇", "nav_epic": "🟣 史诗", "nav_rare": "💧 稀有", "nav_common": "🟢 普通",
      "position_label": "定位：", "back_to_top": "▲",
      "update_info": "© 萌新军本部 制作 | 内容更新时间：2026/04/02"
    },
    "en": {
      "title": "⚔️ Troop Encyclopedia",
      "subtitle": "Full unit compendium categorized by rarity. All descriptions are independently compiled for reference.",
      "breadcrumb_home": "🏠 Home", "breadcrumb_current": "Troops",
      "nav_mythic": "🌟 Mythic", "nav_legendary": "🔥 Legendary", "nav_epic": "🟣 Epic", "nav_rare": "💧 Rare", "nav_common": "🟢 Common",
      "position_label": "Position: ", "back_to_top": "Top",
      "update_info": "Produced by Recruit Army HQ | Last Updated: 2026/04/02"
    }
  },
  "units": [
    /* 🌟 神話 - 常駐 */
    {
      "rarity": "mythic", "group": "常駐召喚", "group_cn": "常驻召唤", "group_en": "Standard Summon",
      "name_zh": "騎士之王", "name_cn": "骑士之王", "name_en": "The Knight King",
      "pos_zh": "前排、承受傷害", "pos_cn": "前排、承受伤害", "pos_en": "Frontline Tank",
      "desc_zh": "日常即可取得，是平民玩家的首選坦克，擁有極高的生命值與防禦力；相較於焰火劍客，更擅長在 PVP 中穩定維持戰線。",
      "desc_cn": "日常即可取得，是平民玩家的首选坦克，拥有极高的生命值与防御力；相较于焰火剑客，更擅长在 PVP 中稳定维持战线。",
      "desc_en": "Available daily, the top tank choice for F2P players. High HP and DEF. Excels at stabilizing lines in PVP.",
      "img": "images/mythic/knight_king_icon.png"
    },
    {
      "rarity": "mythic", "group": "常駐召喚", "group_cn": "常驻召唤", "group_en": "Standard Summon",
      "name_zh": "焰火劍客", "name_cn": "焰火剑客", "name_en": "Flame Duelist",
      "pos_zh": "前排、承受傷害", "pos_cn": "前排、承受伤害", "pos_en": "Frontline Tank",
      "desc_zh": "日常即可取得，是平民玩家的首選坦克；其二技能具備機率回血效果，大幅提升續戰力。相較於騎士之王，更擅長應對 PVE 的長時間戰鬥，同時也是協作模式中的核心輸出之一。",
      "desc_cn": "日常即可取得，是平民玩家的首选坦克；其二技能具备机率回血效果，大幅提升续战力。相较于骑士之王，更擅长应对 PVE 的长时间战斗，同时也是协作模式中的核心输出之一。",
      "desc_en": "F2P favorite tank. Skill provides a heal-on-hit chance. Better for long PVE fights and a core DPS in Co-op.",
      "img": "images/mythic/blaze_swordsman_icon.png"
    },
    {
      "rarity": "mythic", "group": "常駐召喚", "group_cn": "常驻召唤", "group_en": "Standard Summon",
      "name_zh": "狂怒炮手", "name_cn": "狂怒炮手", "name_en": "Fury Cannoneer",
      "pos_zh": "後排、範圍傷害", "pos_cn": "后排、范围伤害", "pos_en": "Backline AOE",
      "desc_zh": "基礎神話單位，設計相對落後，爆發不足且缺乏明確戰術價值。但日常即可取得，對無課玩家來說仍具備基本過渡價值。",
      "desc_cn": "基础神话单位，设计相对落后，爆发不足且缺乏明确战术价值。但日常即可取得，对无课玩家来说仍具备基本过渡价值。",
      "desc_en": "Basic Mythic unit. Outdated design with low burst, but provides transition value for F2P players.",
      "img": "images/mythic/furious_artilleryman_icon.png"
    },
    {
      "rarity": "mythic", "group": "常駐召喚", "group_cn": "常驻召唤", "group_en": "Standard Summon",
      "name_zh": "地脈術士", "name_cn": "地脉术士", "name_en": "Geomancer",
      "pos_zh": "中排、範圍傷害", "pos_cn": "中排、范围伤害", "pos_en": "Midline AOE",
      "desc_zh": "玻璃大砲，開場需長達16秒充能，在PVP節奏中運氣成分高，設計相對落後，爆發不足且缺乏明確戰術價值。但日常即可取得，對無課玩家來說仍具備基本過渡價值。",
      "desc_cn": "玻璃大炮，开场需长达16秒充能，在PVP节奏中运气成分高，设计相对落后，爆发不足且缺乏明确战术价值。但日常即可取得，对无课玩家来说仍具备基本过渡价值。",
      "desc_en": "Glass cannon with a long 16s charge. RNG-heavy in PVP. Serves as a fundamental transition unit for F2P.",
      "img": "images/mythic/earth_mage_icon.png"
    },
    {
      "rarity": "mythic", "group": "常駐召喚", "group_cn": "常驻召唤", "group_en": "Standard Summon",
      "name_zh": "獅鷲騎士", "name_cn": "狮鹫骑士", "name_en": "Gryphon Knight",
      "pos_zh": "前排、範圍傷害、控制", "pos_cn": "前排、范围伤害、控制", "pos_en": "Frontline AOE/CC",
      "desc_zh": "定位副坦兼控制，技能採攻擊充能。因站位前排難以獲得攻速增益，導致釋放頻率偏低。建議放置於側翼提升戰場續航力，日常即可取得，對無課玩家來說仍具備基本過渡價值。",
      "desc_cn": "定位副坦兼控制，技能采攻击充能。因站位前排难以获得攻速增益，导致释放频率偏低。建议放置于侧翼提升战场续航力，日常即可取得，对无课玩家来说仍具备基本过渡价值。",
      "desc_en": "Sub-tank/CC unit. Hard to receive speed buffs due to positioning. Best used on flanks as a filler unit.",
      "img": "images/mythic/griffon_knight_icon.png"
    },
    {
      "rarity": "mythic", "group": "常駐召喚", "group_cn": "常驻召唤", "group_en": "Standard Summon",
      "name_zh": "風暴聖女", "name_cn": "风暴圣女", "name_en": "Storm Maiden",
      "pos_zh": "中排、範圍傷害、控制", "pos_cn": "中排、范围伤害、控制", "pos_en": "Midline AOE/CC",
      "desc_zh": "基礎神話單位，設計相對落後，爆發不足且缺乏明確戰術價值。但日常即可取得，對無課玩家來說仍具備基本過渡價值。",
      "desc_cn": "基础神话单位，设计相对落后，爆发不足且缺乏明确战术价值。但日常即可取得，对无课玩家来说仍具备基本过渡价值。",
      "desc_en": "Basic AOE Mythic. Low burst damage; serves as a transition character for early game F2P rosters.",
      "img": "images/mythic/storm_maiden_icon.png"
    },
    {
      "rarity": "mythic", "group": "常駐召喚", "group_cn": "常驻召唤", "group_en": "Standard Summon",
      "name_zh": "星輝使徒", "name_cn": "星辉使徒", "name_en": "Starlight Apostle",
      "pos_zh": "中排、控制、增益", "pos_cn": "中排、控制、增益", "pos_en": "Midline Buff/CC",
      "desc_zh": "基礎神話單位，當角色達到 6 等時，其技能效果可彼此疊加。建議搭配水靈巫師作為輔助，可大幅提升戰場支援的覆蓋率與穩定性。",
      "desc_cn": "基础神话单位，当角色达到 6 等时，其技能效果可彼此叠加。建议搭配水灵巫师作为辅助，可大幅提升战场支援的覆盖率与稳定性。",
      "desc_en": "Core support. Skill effects stack at Lv.6. High synergy with Ripple Wizard for maximum buff coverage.",
      "img": "images/mythic/star_apostle_icon.png"
    },

    /* 🌟 神話 - 限定/特殊 */
    {
      "rarity": "mythic", "group": "限定召喚", "group_cn": "限定召唤", "group_en": "Limited Summon",
      "name_zh": "九尾妖狐", "name_cn": "九尾妖狐", "name_en": "Nine-Tailed Fox",
      "pos_zh": "後排、單體傷害、增益", "pos_cn": "后排、单体伤害、增益", "pos_en": "Backline Single DPS",
      "desc_zh": "曾是輸出型神話中單體傷害的天花板，憑藉時間充能機制確保技能循環穩定。隨著亡骨槍手登場，地位下滑。",
      "desc_cn": "曾是输出型神话中单体伤害的天花板，凭借时间充能机制确保技能循环稳定。随着亡骨枪手登场，地位下滑。",
      "desc_en": "Former top single-target DPS. Reliable skill cycles. Status has declined with newer releases.",
      "img": "images/mythic/nine_tailed_fox_icon.png"
    },
    {
      "rarity": "mythic", "group": "限定召喚", "group_cn": "限定召唤", "group_en": "Limited Summon",
      "name_zh": "毒菇刺客", "name_cn": "毒菇刺客", "name_en": "Venospore Killer",
      "pos_zh": "中排、單體傷害", "pos_cn": "中排、单体伤害", "pos_en": "Midline Single DPS",
      "desc_zh": "閃現至敵方法師旁造成高額傷害並附加沉默；在協作模式中地位無可取代，是核心輸出之一。",
      "desc_cn": "闪现至敌方法师旁造成高额伤害并附加沉默；在协作模式中地位无可取代，是核心输出之一。",
      "desc_en": "Blinks to enemy mages dealing high damage and silence. Core DPS in Co-op mode.",
      "img": "images/mythic/poison_assassin_icon.png"
    },
    {
      "rarity": "mythic", "group": "限定召喚", "group_cn": "限定召唤", "group_en": "Limited Summon",
      "name_zh": "叢林遊俠", "name_cn": "丛林游侠", "name_en": "Jungle Ranger",
      "pos_zh": "後排、範圍傷害", "pos_cn": "后排、范围伤害", "pos_en": "Backline AOE",
      "desc_zh": "曾是最泛用的神話之一，但隨著迷霧與亡骨槍手出現，定位逐漸被取代，價值明顯下滑。",
      "desc_cn": "曾是最泛用的神话之一，但随着迷雾与亡骨枪手出现，定位逐渐被取代，价值明显下滑。",
      "desc_en": "Formerly very versatile, now being phased out by newer marksmen.",
      "img": "images/mythic/jungle_ranger_icon.png"
    },
    {
      "rarity": "mythic", "group": "限定召喚", "group_cn": "限定召唤", "group_en": "Limited Summon",
      "name_zh": "旋律編織者", "name_cn": "旋律编织者", "name_en": "Melody Weaver",
      "pos_zh": "中排、增益", "pos_cn": "中排、增益", "pos_en": "Midline Buff",
      "desc_zh": "提供大範圍攻速增益，6級後的常駐被動使其成為老玩家不可或缺的戰術選擇。",
      "desc_cn": "提供大范围攻速增益，6级后的常驻被动使其成为老玩家不可或缺的战术选择。",
      "desc_en": "Provides massive ATK Speed buffs. Indispensable core support at Level 6.",
      "img": "images/mythic/melody_weaver_icon.png"
    },
    {
      "rarity": "mythic", "group": "限定召喚", "group_cn": "限定召唤", "group_en": "Limited Summon",
      "name_zh": "水靈巫師", "name_cn": "水灵巫师", "name_en": "Ripple Wizard",
      "pos_zh": "中排、增益、控制", "pos_cn": "中排、增益、控制", "pos_en": "Midline Buff/CC",
      "desc_zh": "大範圍充能支援。無論搭配冰雪、星輝或戰爭女神，皆為不可或缺的核心支援。",
      "desc_en": "Wide-area energy support. Essential partner for energy-heavy tactical comps.",
      "img": "images/mythic/aqua_wizard_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_cn": "转盘/特殊获取", "group_en": "Wheel / Special",
      "name_zh": "蠻族暴君", "name_cn": "蛮族暴君", "name_en": "Barbarian Tyrant",
      "pos_zh": "前排、範圍傷害", "pos_cn": "前排、范围伤害", "pos_en": "Frontline AOE/Tank",
      "desc_zh": "跳入敵方後排吸引火力並提供防禦增益。搭配血刃時具備極強壓制力。",
      "desc_cn": "跳入敌方后排吸引火力并提供防御增益。搭配血刃时具备极强压制力。",
      "desc_en": "Jumps to backline, taunting and absorbing damage. Strong synergy with Red Blade.",
      "img": "images/mythic/barbarian_tyrant_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_cn": "转盘/特殊获取", "group_en": "Wheel / Special",
      "name_zh": "霧影射手", "name_cn": "雾影射手", "name_en": "Mist Archer",
      "pos_zh": "後排、範圍傷害", "pos_cn": "后排、范围伤害", "pos_en": "Backline AOE",
      "desc_zh": "高射速輸出，極度依賴機率。需配置複數 6 等迷霧，與亡骨槍手搭配觸發效果。",
      "desc_cn": "高射速输出，极度依赖机率。需配置复数 6 等迷雾，与亡骨枪手搭配触发效果。",
      "desc_en": "High-speed RNG DPS. Needs multiple copies to pair with Bone Marksman.",
      "img": "images/mythic/misty_archer_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_cn": "转盘/特殊获取", "group_en": "Wheel / Special",
      "name_zh": "冰雪女王", "name_cn": "冰雪女王", "name_en": "Frost Queen",
      "pos_zh": "中排、範圍傷害、控制", "pos_cn": "中排、范围伤害、控制", "pos_en": "Midline AOE/CC",
      "desc_zh": "曾為版本答案。隨光輝戰士普及，單一冰雪傷害已顯不足，需靠等級或數量壓制。",
      "desc_cn": "曾为版本答案。随光辉战士普及，单一冰雪伤害已显不足，需靠等级或数量压制。",
      "desc_en": "Former meta defining unit. Now requires high levels to break through Radiant Warrior shields.",
      "img": "images/mythic/ice_queen_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_cn": "转盘/特殊获取", "group_en": "Wheel / Special",
      "name_zh": "戰爭女神", "name_cn": "战争女神", "name_en": "Goddess of War",
      "pos_zh": "前排、增益", "pos_cn": "前排、增益", "pos_en": "Frontline Buff",
      "desc_zh": "PVE 版本答案，大幅提升生存能力。PVP 可與血刃、光輝組成強力菜刀隊。",
      "desc_cn": "PVE 版本答案，大幅提升生存能力。PVP 可与血刃、光辉组成強力菜刀队。",
      "desc_en": "Definitive PVE meta unit. Boosts team survival massively.",
      "img": "images/mythic/war_goddess_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_cn": "转盘/特殊获取", "group_en": "Wheel / Special",
      "name_zh": "重砲先鋒", "name_cn": "重炮先锋", "name_en": "Firepower Vanguard",
      "pos_zh": "後排、傷害", "pos_cn": "后排、伤害", "pos_en": "Backline Damage",
      "desc_zh": "定位不明、實用性有限，目前不建議投入資源培養。",
      "desc_cn": "定位不明、实用性有限，目前不建议投入资源培养。",
      "desc_en": "Vague positioning. Not recommended for resource investment.",
      "img": "images/mythic/heavy_artillery_vanguard_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_cn": "转盘/特殊获取", "group_en": "Wheel / Special",
      "name_zh": "暗月女皇", "name_cn": "暗月女皇", "name_en": "Darkmoon Queen",
      "pos_zh": "後排、控制", "pos_cn": "后排、控制", "pos_en": "Backline CC",
      "desc_zh": "有效限制敵方後排，具備強大逆轉能力，戰場穩定性隨改版有所改善。",
      "desc_cn": "有效限制敌方后排，具备强大逆转能力，战场稳定性随改版有所改善。",
      "desc_en": "Suppresses enemy backline. Offers great comeback potential.",
      "img": "images/mythic/dark_moon_empress_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_cn": "转盘/特殊获取", "group_en": "Wheel / Special",
      "name_zh": "烈焰主宰", "name_cn": "烈焰主宰", "name_en": "Blazeking",
      "pos_zh": "中排、範圍傷害、增益", "pos_cn": "中排、范围伤害、增益", "pos_en": "Midline AOE/Buff",
      "desc_zh": "PVE 價值極高，但在 PVP 中效益受限，發揮較為不穩。",
      "desc_cn": "PVE 价值极高，但在 PVP 中效益受限，发挥较为不稳。",
      "desc_en": "Top tier PVE value. Less reliable in high-level PVP.",
      "img": "images/mythic/flame_sovereign_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_cn": "转盘/特殊获取", "group_en": "Wheel / Special",
      "name_zh": "潮汐領主", "name_cn": "潮汐领主", "name_en": "Tide Lord",
      "pos_zh": "中排、控制、增益", "pos_cn": "中排、控制、增益", "pos_en": "Midline CC/Buff",
      "desc_zh": "必定命中後排的特性使其在 PVP 極具價值。PVE 實用性略遜烈焰主宰。",
      "desc_cn": "必定命中后排的特性使其在 PVP 极具价值。PVE 实用性略逊烈焰主宰。",
      "desc_en": "High value in PVP due to backline-locking damage.",
      "img": "images/mythic/tidal_lord_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_cn": "转盘/特殊获取", "group_en": "Wheel / Special",
      "name_zh": "光輝戰士", "name_cn": "光辉战士", "name_en": "Radiant Warrior",
      "pos_zh": "前排、坦克", "pos_cn": "前排、坦克", "pos_en": "Frontline Tank",
      "desc_zh": "反制開局爆發型角色，為隊伍配置中極為關鍵的防禦單位。",
      "desc_cn": "反制开局爆发型角色，为队伍配置中极为关键的防御单位。",
      "desc_en": "Essential counter to start-of-battle burst units.",
      "img": "images/mythic/Radiant_Warrior_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_cn": "转盘/特殊获取", "group_en": "Wheel / Special",
      "name_zh": "木靈守衛", "name_cn": "木灵守卫", "name_en": "Woodland Guardian",
      "pos_zh": "前排、治療", "pos_cn": "前排、治疗", "pos_en": "Frontline Healer",
      "desc_zh": "唯一具備治療能力的坦克角色，在 PVE 中表現極為出色。",
      "desc_cn": "唯一具备治疗能力的坦克角色，在 PVE 中表现极为出色。",
      "desc_en": "The only tank unit with healing capabilities. Excels in PVE.",
      "img": "images/mythic/Wood_Spirit_Guard_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_cn": "转盘/特殊获取", "group_en": "Wheel / Special",
      "name_zh": "血刃", "name_cn": "血刃", "name_en": "Red Blade",
      "pos_zh": "後排、範圍傷害", "pos_cn": "后排、范围伤害", "pos_en": "Backline AOE",
      "desc_zh": "閃現型爆發。需複數配置且達高等級才具備足夠威懾力，培養成本較高。",
      "desc_cn": "闪现型爆发。需复数配置且达高等级才具备足够威慑力，培养成本较高。",
      "desc_en": "Blink burst unit. High investment required for multiple copies.",
      "img": "images/mythic/Red Blade_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_cn": "转盘/特殊获取", "group_en": "Wheel / Special",
      "name_zh": "亡骨槍手", "name_cn": "亡骨枪手", "name_en": "Bone Marksman",
      "pos_zh": "後排、範圍傷害", "pos_cn": "后排、范围伤害", "pos_en": "Backline AOE",
      "desc_zh": "作為 v0.8.8 版本答案。4 等即可解鎖二技能，中低課玩家的輸出首選。",
      "desc_cn": "作为 v0.8.8 版本答案。4 等即可解锁二技能，中低课玩家的输出首选。",
      "desc_en": "The meta answer for v0.8.8. Unlocks second skill at Lv.4.",
      "img": "images/mythic/Bone marksman_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_cn": "转盘/特殊获取", "group_en": "Wheel / Special",
      "name_zh": "熾天使", "name_cn": "炽天使", "name_en": "Seraph",
      "pos_zh": "前排、範圍傷害", "pos_cn": "前排、范围伤害", "pos_en": "Frontline AOE",
      "desc_zh": "競技場前20名專屬。", "desc_en": "Arena Top 20 Exclusive.",
      "img": "images/mythic/Seraph_icon.png"
    },
    {
      "rarity": "mythic", "group": "轉盤/特殊獲取", "group_cn": "转盘/特殊获取", "group_en": "Wheel / Special",
      "name_zh": "暗夜伯爵", "name_cn": "暗夜伯爵", "name_en": "Night Scion",
      "pos_zh": "前排、範圍傷害", "pos_cn": "前排、范围伤害", "pos_en": "Frontline AOE",
      "desc_zh": "公會戰排名專屬。", "desc_en": "Clan War Exclusive.",
      "img": "images/mythic/Night scion_icon.png"
    },

    /* 🔥 傳奇 */
    {
      "rarity": "legendary", "group": "傳奇單位", "group_cn": "传奇单位", "group_en": "Legendary Units",
      "name_zh": "櫻花浪人", "name_cn": "樱花浪人", "name_en": "Sakura Ronin",
      "pos_zh": "前排、承受傷害", "pos_cn": "前排、承受伤害", "pos_en": "Frontline Tank",
      "desc_zh": "傳奇中最堅實的前排之一，是極佳的過渡選擇。",
      "desc_cn": "传奇中最坚实的前排之一，是极佳的过渡选择。",
      "desc_en": "The sturdiest Legendary frontliner. Great filler unit.",
      "img": "images/legendary/cherry_ronin_icon.png"
    },
    {
      "rarity": "legendary", "group": "傳奇單位", "group_cn": "传奇单位", "group_en": "Legendary Units",
      "name_zh": "幽靈刺客", "name_cn": "幽灵刺客", "name_en": "Ghost Assassin",
      "pos_zh": "前排、範圍傷害", "pos_cn": "前排、范围伤害", "pos_en": "Frontline AOE",
      "desc_zh": "高風險單位。開場閃現後排。需嚴控數量防止送頭。",
      "desc_cn": "高风险单位。开场闪现后排。需严控数量防止送头。",
      "desc_en": "High-risk disruption unit. Blinks to enemy backline.",
      "img": "images/legendary/ghost_assassin_icon.png"
    },
    {
      "rarity": "legendary", "group": "傳奇單位", "group_cn": "传奇单位", "group_en": "Legendary Units",
      "name_zh": "熊靈勇士", "name_cn": "熊灵勇士", "name_en": "Ursa Champion",
      "pos_zh": "中排、控制", "pos_cn": "中排、控制", "pos_en": "Midline CC",
      "desc_zh": "具備強力爆發群傷，傳奇中首選升級至 7 等的角色。",
      "desc_cn": "具备強力爆发群伤，传奇中首选升级至 7 等的角色。",
      "desc_en": "Best Legendary to upgrade to Level 7. Huge AOE burst.",
      "img": "images/legendary/bear_warrior_icon.png"
    },
    {
      "rarity": "legendary", "group": "傳奇單位", "group_cn": "传奇单位", "group_en": "Legendary Units",
      "name_zh": "精靈箭手", "name_en": "Elven Archer",
      "pos_zh": "後排、單體傷害", "desc_zh": "遊戲早期具備極高價值，後期已有更優選擇。",
      "desc_en": "High value in early game, outclassed in late game.",
      "img": "images/legendary/Elven Archer_icon.png"
    },
    {
      "rarity": "legendary", "group": "傳奇單位", "group_cn": "传奇单位", "group_en": "Legendary Units",
      "name_zh": "灰燼法師", "name_cn": "灰烬法师", "name_en": "Ashen Arcenist",
      "pos_zh": "中排、範圍傷害", "desc_zh": "純粹的範圍輸出單位。", "desc_en": "Pure AOE output unit.",
      "img": "images/legendary/ash_mage_icon.png"
    },
    {
      "rarity": "legendary", "group": "傳奇單位", "group_cn": "传奇单位", "group_en": "Legendary Units",
      "name_zh": "風語者", "name_cn": "风语者", "name_en": "Wind Apostle",
      "pos_zh": "中排、控制", "desc_zh": "技能具備聚怪效果，能最大化範圍輸出。", "desc_en": "Clusters enemies for maximum AOE efficiency.",
      "img": "images/legendary/wind_speaker_icon.png"
    },
    {
      "rarity": "legendary", "group": "傳奇單位", "group_cn": "传奇单位", "group_en": "Legendary Units",
      "name_zh": "爆破矮人", "name_cn": "爆破矮人", "name_en": "Blast Dwarf",
      "pos_zh": "後排、單體傷害", "desc_zh": "弱化版狂怒炮手，表現平庸。", "desc_en": "Weak Fury Cannoneer. Mediocre performance.",
      "img": "images/legendary/explosion_dwarf_icon.png"
    },
    {
      "rarity": "legendary", "group": "傳奇單位", "group_cn": "传奇单位", "group_en": "Legendary Units",
      "name_zh": "御風統領", "name_cn": "御风統領", "name_en": "Windlord",
      "pos_zh": "後排、單體傷害", "desc_zh": "單體風屬性過渡輸出。", "desc_en": "Single target Wind transition unit.",
      "img": "images/legendary/Windlord_icon.png"
    },
    {
      "rarity": "legendary", "group": "傳奇單位", "group_cn": "传奇单位", "group_en": "Legendary Units",
      "name_zh": "鐵壁者", "name_cn": "铁壁者", "name_en": "Iron Bulwark",
      "pos_zh": "前排、承傷", "desc_zh": "死亡後削減敵方攻速，實用性隨改版略增。", "desc_en": "Debuffs enemies upon death.",
      "img": "images/legendary/Iron_Bulwark_icon.png"
    },

    /* 🟣 史詩 */
    {
      "rarity": "epic", "group": "史詩單位", "group_cn": "史诗单位", "group_en": "Epic Units",
      "name_zh": "岩石投擲者", "name_cn": "岩石投掷者", "name_en": "Rock Thrower",
      "pos_zh": "前排、坦克", "desc_zh": "極其優秀的過渡型坦克。", "desc_en": "Excellent early-to-mid game transition tank.",
      "img": "images/epic/rock_thrower_icon.png"
    },
    {
      "rarity": "epic", "group": "史詩單位", "group_cn": "史诗单位", "group_en": "Epic Units",
      "name_zh": "火焰法師", "name_cn": "火焰法师", "name_en": "Flame Mage",
      "pos_zh": "中排、單體傷害", "desc_zh": "專精單體強力輸出。皮薄易陣亡。", "desc_en": "High single target DPS. Very fragile.",
      "img": "images/epic/flame_mage_icon.png"
    },
    {
      "rarity": "epic", "group": "史詩單位", "group_cn": "史诗单位", "group_en": "Epic Units",
      "name_zh": "雪人戰士", "name_cn": "雪人战士", "name_en": "Snowman Warrior",
      "pos_zh": "中排、控制", "desc_zh": "定位模糊，整體表現不夠突出。", "desc_en": "Vague role and uninspiring performance.",
      "img": "images/epic/snowman_warrior_icon.png"
    },
    {
      "rarity": "epic", "group": "史詩單位", "group_cn": "史诗单位", "group_en": "Epic Units",
      "name_zh": "毒藥大師", "name_cn": "毒药大师", "name_en": "Poison Master",
      "pos_zh": "中排、範圍傷害", "desc_zh": "無限戰爭模式必備戰力，建議升至 6 等。", "desc_en": "Essential for Infinite mode. Reach Lv.6.",
      "img": "images/epic/poison_master_icon.png"
    },
    {
      "rarity": "epic", "group": "史詩單位", "group_cn": "史诗单位", "group_en": "Epic Units",
      "name_zh": "神諭者", "name_cn": "神谕者", "name_en": "Oracle",
      "pos_zh": "中排、增益", "desc_zh": "無論 PVP 或 PVE 皆為必備單位。", "desc_en": "Universal must-have support.",
      "img": "images/epic/oracle_icon.png"
    },
    {
      "rarity": "epic", "group": "史詩單位", "group_cn": "史诗单位", "group_en": "Epic Units",
      "name_zh": "皇家弓箭手", "name_cn": "皇家弓箭手", "name_en": "Royal Archer",
      "pos_zh": "後排、單體傷害", "desc_zh": "轉盤限定。生存率高，PVE 實戰價值極佳。", "desc_en": "Limited unit with great PVE value.",
      "img": "images/epic/royal_archer_icon.png"
    },
    {
      "rarity": "epic", "group": "史詩單位", "group_cn": "史诗单位", "group_en": "Epic Units",
      "name_zh": "木頭巫師", "name_cn": "木头巫师", "name_en": "Wooden Wizard",
      "pos_zh": "中排、治療", "desc_zh": "治癒型單位首選，後期 PVP 必備。", "desc_en": "Premier healer for high-end PVP.",
      "img": "images/epic/wood_wizard_icon.png"
    },
    {
      "rarity": "epic", "group": "史詩單位", "group_cn": "史诗单位", "group_en": "Epic Units",
      "name_zh": "南瓜守衛", "name_cn": "南瓜守卫", "name_en": "Pumpkin Guard",
      "pos_zh": "前排、承傷", "desc_zh": "櫻花浪人優秀替代，升級快速。", "desc_en": "Excellent alternative to Sakura Ronin.",
      "img": "images/epic/pumpkin_guard_icon.png"
    },
    {
      "rarity": "epic", "group": "史詩單位", "group_cn": "史诗单位", "group_en": "Epic Units",
      "name_zh": "矮人狂戰士", "name_cn": "矮人狂战士", "name_en": "Dwarf Berserker",
      "pos_zh": "尚未實裝", "desc_zh": "轉盤活動限定。", "desc_en": "Wheel event exclusive.",
      "img": "images/epic/dwarf_berserker_icon.png"
    },

    /* 💧 稀有 */
    {
      "rarity": "rare", "group": "稀有單位", "group_cn": "稀有单位", "group_en": "Rare Units",
      "name_zh": "重錘衛士", "name_cn": "重锤卫士", "name_en": "Flail Warden",
      "pos_zh": "前排、承傷", "desc_zh": "低消耗過渡單位。", "desc_en": "Low-cost filler unit.",
      "img": "images/rare/heavy_sledgehammer_guard_icon.png"
    },
    {
      "rarity": "rare", "group": "稀有單位", "group_cn": "稀有单位", "group_en": "Rare Units",
      "name_zh": "哥布林戰士", "name_cn": "哥布林战士", "name_en": "Goblin Warrior",
      "pos_zh": "前排、單體", "desc_zh": "早期過渡單位。", "desc_en": "Early transition unit.",
      "img": "images/rare/goblin_warrior_icon.png"
    },
    {
      "rarity": "rare", "group": "稀有單位", "group_cn": "稀有单位", "group_en": "Rare Units",
      "name_zh": "林地斥候", "name_cn": "林地斥候", "name_en": "Forest Scout",
      "pos_zh": "後排、單體", "desc_zh": "高等等級可取代低等火焰法師。", "desc_en": "High level scouts can replace early mages.",
      "img": "images/rare/forest_scout_icon.png"
    },
    {
      "rarity": "rare", "group": "稀有單位", "group_cn": "稀有单位", "group_en": "Rare Units",
      "name_zh": "見習法師", "name_cn": "见习法师", "name_en": "Apprentice Mage",
      "pos_zh": "後排輸出", "desc_zh": "低費暫時替代。", "desc_en": "Standard early game filler.",
      "img": "images/rare/apprentice_mage_icon.png"
    },
    {
      "rarity": "rare", "group": "稀有單位", "group_cn": "稀有单位", "group_en": "Rare Units",
      "name_zh": "狂戰士", "name_cn": "狂战士", "name_en": "Berserker",
      "pos_zh": "前排輸出", "desc_zh": "過渡戰力。", "desc_en": "Transition power.",
      "img": "images/rare/berserker_icon.png"
    },
    {
      "rarity": "rare", "group": "稀有單位", "group_cn": "稀有单位", "group_en": "Rare Units",
      "name_zh": "炸彈兵", "name_cn": "炸弹兵", "name_en": "Bomber",
      "pos_zh": "控制", "desc_zh": "炸彈隊核心，隨光輝普及價值下降。", "desc_en": "Bomber comp core.",
      "img": "images/rare/bomber_icon.png"
    },
    {
      "rarity": "rare", "group": "稀有單位", "group_cn": "稀有单位", "group_en": "Rare Units",
      "name_zh": "哥布林薩滿", "name_cn": "哥布林萨满", "name_en": "Goblin Shaman",
      "pos_zh": "治療", "desc_zh": "生存力低，出場機會少。", "desc_en": "Rarely used due to low survival.",
      "img": "images/rare/goblin_shaman_icon.png"
    },
    {
      "rarity": "rare", "group": "稀有單位", "group_cn": "稀有单位", "group_en": "Rare Units",
      "name_zh": "哥布林大廚", "name_cn": "哥布林大厨", "name_en": "Goblin Chef",
      "pos_zh": "坦克", "desc_zh": "4費中生命值最高。", "desc_en": "Highest HP in 4-cost units.",
      "img": "images/rare/goblin_chef_icon.png"
    },
    {
      "rarity": "rare", "group": "稀有單位", "group_cn": "稀有单位", "group_en": "Rare Units",
      "name_zh": "疾風狼", "name_cn": "疾风狼", "name_en": "Gale Wolf",
      "pos_zh": "輸出", "desc_zh": "實戰表現不佳。", "desc_en": "Low practical utility.",
      "img": "images/rare/gale_wolf_icon.png"
    },
    {
      "rarity": "rare", "group": "稀有單位", "group_cn": "稀有单位", "group_en": "Rare Units",
      "name_zh": "神盾士兵", "name_cn": "神盾士兵", "name_en": "Paladin",
      "pos_zh": "承傷", "desc_zh": "性價比極高，優秀防禦。", "desc_en": "High efficiency 3-cost tank.",
      "img": "images/rare/aegis_soldier_icon.png"
    },
    {
      "rarity": "rare", "group": "稀有單位", "group_cn": "稀有单位", "group_en": "Rare Units",
      "name_zh": "冰霜骷髏", "name_cn": "冰霜骷髅", "name_en": "Frost Skeleton",
      "pos_zh": "控制", "desc_zh": "死亡後廣域減速，亡骨好拍檔。", "desc_en": "AOE slow on death.",
      "img": "images/rare/Frost Skeleton_icon.png"
    },
    {
      "rarity": "rare", "group": "稀有單位", "group_cn": "稀有单位", "group_en": "Rare Units",
      "name_zh": "加農戰車", "name_cn": "加农战车", "name_en": "Canon Chariot",
      "pos_zh": "尚未實裝", "img": "images/rare/canon_chariot_icon.png"
    },

    /* 🟢 普通 */
    { "rarity": "common", "group": "普通", "group_en": "Common", "name_zh": "火槍手", "name_en": "Gunner", "pos_zh": "後排", "desc_zh": "新手過渡。", "desc_en": "Starter unit.", "img": "images/common/flintlock_shooter_icon.png" },
    { "rarity": "common", "group": "普通", "group_en": "Common", "name_zh": "弓箭手", "name_en": "Archer", "pos_zh": "後排", "desc_zh": "新手過渡。", "desc_en": "Starter unit.", "img": "images/common/archer_icon.png" },
    { "rarity": "common", "group": "普通", "group_en": "Common", "name_zh": "雪球投擲手", "name_en": "Snowball Thrower", "pos_zh": "控制", "desc_zh": "新手過渡。", "desc_en": "Starter unit.", "img": "images/common/snowball_thrower_icon.png" },
    { "rarity": "common", "group": "普通", "group_en": "Common", "name_zh": "劍士", "name_en": "Swordsman", "pos_zh": "前排", "desc_zh": "新手過渡。", "desc_en": "Starter unit.", "img": "images/common/swordsman_icon.png" },
    { "rarity": "common", "group": "普通", "group_en": "Common", "name_zh": "炸彈客", "name_en": "Demoman", "pos_zh": "前排", "desc_zh": "新手過渡。", "desc_en": "Starter unit.", "img": "images/common/bomber_icon.png" },
    { "rarity": "common", "group": "普通", "group_en": "Common", "name_zh": "木盾衛士", "name_en": "Woodshield Guard", "pos_zh": "承傷", "desc_zh": "新手過渡。", "desc_en": "Starter unit.", "img": "images/common/wooden_shield_guard_icon.png" }
  ]
};