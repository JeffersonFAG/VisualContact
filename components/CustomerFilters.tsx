import { useSearchParams, useRouter } from "next/navigation";

const CustomerFilters: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maxWaitTime = event.target.value;
    router.push(`/customers?maxWaitTime=${maxWaitTime}`);
  };

  return (
    <div className="w-full max-w-md mb-6">
      <input
        type="number"
        placeholder="Tiempo máximo de espera"
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
        onChange={handleFilterChange}
        defaultValue={searchParams.get("maxWaitTime") || ""}
      />
    </div>
  );
};

export default CustomerFilters;
