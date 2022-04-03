import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ProjectCreateInput = {
  customerId: CustomerWhereUniqueInput;
  name?: string | null;
};
