import {useLocale} from '../../hooks/useLocale';
import {LocaleDateTimeFormat} from '../../types/LocaleDateTimeFormat';
import {formatDateTime} from './utils/formatDateTime';

export function useDateTimeFormatter() {
  const {localeConfig, language} = useLocale();

  return (dateTimeFormat: LocaleDateTimeFormat, value: Date) =>
    formatDateTime(localeConfig, language, dateTimeFormat, value);
}
