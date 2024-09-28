import { Property } from "../property/Property";

export type Agent = {
  createdAt: Date;
  email: string | null;
  id: string;
  licenseNumber: string | null;
  name: string | null;
  phone: string | null;
  properties?: Array<Property>;
  property?: Property | null;
  updatedAt: Date;
};
