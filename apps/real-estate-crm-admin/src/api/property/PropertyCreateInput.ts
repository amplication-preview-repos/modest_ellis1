import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AgentCreateNestedManyWithoutPropertiesInput } from "./AgentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  agent?: AgentWhereUniqueInput | null;
  agents?: AgentCreateNestedManyWithoutPropertiesInput;
  bathrooms?: number | null;
  bedrooms?: number | null;
  description?: string | null;
  price?: number | null;
  size?: number | null;
};
