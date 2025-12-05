import type { Router as IRouter } from 'express';
import express from 'express';

export abstract class BaseRoute {
    protected router = express.Router();
    protected path: string;

    constructor(path: string) {
        this.path = path;
    }

    getRouter(): IRouter {
        return this.router;
    }

    getPath(): string {
        return this.path;
    }

    public abstract init(): void;
}