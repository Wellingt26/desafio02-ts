import { Box, Center } from "@chakra-ui/react";

export const Header = () => {
    return (
        <Box
            fontWeight="bold"
            fontSize="5rem"
            textColor="#ffffff"
            minWidth="100vw"
            margin="1rem"
        >
            <Center>
                <h1>Dio Bank</h1>
            </Center>
        </Box>
    );
};
