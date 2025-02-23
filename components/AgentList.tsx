import { Agent } from "@/types";
import { AgentCard } from "@/components/AgentCard";

const AgentList = ({ agents }: { agents: Agent[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {agents.map((agent) => (
        <AgentCard agent={agent} key={agent.id} />
      ))}
    </div>
  );
};

export default AgentList;
