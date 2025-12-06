export interface TokenPayload {
    id: string;
    username: string;
}

export interface TokenProvider {
    sign(payload: TokenPayload): string;
    verify(token: string): TokenPayload | null;
}