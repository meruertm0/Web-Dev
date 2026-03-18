def sum67(nums):
    total = 0
    ignore = False

    for x in nums:
        if x == 6:
            ignore = True
        elif x == 7 and ignore:
            ignore = False
        elif not ignore:
            total += x

    return total

sum67([1, 2, 2])                    # 5
sum67([1, 2, 2, 6, 99, 99, 7])     # 5
sum67([1, 1, 6, 7, 2])             # 4