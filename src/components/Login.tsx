import { Box, Input } from "@chakra-ui/react";
import { ButtonLogin } from "./Button";

export const Login = () => {
    return (
        <Box
            backgroundColor="white"
            margin="2rem"
            borderRadius="25px"
            padding="1rem"
            textAlign="center"
        >
            <h2>Login:</h2>
            <Input margin=".5rem" placeholder="E-mail" type="email"></Input>
            <Input margin=".5rem" placeholder="Senha" type="password"></Input>
            <ButtonLogin />
        </Box>
    );
};
