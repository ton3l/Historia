import { CreateListUseCase } from '@application/list/create-list.usecase';
import { DeleteListUseCase } from '@application/list/delete-list.usecase';
import { GetListsByBoardUseCase } from '@application/list/get-lists-by-board.usecase';
import { UpdateListUseCase } from '@application/list/update-list.usecase';
import { GetBoardValidator } from '@server/validators/board.validators';
import {
    CreateListValidator,
    ListIdValidator,
    UpdateListValidator,
} from '@server/validators/list.validators';
import type { Request, Response } from 'express';
import { injectable } from 'tsyringe';

@injectable()
export class ListController {
    constructor(
        private readonly createListUseCase: CreateListUseCase,
        private readonly getListsByBoardUseCase: GetListsByBoardUseCase,
        private readonly updateListUseCase: UpdateListUseCase,
        private readonly deleteListUseCase: DeleteListUseCase,
    ) {}

    public create = async (req: Request, res: Response) => {
        const { boardId, title, position } = CreateListValidator.parse(req.body);

        const list = await this.createListUseCase.execute({ boardId, title, position });

        res.status(200).send({ list });
    };

    public getListsByBoard = async (req: Request, res: Response) => {
        const { id: boardId } = GetBoardValidator.parse(req.params);

        const lists = await this.getListsByBoardUseCase.execute({ boardId });

        res.status(200).send({ lists });
    };

    public update = async (req: Request, res: Response) => {
        const { id: listId } = ListIdValidator.parse(req.params);
        const { title, position } = UpdateListValidator.parse(req.body);

        const list = await this.updateListUseCase.execute({ listId, title, position });

        res.status(200).send({ list });
    };

    public delete = async (req: Request, res: Response) => {
        const { id: listId } = ListIdValidator.parse(req.params);

        await this.deleteListUseCase.execute({ listId });

        res.status(200).send({ message: 'List deleted' });
    };
}