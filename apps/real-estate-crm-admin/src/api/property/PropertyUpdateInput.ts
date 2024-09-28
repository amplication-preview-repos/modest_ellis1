import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AgentUpdateManyWithoutPropertiesInput } from "./AgentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  agent?: AgentWhereUniqueInput | null;
  agents?: AgentUpdateManyWithoutPropertiesInput;
  bathrooms?: number | null;
  bedrooms?: number | null;
  description?: string | null;
  price?: number | null;
  size?: number | null;
};
