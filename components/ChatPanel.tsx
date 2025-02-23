import { useState, useEffect } from "react";
import { useAppContext } from "@/context/AppContext";
import { useParams } from "next/navigation";

export function ChatPanel() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [message, setMessage] = useState("");
  const { customers, agents } = useAppContext();
  const params = useParams<{ id: string }>();

  const idClient = Number(params.id);
  const customer = customers.find((c) => c.id === idClient);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:4000/chat");

    socket.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages((prev) => [...prev, newMessage]);
    };

    return () => socket.close();
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages((prev) => [...prev, { sender: "Agente", text: message }]);
      setMessage("");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 h-full flex flex-col">
      <h3 className="text-xl font-semibold mb-4">Chat con {customer?.name}</h3>
      <div className="flex-1 overflow-y-auto space-y-2 mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-md ${
              msg.sender === "Agente"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-200 text-black self-start"
            }`}
          >
            <p className="text-sm">
              {msg.sender}: {msg.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-1 p-2 border rounded-l-md"
          placeholder="Escribe un mensaje..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
          onClick={sendMessage}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
