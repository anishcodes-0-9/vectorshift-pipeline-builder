from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def ping():
    return {"Ping": "Pong"}


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: dict):

    nodes = pipeline.get("nodes", [])
    edges = pipeline.get("edges", [])

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Build adjacency list
    adj = {node["id"]: [] for node in nodes}
    indegree = {node["id"]: 0 for node in nodes}

    for edge in edges:
        source = edge["source"]
        target = edge["target"]

        adj[source].append(target)
        indegree[target] += 1

    # Kahn's algorithm for DAG detection
    queue = [node for node in indegree if indegree[node] == 0]

    visited = 0

    while queue:
        node = queue.pop(0)
        visited += 1

        for neighbor in adj[node]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    is_dag = visited == num_nodes

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }