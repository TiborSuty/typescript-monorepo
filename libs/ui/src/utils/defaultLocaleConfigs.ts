import {DayOfWeek} from '../types/DayOfWeek';
import {LocaleConfig} from '../types/LocaleConfig';

const defaultLocaleConfigFr: LocaleConfig = {
  language: 'fr',
  timezone: 'Europe/Paris',
  dateTimeFormat: {
    timeShort: 'H:mm',
    timeMedium: 'h:mm:ss aa',
    timeLong: 'H:mm:ss z',
    timeFull: 'H:mm:ss zzzz',
    dateShort: 'dd/MM/yyyy',
    dateMedium: 'd. MMMM yyyy',
    dateLong: 'EE, d. MMMM yyyy',
    dateFull: 'EEEE, d. MMMM yyyy',
    dateTimeShort: 'dd/MM/yyyy H:mm',
    dateTimeMedium: 'd. MMMM yyyy H:mm',
    dateTimeLong: 'd. MMMM yyyy H:mm:ss',
    dateTimeFull: 'EEEE, d. MMMM yyyy H:mm:ss',
  },
  calendar: {
    firstDayOfTheWeek: DayOfWeek.MONDAY,
  },
  number: {
    thousandsSeparator: '\xa0',
    decimalSeparator: ',',
  },
  currency: {
    thousandsSeparator: '\xa0',
    decimalSeparator: ',',
    position: 'after',
  },
};

const defaultLocaleConfigIt: LocaleConfig = {
  language: 'it',
  timezone: 'Europe/Rome',
  dateTimeFormat: {
    timeShort: 'H:mm',
    timeMedium: 'h:mm:ss aa',
    timeLong: 'H:mm:ss z',
    timeFull: 'H:mm:ss zzzz',
    dateShort: 'd/M/yyyy',
    dateMedium: 'd. MMMM yyyy',
    dateLong: 'EE, d. MMMM yyyy',
    dateFull: 'EEEE, d. MMMM yyyy',
    dateTimeShort: 'd/M/yyyy H:mm',
    dateTimeMedium: 'd. MMMM yyyy H:mm',
    dateTimeLong: 'd. MMMM yyyy H:mm:ss',
    dateTimeFull: 'EEEE, d. MMMM yyyy H:mm:ss',
  },
  calendar: {
    firstDayOfTheWeek: DayOfWeek.MONDAY,
  },
  number: {
    thousandsSeparator: '.',
    decimalSeparator: ',',
  },
  currency: {
    thousandsSeparator: '.',
    decimalSeparator: ',',
    position: 'after',
  },
};

const defaultLocaleConfigPl: LocaleConfig = {
  language: 'pl',
  timezone: 'Europe/Warsaw',
  dateTimeFormat: {
    timeShort: 'H:mm',
    timeMedium: 'H:mm:ss',
    timeLong: 'H:mm:ss z',
    timeFull: 'H:mm:ss zzzz',
    dateShort: 'd.MM.yyyy',
    dateMedium: 'd. MMMM yyyy',
    dateLong: 'EE, d. MMMM yyyy',
    dateFull: 'EEEE, d. MMMM yyyy',
    dateTimeShort: 'd.MM.yyyy H:mm',
    dateTimeMedium: 'd. MMMM yyyy H:mm',
    dateTimeLong: 'd. MMMM yyyy H:mm:ss',
    dateTimeFull: 'EEEE, d. MMMM yyyy H:mm:ss',
  },
  calendar: {
    firstDayOfTheWeek: DayOfWeek.MONDAY,
  },
  number: {
    thousandsSeparator: '\xa0',
    decimalSeparator: ',',
  },
  currency: {
    thousandsSeparator: '\xa0',
    decimalSeparator: ',',
    position: 'after',
  },
};

const defaultLocaleConfigDe: LocaleConfig = {
  language: 'de',
  timezone: 'Europe/Berlin',
  dateTimeFormat: {
    timeShort: 'H:mm',
    timeMedium: 'H:mm:ss',
    timeLong: 'H:mm:ss z',
    timeFull: 'H:mm:ss zzzz',
    dateShort: 'd.M.yyyy',
    dateMedium: 'd. MMMM yyyy',
    dateLong: 'EE, d. MMMM yyyy',
    dateFull: 'EEEE, d. MMMM yyyy',
    dateTimeShort: 'd.M.yyyy H:mm',
    dateTimeMedium: 'd. MMMM yyyy H:mm',
    dateTimeLong: 'd. MMMM yyyy H:mm:ss',
    dateTimeFull: 'EEEE, d. MMMM yyyy H:mm:ss',
  },
  calendar: {
    firstDayOfTheWeek: DayOfWeek.MONDAY,
  },
  number: {
    thousandsSeparator: '.',
    decimalSeparator: ',',
  },
  currency: {
    thousandsSeparator: '.',
    decimalSeparator: ',',
    position: 'after',
  },
};

