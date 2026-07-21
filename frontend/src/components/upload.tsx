"use client";

import { useState } from "react";
import { uploadPDF } from "../services/api";

interface UploadProps {
    onUploadSuccess: () => void;
}

export default function Upload({
    onUploadSuccess,
}: UploadProps) {
    const [selectedFile, setSelectedFile] =
        useState<File | null>(null);

    const [loading, setLoading] = useState(false);

    const [message, setMessage] = useState("");

    const handleUpload = async () => {
        if (!selectedFile) {
            setMessage("Please select a PDF file.");
            return;
        }

        try {
            setLoading(true);

            const response = await uploadPDF(selectedFile);

            setMessage(response.message);

            onUploadSuccess();
        } catch (error) {
            console.error(error);

            setMessage("Upload failed.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">

            {/* File Input */}

            <div>

                <label className="block mb-2 text-white font-medium">
                    Select PDF
                </label>

                <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => {
                        if (e.target.files?.length) {
                            setSelectedFile(e.target.files[0]);
                            setMessage("");
                        }
                    }}
                    className="
          w-full
          rounded-xl
          border
          border-gray-300
          bg-white
          p-3
          text-gray-700
          file:mr-4
          file:rounded-lg
          file:border-0
          file:bg-blue-600
          file:px-4
          file:py-2
          file:text-white
          hover:file:bg-blue-700
          "
                />

            </div>

            {/* Selected File */}

            {selectedFile && (

                <div className="rounded-xl bg-white/20 p-4">

                    <p className="text-white">

                        📄

                        <span className="ml-2">

                            {selectedFile.name}

                        </span>

                    </p>

                </div>

            )}

            {/* Upload Button */}

            <button
                onClick={handleUpload}
                disabled={loading}
                className="
        w-full
        rounded-xlbg-gradient-to-r
        from-pink-500
        via-purple-500
        to-blue-600
        py-3
        text-lg
        font-semibold
        text-white
        shadow-lg
        transition
        duration-300
        hover:scale-[1.02]
        hover:shadow-2xl
        disabled:cursor-not-allowed
        disabled:opacity-50
        "
            >
                {loading ? "Uploading..." : "Upload PDF"}
            </button>

            {/* Message */}

            {message && (

                <div
                    className={`
          rounded-xl
          p-4
          text-center
          font-medium

          ${message.toLowerCase().includes("success")
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }
          `}
                >
                    {message}
                </div>

            )}

        </div>
    );
}