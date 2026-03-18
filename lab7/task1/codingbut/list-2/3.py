def centered_average(nums):
    nums_sorted = sorted(nums)
    middle = nums_sorted[1:-1]
    return sum(middle) // len(middle)

centered_average([1, 2, 3, 4, 100])        # 3
centered_average([1, 1, 5, 5, 10, 8, 7])   # 5
centered_average([-10, -4, -2, -4, -2, 0]) # -3