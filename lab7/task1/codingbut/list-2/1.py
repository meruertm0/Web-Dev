def count_evens(nums):
    count = 0
    for x in nums:
        if x % 2 == 0:
            count += 1
    return count

count_evens([2, 1, 2, 3, 4])  # 3
count_evens([2, 2, 0])        # 3
count_evens([1, 3, 5])        # 0