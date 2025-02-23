import { Agent, Customer, Status } from "@/types";

export const fetchAgents = async (statusId?: number): Promise<Agent[]> => {
  const url = statusId
    ? `http://localhost:4000/api/agents?statusId=${statusId}`
    : "http://localhost:4000/api/agents";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchCustomers = async (
  maxWaitTime?: number
): Promise<Customer[]> => {
  const url = maxWaitTime
    ? `http://localhost:4000/api/customers?maxWaitTime=${maxWaitTime}`
    : "http://localhost:4000/api/customers";
  const response = await fetch(url);
  return await response.json();
};

export const fetchAgentStatuses = async (): Promise<Status[]> => {
  const response = await fetch("http://localhost:4000/api/agent-statuses");
  return response.json();
};

export const fetchCustomerStatuses = async (): Promise<Status[]> => {
  const response = await fetch("http://localhost:4000/api/customer-statuses");
  return await response.json();
};
