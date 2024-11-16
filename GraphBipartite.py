from collections import deque

def is_bipartite(graph: list[list[int]]) -> bool:
    # Initialize an array to store the colors of the nodes
    # -1 represents uncolored nodes
    colors = [-1] * len(graph)
    
    # BFS function to color the graph starting from a given node
    def bfs(start: int) -> bool:
        queue = deque([start])
        colors[start] = 0  # Start coloring the first node with color 0
        
        while queue:
            node = queue.popleft()
            
            # Check all adjacent nodes
            for neighbor in graph[node]:
                if colors[neighbor] == -1:
                    # If the neighbor is uncolored, color it with opposite color
                    colors[neighbor] = 1 - colors[node]
                    queue.append(neighbor)
                elif colors[neighbor] == colors[node]:
                    # If the neighbor has the same color, the graph is not bipartite
                    return False
        return True
    
    # Traverse all nodes, as the graph may not be connected
    for i in range(len(graph)):
        if colors[i] == -1:  # If the node hasn't been visited
            if not bfs(i):
                return False
    
    return True
