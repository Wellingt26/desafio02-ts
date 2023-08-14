import { Box, Center } from "@chakra-ui/react";

export const Card = ({ children }: any) => {
    return (
        <Center height="100%">
            <Box
                width="500px"
                height="250px"
                backgroundColor="#fff"
                borderRadius="25px"
                padding=".5rem"
            >
                {children}
            </Box>
        </Center>
    );
};
