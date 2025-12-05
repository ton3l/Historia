import type { Encryptor } from '@domain/interfaces/encryptor.interface';
import { User } from '@domain/core/user.entity';
import { inject, injectable } from 'tsyringe';

export interface RegisterUseCaseOptions {
    username: string;
    email: string;
    rawPassword: string;
}

@injectable()
export class RegisterUseCase {
    constructor(@inject('Encryptor') private readonly encryptor: Encryptor) {}

    public execute(options: RegisterUseCaseOptions) {
        const { username, email, rawPassword } = options;

        const user = User.create({ name: username, email, rawPassword, encryptor: this.encryptor });
    }
}
