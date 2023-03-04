import { each, isFunction, map } from "lodash-es";
import { useState } from "react";
import Select from "react-select";
import { FormFieldTypes } from "src/constants";

type FormField = {
  fieldName: string;
  property: string;
  type: string;
  selectOptions?: object;
  fetchFunc?: Function;
};

function FormRenderer(props: {
  fields: FormField[];
  onSubmit: Function;
  isEdit?: boolean;
  submitPlaceholder: string;
}) {
  const fields: FormField[] = props.fields;
  const entity: any = {};
  const [selectOptions, setSelectOptions] = useState([]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(entity);
      }}
    >
      {map(fields, (field) => {
        const fetchFunc = isFunction(field.fetchFunc)
          ? field.fetchFunc
          : () => {};
        const getOptions = async () => {
          const options = await fetchFunc();
          each(options, (opt) => {
            opt.value = opt.id;
            opt.label = opt.name;
          });
          setSelectOptions(options);
        };
        return (
          <div>
            <p>{field.fieldName}</p>
            {field.type === FormFieldTypes.select ? (
              <Select onMenuOpen={getOptions} options={selectOptions} />
            ) : (
              <input
                type={field.type}
                onChange={(e) => (entity[field.property] = e.target.value)}
              />
            )}
          </div>
        );
      })}
      <input type="submit" value={props.submitPlaceholder} />
    </form>
  );
}

export default FormRenderer;
