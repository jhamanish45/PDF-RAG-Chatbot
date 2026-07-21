from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough,RunnableParallel,RunnableLambda

from llm.groq_model import get_llm
from retriever.retriever import get_retriever

parser = StrOutputParser()

def format_docs(docs):
    """
    Combine retrieved documents into a single string.
    """
    return "\n\n".join(doc.page_content for doc in docs)


def create_rag_chain():

    retriever = get_retriever()

    llm = get_llm()

    prompt = ChatPromptTemplate.from_template(
        """
You are a helpful AI assistant.

Answer ONLY using the provided context.

If the answer is not present in the context, say:

"I couldn't find that information in the uploaded PDF."

Context:
{context}

Question:
{question}

Answer:
"""
    )

    parallel_chain = RunnableParallel({
    'context': retriever | RunnableLambda(format_docs),
    'question': RunnablePassthrough()
})

    rag_chain =parallel_chain | prompt | llm | parser

    return rag_chain