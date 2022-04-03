import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ProjectUpdateInput = {
  customerId?: CustomerWhereUniqueInput;
  name?: string | null;
};
