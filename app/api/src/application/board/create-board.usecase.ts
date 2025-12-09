import type { BoardRepository } from '@domain/repositories/board.repository';
import { Board } from '@domain/core/board.entity';
import { inject, injectable } from 'tsyringe';

export interface CreateBoardOptions {
    creatorId: string;
    title: string;
}

@injectable()
export class CreateBoardUseCase {
    constructor(
        @inject('BoardRepository') private readonly boardPersistence: BoardRepository,
    ) {}

    public async execute(options: CreateBoardOptions) {
        const { title, creatorId } = options;

        const board = Board.create({ title: title });

        return await this.boardPersistence.create({ board, creatorId });
    }
}
