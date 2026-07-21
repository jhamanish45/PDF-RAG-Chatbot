# 📄 PDF RAG Chatbot

An AI-powered PDF Question Answering application built with **Next.js**, **FastAPI**, **LangChain**, **FAISS**, **Hugging Face Embeddings**, and **Groq LLM**.

Users can upload a PDF document and ask questions in natural language. The application retrieves the most relevant information from the uploaded document using Retrieval-Augmented Generation (RAG) and generates context-aware answers.

---

## 🚀 Features

- 📄 Upload PDF documents
- 💬 Ask questions in natural language
- 🤖 AI-powered document understanding
- 🔍 Semantic search using FAISS
- 🧠 Hugging Face Embeddings
- ⚡ FastAPI Backend
- 🌐 Next.js Frontend
- 📱 Responsive UI
- 🏗 Modular Project Structure

---

# 🏗️ Tech Stack

## Frontend

- Next.js
- TypeScript
- Tailwind CSS
- Axios

## Backend

- FastAPI
- Python
- LangChain

## AI Stack

- Hugging Face Embeddings
- FAISS Vector Store
- Groq Llama 3.3
- Retrieval-Augmented Generation (RAG)

---

# 📂 Project Structure

```
PDF-RAG-Chatbot
│
├── backend
│   ├── app
│   │   ├── api
│   │   ├── services
│   │   ├── utils
│   │   ├── models
│   │   └── main.py
│   │
│   ├── uploads
│   ├── vectorstore
│   ├── requirements.txt
│   └── .env
│
├── frontend
│   ├── src
│   │   ├── app
│   │   ├── components
│   │   ├── services
│   │   └── types
│   │
│   ├── public
│   └── package.json
│
└── README.md
```

---

# ⚙️ How It Works

```
User Uploads PDF
        │
        ▼
PDF Loader (LangChain)
        │
        ▼
Text Splitter
        │
        ▼
Hugging Face Embeddings
        │
        ▼
FAISS Vector Store
        │
        ▼
User Question
        │
        ▼
Retriever
        │
        ▼
Relevant Context
        │
        ▼
Groq LLM
        │
        ▼
AI Answer
```

---

# 🔄 Workflow

### 1. Upload PDF

The user uploads a PDF document through the Next.js frontend.

---

### 2. Extract Text

LangChain extracts text from the uploaded PDF.

---

### 3. Split Text

The extracted text is divided into smaller chunks using:

- RecursiveCharacterTextSplitter

---

### 4. Create Embeddings

Each chunk is converted into vector embeddings using:

- Hugging Face Embeddings

---

### 5. Store in FAISS

The embeddings are stored in a FAISS Vector Database for efficient semantic search.

---

### 6. Ask Questions

Users ask questions related to the uploaded PDF.

---

### 7. Retrieve Context

The Retriever searches the FAISS vector database to find the most relevant document chunks.

---

### 8. Generate Answer

The retrieved context is sent to the Groq LLM, which generates an accurate, context-aware answer.

---

# 🖥️ Screenshots

## Home Page

> Add screenshot here

```
/screenshots/home.png
```

---

## Upload PDF

> Add screenshot here

```
/screenshots/upload.png
```

---

## Chat Interface

> Add screenshot here

```
/screenshots/chat.png
```

---

# 🛠 Installation

## Clone Repository

```bash
git clone https://github.com/your-username/pdf-rag-chatbot.git

cd pdf-rag-chatbot
```

---

# Backend Setup

## Create Virtual Environment

```bash
python -m venv .venv
```

Activate Virtual Environment

### Windows

```bash
.venv\Scripts\activate
```

### Linux / macOS

```bash
source .venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Configure Environment Variables

Create a `.env` file inside the backend folder.

```env
GROQ_API_KEY=your_groq_api_key
HF_TOKEN=your_huggingface_token
```

---

## Run Backend

```bash
uvicorn app.main:app --reload
```

Backend runs on:

```
http://127.0.0.1:8000
```

---

# Frontend Setup

Go to frontend folder

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Frontend runs on

```
http://localhost:3000
```

---

# API Endpoints

## Upload PDF

```
POST /upload
```

Upload a PDF document.

---

## Ask Question

```
POST /chat
```

Request Body

```json
{
  "question": "What is LangChain?"
}
```

Response

```json
{
  "answer": "LangChain is an open-source framework for building LLM-powered applications."
}
```

---

# Key Concepts Used

- Retrieval-Augmented Generation (RAG)
- Semantic Search
- Vector Embeddings
- FAISS Vector Database
- Prompt Engineering
- LangChain
- FastAPI
- REST APIs

---

# Future Improvements

- Multiple PDF Upload
- Source Citation
- Streaming Responses
- Authentication
- Docker Support
- Cloud Deployment
- Chat Export
- Conversation History Persistence

---

# Learning Outcomes

This project helped me understand:

- Building end-to-end RAG applications
- LangChain document processing
- Vector databases with FAISS
- Hugging Face embedding models
- FastAPI REST API development
- Frontend-backend integration using Next.js
- Prompt engineering for document question answering
- Building scalable AI applications

---

# Author

**Manish Jha**

AI Engineer | Python Developer | FastAPI | LangChain | Generative AI | Next.js

GitHub: https://github.com/your-username

LinkedIn: https://linkedin.com/in/your-profile

---

# ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates future improvements.

---

## License

This project is licensed under the **MIT License**.