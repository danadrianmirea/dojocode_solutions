def has_cycle(graph: dict) -> bool:
    # Helper function for DFS
    def dfs(node, visited, rec_stack):
        # If the node is already in the recursion stack, we found a cycle
        if node in rec_stack:
            return True
        # If the node has already been visited, no need to explore it again
        if node in visited:
            return False
        
        # Mark the node as visited and add to the recursion stack
        visited.add(node)
        rec_stack.add(node)
        
        # Visit all neighbors
        for neighbor in graph.get(node, []):
            if dfs(neighbor, visited, rec_stack):
                return True
        
        # Remove the node from recursion stack before backtracking
        rec_stack.remove(node)
        return False
    
    visited = set()
    rec_stack = set()
    
    # Call DFS for each node to detect a cycle
    for node in graph:
        if node not in visited:  # Start DFS only if the node hasn't been visited
            if dfs(node, visited, rec_stack):
                return True
    
    return False

# Example 1
graph1 = {
    'A': ['B'],
    'B': ['C'],
    'C': ['A']
}
print(has_cycle(graph1))  # Output: True (A -> B -> C -> A)

# Example 2
graph2 = {
    'A': ['B'],
    'B': ['C'],
    'C': []
}
print(has_cycle(graph2))  # Output: False (No cycle)
