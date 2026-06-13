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
var allowed_days_array = new Array(7, 30, 121, 365);
var days_description = new Array("周末会更好", "海上生盈月", "季节苦行山", "跨年失败")
/* 365 - 寒暑易节 */
for(i in allowed_days_array)
{
    var adv = {}, predicate = {}, name_of_time = allowed_days_array[i];
    adv.display = {};
    if(i == 0)
    {
        adv.parent = "madv_plus:husbandry/time_over_day";
    }
    else
    {
        adv.parent = "madv_plus:husbandry/time_over_" + allowed_days_array[i - 1] + "_days";
    }
    adv.criteria = {};
    adv.display.frame = (i > 200) ? "challenge" : ((i > 100) ? "goal" : "task");
    adv.display.icon = {}
    adv.display.icon.id = "minecraft:clock";
    var name = "time_over_" + allowed_days_array[i] + "_days";
    adv.display.title = translation("husbandry", name, days_description[i], true);
    adv.display.description = translation("husbandry", name, "度过第" + name_of_time + "天的夜晚", false);
    adv.criteria.linking = {};
    adv.criteria.linking.trigger = "minecraft:impossible";
    var file_data = JSON.stringify(adv, undefined, 4);
    var dir = "../data/madv_plus/advancement/husbandry/time_over_" + name_of_time + "_days.json";
    fs.writeFile(dir, file_data, function(e){});
    predicate.condition = "time_check";
    predicate.clock = "minecraft:overworld";
    predicate.value = {};
    predicate.value.min = 24000 * name_of_time;
    var predicate_file = JSON.stringify(predicate, undefined, 4);
    var predicate_file_dir = "../data/madv_plus/predicate/time_over_" + name_of_time + "_days.json";
    fs.writeFile(predicate_file_dir, predicate_file, function(e){});
}
// 你知道吗
/* 原本madv_plus:husbandry/time_over_day父进度为husbandry/root，录制前改为了adventure/root，懒得移动目录了 */