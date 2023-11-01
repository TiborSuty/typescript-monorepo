import { DefaultTheme } from 'styled-components';

import './font-face.css';
import { getSize } from '../utils/getSize';
import { themeIcons } from '../utils/icons/themeIcons';

const space = {
  /**
   * Base step used to derive all the spaces and sizes
   * 0.25 rem is 4px (for 16px base font size)
   */
  step: 0.25,
};

const devices = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1024px)',
  notebook: '(min-width: 1025px) and (max-width: 1366px)',
  desktop: '(min-width: 1367px)',
};

const radii = {
  border_radius_1: '2px',
  border_radius_2: '4px',
  border_radius_3: '8px',
  border_radius_4: '16px',
  circular: '50%',
};

const fonts = {
  body: 'Roboto, sans-serif',
  heading: 'Roboto, sans-serif',
};

const zIndices = {
  hide: -1,
  auto: 'auto',
  base: 0,
  CONTENT: 100,
  MAIN_MENU: 302,
  CONTENT_LOADER: 120,
  TOOLTIP: 150,
  MODAL: 500,
  HEADER: 300,
  SIDEBAR: 9,
  MODAL_COMPONENT: 1000,
  FULLSCREEN_MODAL: 1400,
  DROPDOWN_COMPONENT: 1450,
  TOAST_NOTIFICATION: 1500,
  CHOICE_MENU: 9999,
};

const palettes = {
  black: {
    10: {
      100: '#0C172C',
    },
  },
  white: {
    10: {
      100: '#FFFFFF',
      80: '#FFFFFFCC',
      40: '#FFFFFF66',
      20: '#FFFFFF33',
    },
  },
  neutral: {
    10: {
      100: '#FAFBFC',
      40: '#FAFBFC66',
    },
    20: {
      100: '#F4F5F7',
    },
    30: {
      100: '#EBECF0',
    },
    40: {
      100: '#DFE1E6',
      40: '#DFE1E666',
    },
    50: {
      100: '#C1C7D0',
    },
    60: {
      100: '#B3BAC5',
      40: '#B3BAC566',
    },
    70: {
      100: '#A5ADBA',
      40: '#A5ADBA66',
    },
    80: {
      100: '#97A0AF',
      40: '#97A0AF66',
    },
    90: {
      100: '#8993A4',
    },
    100: {
      100: '#7A869A',
    },
    200: {
      100: '#6B778C',
    },
    300: {
      100: '#5E6C84',
    },
    400: {
      100: '#505F79',
    },
    500: {
      100: '#42526E',
    },
    600: {
      100: '#344563',
    },
    700: {
      100: '#253858',
    },
    800: {
      100: '#172B4D',
    },
    900: {
      100: '#091E42',
      40: '#091E4266',
      20: '#091E4233',
    },
  },
  blue: {
    10: {
      100: '#F3F9FF',
    },
    20: {
      100: '#DCEFFF',
    },
    30: {
      100: '#BFE0FF',
    },
    40: {
      100: '#6FADFF',
    },
    50: {
      100: '#2684FF',
    },
    60: {
      100: '#0065FF',
    },
    70: {
      100: '#0052CC',
    },
    80: {
      100: '#0747A6',
    },
    90: {
      100: '#043379',
    },
  },
  red: {
    10: {
      100: '#FFF6F4',
    },
    20: {
      100: '#FFEBE6',
    },
    30: {
      100: '#FFC3C3',
    },
    40: {
      100: '#FE8C8C',
    },
    50: {
      100: '#FF5C52',
    },
    60: {
      100: '#E32C1E',
    },
    70: {
      100: '#CF2013',
    },
    80: {
      100: '#B71C1C',
    },
    90: {
      100: '#900E0E',
    },
  },
  magenta: {
    10: {
      100: '#FFF7FB',
    },
    20: {
      100: '#FCF1F7',
    },
    30: {
      100: '#FFD6E8',
    },
    40: {
      100: '#FFAFD2',
    },
    50: {
      100: '#FF7EB6',
    },
    60: {
      100: '#EE5396',
    },
    70: {
      100: '#D12771',
    },
    80: {
      100: '#9F1853',
    },
    90: {
      100: '#7B1340',
    },
  },
  purple: {
    10: {
      100: '#F7F6FF',
    },
    20: {
      100: '#F0EDFF',
    },
    30: {
      100: '#DBD3FF',
    },
    40: {
      100: '#A89CEB',
    },
    50: {
      100: '#8777D9',
    },
    60: {
      100: '#6554C0',
    },
    70: {
      100: '#5243AA',
    },
    80: {
      100: '#403294',
    },
    90: {
      100: '#2B206B',
    },
  },
  teal: {
    10: {
      100: '#F2FCFF',
    },
    20: {
      100: '#E6FCFF',
    },
    30: {
      100: '#B3F5FF',
    },
    40: {
      100: '#79E2F2',
    },
    50: {
      100: '#00C7E6',
    },
    60: {
      100: '#00B1D0',
    },
    70: {
      100: '#0094AD',
    },
    80: {
      100: '#027A8F',
    },
    90: {
      100: '#035361',
    },
  },
  green: {
    10: {
      100: '#F2FFF5',
    },
    20: {
      100: '#DEFBE6',
    },
    30: {
      100: '#A7F0BA',
    },
    40: {
      100: '#6FDC8C',
    },
    50: {
      100: '#42BE65',
    },
    60: {
      100: '#24A148',
    },
    70: {
      100: '#198038',
    },
    80: {
      100: '#0E6027',
    },
    90: {
      100: '#064419',
    },
  },
  yellow: {
    10: {
      100: '#FFFDE8',
    },
    20: {
      100: '#FFF9C4',
    },
    30: {
      100: '#FFF694',
    },
    40: {
      100: '#FFF174',
    },
    50: {
      100: '#FFEB37',
    },
    60: {
      100: '#FFE600',
    },
    70: {
      100: '#FFD600',
    },
    80: {
      100: '#D9B600',
    },
    90: {
      100: '#857000',
    },
  },
  orange: {
    10: {
      100: '#FFF9F0',
    },
    20: {
      100: '#FFF3E0',
    },
    30: {
      100: '#FFE0B2',
    },
    40: {
      100: '#FFCC80',
    },
    50: {
      100: '#FFB74D',
    },
    60: {
      100: '#FF9800',
    },
    70: {
      100: '#EF7900',
    },
    80: {
      100: '#9E4800',
    },
    90: {
      100: '#763806',
    },
  },
};

