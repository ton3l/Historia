import { api } from "@lib/axios";

export class AccountService {
    static async login(email: string, rawPassword: string) {
        const response = await api.post(`/account/login`, {
            email,
            rawPassword,
        });

        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }

        return response;
    }

    static async register(username: string, email: string, rawPassword: string) {
        return await api.post(`/account/register`, {
            username,
            email,
            rawPassword,
        });
    }
}
