#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <map>
#include "libs/cpp_fix.hpp"
#include "libs/nlohmann/json.hpp"
using namespace std;
using json = nlohmann::json;
json translation(string tag, string id, string fallback, bool is_title = false);

int main()
{
    json display, icon, criteria, temp, adv;
    fstream file;
    string seeds[5] = {"wheat_seeds", "melon_seeds", "pumpkin_seeds", "beetroot_seeds", "torchflower_seeds"};
    string parent = "madv:husbandry/wheat_seeds", tag = "husbandry", id = "all_seed";
    file.open("D:/Java/mod/video/More Advancements Plus/data/madv_plus/advancement/husbandry/all_seed.json", ios::out);
    if(not file)
        cerr << "Failed To Open" << endl;
    icon["id"] = "minecraft:melon_seeds";
    // 利用函数解决编码问题
    display["title"] = translation(tag, id, UTF8ToGBK("轮作"), 1);
    display["description"] = translation(tag, id, UTF8ToGBK("收集所有种类的种子"), 0);
    display["icon"] = icon;
    for(string & i : seeds)
    {
        temp["trigger"] = "minecraft:inventory_changed";
        temp["conditions"] = {};
        json p;
        p["items"] = i;
        temp["conditions"]["items"][0] = p;
        criteria[i] = temp;
    }
    adv["display"] = display;
    adv["criteria"] = criteria;
    adv["parent"] = parent;
    file << GBKToUTF8(adv.dump(4));                                                             // 利用函数解决编码问题
    file.close();
    return 0;
}

json translation(string tag, string id, string fallback, bool is_title)
{
    json returning;
    string translate = "advancement.madv_plus.";
    translate += tag + "." + id + ".";
    translate += is_title ? "title" : "description";
    returning["translate"] = translate;
    returning["fallback"] = fallback;
    return returning;
}
