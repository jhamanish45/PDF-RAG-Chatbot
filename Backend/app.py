from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.pdf_routes import router as pdf_router


app = FastAPI(
    title="PDF RAG Chatbot",
    description="Ask questions from uploaded PDFs using LangChain",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React Vite
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(pdf_router)

@app.get("/")
def home():
    return {
        "message": "PDF RAG Chatbot Backend Running Successfully "
    }