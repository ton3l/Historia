import type Board from "../entities/board.entity";

export default interface BoardRepository {
    create(board: Board): Promise<Board>;
    findById(id: number): Promise<Board | null>;
    update(id: number, board: Partial<Board>): Promise<Board | null>;
    delete(id: number): Promise<void>;
}
