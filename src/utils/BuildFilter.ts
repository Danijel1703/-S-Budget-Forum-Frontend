import { each, toString } from "lodash-es";

function BuildParams(filter?: object) {
  let params = "?";
  if (filter) {
    each(Object.keys(filter), (key) => {
      params = params + key + "=" + toString(filter[key as keyof {}]) + "&";
    });
    return params;
  } else {
    return "";
  }
}

export default BuildParams;
