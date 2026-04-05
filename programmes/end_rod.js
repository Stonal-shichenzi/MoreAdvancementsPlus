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
adv.parent = "minecraft:end/find_end_city.json";
adv.criteria = {};
adv.display.frame = "task";
adv.display.icon = {}
adv.display.icon.id = "minecraft:end_rod";
adv.display.title = translation("world", "end_rod", "这玩意只是用来照明的……对吧？", true);
adv.display.description = translation("world", "end_rod", "获得一根末地烛", false);
adv.criteria.sponge = {};
adv.criteria.sponge.trigger = "minecraft:inventory_changed";
adv.criteria.sponge.conditions = {};
adv.criteria.sponge.conditions.items = new Array();
adv.criteria.sponge.conditions.items[0] = {};
adv.criteria.sponge.conditions.items[0].items = adv.display.icon.id;
var file_data = JSON.stringify(adv, undefined, 4);
fs.writeFile("../data/madv_plus/advancement/end/end_rod.json", file_data, function (err){});