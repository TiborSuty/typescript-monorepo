import {format} from 'date-fns';

import {curry} from 'ramda';

import {AppLanguage} from '../../../types/AppLanguage';
import {LocaleConfig} from '../../../types/LocaleConfig';
import {LocaleDateTimeFormat} from '../../../types/LocaleDateTimeFormat';
import {convertAppLanguageToDateFns} from '../../../utils/convertAppLanguageToDateFns';

function uncurriedFormatDateTime(
  localeConfig: LocaleConfig,
  language: AppLanguage,
  dateTimeFormat: LocaleDateTimeFormat,
  value: Date
) {
  const formatString = localeConfig.dateTimeFormat[dateTimeFormat];
  return format(value, formatString, {
    locale: convertAppLanguageToDateFns(language),
  });
}

export const formatDateTime = curry(uncurriedFormatDateTime);
