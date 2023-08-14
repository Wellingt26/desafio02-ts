import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { CardInfo } from "../components/CardInfo";
import { useState, useEffect, useContext } from "react";
import { api } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";

interface IuserData {
    name: string;
    email: string;
    password: string;
    balance: 2000.0;
    id: string;
}

export const Conta = () => {
    const [userData, setUserData] = useState<null | IuserData>();
    const { id } = useParams();
    const navigate = useNavigate();

    const { isLoggedIn } = useContext(AppContext);

    !isLoggedIn && navigate("/");

    useEffect(() => {
        const getData = async () => {
            const data: any | IuserData = await api;
            setUserData(data);
        };
        getData();
    }, []);

    const actualData = new Date();

    if (userData && id !== userData.id) {
        navigate("/");
    }

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {userData?.name === undefined || userData?.name === null ? (
                    <Center>
                        <Spinner size="xl" color="#fff" />
                    </Center>
                ) : (
                    <>
                        <CardInfo
                            mainContent={`Bem vindo ${userData?.name}`}
                            content={actualData.toLocaleString("pt-BR", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "2-digit",
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        />

                        <CardInfo
                            mainContent="Saldo"
                            content={`R$ ${userData.balance}`}
                        />
                    </>
                )}
            </SimpleGrid>
        </Center>
    );
};
