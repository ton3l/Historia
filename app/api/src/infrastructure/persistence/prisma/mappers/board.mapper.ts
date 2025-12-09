import type { Board as PersistentBoard } from "@prisma/client";
import { Board } from "@domain/core/board.entity";

export class BoardMapper {
    constructor() {}

    static toPersistence(board: Board) {
        const boardAttrs = board.toJSON();
        return {
            id: boardAttrs.id,
            title: boardAttrs.title,
            updated_at: boardAttrs.updatedAt!,
        };
    }

    static toDomain(persistentBoard: PersistentBoard): Board {
        const toDomoainBoard = { ...persistentBoard, updatedAt: new Date(persistentBoard.updated_at) };
        return Board.restore(toDomoainBoard);
    }
}