import { useTheme } from 'styled-components';

export const Button = () => {
  const theme = useTheme();

  console.log('Current theme: ', theme);

  return <div>Button</div>;
};
