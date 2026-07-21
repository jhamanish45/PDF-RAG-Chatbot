from retriever.retriever import get_retriever

retriever = get_retriever()

question = "KITTY’S TRUNKS"

docs = retriever.invoke(question)

print(f"Retrieved {len(docs)} chunks")

for i, doc in enumerate(docs, start=1):
    print("=" * 60)
    print(f"Chunk {i}")
    print("=" * 60)
    print(doc.page_content[:500])
    print("\nMetadata:")
    print(doc.metadata)