import {LinkProps} from 'platform/foundation';

type LabelAction = Pick<LinkProps, 'title' | 'leftIcon' | 'onClick' | 'isDisabled'>;
export type LabelActions = LabelAction[];
