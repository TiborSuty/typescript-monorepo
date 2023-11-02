import {AppLanguage} from './AppLanguage';
import {DayOfWeek} from './DayOfWeek';
import {LocaleDateTimeFormat} from './LocaleDateTimeFormat';

export type LocaleConfig = {
  timezone: string;
  language: AppLanguage;
  dateTimeFormat: {
    [D in LocaleDateTimeFormat]: string;
  };
  calendar: {
    firstDayOfTheWeek: DayOfWeek;
  };
  number: {
    thousandsSeparator: string;
    decimalSeparator: string;
  };
  currency: {
    thousandsSeparator: string;
    decimalSeparator: string;
    position: 'before' | 'after';
  };
};
