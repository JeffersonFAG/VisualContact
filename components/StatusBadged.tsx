export function StatusBadge({ statusId }: { statusId: number }) {
  const statusColors = [
    "",
    "bg-green-200 text-black",
    "bg-red-200 text-black",
    "bg-yellow-100 text-black",
    "bg-gray-300 text-black",
  ];

  const statusLabels = [
    "",
    "Disponible",
    "Ocupado",
    "En Pausa",
    "Desconectado",
  ];

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[statusId]}`}
    >
      {statusLabels[statusId]}
    </span>
  );
}
