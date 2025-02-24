import { BASE_URL } from "@/utils/constants";
import { useAppContext } from "@/context/AppContext";

export function useAssignAgent() {
  const { updateCustomerStatus, updateAgentStatus } = useAppContext();

  const assignCustomerToAgent = async (customerId: number, agentId: number) => {
    try {
      await fetch(`${BASE_URL.BASE_LOCAL}/api/update-status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerId,
          agentId,
          customerStatus: "Siendo atendido",
          agentStatus: "En llamada",
        }),
      });

      updateCustomerStatus(customerId, "Siendo atendido");
      updateAgentStatus(agentId, "En llamada");
    } catch (error) {
      console.error("Error al actualizar estado:", error);
    }
  };

  return { assignCustomerToAgent };
}
