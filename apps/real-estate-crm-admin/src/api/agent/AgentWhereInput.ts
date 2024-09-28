import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertyListRelationFilter } from "../property/PropertyListRelationFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  licenseNumber?: StringNullableFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  properties?: PropertyListRelationFilter;
  property?: PropertyWhereUniqueInput;
};
