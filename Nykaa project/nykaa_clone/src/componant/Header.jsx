import { Box , Flex, Spacer} from "@chakra-ui/react";

export const Header = () => {
  return (
    <>
      <Box bg="teal">
        <Flex>
          <Box p="4" bg="red.400">
            Box 1
          </Box>
          <Spacer />
          <Box p="4" bg="green.400">
            Box 2
          </Box>
        </Flex>
      </Box>
    </>
  );
};
