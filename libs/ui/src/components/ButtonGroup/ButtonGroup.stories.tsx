import {Button} from '../Button/Button';
import {ButtonGroup} from './ButtonGroup';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
};

export function Default() {
  return (
    <ButtonGroup>
      <Button variant="primary" title="Button 1" />
      <Button variant="secondary" title="Button 2" />
      <Button variant="outlined" title="Button 3" />
    </ButtonGroup>
  );
}

export function Align() {
  return (
    <ButtonGroup align="right">
      <Button variant="primary" title="Button 1" />
      <Button variant="secondary" title="Button 2" />
      <Button variant="outlined" title="Button 3" />
    </ButtonGroup>
  );
}

export function Actions() {
  return (
    <ButtonGroup
      buttons={[
        {variant: 'primary', title: 'Button 1'},
        {variant: 'secondary', title: 'Button 2'},
        {variant: 'outlined', title: 'Button 3'},
      ]}
    />
  );
}

export function Overrides() {
  return (
    <ButtonGroup
      variant="primary"
      size="small"
      buttons={[
        {variant: 'primary', title: 'Button 1'},
        {variant: 'secondary', title: 'Button 2'},
        {variant: 'outlined', title: 'Button 3'},
      ]}
    />
  );
}
