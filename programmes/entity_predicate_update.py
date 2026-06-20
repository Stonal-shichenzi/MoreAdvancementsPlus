import json, os
from sys import argv

def entity_predicate_update(predicate: dict) -> dict:
    if "type" in predicate:
        predicate["entity_type"] = predicate["type"]
        del predicate["type"]
    if "type_specific" in predicate:
        type_specific = predicate["type_specific"]["type"]
        if type_specific == "slime":
            type_specific = "cube_mob"
        type_specific = "minecraft:type_specific/" + type_specific
        del predicate["type_specific"]["type"]
        predicate[type_specific] = predicate["type_specific"]
    return predicate
def is_trigger(trigger: str, name: str) -> bool:
    return trigger == name or "minecraft:{}".format(name) == trigger
def advancement_upload_entity_predicate(advancement: dict) -> dict:
    if "player" in advancement:
        advancement["player"] = entity_predicate_update(advancement["player"])
    criteria: dict = advancement["criteria"]
    for i in criteria.keys():
        criteria_value = criteria[i]
        trigger = criteria_value["trigger"]
        condition = criteria_value["conditions"]
        if is_trigger(trigger, "bred_animals"):
            if "child" in condition:
                if isinstance(condition["child"], dict):
                    condition["child"] = entity_predicate_update(condition["child"])
                elif isinstance(condition["child"], list):
                    for j in range(len(condition["child"])):
                        condition["child"][j] = entity_predicate_update(condition["child"][j])
            if "parent" in condition:
                if isinstance(condition["parent"], dict):
                    condition["parent"] = entity_predicate_update(condition["parent"])
                elif isinstance(condition["parent"], list):
                    for j in range(len(condition["parent"])):
                        condition["parent"][j] = entity_predicate_update(condition["parent"][j])
            if "partner" in condition:
                if isinstance(condition["partner"], dict):
                    condition["partner"] = entity_predicate_update(condition["partner"])
                elif isinstance(condition["partner"], list):
                    for j in range(len(condition["partner"])):
                        condition["partner"][j] = entity_predicate_update(condition["partner"][j])
        if is_trigger(trigger, "channeled_lightning"):
            if "victims" in condition:
                for k in range(len(condition["victims"])):
                    if isinstance(condition["victims"][k], dict):
                        condition["victims"][k] = entity_predicate_update(condition["victims"][k])
                    elif isinstance(condition["victims"][k], list):
                        for j in range(len(condition["victims"][k])):
                            condition["victims"][k][j] = entity_predicate_update(condition["victims"][k][j])
        if is_trigger(trigger, "cured_zombie_villager"):
            if "villager" in condition:
                if isinstance(condition["villager"], dict):
                    condition["villager"] = entity_predicate_update(condition["villager"])
                elif isinstance(condition["villager"], list):
                    for j in range(len(condition["villager"])):
                        condition["villager"][j] = entity_predicate_update(condition["villager"][j])
            if "zombie" in condition:
                if isinstance(condition["zombie"], dict):
                    condition["zombie"] = entity_predicate_update(condition["zombie"])
                elif isinstance(condition["zombie"], list):
                    for j in range(len(condition["zombie"])):
                        condition["zombie"][j] = entity_predicate_update(condition["zombie"][j])
        if is_trigger(trigger, "effects_changed"):
            if "source" in condition:
                if isinstance(condition["source"], dict):
                    condition["source"] = entity_predicate_update(condition["source"])
                elif isinstance(condition["source"], list):
                    for j in range(len(condition["source"])):
                        condition["source"][j] = entity_predicate_update(condition["source"][j])
        if is_trigger(trigger, "entity_killed_player"):
            if "entity" in condition:
                if isinstance(condition["entity"], dict):
                    condition["entity"] = entity_predicate_update(condition["entity"])
                elif isinstance(condition["entity"], list):
                    for j in range(len(condition["entity"])):
                        condition["entity"][j] = entity_predicate_update(condition["entity"][j])
        if is_trigger(trigger, "fall_after_explosion"):
            if "cause" in condition:
                if isinstance(condition["cause"], dict):
                    condition["cause"] = entity_predicate_update(condition["cause"])
                elif isinstance(condition["cause"], list):
                    for j in range(len(condition["cause"])):
                        condition["cause"][j] = entity_predicate_update(condition["cause"][j])
        if is_trigger(trigger, "fishing_rod_hooked"):
            if "entity" in condition:
                if isinstance(condition["entity"], dict):
                    condition["entity"] = entity_predicate_update(condition["entity"])
                elif isinstance(condition["entity"], list):
                    for j in range(len(condition["entity"])):
                        condition["entity"][j] = entity_predicate_update(condition["entity"][j])
        if is_trigger(trigger, "kill_mob_near_sculk_catalyst"):
            if "entity" in condition:
                if isinstance(condition["entity"], dict):
                    condition["entity"] = entity_predicate_update(condition["entity"])
                elif isinstance(condition["entity"], list):
                    for j in range(len(condition["entity"])):
                        condition["entity"][j] = entity_predicate_update(condition["entity"][j])
        if is_trigger(trigger, "killed_by_arrow"):
            if "victims" in condition:
                for k in range(len(condition["victims"])):
                    if isinstance(condition["victims"][k], dict):
                        condition["victims"][k] = entity_predicate_update(condition["victims"][k])
                    elif isinstance(condition["victims"][k], list):
                        for j in range(len(condition["victims"][k])):
                            condition["victims"][k][j] = entity_predicate_update(condition["victims"][k][j])
        if is_trigger(trigger, "lightning_strike"):
            if "lightning" in condition:
                if isinstance(condition["lightning"], dict):
                    condition["lightning"] = entity_predicate_update(condition["lightning"])
                elif isinstance(condition["lightning"], list):
                    for j in range(len(condition["lightning"])):
                        condition["lightning"][j] = entity_predicate_update(condition["lightning"][j])
            if "bystander" in condition:
                if isinstance(condition["bystander"], dict):
                    condition["bystander"] = entity_predicate_update(condition["bystander"])
                elif isinstance(condition["bystander"], list):
                    for j in range(len(condition["bystander"])):
                        condition["bystander"][j] = entity_predicate_update(condition["bystander"][j])
        if is_trigger(trigger, "player_hurt_entity"):
            if "entity" in condition:
                if isinstance(condition["entity"], dict):
                    condition["entity"] = entity_predicate_update(condition["entity"])
                elif isinstance(condition["entity"], list):
                    for j in range(len(condition["entity"])):
                        condition["entity"][j] = entity_predicate_update(condition["entity"][j])
        if is_trigger(trigger, "player_interacted_with_entity"):
            if "entity" in condition:
                if isinstance(condition["entity"], dict):
                    condition["entity"] = entity_predicate_update(condition["entity"])
                elif isinstance(condition["entity"], list):
                    for j in range(len(condition["entity"])):
                        condition["entity"][j] = entity_predicate_update(condition["entity"][j])
        if is_trigger(trigger, "player_killed_entity"):
            if "entity" in condition:
                if isinstance(condition["entity"], dict):
                    condition["entity"] = entity_predicate_update(condition["entity"])
                elif isinstance(condition["entity"], list):
                    for j in range(len(condition["entity"])):
                        condition["entity"][j] = entity_predicate_update(condition["entity"][j])
        if is_trigger(trigger, "player_sheared_equipment"):
            if "entity" in condition:
                if isinstance(condition["entity"], dict):
                    condition["entity"] = entity_predicate_update(condition["entity"])
                elif isinstance(condition["entity"], list):
                    for j in range(len(condition["entity"])):
                        condition["entity"][j] = entity_predicate_update(condition["entity"][j])
        if is_trigger(trigger, "summoned_entity"):
            if "entity" in condition:
                if isinstance(condition["entity"], dict):
                    condition["entity"] = entity_predicate_update(condition["entity"])
                elif isinstance(condition["entity"], list):
                    for j in range(len(condition["entity"])):
                        condition["entity"][j] = entity_predicate_update(condition["entity"][j])
        if is_trigger(trigger, "tame_animal"):
            if "entity" in condition:
                if isinstance(condition["entity"], dict):
                    condition["entity"] = entity_predicate_update(condition["entity"])
                elif isinstance(condition["entity"], list):
                    for j in range(len(condition["entity"])):
                        condition["entity"][j] = entity_predicate_update(condition["entity"][j])
        if is_trigger(trigger, "target_hit"):
            if "projectile" in condition:
                if isinstance(condition["projectile"], dict):
                    condition["projectile"] = entity_predicate_update(condition["projectile"])
                elif isinstance(condition["projectile"], list):
                    for j in range(len(condition["projectile"])):
                        condition["projectile"][j] = entity_predicate_update(condition["projectile"][j])
        if is_trigger(trigger, "thrown_item_picked_up_by_entity"):
            if "entity" in condition:
                if isinstance(condition["entity"], dict):
                    condition["entity"] = entity_predicate_update(condition["entity"])
                elif isinstance(condition["entity"], list):
                    for j in range(len(condition["entity"])):
                        condition["entity"][j] = entity_predicate_update(condition["entity"][j])
        if is_trigger(trigger, "thrown_item_picked_up_by_player"):
            if "entity" in condition:
                if isinstance(condition["entity"], dict):
                    condition["entity"] = entity_predicate_update(condition["entity"])
                elif isinstance(condition["entity"], list):
                    for j in range(len(condition["entity"])):
                        condition["entity"][j] = entity_predicate_update(condition["entity"][j])
        if is_trigger(trigger, "villager_trade"):
            if "villager" in condition:
                if isinstance(condition["villager"], dict):
                    condition["villager"] = entity_predicate_update(condition["villager"])
                elif isinstance(condition["villager"], list):
                    for j in range(len(condition["villager"])):
                        condition["villager"][j] = entity_predicate_update(condition["villager"][j])
        criteria_value["conditions"] = condition
        criteria[i] = criteria_value
    advancement["criteria"] = criteria
    return advancement
