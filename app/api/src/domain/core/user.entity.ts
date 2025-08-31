import ValidationException from '../exceptions/validation.exception';
import { v4 as uuidv4 } from 'uuid';
import type IEncryptor from '../interfaces/encryption.interface';
import Encryptor from '../../infrastructure/encryption/encryptor.interface';

export type CreateUserProps = {
    name: string;
    email: string;
    rawPassword: string;
    encryptor: IEncryptor;
}

export type RestoreUserProps = Omit<CreateUserProps, 'rawPassword'> & {
    id: string;
    password: string;
}

export default class User {
    private id!: string;
    public name!: string;
    public email!: string;
    private password!: string;
    private encryptor!: IEncryptor;

    private constructor() {}

    public static async create(props: CreateUserProps): Promise<User> {
        const { name, email, rawPassword, encryptor } = props;

        User.validateEmail(email);

        const id = uuidv4();

        const user = new User();

        Object.assign(user, {
            id,
            name,
            email,
            encryptor
        });

        await user.setPassword(rawPassword);

        return user;
    }

    public static restore(props: RestoreUserProps) {
        const { id, name, email, password } = props;

        const user = new User();

        Object.assign(user, {
            id,
            name,
            email,
            password,
        });

        return user;
    }

    public static verifyLogin(email: string, password: string): Promise<boolean> {
        // Implement login verification logic
        return new Promise((resolve) => {
            resolve(true);
        });
    }

    private static validateEmail(email: string): void {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            throw new ValidationException('Invalid email format', true, email);
        }
    }

    private async setPassword(rawPassword: string): Promise<void> {
        if (rawPassword.length < 8) {
            throw new ValidationException('Password must be at least 8 characters long', false);
        }

        this.password = await this.encryptor.hash(rawPassword);
    }
}