import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClientWhereInput = {
  appointment?: AppointmentWhereUniqueInput;
  appointments?: AppointmentListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  notes?: StringNullableFilter;
  phone?: StringNullableFilter;
};
