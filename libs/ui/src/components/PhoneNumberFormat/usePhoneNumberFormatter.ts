import {CountryCode} from 'libphonenumber-js';

import {Nullish} from 'shared';

import {formatPhoneNumber} from './formatPhoneNumber';

export type PhoneNumberFormatter = (
  phoneNumber: string | Nullish,
  defaultCountry?: CountryCode | Nullish
) => string | null;

export function usePhoneNumberFormatter(): PhoneNumberFormatter {
  return formatPhoneNumber;
}
