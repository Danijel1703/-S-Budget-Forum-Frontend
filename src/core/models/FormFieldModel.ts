type FormField = {
  fieldName: string;
  property: string;
  type: string;
  selectOptions?: object;
  fetchFunc?: Function;
};

export default FormField;
