import axios from 'axios';

export class AccountService {
    static async login(email: string, password: string) {
        return axios.post('/api/login', {
            email,
            password,
        });
    }

    static async register(username: string, email: string, password: string) {
        return axios.post('/api/login', {
            username,
            email,
            password,
        });
    }
}
