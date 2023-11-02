import {addDays, format} from 'date-fns';
import {Align, GridItem, Grid, Space, Text} from 'platform/foundation';
import {convertAppLanguageToDateFns, useLocale} from 'platform/locale';

import {range} from 'ramda';

interface HeaderProps {
  startDate: Date;
}

export function Header(props: HeaderProps) {
  const {localeConfig} = useLocale();

  const days = range(0, 7).map((i) =>
    format(addDays(props.startDate, i), 'EEEEEE', {
      locale: convertAppLanguageToDateFns(localeConfig.language),
    })
  );

  return (
    <Grid columns={7} spacing={2}>
      {days.map((day) => (
        <GridItem key={day}>
          <Align center>
            <Text size="xSmall" color="secondary">
              {day}
            </Text>
          </Align>
          <Space vertical={2} />
        </GridItem>
      ))}
    </Grid>
  );
}
