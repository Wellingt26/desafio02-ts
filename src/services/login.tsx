import { api } from "../api";

export const login = async (email: string): Promise<boolean | undefined> => {
    const data: any = await api;

    if (data.email !== email) {
        return false;
    }

    return true;
};
