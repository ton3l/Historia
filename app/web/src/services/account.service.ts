import axios from 'axios';

export class AccountService {
    static async login(email: string, password: string) {
        return axios.post(`${import.meta.env.VITE_API_URL}/account/login`, {
            email,
            password,
        });
    }

    static async register(username: string, email: string, password: string) {
        return axios.post(`${import.meta.env.VITE_API_URL}/account/register`, {
            username,
            email,
            password,
        });
    }
}
