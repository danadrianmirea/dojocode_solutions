import re

def roman_to_int(s: str) -> int:
    # Define valid Roman numeral patterns
    valid_pattern = re.compile(
        r"^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$"
    )
    
    # Check if the input is valid
    if not s or not valid_pattern.match(s):
        raise ValueError("Invalid Roman numeral")
    
    # Roman numeral to integer mapping
    roman_map = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    }
    
    total = 0
    prev_value = 0
    
    # Process the Roman numeral string from right to left
    for char in reversed(s):
        current_value = roman_map[char]
        
        # If the current value is smaller than the previous one, subtract it
        if current_value < prev_value:
            total -= current_value
        else:
            total += current_value
        
        prev_value = current_value
    
    return total

# Example Usage
print(roman_to_int('III'))     # Output: 3
print(roman_to_int('LVIII'))   # Output: 58
print(roman_to_int('MCMXCIV')) # Output: 1994
print(roman_to_int('CDXLIV'))  # Output: 444
print(roman_to_int('MMXXI'))   # Output: 2021
print(roman_to_int('I'))       # Output: 1
print(roman_to_int('IV'))      # Output: 4
print(roman_to_int('IX'))      # Output: 9
