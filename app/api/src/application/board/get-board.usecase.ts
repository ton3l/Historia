import type { BoardRepository } from '@domain/repositories/board.repository';
import { Board } from '@domain/core/board.entity';
import { inject, injectable } from 'tsyringe';

export interface GetUserBoardsOptions {
    userId: string;
}

@injectable()
export class GetUserBoardsUseCase {
    constructor(
        @inject('BoardRepository') private readonly boardPersistence: BoardRepository,
    ) {}

    public async execute(options: GetUserBoardsOptions) {
        const { userId } = options;

        const userBoards = this.boardPersistence.findByUser(userId);

        return userBoards;
    }
}
