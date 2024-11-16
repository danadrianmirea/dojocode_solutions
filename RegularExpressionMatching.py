def is_match(s: str, p: str) -> bool:
    # Create a DP table where dp[i][j] means whether s[0...i-1] matches p[0...j-1]
    dp = [[False] * (len(p) + 1) for _ in range(len(s) + 1)]
    
    # Base case: empty string matches empty pattern
    dp[0][0] = True
    
    # Initialize for patterns like a*, a*b*, a*b*c*, etc.
    for j in range(2, len(p) + 1, 2):
        if p[j - 1] == '*':
            dp[0][j] = dp[0][j - 2]
    
    # Fill the DP table
    for i in range(1, len(s) + 1):
        for j in range(1, len(p) + 1):
            if p[j - 1] == s[i - 1] or p[j - 1] == '.':
                dp[i][j] = dp[i - 1][j - 1]
            elif p[j - 1] == '*':
                # Case 1: * matches zero occurrence of the previous character
                dp[i][j] = dp[i][j - 2]
                # Case 2: * matches one or more occurrences of the previous character
                if p[j - 2] == s[i - 1] or p[j - 2] == '.':
                    dp[i][j] = dp[i][j] or dp[i - 1][j]
    
    # The result is stored in dp[len(s)][len(p)]
    return dp[len(s)][len(p)]
