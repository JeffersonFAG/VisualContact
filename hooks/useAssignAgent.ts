import { useCustomerWebSocket } from "./useCustomerWebsocket";
import { useAppContext } from "@/context/AppContext";

export function useAssignAgent() {
  const { updateCustomerStatus, updateAgentStatus } = useAppContext();
  const { sendUpdate } = useCustomerWebSocket(); // WebSocket para actualización en tiempo real

  const assignCustomerToAgent = async (customerId: number, agentId: number) => {
    try {
      // Hacer la petición al backend para actualizar el estado en la base de datos
      await fetch("/api/update-status", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerId,
          agentId,
          customerStatus: "En llamada",
          agentStatus: "Siendo atendido",
        }),
      });

      // Actualizar el estado en el contexto global
      updateCustomerStatus(customerId, "Siendo atendido");
      updateAgentStatus(agentId, "En llamada");

      // Emitir un evento WebSocket para actualizar en otros clientes
      sendUpdate({
        type: "UPDATE_CUSTOMER",
        customer: {
          id: customerId,
          assignedAgent: agentId,
          status: "Siendo atendido",
        },
      });

      sendUpdate({
        type: "UPDATE_AGENT",
        agent: { id: agentId, status: "En llamada" },
      });
    } catch (error) {
      console.error("Error al actualizar estado:", error);
    }
  };

  return { assignCustomerToAgent };
}
