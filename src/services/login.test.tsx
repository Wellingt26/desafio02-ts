import { login } from "./login";

describe("login", () => {
    const mockEmail = "well@well";

    it("Deve exibir um alert com boas vindas caso o email esteja valido", async () => {
        const response = await login(mockEmail);
        expect(response).toBeTruthy();
    });

    it("Deve exibir mensagem de erro caso o email esteja invalido", async () => {
        const response = await login("email@invalido");
        expect(response).toBeFalsy();
    });
});
