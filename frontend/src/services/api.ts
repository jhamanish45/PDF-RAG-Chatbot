import axios from "axios";

// Create Axios instance
const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

// ---------------------------
// Upload PDF
// ---------------------------

export const uploadPDF = async (file: File) => {
    const formData = new FormData();

    formData.append("file", file);

    const response = await api.post("/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return response.data;
};

// ---------------------------
// Ask Question
// ---------------------------

export const askQuestion = async (question: string) => {
    const response = await api.post("/chat", {
        question,
    });

    return response.data;
};

export default api;