import { api } from "@lib/axios";

export class BoardService {
    static async create() {
        const response = await api.post(`/board`, { title: "New Board" });
        return response;
    }

    static async getAll() { // Criar método que recebe só nome e ID
        const response = await api.get(`/board`);
        return response;
    }

    static async get(id: string) { // Criar método que recebe só nome e ID
        const response = await api.get(`/board/${id}`);
        console.log(response.data);
        return response;
    }
}
