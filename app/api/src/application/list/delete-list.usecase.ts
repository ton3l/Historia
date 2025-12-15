import type { ListRepository } from '@domain/repositories/list.repository';
import { inject, injectable } from 'tsyringe';

export interface DeleteListRequest {
    listId: number;
}

@injectable()
export class DeleteListUseCase {
    constructor(
        @inject('ListRepository') private readonly listPersistence: ListRepository,
    ) {}

    public async execute(request: DeleteListRequest) {
        const { listId } = request;
        return await this.listPersistence.delete(listId);
    }
}
