import type { BaseRoute } from '@infrastructure/server/routes/base.route';
import { injectAll, singleton } from 'tsyringe';
import express from 'express';

@singleton()
export class AppRouter {
    private router = express.Router();

    constructor(@injectAll('Routes') private routes: BaseRoute[]) {
        for (const route of routes) {
            route.init();
            this.router.use(route.getPath(), route.getRouter());
        }
    }

    public getRouter(): express.Router {
        return this.router;
    }
}
