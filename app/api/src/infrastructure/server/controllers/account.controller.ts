import { RegisterFormValidator } from '@server/validators/account.validators';
import { RegisterUseCase } from '@application/register.usecase';
import type { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';

@injectable()
export class AccountController {
    constructor(@inject(RegisterUseCase) private registerUseCase: RegisterUseCase) {}

    public register = async (req: Request, res: Response) => {
        console.log(RegisterFormValidator.parse(req.body));
        res.status(200).send('registered');
    }

    public login = async (req: Request, res: Response) => {
        console.log('login');
        res.status(200).send('logged in');
    }
}
