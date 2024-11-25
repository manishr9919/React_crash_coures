import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

function Home() {
  const naviagte = useNavigate();
  return (
    <Container maxW="Container.xl" border="1px solid red">
      <Box>
        <Flex direction="row">
          <Heading>Home page</Heading>
          <Spacer />
          <Button
            onClick={() => {
              naviagte("/about");
            }}
            colorScheme="red"
            variant="outline"
          >
            Go to Home Page
          </Button>
        </Flex>
      </Box>
    </Container>
  );
}
export default Home;
