import { Footer } from "./Footer";
import { Header } from "./Header";
import { Box, Center } from "@chakra-ui/react";

export const Layout = ({ children }: any) => {
    return (
        <Box display="flex" flexDirection="column" height="100vh">
            <Header />
            <Center height="100vh">{children}</Center>
        </Box>
    );
};
