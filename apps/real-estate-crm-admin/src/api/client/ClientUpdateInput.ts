import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  appointment?: AppointmentWhereUniqueInput | null;
  appointments?: AppointmentUpdateManyWithoutClientsInput;
  email?: string | null;
  name?: string | null;
  notes?: string | null;
  phone?: string | null;
};
