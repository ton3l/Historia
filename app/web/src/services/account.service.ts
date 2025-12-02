import axios from 'axios';

export class AccountService {
    static async login(email: string, password: string) {
        return axios.post('https://localhost:3000/api/login', {
            email,
            password,
        });
    }

    static async register(username: string, email: string, password: string) {
        return axios.post('https://localhost:3000/api/register', {
            username,
            email,
            password,
        });
    }
}
