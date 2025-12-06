import type { TokenProvider, TokenPayload } from "@application/interfaces/token-provider.interface";
import { injectable } from "tsyringe";
import jwt from 'jsonwebtoken';

@injectable()
export class JwtTokenProvider implements TokenProvider {
    private readonly secret = process.env.JWT_SECRET || 'jwt_secret';
    private readonly expiresIn = '1h';

    sign(payload: TokenPayload): string {
        return jwt.sign(payload, this.secret, { expiresIn: this.expiresIn });
    }

    verify(token: string): TokenPayload {
        return jwt.verify(token, this.secret) as TokenPayload;
    }
}
