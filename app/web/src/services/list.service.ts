import { api } from "@lib/axios";

export class ListService {
    static async create(boardId: string, listPosition: number) {        
        const response = await api.post(`/list`, { boardId, position: listPosition, title: "New List" });
        return response;
    }

    static async getTasks(id: number) {
        const response = await api.get(`/board/${id}`);
        return response;
    }
}
