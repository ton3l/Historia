import User from "../entities/user.entity";

export default interface UserRepository {
    create(user: User): Promise<User>;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    update(user: User): Promise<User>;
    delete(id: string): Promise<void>;
}
