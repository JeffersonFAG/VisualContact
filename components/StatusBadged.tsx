import { statusLabels } from "@/utils/constants";

export function StatusBadge({
  statusId,
  waitTime,
}: {
  statusId: number;
  waitTime: number;
}) {
  const statusColors = [
    "",
    "bg-green-200 text-black",
    "bg-red-200 text-black",
    "bg-yellow-100 text-black",
    "bg-gray-300 text-black",
  ];
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[statusId]}`}
    >
      {statusLabels[statusId]} - {waitTime} Min
    </span>
  );
}
