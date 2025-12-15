import { ListMapper } from '@infrastructure/persistence/prisma/mappers/list.mapper';
import type { Board as PersistentBoard, List as PersistentList } from "@prisma/client";
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

    static toDomain(persistentBoard: PersistentBoard & { List?: PersistentList[] }): Board {
        const lists = persistentBoard.List?.map((list) => ListMapper.toDomain(list));

        const toDomoainBoard = { 
            ...persistentBoard, 
            updatedAt: new Date(persistentBoard.updated_at),
            lists: lists 
        };
        
        const board = Board.restore(toDomoainBoard);

        return board;
    }
}