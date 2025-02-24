import { Agent } from "@/types";
import { AgentCard } from "@/components/AgentCard";

const AgentList = ({ agents }: { agents: Agent[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full px-4">
      {agents.map((agent) => (
        <AgentCard agent={agent} key={agent.id} />
      ))}
    </div>
  );
};

export default AgentList;
