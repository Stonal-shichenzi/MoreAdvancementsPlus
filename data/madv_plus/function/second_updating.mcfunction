execute if predicate madv_plus:time_over_day run \
    advancement grant @s only madv_plus:husbandry/time_over_day
execute if predicate madv_plus:time_over_7_days run \
    advancement grant @s only madv_plus:husbandry/time_over_7_days
execute if predicate madv_plus:time_over_30_days run \
    advancement grant @s only madv_plus:husbandry/time_over_30_days
execute if predicate madv_plus:time_over_121_days run \
    advancement grant @s only madv_plus:husbandry/time_over_121_days
execute if predicate madv_plus:time_over_365_days run \
    advancement grant @s only madv_plus:husbandry/time_over_365_days
# 析构函数，保证循环利用
advancement revoke @s only madv_plus:tech/second_updating