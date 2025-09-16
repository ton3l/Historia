import { ValidationException } from '../exceptions/validation.exception';
import type { Encryptor } from '../interfaces/encryptor.interface';
import { v7 as uuidv7 } from 'uuid'; // Trocar para uuidv7

export interface CreateUserOptions {
    name: string;
    email: string;
    rawPassword: string;
    encryptor: Encryptor;
}

export interface RestoreUserOptions extends Omit<CreateUserOptions, 'rawPassword'> {
    id: string;
    password: string;
}

interface ConstructorOptions {
    id: string;
    name: string;
    email: string;
    password?: string;
}

export class User {
    private id: string;
    public name: string;
    public email: string;
    private password?: string;

    private constructor(options: ConstructorOptions) {
        const { id, name, email, password } = options;
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public static async create(options: CreateUserOptions): Promise<User> {
        const { name, email, rawPassword, encryptor } = options;

        User.validateName(name);
        User.validateEmail(email);

        const id = uuidv7();

        const user = new User({
            id,
            name,
            email,
        });

        await user.setPassword(rawPassword, encryptor);

        return user;
    }

    public static restore(options: RestoreUserOptions) {
        const { id, name, email, password } = options;

        const user = new User({
            id,
            name,
            email,
            password,
        });

        return user;
    }

    private async setPassword(rawPassword: string, encryptor: Encryptor): Promise<void> {
        if (rawPassword.length < 8) {
            throw new ValidationException({message: 'Password must be at least 8 characters long', showValue: false});
        }

        this.password = await encryptor.hash(rawPassword);
    }

    private static validateName(name: string): void {
        if (!name) {
            throw new ValidationException({ message: 'Name is required', showValue: true, value: name});
        }
        if (name.length < 4) {
            throw new ValidationException({message: 'Name must be at least 4 characters long', showValue: true, value: name});
        }
    }

    private static validateEmail(email: string): void {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            throw new ValidationException({message: 'Invalid email format', showValue: true, value: email});
        }
    }
}
