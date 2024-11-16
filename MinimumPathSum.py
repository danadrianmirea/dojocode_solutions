def min_path_sum(grid: list[list[int]]) -> int:
    if not grid:
        return 0  # If the grid is empty
    
    m, n = len(grid), len(grid[0])
    
    # Initialize the dp table with the same dimensions as grid
    dp = [[0] * n for _ in range(m)]
    
    # Fill the top-left corner
    dp[0][0] = grid[0][0]
    
    # Fill the first column (can only come from above)
    for i in range(1, m):
        dp[i][0] = dp[i-1][0] + grid[i][0]
    
    # Fill the first row (can only come from the left)
    for j in range(1, n):
        dp[0][j] = dp[0][j-1] + grid[0][j]
    
    # Fill the rest of the dp table
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
    
    # The minimum path sum is found at the bottom-right corner
    return dp[m-1][n-1]

# Example Usage
grid1 = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]

grid2 = [
    [1, 2, 3],
    [4, 5, 6]
]

print(min_path_sum(grid1))  # Output: 7 (1 → 3 → 1 → 1 → 1)
print(min_path_sum(grid2))  # Output: 12 (1 → 2 → 3 → 6)
