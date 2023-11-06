import { HStack } from '../../../../../../libs/ui/src/components/layout/HStack/HStack';
import { Box } from '../../../../../../libs/ui/src/components/layout/Box/Box';
import { ButtonGroup } from '../../../../../../libs/ui/src/components/ButtonGroup/ButtonGroup';
import { ButtonProps } from '../../../../../../libs/ui/src/components/Button/Button';
import { VStack } from '../../../../../../libs/ui/src/components/layout/VStack/VStack';

export const Header = () => {
  const buttons: ButtonProps[] = [
    {
      title: 'Articles',
    },
    {
      title: 'Login',
    },
  ];

  return (
    <HStack width="100%" align="center">
      <Box flex={1}>Blog</Box>
      <ButtonGroup buttons={buttons} />
    </HStack>
  );
};
