import { Agent } from "../agent/Agent";

export type Property = {
  address: string | null;
  agent?: Agent | null;
  agents?: Array<Agent>;
  bathrooms: number | null;
  bedrooms: number | null;
  createdAt: Date;
  description: string | null;
  id: string;
  price: number | null;
  size: number | null;
  updatedAt: Date;
};
