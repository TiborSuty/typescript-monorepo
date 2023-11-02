import {parseDate} from 'shared';

import {defaultLocaleConfigs} from '../../../utils/defaultLocaleConfigs';
import {formatDateTime} from '../utils/formatDateTime';

const formatDateTimeCs = formatDateTime(defaultLocaleConfigs.cs, 'cs');

describe('formatDateTime', () => {
  it('should return formatted date time for cs locale', () => {
    expect(formatDateTimeCs('dateTimeShort', parseDate('2003-04-30T17:03:59'))).toEqual(
      '30. 4. 2003 17:03'
    );

    expect(formatDateTimeCs('dateTimeMedium', parseDate('2003-04-30T17:03:59'))).toEqual(
      '30. dubna 2003 17:03'
    );

    expect(formatDateTimeCs('dateTimeLong', parseDate('2003-04-30T17:03:59'))).toEqual(
      '30. dubna 2003 17:03:59'
    );
  });

  it('should return UTC time formatted with cs timezone', () => {
    expect(formatDateTimeCs('dateTimeShort', parseDate('2003-04-20T23:30:00.000Z'))).toEqual(
      '21. 4. 2003 1:30'
    );

    expect(formatDateTimeCs('dateTimeShort', parseDate('2003-04-20T00:30:00.000Z'))).toEqual(
      '20. 4. 2003 2:30'
    );
  });

  it('should return formatted date time for en locale', () => {
    expect(
      formatDateTime(
        defaultLocaleConfigs.en,
        'en',
        'dateTimeMedium',
        parseDate('2003-04-30T17:03:59')
      )
    ).toEqual('30. April 2003 5:03 PM');

    expect(
      formatDateTime(
        defaultLocaleConfigs.en,
        'en',
        'dateTimeLong',
        parseDate('2003-04-30T17:03:59')
      )
    ).toEqual('30. April 2003 5:03:59 PM');
  });
});
