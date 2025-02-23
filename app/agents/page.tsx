"use client";
import { useSearchParams } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import AgentFilters from "@/components/AgentFilters";
import AgentList from "@/components/AgentList";
import { useCustomerWebSocket } from "@/hooks/useCustomerWebsocket";

const AgentsPage = () => {
  const { agentStatuses } = useAppContext();
  const { agents } = useCustomerWebSocket();
  const searchParams = useSearchParams();

  const statusId = searchParams.get("statusId");
  const filteredAgents = statusId
    ? agents.filter((agent) => agent.statusId === Number(statusId))
    : agents;

  return (
    <div className="p-5 bg-gray-100 min-h-screen flex flex-col items-start">
      <h1 className="text-3xl font-bold mb-4 mt-4 text-center ">Agentes</h1>
      <AgentFilters statuses={agentStatuses} />
      <AgentList agents={filteredAgents} />
    </div>
  );
};

export default AgentsPage;
