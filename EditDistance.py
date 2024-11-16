def edit_distance(word1: str, word2: str) -> int:
    # Create a 2D dp table with dimensions (len(word1) + 1) x (len(word2) + 1)
    dp = [[0] * (len(word2) + 1) for _ in range(len(word1) + 1)]
    
    # Initialize the base cases
    for i in range(len(word1) + 1):
        dp[i][0] = i  # Deleting all characters from word1 to match empty word2
    
    for j in range(len(word2) + 1):
        dp[0][j] = j  # Inserting all characters into word1 to match word2
    
    # Fill the dp table
    for i in range(1, len(word1) + 1):
        for j in range(1, len(word2) + 1):
            if word1[i-1] == word2[j-1]:
                dp[i][j] = dp[i-1][j-1]  # No operation needed if characters match
            else:
                dp[i][j] = min(
                    dp[i-1][j-1] + 1,  # Replace
                    dp[i][j-1] + 1,    # Insert
                    dp[i-1][j] + 1     # Delete
                )
    
    # The answer is in dp[len(word1)][len(word2)]
    return dp[len(word1)][len(word2)]

# Example Usage
assert edit_distance("horse", "ros") == 3
assert edit_distance("intention", "execution") == 5
assert edit_distance("abc", "abc") == 0
assert edit_distance("", "ab") == 2
assert edit_distance("abc", "") == 3
