import type { List } from '@domain/core/list.entity';

export interface CreateListOptions {
    list: List;
    boardId: string;
}

export interface ListRepository {
    create(options: CreateListOptions): Promise<List>;
    findById(id: number): Promise<List | null>;
    findByBoardId(boardId: string): Promise<List[] | null>;
    update(list: List): Promise<List>;
    delete(id: number): Promise<List>;
}
