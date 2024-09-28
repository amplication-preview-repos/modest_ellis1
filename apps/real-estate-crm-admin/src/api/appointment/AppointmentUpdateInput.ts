import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ClientUpdateManyWithoutAppointmentsInput } from "./ClientUpdateManyWithoutAppointmentsInput";

export type AppointmentUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  clients?: ClientUpdateManyWithoutAppointmentsInput;
  date?: Date | null;
  notes?: string | null;
  time?: Date | null;
};
