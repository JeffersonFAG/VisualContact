import { useState, useEffect, useRef } from "react";
import { Agent, Customer } from "@/types";

export function useCustomerWebSocket() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [agents, setAgents] = useState<Agent[]>([]);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:4000");
    socketRef.current = socket; // Guardar referencia

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
          console.warn("Mensaje WebSocket no manejado:", data);
      }
    };

    socket.onclose = () => {
      console.warn("WebSocket desconectado.");
      socketRef.current = null;
    };

    return () => socket.close();
  }, []);

  const sendUpdate = (message: object) => {
    if (!socketRef.current || socketRef.current.readyState !== WebSocket.OPEN) {
      console.error("WebSocket no está conectado.");
      return;
    }

    socketRef.current.send(JSON.stringify(message));
  };

  return { customers, agents, sendUpdate };
}
