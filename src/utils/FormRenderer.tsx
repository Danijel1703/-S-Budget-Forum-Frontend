import { map } from "lodash-es";
import React from "react";

type FormField = {
  fieldName: string;
  property: string;
  type: string;
};

function FormRenderer(props: {
  fields: FormField[];
  onSubmit: Function;
  submitPlaceholder: string;
}) {
  const fields: FormField[] = props.fields;
  const entity: any = {};
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(entity);
      }}
    >
      {map(fields, (field) => {
        return (
          <div>
            <p>{field.fieldName}</p>
            <input
              type={field.type}
              onChange={(e) => (entity[field.property] = e.target.value)}
            />
          </div>
        );
      })}
      <input type="submit" value={props.submitPlaceholder} />
    </form>
  );
}

export default FormRenderer;
