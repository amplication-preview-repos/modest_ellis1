import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PROPERTY_TITLE_FIELD } from "./PropertyTitle";
import { AGENT_TITLE_FIELD } from "../agent/AgentTitle";

export const PropertyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <ReferenceField label="Agent" source="agent.id" reference="Agent">
          <TextField source={AGENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Bathrooms" source="bathrooms" />
        <TextField label="Bedrooms" source="bedrooms" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Price" source="price" />
        <TextField label="Size" source="size" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Agent"
          target="propertyId"
          label="Agents"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="ID" source="id" />
            <TextField label="LicenseNumber" source="licenseNumber" />
            <TextField label="Name" source="name" />
            <TextField label="Phone" source="phone" />
            <ReferenceField
              label="Property"
              source="property.id"
              reference="Property"
            >
              <TextField source={PROPERTY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
