import axios from 'axios';

export class AccountService {
    static async login(email: string, password: string) {
        return axios.post('https://localhost:3000/account/register', {
            email,
            password,
        });
    }

    static async register(username: string, email: string, password: string) {
        return axios.post('https://localhost:3000/register', {
            username,
            email,
            password,
        });
    }
}
