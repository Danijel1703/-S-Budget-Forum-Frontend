import { each, find, isEmpty, isFunction, map, uniqueId } from "lodash-es";
import { useEffect, useState } from "react";
import Select from "react-select";
import { FormFieldTypes } from "src/constants";
import { FormFieldModel } from "src/core/models";

function FormRenderer(props: {
  fields: FormFieldModel[];
  onSubmit: Function;
  isEdit?: boolean;
  submitPlaceholder: string;
  defaultValues?: any;
}) {
  const { fields, onSubmit, isEdit, submitPlaceholder, defaultValues } = props;
  const entity: any = {};
  if (isEdit && !isEmpty(defaultValues)) {
    each(Object.keys(defaultValues), (key) => {
      entity[key] = defaultValues[key];
    });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(entity);
      }}
    >
      {map(fields, (field: FormFieldModel) => {
        const onSelect = (value: string) => {
          entity[field.property] = value;
        };
        return (
          <div key={uniqueId(field.property)}>
            <p>{field.fieldName}</p>
            {field.type === FormFieldTypes.select ? (
              <RenderSelect
                field={field}
                defaultValue={entity[field.property]}
                onSelect={onSelect}
              />
            ) : (
              <input
                type={field.type}
                defaultValue={entity[field.property]}
                onChange={(e) => (entity[field.property] = e.target.value)}
              />
            )}
          </div>
        );
      })}
      <input type="submit" value={submitPlaceholder} />
    </form>
  );
}

const RenderSelect = (props: {
  field: FormFieldModel;
  defaultValue: string;
  onSelect: Function;
}) => {
  const { field, defaultValue } = props;
  const [selectOptions, setSelectOptions] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [selectDefault, setSelectDefault] = useState<{
    label: string;
    value: string;
  }>();
  const fetchFunc = isFunction(field.fetchFunc) ? field.fetchFunc : () => {};
  const fetchOptions = async () => await fetchFunc();

  const initialize = async () => {
    setIsLoading(true);
    const options = await fetchOptions();
    const selectedDefault = find(
      options,
      (option) => option.id === defaultValue
    );
    setSelectDefault({
      label: selectedDefault.name,
      value: selectedDefault.id,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    initialize();
  }, []);

  const getOptions = async () => {
    const options = await fetchOptions();
    each(options, (opt) => {
      opt.value = opt.id;
      opt.label = opt.name;
    });
    setSelectOptions(options);
  };

  return !isLoading ? (
    <Select
      defaultValue={selectDefault}
      onMenuOpen={getOptions}
      options={selectOptions}
      onChange={(newValue) => props.onSelect(newValue?.value)}
    />
  ) : (
    <></>
  );
};

export default FormRenderer;
