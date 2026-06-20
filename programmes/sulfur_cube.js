var fs = require("fs");

function translation(tag, id, fallback, is_title)
{
    var data = {}, _description;
    if(!is_title)
    {
        _description = "description";
    }
    else
    {
        _description = "title";
    }
    data.translate = "advancement.madv_plus." + tag + "." + id + "." + _description;
    data.fallback = fallback;
    return data;
}
function fill_sulfur_cube(block_type = "air", parent = "minecraft:adventure/uh_oh", tag = "adventure", title = "", block_name_fallback = "空气", namespace = "minecraft")
{
    namespaced_block_type = "minecraft:" + block_type;
    advancement_data = new Object();
    advancement_data.parent = parent;
    advancement_data.criteria = new Object();
    advancement_data.criteria.thrown = new Object();
    advancement_data.criteria.interact = new Object();
    /* 此触发器位于书本第 20 页 */
    advancement_data.criteria.thrown.trigger = "minecraft:thrown_item_picked_up_by_entity";
    advancement_data.criteria.thrown.conditions = new Object();
    advancement_data.criteria.thrown.conditions.item = new Object();
    advancement_data.criteria.thrown.conditions.item.items = namespaced_block_type;
    /* 见书本第 62 页 */
    advancement_data.criteria.thrown.conditions.entity = new Array();
    advancement_data.criteria.thrown.conditions.entity[0] = new Object();
    advancement_data.criteria.thrown.conditions.entity[0].entity = "this";
    advancement_data.criteria.thrown.conditions.entity[0].condition = "minecraft:entity_properties";
    advancement_data.criteria.thrown.conditions.entity[0].predicate = new Object();
    advancement_data.criteria.thrown.conditions.entity[0].predicate.entity_type = "minecraft:sulfur_cube";
    advancement_data.criteria.thrown.conditions.entity[0].predicate.flags = new Object();
    advancement_data.criteria.thrown.conditions.entity[0].predicate.flags.is_baby = false;
    /* 此触发器位于书本第 21 页 */
    advancement_data.criteria.interact.trigger = "minecraft:player_interacted_with_entity";
    advancement_data.criteria.interact.conditions = new Object();
    advancement_data.criteria.interact.conditions.item = new Object();
    advancement_data.criteria.interact.conditions.item.items = namespaced_block_type;
    /* 见书本第 62 页 */
    advancement_data.criteria.interact.conditions.entity = new Array();
    advancement_data.criteria.interact.conditions.entity[0] = new Object();
    advancement_data.criteria.interact.conditions.entity[0].entity = "this";
    advancement_data.criteria.interact.conditions.entity[0].condition = "minecraft:entity_properties";
    advancement_data.criteria.interact.conditions.entity[0].predicate = new Object();
    advancement_data.criteria.interact.conditions.entity[0].predicate.entity_type = "minecraft:sulfur_cube";
    advancement_data.criteria.interact.conditions.entity[0].predicate.flags = new Object();
    advancement_data.criteria.interact.conditions.entity[0].predicate.flags.is_baby = false;
    /* 2.2 进度的显示 */
    advancement_data.display = new Object();
    description_fallback = "向硫方怪填充" + block_name_fallback;
    advancement_data.display.title = translation(tag, "sulfur_filled_with_" + block_type, title, true);
    advancement_data.display.description = translation(tag, "sulfur_filled_with_" + block_type, description_fallback, false);
    advancement_data.display.icon = new Object();
    advancement_data.display.icon.id = namespaced_block_type;
    /* 2.1 进度的准则 */
    advancement_data.requirements = new Array();
    advancement_data.requirements[0] = new Array();
    advancement_data.requirements[0][0] = "interact";
    advancement_data.requirements[0][1] = "thrown";
    return advancement_data;
}
function fill_sulfur_cube_tag(block_type = "air", parent = "minecraft:adventure/uh_oh", tag = "adventure", title = "", block_name_fallback = "空气", special_block = "air", namespace = "minecraft")
{
    namespaced_block_type = namespace + ":" + block_type;
    namespaced_block_type_tag = "#" + namespaced_block_type;
    advancement_data = new Object();
    advancement_data.parent = parent;
    advancement_data.criteria = new Object();
    advancement_data.criteria.thrown = new Object();
    advancement_data.criteria.interact = new Object();
    /* 此触发器位于书本第 20 页 */
    advancement_data.criteria.thrown.trigger = "minecraft:thrown_item_picked_up_by_entity";
    advancement_data.criteria.thrown.conditions = new Object();
    advancement_data.criteria.thrown.conditions.item = new Object();
    advancement_data.criteria.thrown.conditions.item.items = namespaced_block_type_tag;
    /* 见书本第 62 页 */
    advancement_data.criteria.thrown.conditions.entity = new Array();
    advancement_data.criteria.thrown.conditions.entity[0] = new Object();
    advancement_data.criteria.thrown.conditions.entity[0].entity = "this";
    advancement_data.criteria.thrown.conditions.entity[0].condition = "minecraft:entity_properties";
    advancement_data.criteria.thrown.conditions.entity[0].predicate = new Object();
    advancement_data.criteria.thrown.conditions.entity[0].predicate.entity_type = "minecraft:sulfur_cube";
    advancement_data.criteria.thrown.conditions.entity[0].predicate.flags = new Object();
    advancement_data.criteria.thrown.conditions.entity[0].predicate.flags.is_baby = false;
    /* 此触发器位于书本第 21 页 */
    advancement_data.criteria.interact.trigger = "minecraft:player_interacted_with_entity";
    advancement_data.criteria.interact.conditions = new Object();
    advancement_data.criteria.interact.conditions.item = new Object();
    advancement_data.criteria.interact.conditions.item.items = namespaced_block_type_tag;
    /* 见书本第 62 页 */
    advancement_data.criteria.interact.conditions.entity = new Array();
    advancement_data.criteria.interact.conditions.entity[0] = new Object();
    advancement_data.criteria.interact.conditions.entity[0].entity = "this";
    advancement_data.criteria.interact.conditions.entity[0].condition = "minecraft:entity_properties";
    advancement_data.criteria.interact.conditions.entity[0].predicate = new Object();
    advancement_data.criteria.interact.conditions.entity[0].predicate.entity_type = "minecraft:sulfur_cube";
    advancement_data.criteria.interact.conditions.entity[0].predicate.flags = new Object();
    advancement_data.criteria.interact.conditions.entity[0].predicate.flags.is_baby = false;
    /* 2.2 进度的显示 */
    advancement_data.display = new Object();
    description_fallback = "向硫方怪填充" + block_name_fallback;
    advancement_data.display.title = translation(tag, "sulfur_filled_with_" + block_type, title, true);
    advancement_data.display.description = translation(tag, "sulfur_filled_with_" + block_type, description_fallback, false);
    advancement_data.display.icon = new Object();
    advancement_data.display.icon.id = "minecraft:" + special_block;
    /* 2.1 进度的准则 */
    advancement_data.requirements = new Array();
    advancement_data.requirements[0] = new Array();
    advancement_data.requirements[0][0] = "interact";
    advancement_data.requirements[0][1] = "thrown";
    return advancement_data;
}
name_mapping = {
    balls: {
        fallback_name: "羊毛类方块",
        id: "wool",
        special_block: "white_wool",
        title: "气球",
        type: "tag"
    },
    cobblestone: {
        fallback_name: "圆石类方块",
        id: "stone_tool_materials",
        special_block: "cobblestone",
        title: "『石』㐬方怪",
        type: "tag"
    },
    colourful: {
        fallback_name: "混凝土或陶瓦",
        id: "colourful_blocks",
        namespace: "madv_plus",
        special_block: "terracotta",
        title: "缤纷的可移动方块",
        type: "tag"
    },
    dirt: {
        fallback_name: "泥土类方块",
        id: "dirt_plus",
        namespace: "madv_plus",
        special_block: "dirt",
        title: "准备射门！",
        type: "tag"
    },
    heat: {
        fallback_name: "岩浆块",
        id: "magma_block",
        /* 文言 - 燚 */
        title: "焱热",
        type: "single"
    },
    ores: {
        fallback_name: "矿物及矿物块",
        id: "ores_plus",
        namespace: "madv_plus",
        special_block: "iron_ore",
        title: "“矿”艺中的硫方怪",
        type: "tag"
    },
    soul: {
        fallback_name: "灵魂沙或灵魂土",
        id: "soul_fire_base_blocks",
        special_block: "soul_soil",
        title: "特大摩擦力",
        type: "tag"
    },
    wood: {
        fallback_name: "木头类方块",
        id: "wood",
        namespace: "madv_plus",
        special_block: "oak_log",
        title: "弹力十足",
        type: "tag"
    }
}

