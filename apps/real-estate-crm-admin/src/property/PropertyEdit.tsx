import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { AgentTitle } from "../agent/AgentTitle";

export const PropertyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <ReferenceInput source="agent.id" reference="Agent" label="Agent">
          <SelectInput optionText={AgentTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="agents" reference="Agent">
          <SelectArrayInput
            optionText={AgentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Bathrooms" source="bathrooms" />
        <NumberInput step={1} label="Bedrooms" source="bedrooms" />
        <TextInput label="Description" multiline source="description" />
        <NumberInput label="Price" source="price" />
        <NumberInput step={1} label="Size" source="size" />
      </SimpleForm>
    </Edit>
  );
};
