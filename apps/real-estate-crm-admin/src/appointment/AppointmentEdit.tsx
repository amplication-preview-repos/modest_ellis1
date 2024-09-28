import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";

export const AppointmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="clients" reference="Client">
          <SelectArrayInput
            optionText={ClientTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Notes" multiline source="notes" />
        <DateTimeInput label="Time" source="time" />
      </SimpleForm>
    </Edit>
  );
};
