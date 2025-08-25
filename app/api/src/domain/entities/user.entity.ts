import ValidationException from "../exceptions/validation.exception";
import { v4 as uuidv4 } from "uuid";
import * as argon2 from "argon2";

export type CreateUserProps = {
    name: string;
    email: string;
    rawPassword: string;
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

    private constructor () {}

    public static async create ( props: CreateUserProps ): Promise<User> {
        const { name, email, rawPassword } = props;

        User.validateEmail(email);

        const id = uuidv4();

        const user = new User()

        Object.assign(user, {
            id,
            name,
            email
        });

        await user.setPassword(rawPassword);

        return user;
    }

    public static restore ( props: RestoreUserProps ) {
        const { id, name, email, password } = props;

        const user = new User()

        Object.assign(user, {
            id,
            name,
            email,
            password
        });

        return user;
    }

    private static validateEmail (email: string): void {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)){
            throw new ValidationException('Invalid email format', true, email);
        }
    }

    private async setPassword ( rawPassword: string ): Promise<void> {
        if (rawPassword.length < 8) {
            throw new ValidationException('Password must be at least 8 characters long', false);
        }

        this.password = await argon2.hash(rawPassword);
    }
}