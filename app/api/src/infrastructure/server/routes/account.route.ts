import { AccountController } from '@server/controllers/account.controller';
import { BaseRoute } from '@server/routes/base-router.route';

export class AccountRoute extends BaseRoute {
    constructor() {
        super('/account');
    }

    public init() {
        this.router.post('/register', AccountController.register);
        this.router.post('/login', AccountController.login);
    }
}
