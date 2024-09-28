import { PropertyCreateNestedManyWithoutAgentsInput } from "./PropertyCreateNestedManyWithoutAgentsInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentCreateInput = {
  email?: string | null;
  licenseNumber?: string | null;
  name?: string | null;
  phone?: string | null;
  properties?: PropertyCreateNestedManyWithoutAgentsInput;
  property?: PropertyWhereUniqueInput | null;
};
