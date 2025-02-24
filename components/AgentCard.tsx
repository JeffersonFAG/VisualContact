import { Agent } from "@/types";
import { useRouter } from "next/navigation";

import { CustomerListModal } from "./CustomerListModal";
import { StatusBadge } from "./StatusBadged";

export function AgentCard({ agent }: { agent: Agent }) {
  const router = useRouter();

  const handleAssign = (customerId: number) => {
    router.push(`/customers/${customerId}?agentId=${agent.id}`); // Redirige a la página del cliente
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 flex flex-col space-y-3">
      <h3 className="text-xl font-semibold">{agent.name}</h3>
      <StatusBadge statusId={agent.statusId} waitTime={agent.waitTime} />

      <div className="border-t pt-4 flex gap-3 justify-center">
        <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
          Cambiar Estado
        </button>
        {/* <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
          Llamar
        </button> */}
        <CustomerListModal
          onSelect={handleAssign}
          agentId={agent.id}
          statusId={agent.statusId}
        />
      </div>
    </div>
  );
}
