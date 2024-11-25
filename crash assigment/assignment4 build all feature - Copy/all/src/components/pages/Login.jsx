import { Input, VStack, Container, Heading, Button } from "@chakra-ui/react";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContextProvider";

function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  console.log(email, password);
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);

  async function handleClick() {
    try {
      const res = await axios({
        method: "post",
        url: "https://reqres.in/api/login",
        data: {
          email,
          password,
        },
      });
      console.log(res.data.token);
      console.log("Hello");

      login(res.data.token);
    } catch (error) {
      setError("Please Enter Email & Password");
    }
  }

  return (
    <Container mt="30px" border="1px solid teal" borderRadius="10px ">
      <Heading textAlign="center">Login user</Heading>

      <VStack spacing={4} mt="20px">
        <Input
          placeholder=" enter your email"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          placeholder="enter your password"
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button colorScheme="red" variant="solid" onClick={handleClick}>
          Login
        </Button>
        <Heading>{error}</Heading>
      </VStack>
    </Container>
  );
}
export default Login;
