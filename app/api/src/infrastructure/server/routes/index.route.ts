import { AccountRoute } from '@server/routes/account.route';
import type { BaseRoute } from '@server/routes/base-router.route';
import express from 'express';

export class Router {
    private router = express.Router();

    private constructor(routes: BaseRoute[]) {
        for (const route of routes) {
            route.init();
            this.router.use(route.getPath(), route.getRouter());
        }
    }

    public static create(...routes: BaseRoute[]) {
        return new Router(routes).router;
    }
}

export const router = Router.create(new AccountRoute());
