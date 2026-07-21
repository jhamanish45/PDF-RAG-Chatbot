from loaders.pdf_loaders import load_pdf
from spiltters.text_splitters import split_documents
from vectordb.faiss_db import create_vector_store

documents = load_pdf("uploads/sample.pdf")

chunks = split_documents(documents)

vector_store = create_vector_store(chunks)

print("Vector Database Created Successfully!")

print(f"Total Chunks Stored: {vector_store.index.ntotal}")