import { api } from "@lib/axios";

export class ListService {
    static async create(boardId: string, listPosition: number) {        
        const response = await api.post(`/list`, { boardId, position: listPosition, title: "New List" });
        return response;
    }

    static async getAll() { // Criar método que recebe só nome e ID
        const response = await api.get(`/board`);
        return response;
    }

    static async get(id: string) { // Criar método que recebe só nome e ID
        const response = await api.get(`/board/${id}`);
        return response;
    }
}
