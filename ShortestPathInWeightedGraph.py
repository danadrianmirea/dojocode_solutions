import heapq

def shortest_path(graph: dict, start: str, end: str) -> tuple[int, list[str]]:
    # If the graph is empty or start/end nodes are not in the graph, return (inf, [])
    if start not in graph or end not in graph:
        return (float('inf'), [])
    
    # Priority queue to store nodes with their current shortest distance
    pq = [(0, start)]  # (distance, node)
    
    # Distance dictionary to store the shortest distance to each node
    dist = {node: float('inf') for node in graph}
    dist[start] = 0
    
    # Previous node dictionary to reconstruct the path
    prev = {node: None for node in graph}
    
    while pq:
        # Get the node with the smallest distance
        current_dist, current_node = heapq.heappop(pq)
        
        # If we've reached the end node, break early
        if current_node == end:
            break
        
        # Explore the neighbors of the current node
        for neighbor, weight in graph[current_node].items():
            # Calculate the distance to the neighbor
            distance = current_dist + weight
            
            # If a shorter path to the neighbor is found
            if distance < dist[neighbor]:
                dist[neighbor] = distance
                prev[neighbor] = current_node
                heapq.heappush(pq, (distance, neighbor))
    
    # Check if we ever reached the end node
    if dist[end] == float('inf'):
        return (float('inf'), [])
    
    # Reconstruct the path from end to start using the prev dictionary
    path = []
    current_node = end
    while current_node is not None:
        path.append(current_node)
        current_node = prev[current_node]
    
    # Reverse the path to get it from start to end
    path.reverse()
    
    # Return the total weight and the path
    return (dist[end], path)

# Example 1 - Graph where 'C' is not reachable from 'A'
graph1 = {"A": {"B": 1}, "B": {"A": 1}}
start1 = "A"
end1 = "C"
print(shortest_path(graph1, start1, end1))  # Output: (inf, [])

# Example 2 - Empty graph where 'A' and 'B' don't exist
graph2 = {}
start2 = "A"
end2 = "B"
print(shortest_path(graph2, start2, end2))  # Output: (inf, [])
