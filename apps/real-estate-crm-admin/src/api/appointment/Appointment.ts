import { Client } from "../client/Client";

export type Appointment = {
  client?: Client | null;
  clients?: Array<Client>;
  createdAt: Date;
  date: Date | null;
  id: string;
  notes: string | null;
  time: Date | null;
  updatedAt: Date;
};
