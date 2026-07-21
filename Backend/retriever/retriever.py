from vectordb.faiss_db import load_vector_store


def get_retriever():
    """
    Load the FAISS vector store and return
    a LangChain retriever.
    """

    vector_store = load_vector_store()

    retriever = vector_store.as_retriever(
        search_type="similarity",
        search_kwargs={
            "k": 3
        }
    )

    return retriever