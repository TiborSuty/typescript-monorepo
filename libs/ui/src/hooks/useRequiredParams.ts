import {useParams} from 'react-router-dom';

import {isNil} from 'ramda';
import {isNilOrEmpty, isString} from 'ramda-adjunct';

/**
 * @returns validated object with non-nullish type
 * @example const {id, type} = useRequiredParams()
 * // id and type are both validated and type string
 */
export function useRequiredParams<T extends Record<string, string> = Record<string, string>>(
  fallback?: () => void
) {
  const params = useParams();
  const initialParams = params as T;

  const proxiedArray = new Proxy(initialParams, {
    // for every parameter that we are trying to get form returned object,
    // this get `get` function is called (before the param is returned)
    get: (_, prop) => {
      // check if the property we are asking is string
      // this is merely type-check, + it filters out this instances `useRequiredParams()[1]` etc
      if (!isString(prop)) throw new Error(`requested property must be a string`);

      // get targeted prop
      const targetedParam = params[prop];

      // do the validation required by hook -> check if property is present to ensure return non-nullish return type
      if (isNilOrEmpty(targetedParam)) {
        if (isNil(fallback)) throw new Error(`missing parameter ${prop} in url`);
        else fallback();
      }

      // return the validated param
      return targetedParam;
    },
  });

  // return shall object, that validates every property `get`;
  return proxiedArray;
}
