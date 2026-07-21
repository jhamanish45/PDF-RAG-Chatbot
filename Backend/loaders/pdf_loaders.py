from pathlib import Path

from langchain_community.document_loaders import PyPDFLoader


def load_pdf(pdf_path: str):
    """
    Load a PDF and return a list of LangChain Document objects.
    """

    path = Path(pdf_path)

    if not path.exists():
        raise FileNotFoundError(f"{pdf_path} does not exist.")

    loader = PyPDFLoader(str(path))

    documents = loader.load()

    return documents