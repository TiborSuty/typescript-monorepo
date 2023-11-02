import {addDays, startOfToday} from 'date-fns';

import {TranslationInterpreter} from '../../TranslationProvider/TranslationProvider';
import {RelativeDate} from '../RelativeDate';

export function getDefaultRelativeDates(t: TranslationInterpreter): RelativeDate[] {
  const today = startOfToday();
  return [
    {date: addDays(today, -1), label: t('general.labels.yesterday')},
    {date: today, label: t('general.labels.today')},
    {date: addDays(today, 1), label: t('general.labels.tomorrow')},
  ];
}
