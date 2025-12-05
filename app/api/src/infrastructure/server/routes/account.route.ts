import { AccountController } from '@server/controllers/account.controller';
import { BaseRoute } from '@server/routes/base-router.route';
import { inject, injectable } from 'tsyringe';

@injectable()
export class AccountRoute extends BaseRoute {
    constructor(@inject(AccountController) private accountController: AccountController) {
        super('/account');
    }

    public init() {
        this.router.post('/register', this.accountController.register);
        this.router.post('/login', this.accountController.login);
    }
}
