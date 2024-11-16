from typing import List

def num_islands(grid: List[List[str]]) -> int:
    if not grid:
        return 0

    def dfs(i: int, j: int):
        # Check boundaries and if the cell is water ('0') or already visited
        if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] == '0':
            return
        # Mark the cell as visited
        grid[i][j] = '0'
        # Visit all adjacent cells (up, down, left, right)
        dfs(i + 1, j)
        dfs(i - 1, j)
        dfs(i, j + 1)
        dfs(i, j - 1)

    island_count = 0
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == '1':  # New island found
                dfs(i, j)  # Mark the entire island
                island_count += 1

    return island_count
