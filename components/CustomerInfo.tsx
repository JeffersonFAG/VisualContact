import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/router";

export function CustomerInfo() {
  const { customers, customerStatuses } = useAppContext();
  const router = useRouter();
  const { id } = router.query;

  const customer = customers.find((c) => c.id === Number(id));

  if (!customer)
    return (
      <p className="text-center text-gray-500">Cliente no encontrado...</p>
    );

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold">{customer.name}</h2>
      <p className="text-gray-600">Correo: {customer.email}</p>
      <p className="text-gray-600">Teléfono: {customer.phone}</p>
      <p className="text-gray-600">
        Estado:{" "}
        {customerStatuses.find((s) => s.id === customer.statusId)?.name ||
          "Desconocido"}
      </p>
    </div>
  );
}
