import {ThemeIconKey} from 'platform/foundation';

import {OptionType} from '../../types/FormControlProps';

export type CheckboxOption = {
  checkedIcon?: ThemeIconKey;
} & OptionType;

export interface CheckboxPropsBase {
  checkedIcon?: ThemeIconKey;
}
