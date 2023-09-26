import { hashString } from '../misc/hash';

export const HelperService = {
  /* A function that returns a promise that resolves to a string. */
  hashString: (string: string): Promise<string> => {
    return hashString(string);
  },
};
