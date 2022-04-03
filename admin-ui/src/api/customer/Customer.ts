import { Project } from "../project/Project";

export type Customer = {
  code: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  projects?: Array<Project>;
  updatedAt: Date;
};
