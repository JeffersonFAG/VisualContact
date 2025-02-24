import { useSearchParams, useRouter } from "next/navigation";
import { Status } from "@/types";

const AgentFilters = ({ statuses }: { statuses: Status[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const statusId = event.target.value;
    router.push(`/agents?statusId=${statusId}`);
  };

  return (
    <select
      onChange={handleFilterChange}
      defaultValue={searchParams.get("statusId") || ""}
      className="p-2 border border-gray-300 rounded-lg shadow-md"
    >
      <option value="">Todos</option>
      {statuses.map((status) => (
        <option key={status.id} value={status.id}>
          {status.name}
        </option>
      ))}
    </select>
  );
};

export default AgentFilters;
