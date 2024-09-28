import { SortOrder } from "../../util/SortOrder";

export type AgentOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  licenseNumber?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  propertyId?: SortOrder;
  updatedAt?: SortOrder;
};
