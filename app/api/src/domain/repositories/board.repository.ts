import type { Board } from '@domain/core/board.entity';

export interface IBoardRepository {
    create(board: Board): Promise<Board>;
    findById(id: number): Promise<Board | null>;
    update(board: Board): Promise<Board>;
    delete(id: number): Promise<boolean>;
}
