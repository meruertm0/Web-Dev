def sum13(nums):
    total = 0
    skip = False

    for x in nums:
        if skip:
            skip = False
            continue
        if x == 13:
            skip = True
            continue
        total += x

    return total

sum13([1, 2, 2, 1])        # 6
sum13([1, 1])              # 2
sum13([1, 2, 2, 1, 13])    # 6
sum13([1, 13, 5, 2])       # 3  (13 и 5 не считаются)