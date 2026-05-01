import json, os
from typing import *

adv_id = "repeater"
parent = "madv_plus:redstone/redstone_torch"

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
criteria: dict = dict()

display["frame"] = "task"
display["icon"] = {"id": "minecraft:repeater"}
display["title"] = translation("红石中继器")
display["description"] = translation("文可锁存数据，武可延长信号！", False)

criteria[adv_id] = dict()
criteria[adv_id]["trigger"] = "minecraft:inventory_changed"
criteria[adv_id]["conditions"] = dict()
criteria[adv_id]["conditions"]["items"] = [{"items": "minecraft:{}".format(adv_id)}]

adv["display"] = display
adv["parent"] = parent
adv["criteria"] = criteria

file = open("{}.json".format(adv_id), mode="w", encoding="utf-8")
json.dump(adv, file, ensure_ascii=False, indent=4)