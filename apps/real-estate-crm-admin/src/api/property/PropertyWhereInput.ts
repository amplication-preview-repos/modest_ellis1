import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AgentListRelationFilter } from "../agent/AgentListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  agent?: AgentWhereUniqueInput;
  agents?: AgentListRelationFilter;
  bathrooms?: IntNullableFilter;
  bedrooms?: IntNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  size?: IntNullableFilter;
};
