// Represents a single chat message
export interface Message {
    role: "user" | "assistant";
    content: string;
}

// Response returned after uploading a PDF
export interface UploadResponse {
    message: string;
}

// Response returned by the chat API
export interface ChatResponse {
    answer: string;
}