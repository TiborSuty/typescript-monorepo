import { VStack } from '../../../../../libs/ui/src/components/layout/VStack/VStack';
import { Header } from './components/Header';
import { Box } from '../../../../../libs/ui/src/components/layout/Box/Box';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <VStack height="100%" width="100%" data-testid="layout">
      <Header />
      <Box
        position="fixed"
        top={12}
        left={12}
        right={0}
        bottom={0}
        overflowY="auto"
        backgroundColor="palettes.neutral.10.100"
        data-testid="layout-content"
      >
        <Outlet />
      </Box>
    </VStack>
  );
};
