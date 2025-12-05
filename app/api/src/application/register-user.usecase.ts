import type { UserRepository } from '@domain/repositories/user.repository';
import type { Encryptor } from '@domain/interfaces/encryptor.interface';
import { User } from '@domain/core/user.entity';
import { inject, injectable } from 'tsyringe';

export interface RegisterUseCaseOptions {
    username: string;
    email: string;
    rawPassword: string;
}

@injectable()
export class RegisterUserUseCase {
    constructor(
        @inject('Encryptor') private readonly encryptor: Encryptor,
        @inject('UserRepository') private readonly userPersistence: UserRepository,
    ) {}

    public async execute(options: RegisterUseCaseOptions) {
        const { username, email, rawPassword } = options;

        const user = await User.create({ name: username, email, rawPassword, encryptor: this.encryptor });

        return await this.userPersistence.create(user);
    }
}
