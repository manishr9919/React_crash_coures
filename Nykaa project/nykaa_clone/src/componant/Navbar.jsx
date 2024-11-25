import {
  Box,
  HStack,
  IconButton,
  VStack,
  Link,
  Image,
  Input,
  Flex,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { IoReorderThreeSharp } from "react-icons/io5";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the sidebar visibility
  };

  return (
    <>
      <HStack
        border="1px solid red"
        bg="white"
        spacing="24px"
        justifyContent="space-between"
        h="auto"
      >
        {/* Hamburger Icon */}
        <IconButton
          p="30px"
          icon={<IoReorderThreeSharp />}
          aria-label="Open Menu"
          display={{ base: "block", md: "none" }}
          variant="ghost"
          onClick={handleToggle}
        />

        {/* Logo */}
        <Box w={{ base: "20%", md: "13%" }} h="auto">
          <RouterLink to="/">
            <Image
              src="https://cdn.iconscout.com/icon/free/png-512/free-nykaa-3384872-2822953.png?f=webp&w=512"
              width={{ base: "50px", md: "70px", lg: "100px" }}
              height="auto"
            />
          </RouterLink>
        </Box>

        {/* Links for Medium and Large Screens */}
        <HStack w="50%" h="20" display={{ base: "none", md: "flex" }}>
          <HStack p={4} fontSize="20" spacing="30px">
            <RouterLink to="/categories">Categories</RouterLink>
            <RouterLink to="/brands">Brands</RouterLink>
            <RouterLink to="/luxe">Luxe</RouterLink>
            <RouterLink to="/nykaa_fashion">Nykaa Fashion</RouterLink>
          </HStack>
        </HStack>

        <Flex
          justifyContent="center"
          alignItems="center"
          borderRadius="5px"
          boxShadow="lg"
          border="1px"
          p="5px"
        >
          <FaSearch />
          <Input
            variant="unstyled"
            p="10px"
            mr={{ base: "70px" }}
            type="text"
            placeholder="Search Items By Categories"
          />
        </Flex>

        {/* Login and Cart */}
        <Box w="25%" h="20" display={{ base: "none", md: "flex" }}>
          <HStack p={4} textAlign="center" spacing="30px">
            <RouterLink to="/login">Login</RouterLink>
            <RouterLink to="/cart">
              <FaShoppingCart size="30px" />
            </RouterLink>
          </HStack>
        </Box>
      </HStack>

      {/* Sidebar div with links, appears based on isOpen */}
      {isOpen && (
        <Box
          position="absolute"
          top="0"
          left="0"
          width="300px"
          height="100vh"
          bg="gray.100"
          p="20px"
          boxShadow="lg"
          zIndex="1000"
        >
          <VStack spacing="24px" align="start">
            <RouterLink to="/categories" onClick={handleToggle}>
              Categories
            </RouterLink>
            <RouterLink to="/brands" onClick={handleToggle}>
              Brands
            </RouterLink>
            <RouterLink to="/luxe" onClick={handleToggle}>
              Luxe
            </RouterLink>
            <RouterLink to="/nykaa_fashion" onClick={handleToggle}>
              Nykaa Fashion
            </RouterLink>
            <RouterLink to="/login" onClick={handleToggle}>
              Login
            </RouterLink>
            <RouterLink to="/cart" onClick={handleToggle}>
              <FaShoppingCart size="30px" />
            </RouterLink>
          </VStack>
        </Box>
      )}
    </>
  );
};
