import {useLocale} from '../../hooks/useLocale';
import {LocaleDateTimeFormat} from '../../types/LocaleDateTimeFormat';
import {formatDateTime} from './utils/formatDateTime';

interface DateTimeFormatProps {
  value: Date;
  format: LocaleDateTimeFormat;
}

export function DateTimeFormat(props: DateTimeFormatProps) {
  const {localeConfig, language} = useLocale();

  return <>{formatDateTime(localeConfig, language, props.format, props.value)}</>;
}
