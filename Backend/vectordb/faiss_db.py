from pathlib import Path

from langchain_community.vectorstores import FAISS

from embeddings.embedding import get_embedding_model


VECTOR_DB_PATH = "vectorstore/faiss_index"


def create_vector_store(chunks):
    """
    Create a FAISS vector store from document chunks
    and save it locally.
    """

    embedding_model = get_embedding_model()

    vector_store = FAISS.from_documents(
        documents=chunks,
        embedding=embedding_model
    )

    Path("vectorstore").mkdir(exist_ok=True)

    vector_store.save_local(VECTOR_DB_PATH)

    return vector_store


def load_vector_store():
    """
    Load the saved FAISS vector store.
    """

    embedding_model = get_embedding_model()

    vector_store = FAISS.load_local(
        VECTOR_DB_PATH,
        embedding_model,
        allow_dangerous_deserialization=True
    )

    return vector_store