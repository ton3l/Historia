import { ValidationException } from '@domain/exceptions/validation.exception';
import type { Encryptor } from '@domain/interfaces/encryptor.interface';
import { validateEmail } from '@domain/utils/validators';
import { v7 as uuidv7 } from 'uuid';

interface ConstructorOptions {
    id: string;
    name: string;
    email: string;
    password?: string;
}

export interface CreateUserOptions extends Omit<ConstructorOptions, 'id' | 'password' | 'id'> {
    rawPassword: string;
    encryptor: Encryptor;
}

export interface RestoreUserOptions extends ConstructorOptions {
    password: string;
}

export class User {
    public readonly id: string;
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
        validateEmail(email);

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
        User.validatePassword(rawPassword);
        this.password = await encryptor.hash(rawPassword);
    }

    public toJSON() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
        };
    }

    private static validateName(name: string): void {
        if (!name) {
            throw new ValidationException({ message: 'Name is required', showValue: true, value: name });
        }
        if (name.length < 4) {
            throw new ValidationException({ message: 'Name must be at least 4 characters long', showValue: true, value: name });
        }
    }

    private static validatePassword(password: string): void {
        if (!password) {
            throw new ValidationException({ message: 'Password is required', showValue: false });
        }
        if (password.length < 4) {
            throw new ValidationException({ message: 'Password must be at least 4 characters long', showValue: false });
        }
    }
}
