import { Button, Box } from "@chakra-ui/react";
import { login } from "../services/login";

export const ButtonLogin = () => {
    return (
        <Box marginTop=".5rem" display="block">
            <Button onClick={login} border="solid 2px">
                Entrar
            </Button>
        </Box>
    );
};
