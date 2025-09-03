import ValidationException from '../exceptions/validation.exception';
import type IEncryptor from '../interfaces/encryptor.interface';
import { v4 as uuidv4 } from 'uuid'; // Trocar para uuidv7

export type CreateUserOptions = {
    name: string;
    email: string;
    rawPassword: string;
    encryptor: IEncryptor;
};

export type RestoreUserOptions = Omit<CreateUserOptions, 'rawPassword'> & {
    id: string;
    password: string;
};

type ConstructorOptions = {
    id: string;
    name: string;
    email: string;
    password?: string;
};

export default class User {
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

        const id = uuidv4();

        const user = new User({
            id,
            name,
            email
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
            password
        });

        return user;
    }

    private async setPassword(rawPassword: string, encryptor: IEncryptor): Promise<void> {
        if (rawPassword.length < 8) {
            throw new ValidationException('Password must be at least 8 characters long', false);
        }

        this.password = await encryptor.hash(rawPassword);
    }

    private static verifyLogin(email: string, password: string): Promise<boolean> {
        // Implement login verification logic
        return new Promise((resolve) => {
            resolve(true);
        });
    }

    private static validateName(name: string): void {
        if (!name) {
            throw new ValidationException('Name is required', true, name);
        }
        if (name.length < 4) {
            throw new ValidationException('Name must be at least 4 characters long', true, name);
        }
    }

    private static validateEmail(email: string): void {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            throw new ValidationException('Invalid email format', true, email);
        }
    }
}
