import { ProjectUpdateManyWithoutCustomersInput } from "./ProjectUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  code?: string | null;
  name?: string | null;
  projects?: ProjectUpdateManyWithoutCustomersInput;
};
