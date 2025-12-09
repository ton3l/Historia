import { BoardController } from '@server/controllers/board.controller';
import { BaseRoute } from '@server/routes/base.route';
import { injectable } from 'tsyringe';

@injectable()
export class BoardRoute extends BaseRoute {
    constructor(private boardController: BoardController) {
        super('/board');
    }

    public init() {
        this.router.get('/', this.boardController.getUserBoards);
        this.router.post('/', this.boardController.createBoard);
    }
}
