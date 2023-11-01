import {HStack} from '../HStack/HStack';
import {Box} from './Box';

export default {
  title: 'Foundation/Box',
  component: Box,
};

export function Default() {
  return <Box>Box</Box>;
}

export function Padding() {
  return (
    <Box padding={1} paddingLeft={10} paddingBottom={0}>
      Padded box
    </Box>
  );
}

export function Background() {
  return <Box backgroundColor="severity.warning">Box with background</Box>;
}

export function Opacity() {
  return <Box opacity={0.5}>Box with opacity</Box>;
}

export function Borders() {
  return (
    <Box
      borderBottom="1px dashed"
      borderLeft="1px dashed"
      borderColor="severity.danger"
      borderRadius="border_radius_3"
    >
      Box with border
    </Box>
  );
}

export function Position() {
  return (
    <Box position="relative" left={10} top={20}>
      Relative box
    </Box>
  );
}

export function NumberHeight() {
  return (
    <Box height={20} backgroundColor="severity.warning">
      20 * Design system's base step
    </Box>
  );
}

export function StringHeight() {
  return (
    <Box height="50vh" backgroundColor="severity.warning">
      50vh
    </Box>
  );
}

export function Shadow() {
  return <Box boxShadow="elevation_4">Box with shadow</Box>;
}

export function FlexItem() {
  return (
    <HStack spacing={1}>
      <Box backgroundColor="severity.warning" flex={1}>
        Flex 1
      </Box>
      <Box backgroundColor="severity.warning" flex={2}>
        Flex 2
      </Box>
      <Box backgroundColor="severity.warning" flexGrow={0} flexShrink={0} flexBasis={25}>
        100px
      </Box>
    </HStack>
  );
}
