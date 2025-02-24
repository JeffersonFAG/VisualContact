import { Customer } from "@/types";

export function ClientCard({ customer }: { customer: Customer }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {`${customer.name} `}
        </h3>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            customer.statusId === 1
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {customer.statusName} - {customer.waitTime} min
        </span>
      </div>
      <div className="border-t px-4 py-3 bg-gray-50 flex gap-3 justify-start">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition">
          Eliminar
        </button>

        {/* <button className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition">
          Llamar
        </button> */}
      </div>
    </div>
  );
}
