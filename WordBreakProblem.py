def word_break(s: str, wordDict: list[str]) -> bool:
    # If the string is empty and the dictionary is also empty, return False
    if not s and len(wordDict) <= 1:
        return False
    
    word_set = set(wordDict)  # Convert the list to a set for faster lookups
    n = len(s)
    
    # Initialize dp array, where dp[i] will be True if s[:i] can be segmented
    dp = [False] * (n + 1)
    dp[0] = True  # An empty string can always be segmented
    
    # Iterate through the string
    for i in range(1, n + 1):
        for j in range(i):
            # If the substring s[j:i] is in the wordDict and dp[j] is True
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break  # No need to check further if we found a valid segmentation
    
    return dp[n]  # Return True if the entire string can be segmented