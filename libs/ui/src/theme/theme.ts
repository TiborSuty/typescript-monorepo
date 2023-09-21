import {colors} from "./tokens/colors";
import {fonts, fontSizes, fontWeights, lineHeights} from "./tokens/typography";
import {shadows} from "./tokens/shadows";

export const theme = {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  shadows,
} as const;
