import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";

export const ClientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="appointment.id"
          reference="Appointment"
          label="Appointment"
        >
          <SelectInput optionText={AppointmentTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="appointments" reference="Appointment">
          <SelectArrayInput
            optionText={AppointmentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <TextInput label="Notes" multiline source="notes" />
        <TextInput label="Phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};
