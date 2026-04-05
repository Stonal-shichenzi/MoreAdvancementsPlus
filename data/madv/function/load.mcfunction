execute if data storage madv:gr {load_message: 1b} run tellraw @a [{"text": "[MAdv] "}, {"fallback": "§a更多进度数据包Beta1.2.5加载完成！", "translate": "messages.madv.load", "shadow_color": 1095428874}]
execute if data storage madv:gr {load_message: 1b} run tellraw @a [{"text": "[More Advencements Plus] "}, {"fallback": "更多进度数据包（扩展）Alpha Incipient Renovate版本加载完成！", "translate": "messages.madv_plus.load", "color": "yellow"}]
scoreboard objectives add madv_health_max4 dummy
scoreboard objectives add madv_trigger_close trigger
