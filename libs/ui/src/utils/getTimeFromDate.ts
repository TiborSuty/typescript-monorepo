import {format} from 'date-fns';

import {TimeType} from '../types/TimeType';

export const getTimeFromDate = (date: Date): TimeType => format(date, 'HH:mm') as TimeType;
