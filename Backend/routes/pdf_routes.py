from pathlib import Path
import shutil

from fastapi import APIRouter, UploadFile, File, HTTPException

from loaders.pdf_loaders import load_pdf
from spiltters.text_splitters  import split_documents
from vectordb.faiss_db import create_vector_store
from chains.rag_chain import create_rag_chain
from schemas.chat_schema import ChatRequest

router = APIRouter()

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)


@router.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):
    """
    Upload PDF and create FAISS vector database.
    """

    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )

    file_path = UPLOAD_DIR / file.filename

    with file_path.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Load PDF
    documents = load_pdf(str(file_path))

    # Split into chunks
    chunks = split_documents(documents)

    # Create FAISS index
    create_vector_store(chunks)

    return {
        "message": "PDF uploaded successfully.",
        "chunks": len(chunks)
    }


@router.post("/chat")
def chat(request: ChatRequest):

    rag_chain = create_rag_chain()

    answer = rag_chain.invoke(request.question)

    return {
        "question": request.question,
        "answer": answer
    }