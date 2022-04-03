import { ProjectCreateNestedManyWithoutCustomersInput } from "./ProjectCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  code?: string | null;
  name?: string | null;
  projects?: ProjectCreateNestedManyWithoutCustomersInput;
};
