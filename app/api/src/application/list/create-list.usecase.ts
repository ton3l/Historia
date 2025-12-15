import type { ListRepository } from '@domain/repositories/list.repository';
import { List } from '@domain/core/list.entity';
import { inject, injectable } from 'tsyringe';

export interface CreateListRequest {
    boardId: string;
    title: string;
    position: number;
}

@injectable()
export class CreateListUseCase {
    constructor(
        @inject('ListRepository') private readonly listPersistence: ListRepository,
    ) {}

    public async execute(request: CreateListRequest) {
        const { title, position, boardId } = request;

        const list = List.create({ title, position });

        return await this.listPersistence.create({ list, boardId });
    }
}
