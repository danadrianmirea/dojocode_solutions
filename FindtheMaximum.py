def find_max(arr: list[int]) -> int:
	if len(arr) < 1: 
		return None
	max = arr[0]
	for i in range(1, len(arr)):
		if(arr[i]>max):
			max = arr[i]
	return max;
