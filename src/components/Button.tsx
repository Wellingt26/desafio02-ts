import { Button, Box } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface IDButton {
    onClick: MouseEventHandler;
}

export const ButtonLogin = ({ onClick }: IDButton) => {
    return (
        <Box margin=".5rem" display="block">
            <Button onClick={onClick} border="solid 2px">
                Entrar
            </Button>
        </Box>
    );
};
