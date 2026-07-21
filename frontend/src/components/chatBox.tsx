"use client";

import { useState } from "react";
import { askQuestion } from "../services/api";
import Message from "../components/message";
import { Message as MessageType } from "../types/chat";

export default function ChatBox() {
    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState<MessageType[]>([]);
    const [loading, setLoading] = useState(false);

    const handleAsk = async () => {
        if (!question.trim()) return;

        // User Message
        const userMessage: MessageType = {
            role: "user",
            content: question,
        };

        setMessages((prev) => [...prev, userMessage]);

        const currentQuestion = question;
        setQuestion("");

        try {
            setLoading(true);

            const response = await askQuestion(currentQuestion);

            const aiMessage: MessageType = {
                role: "assistant",
                content: response.answer,
            };

            setMessages((prev) => [...prev, aiMessage]);
        } catch (error) {
            console.error(error);

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "❌ Something went wrong. Please try again.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flexh-[600px] flex-col rounded-2xl bg-white/10 p-6 backdrop-blur-lg">

            {/* Chat Messages */}
            <div className="mb-4 flex-1 overflow-y-auto rounded-xl bg-white/10 p-4">

                {messages.length === 0 ? (
                    <div className="flex h-full items-center justify-center">

                        <div className="text-center text-white">

                            <div className="text-6xl mb-4">
                                🤖
                            </div>

                            <h2 className="text-2xl font-bold">
                                AI Assistant
                            </h2>

                            <p className="mt-2 text-gray-200">
                                Ask anything about your uploaded PDF.
                            </p>

                        </div>

                    </div>
                ) : (
                    messages.map((message, index) => (
                        <Message
                            key={index}
                            message={message}
                        />
                    ))
                )}

            </div>

            {/* Loading */}
            {loading && (
                <div className="mb-3 text-white animate-pulse">
                    🤖 AI is thinking...
                </div>
            )}

            {/* Input Area */}
            <div className="flex flex-col gap-4 md:flex-row">

                <input
                    type="text"
                    value={question}
                    placeholder="Ask a question..."
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleAsk();
                        }
                    }}
                    className="
            flex-1
            rounded-xl
            border
            border-gray-300
            bg-white
            p-4
            text-gray-800
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
                />

                <button
                    onClick={handleAsk}
                    disabled={loading}
                    className="
            rounded-xlbg-gradient-to-r
            from-cyan-500
            to-blue-600
            px-8
            py-4
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-2xl
            disabled:opacity-50
          "
                >
                    {loading ? "Thinking..." : "Ask AI"}
                </button>

            </div>

        </div>
    );
}