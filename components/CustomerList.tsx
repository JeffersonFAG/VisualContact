import { Customer } from "../types";
import { ClientCard } from "./CustomerCard";

interface CustomerListProps {
  customers: Customer[];
}

const CustomerList: React.FC<CustomerListProps> = ({ customers }) => {
  return (
    <div className="grid gap-4 w-full max-w-5xl sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {customers.map((customer) => (
        <ClientCard key={customer.id} customer={customer} />
      ))}
    </div>
  );
};

export default CustomerList;
