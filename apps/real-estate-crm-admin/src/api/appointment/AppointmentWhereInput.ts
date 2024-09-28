import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ClientListRelationFilter } from "../client/ClientListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AppointmentWhereInput = {
  client?: ClientWhereUniqueInput;
  clients?: ClientListRelationFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  notes?: StringNullableFilter;
  time?: DateTimeNullableFilter;
};
