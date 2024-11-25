import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../Context/Authcontext";

export default function Nevbar() {
  let {
    authState: { isAuthenticated, email },
    logOut,
  } = useContext(Authcontext);

  return (
    <Flex py={10} px={5} bg={"teal"} justifyContent={"space-between"}>
      <HStack>
        <Text>{isAuthenticated ? email : "Please Login Now"}</Text>
      </HStack>
      <HStack spacing={10}>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>login</Link>
        <Button onClick={logOut}>Logout</Button>
      </HStack>
    </Flex>
  );
}
