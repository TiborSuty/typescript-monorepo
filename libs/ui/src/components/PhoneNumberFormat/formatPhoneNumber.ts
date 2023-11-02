import {CountryCode, isSupportedCountry, parsePhoneNumber} from 'libphonenumber-js';

import {isEmpty, isNil} from 'ramda';
import {isNotNil} from 'ramda-adjunct';

import {Nullish} from 'shared';

export function formatPhoneNumber(
  phoneNumber: string | Nullish,
  defaultCountry?: CountryCode | Nullish
): string | null {
  if (isNil(phoneNumber) || isEmpty(phoneNumber)) return null;

  const countryCode =
    isNotNil(defaultCountry) && isSupportedCountry(defaultCountry) ? defaultCountry : undefined;

  try {
    return parsePhoneNumber(phoneNumber, countryCode)?.formatInternational() ?? phoneNumber;
  } catch (error) {
    return phoneNumber;
  }
}
