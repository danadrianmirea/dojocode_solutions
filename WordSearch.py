def exist(board: list[list[str]], word: str) -> bool:
    def dfs(board, word, i, j, index):
        # Base cases
        if index == len(word):
            return True
        if i < 0 or i >= len(board) or j < 0 or j >= len(board[0]) or board[i][j] != word[index]:
            return False
        
        # Temporarily mark the cell as visited by storing its value and replacing it with a placeholder
        temp = board[i][j]
        board[i][j] = '#'
        
        # Explore the four possible directions (up, down, left, right)
        result = (dfs(board, word, i + 1, j, index + 1) or 
                  dfs(board, word, i - 1, j, index + 1) or 
                  dfs(board, word, i, j + 1, index + 1) or 
                  dfs(board, word, i, j - 1, index + 1))
        
        # Restore the cell back to its original value
        board[i][j] = temp
        
        return result
    
    # Iterate over each cell in the board
    for i in range(len(board)):
        for j in range(len(board[0])):
            if board[i][j] == word[0]:  # Start DFS if the first letter matches
                if dfs(board, word, i, j, 0):  # Try to find the word
                    return True
    return False
