"use client";

import { useState } from "react";
import { Menu } from "./Menu";
import CustomerList from "./CustomerList";
import { useAppContext } from "@/context/AppContext";
import AgentList from "./AgentList";

export function ContactCenterDashboard({
  listType,
}: {
  listType: "clients" | "agents";
}) {
  const { agents, customers } = useAppContext();
  const [filter, setFilter] = useState("");

  return (
    <div className="flex flex-col md:flex-row">
      <Menu />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">
          {listType === "clients" ? "Client Dashboard" : "Agent Dashboard"}
        </h1>
        <input
          type="text"
          placeholder={`Filter ${listType}...`}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {listType === "clients" ? (
          <CustomerList customers={customers} />
        ) : (
          <AgentList agents={agents} />
        )}
      </div>
    </div>
  );
}
