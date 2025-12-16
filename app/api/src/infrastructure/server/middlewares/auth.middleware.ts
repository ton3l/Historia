import type { TokenProvider } from '@application/interfaces/token-provider.interface';
import type { Request, Response, NextFunction } from 'express';
import { inject, injectable } from 'tsyringe';

@injectable()
export class Authentication {
    constructor(@inject('TokenProvider') private tokenProvider: TokenProvider) {}

    public handle = (req: Request, res: Response, next: NextFunction) => {
        if (req.url)
        if (req.url === '/account/login' || req.url === '/account/signin' || req.url === '/') return next();

        const authHeader = req.headers.authorization;
        if (!authHeader) return res.sendStatus(401);

        const token = authHeader.split(' ')[1];

        try {
            this.tokenProvider.verify(token!);
        } catch (error) {
            return res.sendStatus(401);
        }

        next();
    };
}
