def find_median_sorted_arrays(nums1: list[int], nums2: list[int]) -> float:
    # Ensure nums1 is the smaller array to minimize the binary search range
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1
    
    x, y = len(nums1), len(nums2)
    low, high = 0, x
    
    while low <= high:
        partition_x = (low + high) // 2
        partition_y = (x + y + 1) // 2 - partition_x
        
        max_left_x = float('-inf') if partition_x == 0 else nums1[partition_x - 1]
        min_right_x = float('inf') if partition_x == x else nums1[partition_x]
        
        max_left_y = float('-inf') if partition_y == 0 else nums2[partition_y - 1]
        min_right_y = float('inf') if partition_y == y else nums2[partition_y]
        
        if max_left_x <= min_right_y and max_left_y <= min_right_x:
            if (x + y) % 2 == 0:
                return (max(max_left_x, max_left_y) + min(min_right_x, min_right_y)) / 2.0
            else:
                return max(max_left_x, max_left_y)
        
        elif max_left_x > min_right_y:
            high = partition_x - 1
        else:
            low = partition_x + 1
    
    raise ValueError("Input arrays are not sorted or invalid.")
