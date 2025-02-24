"use client";
import { useSearchParams } from "next/navigation";
import CustomerFilters from "@/components/CustomerFilters";
import CustomerList from "@/components/CustomerList";
import { useCustomerWebSocket } from "@/hooks/useCustomerWebsocket";
import Loading from "@/components/Loading";

const CustomersPage = () => {
  const searchParams = useSearchParams();
  const { customers } = useCustomerWebSocket();

  const maxWaitTime = searchParams.get("maxWaitTime");
  const filteredCustomers = maxWaitTime
    ? customers.filter((customer) => customer.waitTime <= Number(maxWaitTime))
    : customers;

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden w-full"
      style={{
        background: `radial-gradient(circle at 20% 10%, #1e3a8a, #064e3b, #111827)`,
        transition: "background-position 0.1s linear",
      }}
    >
      <div className="absolute inset-0 bg-opacity-50 animate-pulse"></div>

      <div className="relative flex flex-col items-center justify-center w-full max-w-4xl p-10">
        {/* Elemento decorativo con forma futurista */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-gradient-to-br from-blue-500 to-green-400 rounded-full opacity-30 blur-3xl"></div>

        {/* Contenedor principal con efecto vidrio */}
        <div className="relative w-full bg-white/10 backdrop-blur-xl shadow-lg rounded-3xl p-8 md:p-12 border border-white/20">
          {/* Título con efectos llamativos */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-400 mb-4 drop-shadow-md">
            Clientes en Espera
          </h1>

          {/* Descripción optimizada */}
          <p className="text-base sm:text-lg md:text-xl text-white mb-6">
            Optimiza la gestión de tus clientes con nuestra tecnología avanzada.
            Filtra clientes y accede a la información en tiempo real con total
            precisión.
          </p>

          {/* Filtros y lista con un layout más armónico */}
          <div className="w-full flex flex-col items-center space-y-6">
            <CustomerFilters />
            {filteredCustomers?.length === 0 ? (
              <Loading />
            ) : (
              <CustomerList customers={filteredCustomers} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CustomersPage;
