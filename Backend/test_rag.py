from chains.rag_chain import create_rag_chain

rag = create_rag_chain()

question = "KITTY’S TRUNKS"

answer = rag.invoke(question)

print(answer)