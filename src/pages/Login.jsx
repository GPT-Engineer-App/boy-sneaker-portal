import React from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const Login = () => {
  return (
    <Box p={4}>
      <form>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password" isRequired mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button width="full" mt={4} type="submit" formAction="/products">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