if len(argv) == 3:
    if argv[1] == "file":
        if os.path.isfile(argv[2]):
            adv_file = open(argv[2], mode="r+", encoding="utf-8")
            adv_data = advancement_upload_entity_predicate(json.load(adv_file))
            adv_file.seek(0)
            json.dump(adv_data, adv_file, indent=4, ensure_ascii=False)
    elif argv[1] == "dir":
        path = argv[2].rstrip("*?")
        for i in os.listdir(path):
            if os.path.isfile(i):
                adv_file = open(i, mode="r+", encoding="utf-8")
                adv_data = advancement_upload_entity_predicate(json.load(adv_file))
                adv_file.seek(0)
                json.dump(adv_data, adv_file, indent=4, ensure_ascii=False)
elif (len(argv) == 2 and argv[1] == "help") or len(argv) == 1:
    print("欢迎使用实体谓词迁移器！")
    print("本工具可以帮助你将26.1前的实体谓词迁移至26.2版本\n")
    print("工具参数\n[省略 \"python entity_predicate_update.py\"]\n")
    print("... file [FILENAME]")
    print("将某个进度文件迁移至26.2版本")
    print("[FILENAME] 文件路径，建议使用绝对路径")
    print("... dir [DIRNAME]")
    print("将含有进度文件的文件夹迁移至26.2版本")
    print("[DIRNAME] 文件夹路径，建议使用绝对路径")
    print("提示：仅转换该文件夹下的文件，不支持转换该文件夹的子文件夹中的文件")
    print("\n作者：\n石辰子")