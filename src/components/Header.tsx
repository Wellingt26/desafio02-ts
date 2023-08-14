import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { useNavigate, useLocation } from "react-router-dom";
import { changeLocalStorage } from "../services/storage";

export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        changeLocalStorage({ login: false });
        setIsLoggedIn(false);
        navigate("/");
    };
    return (
        <>
            <Flex justifyContent="center">
                {location.pathname !== "/" && <Spacer />}
                <Box
                    fontWeight="bold"
                    fontSize="5rem"
                    textColor="#ffffff"
                    maxWidth="100vw"
                    margin="1rem"
                >
                    <Text>Dio Bank</Text>
                </Box>

                {isLoggedIn && location.pathname.slice(0, 7) === "/conta/" ? (
                    <>
                        <Spacer />
                        <Button
                            marginRight=".5rem"
                            marginTop=".5rem"
                            onClick={() => {
                                logout();
                            }}
                        >
                            Sair
                        </Button>
                    </>
                ) : null}
            </Flex>
        </>
    );
};
