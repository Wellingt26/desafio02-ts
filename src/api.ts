const conta = {
    id: "1",
    name: "Wellington",
    email: "well@well",
    password: "123456",
    balance: 2000.0,
};

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta);
    }, 3000);
});
