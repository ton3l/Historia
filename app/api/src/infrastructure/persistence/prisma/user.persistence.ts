import type { IUserRepository } from '@domain/repositories/user.repository';
import { validateEmail, validateUUID } from '@domain/utils/validators';
import type { User } from '@domain/core/user.entity';
import { UserMapper } from './mappers/user.mapper';
import prisma from '@lib/prisma';

export class PrismaUserRepository implements IUserRepository {
    constructor() {}

    async create(user: User): Promise<User> {
        const userPersistence = UserMapper.toPersistence(user);

        return await prisma.users.create({ data: userPersistence });
    }

    async findByEmail(email: string): Promise<User | null> {
        validateEmail(email);

        return await prisma.users.findUnique({
            where: {
                email,
            },
        });
    }

    async findById(id: string): Promise<User | null> {
        validateUUID(id);

        return await prisma.users.findUnique({
            where: {
                id,
            },
        });
    }

    async update(user: User): Promise<User> {
        const userPersistence = UserMapper.toPersistence(user);

        return await prisma.users.update({
            where: {
                id: userPersistence.id,
            },
            data: userPersistence,
        });
    }

    async delete(id: string): Promise<boolean> {
        validateUUID(id);

        await prisma.users.delete({
            where: {
                id,
            },
        });

        return true;
    }
}
