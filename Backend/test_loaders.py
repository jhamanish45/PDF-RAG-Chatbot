from loaders.pdf_loaders import load_pdf

documents = load_pdf("uploads/sample.pdf")

print(f"Total Pages: {len(documents)}")

print("\nFirst Page:\n")

print(documents[10].page_content)

print("\nMetadata:\n")

print(documents[10].metadata)