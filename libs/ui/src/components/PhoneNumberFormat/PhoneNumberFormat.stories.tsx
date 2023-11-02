import {PhoneNumberFormat} from './PhoneNumberFormat';

export default {
  title: 'Locale/PhoneNumberFormat',
  component: PhoneNumberFormat,
};

export function Default() {
  return <PhoneNumberFormat phoneNumber="+420723123456" />;
}

export function WithCountry() {
  return <PhoneNumberFormat phoneNumber="723123456" defaultCountry="CZ" />;
}
