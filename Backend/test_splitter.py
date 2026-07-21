from loaders.pdf_loaders import load_pdf
from spiltters.text_splitters import split_documents

documents = load_pdf("uploads/sample.pdf")

chunks = split_documents(documents)

print(f"Total Chunks: {len(chunks)}")

print("\nFirst Chunk:\n")
print(chunks[0].page_content)

print("\nMetadata:\n")
print(chunks[0].metadata)