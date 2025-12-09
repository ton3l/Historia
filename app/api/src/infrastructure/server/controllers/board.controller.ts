import type { TokenProvider } from '@application/interfaces/token-provider.interface';
import { CreateBoardUseCase } from '@application/board/create-board.usecase';
import { GetUserBoardsUseCase } from '@application/board/get-board.usecase';
import { CreateBoardValidator } from '../validators/board.validators';
import type { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';

@injectable()
export class BoardController {
    constructor(
        @inject('TokenProvider') private tokenProvider: TokenProvider,
        private readonly getBoardsUseCase: GetUserBoardsUseCase,
        private readonly createBoardUseCase: CreateBoardUseCase,
    ) {}

    public getUserBoards = async (req: Request, res: Response) => {
        const encodedUserToken = req.headers.authorization?.split(' ')[1];
        if (!encodedUserToken) return res.sendStatus(401).redirect('/account');

        const decodedUserToken = this.tokenProvider.verify(encodedUserToken);
        if (!decodedUserToken) return res.sendStatus(401).redirect('/account');

        const { userId } = decodedUserToken;

        const userBoards = await this.getBoardsUseCase.execute({ userId });

        res.status(200).send({ boards: userBoards });
    }

    public createBoard = async (req: Request, res: Response) => {
        const encodedUserToken = req.headers.authorization?.split(' ')[1];
        if (!encodedUserToken) return res.sendStatus(401).redirect('/account');

        const decodedUserToken = this.tokenProvider.verify(encodedUserToken);
        if (!decodedUserToken) return res.sendStatus(401).redirect('/account');

        const creatorId = decodedUserToken.userId;

        const { title } = CreateBoardValidator.parse(req.body);

        const userBoards = await this.createBoardUseCase.execute({ title, creatorId });

        res.status(200).send({ boards: userBoards });
    }
}
