import { AGENTS_STATUS, statusColors, statusLabels } from "@/utils/constants";

export function StatusBadge({
  statusId,
  waitTime,
}: {
  statusId: number;
  waitTime: number;
}) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[statusId]}`}
    >
      {statusLabels[statusId]} - {waitTime} Min
    </span>
  );
}
