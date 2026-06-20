var fs = require("fs");
function translation(tag, id, fallback, is_title = false)
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
var adv = {};
adv.display = {};
// adv.parent = "madv:monsters_and_combat/super_spear";
adv.parent = "madv:temp/root";
adv.criteria = {};
adv.display.frame = "challenge";
adv.display.icon = {}
adv.display.icon.id = "minecraft:netherite_spear";
adv.display.title = translation("monsters_and_combat", "super_spear_plus", "精确制导：自增版", true);
adv.display.description = translation("monsters_and_combat", "super_spear_plus", "用矛一击对末影螨造成恰好100点伤害");
adv.criteria.super_spear = {};
adv.criteria.super_spear.trigger = "minecraft:player_hurt_entity";
adv.criteria.super_spear.conditions = {};
adv.criteria.super_spear.conditions.damage = {};
adv.criteria.super_spear.conditions.entity = {};
adv.criteria.super_spear.conditions.damage.dealt = 100;
adv.criteria.super_spear.conditions.damage.type = {};
adv.criteria.super_spear.conditions.damage.type.tags = new Array();
adv.criteria.super_spear.conditions.damage.type.tags[0] = {};
adv.criteria.super_spear.conditions.damage.type.tags[0].id = "madv:is_spear";
adv.criteria.super_spear.conditions.damage.type.tags[0].expected = true;
adv.criteria.super_spear.conditions.entity.entity_type = "minecraft:endermite";
var file_data = JSON.stringify(adv, undefined, 4);
fs.writeFile("../data/madv_plus/advancement/monsters_and_combat/super_spear_plus.json", file_data, function (err){});