const general = {
  accent: palettes.blue[60][100],
  separator: palettes.neutral[40][100],
  white: palettes.white[10][100],
  transparent: 'transparent',
  black: '#000000',
};

const text = {
  primary: palettes.neutral[900][100],
  secondary: palettes.neutral[500][100],
  tertiary: palettes.neutral[100][100],
  informational: palettes.neutral[900][100],
  success: palettes.green[70][100],
  warning: palettes.orange[70][100],
  danger: palettes.red[80][100],
  link: palettes.blue[60][100],
  white: palettes.white[10][100],
};

const severity = {
  informational: palettes.blue[60][100],
  warning: palettes.orange[60][100],
  success: palettes.green[60][100],
  danger: palettes.red[60][100],
  hover: {
    informational: palettes.blue[70][100],
    warning: palettes.orange[70][100],
    success: palettes.green[70][100],
    danger: palettes.red[70][100],
  },
  active: {
    informational: palettes.blue[80][100],
    warning: palettes.orange[80][100],
    success: palettes.green[80][100],
    danger: palettes.red[80][100],
  },
};

const colors = {
  general,
  palettes,
  severity,
  text,
};

const shadows = {
  elevation_1: '0px 1px 4px rgba(0, 0, 0, 0.12)',
  elevation_2: '0px 2px 8px rgba(0, 0, 0, 0.12)',
  elevation_3: '0px 8px 16px rgba(0, 0, 0, 0.12)',
  elevation_4: '0px 16px 40px rgba(0, 0, 0, 0.16)',
  active: '0 0 0 4px #BFE0FF',
};

const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
  display: {
    default: 500,
    alternative: 400,
  },
  heading: {
    default: 500,
    alternative: 400,
  },
  text: {
    default: 400,
    alternative: 500,
  },
};

type lineHeightsBySize = { [key: string | number]: number | string };
const lineHeights: {
  display: lineHeightsBySize;
  text: lineHeightsBySize;
  heading: lineHeightsBySize;
} = {
  display: {
    1: 1.25,
  },
  heading: {
    1: '32px',
    2: '32px',
    3: '28px',
    4: '24px',
    5: '20px',
    6: '16px',
  },
  text: {
    large: '26px',
    base: '24px',
    small: '20px',
    xSmall: '16px',
    xxSmall: '14px',
  },
};

const fontSizes = {
  display: {
    1: '32px',
  },
  heading: {
    1: '28px',
    2: '24px',
    3: '21px',
    4: '16px',
    5: '14px',
    6: '12px',
  },
  text: {
    large: '18px',
    base: '16px',
    small: '14px',
    xSmall: '12px',
    xxSmall: '10px',
  },
};

/** @deprecated use useDevice hook or Show component */
const breakPoints = {
  XLARGE_UP: '1920px',
  LARGE_UP: '1280px',
  MEDIUM_UP: '960px',
  SMALL_UP: '600px',
};

export const foundationTheme = {
  getSize,
  devices,
  colors,
  icons: themeIcons,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  zIndices,
  shadows,
  space,
  breakPoints,
} as const;

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export type ThemeColorPath = NestedKeyOf<DefaultTheme['colors']>;
export type ThemeRadiusPath = NestedKeyOf<DefaultTheme['radii']>;
export type ThemeShadowsPath = NestedKeyOf<DefaultTheme['shadows']>;
export type ThemeZIndexPath = NestedKeyOf<DefaultTheme['zIndices']>;
export type ThemeIconKey = keyof DefaultTheme['icons'];

export type DefaultFoundationTheme = typeof foundationTheme;
