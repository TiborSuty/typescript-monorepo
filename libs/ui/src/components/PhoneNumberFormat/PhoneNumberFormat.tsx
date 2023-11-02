import {CountryCode} from 'libphonenumber-js';

import {Nullish} from 'shared';

import {formatPhoneNumber} from './formatPhoneNumber';

interface PhoneNumberFormatProps {
  phoneNumber: string | Nullish;
  defaultCountry?: CountryCode | Nullish;
}

export function PhoneNumberFormat(props: PhoneNumberFormatProps) {
  return <>{formatPhoneNumber(props.phoneNumber, props.defaultCountry)}</>;
}
