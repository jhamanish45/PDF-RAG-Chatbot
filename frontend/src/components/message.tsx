import { Message as MessageType } from "../types/chat";

interface MessageProps {
    message: MessageType;
}

export default function Message({ message }: MessageProps) {
    const isUser = message.role === "user";

    return (
        <div
            className={`flex ${isUser ? "justify-end" : "justify-start"
                } mb-4`}
        >
            <div
                className={`max-w-[85%] rounded-2xl px-5 py-4 shadow-lg

        ${isUser
                        ? "bg-gradient-to-rfrom-blue-500 to-indigo-600 text-white"
                        : "bg-white text-gray-800"
                    }`}
            >
                <div className="mb-2 flex items-center gap-2">

                    <span className="text-xl">
                        {isUser ? "👤" : "🤖"}
                    </span>

                    <span className="font-semibold">
                        {isUser ? "You" : "AI Assistant"}
                    </span>

                </div>

                <p className="whitespace-pre-wrap leading-7">
                    {message.content}
                </p>

            </div>
        </div>
    );
}