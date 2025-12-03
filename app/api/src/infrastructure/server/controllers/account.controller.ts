import type { RegisterForm } from '@historia/types/register-form';
import type { Request, Response } from 'express';

export class AccountController {
    public static register(req: Request, res: Response) {
        console.log(req.body);
        res.status(200).send('registered');
    }

    public static login(req: Request, res: Response) {
        console.log('login');
        res.status(200).send('logged in');
    }
}
