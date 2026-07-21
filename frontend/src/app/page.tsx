"use client";

import { useState } from "react";
import Upload from "../components/upload";
import ChatBox from "../components/chatBox";

export default function Home() {
  const [uploaded, setUploaded] = useState(false);

  return (
    <main className="min-h-screen px-4 py-8">

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-10">

          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            📄 PDF RAG Chatbot
          </h1>

          <p className="mt-4 text-lg text-blue-100">
            Upload your PDF and ask questions using AI
          </p>

        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Upload Section */}
          <div className="rounded-3xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl p-8">

            <h2 className="text-3xl font-bold text-white mb-6">
              📤 Upload PDF
            </h2>

            <Upload
              onUploadSuccess={() => setUploaded(true)}
            />

          </div>

          {/* Chat Section */}
          <div className="rounded-3xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl p-8">

            <h2 className="text-3xl font-bold text-white mb-6">
              💬 Ask Questions
            </h2>

            {uploaded ? (
              <ChatBox />
            ) : (
              <div className="flex h-72 items-center justify-center rounded-2xl border-2 border-dashed border-white/40">

                <div className="text-center">

                  <div className="text-6xl mb-4">
                    📄
                  </div>

                  <p className="text-white text-lg font-medium">
                    Upload a PDF to start chatting
                  </p>

                </div>

              </div>
            )}

          </div>

        </div>

      </div>

    </main>
  );
}