def first_missing_positive(nums: list[int]) -> int:
    n = len(nums)
    
    # Place each number in its correct position if within the range
    for i in range(n):
        while 1 <= nums[i] <= n and nums[nums[i] - 1] != nums[i]:
            target_index = nums[i] - 1
            nums[i], nums[target_index] = nums[target_index], nums[i]
    
    # Find the first index where the number is incorrect
    for i in range(n):
        if nums[i] != i + 1:
            return i + 1
    
    # If all positions are correct, return len(nums) + 1
    return n + 1
