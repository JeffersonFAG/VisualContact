export interface Agent {
  id: number;
  name: string;
  surname: string;
  statusId: number;
  statusName: string;
  waitTime: number;
}

export interface serviceHistoryCustomer {
  agentId: number;
  id: number;
  timestamp: number;
  waitTime: number;
}

export interface Customer {
  id: number;
  name: string;
  waitTime: number;
  surname: string;
  statusId: number;
  statusName: string;
  serviceHistory: [];
  email?: string;
  phone?: number;
}

export interface Status {
  id: number;
  name: string;
}

export interface ButtonRedirect {
  title: string;
  path: string;
}
