export const menuItems = [
  { name: "Clients", href: "/customers", id: 2 },
  { name: "Agents", href: "/agents", id: 3 },
  { name: "Reports", href: "#", id: 4 },
  { name: "Settings", href: "#", id: 5 },
];

export const BASE_URL = {
  BASE_LOCAL: "http://localhost:4000",
};

export const AGENTS_STATUS = {
  ENABLE: 1,
  CALLING: 2,
  ON_HOLD: 3,
  OFF_LINE: 4,
};

export const CUSTOMER_STATUS = {
  ON_HOLD: 1,
  BEING_ATTENDED: 2,
  ATTENDED: 3,
};
