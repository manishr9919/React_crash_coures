import { HStack, Button } from "@chakra-ui/react";
import { Link, Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { AuthContext } from "./AuthContextProvider";
import { useContext } from "react";

function Navbar() {
  const { authDetail, logout } = useContext(AuthContext);

  console.log(authDetail);
  const links = [
    {
      to: "/",
      label: "HOME",
    },
    {
      to: "/about",
      label: "ABOUT",
    },
    {
      to: "/contact",
      label: "CONTACT",
    },
    {
      to: "/tickets",
      label: "TICKETS",
    },
  ];

  return (
    <HStack
      justify={"space-around"}
      bg="teal.200"
      width="Xl"
      height="70px"
      fontSize="24px"
      color="red.500"
    >
      {links.map((link) => (
        <ChakraLink as={ReactRouterLink} to={link.to} key={link.to}>
          {link.label}
        </ChakraLink>
      ))}
      {authDetail.isLoggedIn ? (
        <Button onClick={logout} colorScheme="blue">
          LOGOUT
        </Button>
      ) : (
        // <Button colorScheme="blue">login</Button>
        <Link to path="./login">
          LOGIN
        </Link>
      )}
    </HStack>
  );
}
export default Navbar;
