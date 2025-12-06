import { SignInFormValidator } from '@server/validators/account.validators';
import { LogInValidator } from '@server/validators/account.validators';
import { SignInUseCase } from '@application/account/sign-in.usecase';
import { LogInUseCase } from '@application/account/log-in.usecase';
import type { Request, Response } from 'express';
import { injectable } from 'tsyringe';

@injectable()
export class AccountController {
    constructor(
        private signIn: SignInUseCase,
        private logIn: LogInUseCase,
    ) {}

    public register = async (req: Request, res: Response) => {
        const { username, email, rawPassword } = SignInFormValidator.parse(req.body);

        await this.signIn.execute({ username, email, rawPassword });

        res.status(200).send('signed up');
    };

    public login = async (req: Request, res: Response) => {
        const { email, rawPassword } = LogInValidator.parse(req.body);

        const token = await this.logIn.execute({ email, rawPassword });

        res.status(200).send({ token });
    };
}
