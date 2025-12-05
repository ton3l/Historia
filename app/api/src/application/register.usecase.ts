import { User } from '@domain/core/user.entity';
import type { Encryptor } from '@domain/interfaces/encryptor.interface';

export interface RegisterUseCaseOptions {
    username: string;
    email: string;
    rawPassword: string;
}

export class RegisterUseCase {
    private readonly encryptor: Encryptor;

    constructor(encryptor: Encryptor) {
        this.encryptor = encryptor;
    }

    public execute(options: RegisterUseCaseOptions) {
        const { username, email, rawPassword } = options;

        const user = User.create({ name: username, email, rawPassword, encryptor: this.encryptor });
    }
}
