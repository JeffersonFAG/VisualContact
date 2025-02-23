// context/AppContext.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  fetchAgents,
  fetchCustomers,
  fetchAgentStatuses,
  fetchCustomerStatuses,
} from "../services/api";
import { Agent, Customer, Status } from "../types";

interface AppContextType {
  agents: Agent[];
  customers: Customer[];
  agentStatuses: Status[];
  customerStatuses: Status[];
  updateAgentStatus: (agentId: number, newStatus: string) => void;
  updateCustomerStatus: (customerId: number, newStatus: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [agentStatuses, setAgentStatuses] = useState<Status[]>([]);
  const [customerStatuses, setCustomerStatuses] = useState<Status[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const [
        agentsData,
        customersData,
        agentStatusesData,
        customerStatusesData,
      ] = await Promise.all([
        fetchAgents(),
        fetchCustomers(),
        fetchAgentStatuses(),
        fetchCustomerStatuses(),
      ]);

      setAgents(agentsData);
      setCustomers(customersData);
      setAgentStatuses(agentStatusesData);
      setCustomerStatuses(customerStatusesData);
    };

    loadData();
  }, []);

  const updateCustomerStatus = (customerId: number, newStatus: string) => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === customerId
          ? { ...customer, statusName: newStatus }
          : customer
      )
    );
  };

  // **Función para actualizar el estado de un agent**
  const updateAgentStatus = (agentId: number, newStatus: string) => {
    setAgents((prevAgents) =>
      prevAgents.map((agent) =>
        agent.id === agentId ? { ...agent, statusName: newStatus } : agent
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        agents,
        customers,
        agentStatuses,
        customerStatuses,
        updateAgentStatus,
        updateCustomerStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within an AppProvider");
  return context;
};
