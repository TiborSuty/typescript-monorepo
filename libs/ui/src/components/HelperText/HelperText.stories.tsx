import {HelperText} from './HelperText';

export default {
  title: 'Components/HelperText',
  component: HelperText,
};

export function WithHelperText() {
  return <HelperText helperText="Helper text" />;
}

export function WithErrorMessage() {
  return <HelperText errorMessage="Error message" />;
}
