def merge_sorted_lists(list1: list[int], list2: list[int]) -> list[int]:
    # Initialize two pointers and an empty result list
    i, j = 0, 0
    merged_list = []
    
    # Traverse both lists and merge them
    while i < len(list1) and j < len(list2):
        if list1[i] < list2[j]:
            merged_list.append(list1[i])
            i += 1
        else:
            merged_list.append(list2[j])
            j += 1
    
    # If there are remaining elements in list1, append them
    if i < len(list1):
        merged_list.extend(list1[i:])
    
    # If there are remaining elements in list2, append them
    if j < len(list2):
        merged_list.extend(list2[j:])
    
    return merged_list
