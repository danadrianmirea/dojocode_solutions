def max_subarray_sum(arr: list[int]) -> int:
    if not arr:  # Return 0 for an empty array
        return 0
    
    max_sum = current_sum = arr[0]  # Initialize both max_sum and current_sum to the first element
    
    for num in arr[1:]:  # Start from the second element
        current_sum = max(num, current_sum + num)  # Take the larger of num itself or num + current_sum
        max_sum = max(max_sum, current_sum)  # Update max_sum if current_sum is larger
    
    return max_sum