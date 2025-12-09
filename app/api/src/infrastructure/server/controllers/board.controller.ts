import type { TokenProvider } from '@application/interfaces/token-provider.interface';
import { GetUserBoardsUseCase } from '@application/board/get-board.usecase';
import type { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';

@injectable()
export class BoardController {
    constructor(
        @inject('TokenProvider') private tokenProvider: TokenProvider,
        private readonly getBoardsUseCase: GetUserBoardsUseCase
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
}
