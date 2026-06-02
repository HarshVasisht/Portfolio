import os
import re
import json

# Get the directory two levels up from this script (the root Portfolio folder)
base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
knowledge_hub = os.path.join(base_dir, "knowledge_hub")
markdowns_dir = os.path.join(knowledge_hub, "Markdowns")
js_file = os.path.join(base_dir, "js", "ereader.js")
out_file = os.path.join(base_dir, "js", "graph_data.js")

nodes = []
links = []

# To easily find targets by title
book_id_map = {}
title_to_id = {}
current_id = 1

# From js/ereader.js, the books array already has IDs, but for the graph we can just generate nodes.
# Let's read js/ereader.js to extract the actual books array so nodes match exactly.
js_file = r"c:\Users\ASUS\Documents\Portfolio\js\ereader.js"
with open(js_file, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Extract books array
match = re.search(r'const books = (\[.*?\]);', js_content, re.DOTALL)
if match:
    books_json = match.group(1)
    books = json.loads(books_json)
else:
    books = []

for b in books:
    book_id_map[b['id']] = b
    title_to_id[b['title'].lower()] = b['id']
    nodes.append({
        "id": b['id'],
        "name": b['title'],
        "val": 1 # node size
    })

for b in books:
    if b['type'] == 'md':
        file_path = os.path.join(knowledge_hub, "..", b['file'])
        if os.path.exists(file_path):
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Find wiki links
            links_in_file = re.findall(r'\[\[(.*?)\]\]', content)
            
            for link_title in links_in_file:
                target_title = link_title.lower().strip()
                # Find matching target
                target_id = title_to_id.get(target_title)
                if target_id:
                    links.append({
                        "source": b['id'],
                        "target": target_id
                    })

graph_data = {
    "nodes": nodes,
    "links": links
}

out_file = r"c:\Users\ASUS\Documents\Portfolio\js\graph_data.js"
with open(out_file, 'w', encoding='utf-8') as f:
    f.write("const graphData = " + json.dumps(graph_data, indent=4) + ";")

print(f"Graph data generated with {len(nodes)} nodes and {len(links)} links.")
