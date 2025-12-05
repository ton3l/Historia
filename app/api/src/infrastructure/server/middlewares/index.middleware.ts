import type { BaseMiddleware } from "@server/middlewares/base.middleware";
import { injectAll, singleton } from "tsyringe";
import express from "express";

@singleton()
export class MiddlewareKernel {
    private middlewareHandler = express.Router();

    constructor(@injectAll('Middlewares') private middlewares: BaseMiddleware[]) {}

    getMiddlewares() {
        const middlewares = this.middlewares.map(middleware => middleware.handle);

        for (const middleware of middlewares) {
            this.middlewareHandler.use(middleware);
        }

        return this.middlewareHandler;
    }
}