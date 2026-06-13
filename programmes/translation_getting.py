# 该工具仅用于辅助开发，不用于构建进度
from sys import argv
import json, os

print("输入进度名称，该工具将根据进度生成语言文件条目。输入\"quit\"或\"exit\"退出。")
while True:
    filename_id = input("  > ")
    if filename_id == "quit" or filename_id == "exit":
        break
    if ":" in filename_id:
        filename = (
            "../data/madv_plus/advancement/" +
            filename_id[filename_id.find(":") + 1:]
        )
    else:
        filename = "../data/madv_plus/advancement/" + filename_id
    if ".json" not in argv:
        filename += ".json"
    try:
        adv = json.load(open(filename, mode="r", encoding="utf-8"))
        print("结果：\n")
        print("标题：\n\"{0}\": \"{1}\"".format(adv["display"]["title"]["translate"], adv["display"]["title"]["fallback"]))
        print("描述：\n\"{0}\": \"{1}\"".format(
            adv["display"]["description"]["translate"],
            adv["display"]["description"]["fallback"]
        ))
    except FileNotFoundError:
        print("进度 {} 不存在".format(filename_id))