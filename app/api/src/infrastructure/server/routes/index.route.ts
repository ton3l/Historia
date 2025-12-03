import type { Router as IRouter } from 'express';
import express from 'express';

class Router {
    private router = express.Router();

    private constructor(routes: IRouter[]) {
        for (const route of routes) {
            this.router.use(route);
        }
    }

    public static create(routes: IRouter[]) {
        return new Router(routes);
    }
}

export const routes = Router.create([]);
