import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  appointment?: AppointmentWhereUniqueInput | null;
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
  email?: string | null;
  name?: string | null;
  notes?: string | null;
  phone?: string | null;
};
