"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import { Agent } from "@/types";
import AgentFilters from "@/components/AgentFilters";
import AgentList from "@/components/AgentList";

const AgentsPage = () => {
  const { agentStatuses } = useAppContext();
  const searchParams = useSearchParams();

  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:4000");
    socket.onmessage = (event) => {
      const { type, agents } = JSON.parse(event.data);

      setAgents(agents);
      // if (type === "UPDATE_AGENTS") {
      //   setAgents(agents);
      // }
    };
    return () => socket.close();
  }, []);

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
