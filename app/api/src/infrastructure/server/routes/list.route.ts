import { ListController } from '@server/controllers/list.controller';
import { BaseRoute } from '@server/routes/base.route';
import { injectable } from 'tsyringe';

@injectable()
export class ListRoute extends BaseRoute {
    constructor(private listController: ListController) {
        super('/list');
    }

    public init() {
        this.router.post('/', this.listController.create);
        this.router.get('/:id', this.listController.getListsByBoard);
        this.router.put('/:id', this.listController.update);
        this.router.delete('/:id', this.listController.delete);
    }
}
