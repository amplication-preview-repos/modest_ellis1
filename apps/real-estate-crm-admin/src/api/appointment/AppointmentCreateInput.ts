import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ClientCreateNestedManyWithoutAppointmentsInput } from "./ClientCreateNestedManyWithoutAppointmentsInput";

export type AppointmentCreateInput = {
  client?: ClientWhereUniqueInput | null;
  clients?: ClientCreateNestedManyWithoutAppointmentsInput;
  date?: Date | null;
  notes?: string | null;
  time?: Date | null;
};
