"use client";
import { useSearchParams } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import AgentFilters from "@/components/AgentFilters";
import AgentList from "@/components/AgentList";
import { useCustomerWebSocket } from "@/hooks/useCustomerWebsocket";
import Loading from "@/components/Loading";
import { Title } from "@/components/Title";
import { DescriptionText } from "@/components/DescriptionText";

const AgentsPage = () => {
  const { agentStatuses } = useAppContext();
  const { agents } = useCustomerWebSocket();
  const searchParams = useSearchParams();

  const statusId = searchParams.get("statusId");
  const filteredAgents = statusId
    ? agents.filter((agent) => agent.statusId === Number(statusId))
    : agents;

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
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-gradient-to-br from-blue-500 to-green-400 rounded-full opacity-30 blur-3xl"></div>

        <div className="">
          <Title title="Agentes Disponibles" />
          <DescriptionText description=" Gestiona y filtra agentes en tiempo real con nuestra avanzada tecnología." />

          <div className="w-full flex flex-col items-starts space-y-6">
            <div className="relative flex justify-start items-start z-10">
              <AgentFilters statuses={agentStatuses} />
            </div>

            {filteredAgents?.length === 0 ? (
              <Loading />
            ) : (
              <AgentList agents={filteredAgents} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AgentsPage;
