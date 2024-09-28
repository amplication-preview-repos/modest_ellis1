import { Appointment } from "../appointment/Appointment";

export type Client = {
  appointment?: Appointment | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  notes: string | null;
  phone: string | null;
  updatedAt: Date;
};
