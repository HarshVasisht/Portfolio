import os
import shutil
import json

base_dir = r"c:\Users\ASUS\Documents\Portfolio\knowledge_hub"
md_dir = os.path.join(base_dir, "Markdowns")
pdf_dir = os.path.join(base_dir, "PDFs")

os.makedirs(md_dir, exist_ok=True)
os.makedirs(pdf_dir, exist_ok=True)

books = []
book_id_counter = 1

for root, dirs, files in os.walk(base_dir):
    # Skip destination directories to avoid loops
    if os.path.abspath(root) == os.path.abspath(md_dir) or os.path.abspath(root) == os.path.abspath(pdf_dir):
        continue
    
    for file in files:
        ext = file.lower().split('.')[-1]
        if ext in ['md', 'pdf']:
            src = os.path.join(root, file)
            # determine dest
            dest_folder = md_dir if ext == 'md' else pdf_dir
            # handle conflicts
            dest_file = file
            dest_path = os.path.join(dest_folder, dest_file)
            count = 1
            while os.path.exists(dest_path) and os.path.abspath(src) != os.path.abspath(dest_path):
                name, e = os.path.splitext(file)
                dest_file = f"{name}_{count}{e}"
                dest_path = os.path.join(dest_folder, dest_file)
                count += 1
            
            if os.path.abspath(src) != os.path.abspath(dest_path):
                shutil.move(src, dest_path)
            
            rel_path = f"knowledge_hub/{os.path.basename(dest_folder)}/{dest_file}"
            books.append({
                "id": f"book_{book_id_counter}",
                "title": os.path.splitext(dest_file)[0].replace('-', ' ').title(),
                "author": "Unknown",
                "file": rel_path,
                "type": ext
            })
            book_id_counter += 1

# Generate JS content
js_content = "const books = " + json.dumps(books, indent=4) + ";\n"

# We will read existing js/ereader.js and replace the books array
js_path = r"c:\Users\ASUS\Documents\Portfolio\js\ereader.js"
with open(js_path, 'r', encoding='utf-8') as f:
    existing = f.read()

# find where document.addEventListener is
start_idx = existing.find("document.addEventListener")
if start_idx != -1:
    new_js = js_content + "\n" + existing[start_idx:]
    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(new_js)

print(f"Moved and generated {len(books)} books.")
