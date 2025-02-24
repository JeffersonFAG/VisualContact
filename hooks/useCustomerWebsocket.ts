import { useState, useEffect, useRef } from "react";
import { Agent, Customer } from "@/types";

export function useCustomerWebSocket() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [agents, setAgents] = useState<Agent[]>([]);
  const socketRef = useRef<WebSocket | null>(null);
  const reconnectRef = useRef<number>(0); // Control de intentos de reconexión
  const reconnectTimer = useRef<NodeJS.Timeout | null>(null);

  const connectWebSocket = () => {
    if (socketRef.current) return; // Evita conexiones múltiples

    console.log("Connecting WebSocket...");
    const socket = new WebSocket("ws://localhost:4000");
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("WebSocket connected");
      reconnectRef.current = 0; // Reinicia contador de reconexión
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      switch (data.type) {
        case "INIT":
          setCustomers(
            data.customers.sort((a: any, b: any) => b.waitTime - a.waitTime)
          );
          setAgents(data.agents);
          break;
        case "UPDATE_CUSTOMER":
          setCustomers((prev) =>
            prev.map((customer) =>
              customer.id === data.customer.id
                ? { ...customer, ...data.customer }
                : customer
            )
          );
          break;
        case "UPDATE_AGENT":
          setAgents((prev) =>
            prev.map((agent) =>
              agent.id === data.agent.id ? { ...agent, ...data.agent } : agent
            )
          );
          break;
        default:
          console.warn("Message no defined into websoket:", data);
      }
    };

    socket.onclose = () => {
      console.warn("WebSocket diconnect. Try again reconnect");
      socketRef.current = null;
      attemptReconnect();
    };

    socket.onerror = (error) => {
      console.log(" Error on WebSocket:", error);
      socket.close(); // Cierra el socket en caso de error
    };
  };

  const attemptReconnect = () => {
    if (reconnectRef.current >= 5) {
      console.error("Max try iteraction connection");
      return;
    }

    const delay = Math.min(1000 * 2 ** reconnectRef.current, 30000); // Exponential backoff
    console.log(`Reconection ${delay / 1000}s...`);

    reconnectTimer.current = setTimeout(() => {
      reconnectRef.current += 1;
      connectWebSocket();
    }, delay);
  };

  useEffect(() => {
    connectWebSocket();

    return () => {
      console.log("Closing WebSocket...");
      if (socketRef.current) socketRef.current.close();
      if (reconnectTimer.current) clearTimeout(reconnectTimer.current);
    };
  }, []);

  return { customers, agents };
}
