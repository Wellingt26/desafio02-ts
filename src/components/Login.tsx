import { Box, Input } from "@chakra-ui/react";
import { ButtonLogin } from "./Button";
import { login } from "../services/login";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";
import { changeLocalStorage } from "../services/storage";

export const Login = () => {
    const [email, setEmail] = useState<string>("");
    const { setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();

    const validateUser = async (email: string) => {
        const loggedIn = await login(email);

        if (!loggedIn) return alert("Email Invalido");

        setIsLoggedIn(true);
        changeLocalStorage({ login: true });
        navigate("/conta/1");
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            height="100%"
            justifyContent="space-between"
            alignItems="center"
        >
            {/* {userData === undefined ? (
                <h1>Loading..</h1>
            ) : (
                <h1>{userData?.name}</h1>
            )} */}
            <h2>Login:</h2>
            <Input
                margin=".5rem"
                placeholder="E-mail"
                type="email"
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
            ></Input>
            <Input margin=".5rem" placeholder="Senha" type="password"></Input>
            <ButtonLogin
                onClick={() => {
                    validateUser(email);
                }}
            />
        </Box>
    );
};
