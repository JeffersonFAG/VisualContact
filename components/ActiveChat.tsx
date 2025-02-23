import { useAppContext } from "@/context/AppContext";
import { useSearchParams } from "next/navigation";

export function ActiveChat() {
  const { customers, agents, agentStatuses, customerStatuses } =
    useAppContext();
  // const searchParams = useSearchParams();
  // const id = searchParams.get("id");

  //Verificar como obtener los params de laURL
  const customer = customers.find((c) => c.id === 7);
  if (!customer)
    return <p className="text-center text-gray-500">Cliente no encontrado</p>;

  const agent = agents.find((a) => a.id === 3);
  const agentStatus =
    agentStatuses.find((s) => s.id === agent?.statusId)?.name || "Desconocido";
  const customerStatus =
    customerStatuses.find((s) => s.id === customer.statusId)?.name ||
    "Desconocido";

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Chat Activo</h3>
      <div className="space-y-4">
        <div className="border-b pb-3">
          <p className="text-md font-medium">Cliente: {customer.name}</p>
          <p className="text-sm text-gray-500">Estado: {customerStatus}</p>
        </div>
        <div>
          <p className="text-md font-medium">
            Agente: {agent ? agent.name : "Sin asignar"}
          </p>
          <p className="text-sm text-gray-500">Estado: {agentStatus}</p>
        </div>
      </div>
    </div>
  );
}
