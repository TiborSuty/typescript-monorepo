import {ThemeRadiusPath, ThemeShadowsPath, foundationTheme} from 'platform/foundation';

import {alertTheme} from '../components/Alert/Alert.theme';
import {badgeTheme} from '../components/Badge/Badge.theme';
import {breadcrumbTheme} from '../components/Breadcrumb/Breadcrumb.theme';
import {choiceTheme} from '../components/Choice/theme';
import {dataGridTheme} from '../components/DataGrid/styles/DataGrid.theme';
import {dialogTheme} from '../components/Dialog/Dialog.theme';
import {dropdownTheme} from '../components/Dropdown/Dropdown.theme';
import {paginationTheme} from '../components/Pagination/Pagination.theme';
import {phoneTheme} from '../components/PhoneInput/PhoneInput.theme';
import {previewTheme} from '../components/Preview/Preview.theme';
import {radioTheme} from '../components/Radio/theme';
import {segmentTheme} from '../components/Segment/Segment.theme';
import {segmentItemTheme} from '../components/Segment/SegmentItem.theme';
import {sliderTheme} from '../components/Slider/theme';
import {tabTheme} from '../components/Tabs/Tab.theme';
import {tabsTheme} from '../components/Tabs/Tabs.theme';
import {tabsHeaderTheme} from '../components/TabsHeader/TabsHeader.theme';
import {textareaTheme} from '../components/Textarea/Textarea.theme';
import {uploadTheme} from '../components/Upload/Upload.theme';

type CardTheme = {
  elevation: ThemeShadowsPath;
  borderRadius: ThemeRadiusPath;
};

const Card: CardTheme = {
  elevation: 'elevation_1',
  borderRadius: 'border_radius_2',
};

type SwitchTheme = {
  trackStyle: {backgroundColor: string};
};

const Switch: SwitchTheme = {
  trackStyle: {backgroundColor: foundationTheme.colors.palettes.neutral[200][100]},
};

type SpinnerTheme = {
  size: 'large' | 'default' | 'small' | 'xSmall';
  variant: 'default' | 'overlay';
  colorScheme: 'white' | 'blue';
};

const Spinner: SpinnerTheme = {
  size: 'default',
  variant: 'default',
  colorScheme: 'blue',
};

type ButtonTheme = {
  variants: {
    ghost: {hover: {backgroundColor: string}; active: {backgroundColor: string}};
    link: {color: string};
  };
};

const Button: ButtonTheme = {
  variants: {
    ghost: {
      hover: {backgroundColor: foundationTheme.colors.palettes.neutral[30][100]},
      active: {backgroundColor: foundationTheme.colors.palettes.neutral[40][100]},
    },
    link: {color: foundationTheme.colors.general.accent},
  },
};

export const componentsTheme = {
  ...foundationTheme,
  config: {
    cssVarPrefix: 'eag',
  },
  styles: {
    global: {
      html: {
        overflowX: 'hidden',
      },
    },
  },
  components: {
    Alert: alertTheme,
    Badge: badgeTheme,
    Breadcrumb: breadcrumbTheme,
    Card,
    DataGrid: dataGridTheme,
    Segment: segmentTheme,
    SegmentItem: segmentItemTheme,
    Textarea: textareaTheme,
    Button,
    Choice: choiceTheme,
    Tabs: tabsTheme,
    Pagination: paginationTheme,
    Dialog: dialogTheme,
    Upload: uploadTheme,
    Phone: phoneTheme,
    Slider: sliderTheme,
    Tab: tabTheme,
    Radio: radioTheme,
    Switch,
    Dropdown: dropdownTheme,
    Spinner,
    Preview: previewTheme,
    TabsHeader: tabsHeaderTheme,
    Table: {},
    Status: {},
    Password: {},
    Form: {},
  },
} as const;

export type DefaultComponentsTheme = typeof componentsTheme;
