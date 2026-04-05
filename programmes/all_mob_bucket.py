import json, os
from typing import *

adv_id = "all_mob_bucket"
parent = "minecraft:story/smelt_iron"

os.chdir(os.path.dirname(__file__))
os.chdir("../data/madv_plus/advancement")
if not os.path.isdir((parent[parent.find(":") + 1:] if ":" in parent else parent).split("/")[0]):
    os.mkdir((parent[parent.find(":") + 1:] if ":" in parent else parent).split("/")[0])
os.chdir((parent[parent.find(":") + 1:] if ":" in parent else parent).split("/")[0])

def translation(fallback: str, is_title = True):
    global adv_id, parent
    tag = parent[parent.find(":") + 1:] if ":" in parent else parent
    tag = tag.split("/")[0]
    translate = "advancement.madv_plus.{0}.{1}.{2}".format(tag, adv_id, ("title" if is_title else "description"))
    return {"translate": translate, "fallback": fallback}

adv = dict()
display: Dict[str, Union[str, Dict[str, str]]] = dict()
criteria: Dict[str, Union[str, Dict[str, Dict[str, Union[str, Dict]]]]] = dict()

display["frame"] = "task"
display["icon"] = {"id": "minecraft:bucket"}
display["title"] = translation("不透明鱼缸")
display["description"] = translation("收集所有种类的鱼桶", False)

bucket_array = ["bucket", "water_bucket", "lava_bucket", "powder_snow_bucket", "milk_bucket"]
mob_bucket = list(map(lambda i: i + "_bucket", ("pufferfish", "salmon", "cod", "tropical_fish", "axolotl", "tadpole")))
# bucket_array.extend(mob_bucket)
for i in mob_bucket:
    criteria[i] = {"trigger": "minecraft:inventory_changed"}
    criteria[i]["conditions"] = {"items": [{"items": "minecraft:{}".format(i)}]}

adv["display"] = display
adv["parent"] = parent
adv["criteria"] = criteria

file = open("{}.json".format(adv_id), mode="w", encoding="utf-8")
json.dump(adv, file, ensure_ascii=False, indent=4)