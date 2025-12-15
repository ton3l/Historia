import type { ListRepository } from '@domain/repositories/list.repository';
import { inject, injectable } from 'tsyringe';

export interface GetListsByBoardRequest {
    boardId: string;
}

@injectable()
export class GetListsByBoardUseCase {
    constructor(
        @inject('ListRepository') private readonly listPersistence: ListRepository,
    ) {}

    public async execute(request: GetListsByBoardRequest) {
        const { boardId } = request;
        return await this.listPersistence.findByBoardId(boardId);
    }
}
