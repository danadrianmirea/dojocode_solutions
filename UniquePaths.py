import math

def unique_paths(m: int, n: int) -> int:
    if m == 0 or n == 0:
        return 0
    return math.comb(m + n - 2, m - 1)