import { PropertyUpdateManyWithoutAgentsInput } from "./PropertyUpdateManyWithoutAgentsInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentUpdateInput = {
  email?: string | null;
  licenseNumber?: string | null;
  name?: string | null;
  phone?: string | null;
  properties?: PropertyUpdateManyWithoutAgentsInput;
  property?: PropertyWhereUniqueInput | null;
};
