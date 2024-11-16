def knapsack(capacity: int, weights: list[int], values: list[int]) -> int:
    n = len(weights)  # Number of items
    
    # Initialize a 2D DP table with all values set to 0
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    # Fill the DP table
    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i - 1] <= w:  # Can include the current item
                dp[i][w] = max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1])
            else:  # Cannot include the current item
                dp[i][w] = dp[i - 1][w]
    
    # The bottom-right cell contains the maximum value that can be achieved
    return dp[n][capacity]
