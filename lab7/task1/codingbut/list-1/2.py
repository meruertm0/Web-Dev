def same_first_last(nums):
    return len(nums) >= 1 and nums[0] == nums[-1]

same_first_last([1, 2, 3])    # False
same_first_last([1, 2, 3, 1]) # True
same_first_last([1, 2, 1])    # True