const defaultLocaleConfigSk: LocaleConfig = {
  language: 'sk',
  timezone: 'Europe/Bratislava',
  dateTimeFormat: {
    timeShort: 'H:mm',
    timeMedium: 'H:mm:ss',
    timeLong: 'H:mm:ss z',
    timeFull: 'H:mm:ss zzzz',
    dateShort: 'd. M. yyyy',
    dateMedium: 'd. MMMM yyyy',
    dateLong: 'EE, d. MMMM yyyy',
    dateFull: 'EEEE, d. MMMM yyyy',
    dateTimeShort: 'd. M. yyyy H:mm',
    dateTimeMedium: 'd. MMMM yyyy H:mm',
    dateTimeLong: 'd. MMMM yyyy H:mm:ss',
    dateTimeFull: 'EEEE, d. MMMM yyyy H:mm:ss',
  },
  calendar: {
    firstDayOfTheWeek: DayOfWeek.MONDAY,
  },
  number: {
    thousandsSeparator: '\xa0',
    decimalSeparator: ',',
  },
  currency: {
    thousandsSeparator: '\xa0',
    decimalSeparator: ',',
    position: 'after',
  },
};

const defaultLocaleConfigEs: LocaleConfig = {
  language: 'es',
  timezone: 'Europe/Madrid',
  dateTimeFormat: {
    timeShort: 'H:mm',
    timeMedium: 'h:mm:ss aa',
    timeLong: 'H:mm:ss z',
    timeFull: 'H:mm:ss zzzz',
    dateShort: 'd/M/yyyy',
    dateMedium: 'd. MMMM yyyy',
    dateLong: 'EE, d. MMMM yyyy',
    dateFull: 'EEEE, d. MMMM yyyy',
    dateTimeShort: 'd/M/yyyy H:mm',
    dateTimeMedium: 'd. MMMM yyyy H:mm',
    dateTimeLong: 'd. MMMM yyyy H:mm:ss',
    dateTimeFull: 'EEEE, d. MMMM yyyy H:mm:ss',
  },
  calendar: {
    firstDayOfTheWeek: DayOfWeek.MONDAY,
  },
  number: {
    thousandsSeparator: '.',
    decimalSeparator: ',',
  },
  currency: {
    thousandsSeparator: '.',
    decimalSeparator: ',',
    position: 'after',
  },
};

const defaultLocaleConfigCs: LocaleConfig = {
  language: 'cs',
  timezone: 'Europe/Prague',
  dateTimeFormat: {
    timeShort: 'H:mm',
    timeMedium: 'H:mm:ss',
    timeLong: 'H:mm:ss z',
    timeFull: 'H:mm:ss zzzz',
    dateShort: 'd. M. yyyy',
    dateMedium: 'd. MMMM yyyy',
    dateLong: 'EE, d. MMMM yyyy',
    dateFull: 'EEEE, d. MMMM yyyy',
    dateTimeShort: 'd. M. yyyy H:mm',
    dateTimeMedium: 'd. MMMM yyyy H:mm',
    dateTimeLong: 'd. MMMM yyyy H:mm:ss',
    dateTimeFull: 'EEEE, d. MMMM yyyy H:mm:ss',
  },
  calendar: {
    firstDayOfTheWeek: DayOfWeek.MONDAY,
  },
  number: {
    thousandsSeparator: '\xa0',
    decimalSeparator: ',',
  },
  currency: {
    thousandsSeparator: '\xa0',
    decimalSeparator: ',',
    position: 'after',
  },
};

const defaultLocaleConfigEn: LocaleConfig = {
  language: 'en',
  timezone: 'Europe/London',
  dateTimeFormat: {
    timeShort: 'h:mm aa',
    timeMedium: 'h:mm:ss aa',
    timeLong: 'H:mm:ss z',
    timeFull: 'H:mm:ss zzzz',
    dateShort: 'M/d/yyyy',
    dateMedium: 'd. MMMM yyyy',
    dateLong: 'EE, d. MMMM yyyy',
    dateFull: 'EEEE, d. MMMM yyyy',
    dateTimeShort: 'M/d/yyyy h:mm aa',
    dateTimeMedium: 'd. MMMM yyyy h:mm aa',
    dateTimeLong: 'd. MMMM yyyy h:mm:ss aa',
    dateTimeFull: 'EEEE, d. MMMM yyyy H:mm:ss',
  },
  calendar: {
    firstDayOfTheWeek: DayOfWeek.SUNDAY,
  },
  number: {
    thousandsSeparator: ',',
    decimalSeparator: '.',
  },
  currency: {
    thousandsSeparator: ',',
    decimalSeparator: '.',
    position: 'before',
  },
};

export const defaultLocaleConfigs = {
  fr: defaultLocaleConfigFr,
  it: defaultLocaleConfigIt,
  pl: defaultLocaleConfigPl,
  de: defaultLocaleConfigDe,
  sk: defaultLocaleConfigSk,
  es: defaultLocaleConfigEs,
  cs: defaultLocaleConfigCs,
  en: defaultLocaleConfigEn,
} as const;
