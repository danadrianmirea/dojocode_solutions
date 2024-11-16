def longest_palindromic_substring(s: str) -> str:
    # Function to expand around center and return the longest palindrome
    def expand_around_center(left: int, right: int) -> str:
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return s[left + 1:right]

    if not s:
        return ""

    longest = ""
    
    for i in range(len(s)):
        # Check for odd-length palindromes (centered at i)
        odd_palindrome = expand_around_center(i, i)
        if len(odd_palindrome) > len(longest):
            longest = odd_palindrome
        
        # Check for even-length palindromes (centered between i and i+1)
        even_palindrome = expand_around_center(i, i + 1)
        if len(even_palindrome) > len(longest):
            longest = even_palindrome
    
    return longest
