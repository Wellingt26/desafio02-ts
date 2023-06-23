import { Center, ChakraProvider, Input, Box, Button } from "@chakra-ui/react";
import { Layout } from "./Layout";
import { Login } from "./Login";

export const Card = () => {
    return (
        <Box
            maxHeight="100vh"
            bgGradient="radial-gradient(circle, rgba(200,8,208,1) 0%, rgba(157,0,214,1) 100%, rgba(213,8,219,1) 100%);"
        >
            <Layout children={Login()} />
        </Box>
    );
};