mcfunction = "# 该函数仅用于测试"
for(i in name_mapping)
{
    mapping = name_mapping[i];
    mcfunction += "\nadvancement revoke @s only madv_plus:adventure/sulfur_filled_with_" + mapping.id;
    namespace = mapping.namespace == "madv_plus" ? "madv_plus" : "minecraft";
    if(mapping.type == "single" || name_mapping[i].type == undefined)
    {
        adv = fill_sulfur_cube(mapping.id, "minecraft:adventure/root", "adventure", mapping.title, mapping.fallback_name, namespace);
    }
    else if(mapping.type == "tag")
    {
        adv = fill_sulfur_cube_tag(mapping.id, "minecraft:adventure/root", "adventure", mapping.title, mapping.fallback_name, mapping.special_block, namespace);
    }
    fs.writeFile("../data/madv_plus/advancement/adventure/sulfur_filled_with_" + mapping.id + ".json", JSON.stringify(adv, undefined, 4), (err) => {});
    console.log("\"" + adv.display.description.translate + "\": \"" + adv.display.description.fallback + "\",");
    console.log("\"" + adv.display.title.translate + "\": \"" + adv.display.title.fallback + "\",");
}
fs.writeFile("../data/madv_plus/function/sulfur_revoke.mcfunction", mcfunction, (err) => {});