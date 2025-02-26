import { useAssignAgent } from "@/hooks/useAssignAgent";
import { useCustomerWebSocket } from "@/hooks/useCustomerWebsocket";
import { AGENTS_STATUS } from "@/utils/constants";
import { useState } from "react";

export function CustomerListModal({
  onSelect,
  agentId,
  statusId,
}: {
  onSelect: (customerId: number) => void;
  agentId: number;
  statusId: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { customers } = useCustomerWebSocket();
  const { assignCustomerToAgent } = useAssignAgent();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`px-4 py-2 rounded transition ${
          statusId === AGENTS_STATUS.CALLING
            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        disabled={statusId === AGENTS_STATUS.CALLING}
      >
        Asignar
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">Selecciona un Cliente</h3>
            <ul className="space-y-2">
              {customers.length === 0 ? (
                <p className="text-gray-500">No hay clientes en espera</p>
              ) : (
                customers.map((customer) => (
                  <li
                    key={customer.id}
                    className="p-2 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 transition"
                    onClick={() => {
                      assignCustomerToAgent(customer.id, agentId);
                      onSelect(customer.id);
                      setIsOpen(false);
                    }}
                  >
                    {customer.name} - {customer.waitTime} min en espera
                  </li>
                ))
              )}
            </ul>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition w-full"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
