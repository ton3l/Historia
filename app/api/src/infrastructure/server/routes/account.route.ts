import { AccountController } from '@server/controllers/account.controller';
import { BaseRoute } from '@server/routes/base.route';
import { injectable } from 'tsyringe';

@injectable()
export class AccountRoute extends BaseRoute {
    constructor(private accountController: AccountController) {
        super('/account');
    }

    public init() {
        this.router.post('/signin', this.accountController.register);
        this.router.post('/login', this.accountController.login);
    }
}
