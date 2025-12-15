import type { BoardRepository } from '@domain/repositories/board.repository';
import { inject, injectable } from 'tsyringe';

export interface GetUserBoardsOptions {
    boardId: string;
}

@injectable()
export class GetBoardUseCase {
    constructor(
        @inject('BoardRepository') private readonly boardPersistence: BoardRepository,
    ) {}

    public async execute(options: GetUserBoardsOptions) {
        const { boardId } = options;

        const board = await this.boardPersistence.findById(boardId);
        
        return board;
    }
}
