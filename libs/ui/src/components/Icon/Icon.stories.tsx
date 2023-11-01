import {action} from '@storybook/addon-actions';

import {ThemeIconKey} from '../../utils/foundationTheme';
import {themeIcons} from '../../utils/icons/themeIcons';
import {Box} from '../Box/Box';
import {GridItem} from '../Grid/components/GridItem';
import {Grid} from '../Grid/Grid';
import {Icon} from './Icon';

export default {
  title: 'Foundation/Icon',
  component: Icon,
};

export function Default() {
  return (
    <Grid columns={4} spacing={1}>
      {Object.keys(themeIcons).map((key) => (
        <GridItem key={key}>
          <Box padding={2}>
            <Box padding={1}>{key}</Box>
            <Icon value={key as ThemeIconKey} />
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
}

export function Size() {
  return (
    <Grid columns={4} spacing={1}>
      {Object.keys(themeIcons).map((key) => (
        <GridItem key={key}>
          <Box padding={2}>
            <Box padding={1}>{key}</Box>
            <Icon size={4} value={key as ThemeIconKey} />
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
}

export function Color() {
  return <Icon size={4} color="general.accent" value="file/download" />;
}

export function OnClick() {
  return <Icon value="file/download" onClick={action('onClick')} />;
}
