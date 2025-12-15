import type { TokenProvider } from '@application/interfaces/token-provider.interface';
import { CreateBoardUseCase } from '@application/board/create-board.usecase';
import { GetUserBoardsUseCase } from '@application/board/get-user-board.usecase';
import { CreateBoardValidator, GetBoardValidator } from '@server/validators/board.validators';
import { GetBoardUseCase } from '@application/board/get-board.usecase';
import type { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';

@injectable()
export class BoardController {
    constructor(
        @inject('TokenProvider') private tokenProvider: TokenProvider,
        private readonly getUserBoardsUseCase: GetUserBoardsUseCase,
        private readonly createBoardUseCase: CreateBoardUseCase,
        private readonly getBoardUseCase: GetBoardUseCase,
    ) {}

    public getUserBoards = async (req: Request, res: Response) => {
        const decodedUserToken = this.tokenProvider.verify(req.headers.authorization!.split(' ')[1]!); // Adicionar token no objeto Request

        const { userId } = decodedUserToken!;

        const userBoards = await this.getUserBoardsUseCase.execute({ userId });

        res.status(200).send({ boards: userBoards });
    };
    
    public createBoard = async (req: Request, res: Response) => {
        const decodedUserToken = this.tokenProvider.verify(req.headers.authorization!.split(' ')[1]!);
        
        const creatorId = decodedUserToken!.userId;
        
        const { title } = CreateBoardValidator.parse(req.body);
        
        const userBoards = await this.createBoardUseCase.execute({ title, creatorId });
        
        res.status(200).send({ boards: userBoards });
    };

    public getBoard = async (req: Request, res: Response) => {
        const boardId = (GetBoardValidator.parse(req.params)).id;

        const board = await this.getBoardUseCase.execute({ boardId });
        console.log(board);
        res.status(200).send({ board: board });
    };
}
