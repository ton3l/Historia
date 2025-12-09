import type { TokenProvider } from '@application/interfaces/token-provider.interface';
import { AccountException } from '@application/exceptions/account.exception';
import type { UserRepository } from '@domain/repositories/user.repository';
import type { Encryptor } from '@domain/interfaces/encryptor.interface';
import { inject, injectable } from 'tsyringe';

export interface LogInUseCaseOptions {
    email: string;
    rawPassword: string;
}

@injectable()
export class LogInUseCase {
    constructor(
        @inject('Encryptor') private readonly encryptor: Encryptor,
        @inject('UserRepository') private readonly userPersistence: UserRepository,
        @inject('TokenProvider') private readonly tokenProvider: TokenProvider,
    ) {}

    public async execute(options: LogInUseCaseOptions) {
        const { email, rawPassword } = options;

        const user = await this.userPersistence.findByEmail(email);
        if (!user) throw new AccountException({ message: 'Invalid email or password' });

        const isValid = await this.encryptor.verify(rawPassword, user.toJSON().password!);
        if (!isValid) throw new AccountException({ message: 'Invalid email or password' });

        const token = this.tokenProvider.sign({ userId: user.toJSON().id, username: user.toJSON().name });

        return token;
    }
}
