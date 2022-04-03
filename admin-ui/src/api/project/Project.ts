import { Customer } from "../customer/Customer";

export type Project = {
  createdAt: Date;
  customerId?: Customer;
  id: string;
  name: string | null;
  updatedAt: Date;
};
