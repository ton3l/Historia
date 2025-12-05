import { RegisterFormValidator } from '@server/validators/account.validators';
import { RegisterUserUseCase } from '@application/register-user.usecase';
import type { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';

@injectable()
export class AccountController {
    constructor(@inject(RegisterUserUseCase) private registerUseCase: RegisterUserUseCase) {}

    public register = async (req: Request, res: Response) => {
        const { username, email, rawPassword } = RegisterFormValidator.parse(req.body);

        console.log(await this.registerUseCase.execute({ username, email, rawPassword }));

        res.status(200).send('registered');
    }

    public login = async (req: Request, res: Response) => {
        console.log('login');
        res.status(200).send('logged in');
    }
}
