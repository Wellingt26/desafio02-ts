import { Footer } from "./Footer";
import { Header } from "./Header";
import { Box } from "@chakra-ui/react";

export const Layout = ({ children }: any) => {
    return (
        <Box
            maxHeight="100vh"
            height="100vh"
            width="100vw"
            bgGradient="radial-gradient(circle, rgba(200,8,208,1) 0%, rgba(157,0,214,1) 100%, rgba(213,8,219,1) 100%);"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
        >
            <Header />
            <Box height="100%"> {children}</Box>
            <Footer />
        </Box>
    );
};
