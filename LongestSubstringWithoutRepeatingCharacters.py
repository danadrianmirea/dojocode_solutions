def longest_unique_substring(s: str) -> int:
    # Dictionary to store the last index of each character
    char_map = {}
    # Left pointer of the sliding window
    left = 0
    # Variable to store the maximum length of the substring
    max_length = 0
    
    # Iterate through the string with the right pointer
    for right in range(len(s)):
        # If the character is already in the substring, move the left pointer
        if s[right] in char_map and char_map[s[right]] >= left:
            left = char_map[s[right]] + 1
        
        # Update the character's last seen index
        char_map[s[right]] = right
        
        # Update the maximum length of the substring
        max_length = max(max_length, right - left + 1)
    
    return max_length
