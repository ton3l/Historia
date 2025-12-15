import type { ListRepository } from '@domain/repositories/list.repository';
import { inject, injectable } from 'tsyringe';
import { RecordNotFoundException } from '@infrastructure/persistence/exceptions/notfound.exception';

export interface UpdateListRequest {
    listId: number;
    title?: string;
    position?: number;
}

@injectable()
export class UpdateListUseCase {
    constructor(
        @inject('ListRepository') private readonly listPersistence: ListRepository,
    ) {}

    public async execute(request: UpdateListRequest) {
        const { listId, title, position } = request;

        const list = await this.listPersistence.findById(listId);

        if (!list) {
             throw new RecordNotFoundException({ object: 'List', operation: 'Update' });
        }

        if (title) list.setTitle(title);
        if (position !== undefined) list.setPosition(position);

        return await this.listPersistence.update(list);
    }
}
