import axios from 'axios';

export class AccountService {
    static async login(email: string, rawPassword: string) {
        return axios.post(`${import.meta.env.VITE_API_URL}/account/login`, {
            email,
            rawPassword,
        });
    }

    static async register(username: string, email: string, rawPassword: string) {
        return axios.post(`${import.meta.env.VITE_API_URL}/account/register`, {
            username,
            email,
            rawPassword,
        });
    }
}
