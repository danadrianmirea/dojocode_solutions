def longest_increasing_subsequence(arr: list[int]) -> int:
    if not arr:
        return 0
    
    # DP array, where dp[i] is the length of the longest subsequence ending at index i
    dp = [1] * len(arr)
    
    for i in range(1, len(arr)):
        for j in range(i):
            if arr[i] > arr[j]:
                dp[i] = max(dp[i], dp[j] + 1)
    
    # The length of the longest increasing subsequence is the max value in dp
    return max(dp)