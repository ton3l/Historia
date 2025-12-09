import type { Board } from '@domain/core/board.entity';

export interface BoardRepository {
    create(board: Board): Promise<Board>;
    findById(id: string): Promise<Board | null>;
    findByUser(id: string): Promise<Board[] | null>;
    update(board: Board): Promise<Board>;
    delete(id: string): Promise<Board>;
}
