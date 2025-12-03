import { AccountController } from '@server/controllers/account.controller';
import express from 'express';

export class AccountRoute {
    private router = express.Router();
    private path = '/account';

    constructor() {}

    public getRouter() {
        return this.router;
    }
}