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
var adv = {};
adv.display = {};
adv.parent = "madv:world/wet_sponge";
adv.criteria = {};
adv.display.frame = "task";
adv.display.icon = {}
adv.display.icon.id = "minecraft:sponge";
adv.display.title = translation("world", "sponge", "你说你获得了什么？", true);
adv.display.description = translation("world", "sponge", "获得一块海绵", false);
adv.criteria.sponge = {};
adv.criteria.sponge.trigger = "minecraft:inventory_changed";
adv.criteria.sponge.conditions = {};
adv.criteria.sponge.conditions.items = new Array();
adv.criteria.sponge.conditions.items[0] = {};
adv.criteria.sponge.conditions.items[0].items = adv.display.icon.id;
var file_data = JSON.stringify(adv, undefined, 4);
fs.writeFile("../data/madv_plus/advancement/world/sponge.json", file_data, function (err){});